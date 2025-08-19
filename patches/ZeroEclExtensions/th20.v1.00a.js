{
	"options": {
		// Low ECL
		"zecl_lins_jump_addr": { "val": "Rx13E128" },
		"zecl_lins_jump_base_count": { "val": 98 },
		"zecl_lins_jump_new_count": { "val": 11 },
		// High ECL
		"zecl_hins_jump_addr": { "val": "Rx96400" },
		"zecl_hins_jump_base_count": { "val": 174 },
		"zecl_hins_jump_new_count": { "val": 0 },
		"zecl_hins_case_addr": { "val": "Rx966B8" },
		"zecl_hins_case_base_count": { "val": 704 },
		"zecl_hins_case_new_count": { "val": 0 },
		// Int Vars
		"zecl_ivar_jump_addr": { "val": "Rx9BC00" },
		"zecl_ivar_jump_base_count": { "val": 127 },
		"zecl_ivar_jump_new_count": { "val": 0 },
		// Int Ptrs
		"zecl_iptr_jump_addr": { "val": "Rx98898" },
		"zecl_iptr_jump_base_count": { "val": 20 },
		"zecl_iptr_jump_new_count": { "val": 0 },
		"zecl_iptr_case_addr": { "val": "Rx988E8" },
		"zecl_iptr_case_base_count": { "val": 94 },
		"zecl_iptr_case_new_count": { "val": 0 },
		// Float Vars
		"zecl_fvar_jump_addr": { "val": "Rx9A9C0" },
		"zecl_fvar_jump_base_count": { "val": 127 },
		"zecl_fvar_jump_new_count": { "val": 0 },
		// Float Ptrs
		"zecl_fptr_jump_addr": { "val": "Rx98544" },
		"zecl_fptr_jump_base_count": { "val": 25 },
		"zecl_fptr_jump_new_count": { "val": 0 },
		"zecl_fptr_case_addr": { "val": "Rx985A8" },
		"zecl_fptr_case_base_count": { "val": 81 },
		"zecl_fptr_case_new_count": { "val": 0 },
		
		"ecl_lins_break_addr": {
			"type": "p",
			"val": "Rx13DF44"
		},
		//"ecl_lins_continue_addr": {
			//"type": "u32",
			//"val": 
		//},
		"ecl_lins_get_int_arg_addr": {
			"type": "p",
			"val": "Rx13ED50"
		},
		"ecl_lins_get_iptr_arg_addr": {
			"type": "p",
			"val": "Rx13E850"
		},
		"ecl_lins_get_float_arg_addr": {
			"type": "p",
			"val": "Rx13E970"
		},
		"ecl_lins_get_fptr_arg_addr": {
			"type": "p",
			"val": "Rx13E720"
		},
		"ecl_hins_break_addr": {
			"type": "p",
			"val": "Rx963DF"
		},
		//"ecl_hins_continue_addr": {
			//"type": "u32",
			//"val": 
		//},
		"ecl_stack_pop": {
			"type": "p",
			"val": "Rx13F0B0"
		},
		"ecl_stack_push": {
			"type": "p",
			"val": "Rx13F260"
		}
	},
	"codecaves": {
		"ZECL_low_ins_jump_table": {
			"code": "\
<codecave:ZECL20_debug_breakpoint> \
<codecave:ZECL20_thcrap_expr> \
<codecave:ZECL20_math_shl> \
<codecave:ZECL20_math_shr> \
<codecave:ZECL20_math_sar> \
<codecave:ZECL20_math_rol> \
<codecave:ZECL20_math_ror> \
<codecave:ZECL20_math_udiv> \
<codecave:ZECL20_math_umod> \
<codecave:ZECL20_lookup_set_int> \
<codecave:ZECL20_lookup_set_float> \
"
		},
		"ZECL20_debug_breakpoint": {
			"access": "re",
			"code": "\
CC \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL20_thcrap_expr": {
			"access": "re",
			"code": "\
6A 00 \
8B8D 34FEFFFF \
E8 [<option:ecl_lins_get_iptr_arg_addr>] \
8B8D 30FEFFFF \
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
		"ZECL20_math_shl": {
			"access": "re",
			"code": "\
56 \
57 \
8BB5 34FEFFFF \
83C6 0C \
8D7D F0 \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_pop>] \
83EF 04 \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_pop>] \
0FB64F 04 \
D327 \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_push>] \
5F \
5E \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL20_math_shr": {
			"access": "re",
			"code": "\
56 \
57 \
8BB5 34FEFFFF \
83C6 0C \
8D7D F0 \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_pop>] \
83EF 04 \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_pop>] \
0FB64F 04 \
D32F \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_push>] \
5F \
5E \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL20_math_sar": {
			"access": "re",
			"code": "\
56 \
57 \
8BB5 34FEFFFF \
83C6 0C \
8D7D F0 \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_pop>] \
83EF 04 \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_pop>] \
0FB64F 04 \
D33F \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_push>] \
5F \
5E \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL20_math_rol": {
			"access": "re",
			"code": "\
56 \
57 \
8BB5 34FEFFFF \
83C6 0C \
8D7D F0 \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_pop>] \
83EF 04 \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_pop>] \
0FB64F 04 \
D307 \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_push>] \
5F \
5E \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL20_math_ror": {
			"access": "re",
			"code": "\
56 \
57 \
8BB5 34FEFFFF \
83C6 0C \
8D7D F0 \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_pop>] \
83EF 04 \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_pop>] \
0FB64F 04 \
D30F \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_push>] \
5F \
5E \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL20_math_udiv": {
			"access": "re",
			"code": "\
56 \
57 \
8BB5 34FEFFFF \
83C6 0C \
8D7D F0 \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_pop>] \
83EF 04 \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_pop>] \
8B07 \
31D2 \
F777 04 \
8907 \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_push>] \
5F \
5E \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL20_math_umod": {
			"access": "re",
			"code": "\
56 \
57 \
8BB5 34FEFFFF \
83C6 0C \
8D7D F0 \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_pop>] \
83EF 04 \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_pop>] \
8B07 \
31D2 \
F777 04 \
8917 \
89F1 \
6A 69 \
57 \
6A 04 \
E8 [<option:ecl_stack_push>] \
5F \
5E \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL20_lookup_set_int": {
			"access": "re",
			"code": "\
56 \
57 \
8BB5 34FEFFFF \
6A 01 \
89F1 \
E8 [<option:ecl_lins_get_int_arg_addr>] \
83C0 02 \
50 \
89F1 \
E8 [<option:ecl_lins_get_iptr_arg_addr>] \
89C7 \
6A 00 \
89F1 \
E8 [<option:ecl_lins_get_int_arg_addr>] \
8907 \
5F \
5E \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL20_lookup_set_float": {
			"access": "re",
			"code": "\
56 \
57 \
8BB5 34FEFFFF \
6A 01 \
89F1 \
E8 [<option:ecl_lins_get_int_arg_addr>] \
83C0 02 \
50 \
89F1 \
E8 [<option:ecl_lins_get_iptr_arg_addr>] \
89C7 \
6A 00 \
89F1 \
E8 [<option:ecl_lins_get_int_arg_addr>] \
D91F \
5F \
5E \
E9 [<option:ecl_lins_break_addr>] \
"
		}
	},
	"binhacks": {
		"ZECL_low_ins_jump_table_replace": {
			"addr": "Rx13B68A"
		},
		"ZECL_low_ins_max_replace": {
			"enable": "<option:zecl_lins_case_new_count>",
			"addr": "Rx13B67A",
			"code": "(u8:<option:zecl_lins_case_base_count> + <option:zecl_lins_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_lins_case_base_count> - 1)"
		},
		"ZECL_high_ins_jump_table_replace": {
			"addr": "Rx8C0B0"
		},
		"ZECL_high_ins_case_table_replace": {
			"addr": "Rx8C0A9"
		},
		"ZECL_high_ins_max_replace": {
			"enable": "<option:zecl_hins_case_new_count>",
			"addr": "Rx8C096",
			"code": "(<option:zecl_hins_case_base_count> + <option:zecl_hins_case_new_count> - 1)",
			"expect": "(<option:zecl_hins_case_base_count> - 1)"
		},
		"ZECL_int_var_jump_table_replace": {
			"addr": "Rx9ABEE"
		},
		"ZECL_int_var_max_replace": {
			"enable": "<option:zecl_ivar_jump_new_count>",
			"addr": "Rx9ABE1",
			"code": "(u8:<option:zecl_ivar_jump_base_count> + <option:zecl_ivar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_ivar_jump_base_count> - 1)"
		},
		"ZECL_int_ptr_jump_table_replace": {
			"addr": "Rx98632"
		},
		"ZECL_int_ptr_case_table_replace": {
			"addr": "Rx9862B"
		},
		"ZECL_int_ptr_max_replace": {
			"enable": "<option:zecl_iptr_case_new_count>",
			"addr": "Rx9861E",
			"code": "(u8:<option:zecl_iptr_case_base_count> + <option:zecl_iptr_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_iptr_case_base_count> - 1)"
		},
		"ZECL_float_var_jump_table_replace": {
			"addr": "Rx995FE"
		},
		"ZECL_float_var_max_replace": {
			"enable": "<option:zecl_fvar_jump_new_count>",
			"addr": "Rx995F1",
			"code": "(u8:<option:zecl_fvar_jump_base_count> + <option:zecl_fvar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_fvar_jump_base_count> - 1)"
		},
		"ZECL_float_ptr_jump_table_replace": {
			"addr": "Rx98242"
		},
		"ZECL_float_ptr_case_table_replace": {
			"addr": "Rx9823B"
		},
		"ZECL_float_ptr_max_replace": {
			"enable": "<option:zecl_fptr_case_new_count>",
			"addr": "Rx9822E",
			"code": "(u8:<option:zanm_fptr_case_base_count> + <option:zanm_fptr_case_new_count> - 1)",
			"expect": "(u8:<option:zanm_fptr_case_base_count> - 1)"
		}
	}
}