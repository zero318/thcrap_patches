{
	"options": {
		"th175_disable_fullscreen": {
			"val": true,
		},
		"ugh": {
			"type": "s",
			"val": "GetModuleHandleExU"
		},
		"mod": {
			"type": "s",
			"val": "win32_utf8.dll"
		}
	},
	"codecaves": {
		"yeetus_patch_init": {
			"access": "re",
			"export": true,
			"code": "\
68 <option:mod> \
E8 [th_GetModuleHandleA] \
68 <option:ugh> \
50 \
E8 [th_GetProcAddress] \
50 \
68 <option:ugh> \
E8 [func_add] \
83C4 08 \
C3 \
"
		}
	},
	"binhacks": {
		"shut_up_about_untrusted_dlls": {
			"addr": "Rx3A60",
			"code": "\
C605 <Rx76000> 00 \
C2 0400 \
"
		},
		
		
		"test": {
			//"ignore": true,
			"addr": "(<GetModuleHandleExU>+0x5)",
			"code": "\
8B 75 0C F6 45 08 04 75 42 85 F6 74 3E 89 F7 8A\
06 46 84 C0 75 F9 29 FE 8D 04 36 89 75 0C 8D 48\
08 39 C8 19 C0 21 C8 74 42 3D 00 04 00 00 77 1D\
E8 86 5F 00 00 89 E6 85 F6 74 09 C7 06 CC CC 00\
00 83 C6 08 8B 55 0C EB 24 CC CC EB 4C\
"
		},
		"test2": {
			//"ignore": true,
			"addr": "(<GetModuleHandleExU>+0xB1)",
			"code": "\
F6 45 08 04 75 1D 85 F6 74 19 83 C6 F8 81 3E DD \
DD 00 00 75 0E 89 C7 56 FF 15 (<GetModuleHandleExU>+693C) 83 C4 \
04 89 F8 8D 65 F8 5F 5E 5D C2 0C 00 \
"
		},
	},
}