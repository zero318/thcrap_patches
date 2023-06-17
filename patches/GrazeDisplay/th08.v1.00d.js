{
    "options": {
        "enable_bullet_tints": {
            "type": "b8",
            "val": true
        },
        "enable_laser_tints": {
            "type": "b8",
            "val": true
        },
        "enable_enemy_tints": {
            "type": "b8",
            "val": true
        },
        "show_exact_laser_frames": {
            "type": "b8",
            "val": false
        },
        "use_separate_colors": {
            "type": "b8",
            "val": true
        },
        "graze_enabled_color": {
            "type": "u32",
            "val": 0xFF00FF00
        },
        "graze_disabled_color": {
            "type": "u32",
            "val": 0xFFFF0000
        }
    },
    "codecaves": {
        "apply_laser_tint": {
            "enable": "<option:enable_laser_tints>",
            "access": "re",
            "code": "\
69C8 CDCCCCCC \
81C1 98999919 \
C1C9 02 \
31D2 \
81F9 CDCCCC0C \
0F92C2 \
B9 <option:graze_enabled_color> \
B8 ((<option:use_separate_colors> && <option:show_exact_laser_frames>) ? <option:graze_disabled_color> : <option:graze_enabled_color>) \
0F42C1 \
8B4D D8 \
8981 F4010000 \
8089 FA010000 02 \
8981 98040000 \
8089 9E040000 02 \
C3 \
"
        },
        "apply_master_spark_tint_A_old": {
            "ignore": true,
            "enable": "<option:enable_laser_tints>",
            "access": "re",
            "code": "\
85C0 \
B9 <option:graze_enabled_color> \
BA ((<option:use_separate_colors> && <option:show_exact_laser_frames>) ? <option:graze_disabled_color> : <option:graze_enabled_color>) \
0F44D1 \
8B4D CC \
8991 00020000  \
8089 06020000 02 \
8991 A4040000 \
8089 06020000 02 \
8991 48070000 \
8089 4E070000 02 \
85C0 \
C3 \
"
        },
        "apply_master_spark_tint_A": {
            "enable": "<option:enable_laser_tints>",
            "access": "re",
            "code": "\
85C0 \
B9 <option:graze_enabled_color> \
BA ((<option:use_separate_colors> && <option:show_exact_laser_frames>) ? <option:graze_disabled_color> : <option:graze_enabled_color>) \
0F44D1 \
8B4D CC \
8991 00020000  \
80A1 04020000 CF \
8089 06020000 02 \
8991 A4040000 \
80A1 A8040000 CF \
8089 AA040000 02 \
8991 48070000 \
80A1 4C070000 CF \
8089 4E070000 02 \
85C0 \
C3 \
"
        },
        "apply_master_spark_tint_B_old": {
            "ignore": true,
            "enable": "<option:enable_laser_tints>",
            "access": "re",
            "code": "\
8B88 A02C0000 \
8B51 10 \
81FA <0x424730> \
74 10 \
81FA <0x424820> \
74 08 \
81FA <0x424910> \
75 15 \
80A0 06020000 FD \
80A0 AA040000 FD \
80A0 4E070000 FD \
C3 \
"
        },
        "apply_master_spark_tint_B": {
            "enable": "<option:enable_laser_tints>",
            "access": "re",
            "code": "\
56 \
8B88 A02C0000 \
8B51 10 \
81FA <0x424730> \
74 10 \
81FA <0x424820> \
74 08 \
81FA <0x424910> \
75 38 \
BA CFFFFDFF \
8BB0 04020000 \
21D6 \
83CE 10 \
89B0 04020000 \
8BB0 A8040000 \
21D6 \
83CE 10 \
89B0 A8040000 \
8BB0 4C070000 \
21D6 \
83CE 10 \
89B0 4C070000 \
5E \
C3 \
"
        }
    },
    "binhacks": {
        "apply_bullet_graze_tint": {
            "enable": "<option:enable_laser_tints>",
            "addr": 0x43159E,
            "code": "\
8B75 E0 \
80BE B4100000 00 \
0F85 A0010000 \
8D8E 8C0D0000 \
E8 [0x40D3B0] \
31C9 \
83F8 10 \
0F9DC1 \
80BE BD0D0000 00 \
0F95C5 \
BA <option:graze_enabled_color> \
B8 (<option:use_separate_colors> ? <option:graze_disabled_color> : <option:graze_enabled_color>) \
0F45D0 \
00C9 \
B8 8A0C0000 \
90 \
802406 FD \
080C06 \
895406 FA \
05 5CFDFFFF \
79 EE \
83F9 02 \
0F85 9E000000 \
8D96 340D0000 \
8D42 10 \
B9 <0x17D5EF8> \
52 \
50 \
E8 [0x44A470] \
83F8 01 \
75 08 \
8886 BD0D0000 \
EB 7C \
83F8 02 \
75 72 \
F686 B10D0000 10 \
75 69 \
66:C786 B80D0000 0500 \
"
        },
        "apply_laser_tint_A": {
            "enable": "<option:enable_laser_tints>",
            "addr": 0x431F0C,
            "code": "E8 [codecave:apply_laser_tint] // <nop:8>"
        },
        "apply_laser_tint_B": {
            "enable": "<option:enable_laser_tints>",
            "addr": 0x431BC6,
            "code": "\
D905 <0x17CE8E0> \
D888 6C050000 \
D880 5C050000 \
D998 5C050000 \
80A0 FA010000 FD \
80A0 9E040000 FD \
<nop:4> \
D980 5C050000 \
D8A0 58050000 \
"
        },
        "apply_enemy_graze_tint": {
            "enable": "<option:enable_enemy_tints>",
            "addr": 0x42C2B2,
            "code": "\
56 \
8B75 D8 \
F686 24330000 10 \
74 57 \
53 \
8D9E 142E0000 \
89D9 \
E8 [0x40D3D0] \
89D9 \
89C3 \
6A 06 \
E8 [0x40D410] \
85C0 \
0F94C7 \
08FB \
BA <option:graze_enabled_color> \
B9 (<option:use_separate_colors> ? <option:graze_disabled_color> : <option:graze_enabled_color>) \
0F44D1 \
B8 48070000 \
891406 \
804C06 06 02 \
05 5CFDFFFF \
79 F1 \
84DB \
5B \
74 11 \
B9 <0x17D5EF8> \
8D45 E8 \
50 \
FF75 08 \
E8 [0x44A470] \
89F0 \
5E \
0FB60D <0x164D0B1> \
E3 05 \
83F9 04 \
75 0C \
91 \
"
        },
        "apply_master_spark_tint_A": {
            "enable": "<option:enable_laser_tints>",
            "addr": [ 0x4247CE, 0x4248BE, 0x4249AE ],
            "code": "EB 48"
        },
        "apply_master_spark_tint_B": {
            "enable": "<option:enable_laser_tints>",
            "addr": [ 0x424818, 0x424908, 0x4249F8 ],
            "code": "E8 [codecave:apply_master_spark_tint_A] // EB B1"
        },
        "apply_master_spark_tint_C": {
            "enable": "<option:enable_laser_tints>",
            "addr": 0x41D596,
            "code": "E8 [codecave:apply_master_spark_tint_B] // 90"
        }
    }
}