{
	"options": {
		"eosd_multi_bombs_never_increase": {
			"type": "u8",
			"val": true
		},
		"eosd_multi_bombs_never_decrease": {
			"type": "u8",
			"val": true
		},
		"eosd_multi_lives_never_increase": {
			"type": "u8",
			"val": true
		},
		"eosd_multi_lives_never_decrease": {
			"type": "u8",
			"val": false
		},
		"eosd_multi_infinite_continues": {
			"type": "u8",
			"val": true
		},
		"eosd_multi_continues_count_up": {
			"type": "u8",
			"val": true
		},
		"kernel32_dll_str": { "type": "s", "val": "kernel32.dll" },
		"thcrap_loader_str": { "type": "s", "val": "\\bin\\thcrap_loader.exe" },
		
		"OpenFileMappingA_str": { "type": "s", "val": "OpenFileMappingA" },
		"CreateFileMappingA_str": { "type": "s", "val": "CreateFileMappingA" },
		"MapViewOfFile_str": { "type": "s", "val": "MapViewOfFile" },
		"UnmapViewOfFile_str": { "type": "s", "val": "UnmapViewOfFile" },
		"CreateProcessA_str": { "type": "s", "val": "CreateProcessA" },
		"CloseHandle_str": { "type": "s", "val": "CloseHandle" },
		"Sleep_str": { "type": "s", "val": "Sleep" },
		
		"UnmapViewOfFile_ptr": { "type": "c", "val": "(<codecave:eosd_multi_constant_pool> + 0x7C)" },
		"Sleep_ptr": { "type": "c", "val": "(<codecave:eosd_multi_constant_pool> + 0x80)" },

		"eosd_multi_shared_data_ptr": { "type": "c", "val": "<codecave:eosd_multi_per_instance_data>" },
		"eosd_multi_instance_index_ptr": { "type": "c", "val": "(<codecave:eosd_multi_per_instance_data> + 0x8)" },
		"eosd_multi_score_dat_filename_str_ptr_value": { "type": "c", "val": "(*(<codecave:eosd_multi_per_instance_data> + 0xC))" },
		"eosd_multi_log_filename_str_ptr_value": { "type": "c", "val": "(*(<codecave:eosd_multi_per_instance_data> + 0x10))" },
		"eosd_multi_replay_filename_str_ptr_value": { "type": "c", "val": "(*(<codecave:eosd_multi_per_instance_data> + 0x14))" },
		"eosd_multi_replay_default_filename_str_ptr_value": { "type": "c", "val": "(*(<codecave:eosd_multi_per_instance_data> + 0x18))" },
		"eosd_multi_replay_ud_filename_str_ptr_value": { "type": "c", "val": "(*(<codecave:eosd_multi_per_instance_data> + 0x1C))" },

		"eosd_multi_replay_folder_files_str": { "type": "s", "val": "./multireplay/%s" },
		"eosd_multi_replay_folder_str": { "type": "s", "val": "./multireplay/" },
		"eosd_multi_title_N_str": { "type": "s", "val": " \"{\\\"title\\\":\\\"The Embodiment of Scarlet Devil Normal\\\"}\"" },
		"eosd_multi_title_H_str": { "type": "s", "val": " \"{\\\"title\\\":\\\"The Embodiment of Scarlet Devil Hard\\\"}\"" },
		"eosd_multi_title_L_str": { "type": "s", "val": " \"{\\\"title\\\":\\\"The Embodiment of Scarlet Devil Lunatic\\\"}\"" },
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
        "eosd_multi_continues_used_format_str": { "type": "s", "val": "Continues Used: %hhu" },
		"eosd_multi_score_dat_filename": { "type": "c", "val": "(*(<codecave:eosd_multi_constant_pool> + 0x20 + 0x4 * *(<codecave:eosd_multi_per_instance_data> + 0x8)))" },
		"eosd_multi_log_filename": { "type": "c", "val": "(*(<codecave:eosd_multi_constant_pool> + 0x30 + 0x4 * *(<codecave:eosd_multi_per_instance_data> + 0x8)))" },
		"eosd_multi_replay_filename": { "type": "c", "val": "(*(<codecave:eosd_multi_constant_pool> + 0x40 + 0x4 * *(<codecave:eosd_multi_per_instance_data> + 0x8)))" },
		"eosd_multi_replay_default_filename": { "type": "c", "val": "(*(<codecave:eosd_multi_constant_pool> + 0x50 + 0x4 * *(<codecave:eosd_multi_per_instance_data> + 0x8)))" },
		"eosd_multi_replay_ud_filename": { "type": "c", "val": "(*(<codecave:eosd_multi_constant_pool> + 0x60 + 0x4 * *(<codecave:eosd_multi_per_instance_data> + 0x8)))" },
		"eosd_multi_mapping_name": { "type": "s", "val": "EoSDMulti" },
		"eosd_multi_sizeof_memshare": { "type": "u32", "val": 0x1 },
        "fpu_pop": { "type": "c", "val": "(u16:<cpuid:amd>?0xC0DF:0xD8DD)" }
	},
	"title": "The Embodiment of Scarlet Devil Easy",
	"codecaves": {
		"eosd_multi_constant_pool": {
			"access": "r",
			"size": 0x84,
			"code": "\
1F000F000000000000000000<option:eosd_multi_sizeof_memshare> \
FFFFFFFF000000000400000000000000 \
<option:eosd_multi_score_dat_filename_E_str><option:eosd_multi_score_dat_filename_N_str><option:eosd_multi_score_dat_filename_H_str><option:eosd_multi_score_dat_filename_L_str> \
<option:eosd_multi_log_filename_E_str><option:eosd_multi_log_filename_N_str><option:eosd_multi_log_filename_H_str><option:eosd_multi_log_filename_L_str> \
<option:eosd_multi_replay_filename_E_str><option:eosd_multi_replay_filename_N_str><option:eosd_multi_replay_filename_H_str><option:eosd_multi_replay_filename_L_str> \
<option:eosd_multi_replay_default_filename_E_str><option:eosd_multi_replay_default_filename_N_str><option:eosd_multi_replay_default_filename_H_str><option:eosd_multi_replay_default_filename_L_str> \
<option:eosd_multi_replay_ud_filename_E_str><option:eosd_multi_replay_ud_filename_N_str><option:eosd_multi_replay_ud_filename_H_str><option:eosd_multi_replay_ud_filename_L_str> \
<option:eosd_multi_title_N_str><option:eosd_multi_title_H_str><option:eosd_multi_title_L_str> \
"
		},
		"eosd_multi_per_instance_data": {
			"access": "rw",
			"size": 0x35
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
BD F4FFFFFF \
0F1F80 00000000 \
FFB5 (<codecave:eosd_multi_constant_pool> + 0x7C) \
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
            "ignore": true,
			"access": "re",
			"export": false,
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
74 50 \
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
84C0 \
74 3B \
90 \
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
EB 84 \
89F1 \
89FA \
E8 [codecave:eosd_multi_spawn_children_processes] \
EB BB \
"
		},
		"eosd_multi_shutdown_patch_exit": {
            "ignore": true,
			"access": "re",
			"export": false,
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
		}
	},
	"binhacks": {
		"eosd_multi_remove_mutex": {
			"addr": 0x421900,
			"code": "31C0C3",
			"expected": "55 // 8BEC",
		},
		"eosd_multi_dont_skip_draw": {
			"addr": 0x4206E9,
			"code": "<nop:16>",
			"expected": "8B45 C0 // 8378 08 00 // 75 07 // 33C0 // E9 49040000"
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
			"expected": "83F8 03"
		},
        "eosd_multi_continues_count_up_B": {
            "enable": "<option:eosd_multi_continues_count_up>",
            "addr": 0x403074,
            "code": "0F84 62010000"
        },
        "eosd_multi_continues_count_up": {
            "enable": "<option:eosd_multi_continues_count_up>",
            "addr": 0x4030D3,
            "code": "\
<nop:44> \
8B75 F8 \
8DBE 58050000 \
8B06 \
48 \
83F8 01 \
0F87 A3000000 \
81C6 18010000 \
81EF 10010000 \
B9 44000000 \
F3:A5 \
80A6 70FFFFFF FE \
0FB605 <0x69D4B8> \
BE (<codecave:eosd_multi_per_instance_data> + 0x20) \
50 \
68 <option:eosd_multi_continues_used_format_str> \
56 \
E8 [th_sprintf] \
83C4 0C \
D987 0CFFFFFF \
D80D <0x46A2BC> \
D847 80 \
D957 80 \
D955 FC \
0FB606 \
84C0 \
74 50 \
46 \
3C 20 \
74 2A \
2C 0A \
74 31 \
<option:fpu_pop> \
8B0D <0x6D4588> \
6BC0 38 \
01C8 \
8947 B0 \
8D97 F0FEFFFF \
C742 7C FFFFFFFF \
52 \
E8 [0x432AD0] \
D947 80 \
D805 <0x46A2B4> \
D957 80 \
EB BF \
<option:fpu_pop> \
D945 FC \
D957 80 \
D947 84 \
D805 <0x46A2B4> \
D95F 84 \
EB A9 \
<option:fpu_pop> \
BE D0FCFFFF \
8D0437 \
F680 80000000 01 \
74 0C \
50 \
8B0D <0x6D4588> \
E8 [0x432AD0] \
81C6 10010000 \
75 E0 \
5E \
5F \
C9 \
C3 \
"
        },
        "eosd_multi_continues_count_up_old": {
            "ignore": true,
            "enable": "<option:eosd_multi_continues_count_up>",
            "addr": 0x403157,
            "code": "\
8B45 F8 \
80A0 98010000 FE \
05 48040000 \
51 \
68 <option:eosd_multi_continues_used_format_str> \
6A 00 \
68 FFFFFF00 \
50 \
FF35 <0x6D4588> \
E8 [0x434E20] \
82C4 18 \
<nop:4> \
"
        },
		"eosd_multi_continues_count_up_older": {
            "ignore": true,
			"enable": "<option:eosd_multi_continues_count_up>",
			"addr": 0x40314F,
			"code": "\
0FB605 <0x69D4B8> \
83F8 09 \
8D48 11 \
0F47C1 \
83C0 1B \
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
			"expected": "A0 <0x69D4BA> // 2X 01 // A2 <0x69D4BA>"
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
	}
}