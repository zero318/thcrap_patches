{
	"options": {
		"RankConfig_DifficultyAddress": { "type": "i32", "val": "0x0160F538" },
		"RankConfig_RankDefaultOffset": { "type": "i32", "val": "0x0003DE2C" },
		"RankConfig_RankMinOffset": { "type": "i32", "val": "0x0003DE34" },
		"RankConfig_RankMaxOffset": { "type": "i32", "val": "0x0003DE30" },
		
		"RankConfig_Easy_RankDefault": { "type": "i32", "val": 10 },
		"RankConfig_Easy_RankMin": { "type": "i32", "val": 8 },
		"RankConfig_Easy_RankMax": { "type": "i32", "val": 16 },
		"RankConfig_Normal_RankDefault": { "type": "i32", "val": 10 },
		"RankConfig_Normal_RankMin": { "type": "i32", "val": 8 },
		"RankConfig_Normal_RankMax": { "type": "i32", "val": 16 },
		"RankConfig_Hard_RankDefault": { "type": "i32", "val": 8 },
		"RankConfig_Hard_RankMin": { "type": "i32", "val": 8 },
		"RankConfig_Hard_RankMax": { "type": "i32", "val": 12 },
		"RankConfig_Lunatic_RankDefault": { "type": "i32", "val": 8 },
		"RankConfig_Lunatic_RankMin": { "type": "i32", "val": 8 },
		"RankConfig_Lunatic_RankMax": { "type": "i32", "val": 12 },
		"RankConfig_Extra_RankDefault": { "type": "i32", "val": 16 },
		"RankConfig_Extra_RankMin": { "type": "i32", "val": 15 },
		"RankConfig_Extra_RankMax": { "type": "i32", "val": 16 },
		"RankConfig_Phantasm_RankDefault": { "type": "i32", "val": 16 },
		"RankConfig_Phantasm_RankMin": { "type": "i32", "val": 15 },
		"RankConfig_Phantasm_RankMax": { "type": "i32", "val": 16 },
		"RankConfig_6_RankDefault": { "type": "i32", "val": 0 },
		"RankConfig_6_RankMin": { "type": "i32", "val": 0 },
		"RankConfig_6_RankMax": { "type": "i32", "val": 0 },
		"RankConfig_7_RankDefault": { "type": "i32", "val": 0 },
		"RankConfig_7_RankMin": { "type": "i32", "val": 0 },
		"RankConfig_7_RankMax": { "type": "i32", "val": 0 }
	},
	"binhacks": {
		"RankConfig_TH8_CallNewFunc_1": {
			"addr": "0x43AFAD",
			"code": "[codecave:RankConfig_NewRankFunc]",
			"expected": "85090000"
		},
		"RankConfig_TH8_CallNewFunc_2": {
			"addr": "0x43B39B",
			"code": "[codecave:RankConfig_NewRankFunc]",
			"expected": "97050000"
		}
	}
}