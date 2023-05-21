{
	"options": {
		"custom_dll_path_str": {
			"type": "s",
			"val": "put_your_path_here"
		},

		"kernel32_dll_str": { "type": "s", "val": "kernel32.dll" },
		"LoadLibraryA_str": { "type": "s", "val": "LoadLibraryA" },
		"dll_inject_error_caption": { "type": "s", "val": "DLL Inject Error" },
		"dll_inject_error_message_a": { "type": "s", "val": "Failed to load DLL at path:\n\"%s\"\n\nGetLastError Code: 0x%X" },
		"dll_inject_error_message_b": { "type": "s", "val": "Could not find LoadLibraryA, cannot perform injection!" }
	},
	"codecaves": {
		"custom_dll_handle": {
			"access": "rw",
			"code": "FFFFFFFF"
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
74 65 \
68 <option:LoadLibraryA_str> \
50 \
E8 [th_GetProcAddress] \
85C0 \
74 56 \
89C6 \
31C0 \
<nop:10> \
80B8 <option:custom_dll_path_str> 00 \
8D40 01 \
75 F4 \
89E7 \
8D48 03 \
83E1 FC \
29CF \
89FC \
B9 5C000000 \
<nop:3> \
0FB690 (<option:custom_dll_path_str>-1) \
80FA 2F \
0F44D1 \
885407 FF \
48 \
75 EC \
57 \
FFD6 \
85C0 \
74 25 \
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
<int3:5> \
E8 [th_GetLastError] \
50 \
57 \
68 <option:dll_inject_error_message_a> \
6A 12 \
68 <option:dll_inject_error_caption> \
E8 [log_mboxf] \
83C4 14 \
83F8 04 \
74 B4 \
83F8 03 \
75 BB \
0F0B \
EB B7 \
"
		}
	}
}