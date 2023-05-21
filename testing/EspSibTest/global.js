{
	"options": {
		"mbox_string": {
			"type": "s",
			"val": "ESP SIB Test"
		},
		"success_string": {
			"type": "s",
			"val": "No ESP SIB errors"
		},
		"fail_string": {
			"type": "s",
			"val": "ESP SIB errors! %X"
		}
	},
	"codecaves": {
		"ESP_SIB_Test_patch_init": {
			"access": "re",
			"export": true,
			"code": "\
53 \
57 \
56 \
89E0 \
8D0C24 \
31D2 \
39C1 \
0F94C2 \
8D0C64 \
31DB \
39C1 \
0F94C3 \
8D0C5A \
8D14A4 \
31DB \
39C2 \
0F94C3 \
8D0C99 \
8D14E4 \
31DB \
39C2 \
0F94C3 \
8D14D9 \
8D70 69 \
8D7C24 69 \
31C9 \
39FE \
0F94C1 \
C1E1 04 \
09D1 \
8D5464 69 \
31DB \
39FA \
0F94C3 \
C1E3 05 \
8D74A4 69 \
31D2 \
39FE \
0F94C2 \
C1E2 06 \
09DA \
8D74E4 69 \
31DB \
39FE \
0F94C3 \
C1E3 07 \
09D3 \
8DB424 EFBEADDE \
05 EFBEADDE \
31D2 \
39C6 \
0F94C2 \
C1E2 08 \
09DA \
8DB464 EFBEADDE \
31DB \
39C6 \
0F94C3 \
C1E3 09 \
09D3 \
8DB4A4 EFBEADDE \
31D2 \
39C6 \
0F94C2 \
C1E2 0A \
09DA \
8DB4E4 EFBEADDE \
31DB \
39C6 \
0F94C3 \
C1E3 0B \
09D3 \
09CB \
81FB FF0F0000 \
B8 <option:success_string> \
B9 <option:fail_string> \
0F44C8 \
53 \
51 \
6A 40 \
68 <option:mbox_string> \
E8 [log_mboxf] \
83C4 10 \
5E \
5F \
5B \
C3 \
"
		}
	}
}