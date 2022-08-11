{
	"options": {
		"struct_size_DSTB": {
			"type": "u32",
			"val": "<option:struct_size#>"
		},
		"struct_size#DSTB_add": {
			"type": "u32",
			"val": 4
		},
		"struct1_acount": {
			"type": "u32",
			"val": 10
		},
		"struct2_acount": {
			"type": "u32",
			"val": 5
		}
	},
	"codecaves": {
		"FillFieldB_patch_InitDStruct1Fields": {
			"export": true,
			"access": "re",
			"code": "\
8B44E4 04 \
C780 <option:struct_size_DSTB> <option:struct1_acount> \
C3 \
"
		},
		"FillFieldB_patch_InitDStruct2Fields": {
			"export": true,
			"access": "re",
			"code": "\
8B44E4 04 \
C780 <option:struct_size_DSTB> <option:struct2_acount> \
C3 \
"
		},
		"call_a_spam": {
			"access": "re",
			"code": "\
FFB3 <option:struct_size_DSTB> \
E8 [Rx10E0] \
83C4 04 \
C3 \
"
		}
	},
	"binhacks": {
		"call_a_spam": {
			"addr": "Rx102C",
			"code": "E8 [codecave:call_a_spam]",
			"expected": "<nop:5>"
		}
	}
}