{
    "options": {
        "format_str": {
            "type": "s",
            "val": "FRAMEDATA,%u,%hu,%u,%u,%u,%u,%f,%f,%hhd,%s,%s,%d,%d,%d,%d,%hd,%d,%d,%d,%d\n"
        },
        "true_str": {
            "type": "s",
            "val": "true"
        },
        "false_str": {
            "type": "s",
            "val": "false"
        }
    },
    "codecaves": {
        "log_state_data": {
            "access": "rw",
            "size": 0x28
        },
        "log_state_register": {
            "access": "re",
            "code": "\
C705 (<codecave:log_state_data>+0x20) 00000000 \
68 <codecave:log_game_state_func> \
B9 <codecave:log_state_data> \
E8 [0x406520] \
6A 12 \
68 <codecave:log_state_data> \
B9 <0x164F548> \
E8 [0x43C880] \
A1 <0x164D0B4> \
C3 \
"
        },
        "log_state_unregister": {
            "access": "re",
            "code": "\
68 <codecave:log_state_data> \
B9 <0x164F548> \
E8 [0x43CF10] \
A1 <0x164D0B4> \
C3 \
"
        },
        "test_myon_state_jank": {
            "access": "re",
            "code": "\
813D (<codecave:log_state_data>+0x20) 0B1C0000 \
0F82 [0x425430] \
CC \
E9 [0x425430] \
"
        },
        "log_game_state_func": {
            "access": "re",
            "code": "\
FF05 (<codecave:log_state_data>+0x20) \
B8 DEADBEEF \
C3 \
"
        },
        "log_game_state_func_crash_on_desync_frame": {
            "ignore": true,
            "access": "re",
            "code": "\
803D (<codecave:log_state_data>+0x24) 00 \
74 06 \
B8 DEADBEEF \
C3 \
A1 (<codecave:log_state_data>+0x20) \
8D48 01 \
890D (<codecave:log_state_data>+0x20) \
05 F5E3FF7F \
0F9005 (<codecave:log_state_data>+0x24) \
CE \
B8 DEADBEEF \
C3 \
"
        },
        "log_game_state_func_old": {
            "ignore": true,
            "access": "re",
            "code": "\
55 \
53 \
57 \
56 \
8B15 <0x160F510> \
A1 (<codecave:log_state_data>+0x20) \
8D48 01 \
890D (<codecave:log_state_data>+0x20) \
3D 0C1C0000 \
74 FE \
0F5A05 <0x17D61AC> \
8B0D <0x17D5EF8> \
81F9 00000001 \
BB <option:false_str> \
BF <option:true_str> \
BE <option:true_str> \
0F42F3 \
833D <0x17D6ED4> 00 \
0F44FB \
6B1D <0x164D334> 64 \
031D <0x164D340> \
0FBF6A 22 \
FF72 44 \
FF72 3C \
FF72 24 \
FF72 30 \
55 \
FF72 0C \
FF72 08 \
FF32 \
53 \
57 \
56 \
51 \
83EC 10 \
0F110424 \
FF35 <0x4ECE68> \
FF35 <0x17CE3F0> \
FF35 <0xF54CE4> \
FF35 <0x164D524> \
FF35 <0x164D520> \
50 \
68 <option:format_str> \
E8 [log_printf] \
83C4 5C \
5E \
5F \
5B \
5D \
C3 \
"
        }
    },
    "binhacks": {
        "register_data_logger": {
            "addr": 0x43B510,
            "code": "E8 [codecave:log_state_register]"
        },
        "unregister_data_logger": {
            "addr": 0x43BEFF,
            "code": "E8 [codecave:log_state_unregister]"
        },
        "test_myon_state_jank": {
            "addr": 0x44F885,
            "code": "E8 [codecave:test_myon_state_jank]"
        }
    }
}