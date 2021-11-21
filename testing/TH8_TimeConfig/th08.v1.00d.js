{
	"options": {
		"TH8Time_Stage1_Easy_Second_Time": { "type": "i32", "val": 2000 },
		"TH8Time_Stage1_Normal_Second_Time": { "type": "i32", "val": 2500 },
		"TH8Time_Stage1_Hard_Second_Time": { "type": "i32", "val": 2700 },
		"TH8Time_Stage1_Lunatic_Second_Time": { "type": "i32", "val": 3000 },
		
		"TH8Time_Stage2_Easy_Second_Time": { "type": "i32", "val": 6500 },
		"TH8Time_Stage2_Normal_Second_Time": { "type": "i32", "val": 7200 },
		"TH8Time_Stage2_Hard_Second_Time": { "type": "i32", "val": 7200 },
		"TH8Time_Stage2_Lunatic_Second_Time": { "type": "i32", "val": 7200 },
		
		"TH8Time_Stage3_Easy_Second_Time": { "type": "i32", "val": 7500 },
		"TH8Time_Stage3_Normal_Second_Time": { "type": "i32", "val": 8500 },
		"TH8Time_Stage3_Hard_Second_Time": { "type": "i32", "val": 8800 },
		"TH8Time_Stage3_Lunatic_Second_Time": { "type": "i32", "val": 8800 },
		
		"TH8Time_Stage4a_Easy_Second_Time": { "type": "i32", "val": 9999 },
		"TH8Time_Stage4a_Normal_Second_Time": { "type": "i32", "val": 9999 },
		"TH8Time_Stage4a_Hard_Second_Time": { "type": "i32", "val": 9999 },
		"TH8Time_Stage4a_Lunatic_Second_Time": { "type": "i32", "val": 9999 },
		
		"TH8Time_Stage4b_Easy_Second_Time": { "type": "i32", "val": 7500 },
		"TH8Time_Stage4b_Normal_Second_Time": { "type": "i32", "val": 8500 },
		"TH8Time_Stage4b_Hard_Second_Time": { "type": "i32", "val": 8500 },
		"TH8Time_Stage4b_Lunatic_Second_Time": { "type": "i32", "val": 8500 },
		
		"TH8Time_Stage5_Easy_Second_Time": { "type": "i32", "val": 9999 },
		"TH8Time_Stage5_Normal_Second_Time": { "type": "i32", "val": 9999 },
		"TH8Time_Stage5_Hard_Second_Time": { "type": "i32", "val": 9999 },
		"TH8Time_Stage5_Lunatic_Second_Time": { "type": "i32", "val": 9999 },
		
		"TH8Time_Stage6a_Easy_Second_Time": { "type": "i32", "val": 0 },
		"TH8Time_Stage6a_Normal_Second_Time": { "type": "i32", "val": 0 },
		"TH8Time_Stage6a_Hard_Second_Time": { "type": "i32", "val": 0 },
		"TH8Time_Stage6a_Lunatic_Second_Time": { "type": "i32", "val": 0 },
		
		"TH8Time_Stage6b_Easy_Second_Time": { "type": "i32", "val": 0 },
		"TH8Time_Stage6b_Normal_Second_Time": { "type": "i32", "val": 0 },
		"TH8Time_Stage6b_Hard_Second_Time": { "type": "i32", "val": 0 },
		"TH8Time_Stage6b_Lunatic_Second_Time": { "type": "i32", "val": 0 },
		
		"TH8Time_StageEx_Extra_Second_Time": { "type": "i32", "val": 10 }
	},
	"codecaves": {
		"TH8Time_CallGetCurrentTimeOrbCount": "58 // 55 // 89C5 // 2D 601B4200 // 8945 FC // 89E8 // 5D // 83E8 05 // 50 // C3",
		"TH8Time_CallGetRequiredTimeOrbs": "58 // 55 // 89C5 // 2D 801B4200 // 8945 FC // 89E8 // 5D // 83E8 05 // 50 // C3",
		"TH8Time_GetTimeIndex": "55 // B9 08F56001 // E8 [0x00421B60] // 89C5 // E8 [codecave:TH8Time_GetFirstTimeFunc] // 39C5 // 7D 04 // 5D // 31C0 // C3 // CC // CC // E8 [codecave:TH8Time_GetSecondTimeFunc] // 39C5 // 5D // 31C0 // 7D 04 // B0 01 // C3 // CC // B0 02 // C3 // CC // CC",
		"TH8Time_GetIndexOfTime": "E8 [codecave:TH8Time_GetFirstTimeFunc] // 39C2 // 7D 03 // 31C0 // C3 // E8 [codecave:TH8Time_GetSecondTimeFunc] // 39C2 // 0F9DC0 // 25 FF000000 // 40 // C3 // CC // CC // CC",
		"TH8Time_GetCurrentTimeLimit": "B9 08F56001 // E8 <codecave:TH8Time_CallGetCurrentTimeOrbCount> // 89C2 // E8 6F A3 6B DE 39 C2 0F 8D 67 A3 6B DE C3 CC CC",
		"TH8Time_VarDump": "00000000 // 00000000 // 00000000",
		"TH8Time_GetTimeFunc": "A1 10F56001 // 8B40 3C // C3",
		"TH8Time_GetTrashTimeFunc": "A1 10F56001 // 8B40 44 // C3",
		"TH8Time_GetFirstTimeFunc": "A1 <codecave:TH8Time_VarDump+0> // C3 // CC // CC",
		"TH8Time_GetSecondTimeFunc": "A1 10F56001 // 8B40 40 // C3",
		"TH8Time_GetLivesLost": "A1 10F56001 // 8B40 68 // C3 // CC // CC",
		"TH8Time_GetBombsUsed": "A1 10F56001 // 8B80 88000000 // C3",
		"TH8Time_GetLifeLimit": "A1 <codecave:TH8Time_VarDump+4> // C3 // CC // CC",
		"TH8Time_GetBombLimit": "A1 <codecave:TH8Time_VarDump+8> // C3 // CC // CC",
		"TH8Time_GetTimeHUDColor": "",
		"TH8Time_ExtendedTimeSystem_EnableTest": "<option:TH8Time_ExtendedTimeSystem_Enable>",
		"TH8Time_LifeBombLimitHUD_EnableTest": "<option:TH8Time_LifeBombLimitHUD_Enable>"
		
		
		
	},
	"binhacks": {
		"TH8Time_TimeAdvanceECL": {
			"addr": "0x41E713",
			"code": "<option:TH8Time_Kaguya_Time_Advance>",
			"expected": "01"
		},
		"TH8Time_SecondTimeHUDColor_EnableTest": {
			"addr": "0x436E36",
			"code": "<option:TH8Time_ExtendedTimeSystem_Enable> F56001 // E8 3EADFEFF // 3BF0 // 7C 0F // 68 C0F0FFFF",
			"expected": "8BF0 // B9 08F56001 // E8 3EADFEFF // 3BF0 // 7C 0F // 68 C0F0FFFF",
			"ignore": true
		},
		"TH8Time_SecondTimeHUDColor_EnableFalse": {
			"addr": "0x436E36",
			"code": "8BF0 // B9 08F56001 // E8 3EADFEFF // 3BF0 // 7C 0F // 68 C0F0FFFF",
			"expected": "00000000 F56001 // E8 3EADFEFF // 3BF0 // 7C 0F // 68 C0F0FFFF",
			"ignore": true
		},
		"TH8Time_SecondTimeHUDColor_EnableTrue": {
			"addr": "0x436E36",
			"code": "89C2 // E8 [codecave:TH8Time_GetIndexOfTime] // 85C0 // 74 14 // 8B0485 <codecave:TH8Time_ColorTable> // 50 // 66 90",
			"expected": "<option:TH8Time_ExtendedTimeSystem_Enable> F56001 // E8 3EADFEFF // 3BF0 // 7C 0F // 68 C0F0FFFF",
			"ignore": true
		},
		"TH8Time_SecondTimeHUDColor_EnableTest": {
			"addr": "0x436E36",
			"code": "<option:TH8Time_ExtendedTimeSystem_Enable>",
			"expected": "8B"
		},
		"TH8Time_SecondTimeHUDColor_EnableFalse": {
			"addr": "0x436E36",
			"code": "8B",
			"expected": "00"
		},
		"TH8Time_SecondTimeHUDColor_EnableTrue": {
			"addr": "0x436E36",
			"code": "89C2 // E8 [codecave:TH8Time_GetIndexOfTime] // 85C0 // 74 14 // 8B0485 <codecave:TH8Time_ColorTable> // 50 // 66 90",
			"expected": "<option:TH8Time_ExtendedTimeSystem_Enable> F0 // B9 08F56001 // E8 3EADFEFF // 3BF0 // 7C 0F // 68 C0F0FFFF"
		},
		"TH8Time_SecondTimeECLVAR_EnableTest": {
			"addr": "0x41FB2F",
			"code": "<option:TH8Time_ExtendedTimeSystem_Enable> 01 // E8 47200000 // 33D2 // 3BF0 // 0F9CC2 // 4A // 83E2 02 // 8BC2 // EB 3E",
			"expected": "B9 08F56001 // E8 47200000 // 33D2 // 3BF0 // 0F9CC2 // 4A // 83E2 02 // 8BC2 // EB 3E",
			"ignore": true
		},
		"TH8Time_SecondTimeECLVAR_EnableFalse": {
			"addr": "0x41FB2F",
			"code": "B9 08F56001 // E8 47200000 // 33D2 // 3BF0 // 0F9CC2 // 4A // 83E2 02 // 8BC2 // EB 3E",
			"expected": "00000000 01 // E8 47200000 // 33D2 // 3BF0 // 0F9CC2 // 4A // 83E2 02 // 8BC2 // EB 3E",
			"ignore": true
		},
		"TH8Time_SecondTimeECLVAR_EnableTrue": {
			"addr": "0x41FB2F",
			"code": "89F1 // E8 [codecave:TH8Time_GetIndexOfTime] // EB 4E // CC // CC // CC // CC // CC // CC // CC // CC // CC // CC // CC // CC // CC // CC // CC // CC",
			"expected": "<option:TH8Time_ExtendedTimeSystem_Enable> 01 // E8 47200000 // 33D2 // 3BF0 // 0F9CC2 // 4A // 83E2 02 // 8BC2 // EB 3E",
			"ignore": true
		},
		"TH8Time_SecondTimeECLVAR_EnableTest": {
			"addr": "0x41FB2F",
			"code": "<option:TH8Time_ExtendedTimeSystem_Enable>",
			"expected": "B9"
		},
		"TH8Time_SecondTimeECLVAR_EnableFalse": {
			"addr": "0x41FB2F",
			"code": "B9",
			"expected": "00"
		},
		"TH8Time_SecondTimeECLVAR_EnableTrue": {
			"addr": "0x41FB2F",
			"code": "89F1 // E8 [codecave:TH8Time_GetIndexOfTime] // EB 4E // CC // CC // CC // CC // CC // CC // CC // CC // CC // CC // CC // CC // CC // CC // CC // CC",
			"expected": "<option:TH8Time_ExtendedTimeSystem_Enable> 08F56001 // E8 47200000 // 33D2 // 3BF0 // 0F9CC2 // 4A // 83E2 02 // 8BC2 // EB 3E"
		},
		"TH8Time_LoadRequirementVars_EnableTest": {
			"addr": "0x43B259",
			"code": "",
			"expected": "8B 45 FC 8B 80 C4 DD 03 00 C1 E0 04 8B 4D FC 8B 49 08 8B 15 38 F5 60 01 8B 84 90 F0 77 4C 00 89 41 40 EB 0A"
		}
	}
}


