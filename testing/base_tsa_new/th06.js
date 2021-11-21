{
	"binhacks": {
		"right_align": {
			"title": "Correct right-alignment",
			"expected": "\
8B55 AC \
83C2 01 \
8955 88 \
DB45 88 \
D95D 84 \
D945 8C \
D84D 84 \
D835 4CA44600 \
",
			"code": "\
FF75 AC \
FF75 B0 \
E8 [GetTextExtentForFontID] \
83C0 02 \
8945 90 \
C745 94 00000000 \
DF6D 90 \
"
		},
		"ascii_patch": {
			"title": "Hook ZUN's variadic ASCII printing function to perform a bunch of intricate hacks in C++ code",
			"code": "\
8D44E4 10 \
50 \
FF74E4 10 \
FF74E4 10 \
68 <codecave:ascii_draw_stub> \
E9 [ascii_vpatchf] \
CC \
"
		},
	},
	"breakpoints": {
		"spell_name": {
			"spell_id": "esi+0xE",
			"spell_name": "esi+0x10",
			"cavesize": "5"
		},
	}
}
