{
	"codecaves": {
		"NewFlagSetImpl": {
			"access": "re",
			"code": "\
8B36 \
8B85 84FAFFFF \
66 8378 06 15 \
0F83 [codecave:NewFlagSetEXImpl] \
6A 00 \
8B4E 0C \
E8 [0x48D4F0] \
0B87 30510000 \
8987 30510000 \
A8 20 \
0F84 [0x436417] \
8D8F 24010000 \
E8 [0x488E70] \
8D8F 28010000 \
E8 [0x488E70] \
8D8F 2C010000 \
E8 [0x488E70] \
8D8F 30010000 \
E8 [0x488E70] \
8D8F 34010000 \
E8 [0x488E70] \
8D8F 38010000 \
E8 [0x488E70] \
8D8F 3C010000 \
E8 [0x488E70] \
8D8F 40010000 \
E8 [0x488E70] \
8D8F 44010000 \
E8 [0x488E70] \
8D8F 48010000 \
E8 [0x488E70] \
8D8F 4C010000 \
E8 [0x488E70] \
8D8F 50010000 \
E8 [0x488E70] \
8D8F 54010000 \
E8 [0x488E70] \
8D8F 58010000 \
E8 [0x488E70] \
8D8F 5C010000 \
E8 [0x488E70] \
81C7 60010000 \
89F9 \
E8 [0x488E70] \
E9 [0x436417] \
"
		},
		"NewFlagSetEXImpl": {
			"access": "re",
			"code": "\
6A 01 \
8B4E 0C \
E8 [0x48D4F0] \
0987 34510000 \
E9 [(<codecave:NewFlagSetImpl> + 0x13)] \
"
		},
		"NewFlagClearImplANDN": {
			"enable": "<cpuid:bmi1>",
			"access": "re",
			"code": " \
8B36 \
8B85 84FAFFFF \
66 8378 06 15 \
0F83 [codecave:NewFlagClearEXImpl] \
6A 00 \
8B4E 0C \
E8 [0x48D4F0] \
C4E278F287 30510000 \
8987 30510000 \
A8 20 \
0F84 [0x436417] \
8D8F 24010000 \
E8 [0x488E70] \
8D8F 28010000 \
E8 [0x488E70] \
8D8F 2C010000 \
E8 [0x488E70] \
8D8F 30010000 \
E8 [0x488E70] \
8D8F 34010000 \
E8 [0x488E70] \
8D8F 38010000 \
E8 [0x488E70] \
8D8F 3C010000 \
E8 [0x488E70] \
8D8F 40010000 \
E8 [0x488E70] \
8D8F 44010000 \
E8 [0x488E70] \
8D8F 48010000 \
E8 [0x488E70] \
8D8F 4C010000 \
E8 [0x488E70] \
8D8F 50010000 \
E8 [0x488E70] \
8D8F 54010000 \
E8 [0x488E70] \
8D8F 58010000 \
E8 [0x488E70] \
8D8F 5C010000 \
E8 [0x488E70] \
81C7 60010000 \
89F9 \
E8 [0x488E70] \
E9 [0x436417] \
",
		},
		"NewFlagClearImpl": {
			"ignore": "<cpuid:bmi1>",
			"access": "re",
			"code": " \
8B36 \
8B85 84FAFFFF \
66 8378 06 15 \
0F83 [codecave:NewFlagClearEXImpl] \
6A 00 \
8B4E 0C \
E8 [0x48D4F0] \
F7D0 \
2387 30510000 \
8987 30510000 \
A8 20 \
0F84 [0x436417] \
8D8F 24010000 \
E8 [0x488E70] \
8D8F 28010000 \
E8 [0x488E70] \
8D8F 2C010000 \
E8 [0x488E70] \
8D8F 30010000 \
E8 [0x488E70] \
8D8F 34010000 \
E8 [0x488E70] \
8D8F 38010000 \
E8 [0x488E70] \
8D8F 3C010000 \
E8 [0x488E70] \
8D8F 40010000 \
E8 [0x488E70] \
8D8F 44010000 \
E8 [0x488E70] \
8D8F 48010000 \
E8 [0x488E70] \
8D8F 4C010000 \
E8 [0x488E70] \
8D8F 50010000 \
E8 [0x488E70] \
8D8F 54010000 \
E8 [0x488E70] \
8D8F 58010000 \
E8 [0x488E70] \
8D8F 5C010000 \
E8 [0x488E70] \
81C7 60010000 \
89F9 \
E8 [0x488E70] \
E9 [0x436417] \
",
		},
		"NewFlagClearEXImpl": {
			"access": "re",
			"code": "\
6A 01 \
8B4E 0C \
E8 [0x48D4F0] \
F7D0 \
2187 34510000 \
E9 [((<cpuid:bmi1> ? <codecave:NewFlagClearImplANDN> : <codecave:NewFlagClearImpl>) + 0x13)] \
"
		},
		"CheckHPBarFlag": {
			"access": "re",
			"code": "\
83BF 60630000 00 \
0F88 [0x43C137] \
E9 [0x43C6D7] \
",
		},
	},
	"binhacks": {
		"RemoveOriginalInstrs": {
			"addr": "0x433994",
			"code": "<nop:128>",
		},
		"ReplaceInstrJumpTableEntries": {
			"addr": "0x4364F4",
			"expected": "\
<0x433994> \
<0x4339D4> \
",
			"code": "\
<codecave:NewFlagSetImpl> \
(<cpuid:bmi1> ? <codecave:NewFlagClearImplANDN> : <codecave:NewFlagClearImpl>) \
",
		},
		"JumpToCheckHPBarFlag": {
			"addr": "0x43C131",
			"expected": "0F85 [0x43C6D7]",
			"code": "0F85 [codecave:CheckHPBarFlag]",
		},
	},
}