{
	options: {
		"struct_field_count": {
			"type": "i32",
			"val": 3000
		},
		"struct_repeat_count": {
			"type": "u32",
			"val": 32768
		},
		"child_struct_field_count": {
			"type": "u32",
			"val": 320
		}
	},
	codecaves: {
		"probably_die_nops": {
			"access": "re",
			"code": "\
53 \
57 \
56 \
8B5424 14 \
31C0 \
85D2 \
0F84 CD000000 \
8B7424 10 \
3B7424 18 \
0F83 BF000000 \
8B4C24 1C \
89CF \
29F7 \
49 \
21F9 \
0F84 AE000000 \
8A1C32 \
B8 01000000 \
80FB 90 \
0F84 9D000000 \
80FB CC \
0F84 94000000 \
80FB 66 \
75 58 \
8D4432 FF \
8D5416 01 \
<nop:9> \
0FB61A \
42 \
80FB 66 \
74 F7 \
80FB 2E \
74 06 \
80FB 90 \
74 62 \
4A \
0FB732 \
81FE 0F1F0000 \
75 56 \
0FB65A 02 \
89DF \
C1EF 06 \
83FF 02 \
74 1E \
83FF 01 \
74 2D \
8D72 02 \
85FF \
75 3A \
80E3 07 \
83C2 06 \
80FB 05 \
0F45D6 \
EB 2E \
31C0 \
EB 33 \
80E3 07 \
80FB 04 \
BB 00000000 \
0F94C3 \
8D5413 06 \
EB 16 \
80E3 07 \
80FB 04 \
BB 00000000 \
0F94C3 \
8D5413 03 \
EB 02 \
89F2 \
29C2 \
31C0 \
39CA \
0F4EC2 \
5E \
5F \
5B \
C3 \
"
		}
	},
	binhacks: {
		"tweak_long_nop": {
			"addr": 0x4F7AE0,
			"code": "0000000000000000",
			"expected": "0000000000000004"
		},
		"tweak_standalone_datasize": {
			"addr": 0x509190,
			//"code": "0000000000000004",
			"code": "0000000000000000",
			"expected": "1E00008000000000"
		},
		"replace_struct_field_count": {
			"addr": [
				0x47AF5A,
				0x47B6EC
			],
			"code": "<option:struct_field_count>",
			"expected": "(i32:300)"
		},
		"replace_struct_repeat_count": {
			"addr": [
				0x47B092,
				0x47B09F
			],
			"code": "<option:struct_repeat_count>",
			"expected": "(u32:32768)"
		},
		"replace_child_struct_field_count": {
			"addr": 0x47B5F1,
			"code": "\
3D <option:child_struct_field_count> \
77 15 \
<nop:5> \
",
			"expected": "\
837D E4 00 \
74 06 \
837D E4 20 \
7E 10 \
"
		},
		"remove_duplicate_prefix_checkA": {
			"addr": 0x442E72,
			"code": "<nop:22>"
		},
		"remove_duplicate_prefix_checkB": {
			"addr": 0x442EE1,
			"code": "<nop:10>",
			"ignore": true
		},
		"remove_too_many_prefixes_check": {
			"addr": 0x442FF5,
			"code": "<nop:37>",
			"ignore": true
		},
		"replace_nop_analysis": {
			"addr": [
				0x46148D,
				0x4633AD,
				0x46415E,
				0x469C09,
				0x46A871
			],
			"code": "E8 [codecave:probably_die_nops]"
		}
	},
	detours: {
		"kernel32.dll": null,
		"user32.dll": null,
		"version.dll": null,
		"comdlg32.dll": null,
		"gdi32.dll": null,
		"shell32.dll": null
	}
}