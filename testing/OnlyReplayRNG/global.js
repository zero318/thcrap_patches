{
	"codecaves": {
		"ret_zero_float": {
			"access": "re",
			"code": "D9EEC3"
		},
		"ret_zero_float_sse": {
			"access": "re",
			"code": "0F57C0C3"
		},
		"ret_zero_int": {
			"access": "re",
			"code": "31C0C3"
		}
	},
	"binhacks": {
		"anm_rng_zero_float": {
			"code": "[codecave:ret_zero_float]"
		},
		"anm_rng_zero_int": {
			"code": "[codecave:ret_zero_int]"
		}
	}
}