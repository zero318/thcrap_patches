{
	"options": {
		"thcrap_loader_str": { "type": "s", "val": "\\bin\\thcrap_loader.exe" },
		"CreateProcessA_str": { "type": "s", "val": "CreateProcessA" },
		"CloseHandle_str": { "type": "s", "val": "CloseHandle" },
		"ExitProcess_str": { "type": "s", "val": "ExitProcess" },
	},
	"codecaves": {
		"LargeAddressAware_patch_init": {
			"access": "re",
			"export": true,
			"code": "\
"
		}
	}
}