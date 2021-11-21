{
	"options": {
		"SimpleOptionTest": {
			"type": "i32",
			"val": "0xC0F0FFFF"
		}
	},
	"codecaves": {
		"TestCave": "E8 [0x00421B60] // C3",
		"TestCave2": "89C2 // E8 [codecave:TH8Time_GetIndexOfTime] // 85C0 // 74 14 // 8B0485 <0x0> // 50 // 66 90",
		"TH8Time_GetIndexOfTime": "E8 [0x00421B60] // 39C2 // 7D 03 // 31C0 // C3 // E8 [0x00421B60] // 39C2 // 0F9DC0 // 25 FF000000 // 40 // C3 // CC // CC // CC",
		"MemCaveTest": 32
	},
	"binhacks": {
		"test1": {
			"addr": "0x4002D8",
			"code": "E8 [codecave:MemCaveTest]"
		}
	}
}