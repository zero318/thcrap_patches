{
	"codecaves": {
		"ZECL_low_ins_jump_table": {
			"code": "\
(<patch:EclStrFormat>?<codecave:ZECL19_debug_log>:0) \
<codecave:ZECL19_debug_breakpoint> \
<codecave:ZECL19_thcrap_expr> \
<codecave:ZECL19_math_shl> \
<codecave:ZECL19_math_shr> \
<codecave:ZECL19_math_sar> \
<codecave:ZECL19_math_rol> \
<codecave:ZECL19_math_ror> \
<codecave:ZECL19_math_udiv> \
<codecave:ZECL19_math_umod> \
<codecave:ZECL19_lookup_set_int> \
<codecave:ZECL19_lookup_set_float> \
(<cpuid:popcnt>?<codecave:ZECL19_math_popcount_fast>:<codecave:ZECL19_math_popcount>) \
<codecave:ZECL19_lookup_int_ex> \
<codecave:ZECL19_lookup_float_ex> \
"
		},
		"ZECL_low_ins_case_table": {
			"code": "\
48 \
49 \
4A \
4B \
4C \
4D \
4E \
4F \
50 \
51 \
52 \
53 \
54 \
55 \
"
		},
		"ZECL_high_ins_jump_table": {
			"code": "\
<codecave:ZECL19_count_cards> \
<codecave:ZECL19_opposite_count_cards> \
<codecave:ZECL19_player_add_lives> \
<codecave:ZECL19_opposite_player_add_lives> \
<codecave:ZECL19_player_add_bombs> \
<codecave:ZECL19_opposite_player_add_bombs> \
<codecave:ZECL19_player_add_life_fragments> \
<codecave:ZECL19_opposite_player_add_life_fragments> \
<codecave:ZECL19_player_add_bomb_fragments> \
<codecave:ZECL19_opposite_player_add_bomb_fragments> \
<codecave:ZECL19_drop_game_side> \
<codecave:ZECL19_set_int_from_enemy> \
<codecave:ZECL19_set_float_from_enemy> \
<codecave:ZECL19_set_int_for_enemy> \
<codecave:ZECL19_set_float_for_enemy> \
"
		},
		"ZECL_int_var_jump_table": {
			"code": "\
<codecave:ZECL19_opposite_player_shot_ivar> \
<codecave:ZECL19_opposite_player_power_ivar> \
<codecave:ZECL19_opposite_player_deaths_ivar> \
<codecave:ZECL19_opposite_player_bombs_used_ivar> \
<codecave:ZECL19_player_lives_ivar> \
<codecave:ZECL19_opposite_player_lives_ivar> \
<codecave:ZECL19_player_bombs_ivar> \
<codecave:ZECL19_opposite_player_bombs_ivar> \
<codecave:ZECL19_player_state_ivar> \
<codecave:ZECL19_opposite_player_state_ivar> \
<codecave:ZECL19_player_barrier_state_ivar> \
<codecave:ZECL19_opposite_player_barrier_state_ivar> \
<codecave:ZECL19_player_flags_ivar> \
<codecave:ZECL19_opposite_player_flags_ivar> \
<codecave:ZECL19_player_life_fragments_ivar> \
<codecave:ZECL19_opposite_player_life_fragments_ivar> \
<codecave:ZECL19_player_bomb_fragments_ivar> \
<codecave:ZECL19_opposite_player_bomb_fragments_ivar> \
<codecave:ZECL19_opposite_game_side_ivar> \
"
		},
		"ZECL_int_ptr_jump_table": {
			"code": "\
<codecave:ZECL19_opposite_player_deaths_iptr> \
<codecave:ZECL19_opposite_player_bombs_used_iptr> \
"
		},
		"ZECL_int_ptr_case_table": {
			"code": "\
13131313131313131313 \
13 \
13 \
14 \
15 \
"
		},
		"ZECL_float_var_jump_table": {
			"code": "\
<codecave:ZECL19_opposite_player_shot_fvar> \
<codecave:ZECL19_opposite_player_power_fvar> \
<codecave:ZECL19_opposite_player_deaths_fvar> \
<codecave:ZECL19_opposite_player_bombs_used_fvar> \
<codecave:ZECL19_player_lives_fvar> \
<codecave:ZECL19_opposite_player_lives_fvar> \
<codecave:ZECL19_player_bombs_fvar> \
<codecave:ZECL19_opposite_player_bombs_fvar> \
<codecave:ZECL19_player_state_fvar> \
<codecave:ZECL19_opposite_player_state_fvar> \
<codecave:ZECL19_player_barrier_state_fvar> \
<codecave:ZECL19_opposite_player_barrier_state_fvar> \
<codecave:ZECL19_player_life_fragments_fvar> \
<codecave:ZECL19_opposite_player_life_fragments_fvar> \
<codecave:ZECL19_player_bomb_fragments_fvar> \
<codecave:ZECL19_opposite_player_bomb_fragments_fvar> \
<codecave:ZECL19_opposite_game_side_fvar> \
"
		},
		"ZECL19_ecl_lins_get_iptr_arg": {
			"access": "re",
			"code": "\
53 \
57 \
56 \
8B5424 10 \
8B79 04 \
8B71 08 \
8B81 18100000 \
8B98 18120000 \
8B9B 0C020000 \
8B7CFB 04 \
0FB75C37 18 \
0FA3D3 \
73 1E \
8D7437 10 \
8B5496 10 \
85D2 \
78 1A \
01CA \
8B81 10100000 \
8D4410 0C \
5E \
5F \
5B \
C2 0400 \
31C0 \
5E \
5F \
5B \
C2 0400 \
895424 10 \
5E \
5F \
5B \
8B10 \
89C1 \
FF62 08 \
"
		},
		"ZECL19_debug_breakpoint": {
			"access": "re",
			"code": "\
CC \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_math_shl": {
			"access": "re",
			"code": "\
8B97 0C100000 \
F30F2C4C3A 10 \
807C3A 0C 66 \
0F454C3A 10 \
F30F2C443A 08 \
807C3A 04 66 \
0F45443A 08 \
D3E0 \
89443A 08 \
C6443A 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_math_shr": {
			"access": "re",
			"code": "\
8B97 0C100000 \
F30F2C4C3A 10 \
807C3A 0C 66 \
0F454C3A 10 \
F30F2C443A 08 \
807C3A 04 66 \
0F45443A 08 \
D3E8 \
89443A 08 \
C6443A 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_math_sar": {
			"access": "re",
			"code": "\
8B97 0C100000 \
F30F2C4C3A 10 \
807C3A 0C 66 \
0F454C3A 10 \
F30F2C443A 08 \
807C3A 04 66 \
0F45443A 08 \
D3F8 \
89443A 08 \
C6443A 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_math_rol": {
			"access": "re",
			"code": "\
8B97 0C100000 \
F30F2C4C3A 10 \
807C3A 0C 66 \
0F454C3A 10 \
F30F2C443A 08 \
807C3A 04 66 \
0F45443A 08 \
D3C0 \
89443A 08 \
C6443A 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_math_ror": {
			"access": "re",
			"code": "\
8B97 0C100000 \
F30F2C4C3A 10 \
807C3A 0C 66 \
0F454C3A 10 \
F30F2C443A 08 \
807C3A 04 66 \
0F45443A 08 \
D3C8 \
89443A 08 \
C6443A 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_math_udiv": {
			"access": "re",
			"code": "\
8BB7 0C100000 \
F30F2C4C3E 10 \
807C3E 0C 66 \
0F454C3E 10 \
F30F2C443E 08 \
807C3E 04 66 \
0F45443E 08 \
31D2 \
F7F1 \
89443E 08 \
C6443E 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_math_umod": {
			"access": "re",
			"code": "\
8BB7 0C100000 \
F30F2C4C3E 10 \
807C3E 0C 66 \
0F454C3E 10 \
F30F2C443E 08 \
807C3E 04 66 \
0F45443E 08 \
31D2 \
F7F1 \
89543E 08 \
C6443E 04 69 \
8387 0C100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_lookup_set_int": {
			"access": "re",
			"code": "\
6A 01 \
89F9 \
E8 [<option:ecl_lins_get_int_arg_addr>] \
83C0 02 \
50 \
89F9 \
E8 [codecave:ZECL19_ecl_lins_get_iptr_arg] \
89C6 \
6A 00 \
89F9 \
E8 [<option:ecl_lins_get_int_arg_addr>] \
8906 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_lookup_set_float": {
			"access": "re",
			"code": "\
6A 01 \
89F9 \
E8 [<option:ecl_lins_get_int_arg_addr>] \
83C0 02 \
50 \
89F9 \
E8 [<option:ecl_lins_get_fptr_arg_addr>] \
89C6 \
6A 00 \
89F9 \
E8 [<option:ecl_lins_get_float_arg_addr>] \
F30F1106 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_math_popcount": {
			"ignore": "<cpuid:popcnt>",
			"access": "re",
			"code": "\
6A 01 \
89F9 \
E8 [<option:ecl_lins_get_int_arg_addr>] \
89C6 \
D1E8 \
25 55555555 \
29C6 \
89F0 \
25 33333333 \
C1EE 02 \
81E6 33333333 \
01C6 \
89F0 \
C1E8 04 \
01F0 \
25 0F0F0F0F \
69F0 01010101 \
C1EE 18 \
6A 00 \
89F9 \
E8 [<option:ecl_lins_get_iptr_arg_addr>] \
8930 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_math_popcount_fast": {
			"enable": "<cpuid:popcnt>",
			"access": "re",
			"code": "\
6A 01 \
89F9 \
E8 [<option:ecl_lins_get_int_arg_addr>] \
F30FB8F0 \
6A 00 \
89F9 \
E8 [<option:ecl_lins_get_iptr_arg_addr>] \
8930 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_lookup_int_ex": {
			"access": "re",
			"code": "\
6A 01 \
89F9 \
E8 [<option:ecl_lins_get_int_arg_addr>] \
83C0 02 \
50 \
89F9 \
E8 [<option:ecl_lins_get_int_arg_addr>] \
89C6 \
6A 00 \
89F9 \
E8 [<option:ecl_lins_get_iptr_arg_addr>] \
8930 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_lookup_float_ex": {
			"access": "re",
			"code": "\
6A 01 \
89F9 \
E8 [<option:ecl_lins_get_int_arg_addr>] \
8D70 02 \
6A 00 \
89F9 \
E8 [<option:ecl_lins_get_fptr_arg_addr>] \
56 \
89C6 \
89F9 \
E8 [<option:ecl_lins_get_float_arg_addr>] \
F30F1106 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL19_player_add_lives": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 00 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
6B97 38560000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
85C0 \
78 0A \
E8 [codecave:globals_side_add_lives] \
E9 [<option:ecl_hins_break_addr>] \
F7D8 \
E8 [codecave:globals_side_sub_lives] \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_opposite_player_add_lives": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 00 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
6B97 38560000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
85C0 \
78 0A \
E8 [codecave:globals_side_add_lives] \
E9 [<option:ecl_hins_break_addr>] \
F7D8 \
E8 [codecave:globals_side_sub_lives] \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_player_add_bombs": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 00 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
6B97 38560000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
85C0 \
78 0A \
E8 [codecave:globals_side_add_bombs] \
E9 [<option:ecl_hins_break_addr>] \
F7D8 \
E8 [codecave:globals_side_sub_bombs] \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_opposite_player_add_bombs": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 00 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
6B97 38560000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
85C0 \
78 0A \
E8 [codecave:globals_side_add_bombs] \
E9 [<option:ecl_hins_break_addr>] \
F7D8 \
E8 [codecave:globals_side_sub_bombs] \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_player_add_life_fragments": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 00 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
6B97 38560000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
85C0 \
78 0A \
E8 [codecave:globals_side_add_life_fragments] \
E9 [<option:ecl_hins_break_addr>] \
F7D8 \
E8 [codecave:globals_side_sub_life_fragments] \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_opposite_player_add_life_fragments": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 00 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
6B97 38560000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
85C0 \
78 0A \
E8 [codecave:globals_side_add_life_fragments] \
E9 [<option:ecl_hins_break_addr>] \
F7D8 \
E8 [codecave:globals_side_sub_life_fragments] \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_player_add_bomb_fragments": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 00 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
6B97 38560000 3C \
8B8A (<option:game_sides_addr> + 0x2C) \
85C0 \
78 0A \
E8 [codecave:globals_side_add_bomb_fragments] \
E9 [<option:ecl_hins_break_addr>] \
F7D8 \
E8 [codecave:globals_side_sub_bomb_fragments] \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_opposite_player_add_bomb_fragments": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 00 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
6B97 38560000 C4 \
8B8A (<option:game_sides_addr> + 0x68) \
85C0 \
78 0A \
E8 [codecave:globals_side_add_bomb_fragments] \
E9 [<option:ecl_hins_break_addr>] \
F7D8 \
E8 [codecave:globals_side_sub_bomb_fragments] \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"ZECL19_drop_game_side": {
			"access": "re",
			"code": "\
8B87 C8550000 \
6A 00 \
8B48 0C \
E8 [<option:ecl_lins_get_int_arg_addr>] \
8986 24500000 \
E9 [<option:ecl_hins_break_addr>] \
"
		},
		"item_collection_case_table": {
			"access": "r",
			"code": "00010203040506070808080808080A09090909"
		}
	},
	"binhacks": {
		"ZECL_low_ins_max_replace": {
			"enable": "<option:zecl_lins_case_new_count>",
			"code": "(u8:<option:zecl_lins_case_base_count> + <option:zecl_lins_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_lins_case_base_count> - 1)",
		},
		"ZECL_high_ins_max_replace": {
			"enable": "<option:zecl_hins_case_new_count>",
			"code": "(<option:zecl_hins_case_base_count> + <option:zecl_hins_case_new_count> - 1)",
			"expect": "(<option:zecl_hins_case_base_count> - 1)",
		},
		"ZECL_int_var_max_replace": {
			"enable": "<option:zecl_ivar_jump_new_count>",
			"code": "(u8:<option:zecl_ivar_jump_base_count> + <option:zecl_ivar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_ivar_jump_base_count> - 1)",
		},
		"ZECL_int_ptr_max_replace": {
			"enable": "<option:zecl_iptr_case_new_count>",
			"code": "(u8:<option:zecl_iptr_case_base_count> + <option:zecl_iptr_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_iptr_case_base_count> - 1)",
		},
		"ZECL_float_var_max_replace": {
			"enable": "<option:zecl_fvar_jump_new_count>",
			"code": "(u8:<option:zecl_fvar_jump_base_count> + <option:zecl_fvar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_fvar_jump_base_count> - 1)",
		},
		"ZECL_float_ptr_max_replace": {
			"enable": "<option:zecl_fptr_case_new_count>",
			"code": "(u8:<option:zecl_fptr_case_base_count> + <option:zecl_fptr_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_fptr_case_base_count> - 1)",
		},
		"ZECL_debug_log_enable": {
			"code": "47"
		},
	}
}