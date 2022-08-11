{
	"options": {
		"enemy_size_base": { "type": "u32", "val": 0xEC8 },
		"bullet_size_base": { "type": "u32", "val": 0x5C4, },
		"laser_size_base": { "type": "u32", "val": 0x270 },
		"effect_size_base": { "type": "u32", "val": 0x17C },
		"item_size_base": { "type": "u32", "val": 0x144 },
		"enemy_count_base": { "type": "u32", "val": 256 },
		"bullet_count_base": { "type": "u32", "val": 640 },
		"laser_count_base": { "type": "u32", "val": 64 },
		"effect_count_base": { "type": "u32", "val": 512 },
		"item_count_base": { "type": "u32", "val": 512 },
		"enemy_size#": { "type": "u32", "val": "<option:enemy_size_base>" },
		"enemy_count#": { "type": "u32", "val": "<option:enemy_count_base>" },
		"bullet_size#": { "type": "u32", "val": "<option:bullet_size_base>" },
		"bullet_count#": { "type": "u32", "val": "<option:bullet_count_base>" },
		"laser_size#": { "type": "u32", "val": "<option:laser_size_base>" },
		"laser_count#": { "type": "u32", "val": "<option:laser_count_base>" },
		"effect_size#": { "type": "u32", "val": "<option:effect_size_base>" },
		"effect_count#": { "type": "u32", "val": "<option:effect_count_base>" },
		"item_size#": { "type": "u32", "val": "<option:item_size_base>" },
		"item_count#": { "type": "u32", "val": "<option:item_count_base>" },
		"enemy_array_addr": {
			"type": "c",
			"val": "(<option:enemy_size#> * <option:enemy_count#> > <option:enemy_size_base> * <option:enemy_count_base> ? <codecave:enemy_array> + <option:enemy_size#> : 0x4B8898)"
		},
		"bullet_array_addr": {
			"type": "c",
			"val": "(<option:bullet_size#> * <option:bullet_count#> > <option:bullet_size_base> * <option:bullet_count_base> ? <codecave:bullet_array> : 0x40B8E6)"
		},
		"laser_array_addr": {
			"type": "c",
			"val": "(<option:laser_size#> * <option:laser_count#> > <option:laser_size_base> * <option:laser_count_base> ? <codecave:laser_array> : 0x691FF8)"
		},
		"effect_array_addr": {
			"type": "c",
			"val": "(<option:effect_size#> * <option:effect_count#> > <option:effect_size_base> * <option:effect_count_base> ? <codecave:effect_array> : 0x487FE8)"
		},
		"item_array_addr": {
			"type": "c",
			"val": "(<option:item_size#> * <option:item_count#> > <option:item_size_base> * <option:item_count_base> ? <codecave:item_array> : 0x69E268)"
		}
	},
	"codecaves": {
		"enemy_array": {
			"access": "rw",
			"enable": "<option:enemy_size#> * <option:enemy_count#> > <option:enemy_size_base> * <option:enemy_count_base>",
			"size": "<option:enemy_size#>",
			"count": "<option:enemy_count#> + 2"
		},
		"bullet_array": {
			"access": "rw",
			"enable": "<option:bullet_size#> * <option:bullet_count#> > <option:bullet_size_base> * <option:bullet_count_base>",
			"size": "<option:bullet_size#>",
			"count": "<option:bullet_count#>"
		},
		"laser_array": {
			"access": "rw",
			"enable": "<option:laser_size#> * <option:laser_count#> > <option:laser_size_base> * <option:laser_count_base>",
			"size": "<option:laser_size#>",
			"count": "<option:laser_count#>"
		},
		"effect_array": {
			"access": "rw",
			"enable": "<option:effect_size#> * <option:effect_count#> > <option:effect_size_base> * <option:effect_count_base>",
			"size": "<option:effect_size#>",
			"count": "<option:effect_count#> + 1"
		},
		"item_array": {
			"access": "rw",
			"enable": "<option:item_size#> * <option:item_count#> > <option:item_size_base> * <option:item_count_base>",
			"size": "<option:item_size#>",
			"count": "<option:item_count#> + 1"
		}
	},
	"binhacks": {
		"branch_signed_to_unsigned": {
			"addr": [ 0x409DA7, 0x4113CC, 0x411E94, 0x4120B0, 0x412432, 0x412F47, 0x40B936, 0x40C1FA, 0x40C3E4, 0x40D447, 0x40D5A2, 0x40D7E2, 0x40DE4A, 0x40DF29, 0x4135FA, 0x41361E, 0x413669, 0x414196, 0x4143AB, 0x414A37, 0x4167B2, 0x416814, 0x41689A, 0x416920, 0x416988, 0x4169EA, 0x416A6F, 0x416AF4, 0x40EF88, 0x40EFA3, 0x40F0DF, 0x40F13E, 0x40F224, 0x41F2CA, 0x41F2FF, 0x41F330, 0x41F52F, 0x420164, 0x4201C5 ],
			"code": "(u8:byte ptr*-[4] ^ 0xE)" // Bit hack to convert both JGE/JL to JAE/JB
			// No expected because bit hack BS
		},
		"branch_jl_0_to_jcA": {
			"addr": 0x4111E7,
			"enable": "<option:enemy_count#> != <option:enemy_count_base>",
			"code": "0F82 [0x411209] <nop:3>",
			"expected": "83BD 78FFFFFF 00 // 7C 1F"
		},
		"branch_jl_0_to_jcB": {
			"addr": 0x4134B4,
			"enable": "<option:bullet_count#> != <option:bullet_count_base>",
			"code": "0F82 [0x4134DE]",
			"expected": "837D DC 00 // 7C 27"
		},
		"branch_jl_0_to_jcC": {
			"addr": 0x413504,
			"enable": "<option:laser_count#> != <option:laser_count_base>",
			"code": "0F82 [0x41353B]",
			"expected": "837D AC 00 // 7C 34"
		},
		"branch_jl_0_to_jcD": {
			"addr": 0x40E2F9,
			"enable": "<option:effect_count#> != <option:effect_count_base>",
			"code": "0F82 [0x40E326]",
			"expected": "837D E8 00 // 7C 27"
		},
		"branch_jl_0_to_jcE": {
			"addr": 0x41F256,
			"enable": "<option:effect_count#> != <option:effect_count_base>",
			"code": "0F82 [0x41F283]",
			"expected": "837D E8 00 // 7C 27"
		},
		
		
		"change_enemy_sizeA": {
			"addr": [ 0x409D92, 0x4111BD, 0x4113BD, 0x411E85, 0x4120A1, 0x412423, 0x412F38 ],
			"enable": "<option:enemy_size#> != <option:enemy_size_base>",
			"code": "<option:enemy_size#>",
			"expected": "<option:enemy_size_base>"
		},
		"change_enemy_sizeB": {
			"addr": 0x410E5A,
			"enable": "<option:enemy_size#> != <option:enemy_size_base>",
			"code": "\
B9 <option:enemy_size#> \
???? \
???? ?? \
F3 AA \
",
			"expected": "\
B9 B2030000 \
???? \
???? ?? \
F3 AB \
"
		},
		"change_enemy_countA": {
			"addr": [ 0x409DA2, 0x4113C7, 0x411E8F, 0x4120AB, 0x41242D, 0x412F42 ],
			"enable": "<option:enemy_count#> != <option:enemy_count_base>",
			"code": "<option:enemy_count#>",
			"expected": "<option:enemy_count_base>"
		},
		"change_enemy_countB": {
			"addr": 0x4111B3,
			"enable": "<option:enemy_count#> != <option:enemy_count_base>",
			"code": "(<option:enemy_count#> + 1)",
			"expected": "(<option:enemy_count_base> + 1)"
		},
		
		"change_enemy_arrayA": {
			"addr": [ 0x409D6B, 0x411E6B, 0x412087 ],
			"enable": "<option:enemy_size#> * <option:enemy_count#> > <option:enemy_size_base> * <option:enemy_count_base>",
			"code": "(<codecave:enemy_array> + <option:enemy_size#>)",
			"expected": "(0x4B8898)"
		},
		"change_enemy_arrayB": {
			"addr": [ 0x4111C8, 0x41139F, 0x4123F9, 0x412F1A, 0x41322A ],
			"enable": "<option:enemy_size#> != <option:enemy_size_base>",
			"ignore": "<option:enemy_size#> * <option:enemy_count#> > <option:enemy_size_base> * <option:enemy_count_base>",
			"code": "(<option:enemy_size#> + 8)",
			"expected": "(<option:enemy_size_base> + 8)"
		},
		"change_enemy_arrayC": {
			"addr": 0x4111C1,
			"enable": "<option:enemy_size#> * <option:enemy_count#> > <option:enemy_size_base> * <option:enemy_count_base>",
			"code": "B8 (<codecave:enemy_array> + <option:enemy_size#>) <nop:6>",
			"expected": "8B85 68FFFFFF // 05 D00E0000"
		},
		"change_enemy_arrayD": {
			"addr": [ 0x410E3A, 0x41139B, 0x4123F5, 0x412F16, 0x413226 ],
			"enable": "<option:enemy_size#> * <option:enemy_count#> > <option:enemy_size_base> * <option:enemy_count_base>",
			"code": "B8 (<codecave:enemy_array> + <option:enemy_size#>) <nop:3>",
			"expected": "8B45 ?? // 05 D00E0000"
		},
		"change_enemy_arrayE": {
			"addr": 0x41119F,
			"enable": "<option:enemy_size#> * <option:enemy_count#> > <option:enemy_size_base> * <option:enemy_count_base>",
			"code": "B9 <codecave:enemy_array> <nop:4>",
			"expected": "8B8D 68FFFFFF // 83C1 08"
		},
		"change_enemy_arrayF": {
			"addr": 0x4113EC,
			"enable": "<option:enemy_size#> * <option:enemy_count#> > <option:enemy_size_base> * <option:enemy_count_base>",
			"code": "\
C7C6 <codecave:enemy_array> \
B9 <option:enemy_size#> \
???? ?? \
F3 A4 \
",
			"expected": "\
8B75 F4 \
83C6 08 \
B9 B2030000 \
???? ?? \
F3 A5 \
"
		},
		"change_enemy_arrayG": {
			"addr": 0x410E51,
			"enable": "<option:enemy_size#> * <option:enemy_count#> > <option:enemy_size_base> * <option:enemy_count_base>",
			"code": "C7C1 <codecave:enemy_array>",
			"expected": "8B4D C8 // 83C1 08"
		},
		
		"change_bullet_sizeA": {
			"addr": [ 0x40B927, 0x40C1EB, 0x40C3D5, 0x40D438, 0x40D593, 0x40D7D3, 0x40DE3B, 0x40DF1A, 0x413499, 0x4135D0, 0x413641, 0x414188, 0x41439C, 0x414A28, 0x4167A4, 0x416806, 0x41688C, 0x416912, 0x41697A, 0x4169DC, 0x416A61, 0x416AE6 ],
			"enable": "<option:bullet_size#> != <option:bullet_size_base>",
			"code": "<option:bullet_size#>",
			"expected": "<option:bullet_size_base>"
		},
		"change_bullet_countA": {
			"addr": [ 0x40B931, 0x40C1F5, 0x40C3DF, 0x40D442, 0x40D59D, 0x40D7DD, 0x40DE45, 0x40DF24, 0x413492, 0x4135F6, 0x41361A, 0x413665, 0x414192, 0x4143A6, 0x414A32, 0x4167AE, 0x416810, 0x416896, 0x41691C, 0x416984, 0x4169E6, 0x416A6B, 0x416AF0 ],
			"enable": "<option:bullet_count#> != <option:bullet_count_base>",
			"code": "<option:bullet_count#>",
			"expected": "<option:bullet_count_base>"
		},
		
		"change_bullet_arrayA": {
			"addr": [ 0x40B8E9, 0x40C1C3, 0x40D411, 0x40D53A, 0x40D77A, 0x40DE14, 0x40DF07, 0x41416D, 0x414381 ],
			"enable": "<option:bullet_size#> * <option:bullet_count#> > <option:bullet_size_base> * <option:bullet_count_base>",
			"code": "<codecave:bullet_array>",
			"expected": "(0x5AB5F8)"
		},
		"change_bullet_arrayB": {
			"addr": 0x4135D4,
			"enable": "<option:bullet_size#> * <option:bullet_count#> > <option:bullet_size_base> * <option:bullet_count_base>",
			"code": "8D81 <codecave:bullet_array> <nop:4>",
			"expected": "8B55 C0 // 8D840A 00560000"
		},
		"change_bullet_arrayC": {
			"addr": [ 0x413654, 0x416957 ],
			"enable": "<option:bullet_size#> * <option:bullet_count#> > <option:bullet_size_base> * <option:bullet_count_base>",
			"code": "BA <codecave:bullet_array> <nop:4>",
			"expected": "8B55 ?? // 81C2 00560000"
		},
		"change_bullet_arrayD": {
			"addr": [ 0x41349D, 0x4149DA, 0x4167E4, 0x41686A, 0x4168F0, ],
			"enable": "<option:bullet_size#> * <option:bullet_count#> > <option:bullet_size_base> * <option:bullet_count_base>",
			"code": "B8 <codecave:bullet_array> <nop:3>",
			"expected": "8B45 ?? // 05 00560000"
		},
		"change_bullet_arrayE": {
			"addr": [ 0x416782, 0x4169BA, 0x416A3F, 0x416AC4 ],
			"enable": "<option:bullet_size#> * <option:bullet_count#> > <option:bullet_size_base> * <option:bullet_count_base>",
			"code": "B9 <codecave:bullet_array> <nop:4>",
			"expected": "8B4D ?? // 81C1 00560000"
		},
		
		"change_laser_sizeA": {
			"addr": [ 0x4134E8, 0x414217, 0x414466, 0x41469B, 0x415E16, 0x416540 ],
			"enable": "<option:laser_size#> != <option:laser_size_base>",
			"code": "<option:laser_size#>",
			"expected": "<option:laser_size_base>"
		},
		"change_laser_countA": {
			"addr": 0x4134E1,
			"enable": "<option:laser_count#> != <option:laser_count_base>",
			"code": "<option:laser_count#>",
			"expected": "<option:laser_count_base>"
		},
		"change_laser_countB": {
			"addr": 0x414209,
			"enable": "<option:laser_count#> != <option:laser_count_base>",
			"code": "\
8345 ?? 01 \
B8 <option:laser_count#> \
???? ?? \
???? ???????? \
???? ?? \
394465 (u8:byte ptr*-[5]) \
0F83 \
",
			"expected": "\
8B45 ?? \
83C0 01 \
8945 ?? \
???? ?? \
???? ???????? \
???? ?? \
837D ?? 40 \
0F8D \
"
		},
		"change_laser_countC": {
			"addr": [ 0x414458, 0x41468D, 0x415E08, 0x416532 ],
			"enable": "<option:laser_count#> != <option:laser_count_base>",
			"code": "\
8345 ?? 01 \
B9 <option:laser_count#> \
???? ?? \
???? ???????? \
???? ?? \
394C65 (u8:byte ptr*-[5]) \
0F83 \
",
			"expected": "\
8B4D ?? \
83C1 01 \
894D ?? \
???? ?? \
???? ???????? \
???? ?? \
837D ?? 40 \
0F8D \
"
		},
		
		"change_laser_arrayA": {
			"addr": 0x4134EC,
			"enable": "<option:laser_size#> * <option:laser_count#> > <option:laser_size_base> * <option:laser_count_base>",
			"code": "B9 <codecave:laser_array> <nop:4>",
			"expected": "8B4D ?? // 81C1 00C00E00"
		},
		"change_laser_arrayB": {
			"addr": 0x4141F4,
			"enable": "<option:laser_size#> * <option:laser_count#> > <option:laser_size_base> * <option:laser_count_base>",
			"code": "BA <codecave:laser_array> <nop:4>",
			"expected": "8B55 ?? // 81C2 00C00E00"
		},
		"change_laser_arrayC": {
			"addr": [ 0x414444, 0x414679, 0x415DF4, 0x41651E ],
			"enable": "<option:laser_size#> * <option:laser_count#> > <option:laser_size_base> * <option:laser_count_base>",
			"code": "B8 <codecave:laser_array> <nop:3>",
			"expected": "8B45 ?? // 05 00C00E00"
		},
		
		"change_effect_sizeA": {
			"addr": [ 0x40E2E3, 0x40EF60, 0x40EFD4, 0x40F0CC, 0x40F12F, 0x40F216 ],
			"enable": "<option:effect_size#> != <option:effect_size_base>",
			"code": "<option:effect_size#>",
			"expected": "<option:effect_size_base>"
		},
		"change_effect_countA": {
			"addr": [ 0x40EF83, 0x40EF9F, 0x40F0DB, 0x40F139, 0x40F220 ],
			"enable": "<option:effect_count#> != <option:effect_count_base>",
			"code": "<option:effect_count#>",
			"expected": "<option:effect_count_base>"
		},
		"change_effect_countB": {
			"addr": 0x40E2DC,
			"enable": "<option:effect_count#> != <option:effect_count_base>",
			"code": "(<option:effect_count#> + 1)",
			"expected": "(<option:effect_count_base> + 1)"
		},
		
		"change_effect_arrayA": {
			"addr": [ 0x40E2E7, 0x40F106, 0x40F1F6 ],
			"enable": "<option:effect_size#> * <option:effect_count#> > <option:effect_size_base> * <option:effect_count_base>",
			"code": "C7C0 <codecave:effect_array>",
			"expected": "8B45 ?? // 83C0 08"
		},
		"change_effect_arrayB": {
			"addr": 0x40EF64,
			"enable": "<option:effect_size#> * <option:effect_count#> > <option:effect_size_base> * <option:effect_count_base>",
			"code": "8D0425 <codecave:effect_array>",
			"expected": "8B55 E8 // 8D440A 08"
		},
		"change_effect_arrayC": {
			"addr": 0x40F0E6,
			"enable": "<option:effect_count#> != <option:effect_count_base> || <option:effect_count#> != <option:effect_count_base>",
			"ignore": "<option:effect_size#> * <option:effect_count#> > <option:effect_size_base> * <option:effect_count_base>",
			"code": "(<option:effect_size#> * <option:effect_count#> + 8)",
			"expected": "81C1 08F80200"
		},
		"change_effect_arrayD": {
			"addr": 0x40F0E1,
			"enable": "<option:effect_size#> * <option:effect_count#> > <option:effect_size_base> * <option:effect_count_base>",
			"code": "B9 (<option:effect_size#> * <option:effect_count#> + <codecave:effect_array>) <nop:4>",
			"expected": "8B4D E8 // 81C1 08F80200"
		},
		
		"change_item_sizeA": {
			"addr": [ 0x41F243, 0x41F2A4, 0x41F31A, 0x41F520, 0x420156, 0x4201B6 ],
			"enable": "<option:item_size#> != <option:item_size_base>",
			"code": "<option:item_size#>",
			"expected": "<option:item_size_base>"
		},
		"change_item_countA": {
			"addr": [ 0x41F2C5, 0x41F2FB, 0x41F32C, 0x41F52A, 0x420160, 0x4201C0 ],
			"enable": "<option:item_count#> != <option:item_count_base>",
			"code": "",
			"expected": ""
		},
		"change_item_countB": {
			"addr": 0x41F23C,
			"enable": "<option:item_count#> != <option:item_count_base>",
			"code": "(<option:item_count#> + 1)",
			"expected": "(<option:item_count_base> + 1)"
		},
		
		"change_item_arrayA": {
			"addr": 0x41F230,
			"enable": "<option:item_size#> * <option:item_count#> > <option:item_size_base> * <option:item_count_base>",
			// Yuck, ENTER instruction
			// Couldn't figure out a better way to cram the necessary bytes
			// in around the other size/count fields, so at least this is only
			// one-time setup code and the crap ENTER performance doesn't matter
			"code": "\
C8 2400 00 \
B8 <codecave:item_array> \
???? ?? ???????? \
???? ?? ???????? \
894D DC \
",
			"expected": "\
55 \
8BEC \
83EC 24 \
894D DC \
???? ?? ???????? \
???? ?? ???????? \
8B45 DC \
"
		},
		"change_item_arrayB": {
			"addr": 0x41F29C,
			"enable": "<option:item_size#> * <option:item_count#> > <option:item_size_base> * <option:item_count_base>",
			"code": "\
<nop:2> \
6980 44890200 ???????? \
05 <codecave:item_array> \
8945 ?? \
",
			"expected": "\
8B88 44890200 \
69C9 ???????? \
8B55 ?? \
03D1 \
8955 ?? \
"
		},
		"change_item_arrayC": {
			"addr": [ 0x41F4AF, 0x420136, 0x420196 ],
			"enable": "<option:item_size#> * <option:item_count#> > <option:item_size_base> * <option:item_count_base>",
			"code": "C7C0 <codecave:item_array>"
			// No expected since they'd all be different. *shrug*
		}
	}
}