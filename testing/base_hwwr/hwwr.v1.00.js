{
	"options": {
		"disable_code_enhancements": {
			"type": "b8",
			"val": true
		},
		"skip_startup_movies": {
			"type": "b8",
			"val": true
		},
		"disable_all_delay_changes": {
			"type": "b8",
			"value": false
		},
		"forced_menu_delay": {
			"type": "u32",
			"val": 0 // Default 3000
		},
		"autosave_warning_delay": {
			"type": "u32",
			"val": 2000 // Default 3000
		},
		"warning_error_delay": {
			"type": "u32",
			"val": 3000 // Default 3000
		},
		"restart_defaults_to_true": {
			"type": "b8",
			"val": true
		},
		"quit_defaults_to_true": {
			"type": "b8",
			"val": true
		},
		"skip_save_message_when_autosave_is_enabled": {
			"type": "b8",
			"val": true
		},
		"rtti_dll_path": {
			"type": "s",
			//"val": "F:\\My Programs Expansion\\__code_tools\\RTTIDumper_REL_1.4.1\\RTTIDumper.dll"
			"val": "F:\\My Programs Expansion\\__code_tools\\ClassDumper2\\DX11\\ClassDumper2Ex.dll"
		}
	},
	"codecaves": {
		"inject_rtti_crap_patch_init": {
			"ignore": true,
			"access": "re",
			"export": true,
			"code": "\
68 <option:rtti_dll_path> \
E8 [inject_LoadLibraryU] \
C3 \
"
		}
	},
	"binhacks": {
		"disable_launcher_check": {
			"addr": 0x40114D,
			"code": "<nop:26>",
			"expected": "\
8D4C24 18 \
68 <0x5E46E0> \
51 \
E8 [0x473EB0] \
83C4 08 \
84C0 \
0F84 68030000 \
"
		},
		"skip_startup_movies": {
			"enable": "<option:skip_startup_movies>",
			"addr": 0x401E8D,
			"code": "<nop:81>"
		},
		"ftol_replace": {
			"enable": "<cpuid:sse3>",
			"ignore": "<option:disable_code_enhancements>",
			"code": "55 // DB0C24 // 58"
		},
		"change_forced_menu_delay": {
			"enable": "<option:forced_menu_delay> != 3000",
			"ignore": "<option:disable_all_delay_changes>",
			"addr": [ 0x4C9E81, 0x4CA51B, 0x4CA6CD, 0x4CAA79, 0x4CAB55, 0x4CAB65 ], 
			"code": "<option:forced_menu_delay>",
			"expected": "<3000>"
		},
		"change_autosave_warning_delays": {
			"enable": "<option:autosave_warning_delay> != 3000",
			"ignore": "<option:disable_all_delay_changes>",
			"addr": [ 0x4C9FB7, 0x4CA183, 0x4CA3E7, 0x4CA4B7, 0x4CAC3C, 0x4CB055 ],
			"code": "<option:autosave_warning_delay>",
			"expected": "<3000>"
		},
		"change_warning_error_delays": {
			"enable": "<option:warning_error_delay> != 3000",
			"ignore": "<option:disable_all_delay_changes>",
			"addr": [ 0x4C9F2F, 0x4CA14A, 0x4CA1FA, 0x4CA32E, 0x4CA36F, 0x4CA44F, 0x4CA73D, 0x4CAF84, 0x4CAF96, 0x4CAFA7 ],
			"code": "<option:warning_error_delay>",
			"expected": "<3000>"
		},
		"change_restart_default_selection": {
			"enable": "<option:restart_defaults_to_true>",
			"addr": 0x44FB54,
			"code": "57",
			"expected": "55"
		},
		"change_quit_default_selection_A": {
			"enable": "<option:quit_defaults_to_true>",
			"addr": 0x44FB30,
			"code": "57",
			"expected": "55"
		},
		"change_quit_default_selection_B": {
			"enable": "<option:quit_defaults_to_true>",
			"addr": [ 0x44FF1F, 0x4515E6 ],
			"code": "6A 01",
			"expected": "6A 02"
		},
		"new_save_overwrite_warning_code": {
			"enable": "<option:skip_save_message_when_autosave_is_enabled>",
			"addr": 0x4CAC70,
			"code": "\
B0 01 \
8079 31 00 \
74 01 \
C3 \
6A 04 \
FF35 <0x5F97B8> \
E8 [0x4CADC0] \
83F8 03 \
0F94C0 \
C3 \
",
			"expected": "\
A1 <0x5F97B8> \
6A 04 \
50 \
E8 [0x4CADC0] \
33C9 \
83F8 03 \
0F94C1 \
8AC1 \
C3 \
9090909090 \
"
		}
	},
	"detours": {
		"kernel32.dll": null,
		"user32.dll": null,
		"version.dll": null,
		"comdlg32.dll": null,
		"gdi32.dll": null,
		"shell32.dll": null
	}
}