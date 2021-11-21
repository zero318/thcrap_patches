typedef struct {
	void (*OnceFunc)(void);
	void* Destination;
	size_t Length;
} OnceFunc;
void __stdcall ZeroUtil_FuncRunOnce(register const OnceFunc *const Arg) {
	Arg->OnceFunc();
	memset(Arg->Destination, NOP, Arg->Length);
	return;
}

typedef struct {
	void (*OnceFunc)(int);
	void* Destination;
	size_t Length;
} OnceFuncVal;
void __stdcall ZeroUtil_FuncRunOnceVal(register const OnceFuncVal *const Arg, int Val) {
	Arg->OnceFunc(Val);
	memset(Arg->Destination, NOP, Arg->Length);
	return;
}

typedef struct {
	size_t (*ConditionFunc)(void);
	void* Destination;
	struct {
		void* Source;
		size_t Length;
	} Sources[];
} ConditionalReplace;
void __stdcall ZeroUtil_FuncReplaceRun(register const ConditionalReplace *const Arg) {
	register const size_t SourceIndex = Arg->ConditionFunc();
	memcpy(Destination, Arg->Sources[SourceIndex].Source, Arg->Sources[SourceIndex].Length);
	EBP = Destination;
	return;
}

typedef struct {
	size_t (*ConditionFunc)(int);
	void* Destination;
	struct {
		void* Source;
		size_t Length;
	} Sources[];
} ConditionalReplaceTestVal;
void __stdcall ZeroUtil_FuncReplaceRunTestVal(register const ConditionalReplaceTestVal *const Arg, int TestVal) {
	register const size_t SourceIndex = Arg->ConditionFunc(TestVal);
	memcpy(Destination, Arg->Sources[SourceIndex].Source, Arg->Sources[SourceIndex].Length);
	EBP = Destination;
	return;
}