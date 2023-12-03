{
	"options": {
		"custom_dll_path_str": {
			"type": "w",
			"val": "F:\\Users\\zero318\\Source\\Repos\\ClangAsmTest1\\out\\build\\x86-Clang-Release-Debug\\python_test.dll"
		},
        
        "python_string_func": {
            "type": "s",
            "val": "run_string"
        },
        "python_string": {
            "type": "s",
            "val": "exec(open(\"F:\\Users\\zero318\\Source\\Repos\\parakit\\parakit.py\").read())"
        },

		"kernel32_dll_str": { "type": "s", "val": "kernel32.dll" },
		"LoadLibraryW_str": { "type": "s", "val": "LoadLibraryW" },
		"dll_inject_error_caption": { "type": "s", "val": "DLL Inject Error" },
		"dll_inject_error_message_a": { "type": "s", "val": "Failed to load DLL at path:\n\"%ls\"\n\nGetLastError Code: 0x%X" },
		"dll_inject_error_message_b": { "type": "s", "val": "Could not find LoadLibraryW, cannot perform injection!" }
	},
	"codecaves": {
		"custom_dll_handle": {
			"access": "rw",
			"code": "FFFFFFFF"
		},
        "run_python_thing_patch_post_init": {
            "access": "re",
            "export": true,
            "code": "\
68 <option:python_string_func> \
FF35 <codecave:custom_dll_handle> \
E8 [th_GetProcAddress] \
B9 <option:python_string> \
FFE0 \
"
        },
		"inject_custom_dll_patch_init": {
			"access": "re",
			"export": true,
			"code": "\
55 \
89E5 \
57 \
56 \
68 <option:kernel32_dll_str> \
E8 [th_GetModuleHandleA] \
85C0 \
74 69 \
68 <option:LoadLibraryW_str> \
50 \
E8 [th_GetProcAddress] \
85C0 \
74 5A \
89C6 \
31C0 \
<nop:10> \
66:83B8 <option:custom_dll_path_str> 00 \
8D40 02 \
75 F3 \
89E7 \
8D48 03 \
83E1 FC \
29CF \
89FC \
B9 5C000000 \
<nop:2> \
0FB790 (<option:custom_dll_path_str>-2) \
66:83FA 2F \
0F44D1 \
66:895407 FE \
83C0 FE \
75 E8 \
57 \
FFD6 \
85C0 \
74 21 \
A3 <codecave:custom_dll_handle> \
8D65 F8 \
5E \
5F \
5D \
C3 \
CC \
68 <option:dll_inject_error_message_b> \
6A 10 \
68 <option:dll_inject_error_caption> \
E8 [log_mbox] \
EB E5 \
CC \
E8 [th_GetLastError] \
50 \
57 \
68 <option:dll_inject_error_message_a> \
6A 12 \
68 <option:dll_inject_error_caption> \
E8 [log_mboxf] \
83C4 14 \
83F8 04 \
74 B8 \
83F8 03 \
75 BF \
0F0B \
EB BB \
"
		}
	}
}