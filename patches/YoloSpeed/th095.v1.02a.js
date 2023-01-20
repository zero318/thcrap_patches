{
	"binhacks": {
		"DisableSpeedChanges_A": {
			"addr": [ 0x4133FA, 0x41DB6A, 0x4307B3, 0x43208F ],
			"code": "<nop:10>",
			"expected": "C705 <0x4BDED8> ????????"
		},
		"DisableSpeedChanges_B": {
			"addr": [ 0x413FA8, 0x426F16, 0x427253 ],
			"code": "<nop:6>",
			"expected": "8915 <0x4BDED8>"
		},
		"DisableSpeedChanges_C": {
			"addr": 0x4320E0,
			"code": "DDD8 <nop:4>",
			"expected": "D91D <0x4BDED8>"
		}
	}
}