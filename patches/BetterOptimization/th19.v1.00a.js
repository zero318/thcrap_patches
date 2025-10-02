{
	"options": {
		"better_optimization_anm_list_base": {
			"val": 0x724
		},
		"better_optimization_free_list_base": {
			"val": 0x326077C
		},
		"render_layer_prep_addr": {
			"val": "RxBE850"
		},
		"draw_vm_addr": {
			"val": "RxB7D40"
		},
		"anm_manager_ptr_addr": {
			"val": "Rx1AE3AC"
		},
		"base_game_memset_addr": {
			"val": "Rx5D390"
		},
		"base_game_free_addr": {
			"val": "Rx6590E"
		},
		"run_anm_addr": {
			"val": "RxB0870"
		},
		"on_destroy_func_table_addr": {
			"val": "Rx175038"
		},
		"invalid_anm_fast_id": {
			"val": 0x7FFF
		},
		"register_on_draw_addr": {
			"val": "RxC7A40"
		},
		"destroy_all_vms_addr": {
			"val": "RxC2790"
		}
	},
	"codecaves": {
		"lock_anm_mutex": {
			"access": "re",
			"code": "\
803D <Rx2078B8> 00 \
74 0B \
68 <Rx207800> \
FF15 <Rx15F0F4> \
C3 \
"
		},
		"unlock_anm_mutex": {
			"access": "re",
			"code": "\
803D <Rx2078B8> 00 \
74 0B \
68 <Rx207800> \
FF15 <Rx15F0F8> \
C3 \
"
		},
		"on_tick_world_fast": {
			"access": "re",
			"code": "\
A1 <Rx1AE464> \
85C0 \
74 0F \
0FB680 40010000 \
A8 05 \
74 04 \
A8 02 \
75 4C \
56 \
8B7424 08 \
803D <Rx2078B8> 00 \
74 0B \
68 <Rx207800> \
FF15 <Rx15F0F4> \
8D96 <option:better_optimization_anm_list_base> \
31C0 \
89F1 \
E8 [codecave:on_tick_lists_fast] \
8D96 (u32:<option:better_optimization_anm_list_base>+32) \
31C0 \
89F1 \
E8 [codecave:on_tick_lists_fast] \
803D <Rx2078B8> 00 \
74 0B \
68 <Rx207800> \
FF15 <Rx15F0F8> \
5E \
B8 01000000 \
C3 \
"
		},
		"on_tick_ui_fast": {
			"access": "re",
			"code": "\
56 \
8B7424 08 \
803D <Rx2078B8> 00 \
74 0B \
68 <Rx207800> \
FF15 <Rx15F0F4> \
8D96 <option:better_optimization_anm_list_base> \
B8 08000000 \
89F1 \
E8 [codecave:on_tick_lists_fast] \
8D96 (u32:<option:better_optimization_anm_list_base>+32) \
B8 08000000 \
89F1 \
E8 [codecave:on_tick_lists_fast] \
803D <Rx2078B8> 00 \
74 0B \
68 <Rx207800> \
FF15 <Rx15F0F8> \
B8 01000000 \
5E \
C3 \
"
		}
	},
	"binhacks": {
		"ftol2_replace_fisttp": {
			"addr": "Rx7D458"
		},
		"allshl_amd": {
			"addr": [ "Rx6E575", "Rx6E596", "Rx6E6A6", "Rx6E6C5", "Rx6E7B9", "Rx6E903", "Rx6E91D", "Rx7026C", "Rx70461", "Rx705F8", "Rx70658", "Rx70A45", "Rx75DC4", "Rx7D520", "Rx7D6E0", "Rx85D4C" ]
		},
		"aullshr_amd": {
			"addr": [ "Rx6E627", "Rx6E756", "Rx6E937", "Rx7061F", "Rx76DA9", "Rx76DFF", "Rx76FC3", "Rx77081", "Rx77679" ]
		},
		"on_tick_world_fast": {
			"addr": "RxC3334"
		},
		"on_tick_ui_fast": {
			"addr": "RxC3357"
		},
		"draw_layer_0_fast": {
			"addr": "RxC3370"
		},
		"draw_layer_0_1_fast": {
			"addr": "RxC3380"
		},
		"draw_layer_1_2_fast": {
			"addr": "RxC3399"
		},
		"draw_layer_2_4_fast": {
			"addr": "RxC33B2"
		},
		"draw_layer_4_3_fast": {
			"addr": "RxC33CB"
		},
		"draw_layer_3_5_fast": {
			"addr": "RxC33E4"
		},
		"draw_layer_5_6_fast": {
			"addr": "RxC33FD"
		},
		"draw_layer_6_7_fast": {
			"addr": "RxC3416"
		},
		"draw_layer_7_8_fast": {
			"addr": "RxC342F"
		},
		"draw_layer_8_9_fast": {
			"addr": "RxC3448"
		},
		"draw_layer_9_fast": {
			"addr": "RxC345A"
		},
		"draw_layer_9_10_fast": {
			"addr": "RxC3465"
		},
		"draw_layer_10_11_fast": {
			"addr": "RxC347A"
		},
		"draw_layer_11_12_fast": {
			"addr": "RxC3493"
		},
		"draw_layer_12_13_fast": {
			"addr": "RxC34AC"
		},
		"draw_layer_13_14_fast": {
			"addr": "RxC34C5"
		},
		"draw_layer_14_15_fast": {
			"addr": "RxC34DE"
		},
		"draw_layer_15_16_fast": {
			"addr": "RxC34F7"
		},
		"draw_layer_16_17_fast": {
			"addr": "RxC3510"
		},
		"draw_layer_17_18_fast": {
			"addr": "RxC3529"
		},
		"draw_layer_18_19_fast": {
			"addr": "RxC3542"
		},
		"draw_layer_19_20_fast": {
			"addr": "RxC355B"
		},
		"draw_layer_20_21_fast": {
			"addr": "RxC3574"
		},
		"draw_layer_21_22_fast": {
			"addr": "RxC358D"
		},
		"draw_layer_22_23_fast": {
			"addr": "RxC35A6"
		},
		"draw_layer_23_24_fast": {
			"addr": "RxC35BF"
		},
		"draw_layer_24_25_fast": {
			"addr": "RxC35D8"
		},
		"draw_layer_25_27_fast": {
			"addr": "RxC35F1"
		},
		"draw_layer_27_28_fast": {
			"addr": "RxC360A"
		},
		"draw_layer_28_30_fast": {
			"addr": "RxC3623"
		},
		"draw_layer_30_31_fast": {
			"addr": "RxC363C"
		},
		"draw_layer_31_34_fast": {
			"addr": "RxC3655"
		},
		"draw_layer_34_35_fast": {
			"addr": "RxC366E"
		},
		"draw_layer_35_36_fast": {
			"addr": "RxC3687"
		},
		"draw_layer_36_fast": {
			"addr": "RxC369D"
		},
		"draw_layer_36_29_fast": {
			"addr": "RxC36A4"
		},
		"draw_layer_29_26_fast": {
			"addr": "RxC36B9"
		},
		"draw_layer_26_32_fast": {
			"addr": "RxC36D2"
		},
		"draw_layer_32_33_fast": {
			"addr": "RxC36EB"
		},
		"draw_layer_33_43_fast": {
			"addr": "RxC3704"
		},
		"draw_layer_43_44_fast": {
			"addr": "RxC371D"
		},
		"draw_layer_44_45_fast": {
			"addr": "RxC3736"
		},
		"draw_layer_45_46_fast": {
			"addr": "RxC374F"
		},
		"draw_layer_46_47_fast": {
			"addr": "RxC3768"
		},
		"draw_layer_47_48_fast": {
			"addr": "RxC3781"
		},
		"draw_layer_48_49_fast": {
			"addr": "RxC379A"
		},
		"draw_layer_49_50_fast": {
			"addr": "RxC37B3"
		},
		"draw_layer_50_51_fast": {
			"addr": "RxC37CC"
		},
		"draw_layer_51_fast": {
			"addr": "RxC37E5"
		},
		"draw_layer_C_fast": {
			"addr": [ "RxDC1CE", "RxDC1F8", "Rx11EE7D", "Rx11F2F1" ]
		},
		"add_vm_to_list_back_fast": {
			"addr": [ "RxBE652", "RxBE772" ]
		},
		"add_vm_to_list_front_fast": {
			"addr": [ "RxBE5C5", "RxBE6F5" ]
		},
		"anm_vm_mark_outside_fast_array": {
			"addr": "Rx72FD"
		},
		"destroy_all_vms_fast": {
			"addr": "RxC2790"
		},
		"cleanup_turbo_array": {
			"addr": "RxAA421"
		},
		"anm_vm_cleanup_patchA": {
			"addr": "Rx6CB6",
			"code": "<nop:7>"
		},
		"anm_vm_cleanup_patchB": {
			"addr": "Rx6CE2",
			"code": "<nop:14>"
		},
		"allocate_turbo_array": {
			"addr": "RxC2F2C",
			"code": "\
0F57C0 \
0F1187 1C070000 \
0F1187 2C070000 \
0F1187 3C070000 \
0F1187 4C070000 \
0F1387 5C070000 \
C787 38070000 (u32:<cpuid:avx2>?0x40:0x20) \
6A (u8:<cpuid:avx2>?0x20:0x10) \
6A (u8:<cpuid:avx2>?0x40:0x20) \
E8 [th_aligned_malloc] \
83C4 08 \
8987 3C070000 \
83C0 (u8:<cpuid:avx2>?0x20:0x10) \
8987 5C070000 \
68 <codecave:preprocess_layers> \
E8 [RxC7960] \
6A FF \
50 \
8348 04 02 \
8978 24 \
E8 [<option:register_on_draw_addr>] \
6690 \
"
		}
	}
}