{
	"options": {
		"mbox_string": {
			"type": "s",
			"val": "Patch log_mbox() test"
		},
		"caption_string": {
			"type": "s",
			"val": "test"
		}
	},
	"codecaves": {
		"StartupMBox_patch_init": {
			"code": "68 <option:mbox_string> // 68 (u32:0x40) // 68 <option:caption_string> // E8 [log_mbox] // 83C4 0C // C3",
			"export": true
		}
	}
}