{
	"options": {
		"eosd_multi_bombs_never_increase": {
			"type": "u8",
			"val": false
		},
		"eosd_multi_bombs_never_decrease": {
			"type": "u8",
			"val": false
		},
		"eosd_multi_lives_never_increase": {
			"type": "u8",
			"val": false
		},
		"eosd_multi_lives_never_decrease": {
			"type": "u8",
			"val": false
		},
		"eosd_multi_infinite_continues": {
			"type": "u8",
			"val": false
		},
		"eosd_multi_continues_count_up": {
			"type": "u8",
			"val": false
		},

		"eosd_multi_enable_xinput": {
			"type": "u32",
			"val": true
		},
		"eosd_multi_automatic_difficulty_select": {
			"type": "u8",
			"val": true
		},

		"kernel32_dll_str": { "type": "s", "val": "kernel32.dll" },
		"user32_dll_str": { "type": "s", "val": "USER32.dll" },
		"thcrap_loader_str": { "type": "s", "val": "\\bin\\thcrap_loader.exe" },

		"xinput1_4_dll_str": { "type": "s", "val": "xinput1_4.dll" },
		"xinput1_3_dll_str": { "type": "s", "val": "xinput1_3.dll" },
		"xinput9_1_0_dll_str": { "type": "s", "val": "XInput9_1_0.dll" },

		"OpenFileMappingA_str": { "type": "s", "val": "OpenFileMappingA" },
		"CreateFileMappingA_str": { "type": "s", "val": "CreateFileMappingA" },
		"MapViewOfFile_str": { "type": "s", "val": "MapViewOfFile" },
		"UnmapViewOfFile_str": { "type": "s", "val": "UnmapViewOfFile" },
		"CreateProcessA_str": { "type": "s", "val": "CreateProcessA" },
		"CloseHandle_str": { "type": "s", "val": "CloseHandle" },
		"Sleep_str": { "type": "s", "val": "Sleep" },
		"LoadLibraryA_str": { "type": "s", "val": "LoadLibraryA" },
		"XInputGetState_str": { "type": "s", "val": "XInputGetState" },
		"GetKeyState_str": { "type": "s", "val": "GetKeyState" },

		"UnmapViewOfFile_ptr": { "type": "c", "val": "(<codecave:eosd_multi_constant_pool> + 0xAC)" },
		"XInputGetState_ptr": { "type": "c", "val": "(<codecave:eosd_multi_constant_pool> + 0xB0)" },
		"Sleep_ptr": { "type": "c", "val": "(<codecave:eosd_multi_constant_pool> + 0xB4)" },
		"GetKeyState_ptr": { "type": "c", "val": "(<codecave:eosd_multi_constant_pool> + 0xB8)" },

		"eosd_multi_process_xinput_ptr_addr": { "type": "c", "val": "(<codecave:eosd_multi_constant_pool> + 0xA8)" },

		"eosd_multi_instance_index_ptr": { "type": "c", "val": "<codecave:eosd_multi_per_instance_data>" },
		"eosd_multi_shared_data_ptr": { "type": "c", "val": "(<codecave:eosd_multi_per_instance_data> + 0x4)" },

		"eosd_multi_replay_folder_files_str": { "type": "s", "val": "./multireplay/%s" },
		"eosd_multi_replay_folder_str": { "type": "s", "val": "./multireplay/" },
		"eosd_multi_title_N_str": { "type": "s", "val": " \"{\\\"title\\\":\\\"The Embodiment of Scarlet Devil Normal\\\"}\"" },
		"eosd_multi_title_H_str": { "type": "s", "val": " \"{\\\"title\\\":\\\"The Embodiment of Scarlet Devil Hard\\\"}\"" },
		"eosd_multi_title_L_str": { "type": "s", "val": " \"{\\\"title\\\":\\\"The Embodiment of Scarlet Devil Lunatic\\\"}\"" },
		"eosd_multi_title_new_E_str": { "type": "s", "val": "The Embodiment of Scarlet Devil Easy" },
		"eosd_multi_title_new_N_str": { "type": "s", "val": "The Embodiment of Scarlet Devil Normal" },
		"eosd_multi_title_new_H_str": { "type": "s", "val": "The Embodiment of Scarlet Devil Hard" },
		"eosd_multi_title_new_L_str": { "type": "s", "val": "The Embodiment of Scarlet Devil Lunatic" },
		"eosd_multi_score_dat_filename_E_str": { "type": "s", "val": "multiscoreE.dat" },
		"eosd_multi_score_dat_filename_N_str": { "type": "s", "val": "multiscoreN.dat" },
		"eosd_multi_score_dat_filename_H_str": { "type": "s", "val": "multiscoreH.dat" },
		"eosd_multi_score_dat_filename_L_str": { "type": "s", "val": "multiscoreL.dat" },
		"eosd_multi_log_filename_E_str": { "type": "s", "val": "./logE.txt" },
		"eosd_multi_log_filename_N_str": { "type": "s", "val": "./logN.txt" },
		"eosd_multi_log_filename_H_str": { "type": "s", "val": "./logH.txt" },
		"eosd_multi_log_filename_L_str": { "type": "s", "val": "./logL.txt" },
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

		"eosd_multi_score_dat_filename": { "type": "c", "val": "(*(<codecave:eosd_multi_constant_pool> + 0x30 + 0x4 * *<codecave:eosd_multi_per_instance_data>))" },
		"eosd_multi_log_filename": { "type": "c", "val": "(*(<codecave:eosd_multi_constant_pool> + 0x40 + 0x4 * *<codecave:eosd_multi_per_instance_data>))" },
		"eosd_multi_replay_filename": { "type": "c", "val": "(*(<codecave:eosd_multi_constant_pool> + 0x50 + 0x4 * *<codecave:eosd_multi_per_instance_data>))" },
		"eosd_multi_replay_default_filename": { "type": "c", "val": "(*(<codecave:eosd_multi_constant_pool> + 0x60 + 0x4 * *<codecave:eosd_multi_per_instance_data>))" },
		"eosd_multi_replay_ud_filename": { "type": "c", "val": "(*(<codecave:eosd_multi_constant_pool> + 0x70 + 0x4 * *<codecave:eosd_multi_per_instance_data>))" },
		"eosd_multi_title_new": { "type": "c", "val": "(*(<codecave:eosd_multi_constant_pool> + 0x80 + 0x4 * *<codecave:eosd_multi_per_instance_data>))" },

		"eosd_multi_vpatch_override_str": { "type": "s", "val": "eosd_multi_vpatch_override" },
		"eosd_multi_mapping_name": { "type": "s", "val": "EoSDMulti" },
		"eosd_multi_sizeof_memshare": { "type": "u32", "val": 0x1 },
		"eosd_multi_max_count": { "type": "u8", "val": 4 }
	},
	"title": "The Embodiment of Scarlet Devil Easy",
	"codecaves": {
		"eosd_multi_invalid_option_protection_patch_init": {
			"enable": "!<option:eosd_multi_sizeof_memshare> || !<option:eosd_multi_max_count> || <option:eosd_multi_max_count> > 4",
			"access": "re",
			"code": "CC"
		},
		"eosd_multi_constant_pool": {
			"access": "r",
			"size": 0xBC,
			"code": "\
1F000F000000000000000000<option:eosd_multi_sizeof_memshare> \
FFFFFFFF000000000400000000000000 \
00000000FFFF000000000000FFFF0000 \
<option:eosd_multi_score_dat_filename_E_str><option:eosd_multi_score_dat_filename_N_str><option:eosd_multi_score_dat_filename_H_str><option:eosd_multi_score_dat_filename_L_str> \
<option:eosd_multi_log_filename_E_str><option:eosd_multi_log_filename_N_str><option:eosd_multi_log_filename_H_str><option:eosd_multi_log_filename_L_str> \
<option:eosd_multi_replay_filename_E_str><option:eosd_multi_replay_filename_N_str><option:eosd_multi_replay_filename_H_str><option:eosd_multi_replay_filename_L_str> \
<option:eosd_multi_replay_default_filename_E_str><option:eosd_multi_replay_default_filename_N_str><option:eosd_multi_replay_default_filename_H_str><option:eosd_multi_replay_default_filename_L_str> \
<option:eosd_multi_replay_ud_filename_E_str><option:eosd_multi_replay_ud_filename_N_str><option:eosd_multi_replay_ud_filename_H_str><option:eosd_multi_replay_ud_filename_L_str> \
<option:eosd_multi_title_new_E_str><option:eosd_multi_title_new_N_str><option:eosd_multi_title_new_H_str><option:eosd_multi_title_new_L_str> \
<option:eosd_multi_title_N_str><option:eosd_multi_title_H_str><option:eosd_multi_title_L_str> \
<option:xinput1_4_dll_str><option:xinput1_3_dll_str><option:xinput9_1_0_dll_str> \
(<option:eosd_multi_enable_xinput>?<codecave:eosd_multi_process_xinput>:0) \
"
		},
		"eosd_multi_per_instance_data": {
			"access": "rw",
			"size": 0x8
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
8D4C08 58 \
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
BD (-4 * (<option:eosd_multi_max_count> - 1)) \
<nop:7> \
FFB5 (<codecave:eosd_multi_constant_pool> + 0x90 + 4 * (<option:eosd_multi_max_count> - 1)) \
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
89C7 \
BE <th_GetProcAddress> \
68 <option:UnmapViewOfFile_str> \
50 \
FFD6 \
A3 <option:UnmapViewOfFile_ptr> \
68 <option:OpenFileMappingA_str> \
57 \
FFD6 \
68 <option:eosd_multi_mapping_name> \
6A 00 \
68 1F000F00 \
FFD0 \
89C3 \
85C0 \
0F84 AA000000 \
68 <option:MapViewOfFile_str> \
57 \
FFD6 \
83EC 14 \
0F2805 <codecave:eosd_multi_constant_pool> \
0F114424 04 \
891C24 \
FFD0 \
89C3 \
A3 <option:eosd_multi_shared_data_ptr> \
68 <option:Sleep_str> \
57 \
FFD6 \
89C5 \
A3 <option:Sleep_ptr> \
B0 01 \
F0:0FC003 \
A2 <option:eosd_multi_instance_index_ptr> \
(u16:(<option:eosd_multi_max_count> - 1)?0xC084:0x18EB) \
0F84 94000000 \
<nop:9> \
6A 00 \
FFD5 \
803B <option:eosd_multi_max_count> \
72 F7 \
C7C1 <option:eosd_multi_enable_xinput> \
E3 2F \
68 <option:LoadLibraryA_str> \
57 \
FFD6 \
89C7 \
BB F4FFFFFF \
FFB3 (<codecave:eosd_multi_constant_pool> + 0xA8) \
FFD7 \
85C0 \
75 07 \
83C3 04 \
75 EF \
EB 0D \
68 <option:XInputGetState_str> \
50 \
FFD6 \
A3 <option:XInputGetState_ptr> \
68 <option:user32_dll_str> \
E8 [th_GetModuleHandleA] \
68 <option:GetKeyState_str> \
50 \
FFD6 \
A3 <option:GetKeyState_ptr> \
5E \
5F \
5B \
5D \
C3 \
68 <option:CreateFileMappingA_str> \
57 \
FFD6 \
83EC 18 \
0F2805 (<codecave:eosd_multi_constant_pool> + 0x10) \
0F110424 \
C74424 14 <option:eosd_multi_mapping_name> \
C74424 10 <option:eosd_multi_sizeof_memshare> \
FFD0 \
89C3 \
E9 27FFFFFF \
89F9 \
89F2 \
E8 [codecave:eosd_multi_spawn_children_processes] \
E9 67FFFFFF \
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
		"eosd_multi_check_draw_conditions": {
			"access": "re",
			"code": "\
68 91000000 \
FF15 <option:GetKeyState_ptr> \
83E0 01 \
D1E8 \
C3 \
"
		},
		"eosd_multi_process_xinput": {
			"enable": "<option:eosd_multi_enable_xinput>",
			"access": "re",
			"code": "\
56 \
83EC 10 \
89E6 \
56 \
6A 00 \
FF15 <option:XInputGetState_ptr> \
85C0 \
75 66 \
8B4424 1C \
0FB74C24 04 \
89CA \
C1EA 0C \
89CE \
C1EE 04 \
83E6 30 \
09D6 \
89CA \
83E2 20 \
8D1456 \
89CE \
83E6 10 \
8D14F2 \
89CE \
81E6 C0000000 \
8D14B2 \
83E1 0F \
C1E1 0A \
09D1 \
0FB7C9 \
8948 20 \
0FB74C24 08 \
81F1 00800000 \
8948 08 \
0FB74C24 0A \
81F1 FF7F0000 \
8948 0C \
31C0 \
83C4 10 \
5E \
C2 0800 \
56 \
6A 01 \
FF15 <option:XInputGetState_ptr> \
85C0 \
74 8D \
56 \
6A 02 \
FF15 <option:XInputGetState_ptr> \
85C0 \
74 80 \
56 \
6A 03 \
FF15 <option:XInputGetState_ptr> \
85C0 \
0F84 6FFFFFFF \
EB CC \
"
		},
		"eosd_multi_xinput_fix_joycaps": {
			"enable": "<option:eosd_multi_enable_xinput>",
			"access": "re",
			"code": "\
0F2805 (<codecave:eosd_multi_constant_pool> + 0x20) \
0F1105 <0x69D784> \
8BE5 \
5D \
C3 \
"
		}
	},
	"breakpoints": {
		"runtime_apply_stage_by_name#eosd_multi_vpatch_override": {
			"addr": 0x4206E9,
			"cavesize": 7,
			"stage_name": "<option:eosd_multi_vpatch_override_str>",
			"stages_list": {
				"eosd_multi_vpatch_override": {
					"base_addr": "Rx0",
					"binhacks": {
						"eosd_multi_check_draw_state_vpatch_override": {
							"addr": 0x4206E9,
							"code": "\
837C21 08 00 \
75 09 \
E8 [<codecave:eosd_multi_check_draw_conditions>] \
73 02 \
C9 \
C3 \
",
							"expected": "\
E8 ???????? \
90 \
90 \
75 07 \
33C0 \
E9 ???????? \
"
						}
					}
				}
			}
		}
	},
	"binhacks": {
		"eosd_multi_remove_mutex": {
			"addr": 0x421900,
			"code": "31C0C3",
			"expected": "55 // 8BEC",
		},
		"eosd_multi_change_scorefile": {
			"addr": [ 0x41BCDD, 0x42BC16, 0x42F480, 0x43A5C1 ],
			"code": "<option:eosd_multi_score_dat_filename>",
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
			"code": "<option:eosd_multi_replay_filename>",
			"expected": "<0x46BC20>"
		},
		"eosd_multi_change_replay_default_filename": {
			"addr": 0x41C146,
			"code": "<option:eosd_multi_replay_default_filename>",
			"expected": "<0x46AE34>"
		},
		"eosd_multi_change_replay_ud_filename": {
			"addr": 0x438381,
			"code": "<option:eosd_multi_replay_ud_filename>",
			"expected": "<0x46C3CC>"
		},
		"eosd_multi_change_log_filename": {
			"addr": 0x42199F,
			"code": "<option:eosd_multi_log_filename>",
			"expected": "<0x46B510>"
		},
		"eosd_multi_infinite_continues": {
			"enable": "<option:eosd_multi_infinite_continues>",
			"addr": 0x4028E2,
			"code": "<nop:5>",
			"expected": "83F8 03 // 7D 09"
		},
		"eosd_multi_continues_count_down": {
			"enable": "<option:eosd_multi_infinite_continues> && !<option:eosd_multi_continues_count_up>",
			"addr": 0x40314F,
			"code": "\
0FB605 <0x69D4B8> \
B9 1B000000 \
31D2 \
29C1 \
0F42CA \
6BC1 38 \
0305 <0x6D4588> \
8B55 F8 \
8982 08050000 \
",
			"expected": "\
33C9 \
8A0D <0x69D4B8> \
BA 1E000000 \
2BD1 \
6BD2 38 \
A1 <0x6D4588> \
03C2 \
8B4D F8 \
8981 08050000 \
8B55 F8 \
"
		},
		"eosd_multi_continues_count_up": {
			"enable": "<option:eosd_multi_infinite_continues> && <option:eosd_multi_continues_count_up>",
			"addr": 0x40314F,
			"code": "\
0FB605 <0x69D4B8> \
31C9 \
B1 6B \
83C0 1B \
39C8 \
0F47C1 \
6BC0 38 \
0305 <0x6D4588> \
8B55 F8 \
8982 08050000 \
",
			"expected": "\
33C9 \
8A0D <0x69D4B8> \
BA 1E000000 \
2BD1 \
6BD2 38 \
A1 <0x6D4588> \
03C2 \
8B4D F8 \
8981 08050000 \
8B55 F8 \
"
		},
		"eosd_multi_lives_never_decrease": {
			"enable": "<option:eosd_multi_lives_never_decrease>",
			"addr": 0x428DE6,
			"code": "<nop:12>",
			"expected": "A0 <0x69D4BA> // 2C 01 // A2 <0x69D4BA>"
		},
		"eosd_multi_lives_never_increase_A": {
			"enable": "<option:eosd_multi_lives_never_increase>",
			"addr": 0x41FF49,
			"code": "<nop:12>",
			"expected": "A0 <0x69D4BA> // 04 01 // A2 <0x69D4BA>"
		},
		"eosd_multi_lives_never_increase_B": {
			"enable": "<option:eosd_multi_lives_never_increase>",
			"addr": 0x41B9C7,
			"code": "<nop:20>",
			"expected": "8B45 08 // 8A80 1A180000 // 04 01 // 8B4D 08 // 8881 1A180000"
		},
		"eosd_multi_bombs_never_increase": {
			"enable": "<option:eosd_multi_bombs_never_increase>",
			"addr": 0x41FF0E,
			"code": "<nop:12>",
			"expected": "A0 <0x69D4BB> // 04 01 // A2 <0x69D4BB>"
		},
		"eosd_multi_bombs_never_decrease": {
			"enable": "<option:eosd_multi_bombs_never_decrease>",
			"addr": 0x4289DB,
			"code": "<nop:15>",
			"expected": "8A15 <0x69D4BB> // 80EA 01 // 8815 <0x69D4BB>"
		},
		"eosd_multi_title_en_compat": {
			"addr": [ 0x420CA7, 0x420D0F ],
			"code": "<option:eosd_multi_title_new>",
			"expected": "<0x46B1F8>"
		},
		"eosd_multi_automatic_difficulty_select": {
			"enable": "<option:eosd_multi_automatic_difficulty_select>",
			"addr": [ 0x436051, 0x43686B, 0x437CC2, 0x437E68 ],
			"code": "8B0425 <option:eosd_multi_instance_index_ptr>",
			"expected": "0FB605 <0x6C6E49>"
		},
		"eosd_multi_xinput_compat": {
			"enable": "<option:eosd_multi_enable_xinput>",
			"addr": 0x41D002,
			"code": "FF15 <option:eosd_multi_process_xinput_ptr_addr>",
			"expected": "FF15 ????????"
		},
		"eosd_multi_xinput_fix_joycaps_jump": {
			"enable": "<option:eosd_multi_enable_xinput>",
			"addr": 0x41CFB1,
			"code": "E9 [codecave:eosd_multi_xinput_fix_joycaps]",
			"enable": "8BE5 // 5D // C3 // CC"
		}
	},
	"detours": {
		"user32.dll": {
			"CreateWindowExA": null
		}
	}
}