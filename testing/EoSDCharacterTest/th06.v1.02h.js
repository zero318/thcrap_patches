{
	"options": {
		"TH6Test_SpellcardCount": {
			"val": "41",
			"type": "i8"
		}
	},
	"codecaves": {
		"TH6Test_NewCATKArray": ""
	},
	"binhacks": {
		"TH6Test_CATKArray": {
			"addr": ["Rx96E1", "Rx988B", "Rx2B9F0", "Rx2F4F8"],
			"code": "<codecave:TH6Test_NewCATKArray>",
			"expected": "D0BC6900"
		},
		"TH6Test_CATKArray2": {
			"addr": ["Rx1BC4F", "Rx1BD14"],
			"code": "B8<codecave:TH6Test_NewCATKArray> 90",
			"expected": "8B45 08 83C0 30"
		},
		"TH6Test_CATKArray18": {
			"addr": ["Rx2E2AD","Rx2E2B0"],
			"code": "<codecave:TH6Test_NewCATKArray+18>",
			"expected": "E8BC6900"
		},
		"TH6Test_CATKArray3C": {
			"addr": ["Rx2EA57","Rx2E268", "Rx2EB2F"],
			"code": "<codecave:TH6Test_NewCATKArray+3C>",
			"expected": "0CBD6900"
		},
		"TH6Test_CATKArray3E": {
			"addr": ["Rx2EA74", "Rx2EB3D"],
			"code": "<codecave:TH6Test_NewCATKArray+3E>",
			"expected": "0EBD6900"
		},
		"TH6Test_CATKCount": {
			"addr": ["Rx1BC71", "Rx2B4C0", "Rx2BA0D", "Rx2E257","Rx2EA2D"],
			"code": "41",
			"expected": "40",
			"ignore": false
		},
		"TH6Test_CATKCountNew": {
			"addr": ["Rx1BC71", "Rx2B4C0", "Rx2BA0D", "Rx2E257","Rx2EA2D"],
			"code": "<option:TH6Test_SpellcardCount>",
			"expected": "40",
			"ignore": true
		}
	}
}