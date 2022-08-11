{
	"options": {
		"struct_size#": {
			"type": "u32",
			"val": 0xC,
			"op": "+"
		},
		"InitDStruct1Fields_str": {
			"type": "s",
			"val": "InitDStruct1Fields"
		},
		"InitDStruct2Fields_str": {
			"type": "s",
			"val": "InitDStruct2Fields"
		}
	},
	"codecaves": {
		"FillDStruct1Fields": {
			"access": "re",
			"code": "\
50 \
68 <option:InitDStruct1Fields_str> \
E8 [patch_func_run_all] \
83C4 08 \
89F0 \
E9 [Rx1000] \
"
		},
		"FillDStruct2Fields": {
			"access": "re",
			"code": "\
50 \
68 <option:InitDStruct2Fields_str> \
E8 [patch_func_run_all] \
83C4 08 \
89F0 \
E9 [Rx1000] \
"
		}
	},
	"binhacks": {
		"change_alloc_size": {
			"addr": "Rx1127",
			"ignore": "<option:struct_size#> == 0xC",
			"code": "6A (u8:<option:struct_size#>)",
			"expected": "6A 0C"
		},
		"hook_DStruct1": {
			"addr": "Rx1297",
			"ignore": "<option:struct_size#> == 0xC",
			"code": "E8 [codecave:FillDStruct1Fields]",
			"expected": "E8 [Rx1000]"
		},
		"hook_DStruct2": {
			"addr": "Rx12C0",
			"ignore": "<option:struct_size#> == 0xC",
			"code": "E8 [codecave:FillDStruct2Fields]",
			"expected": "E8 [Rx1000]"
		},
		"loop_at_end": {
			"addr": "Rx12D2",
			"code": "EB FE",
			"expected": "C3 CC"
		}
	}
}