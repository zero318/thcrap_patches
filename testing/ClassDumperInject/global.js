{
	"options": {
        "use_rvas": {
            "type": "b",
            "val": true
        },
        "rva_char": {
            "type": "u8",
            "val": "<option:use_rvas> ? 0x72 : 0"
        },
		"rtti_dll_path": {
			"type": "s",
			"val": "F:\\My Programs Expansion\\__code_tools\\ClassDumper2\\DX11\\ClassDumper2.dll"
		},
        "rx_prefixA": {
            "type": "s",
            "val": "Rx"
        },
        "rx_prefixB": {
            "type": "s",
            "val": "\tRx"
        },
        "yeet": {
            "type": "s",
            "val": "yeet"
        }
	},
	"codecaves": {
		"inject_rtti_crap_patch_post_init": {
			"access": "re",
			"export": true,
			"code": "\
68 <option:rtti_dll_path> \
E8 [inject_LoadLibraryU] \
<nop:5> \
C3 \
"
		}
	},
    "breakpoints": {
        "runtime_apply_stage_by_name": {
            "addr": "<codecave:inject_rtti_crap_patch_post_init>+0xA",
            "cavesize": 5,
            "stage_name": "<option:yeet>",
            "stages_list": {
                "yeet": {
                    "base_addr": "EAX",
                    "binhacks": {
                        "plz_just_work_already": {
                            "addr": "Rx7424",
                            "code": "\
E8 [codecave:add_extra_detected_sub_names] \
<nop:143> \
"
                        },
                        "print_method_addresses_as_hex": {
                            "addr": "Rx85AA",
                            "code": "\
E8 [codecave:fix_method_printing] \
"
                        },
                        "enable_method_rvaA": {
                            "enable": "<option:use_rvas>",
                            "addr": "Rx74BD",
                            "code": "\
E8 [codecave:calculate_method_rva] \
"
                        },
                        "enable_method_rvaB": {
                            "enable": "<option:use_rvas>",
                            "addr": "Rx85A0",
                            "code": "<option:rx_prefixB>"
                        },
                        "enable_method_rvaC": {
                            "enable": "<option:use_rvas>",
                            "addr": "Rx85AF",
                            "code": "\
E8 [codecave:print_method_rva] \
52 \
"
                        },
                        "enable_vtable_rvaA": {
                            "enable": "<option:use_rvas>",
                            "addr": "Rx8206",
                            "code": "\
E8 [codecave:calculate_vtable_rva] \
90 \
"
                        },
                        "enable_vtable_rvaB": {
                            "enable": "<option:use_rvas>",
                            "addr": "Rx81E8",
                            "code": "<option:rx_prefixA>"
                        },
                        "gross_rva_hackA": {
                            "enable": "<option:use_rvas>",
                            "addr": [ "Rx20CD", "Rx7302", "Rx8028", "Rx8105", "Rx8A14" ],
                            "code": "35",
                            "expected": "48"
                        },
                        "gross_rva_hackB": {
                            "enable": "<option:use_rvas>",
                            "addr": "Rx7206",
                            "code": "\
0F57C0 \
0F1100 \
8B43 0C \
8B00 \
8942 48 \
<nop:6> \
"
                        }
                    },
                    "codecaves": {
                        "fix_method_printing": {
                            "access": "re",
                            "code": "\
E8 [Rx4690] \
68 <Rx1D50> \
8BC8 \
FF15 <Rx5311C> \
C3 \
"
                        },
                        "calculate_method_rva": {
                            "enable": "<option:use_rvas>",
                            "access": "re",
                            "code": "\
8B43 0C \
2B10 \
E9 [Rx4400] \
"
                        },
                        "calculate_vtable_rva": {
                            "enable": "<option:use_rvas>",
                            "access": "re",
                            "code": "\
81F1 EFBEADDE \
2B4F 48 \
C3 \
"
                        },
                        "print_method_rva": {
                            "enable": "<option:use_rvas>",
                            "access": "re",
                            "code": "\
8B4F 04 \
8B1431 \
2B57 48 \
C3 \
"
                        },
                        "choose_sub_name_prefix": {
                            "access": "re",
                            "code": "\
53 \
57 \
0FB606 \
33FF \
8BD8 \
3C 55 \
75 32 \
0FB64E 01 \
33C0 \
80F9 8B \
74 14 \
80F9 89 \
0F85 91010000 \
807E 02 E5 \
74 0F \
E9 86010000 \
807E 02 EC \
0F85 7C010000 \
0FB646 03 \
BF 03000000 \
3C 8A \
77 19 \
3C 32 \
77 4C \
3C 0F \
0F84 CC000000 \
3C 31 \
0F84 4A010000 \
E9 56010000 \
3C B7 \
77 5B \
3C 8B \
0F84 DA000000 \
3C B0 \
0F85 0C010000 \
33C9 \
807C37 01 01 \
0F85 60010000 \
83C7 02 \
B8 04000000 \
80FB 55 \
0F84 13010000 \
E9 1F010000 \
3C 33 \
74 61 \
3C 89 \
0F85 DD000000 \
0FB64437 01 \
3C C8 \
0F84 D9000000 \
33C9 \
3C D0 \
0F84 9F000000 \
E9 22010000 \
3C B8 \
0F84 A1000000 \
3C D9 \
0F85 B1000000 \
0FB64437 01 \
3C EE \
0F84 BC000000 \
33C9 \
3C E8 \
0F85 FB000000 \
B8 08000000 \
83C7 02 \
80FB 55 \
0F84 AE000000 \
E9 BA000000 \
33C9 \
807C37 01 C0 \
0F85 D8000000 \
83C7 02 \
B8 03000000 \
80FB 55 \
0F84 8B000000 \
E9 97000000 \
33C9 \
807C37 01 57 \
0F85 B5000000 \
807C37 02 C0 \
0F85 AA000000 \
83C7 03 \
B8 07000000 \
80FB 55 \
74 61 \
EB 70 \
0FB64437 01 \
3C C1 \
74 3A \
33C9 \
3C C2 \
0F85 88000000 \
B8 06000000 \
83C7 02 \
80FB 55 \
74 3F \
EB 4E \
33C9 \
837C37 01 01 \
75 70 \
83C7 05 \
B8 04000000 \
80FB 55 \
74 27 \
EB 36 \
33C0 \
80FB 55 \
74 1E \
EB 2D \
B8 05000000 \
83C7 02 \
80FB 55 \
75 20 \
EB 0D \
B8 07000000 \
83C7 02 \
80FB 55 \
75 11 \
0FB6143E \
80FA C9 \
74 07 \
33C9 \
80FA 5D \
75 2C \
47 \
0FB60C3E \
80F9 EA \
77 11 \
80C1 3E \
80F9 02 \
73 1F \
83F8 01 \
83D0 00 \
5F \
5B \
C3 \
80F9 EB \
74 16 \
80F9 FF \
75 07 \
807C37 01 25 \
74 0A \
8BC1 \
5F \
5B \
C3 \
80F9 E9 \
75 F6 \
85C0 \
B9 02000000 \
0F44C1 \
5F \
5B \
C3 \
"
                        },
                        "choose_sub_name_prefix_old": {
                            "ignore": true,
                            "access": "re",
                            "code": "\
53 \
57 \
0FB606 \
33FF \
8BD8 \
3C 55 \
75 32 \
0FB64E 01 \
33C0 \
80F9 8B \
74 14 \
80F9 89 \
0F85 EB000000 \
807E 02 E5 \
74 0F \
E9 E0000000 \
807E 02 EC \
0F85 D6000000 \
0FB646 03 \
BF 03000000 \
3C 8A \
77 24 \
3C 31 \
74 48 \
3C 33 \
74 44 \
3C 89 \
75 7E \
0FB64437 01 \
3C C8 \
0F84 92000000 \
33C9 \
3C D0 \
74 5C \
E9 D7000000 \
3C 8B \
74 40 \
3C B0 \
74 67 \
3C B8 \
75 5A \
33 C9 \
837C37 01 01 \
0F85 BE000000 \
83C7 05 \
B8 04000000 \
80FB 55 \
74 6E \
EB 7D \
33C9 \
807C37 01 C0 \
0F85 A2000000 \
83C7 02 \
B8 03000000 \
80FB 55 \
74 52 \
EB 61 \
0FB64437 01 \
3C C1 \
74 3A \
33C9 \
3C C2 \
0F85 80000000 \
B8 06000000 \
83C7 02 \
80FB 55 \
74 30 \
EB 3F \
33C0 \
80FB 55 \
74 27 \
EB 36 \
33C9 \
807C37 01 01 \
75 5F \
83C7 02 \
B8 04000000 \
80FB 55 \
74 0F \
EB 1E \
B8 05000000 \
83C7 02 \
80FB 55 \
75 11 \
0FB6143E \
80FA C9 \
74 07 \
33C9 \
80FA 5D \
75 33 \
47 \
0FB60C3E \
80F9 EA \
77 11 \
80C1 3E \
80F9 02 \
73 17 \
83F8 01 \
83D0 00 \
5F \
5B \
C3 \
80F9 EB \
74 09 \
33C9 \
807C37 01 25 \
75 0A \
85C0 \
B9 02000000 \
0F45C8 \
8BC1 \
5F \
5B \
C3 \
"
                        },
                        "sub_prefix_strings": {
                            "access": "r",
                            "code": "\
5F5F6D6574686F645F<option:rva_char>000000000000\
5F5F737475625F<option:rva_char>0000000000000000\
5F5F7472616D706F6C696E655F<option:rva_char>0000\
5F5F7265745F7A65726F5F<option:rva_char>00000000\
5F5F7265745F6F6E655F<option:rva_char>0000000000\
5F5F7265745F6563785F<option:rva_char>0000000000\
5F5F7265745F6564785F<option:rva_char>0000000000\
5F5F7265745F7A65726F665F<option:rva_char>000000\
5F5F7265745F6F6E65665F<option:rva_char>00000000\
"
                        },
                        "add_extra_detected_sub_names": {
                            "access": "re",
                            "code": "\
E8 [codecave:choose_sub_name_prefix] \
8B4D E4 \
8B55 E8 \
48 \
83F8 07 \
0F87 3A010000 \
FF2485 <codecave:add_extra_detected_sub_names_jump_table> \
8BC2 \
2BC1 \
83F8 (u8:7+<option:use_rvas>) \
0F82 4B010000 \
8D41 (u8:7+<option:use_rvas>) \
8945 E4 \
8D45 D4 \
83FA 10 \
0F4300 \
0F2805 (<codecave:sub_prefix_strings>+0x10) \
E9 2A010000 \
8BC2 \
2BC1 \
83F8 (u8:0xD+<option:use_rvas>) \
0F82 30010000 \
8D41 (u8:0xD+<option:use_rvas>) \
8945 E4 \
8D45 D4 \
83FA 10 \
0F4300 \
0F2805 (<codecave:sub_prefix_strings>+0x20) \
E9 02010000 \
8BC2 \
2BC1 \
83F8 (u8:0xB+<option:use_rvas>) \
0F82 15010000 \
8D41 (u8:0xB+<option:use_rvas>) \
8945 E4 \
8D45 D4 \
83FA 10 \
0F4300 \
0F2805 (<codecave:sub_prefix_strings>+0x30) \
E9 DA000000 \
8BC2 \
2BC1 \
83F8 (u8:0xA+<option:use_rvas>) \
0F82 F6000000 \
8D41 (u8:0xA+<option:use_rvas>) \
8945 E4 \
8D45 D4 \
83FA 10 \
0F4300 \
0F2805 (<codecave:sub_prefix_strings>+0x40) \
E9 B2000000 \
8BC2 \
2BC1 \
83F8 (u8:0xA+<option:use_rvas>) \
0F82 D7000000 \
83F8 (u8:0xA+<option:use_rvas>) \
8945 E4 \
8D45 D4 \
83FA 10 \
0F4300 \
0F2805 (<codecave:sub_prefix_strings>+0x50) \
E9 8A000000 \
8BC2 \
2BC1 \
83F8 (u8:0xA+<option:use_rvas>) \
0F82 B8000000 \
8D41 (u8:0xA+<option:use_rvas>) \
8945 E4 \
8D45 D4 \
83FA 10 \
0F4300 \
0F2805 (<codecave:sub_prefix_strings>+0x60) \
EB 65 \
8BC2 \
2BC1 \
83F8 (u8:0xC+<option:use_rvas>) \
0F82 93000000 \
8D41 (u8:0xC+<option:use_rvas>) \
8945 E4 \
8D45 D4 \
83FA 10 \
0F4300 \
0F2805 (<codecave:sub_prefix_strings>+0x70) \
EB 40 \
8BC2 \
2BC1 \
83F8 (u8:0xB+<option:use_rvas>) \
72 72 \
8D41 (u8:0xB+<option:use_rvas>) \
8945 E4 \
8D45 D4 \
83FA 10 \
0F4300 \
0F2805 (<codecave:sub_prefix_strings>+0x80) \
EB 1F \
8BC2 \
2BC1 \
83F8 (u8:9+<option:use_rvas>) \
72 78 \
8D41 (u8:9+<option:use_rvas>) \
8945 E4 \
8D45 D4 \
83FA 10 \
0F4300 \
0F2805 <codecave:sub_prefix_strings> \
0F110408 \
EB 6F \
6A (u8:7+<option:use_rvas>) \
68 (<codecave:sub_prefix_strings>+0x10) \
6A 00 \
6A (u8:7+<option:use_rvas>) \
EB 5A \
6A (u8:0xD+<option:use_rvas>) \
68 (<codecave:sub_prefix_strings>+0x20) \
6A 00 \
6A (u8:0xD+<option:use_rvas>) \
EB 4D \
6A (u8:0xB+<option:use_rvas>) \
68 (<codecave:sub_prefix_strings>+0x30) \
EB 33 \
6A (u8:0xA+<option:use_rvas>) \
68 (<codecave:sub_prefix_strings>+0x40) \
EB 10 \
6A (u8:0xA+<option:use_rvas>) \
68 (<codecave:sub_prefix_strings>+0x50) \
EB 07 \
6A (u8:0xA+<option:use_rvas>) \
68 (<codecave:sub_prefix_strings>+0x60) \
6A 00 \
6A (u8:0xA+<option:use_rvas>) \
EB 25 \
6A (u8:0xC+<option:use_rvas>) \
68 (<codecave:sub_prefix_strings>+0x70) \
6A 00 \
6A (u8:0xC+<option:use_rvas>) \
EB 18 \
6A (u8:0xB+<option:use_rvas>) \
68 (<codecave:sub_prefix_strings>+0x80) \
6A 00 \
6A (u8:0xB+<option:use_rvas>) \
EB 0B \
6A (u8:9+<option:use_rvas>) \
68 <codecave:sub_prefix_strings> \
6A 00 \
6A (u8:9+<option:use_rvas>) \
8D4D D4 \
E8 [Rx1B20] \
C3 \
"
                        },
                        "add_extra_detected_sub_names_old": {
                            "ignore": true,
                            "access": "re",
                            "code": "\
E8 [codecave:choose_sub_name_prefix] \
8B4D E4 \
8B55 E8 \
48 \
83F8 05 \
0F87 EA000000 \
FF2485 <codecave:add_extra_detected_sub_names_jump_table> \
8BC2 \
2BC1 \
83F8 (u8:7+<option:use_rvas>) \
0F82 FB000000 \
8D41 (u8:7+<option:use_rvas>) \
8945 E4 \
8D45 D4 \
83FA 10 \
0F4300 \
0F2805 (<codecave:sub_prefix_strings>+0x10) \
E9 DA000000 \
8BC2 \
2BC1 \
83F8 (u8:0xD+<option:use_rvas>) \
0F82 E0000000 \
8D41 (u8:0xD+<option:use_rvas>) \
8945 E4 \
8D45 D4 \
83FA 10 \
0F4300 \
0F2805 (<codecave:sub_prefix_strings>+0x20) \
E9 B2000000 \
8BC2 \
2BC1 \
83F8 (u8:0xB+<option:use_rvas>) \
0F82 C5000000 \
8D41 (u8:0xB+<option:use_rvas>) \
8945 E4 \
8D45 D4 \
83FA 10 \
0F4300 \
0F2805 (<codecave:sub_prefix_strings>+0x30) \
E9 8A000000 \
8BC2 \
2BC1 \
83F8 (u8:0xA+<option:use_rvas>) \
0F82 AA000000 \
8D41 (u8:0xA+<option:use_rvas>) \
8945 E4 \
8D45 D4 \
83FA 10 \
0F4300 \
0F2805 (<codecave:sub_prefix_strings>+0x40) \
EB 65 \
8BC2 \
2BC1 \
83F8 (u8:0xA+<option:use_rvas>) \
0F82 8E000000 \
83F8 (u8:0xA+<option:use_rvas>) \
8945 E4 \
8D45 D4 \
83FA 10 \
0F4300 \
0F2805 (<codecave:sub_prefix_strings>+0x50) \
EB 40 \
8BC2 \
2BC1 \
83F8 (u8:0xA+<option:use_rvas>) \
72 76 \
8D41 (u8:0xA+<option:use_rvas>) \
8945 E4 \
8D45 D4 \
83FA 10 \
0F4300 \
0F2805 (<codecave:sub_prefix_strings>+0x60) \
EB 1F \
8BC2 \
2BC1 \
83F8 (u8:9+<option:use_rvas>) \
72 62 \
8D41 (u8:9+<option:use_rvas>) \
8945 E4 \
8D45 D4 \
83FA 10 \
0F4300 \
0F2805 <codecave:sub_prefix_strings> \
0F110408 \
EB 59 \
6A (u8:7+<option:use_rvas>) \
68 (<codecave:sub_prefix_strings>+0x10) \
6A 00 \
6A (u8:7+<option:use_rvas>) \
EB 44 \
6A (u8:0xD+<option:use_rvas>) \
68 (<codecave:sub_prefix_strings>+0x20) \
6A 00 \
6A (u8:0xD+<option:use_rvas>) \
EB 37 \
6A (u8:0xB+<option:use_rvas>) \
68 (<codecave:sub_prefix_strings>+0x30) \
6A 00 \
6A (u8:0xB+<option:use_rvas>) \
EB 2A \
6A (u8:0xA+<option:use_rvas>) \
68 (<codecave:sub_prefix_strings>+0x40) \
EB 10 \
6A (u8:0xA+<option:use_rvas>) \
68 (<codecave:sub_prefix_strings>+0x50) \
EB 07 \
6A (u8:0xA+<option:use_rvas>) \
68 (<codecave:sub_prefix_strings>+0x60) \
6A 00 \
6A (u8:0xA+<option:use_rvas>) \
EB 0B \
6A (u8:9+<option:use_rvas>) \
68 <codecave:sub_prefix_strings> \
6A 00 \
6A (u8:9+<option:use_rvas>) \
8D4D D4 \
E8 [Rx1B20] \
C3 \
"
                        },
                        "add_extra_detected_sub_names_jump_table": {
                            "access": "r",
                            "code": "\
(<codecave:add_extra_detected_sub_names>+0x1C)\
(<codecave:add_extra_detected_sub_names>+0x44)\
(<codecave:add_extra_detected_sub_names>+0x6C)\
(<codecave:add_extra_detected_sub_names>+0x94)\
(<codecave:add_extra_detected_sub_names>+0xBC)\
(<codecave:add_extra_detected_sub_names>+0xE4)\
(<codecave:add_extra_detected_sub_names>+0x109)\
(<codecave:add_extra_detected_sub_names>+0x12E)\
"
                        }
                    }
                }
            }
        }
    }
}