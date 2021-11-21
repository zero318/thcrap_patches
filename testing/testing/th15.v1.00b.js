{
	"codecaves": {
		"ResetsInChapter_IntVar": {
			"access": "re",
			"code": "\
A1 <0x4E75B8> \
8BE5 \
5D \
C2 0400 \
"
		},
		"ResetsInChapter_IntVarPtr": {
			"access": "re",
			"code": "\
83F8 61 \
0F85 [0x42F1B0] \
B8 <0x4E75B8> \
5E \
5D \
C2 0400 \
"
		},
		"ResetsInChapter_FloatVar": {
			"access": "re",
			"code": "\
DB05 <0x4E75B8> \
8BE5 \
5D \
C2 0400 \
"
		},
	},
	"binhacks": {
		"ResetsInChapter_IntVarJumpTable": {
			"addr": 0x42F0AC,
			"code": "<codecave:ResetsInChapter_IntVar>",
			"expected": "CC CC CC CC"
		},
		"ResetsInChapter_IntVarPtrJumpTable": {
			"addr": 0x42F0C1,
			"code": "0F87 [codecave:ResetsInChapter_IntVarPtr]",
			"expected": "0F87 [0x42F1B0]"
		},
		"ResetsInChapter_FloatVarJumpTable": {
			"addr": 0x42FCD4,
			"code": "<0x42FB4C> <codecave:ResetsInChapter_FloatVar>",
			"expected": "CC CC CC CC CC CC CC CC"
		},
		"IntJumpTableBounds": {
			"addr": 0x42E923,
			"code": "61",
			"expected": "60"
		},
		"FloatJumpTableBounds": {
			"addr": 0x42F253,
			"code": "61",
			"expected": "5F"
		}
	},
}