{
	"binhacks": {
		"TH6_FixLaserBlend_A": {
			"addr": 0x416008,
			"code": "\
3D FF000000 \
B9 FF000000 \
0F4CC8 \
8B55 D8 \
884A 7F \
E9 [0x4160F1] \
<nop:12> \
",
		},
		"TH6_FixLaserBlend_B": {
			"addr": 0x4162D9,
			"code": "DB81 50020000",
		},
		"TH6_FixLaserBlend_C": {
			"addr": 0x4162F0,
			"code": "\
8D90 01FFFFFF \
F7DA \
31C9 \
3D FF000000 \
0F4CCA \
8B45 D8 \
8848 7F \
E9 [0x41638F] \
<nop:4> \
"
		}
	}
}