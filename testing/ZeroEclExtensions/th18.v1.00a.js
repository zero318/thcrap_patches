{
	"options": {
		// Low ECL
		"zecl_lins_jump_addr": { "val": 0x48D2A8 },
		"zecl_lins_jump_base_count": { "val": 68 },
		"zecl_lins_jump_new_count": { "val": 0 },
		"zecl_lins_case_addr": { "val": 0x48D3B8 },
		"zecl_lins_case_base_count": { "val": 95 },
		"zecl_lins_case_new_count": { "val": 0 },
		// High ECL
		"zecl_hins_jump_addr": { "val": 0x436438 },
		"zecl_hins_jump_base_count": { "val": 175 },
		"zecl_hins_jump_new_count": { "val": 0 },
		"zecl_hins_case_addr": { "val": 0x4366F4 },
		"zecl_hins_case_base_count": { "val": 704 },
		"zecl_hins_case_new_count": { "val": 0 },
		// Int Vars
		"zecl_ivar_jump_addr": { "val": 0x437978 },
		"zecl_ivar_jump_base_count": { "val": 103 },
		"zecl_ivar_jump_new_count": { "val": 4 },
		// Int Ptrs
		"zecl_iptr_jump_addr": { "val": 0x437C10 },
		"zecl_iptr_jump_base_count": { "val": 16 },
		"zecl_iptr_jump_new_count": { "val": 0 },
		"zecl_iptr_case_addr": { "val": 0x437C50 },
		"zecl_iptr_case_base_count": { "val": 63 },
		"zecl_iptr_case_new_count": { "val": 0 },
		// Float Vars
		"zecl_fvar_jump_addr": { "val": 0x438640 },
		"zecl_fvar_jump_base_count": { "val": 103 },
		"zecl_fvar_jump_new_count": { "val": 4 },
		// Float Ptrs
		"zecl_fptr_jump_addr": { "val": 0x438934 },
		"zecl_fptr_jump_base_count": { "val": 25 },
		"zecl_fptr_jump_new_count": { "val": 0 },
		"zecl_fptr_case_addr": { "val": 0x438998 },
		"zecl_fptr_case_base_count": { "val": 81 },
		"zecl_fptr_case_new_count": { "val": 0 },
		
		//"ecl_lins_break_addr": {
			//"type": "u32",
			//"val": 
		//},
		//"ecl_lins_continue_addr": {
			//"type": "u32",
			//"val": 
		//},
		"ecl_hins_break_addr": {
			"type": "u32",
			"val": 0x436417
		},
		//"ecl_hins_continue_addr": {
			//"type": "u32",
			//"val": 
		//},
		
		"ability_manager_ptr": {
			"type": "u32",
			"val": 0x4CF298
		}
	},
	"codecaves": {
		"ZECL_int_var_jump_table": {
			"code": "\
<codecave:ZECL18_total_cards_int_var> \
<codecave:ZECL18_active_cards_int_var> \
<codecave:ZECL18_equipment_cards_int_var> \
<codecave:ZECL18_passive_cards_int_var> \
"
		},
		"ZECL_float_var_jump_table": {
			"code": "\
<codecave:ZECL18_total_cards_float_var> \
<codecave:ZECL18_active_cards_float_var> \
<codecave:ZECL18_equipment_cards_float_var> \
<codecave:ZECL18_passive_cards_float_var> \
"
		},
		
		"ZECL18_total_cards_int_var": {
			"access": "re",
			"code": "\
A1 <option:ability_manager_ptr> \
8B40 28 \
C9 \
C2 0400 \
"
		},
		"ZECL18_active_cards_int_var": {
			"access": "re",
			"code": "\
A1 <option:ability_manager_ptr> \
8B40 2C \
C9 \
C2 0400 \
"
		},
		"ZECL18_equipment_cards_int_var": {
			"access": "re",
			"code": "\
A1 <option:ability_manager_ptr> \
8B40 30 \
C9 \
C2 0400 \
"
		},
		"ZECL18_passive_cards_int_var": {
			"access": "re",
			"code": "\
A1 <option:ability_manager_ptr> \
8B40 34 \
C9 \
C2 0400 \
"
		},
		
		"ZECL18_total_cards_float_var": {
			"access": "re",
			"code": "\
A1 <option:ability_manager_ptr> \
DB40 28 \
C9 \
C2 0400 \
"
		},
		"ZECL18_active_cards_float_var": {
			"access": "re",
			"code": "\
A1 <option:ability_manager_ptr> \
DB40 2C \
C9 \
C2 0400 \
"
		},
		"ZECL18_equipment_cards_float_var": {
			"access": "re",
			"code": "\
A1 <option:ability_manager_ptr> \
DB40 30 \
C9 \
C2 0400 \
"
		},
		"ZECL18_passive_cards_float_var": {
			"access": "re",
			"code": "\
A1 <option:ability_manager_ptr> \
DB40 34 \
C9 \
C2 0400 \
"
		}
	},
	"binhacks": {
		"ZECL_int_var_jump_table_replace": {
			"addr": 0x43737D,
		},
		"ZECL_int_var_max_replace": {
			"enable": "<option:zecl_ivar_jump_new_count>",
			"addr": 0x437373,
			"code": "(u8:<option:zecl_ivar_jump_base_count> + <option:zecl_ivar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_ivar_jump_base_count> - 1)",
		},
		"ZECL_float_var_jump_table_replace": {
			"addr": 0x437CAD
		},
		"ZECL_float_var_max_replace": {
			"enable": "<option:zecl_fvar_jump_new_count>",
			"addr": 0x437CA3,
			"code": "(u8:<option:zecl_fvar_jump_base_count> + <option:zecl_fvar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_fvar_jump_base_count> - 1)",
		},
		
		"ZECL18_enhance_disable_crit_sections": {
			"enable": "<option:zecl_experimental_enhancements>",
			"addr": 0x471301,
			"code": "<nop:7>",
			"expect": "C605 <0x5217BE> 01",
		},
		
		"ZECL_enhance_fstp0_to_ffreep0": {
			"addr": [ 0x4A63BF, 0x4A6700, 0x4A6724, 0x4A7177, 0x4A7179, 0x4A71AA, 0x4A71D1, 0x4A71D3, 0x4A7201, 0x4A7208, 0x4A7223, 0x4A723E, 0x4A7240, 0x4A7254, 0x4A7430, 0x4A7448, 0x4A744A, 0x4A7450, 0x4A7452, 0x4A745D, 0x4A7460, 0x4A7520, 0x4A7522, 0x4A7540, 0x4A7542, 0x4A79EC, 0x4A7D5D, 0x4A7D8F, 0x4A7DAE, 0x4A7DCF, 0x4A7DEA, 0x4A7DF7, 0x4A7E26, 0x4A7E58, 0x4A7E77, 0x4A7E81, 0x4A8265, 0x4A872A, 0x4A8DFA, 0x4A8E06, 0x4A8E1B, 0x4A8EB0, 0x4A8EBF, 0x4A8F38, 0x4A8F5B, 0x4A8F78, 0x4A9018, 0x4A9033, 0x4AA550, 0x4AA560, 0x4AA566, 0x4AA571, 0x4AA57C, 0x4AA590, 0x4AA8F9, 0x4AA91A, 0x4AA9F3, 0x4AAAE6, 0x4AABD6, 0x4AAC95, 0x4AACC8, 0x4AACDA, 0x4AADAB, 0x4AB9F5, ],
		},
		"ZECL_enhance_remove_finit": {
			"addr": [ 0x4027D4, 0x402814, 0x402854, 0x42A335, 0x43E390, 0x44252B, ],
		},
		"ZECL_enhance_remove_bt_mem_A": {
			"addr": [ 0x48F922, 0x48F9AD, 0x490E44, 0x491504, ],
		},
		"ZECL_enhance_remove_bt_mem_B": {
			"addr": [ 0x48F935, 0x490E31, 0x490E62, 0x490E70, 0x4910C3, 0x4914F1, 0x491522, 0x491530, 0x491783, ],
		},
	}
}