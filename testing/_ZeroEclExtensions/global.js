{
	"options": {
		"zecl_lins_jump_addr": { "type": "u32", "val": 0 },
		"zecl_lins_jump_base_count": { "type": "u32", "val": 0 },
		"zecl_lins_jump_new_count": { "type": "u32", "val": 0 },
		"zecl_lins_case_addr": { "type": "u32", "val": 0 },
		"zecl_lins_case_base_count": { "type": "u32", "val": 0 },
		"zecl_lins_case_new_count": { "type": "u32", "val": 0 },
		"zecl_hins_jump_addr": { "type": "u32", "val": 0 },
		"zecl_hins_jump_base_count": { "type": "u32", "val": 0 },
		"zecl_hins_jump_new_count": { "type": "u32", "val": 0 },
		"zecl_hins_case_addr": { "type": "u32", "val": 0 },
		"zecl_hins_case_base_count": { "type": "u32", "val": 0 },
		"zecl_hins_case_new_count": { "type": "u32", "val": 0 },
		"zecl_ivar_jump_addr": { "type": "u32", "val": 0 },
		"zecl_ivar_jump_base_count": { "type": "u32", "val": 0 },
		"zecl_ivar_jump_new_count": { "type": "u32", "val": 0 },
		"zecl_ivar_case_addr": { "type": "u32", "val": 0 },
		"zecl_ivar_case_base_count": { "type": "u32", "val": 0 },
		"zecl_ivar_case_new_count": { "type": "u32", "val": 0 },
		"zecl_iptr_jump_addr": { "type": "u32", "val": 0 },
		"zecl_iptr_jump_base_count": { "type": "u32", "val": 0 },
		"zecl_iptr_jump_new_count": { "type": "u32", "val": 0 },
		"zecl_iptr_case_addr": { "type": "u32", "val": 0 },
		"zecl_iptr_case_base_count": { "type": "u32", "val": 0 },
		"zecl_iptr_case_new_count": { "type": "u32", "val": 0 },
		"zecl_fvar_jump_addr": { "type": "u32", "val": 0 },
		"zecl_fvar_jump_base_count": { "type": "u32", "val": 0 },
		"zecl_fvar_jump_new_count": { "type": "u32", "val": 0 },
		"zecl_fvar_case_addr": { "type": "u32", "val": 0 },
		"zecl_fvar_case_base_count": { "type": "u32", "val": 0 },
		"zecl_fvar_case_new_count": { "type": "u32", "val": 0 },
		"zecl_fptr_jump_addr": { "type": "u32", "val": 0 },
		"zecl_fptr_jump_base_count": { "type": "u32", "val": 0 },
		"zecl_fptr_jump_new_count": { "type": "u32", "val": 0 },
		"zecl_fptr_case_addr": { "type": "u32", "val": 0 },
		"zecl_fptr_case_base_count": { "type": "u32", "val": 0 },
		"zecl_fptr_case_new_count": { "type": "u32", "val": 0 },
		
		"zecl_disable_code_enhancements": {
			"type": "b8",
			"val": false
		},
		"zecl_disable_alloc_funcs": {
			"type": "b8",
			"val": true
		},
		
		"stdfunc_free_addr": { "type": "u32", "val": 0 },
		"stdfunc_delete_addr": { "type": "u32", "val": 0 },
		"stdfunc_malloc_addr": { "type": "u32", "val": 0 },
		"stdfunc_new_addr": { "type": "u32", "val": 0 },
		"stdfunc_calloc_addr": { "type": "u32", "val": 0 },
		"stdfunc_realloc_addr": { "type": "u32", "val": 0 },
		"stdfunc_msize_addr": { "type": "u32", "val": 0 },
		"stdfunc_memcpy_addr": { "type": "u32", "val": 0 },
		"stdfunc_memmove_addr": { "type": "u32", "val": 0 },
		"stdfunc_memset_addr": { "type": "u32", "val": 0 },
		"stdfunc_strlen_addr": { "type": "u32", "val": 0 },
		"stdfunc_strcpy_addr": { "type": "u32", "val": 0 },
		"stdfunc_strcat_addr": { "type": "u32", "val": 0 },
		"stdfunc_strcmp_addr": { "type": "u32", "val": 0 },
		"stdfunc_strncmp_addr": { "type": "u32", "val": 0 },
		"stdfunc_sprintf_addr": { "type": "u32", "val": 0 },
		"stdfunc_sscanf_addr": { "type": "u32", "val": 0 },
		"stdfunc_ftol2_addr": { "type": "u32", "val": 0 },
		
	},
	"codecaves": {
		"ZECL_Copy_Tables_patch_init": {
			"export": true,
			"access": "re",
			// Yes, this is just a crapton of conditional memcpy
			"code": "\
56 \
57 \
53 \
FC \
B9 <option:zecl_lins_jump_new_count> \
85C9 \
74 22 \
B8 <option:zecl_lins_jump_addr> \
85C0 \
74 19 \
BB <codecave:ZECL_low_ins_jump_table> \
BA <option:zecl_lins_jump_base_count> \
89DE \
8D3C93 \
F3 A5 \
89D1 \
89C6 \
89DF \
F3 A5 \
B9 <option:zecl_lins_case_new_count> \
85C9 \
74 22 \
B8 <option:zecl_lins_case_addr> \
85C0 \
74 19 \
BB <codecave:ZECL_low_ins_case_table> \
BA <option:zecl_lins_case_base_count> \
89DE \
8D3C13 \
F3 A4 \
89D1 \
89C6 \
89DF \
F3 A4 \
B9 <option:zecl_hins_jump_new_count> \
85C9 \
74 22 \
B8 <option:zecl_hins_jump_addr> \
85C0 \
74 19 \
BB <codecave:ZECL_high_ins_jump_table> \
BA <option:zecl_hins_jump_base_count> \
89DE \
8D3C93 \
F3 A5 \
89D1 \
89C6 \
89DF \
F3 A5 \
B9 <option:zecl_hins_case_new_count> \
85C9 \
74 22 \
B8 <option:zecl_hins_case_addr> \
85C0 \
74 19 \
BB <codecave:ZECL_high_ins_case_table> \
BA <option:zecl_hins_case_base_count> \
89DE \
8D3C13 \
F3 A4 \
89D1 \
89C6 \
89DF \
F3 A4 \
B9 <option:zecl_ivar_jump_new_count> \
85C9 \
74 22 \
B8 <option:zecl_ivar_jump_addr> \
85C0 \
74 19 \
BB <codecave:ZECL_int_var_jump_table> \
BA <option:zecl_ivar_jump_base_count> \
89DE \
8D3C93 \
F3 A5 \
89D1 \
89C6 \
89DF \
F3 A5 \
B9 <option:zecl_ivar_case_new_count> \
85C9 \
74 22 \
B8 <option:zecl_ivar_case_addr> \
85C0 \
74 19 \
BB <codecave:ZECL_int_var_case_table> \
BA <option:zecl_ivar_case_base_count> \
89DE \
8D3C13 \
F3 A4 \
89D1 \
89C6 \
89DF \
F3 A4 \
B9 <option:zecl_iptr_jump_new_count> \
85C9 \
74 22 \
B8 <option:zecl_iptr_jump_addr> \
85C0 \
74 19 \
BB <codecave:ZECL_int_ptr_jump_table> \
BA <option:zecl_iptr_jump_base_count> \
89DE \
8D3C93 \
F3 A5 \
89D1 \
89C6 \
89DF \
F3 A5 \
B9 <option:zecl_iptr_case_new_count> \
85C9 \
74 22 \
B8 <option:zecl_iptr_case_addr> \
85C0 \
74 19 \
BB <codecave:ZECL_int_ptr_case_table> \
BA <option:zecl_iptr_case_base_count> \
89DE \
8D3C13 \
F3 A4 \
89D1 \
89C6 \
89DF \
F3 A4 \
B9 <option:zecl_fvar_jump_new_count> \
85C9 \
74 22 \
B8 <option:zecl_fvar_jump_addr> \
85C0 \
74 19 \
BB <codecave:ZECL_float_var_jump_table> \
BA <option:zecl_fvar_jump_base_count> \
89DE \
8D3C93 \
F3 A5 \
89D1 \
89C6 \
89DF \
F3 A5 \
B9 <option:zecl_fvar_case_new_count> \
85C9 \
74 22 \
B8 <option:zecl_fvar_case_addr> \
85C0 \
74 19 \
BB <codecave:ZECL_float_var_case_table> \
BA <option:zecl_fvar_case_base_count> \
89DE \
8D3C13 \
F3 A4 \
89D1 \
89C6 \
89DF \
F3 A4 \
B9 <option:zecl_fptr_jump_new_count> \
85C9 \
74 22 \
B8 <option:zecl_fptr_jump_addr> \
85C0 \
74 19 \
BB <codecave:ZECL_float_ptr_jump_table> \
BA <option:zecl_fptr_jump_base_count> \
89DE \
8D3C93 \
F3 A5 \
89D1 \
89C6 \
89DF \
F3 A5 \
B9 <option:zecl_fptr_case_new_count> \
85C9 \
74 22 \
B8 <option:zecl_fptr_case_addr> \
85C0 \
74 19 \
BB <codecave:ZECL_float_ptr_case_table> \
BA <option:zecl_fptr_case_base_count> \
89DE \
8D3C13 \
F3 A4 \
89D1 \
89C6 \
89DF \
F3 A4 \
5B \
5F \
5E \
C3 \
"
		},
		"ZECL_low_ins_jump_table": {
			"access": "r",
			"enable": "<option:zecl_lins_jump_new_count>",
			"size": 4,
			"count": "<option:zecl_lins_jump_base_count> + <option:zecl_lins_jump_new_count>"
		},
		"ZECL_low_ins_case_table": {
			"access": "r",
			"enable": "<option:zecl_lins_case_new_count>",
			"size": 1,
			"count": "<option:zecl_lins_case_base_count> + <option:zecl_lins_case_new_count>"
		},
		"ZECL_high_ins_jump_table": {
			"access": "r",
			"enable": "<option:zecl_hins_jump_new_count>",
			"size": 4,
			"count": "<option:zecl_hins_jump_base_count> + <option:zecl_hins_jump_new_count>"
		},
		"ZECL_high_ins_case_table": {
			"access": "r",
			"enable": "<option:zecl_hins_case_new_count>",
			"size": 1,
			"count": "<option:zecl_hins_case_base_count> + <option:zecl_hins_case_new_count>"
		},
		"ZECL_int_var_jump_table": {
			"access": "r",
			"enable": "<option:zecl_ivar_jump_new_count>",
			"size": 4,
			"count": "<option:zecl_ivar_jump_base_count> + <option:zecl_ivar_jump_new_count>"
		},
		"ZECL_int_var_case_table": {
			"access": "r",
			"enable": "<option:zecl_ivar_case_new_count>",
			"size": 1,
			"count": "<option:zecl_ivar_case_base_count> + <option:zecl_ivar_case_new_count>"
		},
		"ZECL_int_ptr_jump_table": {
			"access": "r",
			"enable": "<option:zecl_iptr_jump_new_count>",
			"size": 4,
			"count": "<option:zecl_iptr_jump_base_count> + <option:zecl_iptr_jump_new_count>"
		},
		"ZECL_int_ptr_case_table": {
			"access": "r",
			"enable": "<option:zecl_iptr_case_new_count>",
			"size": 1,
			"count": "<option:zecl_iptr_case_base_count> + <option:zecl_iptr_case_new_count>"
		},
		"ZECL_float_var_jump_table": {
			"access": "r",
			"enable": "<option:zecl_fvar_jump_new_count>",
			"size": 4,
			"count": "<option:zecl_fvar_jump_base_count> + <option:zecl_fvar_jump_new_count>"
		},
		"ZECL_float_var_case_table": {
			"access": "r",
			"enable": "<option:zecl_fvar_case_new_count>",
			"size": 1,
			"count": "<option:zecl_fvar_case_base_count> + <option:zecl_fvar_case_new_count>"
		},
		"ZECL_float_ptr_jump_table": {
			"access": "r",
			"enable": "<option:zecl_fptr_jump_new_count>",
			"size": 4,
			"count": "<option:zecl_fptr_jump_base_count> + <option:zecl_fptr_jump_new_count>"
		},
		"ZECL_float_ptr_case_table": {
			"access": "r",
			"enable": "<option:zecl_fptr_case_new_count>",
			"size": 1,
			"count": "<option:zecl_fptr_case_base_count> + <option:zecl_fptr_case_new_count>"
		},
	},
	"binhacks": {
		"ZECL_low_ins_jump_table_replace": {
			"enable": "<option:zecl_lins_jump_new_count>",
			"code": "<codecave:ZECL_low_ins_jump_table>",
			"expect": "<option:zecl_lins_jump_addr>"
		},
		"ZECL_low_ins_jump_table_remove": {
			"enable": "<option:zecl_lins_jump_new_count>",
			"addr": "<option:zecl_lins_jump_addr>",
			"code": "<int3:<option:zecl_lins_jump_base_count> * 4>"
		},
		"ZECL_low_ins_case_table_replace": {
			"enable": "<option:zecl_lins_case_new_count>",
			"code": "<codecave:ZECL_low_ins_case_table>",
			"expect": "<option:zecl_lins_case_addr>"
		},
		"ZECL_low_ins_case_table_remove": {
			"enable": "<option:zecl_lins_case_new_count>",
			"addr": "<option:zecl_lins_case_addr>",
			"code": "<int3:<option:zecl_lins_case_base_count>>"
		},
		"ZECL_high_ins_jump_table_replace": {
			"enable": "<option:zecl_hins_jump_new_count>",
			"code": "<codecave:ZECL_high_ins_jump_table>",
			"expect": "<option:zecl_hins_jump_addr>"
		},
		"ZECL_high_ins_jump_table_remove": {
			"enable": "<option:zecl_hins_jump_new_count>",
			"addr": "<option:zecl_hins_jump_addr>",
			"code": "<int3:<option:zecl_hins_jump_base_count> * 4>"
		},
		"ZECL_high_ins_case_table_replace": {
			"enable": "<option:zecl_hins_case_new_count>",
			"code": "<codecave:ZECL_high_ins_case_table>",
			"expect": "<option:zecl_hins_case_addr>"
		},
		"ZECL_high_ins_case_table_remove": {
			"enable": "<option:zecl_hins_case_new_count>",
			"addr": "<option:zecl_hins_case_addr>",
			"code": "<int3:<option:zecl_hins_case_base_count>>"
		},
		"ZECL_int_var_jump_table_replace": {
			"enable": "<option:zecl_ivar_jump_new_count>",
			"code": "<codecave:ZECL_int_var_jump_table>",
			"expect": "<option:zecl_ivar_jump_addr>"
		},
		"ZECL_int_var_jump_table_remove": {
			"enable": "<option:zecl_ivar_jump_new_count>",
			"addr": "<option:zecl_ivar_jump_addr>",
			"code": "<int3:<option:zecl_ivar_jump_base_count> * 4>"
		},
		"ZECL_int_var_case_table_replace": {
			"enable": "<option:zecl_ivar_case_new_count>",
			"code": "<codecave:ZECL_int_var_case_table>",
			"expect": "<option:zecl_ivar_case_addr>"
		},
		"ZECL_int_var_case_table_remove": {
			"enable": "<option:zecl_ivar_case_new_count>",
			"addr": "<option:zecl_ivar_case_addr>",
			"code": "<int3:<option:zecl_ivar_case_base_count>>"
		},
		"ZECL_int_ptr_jump_table_replace": {
			"enable": "<option:zecl_iptr_jump_new_count>",
			"code": "<codecave:ZECL_int_ptr_jump_table>",
			"expect": "<option:zecl_iptr_jump_addr>"
		},
		"ZECL_int_ptr_jump_table_remove": {
			"enable": "<option:zecl_iptr_jump_new_count>",
			"addr": "<option:zecl_iptr_jump_addr>",
			"code": "<int3:<option:zecl_iptr_jump_base_count> * 4>"
		},
		"ZECL_int_ptr_case_table_replace": {
			"enable": "<option:zecl_iptr_case_new_count>",
			"code": "<codecave:ZECL_int_ptr_case_table>",
			"expect": "<option:zecl_iptr_case_addr>"
		},
		"ZECL_int_ptr_case_table_remove": {
			"enable": "<option:zecl_iptr_case_new_count>",
			"addr": "<option:zecl_iptr_case_addr>",
			"code": "<int3:<option:zecl_iptr_case_base_count>>"
		},
		"ZECL_float_var_jump_table_replace": {
			"enable": "<option:zecl_fvar_jump_new_count>",
			"code": "<codecave:ZECL_float_var_jump_table>",
			"expect": "<option:zecl_fvar_jump_addr>"
		},
		"ZECL_float_var_jump_table_remove": {
			"enable": "<option:zecl_fvar_jump_new_count>",
			"addr": "<option:zecl_fvar_jump_addr>",
			"code": "<int3:<option:zecl_fvar_jump_base_count> * 4>"
		},
		"ZECL_float_var_case_table_replace": {
			"enable": "<option:zecl_fvar_case_new_count>",
			"code": "<codecave:ZECL_float_var_case_table>",
			"expect": "<option:zecl_fvar_case_addr>"
		},
		"ZECL_float_var_case_table_remove": {
			"enable": "<option:zecl_fvar_case_new_count>",
			"addr": "<option:zecl_fvar_case_addr>",
			"code": "<int3:<option:zecl_fvar_case_base_count>>"
		},
		"ZECL_float_ptr_jump_table_replace": {
			"enable": "<option:zecl_fptr_jump_new_count>",
			"code": "<codecave:ZECL_float_ptr_jump_table>",
			"expect": "<option:zecl_fptr_jump_addr>"
		},
		"ZECL_float_ptr_jump_table_remove": {
			"enable": "<option:zecl_fptr_jump_new_count>",
			"addr": "<option:zecl_fptr_jump_addr>",
			"code": "<int3:<option:zecl_fptr_jump_base_count> * 4>"
		},
		"ZECL_float_ptr_case_table_replace": {
			"enable": "<option:zecl_fptr_case_new_count>",
			"code": "<codecave:ZECL_float_ptr_case_table>",
			"expect": "<option:zecl_fptr_case_addr>"
		},
		"ZECL_float_ptr_case_table_remove": {
			"enable": "<option:zecl_fptr_case_new_count>",
			"addr": "<option:zecl_fptr_case_addr>",
			"code": "<int3:<option:zecl_fptr_case_base_count>>"
		},
		
		"ZECL_stdfunc_free_replace": {
			"enable": "<option:stdfunc_free_addr>",
			"ignore": "<option:zecl_disable_code_enhancements> || <option:zecl_disable_alloc_funcs>",
			"code": "?? [th_free]",
			"expected": "?? [<option:stdfunc_free_addr>]"
		},
		"ZECL_stdfunc_delete_replace": {
			"enable": "<option:stdfunc_delete_addr>",
			"ignore": "<option:zecl_disable_code_enhancements> || <option:zecl_disable_alloc_funcs>",
			"code": "E8 [th_free]",
			"expected": "E8 [<option:stdfunc_delete_addr>]"
		},
		"ZECL_stdfunc_malloc_replace": {
			"enable": "<option:stdfunc_malloc_addr>",
			"ignore": "<option:zecl_disable_code_enhancements> || <option:zecl_disable_alloc_funcs>",
			"code": "E8 [th_malloc]",
			"expected": "E8 [<option:stdfunc_malloc_addr>]"
		},
		"ZECL_stdfunc_new_replace": {
			"enable": "<option:stdfunc_new_addr>",
			"ignore": "<option:zecl_disable_code_enhancements> || <option:zecl_disable_alloc_funcs>",
			"code": "E8 [th_malloc]",
			"expected": "E8 [<option:stdfunc_new_addr>]"
		},
		"ZECL_stdfunc_calloc_replace": {
			"enable": "<option:stdfunc_calloc_addr>",
			"ignore": "<option:zecl_disable_code_enhancements> || <option:zecl_disable_alloc_funcs>",
			"code": "E8 [th_calloc]",
			"expected": "E8 [<option:stdfunc_calloc_addr>]"
		},
		"ZECL_stdfunc_realloc_replace": {
			"enable": "<option:stdfunc_realloc_addr>",
			"ignore": "<option:zecl_disable_code_enhancements> || <option:zecl_disable_alloc_funcs>",
			"code": "E8 [th_realloc]",
			"expected": "E8 [<option:stdfunc_realloc_addr>]"
		},
		"ZECL_stdfunc_msize_replace": {
			"enable": "<option:stdfunc_msize_addr>",
			"ignore": "<option:zecl_disable_code_enhancements> || <option:zecl_disable_alloc_funcs>",
			"code": "E8 [th_msize]",
			"expected": "E8 [<option:stdfunc_msize_addr>]"
		},
		"ZECL_stdfunc_memcpy_replace": {
			"enable": "<option:stdfunc_memcpy_addr>",
			"ignore": "<option:zecl_disable_code_enhancements>",
			"code": "E8 [th_memcpy]",
			"expected": "E8 [<option:stdfunc_memcpy_addr>]"
		},
		"ZECL_stdfunc_memmove_replace": {
			"enable": "<option:stdfunc_memmove_addr>",
			"ignore": "<option:zecl_disable_code_enhancements>",
			"code": "E8 [th_memmove]",
			"expected": "E8 [<option:stdfunc_memmove_addr>]"
		},
		"ZECL_stdfunc_memset_replace": {
			"enable": "<option:stdfunc_memset_addr>",
			"ignore": "<option:zecl_disable_code_enhancements>",
			"code": "E8 [th_memset]",
			"expected": "E8 [<option:stdfunc_memset_addr>]"
		},
		"ZECL_stdfunc_strlen_replace": {
			"enable": "<option:stdfunc_strlen_addr>",
			"ignore": "<option:zecl_disable_code_enhancements>",
			"code": "E8 [th_strlen]",
			"expected": "E8 [<option:stdfunc_strlen_addr>]"
		},
		"ZECL_stdfunc_strcpy_replace": {
			"enable": "<option:stdfunc_strcpy_addr>",
			"ignore": "<option:zecl_disable_code_enhancements>",
			"code": "E8 [th_strcpy]",
			"expected": "E8 [<option:stdfunc_strcpy_addr>]"
		},
		"ZECL_stdfunc_strcat_replace": {
			"enable": "<option:stdfunc_strcat_addr>",
			"ignore": "<option:zecl_disable_code_enhancements>",
			"code": "E8 [th_strcat]",
			"expected": "E8 [<option:stdfunc_strcat_addr>]"
		},
		"ZECL_stdfunc_strcmp_replace": {
			"enable": "<option:stdfunc_strcmp_addr>",
			"ignore": "<option:zecl_disable_code_enhancements>",
			"code": "E8 [th_strcmp]",
			"expected": "E8 [<option:stdfunc_strcmp_addr>]"
		},
		"ZECL_stdfunc_strncmp_replace": {
			"enable": "<option:stdfunc_strncmp_addr>",
			"ignore": "<option:zecl_disable_code_enhancements>",
			"code": "E8 [th_strncmp]",
			"expected": "E8 [<option:stdfunc_strncmp_addr>]"
		},
		"ZECL_stdfunc_sprintf_replace": {
			"enable": "<option:stdfunc_sprintf_addr>",
			"ignore": "<option:zecl_disable_code_enhancements>",
			"code": "E8 [th_sprintf]",
			"expected": "E8 [<option:stdfunc_sprintf_addr>]"
		},
		"ZECL_stdfunc_sscanf_replace": {
			"enable": "<option:stdfunc_sscanf_addr>",
			"ignore": "<option:zecl_disable_code_enhancements>",
			"code": "E8 [th_sscanf]",
			"expected": "E8 [<option:stdfunc_sscanf_addr>]"
		},
		"ZECL_stdfunc_ftol2_replace": {
			"enable": "<cpuid:sse3> && <option:stdfunc_ftol2_addr>",
			"ignore": "<option:zecl_disable_code_enhancements>",
			"code": "\
55 \
DB0CE4 \
58 \
",
			"expected": "E8 [<option:stdfunc_ftol2_addr>]"
		},
		"ZECL_enhance_fstp0_to_ffreep0": {
			"enable": "<cpuid:AMD>",
			"ignore": "<option:zecl_disable_code_enhancements>",
			"code": "DFC0",
			"expected": "DDD8"
		},
		"ZECL_enhance_fstp0fstp0_to_ffreep1fincstp": {
			"enable": "<cpuid:AMD>",
			"ignore": "<option:zecl_disable_code_enhancements>",
			"code": "DFC1D9F7",
			"expected": "DDD8DDD8"
		},
	}
}