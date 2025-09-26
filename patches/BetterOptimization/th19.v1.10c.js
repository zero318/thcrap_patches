{
	"options": {
		"better_optimization_anm_list_base": {
			"val": 0x714
		},
		"better_optimization_free_list_base": {
			"val": 0x64C076C
		},
		"render_layer_prep_addr": {
			"val": "RxCC030"
		},
		"draw_vm_addr": {
			"val": "RxC50F0"
		},
		"anm_manager_ptr_addr": {
			"val": "Rx1D19BC"
		},
		"game_thread_ptr_addr": {
			"val": "Rx1D1A54"
		},
		"base_game_memset_addr": {
			"val": "Rx65370"
		},
		"base_game_free_addr": {
			"val": "Rx7A4DB"
		},
		"run_anm_addr": {
			"val": "RxBD660"
		},
		"on_destroy_func_table_addr": {
			"val": "Rx196498"
		},
		"invalid_anm_fast_id": {
			"val": 0xFFFF
		},
		"register_on_draw_addr": {
			"val": "RxD5BB0"
		},
		"destroy_all_vms_addr": {
			"val": "RxD05A0"
		}
	},
	"binhacks": {
		"ftol2_replace_fisttp": {
			"addr": "Rx8790F"
		},
		"allshl_amd": {
			"addr": [ "Rx760D5", "Rx760F6", "Rx76206", "Rx76225", "Rx76319", "Rx76463", "Rx7647D", "Rx77DCC", "Rx77FC1", "Rx78158", "Rx781B8", "Rx785A5", "Rx7F2D7", "Rx879D7", "Rx87B97", "Rx909CC" ]
		},
		"aullshr_amd": {
			"addr": [ "Rx76187", "Rx762B6", "Rx76487", "Rx7817F", "Rx7F2BA", "Rx7F310", "Rx7F4D4", "Rx7F592", "Rx7FB8A" ]
		},
		"on_tick_world_fast": {
			"addr": "RxCCA30"
		},
		"on_tick_ui_fast": {
			"addr": "RxCC980"
		},
		"draw_layer_A_push": {
			"addr": [ "RxD13ED", "RxD14E7", "RxD1726" ]
		},
		"draw_layer_0_1_fast": {
			"addr": "RxD13FD"
		},
		"draw_layer_1_2_fast": {
			"addr": "RxD1416"
		},
		"draw_layer_2_4_fast": {
			"addr": "RxD142F"
		},
		"draw_layer_4_3_fast": {
			"addr": "RxD1448"
		},
		"draw_layer_3_5_fast": {
			"addr": "RxD1461"
		},
		"draw_layer_5_6_fast": {
			"addr": "RxD147A"
		},
		"draw_layer_6_7_fast": {
			"addr": "RxD1493"
		},
		"draw_layer_7_8_fast": {
			"addr": "RxD14AC"
		},
		"draw_layer_8_9_fast": {
			"addr": "RxD14C5"
		},
		"draw_layer_9_fast": {
			"addr": "RxD14D7"
		},
		"draw_layer_10_11_fast": {
			"addr": "RxD14F7"
		},
		"draw_layer_11_12_fast": {
			"addr": "RxD1510"
		},
		"draw_layer_12_13_fast": {
			"addr": "RxD1529"
		},
		"draw_layer_13_14_fast": {
			"addr": "RxD1542"
		},
		"draw_layer_14_15_fast": {
			"addr": "RxD155B"
		},
		"draw_layer_15_16_fast": {
			"addr": "RxD1574"
		},
		"draw_layer_16_17_fast": {
			"addr": "RxD158D"
		},
		"draw_layer_17_18_fast": {
			"addr": "RxD15A6"
		},
		"draw_layer_18_19_fast": {
			"addr": "RxD15BF"
		},
		"draw_layer_19_20_fast": {
			"addr": "RxD15D8"
		},
		"draw_layer_20_21_fast": {
			"addr": "RxD15F1"
		},
		"draw_layer_21_22_fast": {
			"addr": "RxD160A"
		},
		"draw_layer_22_23_fast": {
			"addr": "RxD1623"
		},
		"draw_layer_23_24_fast": {
			"addr": "RxD163C"
		},
		"draw_layer_24_25_fast": {
			"addr": "RxD1655"
		},
		"draw_layer_25_27_fast": {
			"addr": "RxD166E"
		},
		"draw_layer_27_28_fast": {
			"addr": "RxD1687"
		},
		"draw_layer_28_30_fast": {
			"addr": "RxD16A0"
		},
		"draw_layer_30_31_fast": {
			"addr": "RxD16B9"
		},
		"draw_layer_31_34_fast": {
			"addr": "RxD16D2"
		},
		"draw_layer_34_35_fast": {
			"addr": "RxD16EB"
		},
		"draw_layer_35_36_fast": {
			"addr": "RxD1704"
		},
		"draw_layer_36_fast": {
			"addr": "RxD171A"
		},
		"draw_layer_29_26_fast": {
			"addr": "RxD1736"
		},
		"draw_layer_26_32_fast": {
			"addr": "RxD174F"
		},
		"draw_layer_32_33_fast": {
			"addr": "RxD1768"
		},
		"draw_layer_33_43_fast": {
			"addr": "RxD1781"
		},
		"draw_layer_43_44_fast": {
			"addr": "RxD179A"
		},
		"draw_layer_44_45_fast": {
			"addr": "RxD17B3"
		},
		"draw_layer_45_46_fast": {
			"addr": "RxD17CC"
		},
		"draw_layer_46_47_fast": {
			"addr": "RxD17E5"
		},
		"draw_layer_47_48_fast": {
			"addr": "RxD17FE"
		},
		"draw_layer_48_49_fast": {
			"addr": "RxD1817"
		},
		"draw_layer_49_50_fast": {
			"addr": "RxD1830"
		},
		"draw_layer_50_51_fast": {
			"addr": "RxD1849"
		},
		"draw_layer_51_fast": {
			"addr": "RxD1862"
		},
		"draw_layer_C_fast": {
			"addr": [ "RxEC2F2", "RxEC31C", "Rx1322AD", "Rx132721" ]
		},
		"add_vm_to_list_back_fast": {
			"addr": [ "RxCBE12", "RxCBF3F" ]
		},
		"add_vm_to_list_front_fast": {
			"addr": [ "RxCBD85", "RxCBEB5" ]
		},
		"anm_vm_mark_outside_fast_array": {
			"addr": "Rx6F9D"
		},
		"destroy_all_vms_fast": {
			"addr": "RxD05A0"
		},
		"cleanup_turbo_array": {
			"addr": "RxB6F99"
		},
		"anm_vm_cleanup_patchA": {
			"addr": "Rx690E",
			"code": "<nop:7>"
		},
		"anm_vm_cleanup_patchB": {
			"addr": "Rx693A",
			"code": "<nop:8>"
		},
		"allocate_turbo_array": {
			"addr": "RxD0F9D",
			"code": "\
0F57C0 \
0F1187 0C070000 \
0F1187 1C070000 \
0F1187 2C070000 \
0F1187 3C070000 \
0F1387 4C070000 \
C687 28070000 (u8:<cpuid:avx2>?0x40:0x20) \
6A (u8:<cpuid:avx2>?0x20:0x10) \
6A (u8:<cpuid:avx2>?0x40:0x20) \
E8 [th_aligned_malloc] \
83C4 08 \
8987 2C070000 \
83C0 (u8:<cpuid:avx2>?0x20:0x10) \
8987 4C070000 \
68 <codecave:preprocess_layers> \
E8 [RxD5A60] \
6A FF \
50 \
8348 04 02 \
8978 24 \
E8 [<option:register_on_draw_addr>] \
6690 \
"
		},
		"faster_sinf": {
			"addr": "Rx4450",
			"code": "\
50 \
F30F5AC0 \
E8 [Rx80C4E] \
D91C24 \
F30F100424 \
58 \
C3 \
CCCC \
"
		},
		"faster_cosf": {
			"addr": "Rx4420",
			"code": "\
50 \
F30F5AC0 \
E8 [Rx80F1E] \
D91C24 \
F30F100424 \
58 \
C3 \
CCCC \
"
		},
		"faster_sin0": {
			"addr": [ "Rx1FA66", "Rx1FAE2", "Rx22F2E", "Rx2371B", "Rx27B3B", "Rx288E5", "Rx29378", "Rx2949A", "Rx2954D", "Rx29E2B", "Rx29F58", "Rx2A008", "Rx2AEAE", "Rx2C2EE", "Rx2C98B", "RxC3293", "RxC3383", "RxC3653", "RxC3973", "RxC43CA", "RxC46FA", "RxC495A", "RxC4D6A", "RxC82E4", "RxC88E7", "RxD3339", "RxD4C78", "RxD50EF", "RxD518F", "RxD521F", "RxD52AF", "RxD612F", "RxD6174", "RxD6252", "RxD6294", "RxE9B5C", "RxE9B85", "RxE9EFC", "RxE9F25", "RxEB396", "RxEB3C5", "RxEB556", "RxEB618", "RxEB6BD", "RxEB7F1", "RxEB829", "RxEB853", "RxEB8C3", "RxEB8ED", "RxEB95D", "RxEB987", "RxF3F27", "RxF3FFD", "Rx1095C0", "Rx1095F7", "Rx14AB9F", "Rx154347", "Rx16A2B1" ],
			"code": "\
<nop:5> \
E8 [Rx80C4E] \
"
		},
		"faster_sin1": {
			"addr": [ "Rx1F9EB", "RxEB359", "RxEB48C", "RxEB77A" ],
			"code": "\
0F28C1 \
6690 \
E8 [Rx80C4E] \
"
		},
		"faster_sin_jank_splitA": {
			"addr": "RxD61C4",
			"code": "<nop:5>"
		},
		"faster_sin_jank_splitB": {
			"addr": [ "RxD61CB", "RxD61E9" ],
			"code": "E8 [Rx80C4E]"
		},
		"faster_cos0": {
			"addr": [ "Rx1FA02", "Rx1FA7D", "Rx1FAF9", "Rx22F45", "Rx23732", "Rx27B52", "Rx288FC", "Rx2938F", "Rx294B1", "Rx29564", "Rx29E42", "Rx29F6F", "Rx2A01F", "Rx2AEC5", "Rx2C305", "Rx2C9A2", "RxC326A", "RxC335A", "RxC362A", "RxC394A", "RxC43E0", "RxC4710", "RxC4970", "RxC4D80", "RxC82FB", "RxC88FE", "RxD3350", "RxD5106", "RxD51A6", "RxD5236", "RxD52C6", "RxEB4B5", "RxEB7A3", "RxF3F00", "Rx14ABB6", "Rx15435E", "Rx16A3A3" ],
			"code": "\
<nop:5> \
E8 [Rx80F1E] \
"
		}
	}
}