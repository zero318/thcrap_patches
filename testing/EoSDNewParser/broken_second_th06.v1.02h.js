{
	"options": {
	},
	"codecaves": {
		"parse_int_as_arg":{
			"access": "re",
			"code": "\
83EC 14 \
89C8 \
B9 EFD8FFFF \
29C1 \
83F9 18 \
0F87 B9000000 \
FF248D B861F100 \
8B848A A4090000 \
83C4 14 \
C3 \
B9 E1D8FFFF \
29C1 \
8B848A 6C0C0000 \
83C4 14 \
C3 \
B9 DED8FFFF \
29C1 \
8B048D 68AA6C00 \
83C4 14 \
C3 \
A1 B0BC6900 \
83C4 14 \
C3 \
A1 10D76900 \
83C4 14 \
C3 \
F30F1005 68AA6C00 \
F30F5C82 6C0C0000 \
0F57D2 \
0F2EC2 \
B8 DB0FC93F \
73 54 \
F30F100D 6CAA6C00 \
F30F5C8A 700C0000 \
0F2ECA \
73 3F \
F30F5AC0 \
F30F5AC9 \
F20F114424 08 \
F20F110C24 \
E8 [0x45BE40] \
D95C24 10 \
8B4424 10 \
83C4 14 \
C3 \
8B82 F80C0000 \
83C4 14 \
C3 \
0FBE05 BDD46900 \
0FBE0D BED46900 \
8D0441 \
83C4 14 \
C3 \
0F1005 68AA6C00 \
0F5C82 6C0C0000 \
0F5405 (<codecave:float_constants> + 0x20) \
0F59C0 \
F30F16C8 \
0F58C1 \
0F12C8 \
F30F58C1 \
F30F51C0 \
660F7EC0 \
83C4 14 \
C3 \
8B82 E40C0000 \
83C4 14 \
C3 \
"
		},
		"parse_int_as_arg_jump_table": {
			"access": "re",
			"code": "\
(<codecave:parse_int_as_arg> + 0x1C) \
(<codecave:parse_int_as_arg> + 0x1C) \
(<codecave:parse_int_as_arg> + 0x1C) \
(<codecave:parse_int_as_arg> + 0x1C) \
(<codecave:parse_int_as_arg> + 0x1C) \
(<codecave:parse_int_as_arg> + 0x1C) \
(<codecave:parse_int_as_arg> + 0x1C) \
(<codecave:parse_int_as_arg> + 0x1C) \
(<codecave:parse_int_as_arg> + 0x1C) \
(<codecave:parse_int_as_arg> + 0x1C) \
(<codecave:parse_int_as_arg> + 0x1C) \
(<codecave:parse_int_as_arg> + 0x1C) \
(<codecave:parse_int_as_arg> + 0x4B) \
(<codecave:parse_int_as_arg> + 0x54) \
(<codecave:parse_int_as_arg> + 0x27) \
(<codecave:parse_int_as_arg> + 0x27) \
(<codecave:parse_int_as_arg> + 0x27) \
(<codecave:parse_int_as_arg> + 0x39) \
(<codecave:parse_int_as_arg> + 0x39) \
(<codecave:parse_int_as_arg> + 0x39) \
(<codecave:parse_int_as_arg> + 0x5D) \
(<codecave:parse_int_as_arg> + 0xB3) \
(<codecave:parse_int_as_arg> + 0xD2) \
(<codecave:parse_int_as_arg> + 0x104) \
(<codecave:parse_int_as_arg> + 0xBD) \
"
		},
		"run_ecl": {
			"access": "re",
			"code": "\
55 \
53 \
57 \
56 \
83EC 44 \
89CE \
8D81 90090000 \
894424 20 \
8B99 90090000 \
83B9 680C0000 00 \
89DD \
0F89 E01B0000 \
8B86 9C090000 \
3B03 \
0F85 36010000 \
8DBE 94090000 \
8D86 E40C0000 \
894424 04 \
8D86 F80C0000 \
894424 08 \
8D86 6C0C0000 \
890424 \
EB 2D \
83BE D4090000 00 \
0F84 551C0000 \
<nop:8> \
8B45 0C \
8986 9C090000 \
8B4D 10 \
8D1C29 \
3B0429 \
0F85 E4000000 \
89DD \
0FB643 09 \
8B0D B0BC6900 \
0FA3C8 \
0F83 201C0000 \
0FB75D 04 \
0FBFC3 \
8D48 FF \
81F9 86000000 \
0F87 0A1C0000 \
FF248D <codecave:run_ecl_jump_table> \
8B4D 14 \
B8 EFD8FFFF \
29C8 \
83F8 0C \
73 5E \
8D8486 A4090000 \
E9 82000000 \
83BE D4090000 00 \
78 92 \
E9 DA1B0000 \
83BE D4090000 00 \
7E 84 \
E9 CC1B0000 \
83BE D4090000 00 \
0F84 72FFFFFF \
E9 BA1B0000 \
83BE D4090000 00 \
0F8F 60FFFFFF \
E9 A81B0000 \
83BE D4090000 00 \
0F89 4EFFFFFF \
E9 961B0000 \
8D50 F2 \
83FA 03 \
73 0F \
B8 E1D8FFFF \
29C8 \
8B0C24 \
8D0481 \
EB 19 \
83F8 15 \
74 0B \
83F8 17 \
75 0C \
8B4424 04 \
EB 09 \
8B4424 08 \
EB 03 \
8D45 14 \
8B08 \
8D51 FF \
8910 \
83F9 02 \
0F8D 09FFFFFF \
E9 511B0000 \
0FB686 500E0000 \
83E0 03 \
0F84 F3030000 \
83F8 01 \
74 63 \
8D8E C40C0000 \
6A 01 \
E8 [0x4241E5] \
0F57C0 \
F30F2A86 CC0C0000 \
F30F5886 C80C0000 \
0F57C9 \
F30F2A8E D00C0000 \
F30F5EC1 \
F30F5D05 (<codecave:float_constants> + 0x6C) \
8B86 500E0000 \
C1E8 02 \
83E0 07 \
FF2485 <codecave:interpolation_mode_jump_table> \
F30F59C0 \
F30F59C0 \
F30F100D (<codecave:float_constants> + 0x6C) \
F30F5CC8 \
E9 F1020000 \
F30F1005 C06E6C00 \
F30F108E 940C0000 \
F30F59C8 \
F30F588E 900C0000 \
F30F1015 (<codecave:float_constants> + 0x3C) \
F30F59D1 \
F30F5815 (<codecave:float_constants> + 0x40) \
660F3A0AD2 09 \
F30F5915 (<codecave:float_constants> + 0x44) \
F30F58D1 \
F30F1196 900C0000 \
F30F5986 9C0C0000 \
F30F5886 980C0000 \
F30F1186 980C0000 \
0F57C9 \
F30F5ACA \
83EC 08 \
F20F110C24 \
E8 [0x45BDA4] \
83C4 08 \
D95C24 0C \
F30F105424 0C \
F30F59D0 \
F30F1196 840C0000 \
83EC 08 \
F20F110C24 \
E8 [0x45BCF4] \
83C4 08 \
D95C24 0C \
F30F594424 0C \
F30F1186 880C0000 \
C786 8C0C0000 00000000 \
E9 CB020000 \
0FB745 0C \
66 8986 000D0000 \
83C3 BD \
66 899E 480D0000 \
8B0D 10D76900 \
890C24 \
0FB7BE DC0C0000 \
0FB786 DE0C0000 \
29F8 \
0FAFC1 \
8D58 1F \
85C0 \
0F49D8 \
C1FB 05 \
8B4D 10 \
89F2 \
E8 [codecave:parse_int_as_arg] \
01F8 \
01D8 \
83F8 01 \
B9 01000000 \
0F4EC1 \
66 8986 440D0000 \
0FB79E E00C0000 \
0FB786 E20C0000 \
29D8 \
0FAF0424 \
8D78 1F \
85C0 \
0F49F8 \
C1FF 05 \
8B4D 14 \
89F2 \
E8 [codecave:parse_int_as_arg] \
01D8 \
01F8 \
83F8 01 \
B9 01000000 \
0F4EC1 \
66 8986 460D0000 \
0F1086 6C0C0000 \
0F108E A00C0000 \
0F58C8 \
0F118E 040D0000 \
8B5D 20 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
F30F100D (<codecave:float_constants> + 0x3C) \
F30F59C8 \
F30F580D (<codecave:float_constants> + 0x40) \
660F3A0AC9 09 \
F30F590D (<codecave:float_constants> + 0x44) \
F30F58C8 \
F30F118E 100D0000 \
F30F1086 D40C0000 \
F30F108E D80C0000 \
F30F5CC8 \
F30F2A1424 \
F30F5915 (<codecave:float_constants> + 0x48) \
F30F59D1 \
F30F58D0 \
F30F111424 \
8B5D 18 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
0F57C9 \
0F2EC1 \
0F95C0 \
A8 01 \
74 0D \
F30F580424 \
F30F5F05 (<codecave:float_constants> + 0x4C) \
F30F1186 180D0000 \
8B5D 24 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 140D0000 \
8B5D 1C \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
F30F100C24 \
F30F590D (<codecave:float_constants> + 0x40) \
F30F58C8 \
F30F5F0D (<codecave:float_constants> + 0x4C) \
F30F118E 1C0D0000 \
66 C786 4A0D0000 0000 \
8B45 28 \
8986 4C0D0000 \
0FBF4D 0E \
89F2 \
E8 [codecave:parse_int_as_arg] \
66 8986 020D0000 \
F686 500E0000 20 \
0F85 20180000 \
8D86 000D0000 \
B9 F85F5A00 \
50 \
E8 [0x4145C0] \
E9 0A180000 \
F30F100D (<codecave:float_constants> + 0x6C) \
F30F5CC8 \
EB 10 \
F30F100D (<codecave:float_constants> + 0x6C) \
F30F5CC8 \
F30F59C9 \
F30F59C9 \
0F1096 AC0C0000 \
0F1086 B80C0000 \
0FC6C9 00 \
0F59CA \
0F28D8 \
0F5CDA \
0F58D9 \
0F119E 840C0000 \
0F57C9 \
F30F5ACB \
F30F16DB \
F30F5ADB \
83EC 10 \
F20F114C24 08 \
F20F111C24 \
E8 [0x45BE40] \
83C4 10 \
D95C24 0C \
8B4424 0C \
8986 900C0000 \
83BE CC0C0000 00 \
7E 39 \
8D86 840C0000 \
0F58C2 \
F30F1186 6C0C0000 \
660F3A1786 700C0000 01 \
660F3A1786 740C0000 02 \
C740 04 00000000 \
C700 00000000 \
C740 08 00000000 \
83BE E40C0000 00 \
0F8E C2030000 \
8B86 540D0000 \
85C0 \
0F8E D0000000 \
8B8E 600D0000 \
898E 580D0000 \
F30F1005 (<codecave:float_constants> + 0x70) \
0F2E05 C46E6C00 \
72 31 \
F30F1086 5C0D0000 \
F30F5805 C06E6C00 \
F30F1186 5C0D0000 \
0F2E05 (<codecave:float_constants> + 0x6C) \
72 17 \
F30F5805 (<codecave:float_constants> + 0x74) \
F30F1186 5C0D0000 \
41 \
898E 600D0000 \
39C1 \
7C 77 \
F30F1086 A00C0000 \
F30F108E A40C0000 \
F30F5886 6C0C0000 \
8D86 000D0000 \
F30F1186 040D0000 \
F30F588E 700C0000 \
F30F118E 080D0000 \
F30F1086 A80C0000 \
F30F5886 740C0000 \
F30F1186 0C0D0000 \
B9 F85F5A00 \
50 \
E8 [0x4145C0] \
C786 580D0000 19FCFFFF \
C786 5C0D0000 00000000 \
C786 600D0000 00000000 \
0FB786 5A0E0000 \
66 85C0 \
0F88 C2020000 \
0F57C0 \
0F2E86 840C0000 \
0F92C2 \
0F94C1 \
28CA \
FEC2 \
0FBE8E 530E0000 \
38D1 \
0F84 9F020000 \
84D2 \
885424 20 \
74 15 \
80FA 01 \
0F84 63020000 \
0FB786 5C0E0000 \
E9 57020000 \
83F9 01 \
0F84 3E020000 \
83F9 FF \
0F85 3E020000 \
0FB786 540E0000 \
E9 39020000 \
8B45 10 \
894424 04 \
660F6EC0 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F444424 04 \
660F6EC0 \
F30F5C86 6C0C0000 \
F30F1186 AC0C0000 \
8B45 14 \
894424 04 \
660F6EC0 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F444424 04 \
660F6EC0 \
F30F5C86 700C0000 \
F30F1186 B00C0000 \
8B45 18 \
894424 04 \
660F6EC0 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F444424 04 \
660F6EC0 \
F30F5C86 740C0000 \
F30F1186 B40C0000 \
C786 880C0000 00000000 \
C786 840C0000 00000000 \
C786 8C0C0000 00000000 \
8B45 0C \
C0E3 04 \
8A8E 500E0000 \
80E3 10 \
80E1 E0 \
08D9 \
8B1424 \
F30F7E02 \
660FD686 B80C0000 \
8B52 08 \
8996 C00C0000 \
8986 D00C0000 \
C786 C40C0000 19FCFFFF \
C786 C80C0000 00000000 \
8986 CC0C0000 \
80C9 02 \
888E 500E0000 \
E9 E4140000 \
8D45 10 \
8D4D 14 \
EB 0F \
83C3 F7 \
8D86 900C0000 \
8D8E 980C0000 \
8B00 \
894424 08 \
F30F1001 \
F30F114424 04 \
660F6EC0 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F444424 08 \
660F6EC0 \
8B45 0C \
0F57C9 \
F30F2AC8 \
F30F105424 04 \
F30F5915 (<codecave:float_constants> + 0x40) \
F30F59D1 \
F30F5AC0 \
83EC 08 \
F20F110424 \
E8 [0x45BDA4] \
83C4 08 \
D95C24 0C \
F30F104C24 0C \
F30F59CA \
F30F118E AC0C0000 \
83EC 08 \
F20F110424 \
E8 [0x45BCF4] \
83C4 08 \
D95C24 0C \
F30F595424 0C \
F30F1196 B00C0000 \
C786 B40C0000 00000000 \
C0E3 04 \
8A8E 500E0000 \
80E3 10 \
80E1 E0 \
08D9 \
8B1424 \
F30F7E02 \
660FD686 B80C0000 \
8B52 08 \
8996 C00C0000 \
8986 D00C0000 \
C786 C40C0000 19FCFFFF \
C786 C80C0000 00000000 \
8986 CC0C0000 \
80F1 12 \
888E 500E0000 \
E9 D8130000 \
8B0C24 \
8B4481 D8 \
E9 2C060000 \
0FB786 560E0000 \
EB 07 \
0FB786 580E0000 \
98 \
8D88 00010000 \
66 898E B4000000 \
8B0D 88456D00 \
FFB481 34CD0100 \
56 \
E8 [0x432430] \
8A4424 20 \
8886 530E0000 \
8B86 A0090000 \
85C0 \
74 08 \
6A 00 \
56 \
FFD0 \
83C4 08 \
899E 90090000 \
8B03 \
8986 94090000 \
F30F1005 (<codecave:float_constants> + 0x70) \
0F2E05 C46E6C00 \
72 33 \
F30F1086 98090000 \
F30F5805 C06E6C00 \
F30F1186 98090000 \
31C0 \
0F2E05 (<codecave:float_constants> + 0x6C) \
72 18 \
F30F5805 (<codecave:float_constants> + 0x74) \
F30F1186 98090000 \
FF86 9C090000 \
31C0 \
83C4 44 \
5E \
5F \
5B \
5D \
C3 \
8B4D 10 \
89F2 \
E8 [codecave:parse_int_as_arg] \
E9 6E050000 \
8D86 640D0000 \
890424 \
31C0 \
66 83FB 56 \
0F94C0 \
66 8986 AC0D0000 \
0F1086 6C0C0000 \
0F108E A00C0000 \
0F58C8 \
0F118E 680D0000 \
8B45 0C \
8986 640D0000 \
8B5D 10 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 740D0000 \
8B5D 14 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 7C0D0000 \
8B5D 18 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 840D0000 \
8B5D 1C \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 880D0000 \
8B5D 20 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 8C0D0000 \
0F1045 24 \
0F1186 900D0000 \
F30F7E45 34 \
660FD686 A00D0000 \
8B45 3C \
8986 B00D0000 \
B9 F85F5A00 \
FF3424 \
E8 [0x414670] \
8B8E 380E0000 \
89848E B80D0000 \
E9 F9110000 \
B8 FFFFFFFF \
E9 CAFEFFFF \
31DB \
EB 0C \
8B4D 14 \
89F2 \
E8 [codecave:parse_int_as_arg] \
89C3 \
8B4D 10 \
89F2 \
E8 [codecave:parse_int_as_arg] \
85C0 \
0F84 F7190000 \
89C7 \
B9 F8D86900 \
E8 [0x41E7F0] \
31D2 \
F7F7 \
01DA \
E9 10010000 \
660FEFC0 \
EB 1D \
8B5D 14 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
660F7E4424 18 \
B9 F8D86900 \
E8 [0x41E820] \
D95C24 28 \
8B5D 10 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
F30F594424 28 \
E9 52010000 \
8B4D 10 \
89F2 \
E8 [codecave:parse_int_as_arg] \
89C7 \
8B4D 14 \
89F2 \
E8 [codecave:parse_int_as_arg] \
01F8 \
E9 9A030000 \
8B4D 10 \
89F2 \
E8 [codecave:parse_int_as_arg] \
89C7 \
8B4D 14 \
89F2 \
E8 [codecave:parse_int_as_arg] \
29C7 \
8B4D 0C \
B8 EFD8FFFF \
29C8 \
83F8 0C \
0F83 37160000 \
89BC86 A4090000 \
E9 03110000 \
8B4D 10 \
89F2 \
E8 [codecave:parse_int_as_arg] \
89C7 \
8B4D 14 \
89F2 \
E8 [codecave:parse_int_as_arg] \
0FAFC7 \
E9 45030000 \
8B4D 10 \
89F2 \
E8 [codecave:parse_int_as_arg] \
89C7 \
8B4D 14 \
89F2 \
E8 [codecave:parse_int_as_arg] \
89C1 \
89F8 \
99 \
F7F9 \
E9 23030000 \
8B4D 10 \
89F2 \
E8 [codecave:parse_int_as_arg] \
89C7 \
8B4D 14 \
89F2 \
E8 [codecave:parse_int_as_arg] \
89C1 \
89F8 \
99 \
F7F9 \
8B4D 0C \
B8 EFD8FFFF \
29C8 \
83F8 0C \
0F83 46130000 \
899486 A4090000 \
E9 87100000 \
8B4D 0C \
B8 EFD8FFFF \
29C8 \
83F8 0C \
0F83 BA150000 \
8D8486 A4090000 \
FF00 \
E9 66100000 \
8B4D 0C \
B8 EFD8FFFF \
29C8 \
83F8 0C \
0F83 B9150000 \
8D8486 A4090000 \
FF08 \
E9 45100000 \
8B5D 10 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
660F7E4424 18 \
8B5D 14 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
F30F584424 18 \
E9 E4000000 \
8B5D 10 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
660F7E4424 18 \
8B5D 14 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
F30F104C24 18 \
F30F5CC8 \
E9 92000000 \
8B5D 10 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
660F7E4424 18 \
8B5D 14 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
F30F594424 18 \
EB 4D \
8B5D 10 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
660F7E4424 18 \
8B5D 14 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
F30F104C24 18 \
F30F5EC8 \
0F28C1 \
8B4D 0C \
B8 EFD8FFFF \
29C8 \
83F8 0C \
73 0E \
F30F118486 A4090000 \
E9 F90E0000 \
8D50 F2 \
83FA 03 \
0F83 CE130000 \
B8 E1D8FFFF \
29C8 \
8B0C24 \
F30F110481 \
E9 D90E0000 \
8B5D 14 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
F30F5AC0 \
F20F114424 18 \
8B5D 10 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
F30F5AC0 \
83EC 10 \
F20F104C24 28 \
F20F114C24 08 \
660FD60424 \
E8 [0x45BE60] \
83C4 10 \
D95C24 0C \
E9 C8000000 \
8B5D 1C \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
660F7E4424 18 \
8B5D 14 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
F30F104C24 18 \
F30F5CC8 \
0F57C0 \
F30F5AC1 \
F20F114424 18 \
8B5D 18 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
660F7E4424 24 \
8B5D 10 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
F30F104C24 24 \
F30F5CC8 \
0F57C0 \
F30F5AC1 \
83EC 10 \
F20F104C24 28 \
F20F114C24 08 \
660FD60424 \
E8 [0x45BE40] \
83C4 10 \
D95C24 0C \
8B4424 0C \
8B55 0C \
B9 EFD8FFFF \
29D1 \
83F9 0C \
73 0C \
89848E A4090000 \
E9 850D0000 \
8D79 F2 \
83FF 03 \
73 12 \
B9 E1D8FFFF \
29D1 \
8B1424 \
89048A \
E9 6B0D0000 \
83F9 15 \
0F84 62120000 \
83F9 17 \
0F85 590D0000 \
8B4C24 04 \
8901 \
E9 4E0D0000 \
8B4D 0C \
B8 EFD8FFFF \
29C8 \
83F8 0C \
0F83 C1120000 \
8D8486 A4090000 \
E9 26150000 \
8B4D 0C \
89F2 \
E8 [codecave:parse_int_as_arg] \
89C7 \
8B4D 10 \
89F2 \
E8 [codecave:parse_int_as_arg] \
31C9 \
31D2 \
39C7 \
0F9DC2 \
8D4412 FF \
0F44C1 \
8986 D4090000 \
E9 FE0C0000 \
8B5D 0C \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
660F7E0424 \
8B5D 10 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
660F6EC0 \
31C0 \
31C9 \
F30F100C24 \
0F2EC8 \
0F97C1 \
8D4C09 FF \
0F44C8 \
898E D4090000 \
E9 9E0C0000 \
8B4D 18 \
89F2 \
E8 [codecave:parse_int_as_arg] \
3B45 1C \
0F8D 8B0C0000 \
E9 E90F0000 \
8B4D 18 \
89F2 \
E8 [codecave:parse_int_as_arg] \
3B45 1C \
0F85 730C0000 \
E9 D10F0000 \
8B4D 18 \
89F2 \
E8 [codecave:parse_int_as_arg] \
3B45 1C \
0F8E 5B0C0000 \
E9 B90F0000 \
8B4D 18 \
89F2 \
E8 [codecave:parse_int_as_arg] \
3B45 1C \
0F84 430C0000 \
E9 A10F0000 \
8B5D 0C \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 6C0C0000 \
8B5D 10 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 700C0000 \
8B5D 14 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 740C0000 \
F686 520E0000 01 \
0F84 D40B0000 \
F30F108E 6C0C0000 \
F30F1086 600E0000 \
0F2EC8 \
77 0D \
F30F1086 680E0000 \
0F2EC8 \
73 08 \
F30F1186 6C0C0000 \
F30F1086 700C0000 \
F30F108E 640E0000 \
0F2EC1 \
77 11 \
F30F108E 6C0E0000 \
0F2EC1 \
0F83 840B0000 \
F30F118E 700C0000 \
E9 770B0000 \
8B5D 0C \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 840C0000 \
8B5D 10 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 880C0000 \
8B5D 14 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 8C0C0000 \
80A6 500E0000 FC \
E9 0E0B0000 \
8B5D 0C \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 900C0000 \
8B5D 10 \
E9 FE0E0000 \
8B5D 0C \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 940C0000 \
E9 F60E0000 \
8B5D 0C \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 9C0C0000 \
8A86 500E0000 \
24 FC \
0C 01 \
8886 500E0000 \
F30F1045 0C \
B9 F8D86900 \
E8 [0x41E820] \
D95C24 2C \
F30F104D 10 \
F30F5CC8 \
F30F594C24 2C \
F30F58C8 \
F30F118E 900C0000 \
E9 610A0000 \
F30F104D 0C \
B9 F8D86900 \
E8 [0x41E820] \
D95C24 30 \
F30F1045 10 \
F30F5CC1 \
F30F594424 30 \
F30F58C1 \
F30F108E 6C0C0000 \
F30F1096 600E0000 \
F30F5815 (<codecave:float_constants> + 0x50) \
0F2ED1 \
0F86 E30F0000 \
0F2E05 (<codecave:float_constants> + 0x38) \
0F86 BE0F0000 \
F30F1015 (<codecave:float_constants> + 0x5C) \
E9 C20F0000 \
F30F100D 68AA6C00 \
F30F5C8E 6C0C0000 \
0F57DB \
0F2ECB \
F30F1005 (<codecave:float_constants> + 0x38) \
73 43 \
F30F1015 6CAA6C00 \
F30F5C96 700C0000 \
0F2ED3 \
73 2E \
0F57C0 \
F30F5AC1 \
0F57C9 \
F30F5ACA \
83EC 10 \
F20F114424 08 \
F20F110C24 \
E8 [0x45BE40] \
83C4 10 \
D95C24 0C \
F30F104424 0C \
F30F5845 0C \
F30F1186 900C0000 \
8B5D 10 \
E9 9F0D0000 \
F30F6F45 0C \
F30F7F86 600E0000 \
808E 520E0000 01 \
E9 6F090000 \
80A6 520E0000 FE \
E9 63090000 \
8B4D 0C \
BA 67666666 \
89C8 \
F7EA \
89D0 \
C1E8 1F \
D1FA \
01C2 \
A1 10D76900 \
0FAFC2 \
BF 0F000000 \
29C7 \
F7D8 \
85C0 \
0F48C7 \
C1F8 04 \
01CA \
01C2 \
8996 540D0000 \
C786 580D0000 19FCFFFF \
C786 5C0D0000 00000000 \
C786 600D0000 00000000 \
E9 08090000 \
8B4D 0C \
BA 67666666 \
89C8 \
F7EA \
89D7 \
89D0 \
C1E8 1F \
D1FF \
01C7 \
A1 10D76900 \
0FAFC7 \
BA 0F000000 \
29C2 \
F7D8 \
85C0 \
0F48C2 \
C1F8 04 \
01CF \
01C7 \
89BE 540D0000 \
0F84 C8080000 \
B9 F8D86900 \
E8 [0x41E7F0] \
31D2 \
F7F7 \
C786 580D0000 19FCFFFF \
C786 5C0D0000 00000000 \
8996 600D0000 \
E9 9B080000 \
808E 500E0000 20 \
E9 8F080000 \
80A6 500E0000 DF \
E9 83080000 \
F30F1086 A00C0000 \
F30F108E A40C0000 \
F30F5886 6C0C0000 \
8D86 000D0000 \
F30F1186 040D0000 \
F30F588E 700C0000 \
F30F118E 080D0000 \
F30F1086 A80C0000 \
F30F5886 740C0000 \
F30F1186 0C0D0000 \
E9 16F0FFFF \
8B5D 0C \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 A00C0000 \
8B5D 10 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 A40C0000 \
8B5D 14 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 A80C0000 \
E9 CE070000 \
8B4D 0C \
89F2 \
E8 [codecave:parse_int_as_arg] \
8986 300D0000 \
8B4D 10 \
89F2 \
E8 [codecave:parse_int_as_arg] \
8986 340D0000 \
8B4D 14 \
89F2 \
E8 [codecave:parse_int_as_arg] \
8986 380D0000 \
8B4D 18 \
89F2 \
E8 [codecave:parse_int_as_arg] \
8986 3C0D0000 \
8B5D 1C \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 200D0000 \
8B5D 20 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 240D0000 \
8B5D 24 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 280D0000 \
8B5D 28 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 2C0D0000 \
E9 0D070000 \
B9 F85F5A00 \
E8 [0x414340] \
E9 FE060000 \
8B45 0C \
8A96 4C0D0000 \
89C1 \
C1E9 1E \
80E1 02 \
80E2 FD \
08CA \
80F2 02 \
8896 4C0D0000 \
85C0 \
0F88 D7060000 \
8986 500D0000 \
E9 CC060000 \
8B4D 0C \
89F2 \
E8 [codecave:parse_int_as_arg] \
8986 380E0000 \
E9 B7060000 \
8B45 0C \
8B9C86 B80D0000 \
85DB \
0F84 A5060000 \
8B45 10 \
890424 \
660F6EC0 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F440424 \
660F6EC0 \
F30F5883 2C020000 \
F30F1183 2C020000 \
E9 6F060000 \
8B45 0C \
8B9C86 B80D0000 \
85DB \
0F84 5D060000 \
8B45 10 \
890424 \
660F6EC0 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F440424 \
660F6EC0 \
F30F1015 68AA6C00 \
F30F5C93 20020000 \
0F57E4 \
0F2ED4 \
F30F100D (<codecave:float_constants> + 0x38) \
73 43 \
F30F101D 6CAA6C00 \
F30F5C9B 24020000 \
0F2EDC \
73 2E \
0F57C9 \
F30F5ACA \
0F57D2 \
F30F5AD3 \
83EC 10 \
F20F114C24 08 \
F20F111424 \
E8 [0x45BE40] \
83C4 10 \
D95C24 0C \
F30F104C24 0C \
F30F58C8 \
F30F118B 2C020000 \
E9 C8050000 \
8B45 0C \
8B8486 B80D0000 \
85C0 \
0F84 B6050000 \
F30F1080 20020000 \
F30F1088 24020000 \
F30F5845 10 \
F30F1180 20020000 \
F30F584D 14 \
F30F1188 24020000 \
F30F1080 28020000 \
F30F5845 18 \
F30F1180 28020000 \
E9 72050000 \
8B45 0C \
8B8486 B80D0000 \
85C0 \
0F84 60050000 \
31C9 \
83B8 58020000 00 \
0F94C1 \
898E D4090000 \
E9 49050000 \
8B45 0C \
8B8486 B80D0000 \
85C0 \
0F84 37050000 \
83B8 58020000 00 \
0F84 2A050000 \
66 83B8 6C020000 01 \
0F87 1C050000 \
66 C780 6C020000 0200 \
C780 5C020000 19FCFFFF \
C780 60020000 00000000 \
C780 64020000 00000000 \
E9 F0040000 \
8D45 10 \
0FBF55 0C \
B9 30BC6900 \
50 \
52 \
E8 [0x417BFD] \
C705 8C5F5A00 01000000 \
C705 905F5A00 01000000 \
0FBF7D 0E \
893D 985F5A00 \
8B1CBD 20614700 \
891D 945F5A00 \
B9 F85F5A00 \
E8 [0x414340] \
C705 907B4800 01000000 \
C705 947B4800 00000000 \
660F6F05 (<codecave:float_constants> + 0x0) \
F30F7F86 D40C0000 \
833D BCBC6900 00 \
0F85 77040000 \
891C24 \
B8 28924B00 \
C1E7 06 \
8D9407 C02A1E00 \
31C0 \
31C9 \
0FB65C05 10 \
0FB6C9 \
01D9 \
881C02 \
40 \
85DB \
75 EE \
BA 28924B00 \
388C3A BA2A1E00 \
0F85 AE0C0000 \
0FBF843A E42A1E00 \
8B0C24 \
898C3A B42A1E00 \
3D 0E270000 \
0F8F 20040000 \
40 \
66 89843A E42A1E00 \
E9 12040000 \
8B3D 905F5A00 \
85FF \
0F84 9D000000 \
B9 30BC6900 \
E8 [0x41732C] \
83FF 01 \
0F85 80000000 \
B9 F85F5A00 \
6A 01 \
68 800C0000 \
E8 [0x414360] \
833D 8C5F5A00 00 \
74 66 \
8B0D 945F5A00 \
8B1D 985F5A00 \
A1 48BC6900 \
0FAFC1 \
BA 67666666 \
F7EA \
89D7 \
89D0 \
C1E8 1F \
C1FF 02 \
01C7 \
01CF \
B9 30BC6900 \
57 \
E8 [0x417458] \
013D A4BC6900 \
833D BCBC6900 00 \
75 1D \
C1E3 06 \
66 FF83 0EBD6900 \
A0 BDD46900 \
00C0 \
0205 BED46900 \
8883 E3BC6900 \
FF05 C8BC6900 \
C705 905F5A00 00000000 \
C705 907B4800 00000000 \
E9 58030000 \
8B5D 10 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
894424 0C \
8B5D 14 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
894424 10 \
8B5D 18 \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
894424 14 \
0FBE45 1E \
0FBF55 1C \
0FB77D 0C \
8D5C24 0C \
B9 C8794B00 \
FF75 20 \
50 \
52 \
53 \
57 \
E8 [0x411390] \
E9 DB020000 \
31C0 \
B9 28924B00 \
EB 15 \
<nop:5> \
05 C80E0000 \
3D 00C80E00 \
0F84 BD020000 \
80BC01 C0040000 00 \
79 E6 \
0FB69401 C1040000 \
F6C2 08 \
75 D9 \
C78401 54030000 00000000 \
F6C2 01 \
75 C9 \
8B9401 B4020000 \
85D2 \
78 BE \
0FBFD2 \
8BBC91 28ECFCFF \
893C01 \
C74401 04 19FCFFFF \
C74401 08 00000000 \
C74401 0C 00000000 \
66 895401 48 \
C78401 B4020000 FFFFFFFF \
EB 87 \
8B45 0C \
8D88 00010000 \
66 898E B4000000 \
8B0D 88456D00 \
FFB481 34CD0100 \
56 \
E8 [0x432430] \
E9 2C020000 \
0FB745 14 \
66 8986 5C0E0000 \
F30F7E45 0C \
660FD686 540E0000 \
C686 530E0000 FF \
E9 08020000 \
8A45 0E \
8886 3E0E0000 \
0FB745 0C \
66 8986 3C0E0000 \
E9 EF010000 \
8B45 0C \
89C1 \
C1E9 1F \
89CA \
80F2 01 \
8815 50BC6900 \
8AB6 510E0000 \
C0E2 03 \
80E6 F7 \
08D6 \
88B6 510E0000 \
84C9 \
0F85 F1090000 \
8986 400E0000 \
893485 605F5A00 \
C705 54BC6900 0000803F \
E9 A4010000 \
8B45 0C \
8BBE A00E0000 \
8D4F 01 \
898E A00E0000 \
8B15 38644700 \
B9 E07F4800 \
FF3482 \
6A 01 \
FF7424 08 \
6A 0D \
E8 [0x40EF50] \
8984BE 700E0000 \
F30F7E45 10 \
660FD680 40010000 \
8B4D 18 \
8988 48010000 \
8B45 1C \
8986 A40E0000 \
E9 4C010000 \
8B45 14 \
8986 800C0000 \
F30F7E45 0C \
660FD686 780C0000 \
E9 31010000 \
8A45 0C \
8A8E 510E0000 \
00C0 \
24 02 \
80E1 FD \
E9 7E010000 \
8A45 0C \
8A8E 510E0000 \
C0E0 04 \
24 10 \
80E1 EF \
E9 68010000 \
B9 503F6D00 \
6A 00 \
FF75 0C \
E8 [0x4311E0] \
E9 F2000000 \
8A45 0C \
8A8E 510E0000 \
C0E0 05 \
80E1 1F \
E9 40010000 \
8B45 0C \
8986 440C0000 \
E9 D0000000 \
8B45 0C \
8B4D 10 \
89848E 480C0000 \
E9 BE000000 \
8B45 0C \
8986 680C0000 \
B8 28924B00 \
0FBF4D 06 \
01CD \
F686 520E0000 04 \
75 55 \
8B8E 3C0C0000 \
6BD1 4C \
8B7C24 20 \
0F1047 3C \
0F118416 180A0000 \
0F1047 30 \
0F118416 0C0A0000 \
0F1047 20 \
0F118416 FC090000 \
F30F6F07 \
0F104F 10 \
0F118C16 EC090000 \
F30F7F8416 DC090000 \
83F9 06 \
7F 06 \
FF86 3C0C0000 \
8B8E 680C0000 \
8B8C8E 480C0000 \
0FBFC9 \
8B8488 28ECFCFF \
8986 90090000 \
C786 94090000 19FCFFFF \
C786 98090000 00000000 \
C786 9C090000 00000000 \
66 898E D8090000 \
C786 680C0000 FFFFFFFF \
0FBF5D 06 \
01EB \
E9 60E3FFFF \
8B45 0C \
8986 E80C0000 \
8986 E40C0000 \
EB E4 \
8B45 0C \
C786 F00C0000 19FCFFFF \
C786 F40C0000 00000000 \
8986 F80C0000 \
EB C5 \
8B45 0C \
8986 AC0E0000 \
EB BA \
8B45 0C \
8986 B00E0000 \
E9 D5010000 \
8A45 0C \
24 01 \
8A8E 510E0000 \
80E1 FE \
08C1 \
888E 510E0000 \
EB 94 \
B9 E07F4800 \
FF75 14 \
FF75 10 \
FF7424 08 \
FF75 0C \
E8 [0x40EF50] \
E9 78FFFFFF \
8B7D 0C \
85FF \
0F84 6DFFFFFF \
0FBF05 B0D46900 \
3D 80000000 \
0F8D 67050000 \
31DB \
8B0C24 \
8B41 08 \
894424 14 \
F20F1001 \
F20F114424 0C \
B9 F8D86900 \
E8 [0x41E820] \
D95C24 38 \
F30F104424 38 \
F30F100D (<codecave:float_constants> + 0x30) \
F30F59C1 \
F30F1015 (<codecave:float_constants> + 0x34) \
F30F58C2 \
F30F584424 0C \
F30F114424 0C \
B9 F8D86900 \
E8 [0x41E820] \
D95C24 34 \
F30F104424 34 \
F30F59C1 \
F30F58C2 \
F30F584424 10 \
F30F114424 10 \
31C0 \
85DB \
0F94C0 \
01C0 \
B9 68E26900 \
6A 00 \
50 \
8D4424 14 \
50 \
E8 [0x41F290] \
43 \
39DF \
0F85 68FFFFFF \
E9 BCFEFFFF \
8A45 0C \
8A8E 520E0000 \
00C0 \
24 02 \
80E1 FD \
E9 4D010000 \
8B45 0C \
83F8 10 \
0F87 E2060000 \
8D0485 20624700 \
8B00 \
85C0 \
0F84 8AFEFFFF \
55 \
56 \
FFD0 \
83C4 08 \
E9 7EFEFFFF \
8B45 0C \
83F8 10 \
0F87 CD060000 \
8D0485 20624700 \
8B08 \
898E A0090000 \
E9 5EFEFFFF \
B9 68E26900 \
6A 00 \
FF75 0C \
FF7424 08 \
E8 [0x41F290] \
E9 46FEFFFF \
C605 B87D4800 01 \
E9 3AFEFFFF \
0FB745 0C \
66 8986 B4000000 \
E9 2AFEFFFF \
8A45 0C \
8A8E 520E0000 \
C0E0 02 \
24 04 \
80E1 FB \
E9 BA000000 \
F30F6F45 14 \
660F6BC0 \
660FD645 0C \
F30F7F86 D40C0000 \
E9 F9FDFFFF \
8A45 0C \
8A8E 520E0000 \
C0E0 03 \
24 08 \
80E1 F7 \
E9 89000000 \
8B86 440C0000 \
8986 B40E0000 \
C786 F00C0000 19FCFFFF \
C786 F40C0000 00000000 \
C786 F80C0000 00000000 \
E9 B4FDFFFF \
660FEFC0 \
F30F7F86 280E0000 \
F30F7F86 180E0000 \
F30F7F86 080E0000 \
F30F7F86 F80D0000 \
F30F7F86 E80D0000 \
F30F7F86 D80D0000 \
F30F7F86 C80D0000 \
F30F7F86 B80D0000 \
E9 6BFDFFFF \
8A45 0C \
8A8E 520E0000 \
C0E0 04 \
24 10 \
80E1 EF \
08C1 \
888E 520E0000 \
E9 4DFDFFFF \
8D78 F2 \
83FF 03 \
0F83 4C020000 \
B8 E1D8FFFF \
29C8 \
8B0C24 \
891481 \
E9 2FFDFFFF \
F686 520E0000 04 \
0F85 22FDFFFF \
8B86 3C0C0000 \
6BC8 4C \
8B5424 20 \
0F1042 3C \
0F11840E 180A0000 \
0F1042 30 \
0F11840E 0C0A0000 \
0F1042 20 \
0F11840E FC090000 \
F30F6F02 \
0F104A 10 \
0F118C0E EC090000 \
F30F7F840E DC090000 \
85C0 \
0F8E D0FCFFFF \
FF8E 3C0C0000 \
E9 C5FCFFFF \
8B4D 18 \
89F2 \
E8 [codecave:parse_int_as_arg] \
3B45 1C \
0F8F B2FCFFFF \
EB 13 \
8B4D 18 \
89F2 \
E8 [codecave:parse_int_as_arg] \
3B45 1C \
0F8C 9DFCFFFF \
0FBF45 06 \
01C5 \
F686 520E0000 04 \
75 55 \
8B86 3C0C0000 \
6BC8 4C \
8B5424 20 \
0F1042 3C \
0F11840E 180A0000 \
0F1042 30 \
0F11840E 0C0A0000 \
0F1042 20 \
0F11840E FC090000 \
F30F6F02 \
0F104A 10 \
0F118C0E EC090000 \
F30F7F840E DC090000 \
83F8 06 \
7F 06 \
FF86 3C0C0000 \
8B45 0C \
98 \
8B0C85 507E4800 \
898E 90090000 \
C786 94090000 19FCFFFF \
C786 98090000 00000000 \
C786 9C090000 00000000 \
66 8986 D8090000 \
8B45 10 \
8986 A4090000 \
8B45 14 \
8986 B4090000 \
E9 ECFBFFFF \
8B5D 0C \
660F6EC3 \
F30F2CF8 \
89F9 \
89F2 \
E8 [codecave:parse_int_as_arg] \
39F8 \
0F44C3 \
8986 980C0000 \
8A86 500E0000 \
24 FC \
0C 01 \
8886 500E0000 \
E9 B8FBFFFF \
6945 0C 10010000 \
8D9406 10010000 \
8B7D 10 \
8D8F 00010000 \
66 898C06 C4010000 \
8B0D 88456D00 \
FFB4B9 34CD0100 \
52 \
E8 [0x432430] \
E9 81FBFFFF \
8B45 0C \
8986 A80E0000 \
E9 73FBFFFF \
8B45 0C \
8986 B40E0000 \
E9 65FBFFFF \
8B4D 0C \
89F2 \
E8 [codecave:parse_int_as_arg] \
89F9 \
50 \
E8 [0x424154] \
E9 4EFBFFFF \
8B45 0C \
A3 44BC6900 \
8105 0CD76900 C4020000 \
E9 37FBFFFF \
0FB745 10 \
694D 0C 10010000 \
66 89840E C4010000 \
E9 1FFBFFFF \
83F8 15 \
0F84 BA000000 \
83F8 17 \
0F85 0DFBFFFF \
8B4424 04 \
F30F1100 \
E9 00FBFFFF \
8B4C24 08 \
8901 \
E9 F5FAFFFF \
83F8 15 \
0F84 47020000 \
83F8 17 \
0F85 E3FAFFFF \
8B4424 04 \
8910 \
E9 D8FAFFFF \
8D50 F2 \
83FA 03 \
0F83 32020000 \
B8 E1D8FFFF \
29C8 \
8B0C24 \
893C81 \
E9 BAFAFFFF \
8D50 F2 \
83FA 03 \
0F83 2D020000 \
B8 E1D8FFFF \
29C8 \
8B0C24 \
8D0481 \
FF00 \
E9 9AFAFFFF \
8D50 F2 \
83FA 03 \
0F83 22020000 \
B8 E1D8FFFF \
29C8 \
8B0C24 \
8D0481 \
FF08 \
E9 7AFAFFFF \
8D50 F2 \
83FA 03 \
0F83 17020000 \
B8 E1D8FFFF \
29C8 \
8B0C24 \
8D0481 \
E9 53020000 \
8B4424 08 \
F30F1100 \
E9 4FFAFFFF \
0F2E05 (<codecave:float_constants> + 0x54) \
73 0F \
F30F1015 (<codecave:float_constants> + 0x58) \
F30F5CD0 \
0F28C2 \
F30F1096 680E0000 \
F30F5815 (<codecave:float_constants> + 0x60) \
0F2ED1 \
0F83 F6000000 \
0F2E05 (<codecave:float_constants> + 0x38) \
0F83 B0000000 \
0F57C9 \
0F2EC1 \
0F82 A4000000 \
F30F100D (<codecave:float_constants> + 0x5C) \
F30F5CC8 \
E9 C9000000 \
8B1C24 \
8B43 08 \
894424 14 \
F20F1003 \
F20F114424 0C \
B9 F8D86900 \
E8 [0x41E820] \
D95C24 40 \
F30F104424 40 \
F30F100D (<codecave:float_constants> + 0x30) \
F30F59C1 \
F30F1015 (<codecave:float_constants> + 0x34) \
F30F58C2 \
F30F584424 0C \
F30F114424 0C \
B9 F8D86900 \
E8 [0x41E820] \
D95C24 3C \
F30F104424 3C \
F30F59C1 \
F30F58C2 \
F30F584424 10 \
F30F114424 10 \
B9 68E26900 \
6A 00 \
6A 01 \
8D4424 14 \
50 \
E8 [0x41F290] \
4F \
0F85 75FFFFFF \
E9 61F9FFFF \
F30F100D (<codecave:float_constants> + 0x58) \
F30F5CC8 \
0F57D2 \
0F28D8 \
F30FC2DA 02 \
0F54CB \
0F55D8 \
0F56D9 \
F30F100D (<codecave:float_constants> + 0x54) \
F30FC2C8 01 \
0F54D9 \
0F55C8 \
0F56CB \
0F28C1 \
F30F1096 700C0000 \
F30F109E 640E0000 \
F30F581D (<codecave:float_constants> + 0x64) \
0F280D (<codecave:float_constants> + 0x10) \
0F28E0 \
0F57E1 \
F30F10AE 6C0E0000 \
F30F582D (<codecave:float_constants> + 0x68) \
F30FC2EA 01 \
F30FC2D3 01 \
0F54E2 \
0F55D0 \
0F56D4 \
0F57DB \
0F28E0 \
F30FC2E3 01 \
0F54D4 \
0F55E0 \
0F56E2 \
0F57CC \
F30FC2DC 01 \
0F54CB \
0F55DC \
0F56D9 \
0F54DD \
0F55EC \
0F56EB \
F30F11AE 900C0000 \
E9 A5F8FFFF \
8B4424 08 \
8910 \
E9 9AF8FFFF \
83F8 15 \
74 4E \
83F8 17 \
0F85 8CF8FFFF \
8B4424 04 \
8938 \
E9 81F8FFFF \
83F8 15 \
74 40 \
83F8 17 \
75 46 \
8B4424 04 \
FF00 \
E9 6CF8FFFF \
83F8 15 \
74 40 \
83F8 17 \
75 46 \
8B4424 04 \
FF08 \
E9 57F8FFFF \
83F8 15 \
74 40 \
83F8 17 \
75 41 \
8B4424 04 \
EB 3E \
8B4424 08 \
8938 \
E9 3CF8FFFF \
8B4424 08 \
FF00 \
E9 31F8FFFF \
8D45 0C \
FF00 \
E9 27F8FFFF \
8B4424 08 \
FF08 \
E9 1CF8FFFF \
8D45 0C \
FF08 \
E9 12F8FFFF \
8B4424 08 \
EB 03 \
8D45 0C \
F30F1000 \
F30F100D (<codecave:float_constants> + 0x3C) \
F30F59C8 \
F30F580D (<codecave:float_constants> + 0x40) \
660F3A0AC9 09 \
F30F590D (<codecave:float_constants> + 0x44) \
F30F58C8 \
F30F1108 \
E9 D6F7FFFF \
31D2 \
E9 12E6FFFF \
8B86 400E0000 \
C70485 605F5A00 00000000 \
E9 B9F7FFFF \
85C0 \
0F88 B1F7FFFF \
8D0485 (<codecave:float_constants> + 0x54) \
E9 11F9FFFF \
31C9 \
85C0 \
0F88 32F9FFFF \
8D0485 (<codecave:float_constants> + 0x54) \
E9 24F9FFFF \
8D843A BA2A1E00 \
8808 \
C7843A E42A1E00 00000000 \
8B0424 \
89843A B42A1E00 \
31C0 \
E9 4AF3FFFF \
"
		},
		"run_ecl_jump_table": {
			"access": "re",
			"code": "\
(<codecave:run_ecl> + 0xAC4) \
(<codecave:run_ecl> + 0x70) \
(<codecave:run_ecl> + 0xBA) \
(<codecave:run_ecl> + 0x9A0) \
(<codecave:run_ecl> + 0x9A0) \
(<codecave:run_ecl> + 0xACE) \
(<codecave:run_ecl> + 0xAD2) \
(<codecave:run_ecl> + 0xB07) \
(<codecave:run_ecl> + 0xB0D) \
(<codecave:run_ecl> + 0x8E5) \
(<codecave:run_ecl> + 0x8E5) \
(<codecave:run_ecl> + 0x8E5) \
(<codecave:run_ecl> + 0xB66) \
(<codecave:run_ecl> + 0xB83) \
(<codecave:run_ecl> + 0xBBA) \
(<codecave:run_ecl> + 0xBD8) \
(<codecave:run_ecl> + 0xBFA) \
(<codecave:run_ecl> + 0xC36) \
(<codecave:run_ecl> + 0xC57) \
(<codecave:run_ecl> + 0xC78) \
(<codecave:run_ecl> + 0xCC3) \
(<codecave:run_ecl> + 0xD12) \
(<codecave:run_ecl> + 0xD5A) \
(<codecave:run_ecl> + 0xDEA) \
(<codecave:run_ecl> + 0xE51) \
(<codecave:run_ecl> + 0xF6F) \
(<codecave:run_ecl> + 0xF8E) \
(<codecave:run_ecl> + 0xFBF) \
(<codecave:run_ecl> + 0xD5) \
(<codecave:run_ecl> + 0xE3) \
(<codecave:run_ecl> + 0xF1) \
(<codecave:run_ecl> + 0x103) \
(<codecave:run_ecl> + 0x115) \
(<codecave:run_ecl> + 0x5B) \
(<codecave:run_ecl> + 0x2020) \
(<codecave:run_ecl> + 0x1F8E) \
(<codecave:run_ecl> + 0x101F) \
(<codecave:run_ecl> + 0x1FF8) \
(<codecave:run_ecl> + 0x1037) \
(<codecave:run_ecl> + 0x104F) \
(<codecave:run_ecl> + 0x200D) \
(<codecave:run_ecl> + 0x1067) \
(<codecave:run_ecl> + 0x107F) \
(<codecave:run_ecl> + 0x1146) \
(<codecave:run_ecl> + 0x11AF) \
(<codecave:run_ecl> + 0x11D6) \
(<codecave:run_ecl> + 0x20D1) \
(<codecave:run_ecl> + 0x11FA) \
(<codecave:run_ecl> + 0x1229) \
(<codecave:run_ecl> + 0x125C) \
(<codecave:run_ecl> + 0x12BD) \
(<codecave:run_ecl> + 0x7D9) \
(<codecave:run_ecl> + 0x7D9) \
(<codecave:run_ecl> + 0x7D9) \
(<codecave:run_ecl> + 0x7D9) \
(<codecave:run_ecl> + 0x6C8) \
(<codecave:run_ecl> + 0x6C8) \
(<codecave:run_ecl> + 0x6C8) \
(<codecave:run_ecl> + 0x6C8) \
(<codecave:run_ecl> + 0x6C8) \
(<codecave:run_ecl> + 0x7E1) \
(<codecave:run_ecl> + 0x7E1) \
(<codecave:run_ecl> + 0x7E1) \
(<codecave:run_ecl> + 0x7E1) \
(<codecave:run_ecl> + 0x1335) \
(<codecave:run_ecl> + 0x134E) \
(<codecave:run_ecl> + 0x2A4) \
(<codecave:run_ecl> + 0x2A4) \
(<codecave:run_ecl> + 0x2A4) \
(<codecave:run_ecl> + 0x2A4) \
(<codecave:run_ecl> + 0x2A4) \
(<codecave:run_ecl> + 0x2A4) \
(<codecave:run_ecl> + 0x2A4) \
(<codecave:run_ecl> + 0x2A4) \
(<codecave:run_ecl> + 0x2A4) \
(<codecave:run_ecl> + 0x135A) \
(<codecave:run_ecl> + 0x13B5) \
(<codecave:run_ecl> + 0x1422) \
(<codecave:run_ecl> + 0x142E) \
(<codecave:run_ecl> + 0x143A) \
(<codecave:run_ecl> + 0x148D) \
(<codecave:run_ecl> + 0x14EF) \
(<codecave:run_ecl> + 0x15B0) \
(<codecave:run_ecl> + 0x15BF) \
(<codecave:run_ecl> + 0x9AF) \
(<codecave:run_ecl> + 0x9AF) \
(<codecave:run_ecl> + 0x15F1) \
(<codecave:run_ecl> + 0x1606) \
(<codecave:run_ecl> + 0x164E) \
(<codecave:run_ecl> + 0x16F5) \
(<codecave:run_ecl> + 0x174B) \
(<codecave:run_ecl> + 0x1774) \
(<codecave:run_ecl> + 0x17CD) \
(<codecave:run_ecl> + 0x18AB) \
(<codecave:run_ecl> + 0x1965) \
(<codecave:run_ecl> + 0x19E2) \
(<codecave:run_ecl> + 0x1A69) \
(<codecave:run_ecl> + 0x1A91) \
(<codecave:run_ecl> + 0x2105) \
(<codecave:run_ecl> + 0x1AB5) \
(<codecave:run_ecl> + 0x1ACE) \
(<codecave:run_ecl> + 0x1B19) \
(<codecave:run_ecl> + 0x1B71) \
(<codecave:run_ecl> + 0x1B8C) \
(<codecave:run_ecl> + 0x1BA1) \
(<codecave:run_ecl> + 0x1BB7) \
(<codecave:run_ecl> + 0x1BCB) \
(<codecave:run_ecl> + 0x1BDF) \
(<codecave:run_ecl> + 0x1BED) \
(<codecave:run_ecl> + 0x1BFF) \
(<codecave:run_ecl> + 0x1CC8) \
(<codecave:run_ecl> + 0x1CD9) \
(<codecave:run_ecl> + 0x213C) \
(<codecave:run_ecl> + 0x1CF8) \
(<codecave:run_ecl> + 0x1D03) \
(<codecave:run_ecl> + 0x214A) \
(<codecave:run_ecl> + 0x1D11) \
(<codecave:run_ecl> + 0x1D29) \
(<codecave:run_ecl> + 0x1D45) \
(<codecave:run_ecl> + 0x1E01) \
(<codecave:run_ecl> + 0x1E16) \
(<codecave:run_ecl> + 0x1E3F) \
(<codecave:run_ecl> + 0x2158) \
(<codecave:run_ecl> + 0x1E5F) \
(<codecave:run_ecl> + 0x1E77) \
(<codecave:run_ecl> + 0x216F) \
(<codecave:ecl_debug_watch> ? <codecave:ecl_debug_watch> : <codecave:run_ecl> + 0x1CBD) \
(<codecave:run_ecl> + 0x1E83) \
(<codecave:run_ecl> + 0x2186) \
(<codecave:run_ecl> + 0x1E93) \
(<codecave:run_ecl> + 0x1EA9) \
(<codecave:run_ecl> + 0x1EC4) \
(<codecave:run_ecl> + 0x1EDA) \
(<codecave:run_ecl> + 0x1F09) \
(<codecave:run_ecl> + 0x1F52) \
"
		},
		"interpolation_mode_jump_table": {
			"access": "re",
			"code": "\
(<codecave:run_ecl> + 0x1D3) \
(<codecave:run_ecl> + 0x1CF) \
(<codecave:run_ecl> + 0x1CB) \
(<codecave:run_ecl> + 0x4B3) \
(<codecave:run_ecl> + 0x4C1) \
"
		},
		"float_constants": {
			"access": "re",
			"code": "\
000000BF0000003F0000000000000000 \
00000000000000000000000000000000 \
FFFFFFFFFFFFFFFFFFFFFFFF00000000 \
+144.0f \
-72.0f \
DB0FC93F \
83F9223E \
+0.5f \
DB0FC9C0 \
+0.03125f \
+0.3f \
+96.0f \
DB0FC9BF \
DB0F49C0 \
DB0F4940 \
-96.0f \
+48.0f \
-48.0f \
+1.0f \
+0.99f \
-1.0f \
"
		}
	},
	"binhacks": {
		"call_new_ecl_run_A": {
			"addr": 0x411445,
			"code": "\
8B4D F8 \
E8 [codecave:run_ecl] \
<nop:6> \
",
			"expected": "\
8B55 F8 \
52 \
B9 507E4800 \
E8 [0x4074A0] \
"
		},
		"call_new_ecl_run_B": {
			"addr": 0x412581,
			"code": "\
8B4D F8 \
E8 [codecave:run_ecl] \
<nop:6> \
",
			"expected": "\
8B55 DC \
52 \
B9 507E4800 \
E8 [0x4074A0] \
"
		},
		"lol_nop_out_all_the_old_stuff": {
			"addr": 0x4074A0,
			"code": "<nop:0x3734>"
		}
	}
}