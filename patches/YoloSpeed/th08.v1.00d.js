{
	"binhacks": {
		"TH8DisableIntentionalSlowdown_18": {
			"title": "Disable slowdown in funcCall 18, used in stages 6a/8b/Ex.",
			"addr": "0x424FA5",
			"code": "D9E8 90",
			"expected": "DB45 FC",
			"ignore": false
		},
		"TH8DisableIntentionalSlowdown_28_29": {
			"title": "Disable slowdown in funcCalls 28/29, used in Youmu's last word.",
			"addr": ["0x4251BF", "0x425338"],
			"code": "D9E8 90",
			"expected": "DB40 10",
			"ignore": false
		}
	}
}