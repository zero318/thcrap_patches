{
	"codecaves": {
		"TH8ScorefileFixer_VRSMContents": "303130306400 // 0000 // 00D40C00 // B96168A2",
		"TH8ScorefileFixer_FixVRSM": "85C0 // 74 0C // 40 // C3 // CCCCCCCCCCCCCCCCCCCC // 0F2805 <codecave:TH8ScorefileFixer_VRSMContents> // 0F1101 // 0F1745 0C // 89C8 // C3"
	},
	"binhacks": {
		"TH8ScorefileFixer": {
			"addr": "0x44869D",
			"code": "83C4 08 // 8B4D 08 // E8 [codecave:TH8ScorefileFixer_FixVRSM] // 8945 FC // 2B45 F0 // 2945 F4",
			"expected": "59 // 59 // 40 // 8945 FC // 8B45 FC // 2B45 F0 // 8B4D F4 // 2BC8 // 894D F4"
		}
	}
}