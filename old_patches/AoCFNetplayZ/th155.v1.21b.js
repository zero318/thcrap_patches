{
	"options": {
		"kernel32_dll_wstr": { "type": "w", "val": "kernel32.dll" },
		"WS3_32_dll_wstr": { "type": "w", "val": "WS2_32.dll" },
		"Netplay_dll_wstr": { "type": "w", "val": "Netplay.dll" },
		"Netcode_dll_wstr": { "type": "w", "val": "Netcode.dll" },
		"WSASendTo_str": { "type": "s", "val": "WSASendTo" },
		"VirtualProtect_str": { "type": "s", "val": "VirtualProtect" },
	},
	"codecaves": {
		"netplayz_data": {
			"access": "rw",
			"size": 544
		},
		"netplayz_patch_init": {
			"access": "re",
			"export": true,
			"code": "\
57 \
56 \
50 \
68 <option:Netplay_dll_wstr> \
E8 [th_GetModuleHandleW] \
85C0 \
0F85 20010000 \
68 <option:Netcode_dll_wstr> \
E8 [th_GetModuleHandleW] \
85C0 \
0F85 0E010000 \
E8 [runconfig_title_get] \
89C7 \
50 \
E8 [th_strlen] \
83C4 04 \
3D FF010000 \
77 40 \
89C6 \
50 \
57 \
68 (<codecave:netplayz_data>+32) \
E8 [th_memcpy] \
83C4 0C \
81FE F4010000 \
77 21 \
C786 (<codecave:netplayz_data>+40) 347A2000 \
C786 (<codecave:netplayz_data>+36) 20312E30 \
C786 (<codecave:netplayz_data>+32) 202B204E \
83C6 0B \
8935 (<codecave:netplayz_data>+16) \
68 <option:WS3_32_dll_wstr> \
E8 [th_GetModuleHandleW] \
68 <option:WSASendTo_str> \
50 \
E8 [th_GetProcAddress] \
A3 <codecave:netplayz_data> \
68 <option:kernel32_dll_wstr> \
E8 [th_GetModuleHandleW] \
68 <option:VirtualProtect_str> \
50 \
E8 [th_GetProcAddress] \
89C6 \
A3 (<codecave:netplayz_data>+4) \
89E7 \
57 \
6A 04 \
6A 04 \
68 <Rx3884D4> \
FFD0 \
85C0 \
74 18 \
C705 <Rx3884D4> <codecave:WSASendTo_hook> \
57 \
FF7424 04 \
6A 04 \
68 <Rx3884D4> \
FFD6 \
57 \
6A 04 \
6A 04 \
68 <Rx176B8A> \
FFD6 \
85C0 \
74 18 \
C705 <Rx176B8A> (<codecave:packet_parser_hook>-<Rx176B8A>-4) \
57 \
FF7424 04 \
6A 04 \
68 <Rx176B8A> \
FFD6 \
57 \
6A 04 \
6A 05 \
68 <RxEA51> \
FFD6 \
85C0 \
74 1F \
C605 <RxEA51> 68 \
C705 <RxEA52> (<codecave:netplayz_data>+32) \
57 \
FF7424 04 \
6A 05 \
68 <RxEA51> \
FFD6 \
83C4 04 \
5E \
5F \
C3 \
"
		},
		"black_screen_fix_lock": {
			"access": "re",
			"code": "\
53 \
57 \
56 \
89CE \
8B39 \
64:8B1D 24000000 \
3B5F B0 \
74 0A \
89F1 \
E8 [RxF410] \
875F B0 \
FE47 8F \
C646 04 01 \
5E \
5F \
5B \
C3 \
"
		},
		"black_screen_fix_unlock": {
			"access": "re",
			"code": "\
8B01 \
FE48 0F \
75 0A \
31D2 \
8750 B0 \
E9 [RxF4C0] \
C3 \
"
		},
		"packet_parser_hook": {
			"access": "re",
			"code": "\
8B81 34020000 \
0FB600 \
8D50 F5 \
83FA 09 \
72 08 \
85C0 \
0F85 [Rx176BB0] \
C605 (<codecave:netplayz_data>+22) 00 \
E9 [Rx176BB0] \
"
		},
		"WSASendTo_hook": {
			"access": "re",
			"code": "\
55 \
53 \
57 \
56 \
50 \
8B5424 1C \
8B42 04 \
0FB608 \
83C1 F7 \
83F9 0A \
0F87 B0010000 \
FF248D <codecave:WSASendTo_hook_jump_table> \
803D (<codecave:netplayz_data>+22) 01 \
0F85 CD000000 \
8B4424 24 \
85C0 \
74 06 \
C700 01000000 \
31C0 \
83C4 04 \
5E \
5F \
5B \
5D \
C2 2400 \
C605 (<codecave:netplayz_data>+22) 00 \
E9 76010000 \
B9 11000000 \
833A 19 \
73 13 \
E9 67010000 \
B9 12000000 \
833A 1A \
0F82 59010000 \
8B15 (<codecave:netplayz_data>+8) \
8B2D (<codecave:netplayz_data>+12) \
89D6 \
29EE \
89F7 \
F7DF \
0F48FE \
83FF 7B \
BE 7B000000 \
0F42F7 \
83C6 04 \
803D (<codecave:netplayz_data>+21) 00 \
74 68 \
0FB62D (<codecave:netplayz_data>+20) \
01F6 \
39EE \
0F86 E0000000 \
8B3D (<codecave:netplayz_data>+4) \
89E3 \
53 \
6A 04 \
6A 01 \
68 <RxE364C> \
FFD7 \
85C0 \
74 28 \
0FB7C5 \
C1E0 03 \
31D2 \
66:F7F6 \
0FB7C0 \
0FB680 {u8:5;10;15;20;25;30;35;127} \
A2 <RxE364C> \
53 \
FF7424 04 \
6A 01 \
68 <RxE364C> \
FFD7 \
FE05 (<codecave:netplayz_data>+20) \
E9 CF000000 \
C605 (<codecave:netplayz_data>+22) 01 \
E9 C3000000 \
8B3C08 \
8B5C08 04 \
31FA \
31DD \
0FB605 (<codecave:netplayz_data>+20) \
FEC0 \
31C9 \
09D5 \
0FB6C0 \
0F45C1 \
A2 (<codecave:netplayz_data>+20) \
0FB6C0 \
39C6 \
77 51 \
C605 (<codecave:netplayz_data>+20) 00 \
C605 (<codecave:netplayz_data>+21) 01 \
A1 (<codecave:netplayz_data>+16) \
85C0 \
74 3A \
8D48 0C \
81F9 00020000 \
77 2F \
C780 (<codecave:netplayz_data>+32) 5B526573 \
C780 (<codecave:netplayz_data>+36) 796E6369 \
C780 (<codecave:netplayz_data>+40) 6E675D00 \
68 (<codecave:netplayz_data>+32) \
FF35 <Rx4DAD0C> \
FF15 <Rx3883C8> \
893D (<codecave:netplayz_data>+8) \
891D (<codecave:netplayz_data>+12) \
EB 3A \
C605 (<codecave:netplayz_data>+20) 00 \
C605 (<codecave:netplayz_data>+21) 00 \
A1 (<codecave:netplayz_data>+16) \
85C0 \
74 23 \
8D48 01 \
81F9 00020000 \
77 18 \
C680 (<codecave:netplayz_data>+32) 00 \
68 (<codecave:netplayz_data>+32) \
FF35 <Rx4DAD0C> \
FF15 <Rx3883C8> \
83C4 04 \
5E \
5F \
5B \
5D \
FF25 <codecave:netplayz_data> \
"
		},
		"WSASendTo_hook_jump_table": {
			"access": "r",
			"code": "\
(<codecave:WSASendTo_hook>+0x22) \
(<codecave:WSASendTo_hook>+0x1CB) \
(<codecave:WSASendTo_hook>+0x49) \
(<codecave:WSASendTo_hook>+0x1CB) \
(<codecave:WSASendTo_hook>+0x1CB) \
(<codecave:WSASendTo_hook>+0x1CB) \
(<codecave:WSASendTo_hook>+0x1CB) \
(<codecave:WSASendTo_hook>+0x1CB) \
(<codecave:WSASendTo_hook>+0x1CB) \
(<codecave:WSASendTo_hook>+0x55) \
(<codecave:WSASendTo_hook>+0x64) \
"
		}
	},
	"binhacks": {
		"netplay_patchA": {
			"addr": "RxE357A",
			"code": "7F"
		},
		"create_mutex_patch": {
			"addr": "Rx1DC61",
			"code": "68 00000000"
		},
		"black_screen_fix_byte_offset": {
			"addr": [ "Rx17C6E6", "Rx17C6FB", "Rx17C945" ],
			"code": "1E"
		},
		"black_screen_fix_initA": {
			"addr": "Rx171F4B",
			"code": "90"
		},
		"black_screen_fix_initB": {
			"addr": "Rx171F64",
			"code": "89"
		},
		"black_screen_fix_lock": {
			"addr": [ "Rx172FD6", "Rx178B96", "Rx178ED7", "Rx1791BF", "Rx17CDC9", "Rx17CFEB", "Rx17D1DB", "Rx17D36B", "Rx17D5B9", "Rx17D687" ],
			"code": "[codecave:black_screen_fix_lock]"
		},
		"black_screen_fix_unlockA": {
			"addr": [ "Rx373F74", "Rx3746FC", "Rx37473C", "Rx374774", "Rx17CE02", "Rx17CE98", "Rx17CEB5", "Rx374E04", "Rx374E34" ],
			"code": "[codecave:black_screen_fix_unlock]"
		},
		"black_screen_fix_unlockB1": {
			"addr": "Rx172FF1",
			"code": "\
8B4D CC \
FE49 8F \
0F85 F5000000 \
31D2 \
8751 B0 \
<nop:3> \
"
		},
		"black_screen_fix_unlockB2": {
			"addr": "Rx173094",
			"code": "\
8B4D CC \
FE49 8F \
75 32 \
31D2 \
8751 B0 \
<nop:3> \
"
		},
		"black_screen_fix_unlockB3": {
			"addr": "Rx178C2D",
			"code": "\
8B4D E0 \
FE49 8F \
0F85 24020000 \
31D2 \
8751 B0 \
"
		},
		"black_screen_fix_unlockB4": {
			"addr": "Rx178D5C",
			"code": "\
8B4D E0 \
FE49 8F \
75 2F \
31D2 \
8751 B0 \
"
		},
		"black_screen_fix_unlockB5": {
			"addr": "Rx178F65",
			"code": "\
8B4D E8 \
FE49 8F \
0F85 D8010000 \
31D2 \
8751 B0 \
"
		},
		"black_screen_fix_unlockB6": {
			"addr": "Rx179048",
			"code": "\
8B4D E8 \
FE49 8F \
75 2F \
31D2 \
8751 B0 \
"
		},
		"black_screen_fix_unlockB7": {
			"addr": "Rx1791D3",
			"code": "\
8B4D EC \
FE49 8F \
0F85 DB000000 \
31D2 \
8751 B0 \
<nop:3> \
"
		},
		"black_screen_fix_unlockB8": {
			"addr": [ "Rx179259", "Rx17D3ED", "Rx17D5C7", "Rx17D706" ],
			"code": "\
8B4D EC \
FE49 8F \
75 32 \
31D2 \
8751 B0 \
<nop:3> \
"
		},
		"black_screen_fix_unlockB9": {
			"addr": [ "Rx17D14C", "Rx17D2DB" ],
			"code": "\
8B4D E8 \
FE49 8F \
75 32 \
31D2 \
8751 B0 \
<nop:3> \
"
		},
		"black_screen_fix_unlockB10": {
			"addr": "Rx17D37F",
			"code": "\
8B4D EC \
FE49 8F \
0F85 D4010000 \
31D2 \
8751 B0 \
<nop:3> \
"
		},
		"black_screen_fix_unlockB11": {
			"addr": "Rx17D69F",
			"code": "\
8B4D EC \
FE49 8F \
0F85 AC000000 \
31D2 \
8751 B0 \
<nop:2> \
"
		}
	}
}