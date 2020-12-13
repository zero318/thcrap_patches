{
	"options": {
		"RankConfig_DifficultyAddress": { "type": "i32", "val": "0x00000000" },
		"RankConfig_RankDefaultOffset": { "type": "i32", "val": "0x00000000" },
		"RankConfig_RankMinOffset": { "type": "i32", "val": "0x00000000" },
		"RankConfig_RankMaxOffset": { "type": "i32", "val": "0x00000000" },
		
		"RankConfig_Easy_RankDefault": { "type": "i32", "val": 0 },
		"RankConfig_Easy_RankMin": { "type": "i32", "val": 0 },
		"RankConfig_Easy_RankMax": { "type": "i32", "val": 0 },
		"RankConfig_Normal_RankDefault": { "type": "i32", "val": 0 },
		"RankConfig_Normal_RankMin": { "type": "i32", "val": 0 },
		"RankConfig_Normal_RankMax": { "type": "i32", "val": 0 },
		"RankConfig_Hard_RankDefault": { "type": "i32", "val": 0 },
		"RankConfig_Hard_RankMin": { "type": "i32", "val": 0 },
		"RankConfig_Hard_RankMax": { "type": "i32", "val": 0 },
		"RankConfig_Lunatic_RankDefault": { "type": "i32", "val": 0 },
		"RankConfig_Lunatic_RankMin": { "type": "i32", "val": 0 },
		"RankConfig_Lunatic_RankMax": { "type": "i32", "val": 0 },
		"RankConfig_Extra_RankDefault": { "type": "i32", "val": 0 },
		"RankConfig_Extra_RankMin": { "type": "i32", "val": 0 },
		"RankConfig_Extra_RankMax": { "type": "i32", "val": 0 },
		"RankConfig_Phantasm_RankDefault": { "type": "i32", "val": 0 },
		"RankConfig_Phantasm_RankMin": { "type": "i32", "val": 0 },
		"RankConfig_Phantasm_RankMax": { "type": "i32", "val": 0 },
		"RankConfig_6_RankDefault": { "type": "i32", "val": 0 },
		"RankConfig_6_RankMin": { "type": "i32", "val": 0 },
		"RankConfig_6_RankMax": { "type": "i32", "val": 0 },
		"RankConfig_7_RankDefault": { "type": "i32", "val": 0 },
		"RankConfig_7_RankMin": { "type": "i32", "val": 0 },
		"RankConfig_7_RankMax": { "type": "i32", "val": 0 }
	},
	"codecaves": {
		"RankConfig_NewRankFunc": "55 // A1 <option:RankConfig_DifficultyAddress> // 8B2C85 <codecave:RankConfig_RankDefaultTable> // 89A9 <option:RankConfig_RankDefaultOffset> // 8B2C85 <codecave:RankConfig_RankMinTable> // 89A9 <option:RankConfig_RankMinOffset> // 8B2C85 <codecave:RankConfig_RankMaxTable> // 89A9 <option:RankConfig_RankMaxOffset> // 5D // C3 // CC // CC",
		"RankConfig_Present": "08010300",
		"RankConfig_RankDefaultTable": "<option:RankConfig_Easy_RankDefault><option:RankConfig_Normal_RankDefault><option:RankConfig_Hard_RankDefault><option:RankConfig_Lunatic_RankDefault><option:RankConfig_Extra_RankDefault><option:RankConfig_Phantasm_RankDefault><option:RankConfig_6_RankDefault><option:RankConfig_7_RankDefault>",
		"RankConfig_RankMinTable": "<option:RankConfig_Easy_RankMin><option:RankConfig_Normal_RankMin><option:RankConfig_Hard_RankMin><option:RankConfig_Lunatic_RankMin><option:RankConfig_Extra_RankMin><option:RankConfig_Phantasm_RankMin><option:RankConfig_6_RankMin><option:RankConfig_7_RankMin>",
		"RankConfig_RankMaxTable": "<option:RankConfig_Easy_RankMax><option:RankConfig_Normal_RankMax><option:RankConfig_Hard_RankMax><option:RankConfig_Lunatic_RankMax><option:RankConfig_Extra_RankMax><option:RankConfig_Phantasm_RankMax><option:RankConfig_6_RankMax><option:RankConfig_7_RankMax>"
	}
}