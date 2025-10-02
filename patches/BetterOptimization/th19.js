{
	"options": {
		"better_optimization_anm_list_base": {
			"type": "u32",
			"val": 0
		},
		"better_optimization_free_list_base": {
			"type": "u32",
			"val": 0
		},
		"render_layer_prep_addr": {
			"type": "p",
			"val": 0
		},
		"draw_vm_addr": {
			"type": "p",
			"val": 0
		},
		"anm_manager_ptr_addr": {
			"type": "p",
			"val": 0
		},
		"base_game_memset_addr": {
			"type": "p",
			"val": 0
		},
		"base_game_free_addr": {
			"type": "p",
			"val": 0
		},
		"run_anm_addr": {
			"type": "p",
			"val": 0
		},
		"on_destroy_func_table_addr": {
			"type": "p",
			"val": 0
		},
		"invalid_anm_fast_id": {
			"type": "u32",
			"val": 0
		},
		"register_on_draw_addr": {
			"type": "p",
			"val": 0
		},
		"destroy_all_vms_addr": {
			"type": "p",
			"val": 0
		}
	},
	"codecaves": {
		"preprocess_layers": {
			"access": "re",
			"code": "\
55 \
53 \
57 \
56 \
8B6C24 14 \
E8 [codecave:lock_anm_mutex] \
8BBD (u32:<option:better_optimization_anm_list_base>+16) \
83C7 (u8:<cpuid:avx2>?0x1F:0x0F) \
83E7 (u8:<cpuid:avx2>?0xE0:0xF0) \
8BB5 (u32:<option:better_optimization_anm_list_base>+48) \
83C6 (u8:<cpuid:avx2>?0x1F:0x0F) \
83E6 (u8:<cpuid:avx2>?0xE0:0xF0) \
8D143E \
8D1C92 \
8B85 (u32:<option:better_optimization_anm_list_base>+24) \
399D (u32:<option:better_optimization_anm_list_base>+20) \
73 18 \
899D (u32:<option:better_optimization_anm_list_base>+20) \
6A (u8:<cpuid:avx2>?0x20:0x10) \
53 \
50 \
E8 [th_aligned_realloc] \
83C4 0C \
8985 (u32:<option:better_optimization_anm_list_base>+24) \
53 \
6A FF \
50 \
8D1CBF \
E8 [<option:base_game_memset_addr>] \
83C4 0C \
01C7 \
89BD (u32:<option:better_optimization_anm_list_base>+28) \
01C3 \
899D (u32:<option:better_optimization_anm_list_base>+56) \
01DE \
89B5 (u32:<option:better_optimization_anm_list_base>+60) \
8B8D <option:better_optimization_anm_list_base> \
EB 21 \
<int3:9> \
0FB695 {x.u8:26;29;30;31;32;33;34;35;36} \
8810 \
40 \
8D91 F4FAFFFF \
8917 \
83C7 04 \
8B49 04 \
85C9 \
74 1F \
8379 6C 00 \
75 F3 \
8B91 0CFBFFFF \
8D6A D5 \
83FD 08 \
76 D0 \
81FA FE000000 \
76 CF \
EB DB \
CC \
8B6C24 14 \
8B8D (u32:<option:better_optimization_anm_list_base>+8) \
EB 18 \
0FB692 {x.u8:43;45;45;44;45;46;47;48;49;50;51} \
8810 \
40 \
8D91 F4FAFFFF \
8917 \
83C7 04 \
8B49 04 \
85C9 \
74 24 \
8379 6C 00 \
75 F3 \
8B91 0CFBFFFF \
83C2 E6 \
83FA 0A \
76 D0 \
BA 2D000000 \
EB D0 \
<int3:9> \
8B85 (u32:<option:better_optimization_anm_list_base>+32) \
EB 19 \
CC \
0FB68A {x.u8:26;29;30;31;32;33;34;35;36} \
880B \
43 \
8D88 F4FAFFFF \
890E \
83C6 04 \
8B40 04 \
85C0 \
74 1F \
8378 6C 00 \
75 F3 \
8B88 0CFBFFFF \
8D51 D5 \
83FA 08 \
76 D0 \
81F9 FE000000 \
76 CF \
EB DB \
CC \
8B85 (u32:<option:better_optimization_anm_list_base>+40) \
EB 1C \
CCCCCCCC \
0FB689 {x.u8:43;45;45;44;45;46;47;48;49;50;51} \
880B \
43 \
8D88 F4FAFFFF \
890E \
83C6 04 \
8B40 04 \
85C0 \
74 1C \
8378 6C 00 \
75 F3 \
8B88 0CFBFFFF \
83C1 E6 \
83F9 0A \
76 D0 \
B9 2D000000 \
EB D0 \
CC \
E8 [codecave:unlock_anm_mutex] \
B8 01000000 \
5E \
5F \
5B \
5D \
C3 \
"
		},
		"render_layer_turbo_impl": {
			"ignore": "<cpuid:avx2>",
			"access": "re",
			"align": 64,
			"code": "\
660F6FC8 \
660F740E \
83C6 10 \
83C7 40 \
660FD7D9 \
85DB \
75 0A \
39C6 \
75 E6 \
C3 \
CCCCCCCCCC \
F6C3 01 \
74 0A \
FF77 C4 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C3 02 \
74 0A \
FF77 C8 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C3 04 \
74 0A \
FF77 CC \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C3 08 \
74 0A \
FF77 D0 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C3 10 \
74 0A \
FF77 D4 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C3 20 \
74 0A \
FF77 D8 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C3 40 \
74 0A \
FF77 DC \
89E9 \
E8 [<option:draw_vm_addr>] \
84DB \
79 0A \
FF77 E0 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C7 01 \
74 0A \
FF77 E4 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C7 02 \
74 0A \
FF77 E8 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C7 04 \
74 0A \
FF77 EC \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C7 08 \
74 0A \
FF77 F0 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C7 10 \
74 0A \
FF77 F4 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C7 20 \
74 0A \
FF77 F8 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C7 40 \
74 0A \
FF77 FC \
89E9 \
E8 [<option:draw_vm_addr>] \
84FF \
79 09 \
FF37 \
89E9 \
E8 [<option:draw_vm_addr>] \
8B4424 08 \
39C6 \
0F84 01FFFFFF \
660F6E4424 04 \
660F70C0 00 \
E9 D7FEFFFF \
"
		},
		"render_layer_turbo": {
			"ignore": "<cpuid:avx2>",
			"access": "re",
			"code": "\
55 \
53 \
57 \
56 \
83EC 08 \
89CD \
8BB1 (u32:<option:better_optimization_anm_list_base>+24) \
8BB9 (u32:<option:better_optimization_anm_list_base>+28) \
39FE \
74 2E \
69DA 01010101 \
6A 00 \
52 \
E8 [<option:render_layer_prep_addr>] \
89F8 \
83C7 FC \
894424 04 \
891C24 \
660F6EC3 \
660F70C0 00 \
E8 [codecave:render_layer_turbo_impl] \
0FB61424 \
89E9 \
8BB1 (u32:<option:better_optimization_anm_list_base>+56) \
8BB9 (u32:<option:better_optimization_anm_list_base>+60) \
39FE \
74 28 \
69DA 01010101 \
6A 01 \
52 \
E8 [<option:render_layer_prep_addr>] \
89F8 \
83C7 FC \
894424 04 \
891C24 \
660F6EC3 \
660F70C0 00 \
E8 [codecave:render_layer_turbo_impl] \
B8 01000000 \
83C4 08 \
5E \
5F \
5B \
5D \
C3 \
"
		},
		"render_layer_turbo_impl_avx2": {
			"enable": "<cpuid:avx2>",
			"access": "re",
			"align": 64,
			"code": "\
C5FD740E \
83C6 20 \
83EF 80 \
C5FDD7D9 \
85DB \
75 0E \
39C6 \
75 EA \
C5F877 \
C3 \
<int3:6> \
C5F877 \
F6C3 01 \
74 0A \
FF77 84 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C3 02 \
74 0A \
FF77 88 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C3 04 \
74 0A \
FF77 8C \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C3 08 \
74 0A \
FF77 90 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C3 10 \
74 0A \
FF77 94 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C3 20 \
74 0A \
FF77 98 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C3 40 \
74 0A \
FF77 9C \
89E9 \
E8 [<option:draw_vm_addr>] \
84DB \
79 0A \
FF77 A0 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C7 01 \
74 0A \
FF77 A4 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C7 02 \
74 0A \
FF77 A8 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C7 04 \
74 0A \
FF77 AC \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C7 08 \
74 0A \
FF77 B0 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C7 10 \
74 0A \
FF77 B4 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C7 20 \
74 0A \
FF77 B8 \
89E9 \
E8 [<option:draw_vm_addr>] \
F6C7 40 \
74 0A \
FF77 BC \
89E9 \
E8 [<option:draw_vm_addr>] \
84FF \
79 0A \
FF77 C0 \
89E9 \
E8 [<option:draw_vm_addr>] \
F7C3 00000100 \
74 0A \
FF77 C4 \
89E9 \
E8 [<option:draw_vm_addr>] \
F7C3 00000200 \
74 0A \
FF77 C8 \
89E9 \
E8 [<option:draw_vm_addr>] \
F7C3 00000400 \
74 0A \
FF77 CC \
89E9 \
E8 [<option:draw_vm_addr>] \
F7C3 00000800 \
74 0A \
FF77 D0 \
89E9 \
E8 [<option:draw_vm_addr>] \
F7C3 00001000 \
74 0A \
FF77 D4 \
89E9 \
E8 [<option:draw_vm_addr>] \
F7C3 00002000 \
74 0A \
FF77 D8 \
89E9 \
E8 [<option:draw_vm_addr>] \
F7C3 00004000 \
74 0A \
FF77 DC \
89E9 \
E8 [<option:draw_vm_addr>] \
F7C3 00008000 \
74 0A \
FF77 E0 \
89E9 \
E8 [<option:draw_vm_addr>] \
F7C3 00000001 \
74 0A \
FF77 E4 \
89E9 \
E8 [<option:draw_vm_addr>] \
F7C3 00000002 \
74 0A \
FF77 E8 \
89E9 \
E8 [<option:draw_vm_addr>] \
F7C3 00000004 \
74 0A \
FF77 EC \
89E9 \
E8 [<option:draw_vm_addr>] \
F7C3 00000008 \
74 0A \
FF77 F0 \
89E9 \
E8 [<option:draw_vm_addr>] \
F7C3 00000010 \
74 0A \
FF77 F4 \
89E9 \
E8 [<option:draw_vm_addr>] \
F7C3 00000020 \
74 0A \
FF77 F8 \
89E9 \
E8 [<option:draw_vm_addr>] \
F7C3 00000040 \
74 0A \
FF77 FC \
89E9 \
E8 [<option:draw_vm_addr>] \
85DB \
79 09 \
FF37 \
E8 [<option:draw_vm_addr>] \
8B4424 08 \
39C6 \
0F84 DEFDFFFF \
C4E27D784424 04 \
E9 BCFDFFFF \
"
		},
		"render_layer_turbo_avx2": {
			"enable": "<cpuid:avx2>",
			"access": "re",
			"code": "\
55 \
53 \
57 \
56 \
83EC 08 \
89CD \
8BB1 (u32:<option:better_optimization_anm_list_base>+24) \
8BB9 (u32:<option:better_optimization_anm_list_base>+28) \
39FE \
74 2A \
89D3 \
6A 00 \
52 \
E8 [<option:render_layer_prep_addr>] \
89F8 \
83C7 FC \
894424 04 \
891C24 \
C5F96EC3 \
C4E27D78C0 \
E8 [codecave:render_layer_turbo_impl_avx2] \
0FB61424 \
89E9 \
8BB1 (u32:<option:better_optimization_anm_list_base>+56) \
8BB9 (u32:<option:better_optimization_anm_list_base>+60) \
39FE \
74 24 \
89D3 \
6A 01 \
52 \
E8 [<option:render_layer_prep_addr>] \
89F8 \
83C7 FC \
894424 04 \
891C24 \
C5F96EC3 \
C4E27D78C0 \
E8 [codecave:render_layer_turbo_impl_avx2] \
B8 01000000 \
83C4 08 \
5E \
5F \
5B \
5D \
C3 \
"
		},
		"recursive_remove_fast": {
			"access": "re",
			"code": "\
56 \
89C6 \
8B40 14 \
85C0 \
74 0F \
<nop:6> \
E8 [codecave:recursive_remove_fast] \
85C0 \
75 F7 \
C646 4C 02 \
897E 24 \
8B46 04 \
8B4E 08 \
85C9 \
74 03 \
8941 04 \
85C0 \
74 03 \
8948 08 \
8D7E 20 \
5E \
C3 \
"
		},
		"on_tick_lists_fast": {
			"access": "re",
			"align": 64,
			"code": "\
55 \
53 \
57 \
56 \
8B2C02 \
85ED \
74 42 \
89CE \
89D3 \
31FF \
EB 14 \
<int3:13> \
8B6D 04 \
85ED \
74 22 \
0FB645 6C \
85C0 \
75 0B \
8D8D F4FAFFFF \
E8 [<option:run_anm_addr>] \
83F8 01 \
75 E1 \
8D45 20 \
E8 [codecave:recursive_remove_fast] \
EB D7 \
85FF \
75 0D \
B8 01000000 \
5E \
5F \
5B \
5D \
C3 \
CCCCCC \
81C6 <option:better_optimization_free_list_base> \
FF4B 10 \
8B87 B8000000 \
85C0 \
0F85 95000000 \
8D57 C0 \
8B47 C4 \
8B4F C8 \
3953 04 \
0F84 99000000 \
3913 \
0F84 9C000000 \
3953 0C \
0F84 9E000000 \
3953 08 \
0F84 A1000000 \
85C0 \
74 03 \
8948 08 \
85C9 \
74 03 \
8941 04 \
8B47 24 \
85C0 \
0F85 98000000 \
8B6F 04 \
817F 90 (u32:<option:invalid_anm_fast_id>+1) \
0F84 A4000000 \
C747 8C 00000000 \
C787 E0FAFFFF FFFFFFFF  \
C687 F8000000 00  \
81C7 E8000000 \
8B46 04 \
897E 04 \
85C0 \
74 06 \
8978 08 \
8947 04 \
8977 08 \
89EF \
85ED \
0F85 5FFFFFFF \
E9 47FFFFFF \
8D8F B4FAFFFF \
51 \
FF1485 <option:on_destroy_func_table_addr> \
83C4 04 \
E9 55FFFFFF \
894B 04 \
3913 \
0F85 64FFFFFF \
8903 \
3953 0C \
0F85 62FFFFFF \
894B 0C \
3953 08 \
0F85 5FFFFFFF \
8943 08 \
85C0 \
0F85 58FFFFFF \
E9 56FFFFFF \
C747 24 00000000 \
C747 28 00000000 \
50 \
E8 [<option:base_game_free_addr>] \
83C4 04 \
E9 4CFFFFFF \
81C7 B4FAFFFF \
57 \
E8 [<option:base_game_free_addr>] \
83C4 04 \
E9 79FFFFFF \
"
		},
		"draw_layer_A_fast": {
			"access": "re",
			"code": "\
8B5424 04 \
8B0D <option:anm_manager_ptr_addr> \
E9 (<cpuid:avx2>?[codecave:render_layer_turbo_avx2]:[codecave:render_layer_turbo]) \
"
		},
		"draw_layer_B_fast": {
			"access": "re",
			"code": "\
8B5424 04 \
8B0D <option:anm_manager_ptr_addr> \
C781 (u32:<option:better_optimization_anm_list_base>-8) FFFFFFFF \
E9 (<cpuid:avx2>?[codecave:render_layer_turbo_avx2]:[codecave:render_layer_turbo]) \
"
		},
		"draw_layer_C_fast": {
			"access": "re",
			"code": "\
8B5424 04 \
E8 (<cpuid:avx2>?[codecave:render_layer_turbo_avx2]:[codecave:render_layer_turbo]) \
C2 0400 \
"
		},
		"allocate_layer_hack": {
			"access": "re",
			"code": "\
0FB6D2 \
8950 24 \
E9 [<option:register_on_draw_addr>] \
"
		},
		"cleanup_turbo_array": {
			"access": "re",
			"code": "\
56 \
89CE \
FFB1 (u32:<option:better_optimization_anm_list_base>+24) \
E8 [th_aligned_free] \
83C4 04 \
89F1 \
5E \
E9 [<option:destroy_all_vms_addr>] \
"
		}
	},
	"binhacks": {
		"on_tick_world_fast": {
			"code": "<codecave:on_tick_world_fast>"
		},
		"on_tick_ui_fast": {
			"code": "<codecave:on_tick_ui_fast>"
		},
		"draw_layer_A_push": {
			"code": "<codecave:draw_layer_A_fast>"
		},
		"draw_layer_0_1_fast": {
			"code": "\
31D2 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_1_2_fast": {
			"code": "\
B2 01 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_2_4_fast": {
			"code": "\
B2 02 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_4_3_fast": {
			"code": "\
B2 04 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_B_fast> \
"
		},
		"draw_layer_3_5_fast": {
			"code": "\
B2 03 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_5_6_fast": {
			"code": "\
B2 05 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_B_fast> \
"
		},
		"draw_layer_6_7_fast": {
			"code": "\
B2 06 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_7_8_fast": {
			"code": "\
B2 07 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_8_9_fast": {
			"code": "\
B2 08 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_9_fast": {
			"code": "B20990"
		},
		"draw_layer_10_11_fast": {
			"code": "\
B2 0A \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_11_12_fast": {
			"code": "\
B2 0B \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_B_fast> \
"
		},
		"draw_layer_12_13_fast": {
			"code": "\
B2 0C \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_13_14_fast": {
			"code": "\
B2 0D \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_14_15_fast": {
			"code": "\
B2 0E \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_15_16_fast": {
			"code": "\
B2 0F \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_16_17_fast": {
			"code": "\
B2 10 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_17_18_fast": {
			"code": "\
B2 11 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_18_19_fast": {
			"code": "\
B2 12 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_19_20_fast": {
			"code": "\
B2 13 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_B_fast> \
"
		},
		"draw_layer_20_21_fast": {
			"code": "\
B2 14 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_21_22_fast": {
			"code": "\
B2 15 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_22_23_fast": {
			"code": "\
B2 16 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_23_24_fast": {
			"code": "\
B2 17 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_B_fast> \
"
		},
		"draw_layer_24_25_fast": {
			"code": "\
B2 18 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_25_27_fast": {
			"code": "\
B2 19 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_B_fast> \
"
		},
		"draw_layer_27_28_fast": {
			"code": "\
B2 1B \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_28_30_fast": {
			"code": "\
B2 1C \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_30_31_fast": {
			"code": "\
B2 1E \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_31_34_fast": {
			"code": "\
B2 1F \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_34_35_fast": {
			"code": "\
B2 22 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_35_36_fast": {
			"code": "\
B2 23 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_36_fast": {
			"code": "B22490"
		},
		"draw_layer_29_26_fast": {
			"code": "\
B2 1D \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_B_fast> \
"
		},
		"draw_layer_26_32_fast": {
			"code": "\
B2 1A \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_32_33_fast": {
			"code": "\
B2 20 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_33_43_fast": {
			"code": "\
B2 21 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_B_fast> \
"
		},
		"draw_layer_43_44_fast": {
			"code": "\
B2 2B \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_44_45_fast": {
			"code": "\
B2 2C \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_45_46_fast": {
			"code": "\
B2 2D \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_46_47_fast": {
			"code": "\
B2 2E \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_47_48_fast": {
			"code": "\
B2 2F \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_48_49_fast": {
			"code": "\
B2 30 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_49_50_fast": {
			"code": "\
B2 31 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_50_51_fast": {
			"code": "\
B2 32 \
90 \
E8 [codecave:allocate_layer_hack] \
68 <codecave:draw_layer_A_fast> \
"
		},
		"draw_layer_51_fast": {
			"code": "\
B2 33 \
90 \
E8 [codecave:allocate_layer_hack] \
"
		},
		"draw_layer_C_fast": {
			"code": "[codecave:draw_layer_C_fast]"
		},
		"cleanup_turbo_array": {
			"code": "[codecave:cleanup_turbo_array]"
		},
		"add_vm_to_list_back_fast": {
			"code": "\
898F 08050000 \
0F57C0 \
F20F1142 04 \
FF41 10 \
<nop:3> \
"
		},
		"add_vm_to_list_front_fast": {
			"code": "\
0F57C0 \
F20F1140 04 \
FF41 10 \
<nop:3> \
"
		},
		"anm_vm_mark_outside_fast_array": {
			"code": "(u32:<option:invalid_anm_fast_id>+1)"
		},
		"destroy_all_vms_fast": {
			"code": "\
55 \
53 \
57 \
56 \
C741 10 00000000 \
8B3D <option:anm_manager_ptr_addr> \
8D9F <option:better_optimization_free_list_base> \
8B29 \
C701 00000000 \
C741 04 00000000 \
85ED \
0F84 A7000000 \
6690 \
8B85 F8000000 \
85C0 \
75 52 \
8B45 64 \
85C0 \
75 62 \
8B75 04 \
817D D0 (u32:<option:invalid_anm_fast_id>+1) \
74 73 \
C745 CC 00000000 \
C785 20FBFFFF FFFFFFFF \
C685 38010000 00 \
81C5 28010000 \
8B87 (u32:<option:better_optimization_free_list_base>+4) \
89AF (u32:<option:better_optimization_free_list_base>+4) \
85C0 \
74 06 \
8968 08 \
8945 04 \
895D 08 \
89F5 \
85F6 \
75 A6 \
EB 49 \
89CE \
8D8D F4FAFFFF \
51 \
FF1485 <option:on_destroy_func_table_addr> \
89F1 \
83C4 04 \
EB 97 \
C745 64 00000000 \
C745 68 00000000 \
50 \
89CE \
E8 [<option:base_game_free_addr>] \
89F1 \
83C4 04 \
EB 81 \
81C5 F4FAFFFF \
55 \
89CD \
E8 [<option:base_game_free_addr>] \
89E9 \
83C4 04 \
EB AF \
8B69 08 \
C741 08 00000000 \
C741 0C 00000000 \
85ED \
0F84 9B000000 \
6690 \
8B85 F8000000 \
85C0 \
75 52 \
8B45 64 \
85C0 \
75 5E \
8B75 04 \
817D D0 (u32:<option:invalid_anm_fast_id>+1) \
74 6B \
C745 CC 00000000 \
C785 20FBFFFF FFFFFFFF \
C685 38010000 00 \
81C5 28010000 \
8B87 (u32:<option:better_optimization_free_list_base>+4) \
89AF (u32:<option:better_optimization_free_list_base>+4) \
85C0 \
74 06 \
8968 08 \
8945 04 \
895D 08 \
89F5 \
85F6 \
75 A6 \
EB 3D \
8D8D F4FAFFFF \
51 \
FF1485 <option:on_destroy_func_table_addr> \
83C4 04 \
EB 9B \
C745 64 00000000 \
C745 68 00000000 \
50 \
E8 [<option:base_game_free_addr>] \
83C4 04 \
EB 89 \
81C5 F4FAFFFF \
55 \
E8 [<option:base_game_free_addr>] \
83C4 04 \
EB BB \
5E \
5F \
5B \
5D \
C3 \
CCCCCCCC \
"
		}
	}
}