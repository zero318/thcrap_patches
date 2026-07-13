{
	"options": {
		// Low ECL
		"zecl_lins_jump_addr": { "val": "Rx150E34" },
		"zecl_lins_jump_base_count": { "val": 71 },
		"zecl_lins_jump_new_count": { "val": 15 },
		"zecl_lins_case_addr": { "val": "Rx150F50" },
		"zecl_lins_case_base_count": { "val": 98 },
		"zecl_lins_case_new_count": { "val": 14 },
		// High ECL
		"zecl_hins_jump_addr": { "val": "RxF39E8" },
		"zecl_hins_jump_base_count": { "val": 196 },
		"zecl_hins_jump_new_count": { "val": 15 },
		"zecl_hins_case_addr": { "val": "RxF3CF8" },
		"zecl_hins_case_base_count": { "val": 742 },
		"zecl_hins_case_new_count": { "val": 16 },
		// Int Vars
		"zecl_ivar_jump_addr": { "val": "RxED100" },
		"zecl_ivar_jump_base_count": { "val": 119 },
		"zecl_ivar_jump_new_count": { "val": 19 },
		// Int Ptrs
		"zecl_iptr_jump_addr": { "val": "RxEC67C" },
		"zecl_iptr_jump_base_count": { "val": 20 },
		"zecl_iptr_jump_new_count": { "val": 2 },
		"zecl_iptr_case_addr": { "val": "RxEC6CC" },
		"zecl_iptr_case_base_count": { "val": 94 },
		"zecl_iptr_case_new_count": { "val": 14 },
		// Float Vars
		"zecl_fvar_jump_addr": { "val": "RxEC2E0" },
		"zecl_fvar_jump_base_count": { "val": 119 },
		"zecl_fvar_jump_new_count": { "val": 17 },
		// Float Ptrs
		"zecl_fptr_jump_addr": { "val": "RxEB69C" },
		"zecl_fptr_jump_base_count": { "val": 25 },
		"zecl_fptr_jump_new_count": { "val": 0 },
		"zecl_fptr_case_addr": { "val": "RxEB700" },
		"zecl_fptr_case_base_count": { "val": 81 },
		"zecl_fptr_case_new_count": { "val": 0 },
		
		"ecl_lins_break_addr": {
			"type": "p",
			"val": "Rx150DC7"
		},
		//"ecl_lins_continue_addr": {
			//"type": "u32",
			//"val": 
		//},
		"ecl_lins_get_int_arg_addr": {
			"type": "p",
			"val": "Rx151450"
		},
		"ecl_lins_get_iptr_arg_addr": {
			"type": "p",
			"val": "Rx151500"
		},
		"ecl_lins_get_float_arg_addr": {
			"type": "p",
			"val": "Rx151570"
		},
		"ecl_lins_get_fptr_arg_addr": {
			"type": "p",
			"val": "Rx151660"
		},
		"ecl_hins_break_addr": {
			"type": "p",
			"val": "RxF39C6"
		},
		//"ecl_hins_continue_addr": {
			//"type": "u32",
			//"val": 
		//},
		
		"game_sides_addr": {
			"type": "p",
			"val": "Rx1AE470"
		},
		"card_data_table_addr": {
			"type": "p",
			"val": "Rx1A25B0"
		},
		"card_count": {
			"type": "u32",
			"val": 39 // excluding NULL/BACK
		}
	},
	"codecaves": {
		"ZECL_high_ins_case_table": {
			"code": "\
C3 \
C4 \
C5 \
C6 \
C7 \
C8 \
C9 \
CA \
CB \
CC \
CD \
CE \
CF \
D0 \
D1 \
D2 \
"
		},
		"ZECL19_debug_log": {
			"enable": "<patch:EclStrFormat>",
			"access": "re",
			"code": "\
89F9 \
8B55 FC \
B8 01000000 \
E8 [codecave:ecl_format] \
50 \
E8 [log_print] \
E8 [th_free] \
83C4 04 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_thcrap_expr": {
			"access": "re",
			"code": "\
83EC 04 \
89F9 \
E8 [<option:ecl_lins_get_iptr_arg_addr>] \
8B4D FC \
83C1 14 \
31D2 \
6A 00 \
6A 00 \
6A 00 \
50 \
E8 [eval_expr] \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_count_cards": {
			"access": "re",
			"code": "\
895D FC \
B8 <option:card_data_table_addr> \
<nop:8> \
8B10 \
31C9 \
<nop:12> \
0FB61C0A \
8A7C0E 14 \
84DB \
74 05 \
41 \
38FB \
74 EF \
38FB \
74 0F \
83C0 20 \
3D (<option:card_data_table_addr> + 0x20 * <option:card_count>) \
75 D1 \
31F6 \
EB 30 \
CC \
31F6 \
6B97 38560000 3C \
8B8A (<option:game_sides_addr> + 0x20) \
8B51 20 \
85D2 \
74 19 \
8B40 04 \
<nop:3> \
8B0A \
8B52 04 \
31DB \
3941 04 \
0F94C3 \
01DE \
85D2 \
75 ED \
8B87 C8550000 \
8B48 0C \
E8 [<option:ecl_lins_get_iptr_arg_addr>] \
83EC 04 \
8930 \
8B5D FC \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_opposite_count_cards": {
			"access": "re",
			"code": "\
895D FC \
B8 <option:card_data_table_addr> \
<nop:8> \
8B10 \
31C9 \
<nop:12> \
0FB61C0A \
8A7C0E 14 \
84DB \
74 05 \
41 \
38FB \
74 EF \
38FB \
74 0F \
83C0 20 \
3D (<option:card_data_table_addr> + 0x20 * <option:card_count>) \
75 D1 \
31F6 \
EB 30 \
CC \
31F6 \
6B97 38560000 C4 \
8B8A (<option:game_sides_addr> +0x5C) \
8B51 20 \
85D2 \
74 19 \
8B40 04 \
<nop:3> \
8B0A \
8B52 04 \
31DB \
3941 04 \
0F94C3 \
01DE \
85D2 \
75 ED \
8B87 C8550000 \
8B48 0C \
E8 [<option:ecl_lins_get_iptr_arg_addr>] \
83EC 04 \
8930 \
8B5D FC \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_set_int_from_enemy": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 02 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
89C6 \
6B97 38560000 3C \
50 \
8B8A (<option:game_sides_addr> + 0x8) \
E8 [RxEC40] \
85C0 \
75 1B \
6B97 38560000 C4 \
56 \
8B8A (<option:game_sides_addr> + 0x44) \
E8 [RxEC40] \
85C0 \
0F84 [<option:ecl_hins_break_addr>] \
89C6 \
8B97 C8550000 \
6A 01 \
8B4A 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
8B16 \
50 \
89F1 \
FF52 08 \
89C6 \
8B97 C8550000 \
6A 00 \
8B4A 0C \
E8 [<option:ecl_lins_get_iptr_arg_addr>] \
8930 \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_set_float_from_enemy": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 02 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
89C6 \
6B97 38560000 3C \
50 \
8B8A (<option:game_sides_addr> + 0x8) \
E8 [RxFB70] \
85C0 \
75 1B \
6B97 38560000 C4 \
56 \
8B8A (<option:game_sides_addr> + 0x44) \
E8 [RxFB70] \
85C0 \
0F84 [<option:ecl_hins_break_addr>] \
53 \
89C6 \
8B97 C8550000 \
6A 01 \
8B4A 0C \
89CB \
E8 [<option:ecl_lins_get_int_arg_addr>] \
89D9 \
6A 00 \
89C3 \
E8 [<option:ecl_lins_get_fptr_arg_addr>] \
8B16 \
53 \
89C3 \
89F1 \
FF52 10 \
D91B \
5B \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_set_int_for_enemy": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 02 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
89C6 \
6B97 38560000 3C \
50 \
8B8A (<option:game_sides_addr> + 0x8) \
E8 [RxFB70] \
85C0 \
75 1B \
6B97 38560000 C4 \
56 \
8B8A (<option:game_sides_addr> + 0x44) \
E8 [RxFB70] \
85C0 \
0F84 [<option:ecl_hins_break_addr>] \
89C6 \
8B97 C8550000 \
6A 01 \
8B4A 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
8B16 \
50 \
89F1 \
FF52 0C \
89C6 \
8B97 C8550000 \
6A 00 \
8B4A 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
8906 \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_set_float_for_enemy": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 02 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
89C6 \
6B97 38560000 3C \
50 \
8B8A (<option:game_sides_addr> + 0x8) \
E8 [RxFB70] \
85C0 \
75 1B \
6B97 38560000 C4 \
56 \
8B8A (<option:game_sides_addr> + 0x44) \
E8 [RxFB70] \
85C0 \
0F84 [<option:ecl_hins_break_addr>] \
89C6 \
8B97 C8550000 \
6A 01 \
8B4A 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
8B16 \
50 \
89F1 \
FF52 14 \
89C6 \
8B97 C8550000 \
6A 00 \
8B4A 0C \
E8 [<option:ecl_lins_get_float_arg_addr>] \
F30F1106 \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_opposite_player_shot_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
E8 [RxABF0] \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_shot_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
E8 [RxABF0] \
8945 08 \
DB45 08 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_power_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
E8 [RxE070] \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_power_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
E8 [RxE070] \
8945 08 \
DB45 08 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_deaths_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x44) \
8B41 48 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_deaths_iptr": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B82 (<option:game_sides_addr> + 0x44) \
83C0 48 \
5E \
5D \
C2 0400 \
"
		},
		"ZECL19_opposite_player_deaths_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x44) \
DB41 48 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_bombs_used_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x44) \
8B41 4C \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_bombs_used_iptr": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B82 (<option:game_sides_addr> + 0x44) \
83C0 4C \
5E \
5D \
C2 0400 \
"
		},
		"ZECL19_opposite_player_bombs_used_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x44) \
DB41 4C \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_lives_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
E8 [Rx11F10] \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_lives_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
E8 [Rx11F10] \
8945 08 \
DB45 08 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_lives_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
E8 [Rx11F10] \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_lives_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
E8 [Rx11F10] \
8945 08 \
DB45 08 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_bombs_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
E8 [RxA5E0] \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_bombs_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
E8 [RxA5E0] \
8945 08 \
DB45 08 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_bombs_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
E8 [RxA5E0] \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_bombs_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
E8 [RxA5E0] \
8945 08 \
DB45 08 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_state_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x4) \
8B41 10 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_state_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x4) \
DB41 10 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_state_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x40) \
8B41 10 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_state_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x40) \
DB41 10 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_barrier_state_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x4) \
8B41 18 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_barrier_state_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x4) \
DB41 18 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_barrier_state_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x40) \
8B41 18 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_barrier_state_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x40) \
DB41 18 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_flags_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x4) \
8B92 (<option:game_sides_addr> + 0x1C) \
31C0 \
83B9 70200000 00 \
0F95C0 \
31C9 \
837A 18 00 \
0F95C1 \
8D0448 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_flags_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x40) \
8B92 (<option:game_sides_addr> + 0x58) \
31C0 \
83B9 70200000 00 \
0F95C0 \
31C9 \
837A 18 00 \
0F95C1 \
8D0448 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_life_fragments_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
8B41 58 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_life_fragments_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
DB41 58 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_life_fragments_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
8B41 58 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_life_fragments_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
DB41 58 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_bomb_fragments_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
8B41 68 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_player_bomb_fragments_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
DB41 68 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_bomb_fragments_ivar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
8B41 68 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_player_bomb_fragments_fvar": {
			"access": "re",
			"code": "\
6B96 DC680000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
DB41 68 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_game_side_ivar": {
			"access": "re",
			"code": "\
8B86 DC680000 \
83F0 01 \
5E \
C9 \
C2 0400 \
"
		},
		"ZECL19_opposite_game_side_fvar": {
			"access": "re",
			"code": "\
8B86 DC680000 \
83F0 01 \
8945 08 \
DB45 08 \
5E \
C9 \
C2 0400 \
"
		},
		"globals_side_add_lives": {
			"access": "re",
			"code": "\
56 \
8B51 50 \
8B71 54 \
39FA \
7D 12 \
01C2 \
39F2 \
7C 09 \
C741 58 00000000 \
89F2 \
8951 50 \
5E \
C3 \
"
		},
		"globals_side_add_bombs": {
			"access": "re",
			"code": "\
56 \
8B51 64 \
8B71 70 \
39F2 \
73 12 \
01C2 \
39F2 \
72 09 \
C741 68 00000000 \
89F2 \
8951 64 \
5E \
C3 \
"
		},
		"globals_side_sub_lives": {
			"access": "re",
			"code": "\
8B51 50 \
29D2 \
B8 FFFFFFFF \
0F48D0 \
8951 50 \
C3 \
"
		},
		"globals_side_sub_bombs": {
			"access": "re",
			"code": "\
8B51 64 \
29C2 \
B8 00000000 \
0F42D0 \
8951 64 \
C3 \
"
		},
		"globals_side_add_life_fragments": {
			"access": "re",
			"code": "\
53 \
57 \
56 \
8B59 50 \
8B79 54 \
39FB \
7D 25 \
0341 58 \
BA ABAAAAAA \
89C6 \
F7E2 \
D1EA \
8D0452 \
29C6 \
01DA \
31C0 \
39FA \
0F4CC6 \
0F4DD7 \
8951 50 \
8941 58 \
5E \
5F \
5B \
C3 \
"
		},
		"globals_side_add_bomb_fragments": {
			"access": "re",
			"code": "\
53 \
57 \
56 \
8B59 64 \
8B79 70 \
39FB \
73 25 \
0341 68 \
BA ABAAAAAA \
89C6 \
F7E2 \
D1EA \
8D0452 \
29C6 \
01DA \
31C0 \
39FA \
0F43F0 \
0F43D7 \
8951 64 \
8971 68 \
5E \
5F \
5B \
C3 \
"
		},
		"globals_side_sub_life_fragments": {
			"access": "re",
			"code": "\
56 \
8B51 50 \
8B71 58 \
8D1452 \
29C6 \
01D6 \
78 16 \
B8 ABAAAAAA \
F7E6 \
D1EA \
8D0452 \
29C6 \
8951 50 \
8971 58 \
5E \
C3 \
C741 50 FFFFFFFF \
C741 58 00000000 \
5E \
C3 \
"
		},
		"globals_side_sub_bomb_fragments": {
			"access": "re",
			"code": "\
56 \
8B51 64 \
8D3452 \
0371 68 \
29C6 \
72 16 \
B8 ABAAAAAA \
F7E6 \
D1EA \
8D0452 \
29C6 \
8971 68 \
8951 64 \
5E \
C3 \
0F57C0 \
0F1341 64 \
5E \
C3 \
"
		},
		"collect_life_fragment_item": {
			"access": "re",
			"code": "\
8B49 2C \
B8 01000000 \
E8 [codecave:globals_side_add_life_fragments] \
E9 [Rx10EA9D] \
"
		},
		"collect_life_item": {
			"access": "re",
			"code": "\
8B49 2C \
B8 01000000 \
E8 [codecave:globals_side_add_lives] \
E9 [Rx10EA9D] \
"
		},
		"collect_bomb_fragment_item": {
			"access": "re",
			"code": "\
8B49 2C \
B8 01000000 \
E8 [codecave:globals_side_add_bomb_fragments] \
E9 [Rx10EA9D] \
A1 <Rx1AE460> \
85C0 \
0F84 [Rx10EA9D] \
6B8F EC0C0000 6C \
8D4C08 10 \
E8 [Rx102CC0] \
E9 [Rx10EA9D] \
"
		},
		"collect_bomb_item": {
			"access": "re",
			"code": "\
8B49 2C \
B8 01000000 \
E8 [codecave:globals_side_add_bomb_fragments] \
E9 [Rx10EA9D] \
A1 <Rx1AE460> \
85C0 \
0F84 [Rx10EA9D] \
6B8F EC0C0000 6C \
8D4C08 10 \
E8 [Rx102CC0] \
E9 [Rx10EA9D] \
"
		},
		"item_collection_jump_table": {
			"access": "r",
			"code": "\
<Rx10EA9D> \
<Rx10EA9D> \
<Rx10EA9D> \
<codecave:collect_life_fragment_item> \
<codecave:collect_life_item> \
<codecave:collect_bomb_fragment_item> \
<codecave:collect_bomb_item> \
<Rx10EA9D> \
<Rx10EA1C> \
<Rx10EA9D> \
<Rx10EA9D> \
"
		},
		"restore_lifebars": {
			"access": "re",
			"code": "\
55 \
53 \
57 \
56 \
83EC 48 \
89CE \
E8 [Rx100E30] \
8B6E 64 \
6BF5 3C \
8B8E (<option:game_sides_addr> + 0x8) \
85C9 \
74 3C \
F681 94000000 01 \
75 33 \
FF71 54 \
E8 [RxEC40] \
8B0D <Rx1AE460> \
6BD5 54 \
8DBC11 1C030000 \
85C0 \
75 2D \
8907 \
0F57C0 \
0F1147 10 \
0F1147 20 \
837F 4C 00 \
0F85 B6020000 \
83C4 48 \
5E \
5F \
5B \
5D \
C3 \
CCCCCCCCCCCCCCCCCCCCCCCCCCCC \
F680 9C630000 (u8:<option:always_show_lifebars>?0x31:0x71) \
75 D7 \
83B8 5C630000 00 \
7F CE \
81B8 38620000 9F860100 \
7F C2 \
83B9 10030000 00 \
75 B9 \
8B9E (<option:game_sides_addr> + 0x4) \
837F 4C 00 \
0F84 A9020000 \
89C5 \
8B35 <Rx1AE3AC> \
89F1 \
FF77 48 \
E8 [RxBE0F0] \
894424 18 \
89F1 \
FF77 44 \
E8 [RxBE0F0] \
894424 14 \
89F1 \
FF77 40 \
E8 [RxBE0F0] \
894424 10 \
89F1 \
FF77 3C \
E8 [RxBE0F0] \
894424 0C \
89F1 \
FF77 38 \
E8 [RxBE0F0] \
894424 08 \
89F1 \
FF77 34 \
E8 [RxBE0F0] \
894424 04 \
89F1 \
FF77 30 \
E8 [RxBE0F0] \
890424 \
8B8D 38620000 \
894F 08 \
0F57C0 \
F30F2AC1 \
0F57C9 \
F30F2A8D 3C620000 \
F30F5EC1 \
F30F1147 04 \
F30F100F \
0F28D1 \
F30FC2D0 01 \
F30F101D <Rx1873C0> \
0F54DA \
F30F58D9 \
F30F5DD8 \
F30F111F \
F30F591D {u32:0xC0C90FDB} \
C680 B8040000 01 \
F30F1158 3C \
F20F1085 78120000 \
F20F108B 8C060000 \
0F28D0 \
0F5CD1 \
0F59D2 \
0F28CA \
0FC6CA 55 \
F30F58CA \
F30F114C24 1C \
0F58C0 \
0F1380 14060000 \
8B4424 04 \
0F1380 14060000 \
8B4424 08 \
0F1380 14060000 \
0F134424 20 \
BB 04000000 \
90 \
8B749C 08 \
F30F1044DF 08 \
0F57C9 \
0F2EC8 \
0F85 AA000000 \
89F1 \
E8 [RxBDC60] \
4B \
75 E0 \
F30F104424 1C \
395F 50 \
75 65 \
0F2E05 {u32:0x45C80000} \
0F83 62FEFFFF \
C747 50 01000000 \
BE 07000000 \
BF 03000000 \
<nop:7> \
8B44B4 FC \
8D98 3C050000 \
<nop:6> \
89B8 54040000 \
8B88 04060000 \
85C9 \
75 40 \
8B5B 04 \
8D83 D4FAFFFF \
85DB \
75 E3 \
4E \
75 D0 \
E9 15FEFFFF \
CCCCCCCCCCCCCCCCCCCCCC \
0F2E05 {u32:0x46100000} \
0F82 FDFDFFFF \
895F 50 \
BE 07000000 \
BF 02000000 \
EB A4 \
CCCCCCCC \
57 \
50 \
FF148D <Rx174FC0> \
83C4 08 \
EB B2 \
CCCC \
0F2E07 \
0F83 4DFFFFFF \
F30F100D {u32:0xC0C90FDB} \
F30F59C1 \
F30F1015 <Rx187884> \
F30F58C2 \
F30F101D <Rx1875B0> \
31C0 \
0F2EC3 \
76 0F \
F30F58C1 \
83F8 20 \
77 06 \
40 \
0F2EC3 \
77 F1 \
0F2EC2 \
73 0F \
F30F5CC1 \
83F8 20 \
77 06 \
40 \
0F2EC2 \
72 F1 \
C686 B8040000 01 \
F30F1146 44 \
E8 [Rx151D80] \
0F5905 {x.u32:0xC2E00000;0x42E00000;0;0} \
F20F104C24 20 \
0F58C8 \
0F138E 14060000 \
89F1 \
E8 [RxBDC90] \
4B \
0F85 B7FEFFFF \
E9 D2FEFFFF \
CCCC \
BB 07000000 \
8B35 <Rx1AE3AC> \
<nop:5> \
89F1 \
FF749F 2C \
E8 [RxBE0F0] \
89F1 \
50 \
E8 [RxBDF50] \
4B \
75 EA \
0F57C0 \
0F1147 30 \
0F1147 40 \
895F 50 \
E9 11FDFFFF \
CCCCCCCCCCCCCC \
C747 4C 01000000 \
8B35 <Rx1AE3AC> \
8B96 20070000 \
895424 1C \
89AE 20070000 \
89C5 \
8BB1 1C040000 \
8D47 48 \
8D4C24 18 \
83EC 20 \
894C24 1C \
0F2805 {x.i32:0;0;-1;0} \
0F114424 0C \
C74424 08 4D010000 \
890424 \
89F1 \
E8 [RxBE1B0] \
8D47 44 \
8D4C24 14 \
83EC 20 \
894C24 1C \
0F2805 {x.i32:0;0;-1;0} \
0F114424 0C \
C74424 08 4D010000 \
890424 \
89F1 \
E8 [RxBE1B0] \
8D47 40 \
8D4C24 10 \
83EC 20 \
894C24 1C \
0F2805 {x.i32:0;0;-1;0} \
0F114424 0C \
C74424 08 4D010000 \
890424 \
89F1 \
E8 [RxBE1B0] \
8D47 3C \
8D4C24 0C \
83EC 20 \
894C24 1C \
0F2805 {x.i32:0;0;-1;0} \
0F114424 0C \
C74424 08 4D010000 \
890424 \
89F1 \
E8 [RxBE1B0] \
8D47 38 \
8D4C24 08 \
83EC 20 \
894C24 1C \
0F2805 {x.i32:0;0;-1;0} \
0F114424 0C \
C74424 08 4C010000 \
890424 \
89F1 \
E8 [RxBE1B0] \
8D47 34 \
8D4C24 04 \
83EC 20 \
894C24 1C \
0F2805 {x.i32:0;0;-1;0} \
0F114424 0C \
C74424 08 4B010000 \
890424 \
89F1 \
E8 [RxBE1B0] \
8D47 30 \
89E1 \
83EC 20 \
894C24 1C \
0F2805 {x.i32:0;0;-1;0} \
0F114424 0C \
C74424 08 4A010000 \
890424 \
89F1 \
E8 [RxBE1B0] \
8B0424 \
8B35 <Rx1AE3AC> \
8B4C24 1C \
898E 20070000 \
E9 51FCFFFF \
"
		},
		"restore_lifebars_cleanup": {
			"access": "re",
			"code": "\
53 \
57 \
56 \
89CE \
E8 [Rx101B50] \
A1 <Rx1AE460> \
6B4E 64 54 \
83BC08 68030000 00 \
75 04 \
5E \
5F \
5B \
C3 \
8DBC08 1C030000 \
8B35 <Rx1AE3AC> \
BB 07000000 \
89F1 \
FF749F 2C \
E8 [RxBE0F0] \
89F1 \
50 \
E8 [RxBDF50] \
4B \
75 EA \
0F57C0 \
0F1147 30 \
0F1147 40 \
895F 50 \
5E \
5F \
5B \
C3 \
"
		}
	},
	"binhacks": {
		"ZECL_low_ins_jump_table_replace": {
			"addr": "Rx14E980"
		},
		"ZECL_low_ins_case_table_replace": {
			"addr": "Rx14E979"
		},
		"ZECL_low_ins_max_replace": {
			"addr": "Rx14E96F",
		},
		"ZECL_high_ins_jump_table_replace": {
			"addr": "RxEDC20"
		},
		"ZECL_high_ins_case_table_replace": {
			"addr": "RxEDC19"
		},
		"ZECL_high_ins_max_replace": {
			"addr": "RxEDC0C",
		},
		"ZECL_int_var_jump_table_replace": {
			"addr": "RxEC74B",
		},
		"ZECL_int_var_max_replace": {
			"addr": "RxEC741",
		},
		"ZECL_int_ptr_jump_table_replace": {
			"addr": "RxEC4E1"
		},
		"ZECL_int_ptr_case_table_replace": {
			"addr": "RxEC4DA"
		},
		"ZECL_int_ptr_max_replace": {
			"addr": "RxEC4D0",
		},
		"ZECL_float_var_jump_table_replace": {
			"addr": "RxEB77B"
		},
		"ZECL_float_var_max_replace": {
			"addr": "RxEB771",
		},
		"ZECL_float_ptr_jump_table_replace": {
			"addr": "RxEB4C1"
		},
		"ZECL_float_ptr_case_table_replace": {
			"addr": "RxEB4BA"
		},
		"ZECL_float_ptr_max_replace": {
			"addr": "RxEB4B0",
		},
		"item_collection_jump_table_replacement": {
			"addr": "Rx10EA02",
			"code": "\
48 \
3D 12000000 \
0F87 8F000000 \
0FB680 <codecave:item_collection_case_table> \
FF2485 <codecave:item_collection_jump_table> \
"
		},
		"restore_lifebars": {
			"addr": "Rx101753",
			"code": "[codecave:restore_lifebars]"
		},
		"restore_lifebars_cleanup": {
			"addr": [ "Rx1018D3", "Rx101D18" ],
			"code": "[codecave:restore_lifebars_cleanup]"
		}
	}
}