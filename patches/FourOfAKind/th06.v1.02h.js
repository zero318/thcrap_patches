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
		"eosd_multi_power_loss_on_death": {
			"type": "i32",
			"val": 16
		},
		"eosd_multi_drop_items_on_death": {
			"type": "u8",
			"val": true
		},
		"eosd_multi_reset_power_when_continuing": {
			"type": "u8",
			"val": true
		},
		"eosd_multi_drop_items_on_continue": {
			"type": "u8",
			"val": true
		},

		"eosd_multi_enable_xinput": {
			"type": "u32",
			// false - Original controller behavior (Default)
			// true  - Enable xbox controller compatibility workarounds
			"val": false
		},
		"eosd_multi_automatic_difficulty_select": {
			"type": "u8",
			// 0 - Original menu behavior
			// 1 - Auto highlights the proper difficulty within each window
			// 2 - Completely automates the difficulty menu, so "incorrect" choices can't be picked (Default)
			"val": 2
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
		"CreateDirectoryA_str": { "type": "s", "val": "CreateDirectoryA" },
		"ExitProcess_str": { "type": "s", "val": "ExitProcess" },
		"GetWindowRect_str": { "type": "s", "val": "GetWindowRect" },
		"SetWindowPos_str": { "type": "s", "val": "SetWindowPos" },

		"XInputGetState_ptr": { "type": "c", "val": "(<codecave:eosd_multi_constant_pool> + 0xB0)" },
		"UnmapViewOfFile_ptr": { "type": "c", "val": "(<codecave:eosd_multi_constant_pool> + 0xB4)" },
		"Sleep_ptr": { "type": "c", "val": "(<codecave:eosd_multi_constant_pool> + 0xB8)" },
		"GetWindowRect_ptr": { "type": "c", "val": "(<codecave:eosd_multi_constant_pool> + 0xBC)" },
		"GetKeyState_ptr": { "type": "c", "val": "(<codecave:eosd_multi_constant_pool> + 0xC0)" },
		"SetWindowPos_ptr": { "type": "c", "val": "(<codecave:eosd_multi_constant_pool> + 0xC4)" },

		"eosd_multi_process_xinput_ptr_addr": { "type": "c", "val": "(<codecave:eosd_multi_constant_pool> + 0x9C)" },

		"eosd_multi_instance_index_ptr": { "type": "c", "val": "<codecave:eosd_multi_per_instance_data>" },
		"eosd_multi_shared_data_ptr": { "type": "c", "val": "(<codecave:eosd_multi_per_instance_data> + 0x4)" },

		"eosd_multi_main_folder_str": { "type": "s", "val": "./FourOfAKind/" },
		"eosd_multi_replay_folder_files_str": { "type": "s", "val": "./FourOfAKind/replay/%s" },
		"eosd_multi_replay_folder_str": { "type": "s", "val": "./FourOfAKind/replay/" },
		"eosd_multi_title_E_str": { "type": "s", "val": "The Embodiment of Scarlet Devil Easy" },
		"eosd_multi_title_N_str": { "type": "s", "val": "The Embodiment of Scarlet Devil Normal" },
		"eosd_multi_title_H_str": { "type": "s", "val": "The Embodiment of Scarlet Devil Hard" },
		"eosd_multi_title_L_str": { "type": "s", "val": "The Embodiment of Scarlet Devil Lunatic" },
		"eosd_multi_score_dat_filename_E_str": { "type": "s", "val": "./FourOfAKind/scoreE.dat" },
		"eosd_multi_score_dat_filename_N_str": { "type": "s", "val": "./FourOfAKind/scoreN.dat" },
		"eosd_multi_score_dat_filename_H_str": { "type": "s", "val": "./FourOfAKind/scoreH.dat" },
		"eosd_multi_score_dat_filename_L_str": { "type": "s", "val": "./FourOfAKind/scoreL.dat" },
		"eosd_multi_log_filename_E_str": { "type": "s", "val": "./FourOfAKind/logE.txt" },
		"eosd_multi_log_filename_N_str": { "type": "s", "val": "./FourOfAKind/logN.txt" },
		"eosd_multi_log_filename_H_str": { "type": "s", "val": "./FourOfAKind/logH.txt" },
		"eosd_multi_log_filename_L_str": { "type": "s", "val": "./FourOfAKind/logL.txt" },
		"eosd_multi_replay_filename_E_str": { "type": "s", "val": "./FourOfAKind/replay/th6E_%2d.rpy" },
		"eosd_multi_replay_filename_N_str": { "type": "s", "val": "./FourOfAKind/replay/th6N_%2d.rpy" },
		"eosd_multi_replay_filename_H_str": { "type": "s", "val": "./FourOfAKind/replay/th6H_%2d.rpy" },
		"eosd_multi_replay_filename_L_str": { "type": "s", "val": "./FourOfAKind/replay/th6L_%2d.rpy" },
		"eosd_multi_replay_default_filename_E_str": { "type": "s", "val": "FourOfAKind/replay/th6E_00.rpy" },
		"eosd_multi_replay_default_filename_N_str": { "type": "s", "val": "FourOfAKind/replay/th6N_00.rpy" },
		"eosd_multi_replay_default_filename_H_str": { "type": "s", "val": "FourOfAKind/replay/th6H_00.rpy" },
		"eosd_multi_replay_default_filename_L_str": { "type": "s", "val": "FourOfAKind/replay/th6L_00.rpy" },
		"eosd_multi_replay_ud_filename_E_str": { "type": "s", "val": "th6E_ud????.rpy" },
		"eosd_multi_replay_ud_filename_N_str": { "type": "s", "val": "th6N_ud????.rpy" },
		"eosd_multi_replay_ud_filename_H_str": { "type": "s", "val": "th6H_ud????.rpy" },
		"eosd_multi_replay_ud_filename_L_str": { "type": "s", "val": "th6L_ud????.rpy" },

		"eosd_multi_score_dat_filename": { "type": "c", "val": "(*(<codecave:eosd_multi_constant_pool> + 0x30 + 0x4 * *<codecave:eosd_multi_per_instance_data>))" },
		"eosd_multi_log_filename": { "type": "c", "val": "(*(<codecave:eosd_multi_constant_pool> + 0x40 + 0x4 * *<codecave:eosd_multi_per_instance_data>))" },
		"eosd_multi_replay_filename": { "type": "c", "val": "(*(<codecave:eosd_multi_constant_pool> + 0x50 + 0x4 * *<codecave:eosd_multi_per_instance_data>))" },
		"eosd_multi_replay_default_filename": { "type": "c", "val": "(*(<codecave:eosd_multi_constant_pool> + 0x60 + 0x4 * *<codecave:eosd_multi_per_instance_data>))" },
		"eosd_multi_replay_ud_filename": { "type": "c", "val": "(*(<codecave:eosd_multi_constant_pool> + 0x70 + 0x4 * *<codecave:eosd_multi_per_instance_data>))" },
		"eosd_multi_title": { "type": "c", "val": "(*(<codecave:eosd_multi_constant_pool> + 0x80 + 0x4 * *<codecave:eosd_multi_per_instance_data>))" },

		"eosd_multi_vpatch_override_str": { "type": "s", "val": "eosd_multi_vpatch_override" },
		"eosd_multi_mapping_name": { "type": "s", "val": "EoSDMulti" },
		"eosd_multi_sizeof_memshare": { "type": "u32", "val": 0x44 },
		"eosd_multi_max_count": { "type": "u8", "val": 4 },

		"eosd_multi_error_caption_str": { "type": "s", "val": "Four of a Kind Error" },
		"eosd_multi_invalid_max_count_format_str": { "type": "s", "val": "Max count option must be between 1 and 4!" },
		"eosd_multi_invalid_memshare_size_format_str": { "type": "s", "val": "Memshare size must be at least 68 bytes!"},
		"eosd_multi_main_folder_fail_format_str": { "type": "s", "val": "Could not create FourOfAKind folder!" },
		"eosd_multi_replay_folder_fail_format_str": { "type": "s", "val": "Could not create FourOfAKind/replay folder!" }
	},
	"codecaves": {
		"eosd_multi_fail_exit": {
			"access": "re",
			"code": "\
8D4C24 08 \
51 \
50 \
6A 00 \
68 <option:eosd_multi_error_caption_str> \
E8 [log_mboxf] \
83C4 0C \
68 <option:kernel32_dll_str> \
E8 [th_GetModuleHandleA] \
68 <option:ExitProcess_str> \
50 \
E8 [th_GetProcAddress] \
6A 01 \
FFD0 \
"
		},
		"eosd_multi_invalid_max_count_patch_init": {
			"enable": "!<option:eosd_multi_max_count> || <option:eosd_multi_max_count> > 4",
			"access": "re",
			"export": true,
			"code": "\
B8 <option:eosd_multi_invalid_max_count_format_str> \
E9 [codecave:eosd_multi_fail_exit] \
"
		},
		"eosd_multi_invalid_memshare_size_patch_init": {
			"enable": "<option:eosd_multi_sizeof_memshare> < 0x40",
			"access": "re",
			"export": true,
			"code": "\
B8 <option:eosd_multi_invalid_memshare_size_format_str> \
E9 [codecave:eosd_multi_fail_exit] \
"
		},
		"eosd_multi_constant_pool": {
			"access": "r",
			"size": 0xC8,
			"code": "\
1F000F000000000000000000<option:eosd_multi_sizeof_memshare> \
FFFFFFFF000000000400000000000000 \
00000000FFFF000000000000FFFF0000 \
<option:eosd_multi_score_dat_filename_E_str><option:eosd_multi_score_dat_filename_N_str><option:eosd_multi_score_dat_filename_H_str><option:eosd_multi_score_dat_filename_L_str> \
<option:eosd_multi_log_filename_E_str><option:eosd_multi_log_filename_N_str><option:eosd_multi_log_filename_H_str><option:eosd_multi_log_filename_L_str> \
<option:eosd_multi_replay_filename_E_str><option:eosd_multi_replay_filename_N_str><option:eosd_multi_replay_filename_H_str><option:eosd_multi_replay_filename_L_str> \
<option:eosd_multi_replay_default_filename_E_str><option:eosd_multi_replay_default_filename_N_str><option:eosd_multi_replay_default_filename_H_str><option:eosd_multi_replay_default_filename_L_str> \
<option:eosd_multi_replay_ud_filename_E_str><option:eosd_multi_replay_ud_filename_N_str><option:eosd_multi_replay_ud_filename_H_str><option:eosd_multi_replay_ud_filename_L_str> \
<option:eosd_multi_title_E_str><option:eosd_multi_title_N_str><option:eosd_multi_title_H_str><option:eosd_multi_title_L_str> \
<option:xinput1_4_dll_str><option:xinput1_3_dll_str><option:xinput9_1_0_dll_str>(<option:eosd_multi_enable_xinput>?<codecave:eosd_multi_process_xinput>:0) \
0080FF7F000000000000000000000000 \
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
894424 08 \
E8 [runconfig_game_get] \
89C6 \
894424 0C \
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
894424 04 \
8D0C2F \
8D4C08 1E \
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
FF7424 0C \
50 \
E8 [th_memcpy] \
83C4 0C \
8D7C35 19 \
66:C74435 19 2220 \
8D4435 1B \
8B7424 04 \
56 \
FF7424 10 \
50 \
E8 [th_memcpy] \
83C4 0C \
C6443E 02 00 \
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
8D6C24 5C \
BE (<option:eosd_multi_max_count> - 1) \
<nop:10> \
0F57C0 \
0F1145 00 \
0F1145 F0 \
0F1145 E0 \
0F1145 D0 \
0F1145 C0 \
C74424 18 44000000 \
83EC 28 \
896C24 24 \
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
4E \
75 9D \
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
0F84 C6000000 \
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
B0 01 \
F0:0FC003 \
A2 <option:eosd_multi_instance_index_ptr> \
84C0 \
0F84 BF000000 \
68 <option:Sleep_str> \
57 \
FFD6 \
89C5 \
A3 <option:Sleep_ptr> \
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
FFB3 (<codecave:eosd_multi_constant_pool> + 0x9C) \
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
89C7 \
68 <option:GetKeyState_str> \
50 \
FFD6 \
A3 <option:GetKeyState_ptr> \
68 <option:GetWindowRect_str> \
57 \
FFD6 \
A3 <option:GetWindowRect_ptr> \
68 <option:SetWindowPos_str> \
57 \
FFD6 \
A3 <option:SetWindowPos_ptr> \
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
E9 0BFFFFFF \
68 <option:CreateDirectoryA_str> \
57 \
FFD6 \
89C5 \
6A 00 \
68 <option:eosd_multi_main_folder_str> \
FFD0 \
85C0 \
75 0C \
E8 [th_GetLastError] \
3D B7000000 \
75 27 \
6A 00 \
68 <option:eosd_multi_replay_folder_str> \
FFD5 \
85C0 \
75 0C \
E8 [th_GetLastError] \
3D B7000000 \
75 18 \
(u16:(<option:eosd_multi_max_count> - 1)?0xF989:0x07EB) \
89F2 \
E8 [codecave:eosd_multi_spawn_children_processes] \
E9 F7FEFFFF \
B8 <option:eosd_multi_main_folder_fail_format_str> \
E9 [codecave:eosd_multi_fail_exit] \
B8 <option:eosd_multi_replay_folder_fail_format_str> \
E9 [codecave:eosd_multi_fail_exit] \
"
		},
		"eosd_multi_shutdown_patch_exit": {
			"access": "re",
			"export": true,
			"code": "\
56 \
8B35 <option:eosd_multi_shared_data_ptr> \
F0:FE0E \
<nop:6> \
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
		"eosd_multi_dont_corrupt_the_config_file": {
			"access": "re",
			"code": "\
803D <option:eosd_multi_instance_index_ptr> 00 \
0F84 [0x41E460] \
31C0 \
C3 \
"
		},
		"eosd_multi_skip_fullscreen_option": {
			"access": "re",
			"code": "\
89C1 \
8B45 F4 \
31D2 \
83B8 A0810000 05 \
0F44D1 \
0190 A0810000 \
C2 0800 \
"
		},
		"eosd_multi_calculate_window_positions": {
			"access": "re",
			"code": "\
53 \
57 \
8B5E 10 \
8B7E 14 \
39DF \
89D8 \
0F4CC7 \
8B56 18 \
85D2 \
0F44D7 \
39C2 \
0F4CC2 \
8B4E 1C \
85C9 \
0F44CA \
39C1 \
0F4CC1 \
8946 10 \
40 \
29C3 \
29C7 \
39DF \
0F43FB \
29C2 \
39FA \
0F43D7 \
29C1 \
39D1 \
0F43CA \
01C8 \
8946 14 \
01C8 \
8946 18 \
01C8 \
8946 1C \
8B5E 20 \
8B7E 24 \
39DF \
89D8 \
0F4CC7 \
8B56 28 \
85D2 \
0F44D7 \
39C2 \
0F4CC2 \
8B4E 2C \
85C9 \
0F44CA \
39C1 \
0F4CC1 \
8946 20 \
40 \
29C3 \
29C7 \
39DF \
0F43FB \
29C2 \
39FA \
0F43D7 \
29C1 \
39D1 \
0F43CA \
01C8 \
8946 24 \
01C8 \
8946 28 \
01C8 \
8946 2C \
5F \
5B \
C3 \
"
		},
		"eosd_multi_adjust_window_positions": {
			"access": "re",
			"code": "\
53 \
57 \
56 \
83EC 10 \
89C7 \
89E0 \
50 \
57 \
FF15 <option:GetWindowRect_ptr> \
0FB61D <option:eosd_multi_instance_index_ptr> \
8B35 <option:eosd_multi_shared_data_ptr> \
897C9E 34 \
8B0424 \
89449E 10 \
8B4424 04 \
89449E 20 \
B0 01 \
F0:0FC046 04 \
3C (u8:<option:eosd_multi_max_count> - 1) \
73 11 \
<nop:3> \
6A 00 \
FF15 <option:Sleep_ptr> \
807E 04 <option:eosd_multi_max_count> \
72 F2 \
85DB \
74 20 \
<nop:14> \
6A 00 \
FF15 <option:Sleep_ptr> \
385E 08 \
75 F3 \
B8 01000000 \
EB 05 \
E8 [codecave:eosd_multi_calculate_window_positions] \
B8 05000000 \
50 \
6A 00 \
6A 00 \
FF749E 20 \
FF749E 10 \
FF749E 30 \
57 \
FF15 <option:SetWindowPos_ptr> \
F0:FE46 08 \
<nop:4> \
6A 00 \
FF15 <option:Sleep_ptr> \
807E 08 <option:eosd_multi_max_count> \
75 F2 \
89FA \
83C4 10 \
5E \
5F \
5B \
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
75 65 \
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
660F6E4424 08 \
660FEF05 (<codecave:eosd_multi_constant_pool> + 0xB0) \
660FEFC9 \
660F61C1 \
660FD640 08 \
31C0 \
83C4 10 \
5E \
C2 0800 \
56 \
6A 01 \
FF15 <option:XInputGetState_ptr> \
85C0 \
74 8E \
56 \
6A 02 \
FF15 <option:XInputGetState_ptr> \
85C0 \
74 81 \
56 \
6A 03 \
FF15 <option:XInputGetState_ptr> \
85C0 \
0F84 70FFFFFF \
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
			"expected": "55 / 8BEC",
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
			"expected": "83F8 03 / 7D 09"
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
			"expected": "A0 <0x69D4BA> / 2C 01 / A2 <0x69D4BA>"
		},
		"eosd_multi_lives_never_increase_A": {
			"enable": "<option:eosd_multi_lives_never_increase>",
			"addr": 0x41FF49,
			"code": "<nop:12>",
			"expected": "A0 <0x69D4BA> / 04 01 / A2 <0x69D4BA>"
		},
		"eosd_multi_lives_never_increase_B": {
			"enable": "<option:eosd_multi_lives_never_increase>",
			"addr": 0x41B9C7,
			"code": "<nop:20>",
			"expected": "8B45 08 / 8A80 1A180000 / 04 01 / 8B4D 08 / 8881 1A180000"
		},
		"eosd_multi_bombs_never_increase": {
			"enable": "<option:eosd_multi_bombs_never_increase>",
			"addr": 0x41FF0E,
			"code": "<nop:12>",
			"expected": "A0 <0x69D4BB> / 04 01 / A2 <0x69D4BB>"
		},
		"eosd_multi_bombs_never_decrease": {
			"enable": "<option:eosd_multi_bombs_never_decrease>",
			"addr": 0x4289DB,
			"code": "<nop:15>",
			"expected": "8A15 <0x69D4BB> / 80EA 01 / 8815 <0x69D4BB>"
		},
		"eosd_multi_change_power_loss_on_death": {
			"enable": "<option:eosd_multi_power_loss_on_death> != 16",
			"addr": 0x428B5A,
			"code": "\
0FB715 <0x69D4B0> \
31C9 \
81EA <option:eosd_multi_power_loss_on_death> \
0F48D1 \
81FA 80000000 \
B9 80000000 \
0F42CA \
66:890D <0x69D4B0> \
<nop:4>\
",
			"expected": "\
33C0 \
66:A1 <0x69D4B0> \
83F8 10 \
7F 0B \
66:C705 <0x69D4B0> 0000 \
EB 13 \
33C9 \
66:8B0D <0x69D4B0> \
83E9 10 \
66:890D <0x69D4B0> \
"
		},
		"eosd_multi_remove_item_drops_on_death": {
			"ignore": "<option:eosd_multi_drop_items_on_death>",
			"addr": 0x428ACC,
			"code": "<nop:142>",
			"expected": "\
6A 02 \
6A 02 \
8B45 08 \
05 40040000 \
50 \
B9 <0x69E268> \
E8 [0x41F290] \
6A 02 \
6A 00 \
8B4D 08 \
81C1 40040000 \
51 \
B9 <0x69E268> \
E8 [0x41F290] \
6A 02 \
6A 00 \
8B55 08 \
81C2 40040000 \
52 \
B9 <0x69E268> \
E8 [0x41F290] \
6A 02 \
6A 00 \
8B45 08 \
05 40040000 \
50 \
B9 <0x69E268> \
E8 [0x41F290] \
6A 02 \
6A 00 \
8B4D 08 \
81C1 40040000 \
51 \
B9 <0x69E268> \
E8 [0x41F290] \
6A 02 \
6A 00 \
8B55 08 \
81C2 40040000 \
52 \
B9 <0x69E268> \
E8 [0x41F290]"
		},
		"eosd_multi_remove_power_reset_on_continue": {
			"ignore": "<option:eosd_multi_reset_power_when_continuing>",
			"addr": [ 0x402F6B, 0x428C12 ],
			"code": "<nop:9>",
			"expected": "66:C705 B0D46900 0000"
		},
		"eosd_multi_remove_item_drops_on_continue": {
			"ignore": "<option:eosd_multi_drop_items_on_continue>",
			"addr": 0x428AC6,
			"code": "0F8E [0x428C12]",
			"expected": "0F8E [0x428B9C]"
		},
		"eosd_multi_title_en_compat": {
			"addr": [ 0x420CA7, 0x420D0F ],
			"code": "<option:eosd_multi_title>",
			"expected": "<0x46B1F8>"
		},
		"eosd_multi_automatic_difficulty_select_A": {
			"enable": "<option:eosd_multi_automatic_difficulty_select>",
			"addr": [ 0x436051, 0x43686B, 0x437CC2, 0x437E68 ],
			"code": "8B0425 <option:eosd_multi_instance_index_ptr>",
			"expected": "0FB605 <0x6C6E49>"
		},
		"eosd_multi_automatic_difficulty_select_B": {
			"enable": "<option:eosd_multi_automatic_difficulty_select> > 1",
			"addr": 0x4360DC,
			"code": "E9 [0x436366]",
			"expected": "6A 04 / FF75 08"
		},
		"eosd_multi_automatic_difficulty_select_C": {
			"enable": "<option:eosd_multi_automatic_difficulty_select> > 1",
			"addr": 0x436829,
			"code": "00000000",
			"expected": "07000000"
		},
		"eosd_multi_automatic_difficulty_select_D": {
			"enable": "<option:eosd_multi_automatic_difficulty_select> > 1",
			"addr": 0x4368C0,
			"code": "E9 [0x4362F9]",
			"expected": "E9 [0x43740A]"
		},
		"eosd_multi_dont_write_difficulty_to_config": {
			"addr": [ 0x4362F4, 0x436482 ],
			"code": "<nop:5>",
			"expected": "A2 <0x6C6E49>"
		},
		"eosd_multi_dont_corrupt_the_config_file_call": {
			"addr": [ 0x420662, 0x424A6E ],
			"code": "[codecave:eosd_multi_dont_corrupt_the_config_file]",
			"expected": "[0x41E460]"
		},
		"eosd_multi_remove_fullscreen_checks_D": {
			"addr": [ 0x42048C, 0x420C71 ],
			"code": "<nop:3> / BA 01000000",
			"expected": "33D2 / 8A15 <0x6C6E4A>"
		},
		"eosd_multi_remove_fullscreen_checks_A": {
			"addr": [ 0x42063D, 0x420DC0 ],
			"code": "8D0425 01000000",
			"expected": "33C0 / A0 <0x6C6E4A>"
		},
		"eosd_multi_remove_fullscreen_checks_C": {
			"addr": [ 0x420894, 0x4209AB, 0x420E92 ],
			"code": "<nop:2> / C7C1 01000000", // Weird encoding to avoid getting clobbered by vpatch
			"expected": "33C9 / 8A0D <0x6C6E4A>"
		},
		"eosd_multi_remove_fullscreen_options_A": {
			"addr": 0x43990A,
			"code": "<nop:17>",
			"expected": "8B45 F4 / 0FB680 31820000 / 0FB60D <0x6C6E4A>"
		},
		"eosd_multi_remove_fullscreen_options_B": {
			"addr": 0x439942,
			"code": "<nop:14>",
			"expected": "8B45 F4 / 8A80 31820000 / A2 <0x6C6E4A>"
		},
		"eosd_multi_remove_fullscreen_options_C": {
			"addr": 0x43914C,
			"code": "E8 [codecave:eosd_multi_skip_fullscreen_option]",
			"expected": "59 / 59 / 8B45 F4"
		},
		"eosd_multi_remove_fullscreen_options_D": {
			"addr": 0x439316,
			"code": "8B45 F8 / 80A0 80000000 FE / <nop:16> / 90",
			"expected": "8B45 F4 / 0FB680 31820000 / 50 / FF75 FC / 6A 05 / FF75 F8 / 8B4D F4 / E8 [0x438EF8]"
		},
		"eosd_multi_align_windows": {
			"enable": "<option:eosd_multi_max_count> != 1",
			"addr": 0x420D25,
			"code": "E8 [codecave:eosd_multi_adjust_window_positions] 90",
			"expected": "8B15 <0x6C6BD4>"
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
			"expected": "8BE5 / 5D / C3 / CC"
		}
	},
	"detours": {
		"user32.dll": {
			"CreateWindowExA": null
		}
	}
}