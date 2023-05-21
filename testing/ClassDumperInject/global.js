{
	"options": {
		"rtti_dll_path": {
			"type": "s",
			"val": "F:\\My Programs Expansion\\__code_tools\\ClassDumper2\\DX11\\ClassDumper2.dll"
		}
	},
	"codecaves": {
		"inject_rtti_crap_patch_init": {
			//"ignore": true,
			"access": "re",
			"export": true,
			"code": "\
68 <option:rtti_dll_path> \
E8 [inject_LoadLibraryU] \
C3 \
"
		}
	}
}