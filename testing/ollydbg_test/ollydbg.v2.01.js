{
	codecaves: {
		"x86_instructions": {
			size: 0x34,
			count: 1395,
			access: "rw"
		},
		"fill_instruction_codecave_patch_init": {
			code: "B9 <RxF793C> // 89C8 // 66 0F1F8400 00000000 // 8338 00 // 8D40 34 // 75 F8 // 29C8 // 50 // 51 // 68 <codecave:x86_instructions> // E8 [th_memcpy] // 83C4 0C // C3",
			access: "e",
			export: true
		}
	},
	binhacks: {
		"new_instr_array": {
			addr: ["Rx3F292", "Rx8D94E"],
			code: "<codecave:x86_instructions>",
			expected: "<RxF793C>"
		}
	},
	detours: {
		"kernel32.dll": null,
		"user32.dll": null,
		"version.dll": null,
		"comdlg32.dll": null,
		"gdi32.dll": null,
		"shell32.dll": null
	}
}