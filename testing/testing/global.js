{
	"options": {
		"mbox_string": {
			"type": "s",
			"val": "%f\n"
		},
		"caption_string": {
			"type": "s",
			"val": "Constpool Test"
		},
		"test_value": {
			"type": "b",
			"val": 10
		},
		"test_value2": {
			"type": "f32",
			"val": 7.0
		}
	},
	"codecaves": {
        "test_value": {
            "access": "r",
            "code": "(u32:256)"
        },
		"constpool_test_patch_post_init": {
			"access": "re",
			"export": true,
			"code": "\
83EC 08 \
C5FA:1005 {x.f32:5.0f;10.0f} \
C5FA:5805 {f32:10.0} \
C5FA:5AC0 \
C5FB:110424 \
68 <option:mbox_string> \
68 (u32:0x40) \
68 <option:caption_string> \
E8 [log_mboxf] \
83C4 14 \
CC \
C3 \
C5FA:1005 {f32:0xA} \
C5FA:1005 {f32:<option:test_value>} \
66:A1 {b.u16:0x40} \
66:A1 {b.u16:0x41} \
C5FA:1005 {f32:<option:test_value2>} \
FF15 {u32:<th_memccpy>} +0.0 \
"
		}
	}
}
