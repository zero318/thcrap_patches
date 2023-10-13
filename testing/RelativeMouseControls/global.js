{
	"options": {
		"thmousex_path": {
			"type": "s",
			"val": "E:\\Touhou_Stuff\\tools\\ThMouseX\\ThMouseX.dll"
		}
	},
	"codecaves": {
		"inject_thmousex_patch_post_init": {
			"access": "re",
			"export": true,
			"code": "\
68 <option:thmousex_path> \
E8 [inject_LoadLibraryU] \
C3 \
"
		}
	},
}