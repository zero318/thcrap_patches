{
	"options": {
		// Low ECL
		"zecl_lins_jump_addr": { "val": "Rx16AFBC" },
		"zecl_lins_jump_base_count": { "val": 71 },
		"zecl_lins_jump_new_count": { "val": 15 },
		"zecl_lins_case_addr": { "val": "Rx16B0D8" },
		"zecl_lins_case_base_count": { "val": 98 },
		"zecl_lins_case_new_count": { "val": 14 },
		// High ECL
		"zecl_hins_jump_addr": { "val": "Rx10524C" },
		"zecl_hins_jump_base_count": { "val": 197 },
		"zecl_hins_jump_new_count": { "val": 15 },
		"zecl_hins_case_addr": { "val": "Rx105560" },
		"zecl_hins_case_base_count": { "val": 743 },
		"zecl_hins_case_new_count": { "val": 15 },
		// Int Vars
		"zecl_ivar_jump_addr": { "val": "RxFE170" },
		"zecl_ivar_jump_base_count": { "val": 119 },
		"zecl_ivar_jump_new_count": { "val": 19 },
		// Int Ptrs
		"zecl_iptr_jump_addr": { "val": "RxFD66C" },
		"zecl_iptr_jump_base_count": { "val": 20 },
		"zecl_iptr_jump_new_count": { "val": 2 },
		"zecl_iptr_case_addr": { "val": "RxFD6BC" },
		"zecl_iptr_case_base_count": { "val": 94 },
		"zecl_iptr_case_new_count": { "val": 14 },
		// Float Vars
		"zecl_fvar_jump_addr": { "val": "RxFD2F0" },
		"zecl_fvar_jump_base_count": { "val": 119 },
		"zecl_fvar_jump_new_count": { "val": 17 },
		// Float Ptrs
		"zecl_fptr_jump_addr": { "val": "RxFC46C" },
		"zecl_fptr_jump_base_count": { "val": 25 },
		"zecl_fptr_jump_new_count": { "val": 0 },
		"zecl_fptr_case_addr": { "val": "RxFC4D0" },
		"zecl_fptr_case_base_count": { "val": 81 },
		"zecl_fptr_case_new_count": { "val": 0 },
		
		"ecl_lins_break_addr": {
			"type": "p",
			"val": "Rx16AF39"
		},
		//"ecl_lins_continue_addr": {
			//"type": "u32",
			//"val": 
		//},
		"ecl_lins_get_int_arg_addr": {
			"type": "p",
			"val": "Rx16B650"
		},
		"ecl_lins_get_iptr_arg_addr": {
			"type": "p",
			"val": "Rx16B700"
		},
		"ecl_lins_get_float_arg_addr": {
			"type": "p",
			"val": "Rx16B770"
		},
		"ecl_lins_get_fptr_arg_addr": {
			"type": "p",
			"val": "Rx16B870"
		},
		"ecl_hins_break_addr": {
			"type": "p",
			"val": "Rx105234"
		},
		//"ecl_hins_continue_addr": {
			//"type": "u32",
			//"val": 
		//},
		
		"game_sides_addr": {
			"type": "p",
			"val": "Rx1D1A60"
		},
		"card_data_table_addr": {
			"type": "p",
			"val": "Rx1C5640"
		},
		"card_count": {
			"type": "u32",
			"val": 39 // excluding NULL/BACK
		}
	},
	"codecaves": {
		"ZECL_high_ins_case_table": {
			"code": "\
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
D3 \
"
		},
		"ZECL19_debug_log": {
			"enable": "<patch:EclStrFormat>",
			"access": "re",
			"code": "\
89F9 \
8B5424 0C \
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
8B4C24 0C \
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
895C24 08 \
B8 <option:card_data_table_addr> \
<nop:7> \
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
8B5C24 08 \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_opposite_count_cards": {
			"access": "re",
			"code": "\
895C24 08 \
B8 <option:card_data_table_addr> \
<nop:7> \
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
8B5C24 08 \
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
E8 [RxB870] \
5F \
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
E8 [RxB870] \
8945 08 \
DB45 08 \
5F \
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
E8 [RxEFC0] \
5F \
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
E8 [RxEFC0] \
8945 08 \
DB45 08 \
5F \
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
5F \
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
5F \
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
5F \
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
5F \
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
E8 [Rx12C90] \
5F \
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
E8 [Rx12C90] \
8945 08 \
DB45 08 \
5F \
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
E8 [Rx12C90] \
5F \
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
E8 [Rx12C90] \
8945 08 \
DB45 08 \
5F \
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
E8 [RxB5D0] \
5F \
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
E8 [RxB5D0] \
8945 08 \
DB45 08 \
5F \
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
E8 [RxB5D0] \
5F \
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
E8 [RxB5D0] \
8945 08 \
DB45 08 \
5F \
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
5F \
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
5F \
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
5F \
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
5F \
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
5F \
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
5F \
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
5F \
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
5F \
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
5F \
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
5F \
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
8B41 5C \
5F \
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
DB41 5C \
5F \
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
8B41 5C \
5F \
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
DB41 5C \
5F \
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
8B41 6C \
5F \
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
DB41 6C \
5F \
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
8B41 6C \
5F \
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
DB41 6C \
5F \
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
5F \
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
5F \
5E \
C9 \
C2 0400 \
"
		},
		"globals_side_add_lives": {
			"access": "re",
			"code": "\
56 \
8B51 54 \
8B71 58 \
39FA \
7D 12 \
01C2 \
39F2 \
7C 09 \
C741 5C 00000000 \
89F2 \
8951 54 \
5E \
C3 \
"
		},
		"globals_side_add_bombs": {
			"access": "re",
			"code": "\
56 \
8B51 68 \
8B71 74 \
39F2 \
73 12 \
01C2 \
39F2 \
72 09 \
C741 6C 00000000 \
89F2 \
8951 68 \
5E \
C3 \
"
		},
		"globals_side_sub_lives": {
			"access": "re",
			"code": "\
8B51 54 \
29D2 \
B8 FFFFFFFF \
0F48D0 \
8951 54 \
C3 \
"
		},
		"globals_side_sub_bombs": {
			"access": "re",
			"code": "\
8B51 68 \
29C2 \
B8 00000000 \
0F42D0 \
8951 68 \
C3 \
"
		},
		"globals_side_add_life_fragments": {
			"access": "re",
			"code": "\
53 \
57 \
56 \
8B59 54 \
8B79 58 \
39FB \
7D 25 \
0341 5C \
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
8951 54 \
8941 5C \
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
8B59 68 \
8B79 74 \
39FB \
73 25 \
0341 6C \
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
8951 68 \
8971 6C \
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
8B51 54 \
8B71 5C \
8D1452 \
29C6 \
01D6 \
78 16 \
B8 ABAAAAAA \
F7E6 \
D1EA \
8D0452 \
29C6 \
8951 54 \
8971 5C \
5E \
C3 \
C741 54 FFFFFFFF \
C741 5C 00000000 \
5E \
C3 \
"
		},
		"globals_side_sub_bomb_fragments": {
			"access": "re",
			"code": "\
56 \
8B51 68 \
8D3452 \
0371 6C \
29C6 \
72 16 \
B8 ABAAAAAA \
F7E6 \
D1EA \
8D0452 \
29C6 \
8971 6C \
8951 68 \
5E \
C3 \
0F57C0 \
0F1341 68 \
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
E9 [Rx1215B9] \
"
		},
		"collect_life_item": {
			"access": "re",
			"code": "\
8B49 2C \
B8 01000000 \
E8 [codecave:globals_side_add_lives] \
E9 [Rx1215B9] \
"
		},
		"collect_bomb_fragment_item": {
			"access": "re",
			"code": "\
8B49 2C \
B8 01000000 \
E8 [codecave:globals_side_add_bomb_fragments] \
E9 [Rx1215B9] \
A1 <Rx1D1A50> \
85C0 \
0F84 [Rx1215B9] \
6B8F EC0C0000 6C \
8D4C08 10 \
E8 [Rx115200] \
E9 [Rx1215B9] \
"
		},
		"collect_bomb_item": {
			"access": "re",
			"code": "\
8B49 2C \
B8 01000000 \
E8 [codecave:globals_side_add_bomb_fragments] \
E9 [Rx1215B9] \
A1 <Rx1D1A50> \
85C0 \
0F84 [Rx1215B9] \
6B8F EC0C0000 6C \
8D4C08 10 \
E8 [Rx115200] \
E9 [Rx1215B9] \
"
		},
		"item_collection_jump_table": {
			"access": "r",
			"code": "\
<Rx1215B9> \
<Rx1215B9> \
<Rx1215B9> \
<codecave:collect_life_fragment_item> \
<codecave:collect_life_item> \
<codecave:collect_bomb_fragment_item> \
<codecave:collect_bomb_item> \
<Rx1215B9> \
<Rx121538> \
<Rx1215B9> \
<Rx1215B9> \
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
E8 [Rx112FD0] \
8B6E 64 \
6BF5 3C \
8B8E (<option:game_sides_addr> + 0x8) \
85C9 \
74 3C \
F681 94000000 01 \
75 33 \
FF71 54 \
E8 [RxFB70] \
8B0D <Rx1D1A50> \
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
8B35 <Rx1D19BC> \
89F1 \
FF77 48 \
E8 [RxCB8B0] \
894424 18 \
89F1 \
FF77 44 \
E8 [RxCB8B0] \
894424 14 \
89F1 \
FF77 40 \
E8 [RxCB8B0] \
894424 10 \
89F1 \
FF77 3C \
E8 [RxCB8B0] \
894424 0C \
89F1 \
FF77 38 \
E8 [RxCB8B0] \
894424 08 \
89F1 \
FF77 34 \
E8 [RxCB8B0] \
894424 04 \
89F1 \
FF77 30 \
E8 [RxCB8B0] \
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
F30F101D {u32:0x3CCCCCCD} \
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
E8 [RxCB420] \
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
FF148D <Rx196420> \
83C4 08 \
EB B2 \
CCCC \
0F2E07 \
0F83 4DFFFFFF \
F30F100D {u32:0xC0C90FDB} \
F30F59C1 \
F30F1015 <Rx1AA4D4> \
F30F58C2 \
F30F101D <Rx1AA2BC> \
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
E8 [th_sincosf_sse2] \
0F5905 {x.u32:0xC2E00000;0x42E00000;0;0} \
F20F104C24 20 \
0F58C8 \
0F138E 14060000 \
89F1 \
E8 [RxCB450] \
4B \
0F85 B7FEFFFF \
E9 D2FEFFFF \
CCCC \
BB 07000000 \
8B35 <Rx1D19BC> \
<nop:5> \
89F1 \
FF749F 2C \
E8 [RxCB8B0] \
89F1 \
50 \
E8 [RxCB710] \
4B \
75 EA \
0F57C0 \
0F1147 30 \
0F1147 40 \
895F 50 \
E9 11FDFFFF \
CCCCCCCCCCCCCC \
C747 4C 01000000 \
8B35 <Rx1D19BC> \
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
E8 [RxCB960] \
8D47 44 \
8D4C24 14 \
83EC 20 \
894C24 1C \
0F2805 {x.i32:0;0;-1;0} \
0F114424 0C \
C74424 08 4D010000 \
890424 \
89F1 \
E8 [RxCB960] \
8D47 40 \
8D4C24 10 \
83EC 20 \
894C24 1C \
0F2805 {x.i32:0;0;-1;0} \
0F114424 0C \
C74424 08 4D010000 \
890424 \
89F1 \
E8 [RxCB960] \
8D47 3C \
8D4C24 0C \
83EC 20 \
894C24 1C \
0F2805 {x.i32:0;0;-1;0} \
0F114424 0C \
C74424 08 4D010000 \
890424 \
89F1 \
E8 [RxCB960] \
8D47 38 \
8D4C24 08 \
83EC 20 \
894C24 1C \
0F2805 {x.i32:0;0;-1;0} \
0F114424 0C \
C74424 08 4C010000 \
890424 \
89F1 \
E8 [RxCB960] \
8D47 34 \
8D4C24 04 \
83EC 20 \
894C24 1C \
0F2805 {x.i32:0;0;-1;0} \
0F114424 0C \
C74424 08 4B010000 \
890424 \
89F1 \
E8 [RxCB960] \
8D47 30 \
89E1 \
83EC 20 \
894C24 1C \
0F2805 {x.i32:0;0;-1;0} \
0F114424 0C \
C74424 08 4A010000 \
890424 \
89F1 \
E8 [RxCB960] \
8B0424 \
8B35 <Rx1D19BC> \
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
E8 [Rx113E10] \
A1 <Rx1D1A50> \
6B4E 64 54 \
83BC08 68030000 00 \
75 04 \
5E \
5F \
5B \
C3 \
8DBC08 1C030000 \
8B35 <Rx1D19BC> \
BB 07000000 \
89F1 \
FF749F 2C \
E8 [RxCB8B0] \
89F1 \
50 \
E8 [RxCB710] \
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
			"addr": "Rx16885B"
		},
		"ZECL_low_ins_case_table_replace": {
			"addr": "Rx168854"
		},
		"ZECL_low_ins_max_replace": {
			"addr": "Rx16884A",
		},
		"ZECL_high_ins_jump_table_replace": {
			"addr": "RxFED1F"
		},
		"ZECL_high_ins_case_table_replace": {
			"addr": "RxFED18"
		},
		"ZECL_high_ins_max_replace": {
			"addr": "RxFED0B",
		},
		"ZECL_int_var_jump_table_replace": {
			"addr": "RxFD741",
		},
		"ZECL_int_var_max_replace": {
			"addr": "RxFD737",
		},
		"ZECL_int_ptr_jump_table_replace": {
			"addr": "RxFD4F1"
		},
		"ZECL_int_ptr_case_table_replace": {
			"addr": "RxFD4EA"
		},
		"ZECL_int_ptr_max_replace": {
			"addr": "RxFD4E0",
		},
		"ZECL_float_var_jump_table_replace": {
			"addr": "RxFC551"
		},
		"ZECL_float_var_max_replace": {
			"addr": "RxFC547",
		},
		"ZECL_float_ptr_jump_table_replace": {
			"addr": "RxFC2B1"
		},
		"ZECL_float_ptr_case_table_replace": {
			"addr": "RxFC2AA"
		},
		"ZECL_float_ptr_max_replace": {
			"addr": "RxFC2A0",
		},
		"item_collection_jump_table_replacement": {
			"addr": "Rx12151E",
			"code": "\
48 \
3D 12000000 \
0F87 8F000000 \
0FB680 <codecave:item_collection_case_table> \
FF2485 <codecave:item_collection_jump_table> \
"
		},
		"restore_lifebars": {
			"addr": [ "Rx112B13", "Rx113953" ],
			"code": "[codecave:restore_lifebars]"
		},
		"restore_lifebars_cleanup": {
			"addr": [ "Rx113B83", "Rx114033" ],
			"code": "[codecave:restore_lifebars_cleanup]"
		}
	}
}