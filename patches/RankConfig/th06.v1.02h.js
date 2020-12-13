{
	"options": {
		"RankConfig_DifficultyAddress": { "type": "i32", "val": "0x0069BCB0" },
		"RankConfig_RankDefaultOffset": { "type": "i32", "val": "0x00001A70" },
		"RankConfig_RankMinOffset": { "type": "i32", "val": "0x00001A78" },
		"RankConfig_RankMaxOffset": { "type": "i32", "val": "0x00001A74" },
		
		"RankConfig_Easy_RankDefault": { "type": "i32", "val": 16 },
		"RankConfig_Easy_RankMin": { "type": "i32", "val": 12 },
		"RankConfig_Easy_RankMax": { "type": "i32", "val": 20 },
		"RankConfig_Normal_RankDefault": { "type": "i32", "val": 16 },
		"RankConfig_Normal_RankMin": { "type": "i32", "val": 10 },
		"RankConfig_Normal_RankMax": { "type": "i32", "val": 32 },
		"RankConfig_Hard_RankDefault": { "type": "i32", "val": 16 },
		"RankConfig_Hard_RankMin": { "type": "i32", "val": 10 },
		"RankConfig_Hard_RankMax": { "type": "i32", "val": 32 },
		"RankConfig_Lunatic_RankDefault": { "type": "i32", "val": 16 },
		"RankConfig_Lunatic_RankMin": { "type": "i32", "val": 10 },
		"RankConfig_Lunatic_RankMax": { "type": "i32", "val": 32 },
		"RankConfig_Extra_RankDefault": { "type": "i32", "val": 16 },
		"RankConfig_Extra_RankMin": { "type": "i32", "val": 14 },
		"RankConfig_Extra_RankMax": { "type": "i32", "val": 18 },
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
	"binhacks": {
		"RankConfig_TH6_CallNewFunc_1": {
			"addr": "0x41BDA0",
			"code": "8B4D 08 // E8 [codecave:RankConfig_NewRankFunc] // 0F1F8400 00000000 // 0F1F8400 00000000 // 0F1F8400 00000000 // 0F1F8400 00000000 // 0F1F8400 00000000 // 0F1F8400 00000000 // 0F1F8400 00000000 // 0F1F4000 // 3E",
			"expected": "A1 B0BC6900 // 6BC0 0C // 8B4D 08 // 8B80 64654700 // 8981 701A0000 // A1 B0BC6900 // 6BC0 0C // 8B4D 08 // 8B80 68654700 // 8981 781A0000 // A1 B0BC6900 // 6BC0 0C // 8B4D 08 // 8B80 6C654700 // 8981 741A00"
		},
		"RankConfig_TH67_CallNewFunc_2": {
			"addr": "0x41BFBE",
			"code": "6690 // 8B4D 08 // E8 [codecave:RankConfig_NewRankFunc] // 0F1F8400 00000000 // 0F1F8400 00000000 // 0F1F8400 00000000 // 0F1F8400 00000000 // 0F1F4000",
			"expected": "A1 B0BC6900 // 6BC0 0C // 8B4D 08 // 8B80 2C654700 // 8981 781A0000 // A1 B0BC6900 // 6BC0 0C // 8B4D 08 // 8B80 30654700 // 8981 741A0000"
		}
	}
}