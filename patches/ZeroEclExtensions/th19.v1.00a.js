{
	"options": {
		// Low ECL
		"zecl_lins_jump_addr": { "val": "Rx150E34" },
		"zecl_lins_jump_base_count": { "val": 71 },
		"zecl_lins_jump_new_count": { "val": 9 },
		"zecl_lins_case_addr": { "val": "Rx150F50" },
		"zecl_lins_case_base_count": { "val": 98 },
		"zecl_lins_case_new_count": { "val": 9 },
		// High ECL
		"zecl_hins_jump_addr": { "val": "RxF39E8" },
		"zecl_hins_jump_base_count": { "val": 196 },
		"zecl_hins_jump_new_count": { "val": 0 },
		"zecl_hins_case_addr": { "val": "RxF3CF8" },
		"zecl_hins_case_base_count": { "val": 744 },
		"zecl_hins_case_new_count": { "val": 0 },
		// Int Vars
		"zecl_ivar_jump_addr": { "val": "RxED100" },
		"zecl_ivar_jump_base_count": { "val": 119 },
		"zecl_ivar_jump_new_count": { "val": 0 },
		// Int Ptrs
		"zecl_iptr_jump_addr": { "val": "RxEC67C" },
		"zecl_iptr_jump_base_count": { "val": 20 },
		"zecl_iptr_jump_new_count": { "val": 0 },
		"zecl_iptr_case_addr": { "val": "RxEC6CC" },
		"zecl_iptr_case_base_count": { "val": 94 },
		"zecl_iptr_case_new_count": { "val": 0 },
		// Float Vars
		"zecl_fvar_jump_addr": { "val": "RxEC2E0" },
		"zecl_fvar_jump_base_count": { "val": 119 },
		"zecl_fvar_jump_new_count": { "val": 0 },
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
		"ecl_lins_get_iptr_arg_addr": {
			"type": "p",
			"val": "Rx151500"
		},
		"ecl_hins_break_addr": {
			"type": "p",
			"val": "RxF39C6"
		},
		//"ecl_hins_continue_addr": {
			//"type": "u32",
			//"val": 
		//},
	},
	"codecaves": {
		"ZECL_low_ins_jump_table": {
			"code": "\
<codecave:ZECL19_debug_breakpoint> \
<codecave:ZECL19_thcrap_expr> \
<codecave:ZECL19_math_shl> \
<codecave:ZECL19_math_shr> \
<codecave:ZECL19_math_sar> \
<codecave:ZECL19_math_rol> \
<codecave:ZECL19_math_ror> \
<codecave:ZECL19_math_udiv> \
<codecave:ZECL19_math_umod> \
"
		},
		"ZECL_low_ins_case_table": {
			"code": "\
47 \
48 \
49 \
4A \
4B \
4C \
4D \
4E \
4F \
"
		},
		"ZECL_high_ins_jump_table": {
			"code": ""
		},
		"ZECL_high_ins_case_table": {
			"code": ""
		},
		"ZECL19_debug_breakpoint": {
			"access": "re",
			"code": "\
CC \
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
		"ZECL19_math_urem": {
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
	},
	"binhacks": {
		"ZECL_low_ins_jump_table_replace": {
			"addr": "Rx14E980"
		},
		"ZECL_low_ins_case_table_replace": {
			"addr": "Rx14E979"
		},
		"ZECL_low_ins_max_replace": {
			"enable": "<option:zecl_lins_case_new_count>",
			"addr": "Rx14E96F",
			"code": "(u8:<option:zecl_lins_case_base_count> + <option:zecl_lins_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_lins_case_base_count> - 1)",
		},
		"ZECL_high_ins_jump_table_replace": {
			"addr": "RxEDC20"
		},
		"ZECL_high_ins_case_table_replace": {
			"addr": "RxEDC19"
		},
		"ZECL_high_ins_max_replace": {
			"enable": "<option:zecl_hins_case_new_count>",
			"addr": "RxEDC0C",
			"code": "(<option:zecl_hins_case_base_count> + <option:zecl_hins_case_new_count> - 1)",
			"expect": "(<option:zecl_hins_case_base_count> - 1)",
		},
		"ZECL_int_var_jump_table_replace": {
			"addr": "RxEC74B",
		},
		"ZECL_int_var_max_replace": {
			"enable": "<option:zecl_ivar_jump_new_count>",
			"addr": "RxEC741",
			"code": "(u8:<option:zecl_ivar_jump_base_count> + <option:zecl_ivar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_ivar_jump_base_count> - 1)",
		},
		"ZECL_int_ptr_jump_table_replace": {
			"addr": "RxEC4E1"
		},
		"ZECL_int_ptr_case_table_replace": {
			"addr": "RxEC4DA"
		},
		"ZECL_int_ptr_max_replace": {
			"enable": "<option:zecl_iptr_case_new_count>",
			"addr": "RxEC4D0",
			"code": "(u8:<option:zecl_iptr_case_base_count> + <option:zecl_iptr_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_iptr_case_base_count> - 1)",
		},
		"ZECL_float_var_jump_table_replace": {
			"addr": "RxEB77B"
		},
		"ZECL_float_var_max_replace": {
			"enable": "<option:zecl_fvar_jump_new_count>",
			"addr": "RxEB771",
			"code": "(u8:<option:zecl_fvar_jump_base_count> + <option:zecl_fvar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_fvar_jump_base_count> - 1)",
		},
		"ZECL_float_ptr_jump_table_replace": {
			"addr": "RxEB4C1"
		},
		"ZECL_float_ptr_case_table_replace": {
			"addr": "RxEB4BA"
		},
		"ZECL_float_ptr_max_replace": {
			"enable": "<option:zecl_fptr_case_new_count>",
			"addr": "RxEB4B0",
			"code": "(u8:<option:zecl_fptr_case_base_count> + <option:zecl_fptr_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_fptr_case_base_count> - 1)",
		},
	}
}