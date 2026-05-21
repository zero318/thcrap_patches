{
    "codecaves": {
        "randomize_vertex_colors": {
            "access": "re",
            "code": "\
53 \
57 \
56 \
89CE \
81C1 700E8203 \
8BBE 700E8203 \
8D97 A8000000 \
B8 01000000 \
39CA \
0F83 EA000000 \
8B5C24 10 \
8D47 10 \
50 \
E8 [th_rand_s] \
83C4 04 \
8D47 2C \
50 \
E8 [th_rand_s] \
83C4 04 \
8D47 48 \
50 \
E8 [th_rand_s] \
83C4 04 \
8D87 9C000000 \
50 \
E8 [th_rand_s] \
83C4 04 \
0FB643 13 \
8847 13 \
0FB643 2F \
8847 2F \
0FB643 4B \
8847 4B \
0FB643 67 \
8887 9F000000 \
0F1003 \
0F1107 \
F20F1043 14 \
F20F1147 14 \
0F1043 1C \
0F1147 1C \
F20F1043 30 \
F20F1147 30 \
0F1043 38 \
0F1147 38 \
F20F1043 4C \
F20F1147 4C \
0F1043 1C \
0F1147 54 \
F20F1043 30 \
F20F1147 68 \
8B47 2C \
8947 64 \
0F1043 38 \
0F1147 70 \
F20F1043 4C \
F20F1187 84000000 \
8B47 48 \
8987 80000000 \
0F1043 54 \
0F1187 8C000000 \
F20F1043 68 \
F20F1187 A0000000 \
8186 700E8203 A8000000 \
FF86 6C0E1203 \
31C0 \
5E \
5F \
5B \
C2 0400 \
"
        }
    },
    "binhacks": {
        "randomize_vertex_colors": {
            "addr": 0x47E6B5,
            "code": "E8 [codecave:randomize_vertex_colors]"
        }
    }
}