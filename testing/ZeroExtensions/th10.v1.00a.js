{
	"options": {
		// Low ECL
		"zecl_lins_jump_addr": { "val": 0x44FBC4 },
		"zecl_lins_jump_base_count": { "val": 60 },
		"zecl_lins_jump_new_count": { "val": 0 },
		"zecl_lins_case_addr": { "val": 0x44FCB4 },
		"zecl_lins_case_base_count": { "val": 88 },
		"zecl_lins_case_new_count": { "val": 0 },
		// High ECL
		"zecl_hins_jump_addr": { "val": 0x411D30 },
		"zecl_hins_jump_base_count": { "val": 108 },
		"zecl_hins_jump_new_count": { "val": 0 },
		"zecl_hins_case_addr": { "val": 0x411EE0 },
		"zecl_hins_case_base_count": { "val": 181 },
		"zecl_hins_case_new_count": { "val": 0 },
		// Int Vars
		"zecl_ivar_jump_addr": { "val": 0x412228 },
		"zecl_ivar_jump_base_count": { "val": 51 },
		"zecl_ivar_jump_new_count": { "val": 0 },
		// Int Ptrs
		"zecl_iptr_jump_addr": { "val": 0x412340 },
		"zecl_iptr_jump_base_count": { "val": 4 },
		"zecl_iptr_jump_new_count": { "val": 0 },
		// Float Vars
		"zecl_fvar_jump_addr": { "val": 0x4125F8 },
		"zecl_fvar_jump_base_count": { "val": 51 },
		"zecl_fvar_jump_new_count": { "val": 0 },
		// Float Ptrs
		"zecl_fptr_jump_addr": { "val": 0x412710 },
		"zecl_fptr_jump_base_count": { "val": 4 },
		"zecl_fptr_jump_new_count": { "val": 0 },
		
		"ecl_lins_break_addr": {
			"type": "u32",
			"val": 0x44FB77
		},
		
		// EclContext*	EDX
		// index		Stack Arg 0
		"ecl_get_int_var_addr": {
			"type": "u32",
			"val": 0x44FDB0
		},
		// EclContext*	ESI
		// index		ECX
		"ecl_get_int_ptr_addr": {
			"type": "u32",
			"val": 0x450030
		},
		// EclContext*	EAX
		// index		ECX
		"ecl_get_float_var_addr": {
			"type": "u32",
			"val": 0x44FE40
		},
		// EclContext*	EAX
		// index		ECX
		"ecl_get_float_ptr_addr": {
			"type": "u32",
			"val": 0x450070
		},
		
		// EclStack*	EAX
		// type			DL
		// size			Stack Arg 0
		// value*		Stack Arg 1
		"ecl_push_value_addr": {
			"type": "u32",
			"val": 0x4505B0
		},
		
		"stdfunc_ftol2_addr": { "val": 0x463B2C },
		
		"stdfunc_CIfmod_addr": { "val": 0x463BBA },
	},
	"codecaves": {
		"ZECL_low_ins_jump_table": {
			"code": "\
<codecave:ZECL10_debug_breakpoint> \
<codecave:ZECL10_thcrap_expr> \
<codecave:ZECL10_math_float_mod> \
<codecave:ZECL10_math_float_neg> \
<codecave:ZECL10_math_shl> \
<codecave:ZECL10_math_shr> \
<codecave:ZECL10_math_sar> \
<codecave:ZECL10_math_rol> \
<codecave:ZECL10_math_ror> \
<codecave:ZECL10_math_udiv> \
<codecave:ZECL10_math_umod> \
"
		},
		// Memory locations:
		// current_instruction	EDI
		// enemy				
		// int scratch			[ESP+14]
		// float scratch		[ESP+10]
		//
		// Available registers:
		// Default: EDI, EBP (restore to 0 afterwards)
		// Patched: 
		"ZECL10_debug_breakpoint": {
			"access": "re",
			"code": "\
CC \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL10_thcrap_expr": {
			"access": "re",
			"code": "\
31C9 \
E8 [<option:ecl_get_int_ptr_addr>] \
83C7 14 \
89F9 \
31D2 \
6A 00 \
6A 00 \
6A 00 \
50 \
E8 [eval_expr] \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL10_math_float_mod": {
			"access": "re",
			"code": "\
8BBE 08100000 \
8B443E 04 \
803C39 69 \
8944E4 10 \
DB44E4 10 \
8B4C3E FC \
8A543E F8 \
D944E4 10 \
DAC9 \
DDC1 \
80FA 69 \
894CE4 10 \
DB44E4 10 \
C6443E F8 66 \
D944E4 10 \
DAC9 \
DDD9 \
E8 [<option:stdfunc_CIfmod_addr>] \
D95C3E FC \
8386 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL10_math_float_neg": {
			"access": "re",
			"code": "\
8B86 08100000 \
8B5406 04 \
803C06 69 \
8954E4 10 \
DB44E4 10 \
C60406 66 \
D944E4 10 \
DAC9 \
DDC1 \
D9E0 \
D95C06 04 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL10_math_shl": {
			"access": "re",
			"code": "\
8B96 08100000 \
8B7C16 04 \
8B4C16 FC \
807C16 F8 66 \
660F6EC1 \
F30F2CC0 \
0F45C1 \
803C16 66 \
660F6EC7 \
F30F2CC8 \
0F45CF \
D3E0 \
894416 FC \
8386 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL10_math_shr": {
			"access": "re",
			"code": "\
8B96 08100000 \
8B7C16 04 \
8B4C16 FC \
807C16 F8 66 \
660F6EC1 \
F30F2CC0 \
0F45C1 \
803C16 66 \
660F6EC7 \
F30F2CC8 \
0F45CF \
D3EF \
894416 FC \
8386 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL10_math_sar": {
			"access": "re",
			"code": "\
8B96 08100000 \
8B7C16 04 \
8B4C16 FC \
807C16 F8 66 \
660F6EC1 \
F30F2CC0 \
0F45C1 \
803C16 66 \
660F6EC7 \
F30F2CC8 \
0F45CF \
D3FF \
894416 FC \
8386 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL10_math_rol": {
			"access": "re",
			"code": "\
8B96 08100000 \
8B7C16 04 \
8B4C16 FC \
807C16 F8 66 \
660F6EC1 \
F30F2CC0 \
0F45C1 \
803C16 66 \
660F6EC7 \
F30F2CC8 \
0F45CF \
D3C0 \
894416 FC \
8386 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL10_math_ror": {
			"access": "re",
			"code": "\
8B96 08100000 \
8B7C16 04 \
8B4C16 FC \
807C16 F8 66 \
660F6EC1 \
F30F2CC0 \
0F45C1 \
803C16 66 \
660F6EC7 \
F30F2CC8 \
0F45CF \
D3C8 \
894416 FC \
8386 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL10_math_udiv": {
			"access": "re",
			"code": "\
8B8E 08100000 \
8B440E 04 \
803C0E 66 \
660F6EC0 \
F30F2CF8 \
0F45F8 \
8B540E FC \
807C0E F8 66 \
660F6EC2 \
F30F2CC0 \
0F45C2 \
C6440E F8 69 \
31D2 \
F7F7 \
89440E FC \
8386 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
		"ZECL10_math_umod": {
			"access": "re",
			"code": "\
8B8E 08100000 \
8B440E 04 \
803C0E 66 \
660F6EC0 \
F30F2CF8 \
0F45F8 \
8B540E FC \
807C0E F8 66 \
660F6EC2 \
F30F2CC0 \
0F45C2 \
C6440E F8 69 \
31D2 \
F7F7 \
89540E FC \
8386 08100000 F8 \
E9 [<option:ecl_lins_break_addr>] \
"
		},
	},
	"binhacks": {
		"ZECL_low_ins_jump_table_replace": {
			"addr": 0x44E208
		},
		"ZECL_low_ins_case_table_replace": {
			"addr": 0x44E201
		},
		"ZECL_low_ins_max_replace": {
			"enable": "<option:zecl_lins_case_new_count>",
			"addr": 0x44E1F7,
			"code": "(u8:<option:zecl_lins_case_base_count> + <option:zecl_lins_case_new_count> - 1)",
			"expect": "(u8:<option:zecl_lins_case_base_count> - 1)",
		},
		"ZECL_high_ins_jump_table_replace": {
			"addr": 0x40E7CC
		},
		"ZECL_high_ins_case_table_replace": {
			"addr": 0x40E7C5
		},
		"ZECL_high_ins_max_replace": {
			"enable": "<option:zecl_hins_case_new_count>",
			"addr": 0x40E7AB,
			"code": "(<option:zecl_hins_case_base_count> + <option:zecl_hins_case_new_count> - 1)",
			"expect": "(<option:zecl_hins_case_base_count> - 1)",
		},
		"ZECL_int_var_jump_table_replace": {
			"addr": 0x411FD5,
		},
		"ZECL_int_var_max_replace": {
			"enable": "<option:zecl_ivar_jump_new_count>",
			"addr": 0x411FCB,
			"code": "(u8:<option:zecl_ivar_jump_base_count> + <option:zecl_ivar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_ivar_jump_base_count> - 1)",
		},
		"ZECL_int_ptr_jump_table_replace": {
			"addr": 0x412311
		},
		"ZECL_int_ptr_max_replace": {
			"enable": "<option:zecl_iptr_jump_new_count>",
			"addr": 0x41230B,
			"code": "(u8:<option:zecl_iptr_jump_base_count> + <option:zecl_iptr_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_iptr_jump_base_count> - 1)",
		},
		"ZECL_float_var_jump_table_replace": {
			"addr": 0x412365
		},
		"ZECL_float_var_max_replace": {
			"enable": "<option:zecl_fvar_jump_new_count>",
			"addr": 0x41235B,
			"code": "(u8:<option:zecl_fvar_jump_base_count> + <option:zecl_fvar_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_fvar_jump_base_count> - 1)",
		},
		"ZECL_float_ptr_jump_table_replace": {
			"addr": 0x4126E1
		},
		"ZECL_float_ptr_max_replace": {
			"enable": "<option:zecl_fptr_jump_new_count>",
			"addr": 0x4126DB,
			"code": "(u8:<option:zecl_fptr_jump_base_count> + <option:zecl_fptr_jump_new_count> - 1)",
			"expect": "(u8:<option:zecl_fptr_jump_base_count> - 1)",
		},
		
		"ZECL_stdfunc_ftol2_call_replace": {
			"addr": [ 0x4042AC, 0x404669, 0x404A05, 0x404D79, 0x404D81, 0x404D89, 0x404D91, 0x404DE0, 0x404DE8, 0x404DF0, 0x404DF8, 0x404E49, 0x404E51, 0x404E59, 0x404E61, 0x404F0F, 0x40506D, 0x405079, 0x405085, 0x405091, 0x4050A3, 0x4050AE, 0x4050B9, 0x4050C4, 0x40668C, 0x407548, 0x407682, 0x407764, 0x4078C5, 0x407A22, 0x407BD2, 0x408015, 0x408E50, 0x40AB3E, 0x40AB4A, 0x40BD72, 0x40C342, 0x40D7E8, 0x40E5D5, 0x40E74A, 0x411FF0, 0x412002, 0x412015, 0x412029, 0x412072, 0x412080, 0x41208E, 0x41209C, 0x4120AA, 0x4120B8, 0x4120C6, 0x4120D4, 0x4120E2, 0x4120F0, 0x4120FE, 0x412114, 0x412122, 0x412130, 0x41213E, 0x41214C, 0x412160, 0x412173, 0x41218A, 0x4121A0, 0x412B12, 0x415198, 0x415728, 0x4157C8, 0x415E82, 0x419356, 0x4197D4, 0x41983D, 0x41A60C, 0x41A614, 0x41B4FB, 0x41B848, 0x41B968, 0x41C428, 0x41D2AB, 0x41D3BD, 0x420C68, 0x422495, 0x42449F, 0x4244A9, 0x4244B5, 0x4244C1, 0x4248E5, 0x4248F9, 0x42490D, 0x424921, 0x42540A, 0x42541F, 0x425E21, 0x425EAA, 0x4261E7, 0x42624B, 0x4272A4, 0x4272B8, 0x4273AF, 0x4273C3, 0x4273FF, 0x427413, 0x4274C9, 0x4274DD, 0x427512, 0x427526, 0x42759A, 0x4275AE, 0x42767C, 0x427690, 0x4276C6, 0x4276DE, 0x427A3D, 0x427A72, 0x427C18, 0x427C28, 0x4285BB, 0x42988A, 0x42B756, 0x42B854, 0x42C3D6, 0x42C3E2, 0x42D1FF, 0x42E5F9, 0x43AFD0, 0x43AFEF, 0x43B485, 0x43B7DC, 0x43BD6C, 0x43C25B, 0x43C338, 0x43C351, 0x43C3A7, 0x43C499, 0x43C5A0, 0x43DC61, 0x43DD24, 0x43E08C, 0x43E310, 0x43E4EC, 0x43E511, 0x43EAC4, 0x43ED12, 0x44137F, 0x44165E, 0x4418ED, 0x4418FA, 0x441909, 0x4419A2, 0x441A89, 0x441B22, 0x441E59, 0x441E67, 0x441E74, 0x44416A, 0x44417E, 0x444191, 0x4441A9, 0x4441BC, 0x4441D4, 0x4441F6, 0x4446A2, 0x4446C1, 0x4446E2, 0x4479EE, 0x4479FA, 0x447A06, 0x447A12, 0x447B70, 0x447C2F, 0x44BF73, 0x44BF8D, 0x44BFE1, 0x44D521, 0x44E057, 0x44E3A7, 0x44E3F6, 0x44E4C3, 0x44E57E, 0x44E5B7, 0x44E616, 0x44E64C, 0x44E6AE, 0x44E6E7, 0x44E762, 0x44E798, 0x44E813, 0x44E84C, 0x44EB89, 0x44EBC5, 0x44EC2C, 0x44EC68, 0x44ECD5, 0x44ED14, 0x44ED84, 0x44EDC3, 0x44EE2D, 0x44EE69, 0x44EED6, 0x44EF15, 0x44EF85, 0x44F479, 0x44F4B8, 0x44F52D, 0x44F56C, 0x44F5E1, 0x44F620, 0x44F689, 0x44F6C8, 0x44F731, 0x44F770, 0x44F7D3, 0x44FE19, 0x44FE70, 0x44FEE0, 0x44FF65, 0x44FFAA, 0x45001B, 0x45009E, 0x4500BA, 0x45067C, ],
		},
		"ZECL_stdfunc_ftol2_jump_replace": {
			"addr": [ 0x43ECA4, 0x43ECAF, 0x43ECBA, 0x43ECC5, 0x441ABD ],
		},
		"ZECL_enhance_fstp0_to_ffreep0": {
			"addr": [ 0x403449, 0x4034CB, 0x403549, 0x4035C7, 0x403645, 0x4036C3, 0x403741, 0x4037BF, 0x404966, 0x404B5C, 0x404B70, 0x404B83, 0x405A1A, 0x405A1E, 0x405A23, 0x405B56, 0x406187, 0x4061B7, 0x4061C3, 0x4061F7, 0x406227, 0x406233, 0x4068F4, 0x4069E7, 0x40741E, 0x407428, 0x407854, 0x4079B1, 0x407AC1, 0x407ACB, 0x407B61, 0x407F4D, 0x407F56, 0x4081AB, 0x408553, 0x408558, 0x408571, 0x40857F, 0x408599, 0x4085A2, 0x408608, 0x408636, 0x408651, 0x408675, 0x40869D, 0x40CAE0, 0x40DF49, 0x40DF62, 0x40DF8D, 0x40DFA8, 0x40E007, 0x40E03D, 0x40E09B, 0x40F1A3, 0x40F7D1, 0x40F958, 0x40FABC, 0x40FB5B, 0x4102A5, 0x4102AA, 0x411D16, 0x412D30, 0x412F06, 0x4135BC, 0x413668, 0x415717, 0x419764, 0x4197D9, 0x41984A, 0x419870, 0x419875, 0x419D94, 0x41B21B, 0x41B225, 0x41B955, 0x41D23E, 0x41DBE1, 0x41DBE7, 0x41DD21, 0x41DE8F, 0x41DE94, 0x41E0BA, 0x41E0C0, 0x41E200, 0x41E884, 0x41EEFD, 0x41F0AF, 0x41F0B4, 0x41F367, 0x41F776, 0x421525, 0x421BE6, 0x421BF6, 0x4227D0, 0x42676F, 0x427A9C, 0x42894D, 0x4289CD, 0x428A30, 0x428A5E, 0x428B51, 0x428BA4, 0x428BB9, 0x428BE3, 0x428CF5, 0x428D1D, 0x428D56, 0x429881, 0x429AC6, 0x42B859, 0x42B860, 0x42E5FE, 0x439529, 0x4395B9, 0x439BD9, 0x43C6FB, 0x43C7D2, 0x43DC66, 0x43E0E3, 0x43E315, 0x440740, 0x440835, 0x440BE7, 0x440C8E, 0x440D35, 0x440DCF, 0x440F8B, 0x440FCF, 0x4411B5, 0x44183D, 0x44190E, 0x441D40, 0x4427F4, 0x44280B, 0x442C54, 0x442C6B, 0x443377, 0x44357E, 0x443790, 0x4438D5, 0x4439E0, 0x443B25, 0x443D91, 0x443F63, 0x444149, 0x444158, 0x44420B, 0x444217, 0x4446FD, 0x444B93, 0x444BD0, 0x444C63, 0x444CA0, 0x44C537, 0x44C542, 0x44D526, 0x44FB39, 0x45EDF0, 0x463C6E, 0x463C8F, 0x46403A, 0x464044, 0x464046, 0x46404B, 0x46404D, 0x464202, 0x4649FA, 0x464A8C, 0x464A9A, 0x464AF3, 0x464BAE, 0x464CB2, 0x464D44, 0x464D52, 0x464DAB, 0x464E69, ],
		},
		"ZECL_enhance_fstp0fstp0_to_ffreep1fincstp": {
			"addr": [ 0x40311F, 0x40523A, 0x406CA5, 0x425FE2, 0x426643, 0x426693, 0x428992, 0x428A2A, 0x441A90, 0x4438D7, 0x443B27, 0x444651, 0x4452BC, ]
		},
	}
}