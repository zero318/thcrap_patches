{
	"options": {
		"kernel32dll_str": {
			"type": "s",
			"val": "kernel32.dll"
		},
		"detour_chain_str": {
			"type": "s",
			"val": "detour_chain"
		},
		"Resynchronizing_str": {
			"type": "s",
			"val": "Resynchronizing"
		},
		"CreateMutexA_str": {
			"type": "s",
			"val": "CreateMutexA"
		},
		"SetWindowTextA_str": {
			"type": "s",
			"val": "SetWindowTextA"
		},
		"user32dll_str": {
			"type": "s",
			"val": "user32.dll"
		},
		"th155_str": {
			"type": "s",
			"val": "th155"
		},
		"Antimony_str": {
			"type": "s",
			"val": "Antimony"
		},
		"thcrapdll_str": {
			"type": "s",
			"val": "thcrap.dll"
		},
		
		"VirtualQuery_str": {
			"type": "s",
			"val": "VirtualQuery"
		},
		"GetCurrentProcess_str": {
			"type": "s",
			"val": "GetCurrentProcess"
		},
		"FlushInstructionCache_str": {
			"type": "s",
			"val": "FlushInstructionCache"
		},
		"GetCommandLineA_str": {
			"type": "s",
			"val": "GetCommandLineA"
		},
		"GetWindowTextA_str": {
			"type": "s",
			"val": "GetWindowTextA"
		}
	},
	"codecaves": {
		"readexec_data": {
			"access": "re",
			"code": "55 \
8BEC \
83EC 34 \
53 \
56 \
57 \
33FF \
8955 F8 \
57 \
8BF1 \
FF15 <codecave:readonly_data> \
8BD8 \
C745 E8 D6BFDBE6 \
035E 10 \
8BD7 \
895D FC \
B3 80 \
C745 EC E9D6CDBC \
C745 F0 C2E1E3D9 \
66:C745 F4 C8D7 \
C645 F6 74 \
285C15 E8 \
8A5C15 E8 \
42 \
0FB6C3 \
8A7C15 E8 \
0FBECF \
2BC8 \
75 E9 \
8D45 E8 \
2AFB \
50 \
68 <option:kernel32dll_str> \
887C15 E8 \
FF15 <codecave:readonly_data> \
50 \
FF15 (<codecave:readonly_data> + 0x4) \
807D E8 00 \
8BF0 \
8B5D FC \
BA 80000000 \
74 15 \
8A4C3D E8 \
8D040A \
8AD1 \
88443D E8 \
47 \
807C3D E8 00 \
75 EB \
00543D E8 \
8B03 \
85C0 \
74 10 \
8B4D F8 \
3BC1 \
74 10 \
83C3 04 \
8B03 \
85C0 \
75 F3 \
33C0 \
5F \
5E \
5B \
C9 \
C3 \
6A 1C \
8D45 CC \
50 \
53 \
FF15 (<codecave:readonly_data> + 0x8) \
8D45 E0 \
50 \
6A 04 \
FF75 D8 \
FF75 CC \
FFD6 \
8B45 08 \
8903 \
8D45 E0 \
50 \
FF75 E0 \
FF75 D8 \
FF75 CC \
FFD6 \
33C0 \
40 \
EB C7 \
55 \
8BEC \
51 \
53 \
56 \
8B35 <codecave:readonly_data> \
8BD9 \
57 \
6A 00 \
8BFA \
FFD6 \
57 \
53 \
8945 FC \
FFD6 \
50 \
FF15 (<codecave:readonly_data> + 0x4) \
8B7D 0C \
8B4D FC \
8907 \
E8 EE090000 \
8BF0 \
EB 30 \
8B4D FC \
B2 2E \
03C8 \
E8 C50B0000 \
85C0 \
74 04 \
2BC1 \
EB 0D \
33C0 \
3801 \
74 07 \
40 \
803C08 00 \
75 F9 \
50 \
8BD3 \
E8 130C0000 \
85C0 \
74 11 \
83C6 14 \
8B46 0C \
85C0 \
75 C9 \
32C0 \
5F \
5E \
5B \
C9 \
C3 \
FF75 08 \
8B17 \
8BCE \
E8 93FEFFFF \
59 \
EB EC \
55 \
8BEC \
83EC 1C \
8D45 E4 \
56 \
57 \
6A 1C \
8BF1 \
8BFA \
50 \
56 \
FF15 (<codecave:readonly_data> + 0x8) \
85C0 \
74 1A \
8B45 F8 \
F7D0 \
A8 01 \
74 11 \
8B4D E4 \
8D043E \
034D F0 \
3BC8 \
72 04 \
B0 01 \
EB 02 \
32C0 \
5F \
5E \
C9 \
C3 \
55 \
8BEC \
81EC 00010000 \
56 \
BE (<codecave:readwrite_data> + 0x2E0) \
85C9 \
75 08 \
880D (<codecave:readwrite_data> + 0x2E0) \
EB 0C \
8BD1 \
8BCE \
6A 1F \
E8 0C0C0000 \
59 \
A1 (<codecave:readwrite_data> + 0x2DC) \
85C0 \
74 46 \
68 FF000000 \
8D8D 00FFFFFF \
51 \
50 \
FF15 (<codecave:readonly_data> + 0x1C) \
B2 2B \
8D8D 00FFFFFF \
E8 F70A0000 \
51 \
BA (<codecave:readwrite_data> + 0x2B0) \
C640 FF 00 \
E8 AF0A0000 \
51 \
8BD6 \
E8 A70A0000 \
8BC1 \
50 \
FF35 (<codecave:readwrite_data> + 0x2DC) \
FF15 (<codecave:readonly_data> + 0x20) \
5E \
C9 \
C3 \
33C0 \
C2 0C00 \
55 \
8BEC \
6A 00 \
FF75 0C \
FF75 08 \
FF15 (<codecave:readwrite_data> + 0x2D4) \
5D \
C2 0C00 \
55 \
8BEC \
81EC 00010000 \
56 \
8B35 (<codecave:readwrite_data> + 0x2DC) \
85F6 \
75 15 \
8B4D 0C \
E8 BE0A0000 \
85C0 \
74 09 \
8B75 08 \
8935 (<codecave:readwrite_data> + 0x2DC) \
3975 08 \
5E \
75 33 \
8B55 0C \
8D8D 00FFFFFF \
68 FF000000 \
E8 5D0B0000 \
BA (<codecave:readwrite_data> + 0x2B0) \
8D8D 00FFFFFF \
E8 290A0000 \
51 \
BA (<codecave:readwrite_data> + 0x2E0) \
E8 1E0A0000 \
8BC1 \
50 \
EB 03 \
FF75 0C \
FF75 08 \
FF15 (<codecave:readwrite_data> + 0x2D8) \
C9 \
C2 0800 \
55 \
8BEC \
83EC 2C \
53 \
56 \
33F6 \
C745 D4 D7A097A2 \
57 \
C745 D8 A6A7A8A7 \
8BD6 \
C745 DC 547A8A7A \
BB 80000000 \
C745 E0 D7AA9494 \
C745 E4 B8D3D2B8 \
C745 E8 C36F3C8B \
C745 EC D7AA9493 \
C745 F0 B7C8D9BC \
C745 F4 B8E1DC6D \
285C15 D4 \
8A5C15 D4 \
42 \
0FB6C3 \
0FBE4C15 D4 \
2BC8 \
75 EB \
285C15 D4 \
8D45 D4 \
50 \
FF15 <codecave:readonly_data> \
8BF8 \
BB 80000000 \
897D F8 \
85FF \
0F84 25010000 \
8BD6 \
285C15 E0 \
8A5C15 E0 \
42 \
0FB6C3 \
8A7C15 E0 \
0FBECF \
2BC8 \
75 E9 \
8D45 E0 \
2AFB \
50 \
57 \
8B3D (<codecave:readonly_data> + 0x4) \
887C15 E0 \
FFD7 \
A3 (<codecave:readwrite_data> + 0x304) \
8BD6 \
BB 80000000 \
285C15 EC \
8A5C15 EC \
42 \
0FB6C3 \
0FBE4C15 EC \
2BC8 \
75 EB \
285C15 EC \
8D45 EC \
50 \
FF75 F8 \
FFD7 \
BB 80000000 \
A3 (<codecave:readwrite_data> + 0x300) \
3935 (<codecave:readwrite_data> + 0x304) \
0F84 B5000000 \
68 <option:detour_chain_str> \
FF35 (<codecave:readwrite_data> + 0x31C) \
FFD7 \
85C0 \
0F84 A0000000 \
56 \
68 (<codecave:readwrite_data> + 0x300) \
68 (<codecave:readexec_data> + 0x58E) \
8D4D EC \
51 \
68 (<codecave:readwrite_data> + 0x304) \
68 (<codecave:readexec_data> + 0x4FF) \
8D4D E0 \
51 \
8D4D D4 \
6A 01 \
51 \
FFD0 \
8BD6 \
83C4 24 \
8AE3 \
3855 D4 \
74 16 \
8A4C15 D4 \
8AC1 \
02C4 \
8AE1 \
884415 D4 \
42 \
807C15 D4 00 \
75 EA \
006415 D4 \
8BD6 \
8AE3 \
3855 E0 \
74 16 \
8A4C15 E0 \
8AC1 \
02C4 \
8AE1 \
884415 E0 \
42 \
807C15 E0 00 \
75 EA \
006415 E0 \
807D EC 00 \
74 16 \
8A4C35 EC \
8AC1 \
02C3 \
8AD9 \
884435 EC \
46 \
807C35 EC 00 \
75 EA \
A1 (<codecave:readwrite_data> + 0x304) \
8B0D (<codecave:readwrite_data> + 0x300) \
A3 (<codecave:readwrite_data> + 0x30C) \
890D (<codecave:readwrite_data> + 0x310) \
5F \
5E \
5B \
C9 \
C3 \
803D (<codecave:readwrite_data> + 0x308) 00 \
56 \
57 \
8BF2 \
8BF9 \
75 4A \
393D (<codecave:readwrite_data> + 0x314) \
74 0C \
3935 (<codecave:readwrite_data> + 0x318) \
74 04 \
32C0 \
EB 07 \
A0 (<codecave:readwrite_data> + 0x30A) \
FEC0 \
A2 (<codecave:readwrite_data> + 0x30A) \
3C FF \
72 18 \
B9 <option:Resynchronizing_str> \
C605 (<codecave:readwrite_data> + 0x308) 01 \
C605 (<codecave:readwrite_data> + 0x30A) 00 \
E8 00FDFFFF \
893D (<codecave:readwrite_data> + 0x314) \
8935 (<codecave:readwrite_data> + 0x318) \
EB 41 \
803D (<codecave:readwrite_data> + 0x30A) 7F \
76 17 \
5F \
C605 (<codecave:readwrite_data> + 0x308) 00 \
33C9 \
C605 (<codecave:readwrite_data> + 0x30A) 00 \
5E \
E9 D2FCFFFF \
6A 00 \
FF15 <codecave:readonly_data> \
0FB605 (<codecave:readwrite_data> + 0x30A) \
BA (<codecave:readwrite_data> + 0x30) \
50 \
E8 E2010000 \
FE05 (<codecave:readwrite_data> + 0x30A) \
59 \
5F \
5E \
C3 \
55 \
8BEC \
56 \
8B75 0C \
8B4E 04 \
0FBE01 \
83E8 09 \
74 38 \
48 \
83E8 01 \
74 29 \
83E8 07 \
74 17 \
83E8 01 \
75 49 \
833E 1A \
72 44 \
8B51 16 \
8B49 12 \
E8 31FFFFFF \
EB 37 \
833E 19 \
72 32 \
8B51 15 \
8B49 11 \
EB EC \
C605 (<codecave:readwrite_data> + 0x309) 00 \
EB 21 \
803D (<codecave:readwrite_data> + 0x309) 00 \
74 11 \
8B45 14 \
85C0 \
74 06 \
C700 01000000 \
33C0 \
EB 26 \
C605 (<codecave:readwrite_data> + 0x309) 01 \
FF75 28 \
FF75 24 \
FF75 20 \
FF75 1C \
FF75 18 \
FF75 14 \
FF75 10 \
56 \
FF75 08 \
FF15 (<codecave:readwrite_data> + 0x30C) \
5E \
5D \
C2 2400 \
55 \
8BEC \
56 \
FF75 28 \
8B75 0C \
FF75 24 \
FF75 20 \
FF75 1C \
FF75 18 \
FF75 14 \
FF75 10 \
56 \
FF75 08 \
FF15 (<codecave:readwrite_data> + 0x310) \
8B4E 04 \
5E \
8A09 \
84C9 \
74 13 \
7E 0A \
80F9 0A \
7E 0C \
80F9 0B \
74 07 \
C605 (<codecave:readwrite_data> + 0x309) 00 \
5D \
C2 2400 \
55 \
8BEC \
83EC 24 \
53 \
8BDA \
C745 DC D6BFDBE6 \
8BD1 \
895D F0 \
33C9 \
8955 EC \
C745 E0 E9D6CDBC \
8B03 \
C745 E4 C2E1E3D9 \
66:C745 E8 C8D7 \
C645 EA 74 \
894D F4 \
85C0 \
0F84 C0000000 \
56 \
57 \
8BF3 \
8D3C10 \
8A45 08 \
8446 04 \
0F84 9A000000 \
33D2 \
B3 80 \
285C15 DC \
8A5C15 DC \
42 \
0FB6C3 \
8A7C15 DC \
0FBECF \
2BC8 \
75 E9 \
8D45 DC \
2AFB \
50 \
68 <option:kernel32dll_str> \
887C15 DC \
FF15 <codecave:readonly_data> \
50 \
FF15 (<codecave:readonly_data> + 0x4) \
8B5D F0 \
33D2 \
B5 80 \
8945 F8 \
3855 DC \
74 19 \
8A4C15 DC \
8AC1 \
02C5 \
8AE9 \
884415 DC \
42 \
807C15 DC 00 \
75 EA \
8B45 F8 \
006C15 DC \
8D4D FC \
51 \
6A 04 \
6A 01 \
57 \
FFD0 \
85C0 \
74 05 \
8A46 07 \
8807 \
8D45 FC \
50 \
FF75 FC \
6A 01 \
57 \
FF55 F8 \
6A 01 \
57 \
FF15 (<codecave:readonly_data> + 0xC) \
50 \
FF15 (<codecave:readonly_data> + 0x10) \
8B4D F4 \
8B55 EC \
41 \
894D F4 \
8D34CB \
8B06 \
85C0 \
0F85 46FFFFFF \
5F \
5E \
5B \
C9 \
C3 \
55 \
8BEC \
83EC 24 \
56 \
8BF2 \
C745 DC D6BFDBE6 \
33C0 \
C745 E0 E9D6CDBC \
C745 E4 C2E1E3D9 \
66:C745 E8 C8D7 \
C645 EA 74 \
8945 F0 \
3906 \
0F84 0E010000 \
53 \
57 \
8BFE \
8945 FC \
50 \
FF15 <codecave:readonly_data> \
8A4F 04 \
8BD8 \
031E \
80E1 0F \
895D EC \
80F9 0F \
0F84 CE000000 \
33D2 \
B3 80 \
285C15 DC \
8A5C15 DC \
42 \
0FB6C3 \
8A7C15 DC \
0FBECF \
2BC8 \
75 E9 \
8D45 DC \
2AFB \
50 \
68 <option:kernel32dll_str> \
887C15 DC \
FF15 <codecave:readonly_data> \
50 \
FF15 (<codecave:readonly_data> + 0x4) \
8B5D EC \
33D2 \
B5 80 \
8945 F4 \
3855 DC \
74 19 \
8A4C15 DC \
8AC1 \
02C5 \
8AE9 \
884415 DC \
42 \
807C15 DC 00 \
75 EA \
8B45 F4 \
006C15 DC \
8D4D F8 \
51 \
6A 04 \
6A 01 \
53 \
FFD0 \
85C0 \
74 3F \
8A47 04 \
A8 0F \
75 18 \
8B55 FC \
33C9 \
384C32 06 \
74 08 \
41 \
807C0F 06 00 \
75 F8 \
0AC1 \
8847 04 \
0FB6C8 \
B8 80000000 \
99 \
83E1 0F \
F7F9 \
8BC8 \
0FB645 08 \
99 \
F7F9 \
0345 FC \
8A4430 06 \
8803 \
8D45 F8 \
50 \
FF75 F8 \
6A 01 \
53 \
FF55 F4 \
6A 01 \
53 \
FF15 (<codecave:readonly_data> + 0xC) \
50 \
FF15 (<codecave:readonly_data> + 0x10) \
8B45 F0 \
40 \
8945 F0 \
6BC0 18 \
8945 FC \
8D3C30 \
33C0 \
3907 \
0F85 FBFEFFFF \
5F \
5B \
5E \
C9 \
C3 \
55 \
8BEC \
83EC 68 \
53 \
56 \
57 \
33F6 \
C745 98 D7A097A2 \
56 \
C745 9C A6A7A8A7 \
C745 A0 547A8A7A \
C745 A4 6A2A79D7 \
C745 A8 C0D7C4BB \
C745 AC D7DBCFDF \
C745 B0 CDC6E7E8 \
C745 B4 E774D7AA \
C745 B8 85919265 \
C745 BC 32562919 \
C745 C0 58AA7DAA \
C745 C4 58D7AA94 \
C745 C8 94B8D3D2 \
C745 CC B8C36F3C \
C745 D0 8B2D3D8B \
C745 D4 D7AA9493 \
C745 D8 B7C8D9BC \
C745 DC B8E1DC6D \
66:C745 E0 CD1E \
C645 E2 8B \
FF15 <codecave:readonly_data> \
8945 F8 \
8BD6 \
BB 80000000 \
285C15 98 \
8A5C15 98 \
42 \
0FB6C3 \
0FBE4C15 98 \
2BC8 \
75 EB \
285C15 98 \
8BD6 \
BB 80000000 \
285C15 A7 \
8A5C15 A7 \
42 \
0FB6C3 \
8A7C15 A7 \
0FBECF \
2BC8 \
75 E9 \
8D45 E4 \
2AFB \
50 \
887C15 A7 \
8D4D 98 \
68 (<codecave:readexec_data> + 0x226) \
8D55 A7 \
E8 DDF7FFFF \
8BD6 \
BB 80000000 \
8AE3 \
59 \
59 \
3855 98 \
74 16 \
8A4C15 98 \
8AC1 \
02C4 \
8AE1 \
884415 98 \
42 \
807C15 98 00 \
75 EA \
006415 98 \
8BD6 \
8AE3 \
3855 A7 \
74 16 \
8A4C15 A7 \
8AC1 \
02C4 \
8AE1 \
884415 A7 \
42 \
807C15 A7 00 \
75 EA \
006415 A7 \
B9 <option:kernel32dll_str> \
8D45 E8 \
BA <option:CreateMutexA_str> \
50 \
68 (<codecave:readexec_data> + 0x22B) \
E8 78F7FFFF \
8D45 EC \
BA <option:SetWindowTextA_str> \
50 \
68 (<codecave:readexec_data> + 0x240) \
B9 <option:user32dll_str> \
E8 60F7FFFF \
83C4 10 \
8BD6 \
285C15 B6 \
8A5C15 B6 \
42 \
0FB6C3 \
0FBE4C15 B6 \
2BC8 \
75 EB \
285C15 B6 \
8BD6 \
BB 80000000 \
285C15 C5 \
8A5C15 C5 \
42 \
0FB6C3 \
8A7C15 C5 \
0FBECF \
2BC8 \
75 E9 \
8D45 F0 \
2AFB \
50 \
887C15 C5 \
8D4D B6 \
68 (<codecave:readexec_data> + 0x4FF) \
8D55 C5 \
E8 0AF7FFFF \
8BD6 \
BB 80000000 \
8AE3 \
59 \
59 \
3855 C5 \
74 16 \
8A4C15 C5 \
8AC1 \
02C4 \
8AE1 \
884415 C5 \
42 \
807C15 C5 00 \
75 EA \
006415 C5 \
8BD6 \
285C15 D4 \
8A5C15 D4 \
42 \
0FB6C3 \
8A7C15 D4 \
0FBECF \
2BC8 \
75 E9 \
8D45 F4 \
2AFB \
50 \
887C15 D4 \
8D4D B6 \
68 (<codecave:readexec_data> + 0x58E) \
8D55 D4 \
E8 ADF6FFFF \
8BD6 \
BB 80000000 \
8AE3 \
59 \
59 \
3855 D4 \
74 16 \
8A4C15 D4 \
8AC1 \
02C4 \
8AE1 \
884415 D4 \
42 \
807C15 D4 00 \
75 EA \
006415 D4 \
807D B6 00 \
74 16 \
8A4C35 B6 \
8AC1 \
02C3 \
8AD9 \
884435 B6 \
46 \
807C35 B6 00 \
75 EA \
005C35 B6 \
BF (<codecave:readwrite_data> + 0x2D0) \
8B45 F0 \
8D75 E4 \
8B4D F8 \
BA (<codecave:readwrite_data> + 0xB0) \
A3 (<codecave:readwrite_data> + 0x30C) \
8B45 F4 \
A5 \
6A 60 \
A3 (<codecave:readwrite_data> + 0x310) \
A5 \
A5 \
E8 1FFBFFFF \
6A 7F \
BA (<codecave:readwrite_data> + 0x30) \
E8 15FCFFFF \
59 \
59 \
5F \
5E \
5B \
C9 \
C3 \
56 \
8BF1 \
57 \
85F6 \
74 37 \
6A 40 \
5A \
E8 97F6FFFF \
84C0 \
74 2B \
B8 4D5A0000 \
66:3906 \
75 21 \
8B7E 3C \
BA F8000000 \
03FE \
8BCF \
E8 78F6FFFF \
84C0 \
74 0C \
813F 50450000 \
75 04 \
8BC7 \
EB 02 \
33C0 \
5F \
5E \
C3 \
56 \
8BF1 \
E8 B4FFFFFF \
85C0 \
74 0E \
8B80 80000000 \
85C0 \
74 04 \
03C6 \
5E \
C3 \
33C0 \
5E \
C3 \
55 \
8BEC \
83EC 0C \
56 \
57 \
68 <option:detour_chain_str> \
FF35 (<codecave:readwrite_data> + 0x31C) \
FF15 (<codecave:readonly_data> + 0x4) \
6A 00 \
68 (<codecave:readwrite_data> + 0x8) \
68 (<codecave:readexec_data> + 0x240) \
68 <option:SetWindowTextA_str> \
68 (<codecave:readwrite_data> + 0x4) \
68 (<codecave:readexec_data> + 0x22B) \
68 <option:CreateMutexA_str> \
6A 01 \
68 <option:kernel32dll_str> \
FFD0 \
A1 (<codecave:readwrite_data> + 0x4) \
8D75 F4 \
8945 F8 \
BF (<codecave:readwrite_data> + 0x2D0) \
A1 (<codecave:readwrite_data> + 0x8) \
83C4 24 \
8945 FC \
A5 \
A5 \
A5 \
5F \
5E \
C9 \
C3 \
55 \
8BEC \
51 \
51 \
53 \
8BDA \
56 \
57 \
895D F8 \
8BFB \
8A03 \
0FBEF0 \
F7DE \
8845 FE \
1BF6 \
F7D6 \
23F1 \
EB 72 \
8A17 \
84D2 \
74 71 \
8A01 \
0FB6D8 \
8845 FF \
8D43 BF \
83F8 19 \
77 03 \
83C3 20 \
0FB6D2 \
8D42 BF \
83F8 19 \
77 03 \
83C2 20 \
3BDA \
75 09 \
85F6 \
75 02 \
8BF1 \
47 \
EB 3D \
8B5D F8 \
8BFB \
85F6 \
74 07 \
8D4E 01 \
8A01 \
EB 03 \
8A45 FF \
0FB6F0 \
8D46 BF \
83F8 19 \
77 03 \
83C6 20 \
0FB655 FE \
8D42 BF \
83F8 19 \
77 03 \
83C2 20 \
3BF2 \
75 07 \
8BF1 \
8D7B 01 \
EB 02 \
33F6 \
41 \
8039 00 \
75 89 \
0FBE07 \
F7D8 \
5F \
1BC0 \
F7D0 \
23C6 \
5E \
5B \
C9 \
C3 \
55 \
8BEC \
51 \
53 \
56 \
33F6 \
56 \
FF15 <codecave:readonly_data> \
8BD8 \
FF15 (<codecave:readonly_data> + 0x18) \
8945 FC \
B9 <option:th155_str> \
8BD1 \
8BC8 \
E8 30FFFFFF \
85C0 \
75 16 \
46 \
8BC6 \
C1E0 04 \
8D88 <option:th155_str> \
8B45 FC \
8039 00 \
75 DF \
EB 36 \
68 <option:thcrapdll_str> \
FF15 <codecave:readonly_data> \
A3 (<codecave:readwrite_data> + 0x31C) \
E8 9DFEFFFF \
E8 1FF6FFFF \
6A 40 \
BA (<codecave:readwrite_data> + 0xB0) \
8BCB \
E8 34F9FFFF \
6A 7F \
BA (<codecave:readwrite_data> + 0x30) \
E8 2AFAFFFF \
59 \
59 \
5E \
33C0 \
5B \
C9 \
C3 \
33C0 \
40 \
C2 0C00 \
56 \
33F6 \
8039 00 \
57 \
8BFA \
74 07 \
46 \
803C0E 00 \
75 F9 \
33D2 \
3817 \
74 16 \
81FA 00010000 \
73 0E \
8A043A \
88040E \
46 \
42 \
803C3A 00 \
75 EA \
5F \
C6040E 00 \
8BC1 \
5E \
C2 0400 \
53 \
8A19 \
8BC1 \
84DB \
74 08 \
40 \
8038 00 \
75 FA \
32DB \
3ADA \
5B \
74 09 \
3BC1 \
76 05 \
48 \
3810 \
75 F7 \
3810 \
74 02 \
33C0 \
C3 \
8A01 \
53 \
56 \
84C0 \
74 34 \
BA <option:Antimony_str> \
2BD1 \
33F6 \
3C 41 \
75 16 \
8AD8 \
8BC1 \
84DB \
74 0E \
8038 00 \
74 09 \
46 \
40 \
8A1C02 \
3818 \
74 EE \
80BE <option:Antimony_str> 00 \
74 0D \
41 \
4A \
8A01 \
84C0 \
75 D3 \
33C0 \
5E \
5B \
C3 \
8BC1 \
EB F9 \
55 \
8BEC \
51 \
51 \
53 \
56 \
8BF2 \
2BF1 \
57 \
8B7D 08 \
8975 F8 \
8A01 \
0FBED0 \
8845 0B \
8D42 9F \
8D5A E0 \
83F8 19 \
76 02 \
8BDA \
0FBE340E \
8D46 9F \
8945 FC \
8D46 E0 \
837D FC 19 \
8945 FC \
76 03 \
8975 FC \
3B5D FC \
7C 31 \
8D5A 9F \
83FB 19 \
77 03 \
83C2 E0 \
8D5E 9F \
83FB 19 \
76 02 \
8BC6 \
3BD0 \
7F 13 \
807D 0B 00 \
74 09 \
8B75 F8 \
41 \
83EF 01 \
75 A5 \
33C0 \
EB 08 \
33C0 \
40 \
EB 03 \
83C8 FF \
5F \
5E \
5B \
C9 \
C2 0400 \
55 \
8BEC \
53 \
8A1A \
56 \
8B75 08 \
84DB \
74 13 \
2BD1 \
8BC6 \
4E \
85C0 \
74 0A \
8819 \
41 \
8A1C0A \
84DB \
75 EF \
83FE FF \
5E \
5B \
74 03 \
C601 00 \
8BC1 \
5D \
C3 \
FF25 (<codecave:readonly_data> + 0x14) \
FF25 (<codecave:readonly_data> + 0x20) \
CC \
CC \
8BD7 \
8B7C24 04 \
8A4424 08 \
8B4C24 0C \
FC \
F3:AA \
8BFA \
C3 \
8BD7 \
8BC6 \
8B7C24 04 \
8B7424 08 \
8B4C24 0C \
F3:A4 \
8BFA \
8BF0 \
C3 \
"
		},
		"readonly_data": {
			"access": "r",
			"size": 0x24,
			"code": "\
<th_GetModuleHandleA> \
<th_GetProcAddress> \
"
		},
		"readwrite_data": {
			"access": "rw",
			"size": 0x1000,
			"code": "01000000(<codecave:readexec_data> + 0xE0E)(<codecave:readexec_data> + 0xE14)00000000444C494D49543A414444522D434D4F442D4356414C2D52414D505441424C453A4C360E007005050A0F7F00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005350415443483A414444522D434D4F442D4356414C2D4E4D4F442D4E56414C3A20E812006155A1C3300613006155A1C3F02A13006155A1C37A350E006105E17F000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202B204E20312E3033657620"
		},
		"netplay_patch_init": {
			"access": "re",
			"export": true,
			"code": "\
56 \
68 <option:kernel32dll_str> \
E8 [th_GetModuleHandleA] \
89C6 \
68 <option:VirtualQuery_str> \
50 \
E8 [th_GetProcAddress] \
A3 (<codecave:readonly_data> + 0x8) \
68 <option:GetCurrentProcess_str> \
56 \
E8 [th_GetProcAddress] \
A3 (<codecave:readonly_data> + 0xC) \
68 <option:FlushInstructionCache_str> \
56 \
E8 [th_GetProcAddress] \
A3 (<codecave:readonly_data> + 0x10) \
68 <option:CreateMutexA_str> \
56 \
E8 [th_GetProcAddress] \
A3 (<codecave:readonly_data> + 0x14) \
68 <option:GetCommandLineA_str> \
56 \
E8 [th_GetProcAddress] \
A3 (<codecave:readonly_data> + 0x18) \
68 <option:user32dll_str> \
E8 [th_GetModuleHandleA] \
89C6 \
68 <option:GetWindowTextA_str> \
50 \
E8 [th_GetProcAddress] \
A3 (<codecave:readonly_data> + 0x1C) \
68 <option:SetWindowTextA_str> \
56 \
E8 [th_GetProcAddress] \
A3 (<codecave:readonly_data> + 0x20) \
5E \
C3 \
"
		},
		"netplay_patch_post_init": {
			"access": "re",
			"export": true,
			"code": "\
E8 [(<codecave:readexec_data> + 0xC37)] \
6A 00 \
E8 [th_GetModuleHandleA] \
50 \
E8 [thcrap_detour] \
58 \
C3 \
"
		}
	},
	"binhacks": {
		"skip_command_line_parsing": {
			"addr": "<codecave:readexec_data> + 0xC48",
			"code": "EB 2F <int3:4>"
		},
		"fix_detours": {
			"addr": "<codecave:readexec_data> + 0xB2B",
			"code": "\
56 \
57 \
55 \
89E5 \
83EC 0C \
?? ???????? \
???? ???????? \
???? ???????? \
89C6 \
6A 00 \
68 (<codecave:readwrite_data> + 0x8) \
68 (<codecave:readexec_data> + 0x240) \
68 <option:SetWindowTextA_str> \
6A 01 \
68 <option:user32dll_str> \
FFD6 \
6A 00 \
68 (<codecave:readwrite_data> + 0x4) \
68 (<codecave:readexec_data> + 0x22B) \
68 <option:CreateMutexA_str> \
6A 01 \
68 <option:kernel32dll_str> \
FFD6 \
BE (<codecave:readwrite_data> + 0x4) \
BF (<codecave:readwrite_data> + 0x2D0) \
8B4465 FC \
AB \
A5 \
A5 \
C9 \
5F \
5E \
C3 \
"
		}
	}
}