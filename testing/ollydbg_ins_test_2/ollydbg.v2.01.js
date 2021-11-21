{
	options: {
		"NULL":			{ type: "u32", val: 0 },
		
		"D_NONE":		{ type: "u32", val: 0x00000000 }, // No special features
	// General type of command, only one is allowed.
		"D_CMDTYPE":	{ type: "u32", val: 0x0000001F }, // Mask to extract type of command
		"D_CMD":		{ type: "u32", val: 0x00000000 }, // Ordinary (none of listed below)
		"D_MOV":		{ type: "u32", val: 0x00000001 }, // Move to or from integer register
		"D_MOVC":		{ type: "u32", val: 0x00000002 }, // Conditional move to integer register
		"D_SETC":		{ type: "u32", val: 0x00000003 }, // Conditional set integer register
		"D_TEST":		{ type: "u32", val: 0x00000004 }, // Used to test data (CMP, TEST, AND...)
		"D_STRING":		{ type: "u32", val: 0x00000005 }, // String command with REPxxx prefix
		"D_JMP":		{ type: "u32", val: 0x00000006 }, // Unconditional near jump
		"D_JMPFAR":		{ type: "u32", val: 0x00000007 }, // Unconditional far jump
		"D_JMC":		{ type: "u32", val: 0x00000008 }, // Conditional jump on flags
		"D_JMCX":		{ type: "u32", val: 0x00000009 }, // Conditional jump on (E)CX (and flags)
		"D_PUSH":		{ type: "u32", val: 0x0000000A }, // PUSH exactly 1 (d)word of data
		"D_POP":		{ type: "u32", val: 0x0000000B }, // POP exactly 1 (d)word of data
		"D_CALL":		{ type: "u32", val: 0x0000000C }, // Plain near call
		"D_CALLFAR":	{ type: "u32", val: 0x0000000D }, // Far call
		"D_INT":		{ type: "u32", val: 0x0000000E }, // Interrupt
		"D_RET":		{ type: "u32", val: 0x0000000F }, // Plain near return from call
		"D_RETFAR":		{ type: "u32", val: 0x00000010 }, // Far return or IRET
		"D_FPU":		{ type: "u32", val: 0x00000011 }, // FPU command
		"D_MMX":		{ type: "u32", val: 0x00000012 }, // MMX instruction, incl. SSE extensions
		"D_3DNOW":		{ type: "u32", val: 0x00000013 }, // 3DNow! instruction
		"D_SSE":		{ type: "u32", val: 0x00000014 }, // SSE instruction
		"D_IO":			{ type: "u32", val: 0x00000015 }, // Accesses I/O ports
		"D_SYS":		{ type: "u32", val: 0x00000016 }, // Legal but useful in system code only
		"D_PRIVILEGED":	{ type: "u32", val: 0x00000017 }, // Privileged (non-Ring3) command
		"D_AVX":		{ type: "u32", val: 0x00000018 }, // AVX instruction
		"D_XOP":		{ type: "u32", val: 0x00000019 }, // AMD instruction with XOP prefix
		"D_DATA":		{ type: "u32", val: 0x0000001C }, // Data recognized by Analyser
		"D_PSEUDO":		{ type: "u32", val: 0x0000001D }, // Pseudocommand, for search models only
		"D_PREFIX":		{ type: "u32", val: 0x0000001E }, // Standalone prefix
		"D_BAD":		{ type: "u32", val: 0x0000001F }, // Bad or unrecognized command
	// Additional parts of the command.
		"D_SIZE01":		{ type: "u32", val: 0x00000020 }, // Bit 0x01 in last cmd is data size
		"D_POSTBYTE":	{ type: "u32", val: 0x00000040 }, // Command continues in postbyte
	// For string commands, either long or short form can be selected.
		"D_LONGFORM":	{ type: "u32", val: 0x00000080 }, // Long form of string command
	// Decoding of some commands depends on data or address size.
		"D_SIZEMASK":	{ type: "u32", val: 0x00000F00 }, // Mask for data/address size dependence
		"D_DATA16":		{ type: "u32", val: 0x00000100 }, // Requires 16-bit data size
		"D_DATA32":		{ type: "u32", val: 0x00000200 }, // Requires 32-bit data size
		"D_ADDR16":		{ type: "u32", val: 0x00000400 }, // Requires 16-bit address size
		"D_ADDR32":		{ type: "u32", val: 0x00000800 }, // Requires 32-bit address size
	// Prefixes that command may, must or must not possess.
		"D_MUSTMASK":	{ type: "u32", val: 0x0000F000 }, // Mask for fixed set of prefixes
		"D_NOMUST":		{ type: "u32", val: 0x00000000 }, // No obligatory prefixes (default)
		"D_MUST66":		{ type: "u32", val: 0x00001000 }, // (SSE,AVX) Requires 66, no F2 or F3
		"D_MUSTF2":		{ type: "u32", val: 0x00002000 }, // (SSE,AVX) Requires F2, no 66 or F3
		"D_MUSTF3":		{ type: "u32", val: 0x00003000 }, // (SSE,AVX) Requires F3, no 66 or F2
		"D_MUSTNONE":	{ type: "u32", val: 0x00004000 }, // (MMX,SSE,AVX) Requires no 66, F2, F3
		"D_NEEDF2":		{ type: "u32", val: 0x00005000 }, // (SSE,AVX) Requires F2, no F3
		"D_NEEDF3":		{ type: "u32", val: 0x00006000 }, // (SSE,AVX) Requires F3, no F2
		"D_NOREP":		{ type: "u32", val: 0x00007000 }, // Must not include F2 or F3
		"D_MUSTREP":	{ type: "u32", val: 0x00008000 }, // Must include F3 (REP)
		"D_MUSTREPE":	{ type: "u32", val: 0x00009000 }, // Must include F3 (REPE)
		"D_MUSTREPNE":	{ type: "u32", val: 0x0000A000 }, // Must include F2 (REPNE)
		"D_LOCKABLE":	{ type: "u32", val: 0x00010000 }, // Allows for F0 (LOCK, memory only)
		"D_BHINT":		{ type: "u32", val: 0x00020000 }, // Allows for branch hints (2E, 3E)
	// Decoding of some commands with ModRM-SIB depends whether register or memory.
		"D_MEMORY":		{ type: "u32", val: 0x00040000 }, // Mod field must indicate memory
		"D_REGISTER":	{ type: "u32", val: 0x00080000 }, // Mod field must indicate register
	// Side effects caused by command.
		"D_FLAGMASK":	{ type: "u32", val: 0x00700000 }, // Mask to extract modified flags
		"D_NOFLAGS":	{ type: "u32", val: 0x00000000 }, // Flags S,Z,P,O,C remain unchanged
		"D_ALLFLAGS":	{ type: "u32", val: 0x00100000 }, // Modifies flags S,Z,P,O,C
		"D_FLAGZ":		{ type: "u32", val: 0x00200000 }, // Modifies flag Z only
		"D_FLAGC":		{ type: "u32", val: 0x00300000 }, // Modifies flag C only
		"D_FLAGSCO":	{ type: "u32", val: 0x00400000 }, // Modifies flag C and O only
		"D_FLAGD":		{ type: "u32", val: 0x00500000 }, // Modifies flag D only
		"D_FLAGSZPC":	{ type: "u32", val: 0x00600000 }, // Modifies flags Z, P and C only (FPU)
		"D_NOCFLAG":	{ type: "u32", val: 0x00700000 }, // S,Z,P,O modified, C unaffected
		"D_FPUMASK":	{ type: "u32", val: 0x01800000 }, // Mask for effects on FPU stack
		"D_FPUSAME":	{ type: "u32", val: 0x00000000 }, // Doesn't rotate FPU stack (default)
		"D_FPUPOP":		{ type: "u32", val: 0x00800000 }, // Pops FPU stack
		"D_FPUPOP2":	{ type: "u32", val: 0x01000000 }, // Pops FPU stack twice
		"D_FPUPUSH":	{ type: "u32", val: 0x01800000 }, // Pushes FPU stack
		"D_CHGESP":		{ type: "u32", val: 0x02000000 }, // Command indirectly modifies ESP
	// Command features.
		"D_HLADIR":		{ type: "u32", val: 0x04000000 }, // Nonstandard order of operands in HLA
		"D_WILDCARD":	{ type: "u32", val: 0x08000000 }, // Mnemonics contains W/D wildcard ('*')
		"D_COND":		{ type: "u32", val: 0x10000000 }, // Conditional (action depends on flags)
		"D_USESCARRY":	{ type: "u32", val: 0x20000000 }, // Uses Carry flag
		"D_USEMASK":	{ type: "u32", val: 0xC0000000 }, // Mask to detect unusual commands
		"D_RARE":		{ type: "u32", val: 0x40000000 }, // Rare or obsolete in Win32 apps
		"D_SUSPICIOUS":	{ type: "u32", val: 0x80000000 }, // Suspicious command
		"D_UNDOC":		{ type: "u32", val: 0xC0000000 }, // Undocumented command
		
		"DX_NONE":		{ type: "u32", val: 0x00000000 }, // No special features
	// Extension of D_xxx.
		"DX_ZEROMASK":	{ type: "u32", val: 0x00000003 }, // How to decode FLAGS.Z flag
		"DX_JE":		{ type: "u32", val: 0x00000001 }, // JE, JNE instead of JZ, JNZ
		"DX_JZ":		{ type: "u32", val: 0x00000002 }, // JZ, JNZ instead of JE, JNE
		"DX_CARRYMASK":	{ type: "u32", val: 0x0000000C }, // How to decode FLAGS.C flag
		"DX_JB":		{ type: "u32", val: 0x00000004 }, // JAE, JB instead of JC, JNC
		"DX_JC":		{ type: "u32", val: 0x00000008 }, // JC, JNC instead of JAE, JB
		"DX_RETN":		{ type: "u32", val: 0x00000010 }, // The mnemonics is RETN
		"DX_VEX":		{ type: "u32", val: 0x00000100 }, // Requires VEX prefix
		"DX_VLMASK":	{ type: "u32", val: 0x00000600 }, // Mask to extract VEX operand length
		"DX_LSHORT":	{ type: "u32", val: 0x00000000 }, // 128-bit only
		"DX_LBOTH":		{ type: "u32", val: 0x00000200 }, // Both 128- and 256-bit versions
		"DX_LLONG":		{ type: "u32", val: 0x00000400 }, // 256-bit only
		"DX_IGNOREL":	{ type: "u32", val: 0x00000600 }, // Ignore VEX.L
		"DX_NOVREG":	{ type: "u32", val: 0x00000800 }, // VEX.vvvv must be set to all 1's
		"DX_VWMASK":	{ type: "u32", val: 0x00003000 }, // Mask to extract VEX.W
		"DX_W0":		{ type: "u32", val: 0x00001000 }, // VEX.W must be 0
		"DX_W1":		{ type: "u32", val: 0x00002000 }, // VEX.W must be 1
		"DX_LEADMASK":	{ type: "u32", val: 0x00070000 }, // Mask to extract leading opcode bytes
		"DX_LEAD0F":	{ type: "u32", val: 0x00000000 }, // Implied 0F leading byte (default)
		"DX_LEAD38":	{ type: "u32", val: 0x00010000 }, // Implied 0F 38 leading opcode bytes
		"DX_LEAD3A":	{ type: "u32", val: 0x00020000 }, // Implied 0F 3A leading opcode bytes
		"DX_WONKYTRAP":	{ type: "u32", val: 0x00800000 }, // Don't single-step this command
		"DX_TYPEMASK":	{ type: "u32", val: 0xFF000000 }, // Precised command type mask
		"DX_ADD":		{ type: "u32", val: 0x01000000 }, // The command is integer ADD
		"DX_SUB":		{ type: "u32", val: 0x02000000 }, // The command is integer SUB
		"DX_LEA":		{ type: "u32", val: 0x03000000 }, // The command is LEA
		"DX_NOP":		{ type: "u32", val: 0x04000000 }, // The command is NOP
		
	// Type of operand, only one is allowed. Size of SSE operands is given for the
	// case of 128-bit operations and usually doubles for 256-bit AVX commands. If
	// B_NOVEXSIZE is set, memory may double but XMM registers are not promoted to
	// YMM.
		"B_ARGMASK":	{ type: "u32", val: 0x000000FF }, // Mask to extract type of argument
		"B_NONE":		{ type: "u32", val: 0x00000000 }, // Operand absent
		"B_AL":			{ type: "u32", val: 0x00000001 }, // Register AL
		"B_AH":			{ type: "u32", val: 0x00000002 }, // Register AH
		"B_AX":			{ type: "u32", val: 0x00000003 }, // Register AX
		"B_CL":			{ type: "u32", val: 0x00000004 }, // Register CL
		"B_CX":			{ type: "u32", val: 0x00000005 }, // Register CX
		"B_DX":			{ type: "u32", val: 0x00000006 }, // Register DX
		"B_DXPORT":		{ type: "u32", val: 0x00000007 }, // Register DX as I/O port address
		"B_EAX":		{ type: "u32", val: 0x00000008 }, // Register EAX
		"B_EBX":		{ type: "u32", val: 0x00000009 }, // Register EBX
		"B_ECX":		{ type: "u32", val: 0x0000000A }, // Register ECX
		"B_EDX":		{ type: "u32", val: 0x0000000B }, // Register EDX
		"B_ACC":		{ type: "u32", val: 0x0000000C }, // Accumulator (AL/AX/EAX)
		"B_STRCNT":		{ type: "u32", val: 0x0000000D }, // Register CX or ECX as REPxx counter
		"B_DXEDX":		{ type: "u32", val: 0x0000000E }, // Register DX or EDX in DIV/MUL
		"B_BPEBP":		{ type: "u32", val: 0x0000000F }, // Register BP or EBP in ENTER/LEAVE
		"B_REG":		{ type: "u32", val: 0x00000010 }, // 8/16/32-bit register in Reg
		"B_REG16":		{ type: "u32", val: 0x00000011 }, // 16-bit register in Reg
		"B_REG32":		{ type: "u32", val: 0x00000012 }, // 32-bit register in Reg
		"B_REGCMD":		{ type: "u32", val: 0x00000013 }, // 16/32-bit register in last cmd byte
		"B_REGCMD8":	{ type: "u32", val: 0x00000014 }, // 8-bit register in last cmd byte
		"B_ANYREG":		{ type: "u32", val: 0x00000015 }, // Reg field is unused, any allowed
		"B_INT":		{ type: "u32", val: 0x00000016 }, // 8/16/32-bit register/memory in ModRM
		"B_INT8":		{ type: "u32", val: 0x00000017 }, // 8-bit register/memory in ModRM
		"B_INT16":		{ type: "u32", val: 0x00000018 }, // 16-bit register/memory in ModRM
		"B_INT32":		{ type: "u32", val: 0x00000019 }, // 32-bit register/memory in ModRM
		"B_INT1632":	{ type: "u32", val: 0x0000001A }, // 16/32-bit register/memory in ModRM
		"B_INT64":		{ type: "u32", val: 0x0000001B }, // 64-bit integer in ModRM, memory only
		"B_INT128":		{ type: "u32", val: 0x0000001C }, // 128-bit integer in ModRM, memory only
		"B_IMMINT":		{ type: "u32", val: 0x0000001D }, // 8/16/32-bit int at immediate addr
		"B_INTPAIR":	{ type: "u32", val: 0x0000001E }, // Two signed 16/32 in ModRM, memory only
		"B_SEGOFFS":	{ type: "u32", val: 0x0000001F }, // 16:16/16:32 absolute address in memory
		"B_STRDEST":	{ type: "u32", val: 0x00000020 }, // 8/16/32-bit string dest, [ES:(E)DI]
		"B_STRDEST8":	{ type: "u32", val: 0x00000021 }, // 8-bit string destination, [ES:(E)DI]
		"B_STRSRC":		{ type: "u32", val: 0x00000022 }, // 8/16/32-bit string source, [(E)SI]
		"B_STRSRC8":	{ type: "u32", val: 0x00000023 }, // 8-bit string source, [(E)SI]
		"B_XLATMEM":	{ type: "u32", val: 0x00000024 }, // 8-bit memory in XLAT, [(E)BX+AL]
		"B_EAXMEM":		{ type: "u32", val: 0x00000025 }, // Reference to memory addressed by [EAX]
		"B_LONGDATA":	{ type: "u32", val: 0x00000026 }, // Long data in ModRM, mem only
		"B_ANYMEM":		{ type: "u32", val: 0x00000027 }, // Reference to memory, data unimportant
		"B_STKTOP":		{ type: "u32", val: 0x00000028 }, // 16/32-bit int top of stack
		"B_STKTOPFAR":	{ type: "u32", val: 0x00000029 }, // Top of stack (16:16/16:32 far addr)
		"B_STKTOPEFL":	{ type: "u32", val: 0x0000002A }, // 16/32-bit flags on top of stack
		"B_STKTOPA":	{ type: "u32", val: 0x0000002B }, // 16/32-bit top of stack all registers
		"B_PUSH":		{ type: "u32", val: 0x0000002C }, // 16/32-bit int push to stack
		"B_PUSHRET":	{ type: "u32", val: 0x0000002D }, // 16/32-bit push of return address
		"B_PUSHRETF":	{ type: "u32", val: 0x0000002E }, // 16:16/16:32-bit push of far retaddr
		"B_PUSHA":		{ type: "u32", val: 0x0000002F }, // 16/32-bit push all registers
		"B_EBPMEM":		{ type: "u32", val: 0x00000030 }, // 16/32-bit int at [EBP]
		"B_SEG":		{ type: "u32", val: 0x00000031 }, // Segment register in Reg
		"B_SEGNOCS":	{ type: "u32", val: 0x00000032 }, // Segment register in Reg, but not CS
		"B_SEGCS":		{ type: "u32", val: 0x00000033 }, // Segment register CS
		"B_SEGDS":		{ type: "u32", val: 0x00000034 }, // Segment register DS
		"B_SEGES":		{ type: "u32", val: 0x00000035 }, // Segment register ES
		"B_SEGFS":		{ type: "u32", val: 0x00000036 }, // Segment register FS
		"B_SEGGS":		{ type: "u32", val: 0x00000037 }, // Segment register GS
		"B_SEGSS":		{ type: "u32", val: 0x00000038 }, // Segment register SS
		"B_ST":			{ type: "u32", val: 0x00000039 }, // 80-bit FPU register in last cmd byte
		"B_ST0":		{ type: "u32", val: 0x0000003A }, // 80-bit FPU register ST0
		"B_ST1":		{ type: "u32", val: 0x0000003B }, // 80-bit FPU register ST1
		"B_FLOAT32":	{ type: "u32", val: 0x0000003C }, // 32-bit float in ModRM, memory only
		"B_FLOAT64":	{ type: "u32", val: 0x0000003D }, // 64-bit float in ModRM, memory only
		"B_FLOAT80":	{ type: "u32", val: 0x0000003E }, // 80-bit float in ModRM, memory only
		"B_BCD":		{ type: "u32", val: 0x0000003F }, // 80-bit BCD in ModRM, memory only
		"B_MREG8x8":	{ type: "u32", val: 0x00000040 }, // MMX register as 8 8-bit integers
		"B_MMX8x8":		{ type: "u32", val: 0x00000041 }, // MMX reg/memory as 8 8-bit integers
		"B_MMX8x8DI":	{ type: "u32", val: 0x00000042 }, // MMX 8 8-bit integers at [DS:(E)DI]
		"B_MREG16x4":	{ type: "u32", val: 0x00000043 }, // MMX register as 4 16-bit integers
		"B_MMX16x4":	{ type: "u32", val: 0x00000044 }, // MMX reg/memory as 4 16-bit integers
		"B_MREG32x2":	{ type: "u32", val: 0x00000045 }, // MMX register as 2 32-bit integers
		"B_MMX32x2":	{ type: "u32", val: 0x00000046 }, // MMX reg/memory as 2 32-bit integers
		"B_MREG64":		{ type: "u32", val: 0x00000047 }, // MMX register as 1 64-bit integer
		"B_MMX64":		{ type: "u32", val: 0x00000048 }, // MMX reg/memory as 1 64-bit integer
		"B_3DREG":		{ type: "u32", val: 0x00000049 }, // 3DNow! register as 2 32-bit floats
		"B_3DNOW":		{ type: "u32", val: 0x0000004A }, // 3DNow! reg/memory as 2 32-bit floats
		"B_XMM0I32x4":	{ type: "u32", val: 0x0000004B }, // XMM0 as 4 32-bit integers
		"B_XMM0I64x2":	{ type: "u32", val: 0x0000004C }, // XMM0 as 2 64-bit integers
		"B_XMM0I8x16":	{ type: "u32", val: 0x0000004D }, // XMM0 as 16 8-bit integers
		"B_SREGF32x4":	{ type: "u32", val: 0x0000004E }, // SSE register as 4 32-bit floats
		"B_SREGF32L":	{ type: "u32", val: 0x0000004F }, // Low 32-bit float in SSE register
		"B_SREGF32x2L":	{ type: "u32", val: 0x00000050 }, // Low 2 32-bit floats in SSE register
		"B_SSEF32x4":	{ type: "u32", val: 0x00000051 }, // SSE reg/memory as 4 32-bit floats
		"B_SSEF32L":	{ type: "u32", val: 0x00000052 }, // Low 32-bit float in SSE reg/memory
		"B_SSEF32x2L":	{ type: "u32", val: 0x00000053 }, // Low 2 32-bit floats in SSE reg/memory
		"B_SREGF64x2":	{ type: "u32", val: 0x00000054 }, // SSE register as 2 64-bit floats
		"B_SREGF64L":	{ type: "u32", val: 0x00000055 }, // Low 64-bit float in SSE register
		"B_SSEF64x2":	{ type: "u32", val: 0x00000056 }, // SSE reg/memory as 2 64-bit floats
		"B_SSEF64L":	{ type: "u32", val: 0x00000057 }, // Low 64-bit float in SSE reg/memory
		"B_SREGI8x16":	{ type: "u32", val: 0x00000058 }, // SSE register as 16 8-bit sigints
		"B_SSEI8x16":	{ type: "u32", val: 0x00000059 }, // SSE reg/memory as 16 8-bit sigints
		"B_SSEI8x16DI":	{ type: "u32", val: 0x0000005A }, // SSE 16 8-bit sigints at [DS:(E)DI]
		"B_SSEI8x8L":	{ type: "u32", val: 0x0000005B }, // Low 8 8-bit ints in SSE reg/memory
		"B_SSEI8x4L":	{ type: "u32", val: 0x0000005C }, // Low 4 8-bit ints in SSE reg/memory
		"B_SSEI8x2L":	{ type: "u32", val: 0x0000005D }, // Low 2 8-bit ints in SSE reg/memory
		"B_SREGI16x8":	{ type: "u32", val: 0x0000005E }, // SSE register as 8 16-bit sigints
		"B_SSEI16x8":	{ type: "u32", val: 0x0000005F }, // SSE reg/memory as 8 16-bit sigints
		"B_SSEI16x4L":	{ type: "u32", val: 0x00000060 }, // Low 4 16-bit ints in SSE reg/memory
		"B_SSEI16x2L":	{ type: "u32", val: 0x00000061 }, // Low 2 16-bit ints in SSE reg/memory
		"B_SREGI32x4":	{ type: "u32", val: 0x00000062 }, // SSE register as 4 32-bit sigints
		"B_SREGI32L":	{ type: "u32", val: 0x00000063 }, // Low 32-bit sigint in SSE register
		"B_SREGI32x2L":	{ type: "u32", val: 0x00000064 }, // Low 2 32-bit sigints in SSE register
		"B_SSEI32x4":	{ type: "u32", val: 0x00000065 }, // SSE reg/memory as 4 32-bit sigints
		"B_SSEI32x2L":	{ type: "u32", val: 0x00000066 }, // Low 2 32-bit sigints in SSE reg/memory
		"B_SREGI64x2":	{ type: "u32", val: 0x00000067 }, // SSE register as 2 64-bit sigints
		"B_SSEI64x2":	{ type: "u32", val: 0x00000068 }, // SSE reg/memory as 2 64-bit sigints
		"B_SREGI64L":	{ type: "u32", val: 0x00000069 }, // Low 64-bit sigint in SSE register
		"B_EFL":		{ type: "u32", val: 0x0000006A }, // Flags register EFL
		"B_FLAGS8":		{ type: "u32", val: 0x0000006B }, // Flags (low byte)
		"B_OFFSET":		{ type: "u32", val: 0x0000006C }, // 16/32 const offset from next command
		"B_BYTEOFFS":	{ type: "u32", val: 0x0000006D }, // 8-bit sxt const offset from next cmd
		"B_FARCONST":	{ type: "u32", val: 0x0000006E }, // 16:16/16:32 absolute address constant
		"B_DESCR":		{ type: "u32", val: 0x0000006F }, // 16:32 descriptor in ModRM
		"B_1":			{ type: "u32", val: 0x00000070 }, // Immediate constant 1
		"B_CONST8":		{ type: "u32", val: 0x00000071 }, // Immediate 8-bit constant
		"B_CONST8_2":	{ type: "u32", val: 0x00000072 }, // Immediate 8-bit const, second in cmd
		"B_CONST16":	{ type: "u32", val: 0x00000073 }, // Immediate 16-bit constant
		"B_CONST":		{ type: "u32", val: 0x00000074 }, // Immediate 8/16/32-bit constant
		"B_CONSTL":		{ type: "u32", val: 0x00000075 }, // Immediate 16/32-bit constant
		"B_SXTCONST":	{ type: "u32", val: 0x00000076 }, // Immediate 8-bit sign-extended to size
		"B_CR":			{ type: "u32", val: 0x00000077 }, // Control register in Reg
		"B_CR0":		{ type: "u32", val: 0x00000078 }, // Control register CR0
		"B_DR":			{ type: "u32", val: 0x00000079 }, // Debug register in Reg
		"B_FST":		{ type: "u32", val: 0x0000007A }, // FPU status register
		"B_FCW":		{ type: "u32", val: 0x0000007B }, // FPU control register
		"B_MXCSR":		{ type: "u32", val: 0x0000007C }, // SSE media control and status register
		"B_SVEXF32x4":	{ type: "u32", val: 0x0000007D }, // SSE reg in VEX as 4 32-bit floats
		"B_SVEXF32L":	{ type: "u32", val: 0x0000007E }, // Low 32-bit float in SSE in VEX
		"B_SVEXF64x2":	{ type: "u32", val: 0x0000007F }, // SSE reg in VEX as 2 64-bit floats
		"B_SVEXF64L":	{ type: "u32", val: 0x00000080 }, // Low 64-bit float in SSE in VEX
		"B_SVEXI8x16":	{ type: "u32", val: 0x00000081 }, // SSE reg in VEX as 16 8-bit sigints
		"B_SVEXI16x8":	{ type: "u32", val: 0x00000082 }, // SSE reg in VEX as 8 16-bit sigints
		"B_SVEXI32x4":	{ type: "u32", val: 0x00000083 }, // SSE reg in VEX as 4 32-bit sigints
		"B_SVEXI64x2":	{ type: "u32", val: 0x00000084 }, // SSE reg in VEX as 2 64-bit sigints
		"B_SIMMI8x16":	{ type: "u32", val: 0x00000085 }, // SSE reg in immediate 8-bit constant
	// Type modifiers, used for interpretation of contents, only one is allowed.
		"B_MODMASK":	{ type: "u32", val: 0x000F0000 }, // Mask to extract type modifier
		"B_NONSPEC":	{ type: "u32", val: 0x00000000 }, // Non-specific operand
		"B_UNSIGNED":	{ type: "u32", val: 0x00010000 }, // Decode as unsigned decimal
		"B_SIGNED":		{ type: "u32", val: 0x00020000 }, // Decode as signed decimal
		"B_BINARY":		{ type: "u32", val: 0x00030000 }, // Decode as binary (full hex) data
		"B_BITCNT":		{ type: "u32", val: 0x00040000 }, // Bit count
		"B_SHIFTCNT":	{ type: "u32", val: 0x00050000 }, // Shift count
		"B_COUNT":		{ type: "u32", val: 0x00060000 }, // General-purpose count
		"B_NOADDR":		{ type: "u32", val: 0x00070000 }, // Not an address
		"B_JMPCALL":	{ type: "u32", val: 0x00080000 }, // Near jump/call/return destination
		"B_JMPCALLFAR":	{ type: "u32", val: 0x00090000 }, // Far jump/call/return destination
		"B_STACKINC":	{ type: "u32", val: 0x000A0000 }, // Unsigned stack increment/decrement
		"B_PORT":		{ type: "u32", val: 0x000B0000 }, // I/O port
		"B_ADDR":		{ type: "u32", val: 0x000F0000 }, // Used internally
	// Validity markers.
		"B_MEMORY":		{ type: "u32", val: 0x00100000 }, // Memory only, reg version different
		"B_REGISTER":	{ type: "u32", val: 0x00200000 }, // Register only, mem version different
		"B_MEMONLY":	{ type: "u32", val: 0x00400000 }, // Warn if operand in register
		"B_REGONLY":	{ type: "u32", val: 0x00800000 }, // Warn if operand in memory
		"B_32BITONLY":	{ type: "u32", val: 0x01000000 }, // Warn if 16-bit operand
		"B_NOESP":		{ type: "u32", val: 0x02000000 }, // ESP is not allowed
	// Miscellaneous options.
		"B_NOVEXSIZE":	{ type: "u32", val: 0x04000000 }, // Always 128-bit SSE in 256-bit AVX
		"B_SHOWSIZE":	{ type: "u32", val: 0x08000000 }, // Always show argument size in disasm
		"B_CHG":		{ type: "u32", val: 0x10000000 }, // Changed, old contents is not used
		"B_UPD":		{ type: "u32", val: 0x20000000 }, // Modified using old contents
		"B_PSEUDO":		{ type: "u32", val: 0x40000000 }, // Pseoudooperand, not in assembler cmd
		"B_NOSEG":		{ type: "u32", val: 0x80000000 }, // Don't add offset of selector
		
		
		LONG_NOP_WSTR: {
			type: "w",
			val: "LONG_NOP"
		}
	},
	binhacks: {
		"LONG_NOP_ALT_NAME": {
			addr: "RxF7ADC",
			code: "<option:LONG_NOP_WSTR>",
			expected: "<Rx1094A4>",
			ignore: true
		},
		"LONG_NOP_SHOW_SIZE": {
			addr: "RxF7AF8",
			code: "(<option:B_INT> | <option:B_SHOWSIZE>)",
			expected: "<option:B_INT>"
		}
	}
}