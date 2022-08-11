{
	"title": "The Embodiment of Scarlet Devil Easy",
	"options": {
		"kernel32_dll_str": { "type": "s", "val": "kernel32.dll" },
		"thcrap_loader_str": { "type": "s", "val": "\\bin\\thcrap_loader.exe" },
		
		"eosd_multi_title_n_str": { "type": "s", "val": " \"{\\\"title\\\":\\\"The Embodiment of Scarlet Devil Normal\\\"}\"" },
		"eosd_multi_title_h_str": { "type": "s", "val": " \"{\\\"title\\\":\\\"The Embodiment of Scarlet Devil Hard\\\"}\"" },
		"eosd_multi_title_l_str": { "type": "s", "val": " \"{\\\"title\\\":\\\"The Embodiment of Scarlet Devil Lunatic\\\"}\"" },
		
		"OpenFileMappingA_str": { "type": "s", "val": "OpenFileMappingA" },
		"CreateFileMappingA_str": { "type": "s", "val": "CreateFileMappingA" },
		"MapViewOfFile_str": { "type": "s", "val": "MapViewOfFile" },
		"UnmapViewOfFile_str": { "type": "s", "val": "UnmapViewOfFile" },
		"CreateProcessA_str": { "type": "s", "val": "CreateProcessA" },
		"CloseHandle_str": { "type": "s", "val": "CloseHandle" },
		"Sleep_str": { "type": "s", "val": "Sleep" },
		
		"UnmapViewOfFile_ptr": { "type": "c", "val": "<codecave:eosd_multi_func_ptrs>" },
		"Sleep_ptr": { "type": "c", "val": "(<codecave:eosd_multi_func_ptrs> + 0x4)" },
		
		"eosd_multi_shared_data_ptr": { "type": "c", "val": "<codecave:eosd_multi_per_instance_data>" },
		"eosd_multi_shared_data_handle_ptr": { "type": "c", "val": "(<codecave:eosd_multi_per_instance_data> + 0x4)" },
		"eosd_multi_instance_index_ptr": { "type": "c", "val": "(<codecave:eosd_multi_per_instance_data> + 0x8)" },
		"eosd_multi_load_scorefile_func": { "type": "c", "val": "[*(<codecave:eosd_multi_per_instance_data> + 0xC)]" },
		"eosd_multi_log_filename_str_ptr_value": { "type": "c", "val": "(*(<codecave:eosd_multi_per_instance_data> + 0x10))" },
		"eosd_multi_replay_filename_str_ptr_value": { "type": "c", "val": "(*(<codecave:eosd_multi_per_instance_data> + 0x14))" },
		"eosd_multi_replay_default_filename_str_ptr_value": { "type": "c", "val": "(*(<codecave:eosd_multi_per_instance_data> + 0x18))" },
		"eosd_multi_replay_ud_filename_str_ptr_value": { "type": "c", "val": "(*(<codecave:eosd_multi_per_instance_data> + 0x1C))" },
		
		"eosd_multi_scorefile_catk_data_addr": { "type": "c", "val": "(*<codecave:eosd_multi_per_instance_data> + 0x10)" },
		"eosd_multi_scorefile_clrd_data_addr": { "type": "c", "val": "(*<codecave:eosd_multi_per_instance_data> + 0x1010)" },
		"eosd_multi_scorefile_pscr_data_addr": { "type": "c", "val": "(*<codecave:eosd_multi_per_instance_data> + 0x1070)" },
		
		"eosd_multi_replay_folder_files_str": { "type": "s", "val": "./multireplay/%s" },
		"eosd_multi_replay_folder_str": { "type": "s", "val": "./multireplay/" },
		"eosd_multi_replay_filename_E_str": { "type": "s", "val": "./multireplay/th6E_%2d.rpy" },
		"eosd_multi_replay_filename_N_str": { "type": "s", "val": "./multireplay/th6N_%2d.rpy" },
		"eosd_multi_replay_filename_H_str": { "type": "s", "val": "./multireplay/th6H_%2d.rpy" },
		"eosd_multi_replay_filename_L_str": { "type": "s", "val": "./multireplay/th6L_%2d.rpy" },
		"eosd_multi_replay_default_filename_E_str": { "type": "s", "val": "multireplay/th6E_00.rpy" },
		"eosd_multi_replay_default_filename_N_str": { "type": "s", "val": "multireplay/th6N_00.rpy" },
		"eosd_multi_replay_default_filename_H_str": { "type": "s", "val": "multireplay/th6H_00.rpy" },
		"eosd_multi_replay_default_filename_L_str": { "type": "s", "val": "multireplay/th6L_00.rpy" },
		"eosd_multi_replay_ud_filename_E_str": { "type": "s", "val": "th6E_ud????.rpy" },
		"eosd_multi_replay_ud_filename_N_str": { "type": "s", "val": "th6N_ud????.rpy" },
		"eosd_multi_replay_ud_filename_H_str": { "type": "s", "val": "th6H_ud????.rpy" },
		"eosd_multi_replay_ud_filename_L_str": { "type": "s", "val": "th6L_ud????.rpy" },
		"eosd_multi_log_filename_E_str": { "type": "s", "val": "./logE.txt" },
		"eosd_multi_log_filename_N_str": { "type": "s", "val": "./logN.txt" },
		"eosd_multi_log_filename_H_str": { "type": "s", "val": "./logH.txt" },
		"eosd_multi_log_filename_L_str": { "type": "s", "val": "./logL.txt" },
		
		"eosd_multi_mapping_name": {
			"type": "s",
			"val": "EoSDMulti"
		},
		"eosd_multi_scorefilename": {
			"type": "s",
			"val": "multiscore.dat"
		},
		"eosd_multi_sizeof_memshare": {
			"type": "u32",
			"val": 0x17F0
		}
	},
	"codecaves": {
		"eosd_multi_func_ptrs": {
			"access": "r",
			"size": 4,
			"count": 2
		},
		"eosd_multi_constant_pool": {
			"access": "r",
			"code": "\
1F000F000000000000000000<option:eosd_multi_sizeof_memshare> \
FFFFFFFF000000000400000000000000 \
<option:eosd_multi_log_filename_E_str><option:eosd_multi_replay_filename_E_str><option:eosd_multi_replay_default_filename_E_str><option:eosd_multi_replay_ud_filename_E_str> \
<option:eosd_multi_log_filename_N_str><option:eosd_multi_replay_filename_N_str><option:eosd_multi_replay_default_filename_N_str><option:eosd_multi_replay_ud_filename_N_str> \
<option:eosd_multi_log_filename_H_str><option:eosd_multi_replay_filename_H_str><option:eosd_multi_replay_default_filename_H_str><option:eosd_multi_replay_ud_filename_H_str> \
<option:eosd_multi_log_filename_L_str><option:eosd_multi_replay_filename_L_str><option:eosd_multi_replay_default_filename_L_str><option:eosd_multi_replay_ud_filename_L_str> \
<option:eosd_multi_title_n_str><option:eosd_multi_title_h_str><option:eosd_multi_title_l_str> \
"
		},
		"eosd_multi_per_instance_data": {
			"access": "rw",
			"size": 0x20
		},
		"eosd_multi_spawn_children_processes": {
			"access": "re",
			"code": "\
55 \
53 \
57 \
56 \
83EC 6C \
895424 14 \
894C24 10 \
E8 [runconfig_thcrap_dir_get] \
89C7 \
890424 \
E8 [runconfig_runcfg_fn_get] \
89C3 \
894424 0C \
E8 [runconfig_game_get] \
89C6 \
894424 04 \
57 \
E8 [th_strlen] \
83C4 04 \
89C7 \
53 \
E8 [th_strlen] \
83C4 04 \
89C5 \
56 \
E8 [th_strlen] \
83C4 04 \
894424 08 \
8D0C2F \
8D4C08 6E \
51 \
E8 [th_malloc] \
83C4 04 \
89C3 \
40 \
C603 22 \
57 \
FF7424 04 \
50 \
E8 [th_memcpy] \
83C4 0C \
8D743B 01 \
6A 16 \
68 <option:thcrap_loader_str> \
56 \
E8 [th_memcpy] \
83C4 0C \
66:C7443B 17 2220 \
8D443B 1A \
891C24 \
C6443B 19 22 \
55 \
FF7424 10 \
50 \
E8 [th_memcpy] \
83C4 0C \
8D7C35 19 \
66:C74435 19 2220 \
8D4435 1B \
8B7424 08 \
56 \
FF7424 08 \
50 \
E8 [th_memcpy] \
83C4 0C \
8D443E 02 \
894424 04 \
68 <option:CreateProcessA_str> \
8B5C24 14 \
53 \
8B7424 1C \
FFD6 \
89C7 \
68 <option:CloseHandle_str> \
53 \
FFD6 \
89C3 \
8D7424 5C \
BD F4FFFFFF \
0F1F80 00000000 \
FFB5 (<codecave:eosd_multi_constant_pool> + 0x6C) \
FF7424 08 \
E8 [th_strcpy] \
83C4 08 \
0F57C0 \
0F1106 \
0F1146 F0 \
0F1146 E0 \
0F1146 D0 \
0F1146 C0 \
C74424 18 44000000 \
83EC 28 \
897424 24 \
8D4424 40 \
894424 20 \
0F114424 08 \
8B4424 28 \
894424 04 \
C74424 1C 00000000 \
C74424 18 00000000 \
C70424 00000000 \
FFD7 \
FF7424 5C \
FFD3 \
FF7424 60 \
FFD3 \
83C5 04 \
75 8A \
FF3424 \
E8 [th_free] \
83C4 70 \
5E \
5F \
5B \
5D \
C3 \
"
		},
		"eosd_multi_setup_patch_init": {
			"access": "re",
			"export": true,
			"code": "\
55 \
53 \
57 \
56 \
68 <option:kernel32_dll_str> \
E8 [th_GetModuleHandleA] \
89C6 \
BF <th_GetProcAddress> \
68 <option:UnmapViewOfFile_str> \
50 \
FFD7 \
A3 <option:UnmapViewOfFile_ptr> \
68 <option:OpenFileMappingA_str> \
56 \
FFD7 \
68 <option:eosd_multi_mapping_name> \
6A 00 \
68 1F000F00 \
FFD0 \
89C3 \
85C0 \
0F84 7C000000 \
891D <option:eosd_multi_shared_data_handle_ptr> \
68 <option:MapViewOfFile_str> \
56 \
FFD7 \
83EC 14 \
0F2805 <codecave:eosd_multi_constant_pool> \
0F114424 04 \
891C24 \
FFD0 \
89C3 \
A3 <option:eosd_multi_shared_data_ptr> \
68 <option:Sleep_str> \
56 \
FFD7 \
89C5 \
A3 <option:Sleep_ptr> \
B0 01 \
F0:0FC003 \
A2 <option:eosd_multi_instance_index_ptr> \
0FB6C8 \
C1E1 04 \
0F2881 (<codecave:eosd_multi_constant_pool> + 0x20) \
0F2905 (<codecave:eosd_multi_per_instance_data> + 0x10) \
B9 <codecave:eosd_multi_load_scorefile_main> \
BA <codecave:eosd_multi_load_scorefile_sub> \
84C0 \
0F44D1 \
8915 (<codecave:eosd_multi_per_instance_data> + 0xC) \
74 3D \
6A 00 \
FFD5 \
803B 04 \
72 F7 \
5E \
5F \
5B \
5D \
C3 \
68 <option:CreateFileMappingA_str> \
56 \
FFD7 \
83EC 18 \
0F2805 (<codecave:eosd_multi_constant_pool> + 0x10) \
0F110424 \
C74424 14 <option:eosd_multi_mapping_name> \
C74424 10 <option:eosd_multi_sizeof_memshare> \
FFD0 \
89C3 \
E9 55FFFFFF \
89F1 \
89FA \
E8 [codecave:eosd_multi_spawn_children_processes] \
EB B8 \
"
		},
		"eosd_multi_shutdown_patch_exit": {
			"access": "re",
			"export": true,
			"code": "\
56 \
8B35 <option:eosd_multi_shared_data_ptr> \
F0:FE0E \
<nop:6>  \
6A 01 \
FF15 <option:Sleep_ptr> \
803E 00 \
75 F3 \
56 \
FF15 <option:UnmapViewOfFile_ptr> \
5E \
C3 \
",
		},
		"eosd_multi_load_scorefile_sub": {
			"access": "re",
			"code": "\
56 \
8B35 <option:eosd_multi_shared_data_ptr> \
F0:FE46 01 \
<nop:5> \
6A 00 \
FF15 <option:Sleep_ptr> \
807E 01 00 \
79 F2 \
817C24 04 E6BC4100 \
B8 9FBD4100 \
B9 F4A54300 \
0F44C8 \
894C24 04 \
F0:FE46 01 \
0F1F4400 00 \
807E 01 00 \
74 0A \
6A 00 \
FF15 <option:Sleep_ptr> \
EB F0 \
5E \
C3 \
"
		},
		"eosd_multi_load_scorefile_main": {
			"access": "re",
			"code": "\
56 \
8B35 <option:eosd_multi_shared_data_ptr> \
<nop:9> \
807E 01 03 \
74 0A \
6A 00 \
FF15 <option:Sleep_ptr> \
EB F0 \
5E \
E9 [0x42B0D9] \
"
		},
		"eosd_multi_free_scorefile": {
			"access": "re",
			"code": "\
56 \
FF7424 08 \
E8 [0x42B7DC] \
83C4 04 \
8B35 <option:eosd_multi_shared_data_ptr> \
F0:F65E 01 \
<nop:9> \
6A 00 \
FF15 <option:Sleep_ptr> \
807E 01 00 \
75 F2 \
5E \
C3 \
"
		}
	},
	"binhacks": {
		"remove_mutexA": {
			"addr": 0x421900,
			"code": "31C0C3",
			"expected": "558BEC",
		},
		"dont_skip_draw": {
			"addr": 0x4206E9,
			"code": "<nop:16>",
			"expected": "\
8B45 C0 \
8378 08 00 \
75 07 \
33C0 \
E9 49040000 \
"
		},
		"eosd_multi_change_scorefile": {
			"addr": [ 0x41BCDD, 0x42BC16, 0x42F480, 0x43A5C1 ],
			"code": "<option:eosd_multi_scorefilename>",
			"expected": "<0x46AF94>"
		},
		"eosd_multi_change_replay_folder_files_str": {
			"addr": 0x438401,
			"code": "<option:eosd_multi_replay_folder_files_str>",
			"expected": "<0x46C3C0>"
		},
		"eosd_multi_change_replay_folder_str": {
			"addr": [ 0x438364, 0x43836F ],
			"code": "<option:eosd_multi_replay_folder_str>",
			"expected": "<0x46C3DC>"
		},
		"eosd_multi_change_replay_filename": {
			"addr": [ 0x42CD3F, 0x42C6D5, 0x4382B5 ],
			"code": "<option:eosd_multi_replay_filename_str_ptr_value>",
			"expected": "<0x46BC20>"
		},
		"eosd_multi_change_replay_default_filename": {
			"addr": 0x41C146,
			"code": "<option:eosd_multi_replay_default_filename_str_ptr_value>",
			"expected": "<0x46AE34>"
		},
		"eosd_multi_change_replay_ud_filename": {
			"addr": 0x438381,
			"code": "<option:eosd_multi_replay_ud_filename_str_ptr_value>",
			"expected": "<0x46C3CC>"
		},
		"eosd_multi_change_log_filename": {
			"addr": 0x42199F,
			"code": "<option:eosd_multi_log_filename_str_ptr_value>",
			"expected": "<0x46B510>"
		},
		"eosd_multi_change_scorefile_loading": {
			"addr": [ 0x41BCE2, 0x43A5C6 ],
			"code": "<option:eosd_multi_load_scorefile_func>",
			"expected": "[0x42B0D9]"
		},
		"eosd_multi_change_scorefile_unloading": {
			"addr": [ 0x41BD9B, 0x43A5F0 ],
			"code": "[codecave:eosd_multi_free_scorefile]",
			"expected": "[0x42B7DC]"
		},
		"eosd_multi_catk_patch_A": {
			"addr": [ 0x4096E1, 0x40988B, 0x42B9F0, 0x42F4F8 ],
			"code": "(*<codecave:eosd_multi_per_instance_data> + 0x10)",
			"expected": "<0x69BCD0>"
		},
		"eosd_multi_catk_patch_B": {
			"addr": [ 0x42E268, 0x42EA57, 0x42EB2F ],
			"code": "(*<codecave:eosd_multi_per_instance_data> + 0x4C)",
			"expected": "<0x69BD0C>"
		},
		"eosd_multi_catk_patch_C": {
			"addr": [ 0x42E2AD, 0x42E2B0 ], // One of these two will always fail, this is normal
			"code": "(*<codecave:eosd_multi_per_instance_data> + 0x28)",
			"expected": "<0x69BCE8>"
		},
		"eosd_multi_catk_patch_D": {
			"addr": [ 0x42EA74, 0x42EB3D ],
			"code": "(*<codecave:eosd_multi_per_instance_data> + 0x4E)",
			"expected": "<0x69BD0E>"
		},
		"eosd_multi_catk_patch_E": {
			"addr": [ 0x41BC4F, 0x41BD14 ],
			"code": "C7C0 (*<codecave:eosd_multi_per_instance_data> + 0x10)",
			"expected": "8B45 08 // 83C0 30"
		},
		"eosd_multi_clrd_patch_A": {
			"addr": [ 0x40FC79, 0x410C20, 0x410C44, 0x42E04E ],
			"code": "(*<codecave:eosd_multi_per_instance_data> + 0x101C)",
			"expected": "<0x69CCDC>"
		},
		"eosd_multi_clrd_patch_B": {
			"addr": [ 0x40FC90, 0x410C5C, 0x410C80, 0x42E05F, 0x437100, 0x437133, 0x437197, 0x4371CA, 0x4399EC, 0x439A0E ],
			"code": "(*<codecave:eosd_multi_per_instance_data> + 0x1021)",
			"expected": "<0x69CCE1>"
		},
		"eosd_multi_clrd_patch_C": {
			"addr": [ 0x42B98C, 0x42F509, 0x43A5CF ],
			"code": "(*<codecave:eosd_multi_per_instance_data> + 0x1010)",
			"expected": "<0x69CCD0>"
		},
		"eosd_multi_clrd_patch_D": {
			"addr": 0x41BD25,
			"code": "C7C0 (*<codecave:eosd_multi_per_instance_data> + 0x1010) <nop:2>",
			"expected": "8B45 08 // 05 30100000"
		},
		"eosd_multi_clrd_patch_E": {
			"addr": 0x41BE84,
			"code": "0FB681 (*<codecave:eosd_multi_per_instance_data> + 0x101C) <nop:4>",
			"expected": "8B45 08 // 0FB68408 3C100000"
		},
		"eosd_multi_clrd_patch_F": {
			"addr": 0x41BEB5,
			"code": "8882 (*<codecave:eosd_multi_per_instance_data> + 0x101C) <nop:4>",
			"expected": "8B4D 08 // 888411 3C100000"
		},
		"eosd_multi_clrd_patch_G": {
			"addr": 0x41BECD,
			"code": "0FB681 (*<codecave:eosd_multi_per_instance_data> + 0x1021) <nop:4>",
			"expected": "8B45 08 // 0FB68408 41100000"
		},
		"eosd_multi_clrd_patch_H": {
			"addr": 0x41BEFE,
			"code": "8882 (*<codecave:eosd_multi_per_instance_data> + 0x1021) <nop:4>",
			"expected": "8B4D 08 // 888411 41100000"
		},
		"eosd_multi_pscr_patch_A": {
			"addr": [ 0x42BA61, 0x42F51A, 0x42F557, 0x42F594, 0x439A8E, 0x43A5DE ],
			"code": "(*<codecave:eosd_multi_per_instance_data> + 0x1070)",
			"expected": "<0x69CD30>"
		},
		"eosd_multi_pscr_patch_B": {
			"addr": 0x41BD38,
			"code": "C7C0 (*<codecave:eosd_multi_per_instance_data> + 0x1070) <nop:2>",
			"expected": "8B45 08 // 05 90100000"
		},
		"eosd_multi_pscr_patch_C": {
			"addr": 0x41BD70,
			"code": "05 (*<codecave:eosd_multi_per_instance_data> + 0x1070) <nop:5>",
			"expected": "8B4D 08 // 8D8401 90100000"
		},
		"eosd_framelimiter_fix": {
			"addr": "Rx208FE",
			"title": "Fix the EoSD frame limiter without needing vpatch",
			"code": "6A 01 / FF15 58A24600 / 8B45 B4 / 89C2 / 2B15 046C6C00 / A3 046C6C00 / 0F42D0 / 660F6EC0 / F20F1015 D8FF4600 / 660F56C2 / F20F5CC2 / F20F100D F86B6C00 / F20F5DC8 / F20F110D F86B6C00 / F20F5CC1 / 660F5405 40434700 / 660F2E05 C0B14600 / 72 54 / F20F101425 C0B14600 / F20F58CA / F20F5CC2 / 660F2EC2 / 73 F2 / F20F110D F86B6C00 / A0 4B6E6C00 / 8B4D C0 / 3A41 10 / 0F8C 84000000 / E9 81FEFFFF / CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"
		}
	}
}