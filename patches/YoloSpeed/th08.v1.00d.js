{
	"binhacks": {
		// Disable slowdown in funcCalls 28/29, used in Youmu's last word.
		"DisableSpeedChanges_A": {
			"addr": [ 0x4251BF, 0x425338 ],
			"code": "D9E8 90",
			"expected": "DB40 10"
		},
		// Disable slowdown in funcCall 18, used in stages 6a/8b/Ex.
		"DisableSpeedChanges_B": {
			"addr": 0x424FA5,
			"code": "D9E8 90",
			"expected": "DB45 FC"
		},
		"DisableTimeStops_A": {
			"addr": 0x425082,
			"code": "<nop:6>",
			"expected": "880D <0x160F534>"
		}
	}
}