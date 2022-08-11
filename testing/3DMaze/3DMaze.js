{
	"options": {
		"rat_buffer_count": {
			"type": "u8",
			"val": 131
		},
		"override_rat_count": {
			"type": "i32",
			"val": 0
		},
	},
	"codecaves": {
		"rat_buffer": {
			"access": "rw",
			"enable": "<option:rat_buffer_count> > 9",
			"size": 0x7C,
			"count": "<option:rat_buffer_count>"
		},
	},
	"binhacks": {
		"resize_rat_buffer_A": {
			"addr": 0x1004924,
			"enable": "<option:rat_buffer_count> > 9",
			"code": "(<codecave:rat_buffer> + 0x14)",
			"expected": "<0x1023014>"
		},
		"resize_rat_buffer_B": {
			"addr": 0x1004B1E,
			"enable": "<option:rat_buffer_count> > 9",
			"code": "(<codecave:rat_buffer> + 0x3C)",
			"expected": "<0x102303C>"
		},
		"override_rat_count_impl": {
			"addr": 0x1005750,
			"enable": "<option:override_rat_count> != 0",
			"code": "\
C70425 <0x1018C78> <option:override_rat_count> \
?? \
?? ???????? \
<nop:5> \
",
			"expected": "\
56 \
68 78050000 \
E8 [0x1007039] \
?? \
?? ???????? \
A3 <0x1018C78> \
"
		}
	},
	"detours": {
		"user32.dll": null,
		"version.dll": null,
		"comdlg32.dll": null,
		"gdi32.dll": null,
		"shell32.dll": null
	}
}