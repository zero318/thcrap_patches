{
	"codecaves": {
		"TestString": "74 68 36 5F 75 64 3F 3F 3F 3F 2E 72 70 79 00 00",
		"StrCStrp": "55 // 8BEC // 51 // 52 // 56 // 57 // 8B75 08 // 89F7 // 31C9 // F7D1 // 30C0 // FC // F2 AE // F7D1 // 49 // 89F7 // 8A45 0C // F2 AE // E3 16 // 89FE // F3 AE // 89CA // 89F9 // 29F1 // 29CA // 87FE // F3 A4 // 89D1 // 87F7 // 77 E6 // 8B45 08 // 5F // 5E // 5A // 59 // C9 // C3",
		"MemCStrp": "55 // 8BEC // 51 // 52 // 56 // 57 // 8B75 F8 // 8B4D F0 // EB [codecave:StrCStrp+1A]",
		"StrSStrp": "55 // 8BEC // 51 // 52 // 53 // 56 // 57 // 8B5D 0C // 8A03 // 84C0 // 74 31 // 8B75 08 // 89F7 // 31C9 // F7D1 // 30C0 // FC // F2 AE // F7D1 // 49 // 89F7 // 8A03 // 43 // F2 AE // E3 E1 // 89FE // F3 AE // 89CA // 89F9 // 29F1 // 29CA // 87FE // F3 A4 // 89D1 // 87F7 // 77 E6 // EB C9 // 8B45 08 // 5F // 5E // 5B // 5A // 59 // C9 // C3"
	},
	"binhacks": {
		"StrCStrpTest": {
			"addr": "Rx2C6D2",
			"code": "CC 6A 2F FF 75 08 E8 [codecave:StrCStrp] CC",
			"ignore": true
		},
		"StrCStrpTest2": {
			"addr": "Rx38379",
			"code": "90 // 90 // 90 // 90 // 90 // 6A 3F // 68 <codecave:TestString> // E8 [codecave:StrCStrp] CC"
		}
	}
}