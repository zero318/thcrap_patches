{
	"codecaves": {
		"TH8NineStages_select_next_stage": {
			"access": "re",
			"code": "\
56 \
8B81 C4DD0300 \
8D50 FE \
83FA 02 \
77 1A \
0FB691 A9DB0300 \
74 09 \
8B0495 DEADBEEF \
EB 0B \
BE <0b110000111001> \
0FA3D6 \
83D0 01 \
8981 C4DD0300 \
5E \
C3 \
"
		}
	},
	"binhacks": {
		"TH8NineStages_remove_6AB_checks_A": {
			"addr": [ 0x434F37, 0x435120 ],
			"code": "<nop:18>",
			"expected": "\
833D <0x164D2CC> ?? \
74 ?? \
833D <0x164D2CC> ?? \
74 ?? \
"
		},
		"TH8NineStages_remove_6AB_checks_B": {
			"addr": [ 0x434FB6, 0x439D4D ],
			"code": "<nop:26>",
			"expected": "\
833D <0x164D2CC> 06 \
0F84 ???????? \
833D <0x164D2CC> 07 \
0F84 ???????? \
"
		},
		"TH8NineStages_remove_6AB_checks_C": {
			"addr": 0x435F81,
			"code": "08",
			"expected": "06"
		},
	}
}