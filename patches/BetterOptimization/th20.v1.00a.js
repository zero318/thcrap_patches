{
	"options": {
		"better_optimization_trig": {
			"val": 1
		},
		"iterator_compatibility": {
			"type": "b",
			"val": false
		}
	},
	"codecaves": {
		"preprocess_layers": {
			"access": "re",
			"code": "\
53 \
57 \
56 \
B9 <Rx1C03F0> \
E8 [RxC470] \
8B7C24 10 \
8BB7 00070000 \
83C6 (u8:<cpuid:avx2>?0x1F:0x0F) \
83E6 (u8:<cpuid:avx2>?0xE0:0xF0) \
8D1CB6 \
8B87 08070000 \
399F 04070000 \
73 18 \
899F 04070000 \
6A (u8:<cpuid:avx2>?0x20:0x10) \
53 \
50 \
E8 [th_aligned_realloc] \
83C4 0C \
8987 08070000 \
53 \
6A FF \
50 \
E8 [Rx144760] \
83C4 0C \
01C6 \
89B7 0C070000 \
8B8F CC060000 \
EB 1F \
<int3:7> \
0FB693 {x.u8:26;29;30;31;32;33;34;35;36} \
8810 \
40 \
8D91 14FBFFFF \
8916 \
83C6 04 \
8B49 04 \
85C9 \
74 22 \
83B9 84000000 00  \
75 F0 \
8B91 28FBFFFF \
8D5A D3 \
83FB 08 \
76 CD \
81FA FE000000 \
76 CC \
EB D8 \
CC \
8B8F E4060000 \
EB 19 \
CC \
0FB692 {x.u8:45;47;47;46;47;48;49;50;51;52;53} \
8810 \
40 \
8D91 14FBFFFF \
8916 \
83C6 04 \
8B49 04 \
85C9 \
74 1F \
83B9 84000000 00  \
75 F0 \
8B91 28FBFFFF \
83C2 E6 \
83FA 0A \
76 CD \
BA 2F000000 \
EB CD \
CC \
B9 <Rx1C03F0> \
E8 [RxC660] \
B8 01000000 \
5E \
5F \
5B \
C3 \
"
		},
		"render_layer_turbo": {
			"ignore": "<cpuid:avx2>",
			"access": "re",
			"align": 64,
			"code": "\
55 \
53 \
57 \
56 \
83EC 08 \
8BB1 08070000 \
8BB9 0C070000 \
39FE \
74 43 \
89D3 \
89CD \
6A 00 \
52 \
E8 [Rx4F3D0] \
69D3 01010101 \
89F8 \
83C7 FC \
895424 04 \
890424 \
660F6EC2 \
6690 \
660F70C0 00 \
660F6F0E \
660F74C8 \
83C6 10 \
660FD7D9 \
83C7 40 \
85DB \
75 1A \
39C6 \
75 E6 \
B8 01000000 \
83C4 08 \
5E \
5F \
5B \
5D \
C3 \
<int3:9> \
F6C3 01 \
74 0A \
FF77 C4 \
89E9 \
E8 [Rx43880] \
F6C3 02 \
74 0A \
FF77 C8 \
89E9 \
E8 [Rx43880] \
F6C3 04 \
74 0A \
FF77 CC \
89E9 \
E8 [Rx43880] \
F6C3 08 \
74 0A \
FF77 D0 \
89E9 \
E8 [Rx43880] \
F6C3 10 \
74 0A \
FF77 D4 \
89E9 \
E8 [Rx43880] \
F6C3 20 \
74 0A \
FF77 D8 \
89E9 \
E8 [Rx43880] \
F6C3 40 \
74 0A \
FF77 DC \
89E9 \
E8 [Rx43880] \
84DB \
79 0A \
FF77 E0 \
89E9 \
E8 [Rx43880] \
F6C7 01 \
74 0A \
FF77 E4 \
89E9 \
E8 [Rx43880] \
F6C7 02 \
74 0A \
FF77 E8 \
89E9 \
E8 [Rx43880] \
F6C7 04 \
74 0A \
FF77 EC \
89E9 \
E8 [Rx43880] \
F6C7 08 \
74 0A \
FF77 F0 \
89E9 \
E8 [Rx43880] \
F6C7 10 \
74 0A \
FF77 F4 \
89E9 \
E8 [Rx43880] \
F6C7 20 \
74 0A \
FF77 F8 \
89E9 \
E8 [Rx43880] \
F6C7 40 \
74 0A \
FF77 FC \
89E9 \
E8 [Rx43880] \
84FF \
79 09 \
FF37 \
89E9 \
E8 [Rx43880] \
8B0424 \
39C6 \
0F84 F2FEFFFF \
660F6E4424 04 \
E9 C8FEFFFF \
"
		},
		"render_layer_turbo_avx2": {
			"enable": "<cpuid:avx2>",
			"access": "re",
			"align": 64,
			"code": "\
55 \
53 \
57 \
56 \
83EC 08 \
8BB1 08070000 \
8BB9 0C070000 \
39FE \
74 42 \
89D3 \
89CD \
6A 00 \
52 \
E8 [Rx4F3D0] \
89F8 \
83C7 FC \
895C24 04 \
890424 \
C5F96EC3 \
C4E27D78C0 \
<nop:8> \
C5FD740E \
83C6 20 \
C5FDD7D9 \
83EF 80 \
85DB \
75 1E \
39C6 \
75 EA \
C5F877 \
B8 01000000 \
83C4 08 \
5E \
5F \
5B \
5D \
C3 \
<int3:10> \
C5F877 \
F6C3 01 \
74 0A \
FF77 84 \
89E9 \
E8 [Rx43880] \
F6C3 02 \
74 0A \
FF77 88 \
89E9 \
E8 [Rx43880] \
F6C3 04 \
74 0A \
FF77 8C \
89E9 \
E8 [Rx43880] \
F6C3 08 \
74 0A \
FF77 90 \
89E9 \
E8 [Rx43880] \
F6C3 10 \
74 0A \
FF77 94 \
89E9 \
E8 [Rx43880] \
F6C3 20 \
74 0A \
FF77 98 \
89E9 \
E8 [Rx43880] \
F6C3 40 \
74 0A \
FF77 9C \
89E9 \
E8 [Rx43880] \
84DB \
79 0A \
FF77 A0 \
89E9 \
E8 [Rx43880] \
F6C7 01 \
74 0A \
FF77 A4 \
89E9 \
E8 [Rx43880] \
F6C7 02 \
74 0A \
FF77 A8 \
89E9 \
E8 [Rx43880] \
F6C7 04 \
74 0A \
FF77 AC \
89E9 \
E8 [Rx43880] \
F6C7 08 \
74 0A \
FF77 B0 \
89E9 \
E8 [Rx43880] \
F6C7 10 \
74 0A \
FF77 B4 \
89E9 \
E8 [Rx43880] \
F6C7 20 \
74 0A \
FF77 B8 \
89E9 \
E8 [Rx43880] \
F6C7 40 \
74 0A \
FF77 BC \
89E9 \
E8 [Rx43880] \
84FF \
79 0A \
FF77 C0 \
89E9 \
E8 [Rx43880] \
F7C3 00000100 \
74 0A \
FF77 C4 \
89E9 \
E8 [Rx43880] \
F7C3 00000200 \
74 0A \
FF77 C8 \
89E9 \
E8 [Rx43880] \
F7C3 00000400 \
74 0A \
FF77 CC \
89E9 \
E8 [Rx43880] \
F7C3 00000800 \
74 0A \
FF77 D0 \
89E9 \
E8 [Rx43880] \
F7C3 00001000 \
74 0A \
FF77 D4 \
89E9 \
E8 [Rx43880] \
F7C3 00002000 \
74 0A \
FF77 D8 \
89E9 \
E8 [Rx43880] \
F7C3 00004000 \
74 0A \
FF77 DC \
89E9 \
E8 [Rx43880] \
F7C3 00008000 \
74 0A \
FF77 E0 \
89E9 \
E8 [Rx43880] \
F7C3 00000001 \
74 0A \
FF77 E4 \
89E9 \
E8 [Rx43880] \
F7C3 00000002 \
74 0A \
FF77 E8 \
89E9 \
E8 [Rx43880] \
F7C3 00000004 \
74 0A \
FF77 EC \
89E9 \
E8 [Rx43880] \
F7C3 00000008 \
74 0A \
FF77 F0 \
89E9 \
E8 [Rx43880] \
F7C3 00000010 \
74 0A \
FF77 F4 \
89E9 \
E8 [Rx43880] \
F7C3 00000020 \
74 0A \
FF77 F8 \
89E9 \
E8 [Rx43880] \
F7C3 00000040 \
74 0A \
FF77 FC \
89E9 \
E8 [Rx43880] \
85DB \
79 09 \
FF37 \
89E9 \
E8 [Rx43880] \
8B0424 \
39C6 \
0F84 D2FDFFFF \
C4E27D784424 04 \
E9 ADFDFFFF \
"
		},
		"recursive_remove_fast": {
			"access": "re",
			"code": "\
56 \
89C6 \
8B40 18 \
85C0 \
74 0F \
660F1F4400 00  \
E8 [codecave:recursive_remove_fast] \
85C0 \
75 F7 \
C646 5C 02 \
894E 2C \
8B46 04 \
8B4E 08 \
85C9 \
74 03 \
8941 04 \
83C6 28 \
85C0 \
74 03 \
8948 08 \
89F1 \
5E \
C3 \
"
		},
		"on_tick_lists_fast": {
			"access": "re",
			"align": 64,
			"code": "\
53 \
57 \
56 \
89D7 \
89CE \
B9 <Rx1C03F0> \
E8 [RxC470] \
8B1C3E \
85DB \
74 46 \
31FF \
EB 1B \
8D43 28 \
89F9 \
E8 [codecave:recursive_remove_fast] \
89CF \
0F1F8400 00000000 \
8B5B 04 \
85DB \
74 23 \
0FB683 84000000 \
85C0 \
75 11 \
8D8B 14FBFFFF \
E8 [Rx2B5D0] \
85C0 \
74 DF \
EB C9 \
83F8 01 \
74 C4 \
EB D6 \
85FF \
75 13 \
B9 <Rx1C03F0> \
E8 [RxC660] \
B8 01000000 \
5E \
5F \
5B \
C3 \
81C6 18070006 \
660F1F8400 00000000  \
FF8E E8FFFFF9 \
8B5F 2C \
85DB \
0F85 83000000 \
8B47 28 \
85C0 \
0F85 91000000 \
8D4F B0 \
8B47 B8 \
8B57 BC \
85D2 \
74 08 \
394A 14 \
75 03 \
8942 14 \
8B49 04 \
85C9 \
74 03 \
8941 08 \
85C0 \
74 03 \
8948 04 \
8B5F 04 \
817F 88 FFFF0000 \
74 78 \
C747 84 00000000 \
C787 ECFAFFFF FFFFFFFF  \
C687 BC000000 00  \
81C7 A8000000 \
8B46 04 \
897E 04 \
85C0 \
74 06 \
8978 08 \
8947 04 \
8977 08 \
8B46 0C \
8947 0C \
89DF \
85DB \
0F85 71FFFFFF \
E9 4AFFFFFF \
C747 2C 00000000 \
8B03 \
89D9 \
FF50 0C \
53 \
E8 [Rx1F7C0] \
E9 64FFFFFF \
C747 28 00000000 \
C747 30 00000000 \
50 \
E8 [Rx1F670] \
E9 56FFFFFF \
81C7 C4FAFFFF \
57 \
E8 [Rx1F7C0] \
EB B1 \
"
		},
		"bullet_manager_on_draw_fast": {
			"access": "re",
			"code": "\
55 \
53 \
57 \
56 \
89CE \
8B3D <Rx1C0028> \
89F9 \
6A 00 \
6A 0C \
E8 [Rx4F3D0] \
31DB \
EB 0F \
CCCCCCCCCC \
43 \
83FB 06 \
0F84 C5000000 \
8B6C9E 14 \
EB 0B \
89F9 \
50 \
E8 [Rx43880] \
8B6D 60 \
85ED \
74 E1 \
8B45 1C \
8B4D 6C \
8988 C4050000 \
F20F1045 64 \
F20F1180 BC050000 \
80B8 A2040000 20 \
72 36 \
F30F1085 84000000 \
F30F5805 {u32:0x3FC90FDB} \
F30F100D <Rx16E0F0> \
0F2EC8 \
72 37 \
F30F100D <Rx16E0F8> \
0F2EC8 \
77 47 \
F30F1140 40 \
8088 9C040000 02 \
F645 14 04 \
74 93 \
F30F1045 48 \
0F14C0 \
0F1340 58 \
8088 9C040000 04 \
E9 7BFFFFFF \
B9 21000000 \
F30F1015 {u32:0xC0C90FDB} \
F30F58C2 \
83C1 FF \
73 C0 \
0F2EC1 \
77 F2 \
EB B9 \
B9 21000000 \
F30F1015 {u32:0x40C90FDB} \
F30F58C2 \
83C1 FF \
73 A3 \
0F2EC1 \
72 F2 \
EB 9C \
B8 01000000 \
5E \
5F \
5B \
5D \
C3 \
"
		},
		// Not drawn: 42, 43, 44
		// Layers: 0, 1, 2, 4, 5, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 25, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55
		"draw_layer_A_fast": {
			"access": "re",
			"code": "\
8B5424 04 \
8B0D <Rx1C0028> \
E9 (<cpuid:avx2>?[codecave:render_layer_turbo_avx2]:[codecave:render_layer_turbo]) \
"
		},
		// Layers: 3, 6, 12, 20, 24, 26, 27, 45
		"draw_layer_B_fast": {
			"access": "re",
			"code": "\
8B5424 04 \
8B0D <Rx1C0028> \
C781 C0060000 FFFFFFFF \
E9 (<cpuid:avx2>?[codecave:render_layer_turbo_avx2]:[codecave:render_layer_turbo]) \
"
		},
		// Layers: 39, 40, 41
		"draw_layer_C_fast": {
			"access": "re",
			"code": "\
8B5424 04 \
E8 (<cpuid:avx2>?[codecave:render_layer_turbo_avx2]:[codecave:render_layer_turbo]) \
C2 0400 \
"
		},
		"list_iter_set_safe": {
			"ignore": "<option:iterator_compatibility>",
			"access": "re",
			"code": "\
89C8 \
8B4C24 04 \
8908 \
85C9 \
74 03 \
8B49 04 \
8948 04 \
C2 0800 \
"
		},
		"list_iter_inc_safe": {
			"ignore": "<option:iterator_compatibility>",
			"access": "re",
			"code": "\
8B41 04 \
8901 \
85C0 \
74 03 \
8B40 04 \
8941 04 \
C3 \
"
		},
		"list_iterable_begin_safe": {
			"ignore": "<option:iterator_compatibility>",
			"access": "re",
			"code": "\
8B4424 04 \
8B49 04 \
8908 \
85C9 \
74 03 \
8B49 04 \
8948 04 \
C2 0400 \
"
		},
		"list_iterable_begin2_safe": {
			"ignore": "<option:iterator_compatibility>",
			"access": "re",
			"code": "\
8B4424 04 \
8908 \
8B49 04 \
8948 04 \
C2 0400 \
"
		},
		"fast_anm_vm_destructor": {
			"access": "re",
			"code": "\
57 \
56 \
80B9 F8050000 00 \
74 16 \
89CE \
8BB9 68050000 \
85FF \
75 0D \
8B86 64050000 \
85C0 \
75 12 \
5E \
5F \
C3 \
8B07 \
89F9 \
FF50 0C \
57 \
E8 [Rx1F7C0] \
EB E4 \
50 \
E8 [Rx1F670] \
EB E6 \
"
		},
		"anm_vm_reset_fast": {
			"access": "re",
			"code": "\
57 \
56 \
89CE \
8BB9 C4040000 \
68 E4050000 \
6A 00 \
51 \
E8 [Rx144760] \
83C4 0C \
0F2805 {x.f32:1.0f;1.0f;1.0f;1.0f} \
0F1146 50 \
0F1346 68 \
F30F1186 B8030000 \
F30F1186 CC030000 \
F30F1186 E0030000 \
F30F1186 F4030000 \
F20F1005 {q.u32:0x3F800000;0x40490FDB} \
F20F1186 78040000 \
C786 80040000 00000100 \
C786 90040000 FFFFFFFF \
C686 9A040000 01 \
C686 9C040000 01 \
C686 A0040000 01 \
89BE C4040000 \
C786 C8040000 C1BDF0FF \
C786 D8040000 C1BDF0FF \
5E \
5F \
C3 \
"
		},
		"add_vm_to_world_list_back_fast": {
			"access": "re",
			"code": "\
53 \
57 \
56 \
8B5424 14 \
8B4424 10 \
898A E8040000 \
FF41 38 \
8DB2 EC040000 \
8B79 14 \
8B5F 04 \
85DB \
74 0C \
899A F0040000 \
8B5F 04 \
8973 08 \
8977 04 \
89BA F4040000 \
898A F8040000 \
8971 14 \
8B0D <Rx1C0028> \
0FB7B1 880ED407 \
6683C6 01 \
6683D6 00 \
6689B1 880ED407 \
0FB78A C4040000 \
C1E6 10 \
09CE \
89B2 C0040000 \
8930 \
5E \
5F \
5B \
C2 0800 \
"
		},
		"add_vm_to_world_list_front_fast": {
			"access": "re",
			"code": "\
56 \
8B5424 0C \
898A E8040000 \
FF41 38 \
8DB2 EC040000 \
8B41 08 \
85C0 \
74 0C \
8982 F4040000 \
8B41 08 \
8970 04 \
8B4424 08 \
898A F0040000 \
8971 08 \
898A F8040000 \
3949 14 \
75 03 \
8971 14 \
8B0D <Rx1C0028> \
0FB7B1 880ED407 \
6683C6 01 \
6683D6 00 \
6689B1 880ED407 \
0FB78A C4040000 \
C1E6 10 \
09CE \
89B2 C0040000 \
8930 \
5E \
C2 0800 \
"
		},
		"add_vm_to_ui_list_back_fast": {
			"access": "re",
			"code": "\
53 \
57 \
56 \
8B5424 14 \
8B4424 10 \
898A E8040000 \
FF41 38 \
8DB2 EC040000 \
8B79 2C \
8B5F 04 \
85DB \
74 0C \
899A F0040000 \
8B5F 04 \
8973 08 \
8D59 18 \
8977 04 \
89BA F4040000 \
899A F8040000 \
8971 2C \
8B0D <Rx1C0028> \
0FB7B1 880ED407 \
6683C6 01 \
6683D6 00 \
6689B1 880ED407 \
0FB78A C4040000 \
C1E6 10 \
09CE \
89B2 C0040000 \
8930 \
5E \
5F \
5B \
C2 0800 \
"
		},
		"add_vm_to_ui_list_front_fast": {
			"access": "re",
			"code": "\
57 \
56 \
8B5424 10 \
898A E8040000 \
FF41 38 \
8D79 18 \
8DB2 EC040000 \
8B41 20 \
85C0 \
74 0C \
8982 F4040000 \
8B41 20 \
8970 04 \
8B4424 0C \
89BA F0040000 \
8971 20 \
89BA F8040000 \
3979 2C \
75 03 \
8971 2C \
8B0D <Rx1C0028> \
0FB7B1 880ED407 \
6683C6 01 \
6683D6 00 \
6689B1 880ED407 \
0FB78A C4040000 \
C1E6 10 \
09CE \
89B2 C0040000 \
8930 \
5E \
5F \
C2 0800 \
"
		}
	},
	"binhacks": {
		// Trig replacements
		"sinf_stack_to_x87": {
			"addr": [ "Rx33C21", "Rx3953F", "Rx39A61", "Rx3B141", "Rx3C330", "Rx3C5C5", "Rx3C89B", "Rx3C9B7", "Rx3CDA0", "Rx3E321", "Rx3EF6F", "Rx4037F", "Rx53D0F", "Rx5545A", "Rx55496", "Rx554F6", "Rx55530", "Rx555B4", "Rx555FE", "Rx58FB2", "Rx59042", "Rx590F2", "Rx6766C", "Rx7246E", "Rx72494", "Rx726C9", "Rx726EF", "R762FC", "Rx76345", "Rx7637E", "Rx764A9", "Rx76624", "Rx76791", "Rx768E0", "Rx76A0F", "Rx76B13", "Rx76B57", "Rx76B8B", "Rx76C54", "Rx76C88", "Rx76D51", "Rx76D85", "Rx76E52", "Rx76EF5", "Rx77050", "Rx77085", "Rx770BA", "Rx770EF", "Rx77201", "Rx77236", "Rx7726B", "Rx81F13", "Rx81FF3", "RxA455D", "RxA4590", "Rx100CFC", "Rx11EFD4", "Rx133DB1", "Rx133DE4", "Rx13CFA6" ]
		},
		"cosf_stack_to_x87": {
			"addr": [ "Rx33CD1", "Rx371DF", "Rx39A77", "Rx3B157", "Rx3C30B", "Rx3C5A0", "Rx3C85B", "Rx3C97B", "Rx3CDB6", "Rx3E337", "Rx3EF86", "Rx4039B", "Rx58FC8", "Rx59058", "Rx59108", "Rx764E4", "Rx76A4A", "Rx76E86", "Rx76EC1", "Rx76F29", "Rx76F74", "Rx772A7", "Rx81EEB", "Rx11EFFC", "Rx13D070" ]
		},
		// General cleanup
		"finit_begone": {
			"addr": "RxB9759"
		},
		"ftol2_replace_fisttp": {
			"addr": [ "Rx87402", "Rx9B3B5", "Rx9B784", "Rx9B803" ],
			"code": "\
50 \
DB0C24 \
58 \
90 \
"
		},
		"allshl_amd": {
			"addr": [ "Rx69932", "Rx69C7D", "Rx6F362", "Rx6F57F", "Rx6FE4A", "Rx6FE7E", "Rx6FED8", "Rx6FF41", "Rx70116", "Rx7DDED", "RxD0449", "RxE8EBD", "RxE8EF6", "RxE8FF8", "RxE9444", "RxED404", "RxFD8F5", "RxFE2DD", "RxFE822", "Rx14C9BB", "Rx14CB21", "Rx14CB55", "Rx14E89F", "Rx14EC77", "Rx152438" ]
		},
		"aullshr_amd": {
			"addr": [ "Rx22CD0", "Rx52996", "Rx529CD", "Rx52A04", "Rx52A4F", "Rx52A9A", "Rx69839", "Rx6F230", "Rx6FBE6", "Rx6FBF7", "Rx6FC20", "Rx6FE5B", "Rx6FEA5", "Rx6FEE9", "Rx6FF0D", "Rx70045", "Rx7005B", "Rx700A1", "Rx700C8", "Rx700EF", "RxE8D79", "RxE8F1F", "RxE8F99", "RxE9339", "RxE93F5", "RxED0A0", "RxED0D7", "RxED10E", "RxED159", "RxED1A4", "RxF1D26", "RxF27B3", "RxF27DA", "RxF287C", "RxF2C80", "RxFD92F", "RxFDB06", "RxFDB17", "RxFDB40", "RxFDB70", "RxFE225", "RxFE24D", "RxFE263", "RxFE834", "Rx14C819", "Rx14C971", "Rx14CB39", "Rx14E832", "Rx158656", "Rx1586BC", "Rx15888A", "Rx15793F", "Rx158F0C" ]
		},
		// COMDAT microfunction replacements
		"stub_fast": {
			"addr": "RxC6B0",
			"code": "C3CCCCCCCC"
		},
		"ret_zero_fast": {
			"addr": "Rx12540",
			"code": "\
31C0 \
C3 \
<int3:10> \
"
		},
		"ret_this_fast": {
			"addr": "RxBDA0",
			"code": "\
89C8 \
C3 \
<int3:11> \
"
		},
		"ret_thisB_fast": {
			"addr": "RxF160",
			"code": "\
89C8 \
C3 \
<int3:16> \
"
		},
		"ret_arg1_fast": {
			"addr": "RxB280",
			"code": "\
8B4424 04 \
C3 \
CCCCCC \
"
		},
		"deref_this_fast": {
			"addr": "RxC300",
			"code": "\
8B01 \
C3 \
<int3:13> \
"
		},
		"index_this_dword": {
			"addr": "Rx14580",
			"code": "\
8B4424 04 \
8D0481 \
C2 0400 \
<int3:12> \
"
		},
		"deref_this_plus_4_fast": {
			"addr": "RxFF90",
			"code": "\
8B41 04 \
C3 \
<int3:13> \
"
		},
		"deref_this_plus_8_fast": {
			"addr": "Rx12730",
			"code": "\
8B41 08 \
C3 \
<int3:13> \
"
		},
		"deref_this_plus_38_fast": {
			"addr": "Rx38520",
			"code": "\
8B41 38 \
C3 \
<int3:13> \
"
		},
		"deref_this_float_fast": {
			"addr": "Rx292E0",
			"code": "\
D901 \
C3 \
<int3:13> \
"
		},
		"write_this_float_fast": {
			"addr": "Rx292A0",
			"code": "\
F30F104424 04 \
F30F1101 \
C2 0400 \
<int3:12> \
"
		},
		// Layer stub replacements
		"draw_layer_0_fast": {
			"addr": "Rx484F1",
			"code": "\
6690 \
6A 00 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_1_fast": {
			"addr": "Rx48504",
			"code": "\
6690 \
6A 01 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_2_fast": {
			"addr": "Rx48517",
			"code": "\
6690 \
6A 02 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_4_fast": {
			"addr": "Rx4852A",
			"code": "\
6690 \
6A 04 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_3_fast": {
			"addr": "Rx4853D",
			"code": "\
6690 \
6A 03 \
68 <codecave:draw_layer_B_fast> \
"
		},
		"draw_layer_5_fast": {
			"addr": "Rx48550",
			"code": "\
6690 \
6A 05 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_6_fast": {
			"addr": "Rx48563",
			"code": "\
6690 \
6A 06 \
68 <codecave:draw_layer_B_fast> \
"
		},
		"draw_layer_7_fast": {
			"addr": "Rx48576",
			"code": "\
6690 \
6A 07 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_8_fast": {
			"addr": "Rx48589",
			"code": "\
6690 \
6A 08 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_9_fast": {
			"addr": "Rx4859C",
			"code": "\
6690 \
6A 09 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_10_fast": {
			"addr": "Rx485AF",
			"code": "\
6690 \
6A 0A \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_11_fast": {
			"addr": "Rx485C2",
			"code": "\
6690 \
6A 0B \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_12_fast": {
			"addr": "Rx485D5",
			"code": "\
6690 \
6A 0C \
68 <codecave:draw_layer_B_fast> \
"
		},
		"draw_layer_13_fast": {
			"addr": "Rx485E8",
			"code": "\
6690 \
6A 0D \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_14_fast": {
			"addr": "Rx485FB",
			"code": "\
6690 \
6A 0E \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_15_fast": {
			"addr": "Rx4860E",
			"code": "\
6690 \
6A 0F \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_16_fast": {
			"addr": "Rx48621",
			"code": "\
6690 \
6A 10 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_17_fast": {
			"addr": "Rx48634",
			"code": "\
6690 \
6A 11 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_18_fast": {
			"addr": "Rx48647",
			"code": "\
6690 \
6A 12 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_19_fast": {
			"addr": "Rx4865A",
			"code": "\
6690 \
6A 13 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_20_fast": {
			"addr": "Rx4866D",
			"code": "\
6690 \
6A 14 \
68 <codecave:draw_layer_B_fast> \
"
		},
		"draw_layer_21_fast": {
			"addr": "Rx48680",
			"code": "\
6690 \
6A 15 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_22_fast": {
			"addr": "Rx48693",
			"code": "\
6690 \
6A 16 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_23_fast": {
			"addr": "Rx486A6",
			"code": "\
6690 \
6A 17 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_24_fast": {
			"addr": "Rx486B9",
			"code": "\
6690 \
6A 18 \
68 <codecave:draw_layer_B_fast> \
"
		},
		"draw_layer_25_fast": {
			"addr": "Rx486CC",
			"code": "\
6690 \
6A 19 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_27_fast": {
			"addr": "Rx486DF",
			"code": "\
6690 \
6A 1B \
68 <codecave:draw_layer_B_fast> \
"
		},
		"draw_layer_28_fast": {
			"addr": "Rx486F2",
			"code": "\
6690 \
6A 1C \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_30_fast": {
			"addr": "Rx48705",
			"code": "\
6690 \
6A 1E \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_31_fast": {
			"addr": "Rx48718",
			"code": "\
6690 \
6A 1F \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_34_fast": {
			"addr": "Rx4872B",
			"code": "\
6690 \
6A 22 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_35_fast": {
			"addr": "Rx4873E",
			"code": "\
6690 \
6A 23 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_36_fast": {
			"addr": "Rx48751",
			"code": "\
6690 \
6A 24 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_37_fast": {
			"addr": "Rx48764",
			"code": "\
6690 \
6A 25 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_38_fast": {
			"addr": "Rx48777",
			"code": "\
6690 \
6A 26 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_29_fast": {
			"addr": "Rx4878A",
			"code": "\
6690 \
6A 1D \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_26_fast": {
			"addr": "Rx4879D",
			"code": "\
6690 \
6A 1A \
68 <codecave:draw_layer_B_fast> \
"
		},
		"draw_layer_32_fast": {
			"addr": "Rx487B0",
			"code": "\
6690 \
6A 20 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_33_fast": {
			"addr": "Rx487C3",
			"code": "\
6690 \
6A 21 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_45_fast": {
			"addr": "Rx487D6",
			"code": "\
6690 \
6A 2D \
68 <codecave:draw_layer_B_fast> \
"
		},
		"draw_layer_46_fast": {
			"addr": "Rx487E9",
			"code": "\
6690 \
6A 2E \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_47_fast": {
			"addr": "Rx487FC",
			"code": "\
6690 \
6A 2F \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_48_fast": {
			"addr": "Rx4880F",
			"code": "\
6690 \
6A 30 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_49_fast": {
			"addr": "Rx48822",
			"code": "\
6690 \
6A 31 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_50_fast": {
			"addr": "Rx48835",
			"code": "\
6690 \
6A 32 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_51_fast": {
			"addr": "Rx48848",
			"code": "\
6690 \
6A 33 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_52_fast": {
			"addr": "Rx4885B",
			"code": "\
6690 \
6A 34 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_53_fast": {
			"addr": "Rx4886E",
			"code": "\
6690 \
6A 35 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_54_fast": {
			"addr": "Rx48881",
			"code": "\
6690 \
6A 36 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_55_fast": {
			"addr": "Rx48894",
			"code": "\
6690 \
6A 37 \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_C_fast": {
			"addr": [ "Rx72B2E", "Rx72B49", "RxD91C6" ],
			"code": "[codecave:draw_layer_C_fast]"
		},
		// Float2 replacements
		"float2_set_fast": {
			"addr": "Rx29250",
			"code": "\
89C8 \
F20F104424 04 \
F20F1101 \
C2 0800 \
<int3:26> \
"
		},
		"float2_multiply_fast": {
			"addr": "Rx293C0",
			"code": "\
8B4424 04 \
F20F1001 \
F30F104C24 08 \
0F14C9 \
0F59C8 \
0F1308 \
C2 0800 \
<int3:35> \
"
		},
		"float2_subtract_fast": {
			"addr": "Rx29520",
			"code": "\
8B4424 04 \
8B5424 08 \
F20F1001 \
F20F100A \
0F5CC1 \
0F1300 \
C2 0800 \
<int3:41> \
"
		},
		"float2_add_fast": {
			"addr": "Rx29640",
			"code": "\
8B4424 04 \
8B5424 08 \
F20F1001 \
F20F100A \
0F58C8 \
0F1308 \
C2 0800 \
<int3:41> \
"
		},
		// Float3 replacements
		"float3_set_fast": {
			"addr": "Rx22DD0",
			"code": "\
89C8 \
F20F104424 04 \
F30F104C24 0C \
F20F1101 \
F30F1149 08 \
C2 0C00 \
<int3:28> \
"
		},
		"float3_multiply_fast": {
			"addr": "Rx292F0",
			"code": "\
8B4424 04 \
F30F104424 08 \
0F14C0 \
F20F1009 \
0F59C8 \
F30F5941 08 \
0F1308 \
F30F1140 08 \
C2 0400 \
<int3:44> \
"
		},
		"float3_subtract_fast": {
			"addr": "Rx29440",
			"code": "\
8B4424 04 \
8B5424 08 \
F20F1001 \
F20F100A \
0F5CC1 \
F30F1049 08 \
F30F5C4A 08 \
0F1300 \
F30F1148 08 \
C2 0800 \
<int3:48> \
"
		},
		"float3_add_fast": {
			"addr": "Rx29570",
			"code": "\
8B4424 04 \
8B5424 08 \
F20F1001 \
F20F100A \
0F58C8 \
F30F1042 08 \
F30F5841 08 \
0F1308 \
F30F1140 08 \
C2 0800 \
<int3:48> \
"
		},
		"float3_multiply_assign_fast": {
			"addr": "Rx29690",
			"code": "\
89C8 \
F30F104424 04 \
0F14C0 \
F20F1009 \
0F59C8 \
F30F5941 08 \
0F1309 \
F30F1141 08 \
C2 0400 \
<int3:43> \
"
		},
		"float3_add_assign_fast": {
			"addr": "Rx296E0",
			"code": "\
89C8 \
8B4C24 04 \
F20F1001 \
F20F1008 \
0F58C8 \
F30F1040 08 \
F30F5841 08 \
0F1308 \
F30F1140 08 \
C2 0400 \
<int3:47> \
"
		},
		"float3_subtract_assign_fast": {
			"addr": "Rx29740",
			"code": "\
89C8 \
8B4C24 04 \
F20F1001 \
F20F1008 \
0F5CC8 \
F30F1040 08 \
F30F5C41 08 \
0F1308 \
F30F1140 08 \
C2 0400 \
<int3:47> \
"
		},
		// Timer replacements
		"timer_add_float_fast": {
			"addr": "Rx530F0",
			"code": "\
F30F104424 04 \
F30F100D <Rx1AEFE4> \
F641 0C 01 \
74 35 \
8B41 04 \
8901 \
F30F1051 08 \
0F2E0D <Rx16E72C> \
72 1C \
0F2E0D <Rx16E730> \
77 13 \
F30F58C2 \
F30F1141 08 \
F30F2CC0 \
8941 04 \
C2 0400 \
F30F59C1 \
EB E7 \
C701 00000000 \
C741 0C 01000000 \
0F2E0D <Rx16E72C> \
72 09 \
0F2E0D <Rx16E730> \
76 CC \
F30F59C1 \
EB C6 \
<int3:185> \
"
		},
		"timer_tick_fast": {
			"addr": "Rx533B0",
			"code": "\
F30F1005 <Rx1AEFE4> \
F641 0C 01 \
74 3F \
8B41 04 \
8901 \
F30F1049 08 \
0F2E05 <Rx16E72C> \
72 1B \
0F2E05 <Rx16E730> \
77 12 \
40 \
8941 04 \
F30F580D <Rx16C8CC> \
F30F1149 08 \
C3 \
F30F58C8 \
F30F1149 08 \
F30F2CC1 \
8941 04 \
C3 \
0F2E05 <Rx16E72C> \
72 19 \
0F2E05 <Rx16E730> \
77 10 \
0F2805 {x.u32:0;1;0x3F800000;1} \
0F1101 \
B8 01000000 \
C3 \
C701 00000000 \
C741 0C 01000000 \
F30F1141 08 \
F30F2CC0 \
8941 04 \
C3 \
<int3:187> \
"
		},
		// Angle replacements
		"reduce_angle_fast": {
			"addr": "Rx38540",
			"code": "\
F30F104424 04 \
F30F100D <Rx16E0F0> \
0F2EC8 \
72 20 \
F30F100D <Rx16E0F8> \
0F2EC1 \
72 43 \
F30F114424 04 \
D94424 04 \
C3 \
<int3:8> \
B8 21000000 \
F30F1015 {u32:0xC0C90FDB} \
F30F58C2 \
83C0 FF \
73 05 \
0F2EC1 \
77 F2 \
F30F114424 04 \
D94424 04 \
C3 \
<int3:10> \
B8 21000000 \
F30F1015 {u32:0x40C90FDB} \
F30F58C2 \
83C0 FF \
73 05 \
0F2EC1 \
72 F2 \
F30F114424 04 \
D94424 04 \
C3 \
<int3:50> \
"
		},
		"reduce_angle_add_fast": {
			"addr": "Rx38600",
			"code": "\
F30F104424 08 \
F30F584424 04 \
E9 35FFFFFF \
<int3:12> \
"
		},
		// List replacements
		"list_unlink_fast": {
			"addr": "Rx11CE0",
			"code": "\
8B41 08 \
8B51 0C \
85D2 \
74 08 \
394A 14 \
75 03 \
8942 14 \
8B51 04 \
85D2 \
74 03 \
8942 08 \
85C0 \
74 03 \
8950 04 \
0F57C0 \
0F1141 04 \
C3 \
<int3:12> \
"
		},
		"list_append_fast": {
			"addr": "Rx11EE0",
			"code": "\
8B4424 04 \
8B51 04 \
8941 04 \
85D2 \
74 06 \
8942 08 \
8950 04 \
8948 08 \
8B49 0C \
8948 0C \
C2 0400 \
<int3:44> \
"
		},
		"list_prepend_fast": {
			"addr": "Rx11F30",
			"code": "\
8B4424 04 \
8B51 08 \
8941 08 \
85D2 \
74 06 \
8942 04 \
8950 08 \
8948 04 \
8B49 0C \
8948 0C \
C2 0400 \
<int3:44> \
"
		},
		"list_iterable_append_fast": {
			"addr": "Rx11EA0",
			"code": "\
8B4424 04 \
8B51 14 \
8941 14 \
8948 0C \
8B4A 04 \
8942 04 \
85C9 \
74 06 \
8941 08 \
8948 04 \
8950 08 \
C2 0400 \
<int3:22> \
"
		},
		"list_iterable_prepend_fast": {
			"addr": "Rx4A6B0",
			"code": "\
8B4424 04 \
8B51 04 \
8941 04 \
85D2 \
74 06 \
8942 08 \
8950 04 \
8948 08 \
8B51 0C \
8950 0C \
3949 14 \
74 04 \
C2 0400 \
CC \
8941 14 \
C2 0400 \
<int3:22> \
"
		},
		"list_iter_destructor_fast": {
			"addr": "Rx11B00",
			"code": "\
C3 \
<int3:110> \
"
		},
		"list_iter_neq_fast_compat": {
			"enable": "<option:iterator_compatibility>",
			"addr": "Rx11BB0",
			"code": "\
8B5424 04 \
31C0 \
8B09 \
85D2 \
75 08 \
39C1 \
0F95C0 \
C2 0400 \
8B02 \
EB F4 \
<int3:67> \
"
		},
		"list_iter_neq_fast": {
			"ignore": "<option:iterator_compatibility>",
			"addr": "Rx11BB0",
			"code": "\
31C0 \
8339 00 \
0F95C0 \
C2 0400 \
<int3:80> \
"
		},
		"list_iter_set_fast_compat": {
			//"enable": "<option:iterator_compatibility>",
			"addr": "Rx119B0",
			"code": "\
89C8 \
8B4C24 04 \
8908 \
85C9 \
74 03 \
8B49 04 \
8948 04 \
C2 0800 \
<int3:151> \
"
		},
		/*
		"list_iter_set_safe": {
			"ignore": "<option:iterator_compatibility>",
			"addr": "",
			"code": "[codecave:list_iter_set_safe]"
		},
		"list_iter_set_fast": {
			"ignore": "<option:iterator_compatibility>",
			"addr": "Rx119B0",
			"code": "\
89C8 \
8B4C24 04 \
8908 \
C2 0800 \
<int3:161> \
"
		},
		*/
		"list_iter_inc_fast_compat": {
			//"enable": "<option:iterator_compatibility>",
			"addr": "Rx11C30",
			"code": "\
8B41 04 \
8901 \
85C0 \
74 03 \
8B40 04 \
8941 04 \
C3 \
<int3:105> \
"
		},
		/*
		"list_iter_inc_safe": {
			"ignore": "<option:iterator_compatibility>",
			"addr": [ "Rx1043D0", "RxC05E3", "Rx7D765" ],
			"code": "[codecave:list_iter_inc_safe]"
		},
		"list_iter_inc_fast": {
			"ignore": "<option:iterator_compatibility>",
			"addr": "Rx11C30",
			"code": "\
8B01 \
8B40 04 \
8901 \
C3 \
<int3:113> \
"
		},
		*/
		"list_iterable_begin_fast_compat": {
			//"enable": "<option:iterator_compatibility>",
			"addr": "Rx12280",
			"code": "\
8B4424 04 \
8B49 04 \
8908 \
85C9 \
74 03 \
8B49 04 \
8948 04 \
C2 0400 \
<int3:31> \
"
		},
		/*
		"list_iterable_begin_safe": {
			"ignore": "<option:iterator_compatibility>",
			"addr": [ "Rx1043B4", "RxC05C4", "Rx7D749" ],
			"code": "[codecave:list_iterable_begin_safe]"
		},
		"list_iterable_begin_fast": {
			"ignore": "<option:iterator_compatibility>",
			"addr": "Rx12280",
			"code": "\
8B4424 04 \
8B49 04 \
8908 \
C2 0400 \
<int3:41> \
"
		},
		*/
		"list_begin_fast_compat": {
			//"enable": "<option:iterator_compatibility>",
			"addr": "Rx4B9F0",
			"code": "\
8B4424 04 \
8908 \
8B49 04 \
8948 04 \
C2 0400 \
<int3:228> \
"
		},
		// This makes the game do the funny never delete children thing
		/*
		"list_begin_safe": {
			"ignore": "<option:iterator_compatibility>",
			"code": "[codecave:list_itererable_begin2_safe]"
		},
		"list_begin_fast": {
			"ignore": "<option:iterator_compatibility>",
			"addr": "Rx4B9F0",
			"code": "\
8B4424 04 \
8908 \
C2 0400 \
<int3:234> \
"
		},
		*/
		// RNG replacements
		"rand_impl_generate_random_fast": {
			//"enable": false,
			"addr": "Rx22CB0",
			"code": "\
B8 1E790100 \
F76424 04 \
D1E8 \
01D0 \
8D90 01000080 \
0F48C2 \
C3 \
<int3:110> \
"
		},
		"rand_impl_uint_fast": {
			//"enable": false,
			"addr": "Rx235F0",
			"code": "\
B8 1E790100 \
F721 \
D1E8 \
01D0 \
8D90 01000080 \
0F48C2 \
8901 \
C3 \
<int3:12> \
"
		},
		"rand_uint_fast": {
			//"enable": false,
			"addr": "Rx23EE0",
			"code": "\
B8 1E790100 \
F761 04 \
D1E8 \
01D0 \
8D90 01000080 \
0F48C2 \
8941 04 \
8941 14 \
C3 \
<int3:71> \
"
		},
		"rand_byte_ushort_fast": {
			//"enable": false,
			"addr": [ "Rx4BFC1", "Rx4BFEB", "Rx4C012", "Rx60703", "Rx60C7F", "Rx901D8", "Rx90233" ],
			"code": "[Rx23EE0]"
		},
		"rand_uint_range_fast": {
			//"enable": false,
			"addr": "Rx23EA0",
			"code": "\
56 \
8B7424 08 \
85F6 \
74 27 \
B8 1E790100 \
F761 04 \
D1E8 \
01D0 \
8D90 01000080 \
0F48C2 \
8941 04 \
8941 14 \
31D2 \
F7F6 \
89D0 \
5E \
C2 0400 \
CCCC \
31C0 \
5E \
C2 0400 \
"
		},
		"rand_float_fast": {
			//"enable": false,
			"addr": "Rx29830",
			"code": "\
50 \
B8 1E790100 \
F761 04 \
D1E8 \
01D0 \
8D90 01000080 \
0F48C2 \
8941 04 \
8941 14 \
0F57C0 \
F30F2AC0 \
F30F5905 {u32:0x30000000} \
F30F110424 \
D90424 \
58 \
C3 \
<int3:59> \
"
		},
		"rand_float_range_fast": {
			//"enable": false,
			"addr": "Rx29800",
			"code": "\
E8 2B000000 \
DFC0 \
F30F594424 04 \
F30F114424 04 \
D94424 04 \
C2 0400 \
<int3:18> \
"
		},
		"rand_float_signed_fast": {
			//"enable": false,
			"addr": "Rx298E0",
			"code": "\
50 \
B8 1E790100 \
F761 04 \
D1E8 \
01D0 \
8D90 01000080 \
0F48C2 \
8941 04 \
8941 14 \
0F57C0 \
F30F2AC0 \
F30F5905 {u32:0x30800000} \
F30F5805 <Rx16E0F4> \
F30F110424 \
D90424 \
58 \
C3 \
<int3:68> \
"
		},
		"rand_float_signed_range_fast": {
			//"enable": false,
			"addr": "Rx298B0",
			"code": "\
E8 2B000000 \
DFC0 \
F30F594424 04 \
F30F114424 04 \
D94424 04 \
C2 0400 \
<int3:18> \
"
		},
		"rand_angle_fast": {
			//"enable": false,
			"addr": "Rx297D0",
			"code": "\
50 \
E8 0A010000 \
DFC0 \
F30F5905 <Rx16E0F0> \
F30F110424 \
D90424 \
58 \
C3 \
<int3:19> \
"
		},
		// rand_angle_2 just sucks, screw that one
		// AnmVM replacements
		"anm_vm_mark_outside_fast_array": {
			"addr": "Rx48B87",
			"code": "FFFF0000"
		},
		"fast_anm_vm_destructor": {
			"addr": "Rx47C87",
			"code": "<codecave:fast_anm_vm_destructor>"
		},
		"fast_array_destructor": {
			"addr": "Rx491E0",
			"code": "\
53 \
57 \
56 \
89CE \
8D99 00000006 \
EB 0D \
CCCCCC \
81C6 00060000 \
39DE \
74 34 \
80BE F8050000 00 \
74 ED \
8BBE 68050000 \
85FF \
75 12 \
8B86 64050000 \
85C0 \
74 D9 \
50 \
E8 5364FDFF \
EB D1 \
8B07 \
89F9 \
FF50 0C \
57 \
E8 9465FDFF \
EB DF \
5E \
5F \
5B \
C3 \
"
		},
		"anm_vm_cleanup_fast": {
			"addr": "Rx4C240",
			"code": "\
56 \
89CE \
8B81 64050000 \
85C0 \
75 1D \
8B86 68050000 \
85C0 \
75 2F \
C786 C0040000 00000000 \
C746 28 FFFFFFFF \
5E \
C3 \
C781 64050000 00000000 \
C781 6C050000 00000000 \
50 \
E8 EC33FDFF \
EB C7 \
C786 68050000 00000000 \
50 \
E8 2A35FDFF \
EB BF \
<int3:83> \
"
		},
		"anm_vm_reset_fast": {
			"addr": [ "Rx38975", "Rx48412", "Rx4E2B4", "Rx708EB", "Rx7F1B2", "Rx7F2F7", "Rx82253", "RxD3209", "RxD32D3", "RxD3E58", "RxD4238" ],
			"code": "[codecave:anm_vm_reset_fast]"
		},
		"anm_vm_reset_fast_thprac_compat": {
			"addr": "Rx299D0",
			"code": "\
0F2805 {x.f32:1.0f;1.0f;1.0f;1.0f} \
0F1141 50 \
0F1341 68 \
F30F1181 B8030000 \
F30F1181 CC030000 \
F30F1181 E0030000 \
F30F1181 F4030000 \
F20F1005 {q.u32:0x3F800000;0x40490FDB} \
F20F1181 78040000 \
C781 80040000 00000100  \
C781 90040000 FFFFFFFF  \
C681 9A040000 01  \
C681 9C040000 01  \
C681 A0040000 01  \
C781 C8040000 C1BDF0FF  \
C781 D8040000 C1BDF0FF  \
C3 \
<int3:981> \
"
		},
		"get_custom_slowdown_fast": {
			"addr": "Rx374B0",
			"code": "\
89C8 \
8B89 58050000 \
85C9 \
74 09 \
F680 9D040000 10 \
74 EB \
D980 60050000 \
C3 \
<int3:39> \
"
		},
		"get_controller_rotation_fast": {
			"addr": "Rx37770",
			"code": "\
56 \
8DB1 D0050000 \
8B41 40 \
8981 D8050000 \
F20F1041 38 \
F20F1181 D0050000 \
F681 9D040000 10 \
75 2C \
8B89 58050000 \
85C9 \
74 22 \
E8 CBFFFFFF \
F20F1000 \
F20F100E \
0F58C8 \
0F130E \
F30F1046 08 \
F30F5840 08 \
F30F1146 08 \
89F0 \
5E \
C3 \
<int3:110> \
"
		},
		// AnmManager replacements
		/*
		"add_vm_to_world_list_back_fast": {
			"addr": [ "Rx51012", "Rx51237", "Rx514E3" ],
			"code": "[codecave:add_vm_to_world_list_back_fast]"
		},
		"add_vm_to_world_list_front_fast": {
			"addr": [ "Rx50FF9", "Rx5121E", "Rx514CA" ],
			"code": "[codecave:add_vm_to_world_list_front_fast]"
		},
		"add_vm_to_ui_list_back_fast": {
			"addr": [ "Rx50FC3", "Rx511E9", "Rx51494" ],
			"code": "[codecave:add_vm_to_ui_list_back_fast]"
		},
		"add_vm_to_ui_list_front_fast": {
			"addr": [ "Rx50F8E", "Rx511B3", "Rx5145E" ],
			"code": "[codecave:add_vm_to_ui_list_front_fast]"
		},
		*/
		"add_vm_to_list": {
			"addr": [ "Rx4B81C", "Rx4B86C", "Rx4B8BF", "Rx4B90F" ],
			"code": "\
FF75 0C \
FF75 08 \
8B0D <Rx1C0028> \
FF81 00070000 \
E8 [Rx4C8F0] \
C9 \
C2 0800 \
CC \
"
		},
		// The funny long nops in this are to avoid thprac patches
		"allocate_new_vm_fast": {
			"addr": "Rx4C9B0",
			"code": "\
53 \
57 \
56 \
8BB9 1C070006 \
85FF \
0F84 03010000 \
8B47 08 \
8B4F 0C \
85C9 \
74 08 \
3979 14 \
75 03 \
8941 14 \
8B4F 04 \
85C9 \
74 03 \
8941 08 \
85C0 \
74 03 \
8948 04 \
8DB7 1CFAFFFF \
8B9F E0FEFFFF \
68 E4050000 \
6A 00 \
56 \
E8 637D0F00 \
83C4 0C \
0F2805 {x.f32:1.0f;1.0f;1.0f;1.0f} \
0F1187 6CFAFFFF \
66662E0F1F8400 00000000 \
0F1387 84FAFFFF \
F30F1187 D4FDFFFF \
F30F1187 E8FDFFFF \
F30F1187 FCFDFFFF \
F30F1187 10FEFFFF \
F20F1005 {q.u32:0x3F800000;0x40490FDB} \
F20F1187 94FEFFFF \
C787 9CFEFFFF 00000100 \
C787 ACFEFFFF FFFFFFFF \
C687 B6FEFFFF 01 \
C687 B8FEFFFF 01 \
C687 BCFEFFFF 01 \
899F E0FEFFFF \
C787 E4FEFFFF C1BDF0FF \
C787 F4FEFFFF C1BDF0FF \
89B7 08FFFFFF \
89B7 30FFFFFF \
8D87 44FFFFFF \
89B7 44FFFFFF \
8987 50FFFFFF \
C647 14 01 \
660F1F8400 00000000 \
89F0 \
5E \
5F \
5B \
C3 \
57 \
E8 36ADFFFF \
89C6 \
89C1 \
E8 [codecave:anm_vm_reset_fast] \
C786 C4040000 FFFF0000 \
EB DF \
"
		},
		"get_vm_with_id_fast": {
			"addr": "Rx4CD00",
			"code": "\
8B5424 04 \
85D2 \
74 64 \
0FB7C2 \
3D FFFF0000 \
74 24 \
C1E0 09 \
8D8440 10070000 \
80BC01 F8050000 00 \
74 46 \
399401 C0040000 \
75 3D \
01C8 \
C2 0400 \
CCCC \
8B81 CC060000 \
85C0 \
74 0C \
3950 D4 \
74 2C \
8B40 04 \
85C0 \
75 F4 \
8B81 E4060000 \
85C0 \
74 16 \
<nop:10> \
3950 D4 \
74 0C \
8B40 04 \
85C0 \
75 F4 \
31C0 \
C2 0400 \
05 14FBFFFF \
C2 0400 \
<int3:335> \
"
		},
		"on_tick_world_fast": {
			"addr": "Rx50880",
			"code": "\
A1 <Rx1BA828> \
85C0 \
74 0F \
0FB680 E8000000 \
A8 05 \
74 04 \
A8 02 \
75 18 \
8B4C24 04 \
BA CC060000 \
E9 [codecave:on_tick_lists_fast] \
<int3:10> \
B8 01000000 \
C3 \
<int3:5> \
"
		},
		"on_tick_ui_fast": {
			"addr": "Rx508C0",
			"code": "\
8B4C24 04 \
BA E4060000 \
E9 [codecave:on_tick_lists_fast] \
"
		},
		"assign_next_id_to_vm_fast": {
			"addr": "Rx4C8F0",
			"code": "\
56 \
8B4424 08 \
8B5424 0C \
0FB7B1 880ED407 \
6683C6 01 \
6683D6 00 \
6689B1 880ED407 \
0FB78A C4040000 \
C1E6 10 \
09CE \
89B2 C0040000 \
8930 \
5E \
C2 0800 \
<int3:132> \
"
		},
		"destroy_vm_fast": {
			"addr": "Rx4C2F0",
			"code": "\
53 \
57 \
56 \
89CE \
8B5C24 10 \
8BBB 68050000 \
85FF \
0F85 90000000 \
8B83 64050000 \
85C0 \
0F85 94000000 \
8B83 F4040000 \
8B8B F8040000 \
85C9 \
74 0E \
8D93 EC040000 \
3951 14 \
75 03 \
8941 14 \
8B8B F0040000 \
85C9 \
74 03 \
8941 08 \
85C0 \
74 03 \
8948 04 \
81BB C4040000 FFFF0000  \
74 61 \
C683 F8050000 00  \
8D86 18070006 \
8D8B E4050000 \
8B96 1C070006 \
898E 1C070006 \
85D2 \
74 09 \
894A 08 \
8993 E8050000 \
8983 EC050000 \
8B86 24070006 \
8983 F0050000 \
5E \
5F \
5B \
C2 0400 \
8B07 \
89F9 \
FF50 0C \
57 \
E8 [Rx1F7C0] \
E9 5EFFFFFF \
50 \
E8 [Rx1F670] \
E9 61FFFFFF \
5E \
5F \
5B \
E9 [Rx1F7C0] \
<int3:104> \
"
		},
		// Turbo layer array
		"allocate_turbo_array": {
			"addr": "Rx47F97",
			"code": "\
0F57C0 \
0F1181 000E0006 \
C781 00070000 00000000 \
C781 04070000 (u32:<cpuid:avx2>?0x20:0x10) \
6A (u8:<cpuid:avx2>?0x20:0x10) \
6A (u8:<cpuid:avx2>?0x20:0x10) \
E8 [th_aligned_malloc] \
83C4 08 \
8B4D F0 \
8981 08070000 \
51 \
68 <codecave:preprocess_layers> \
6A FF \
E8 [Rx12360] \
83C4 0C \
<nop:9> \
"
		},
		"cleanup_turbo_array": {
			"addr": "Rx49288",
			"code": "\
81C1 C8060000 \
E8 0D110000 \
8B4D F0 \
FFB1 08070000 \
E8 [th_aligned_free] \
83C4 04 \
"
		},
		// BulletManager replacements
		"bullet_manager_on_draw_fast": {
			"addr": "Rx85336",
			"code": "[codecave:bullet_manager_on_draw_fast]"
		},
		"bullet_manager_on_draw_fastB": {
			"addr": "Rx7DC90",
			"code": "\
E9 [codecave:bullet_manager_on_draw_fast] \
<int3:76> \
"
		}
	}
}