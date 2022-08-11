{
	"options": {
		// Low ECL
		"zecl_lins_jump_addr": { "val": 0x47A7CC },
		"zecl_lins_jump_base_count": { "val": 67 },
		"zecl_lins_jump_new_count": { "val": 0 },
		"zecl_lins_case_addr": { "val": 0x47A8D8 },
		"zecl_lins_case_base_count": { "val": 94 },
		"zecl_lins_case_new_count": { "val": 0 },
		// High ECL
		"zecl_hins_jump_addr": { "val": 0x42661C },
		"zecl_hins_jump_base_count": { "val": 173 },
		"zecl_hins_jump_new_count": { "val": 0 },
		"zecl_hins_case_addr": { "val": 0x4268D0 },
		"zecl_hins_case_base_count": { "val": 704 },
		"zecl_hins_case_new_count": { "val": 0 },
		// Int Vars
		"zecl_ivar_jump_addr": { "val": 0x427B40 },
		"zecl_ivar_jump_base_count": { "val": 102 },
		"zecl_ivar_jump_new_count": { "val": 0 },
		// Int Ptrs
		"zecl_iptr_jump_addr": { "val": 0x427DD0 },
		"zecl_iptr_jump_base_count": { "val": 16 },
		"zecl_iptr_jump_new_count": { "val": 0 },
		"zecl_iptr_case_addr": { "val": 0x427E10 },
		"zecl_iptr_case_base_count": { "val": 63 },
		"zecl_iptr_case_new_count": { "val": 0 },
		// Float Vars
		"zecl_fvar_jump_addr": { "val": 0x42885C },
		"zecl_fvar_jump_base_count": { "val": 102 },
		"zecl_fvar_jump_new_count": { "val": 0 },
		// Float Ptrs
		"zecl_fptr_jump_addr": { "val": 0x428B54 },
		"zecl_fptr_jump_base_count": { "val": 25 },
		"zecl_fptr_jump_new_count": { "val": 0 },
		"zecl_fptr_case_addr": { "val": 0x428BB8 },
		"zecl_fptr_case_base_count": { "val": 81 },
		"zecl_fptr_case_new_count": { "val": 0 },
	},
	"codecaves": {
		
	},
	"binhacks": {
		"ZECL_low_ins_jump_table_replace": {
			"addr": 0x478B06
		},
		"ZECL_low_ins_case_table_replace": {
			"addr": 0x478AFF
		},
		"ZECL_low_ins_max_replace": {
			"enable": "<option:zecl_lins_case_new_count>",
			"addr": 0x478AF5,
			"code": "(u8:<option:zecl_lins_case_base_count> + <option:zecl_lins_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_lins_case_base_count> - 1)",
		},
		"ZECL_high_ins_jump_table_replace": {
			"addr": 0x4211CA
		},
		"ZECL_high_ins_case_table_replace": {
			"addr": 0x4211B4
		},
		"ZECL_high_ins_max_replace": {
			"enable": "<option:zecl_hins_case_new_count>",
			"addr": 0x4211A7,
			"code": "(<option:zecl_hins_case_base_count> + <option:zecl_hins_case_new_count> - 1)",
			"expect": "(<option:zecl_hins_case_base_count> - 1)",
		},
		"ZECL_int_var_jump_table_replace": {
			"addr": 0x42752D,
		},
		"ZECL_int_var_max_replace": {
			"enable": "<option:zecl_ivar_jump_new_count>",
			"addr": 0x427523,
			"code": "(u8:<option:zecl_ivar_jump_base_count> + <option:zecl_ivar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_ivar_jump_base_count> - 1)",
		},
		"ZECL_int_ptr_jump_table_replace": {
			"addr": 0x427D01
		},
		"ZECL_int_ptr_case_table_replace": {
			"addr": 0x427CFA
		},
		"ZECL_int_ptr_max_replace": {
			"enable": "<option:zecl_iptr_case_new_count>",
			"addr": 0x427CF0,
			"code": "(u8:<option:zecl_iptr_case_base_count> + <option:zecl_iptr_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_iptr_case_base_count> - 1)",
		},
		"ZECL_float_var_jump_table_replace": {
			"addr": 0x427E6D
		},
		"ZECL_float_var_max_replace": {
			"enable": "<option:zecl_fvar_jump_new_count>",
			"addr": 0x427E63,
			"code": "(u8:<option:zecl_fvar_jump_base_count> + <option:zecl_fvar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_fvar_jump_base_count> - 1)",
		},
		"ZECL_float_ptr_jump_table_replace": {
			"addr": 0x428A21
		},
		"ZECL_float_ptr_case_table_replace": {
			"addr": 0x428A1A
		},
		"ZECL_float_ptr_max_replace": {
			"enable": "<option:zecl_fptr_case_new_count>",
			"addr": 0x428A10,
			"code": "(u8:<option:zecl_fptr_case_base_count> + <option:zecl_fptr_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_fptr_case_base_count> - 1)",
		},
		
		"ZECL_enhance_fstp0_to_ffreep0": {
			"addr": [ 0x49403A, 0x4943B0, 0x4943D4, 0x494DF7, 0x494DF9, 0x494E2A, 0x494E51, 0x494E53, 0x494E81, 0x494E88, 0x494EA3, 0x494EBE, 0x494EC0, 0x494ED4, 0x4950B0, 0x4950C8, 0x4950CA, 0x4950D0, 0x4950D2, 0x4950DD, 0x4950E0, 0x4951A0, 0x4951A2, 0x4951C0, 0x4951C2, 0x49566E, 0x4959DD, 0x495A11, 0x495A30, 0x495A51, 0x495A6C, 0x495A79, 0x495AA8, 0x495ADA, 0x495AF9, 0x495B03, 0x495EE9, 0x4963BE, 0x497F20, 0x497F30, 0x497F36, 0x497F41, 0x497F4C, 0x497F60, 0x4982C9, 0x4982EA, 0x4983C3, 0x4984B6, 0x4985A6, 0x498665, 0x498698, 0x4986AA, 0x49877B, 0x4993C5, ],
		},
		"ZECL_enhance_remove_finit": {
			"addr": [ 0x402844, 0x402884, 0x41AD05, 0x42D6A0, 0x4300CA,  ],
		},
		"ZECL_enhance_remove_bt_mem_A": {
			"addr": [ 0x47CE92, 0x47CF1D, 0x47E3A4, 0x47EA64, ],
		},
		"ZECL_enhance_remove_bt_mem_B": {
			"addr": [ 0x47CEA5, 0x47E391, 0x47E3C2, 0x47E3D0, 0x47E623, 0x47EA51, 0x47EA82, 0x47EA90, 0x47ECE3, ],
		},
	}
}