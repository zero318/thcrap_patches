{
    "options": {
        "bullet_count_1_multiplier": {
            "type": "u8",
            "val": 2
        },
        "bullet_count_2_multiplier": {
            "type": "u8",
            "val": 2
        }
    },
    "codecaves": {
        "shoot_bullets": {
            "access": "re",
            "code": "\
55 \
53 \
57 \
56 \
50 \
89C3 \
8B93 F4010000 \
6685D2 \
0F8E A7000000 \
89D1 \
C1E9 10 \
6685C9 \
0F8E 99000000 \
A1 <0x477834> \
D9EE \
D980 C4030000 \
D863 08 \
DBE9 \
D980 C0030000 \
D863 04 \
75 08 \
DBEA \
0F84 A7000000 \
D9F3 \
D91C24 \
8B2C24 \
B8 FF7F0000 \
891424 \
21C2 \
69D2 (i32:<option:bullet_count_1_multiplier>) \
DFC0 \
39C2 \
0F43D0 \
69C9 (i32:<option:bullet_count_2_multiplier>) \
668993 F4010000 \
39C1 \
0F43C8 \
31FF \
66898B F6010000 \
<nop:11> \
31F6 \
55 \
57 \
56 \
FF7424 24 \
E8 [0x4067D0] \
85C0 \
75 14 \
46 \
663BB3 F4010000 \
75 E6 \
47 \
663BBB F6010000 \
75 DA \
8B0424 \
8983 F4010000 \
F683 FD010000 02 \
74 13 \
FF73 04 \
8B9B 00020000 \
BE <0x492590> \
E8 [0x43DD10] \
31C0 \
83C4 04 \
5E \
5F \
5B \
5D \
C2 0400 \
<int3:11> \
DFC1 \
F9F7 \
BD DB0FC93F \
E9 53FFFFFF \
"
        }
    },
    "binhacks": {
        "hook_shoot_bullets": {
            "addr": [0x407227,0x4102BF],
            "code": "E8[codecave:shoot_bullets]"
        },
        "hoot_shoot_bullets_backup": {
            "addr": 0x4073E0,
            "code": "E9[codecave:shoot_bullets]CC"
        }
    }
}