{
	"options": {
		"struct_size_DSTA": {
			"type": "u32",
			"val": "<option:struct_size#>"
		},
		"struct_size#DSTA_add": {
			"type": "u32",
			"val": 4
		},
		"struct1_message": {
			"type": "s",
			"val": "yeet1"
		},
		"struct2_message": {
			"type": "s",
			"val": "yeet2"
		}
	},
	"codecaves": {
		"FillFieldA_patch_InitDStruct1Fields": {
			"export": true,
			"access": "re",
			"code": "\
8B44E4 04 \
C780 <option:struct_size_DSTA> <option:struct1_message> \
C3 \
"
		},
		"FillFieldA_patch_InitDStruct2Fields": {
			"export": true,
			"access": "re",
			"code": "\
8B44E4 04 \
C780 <option:struct_size_DSTA> <option:struct2_message> \
C3 \
"
		},
		"call_message_print": {
			"access": "re",
			"code": "\
FFB3 <option:struct_size_DSTA> \
E8 [Rx1080] \
83C4 04 \
C3 \
"
		}
	},
	"binhacks": {
		"call_message_print": {
			"addr": "Rx1027",
			"code": "E8 [codecave:call_message_print]",
			"expected": "<nop:5>"
		}
	}
}