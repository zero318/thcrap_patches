{
    "codecaves": {
        "fast_layer_lookup": {
            "access": "r",
            "code": "1A1D1E1F20212223242B2D2D2C2D2E2F30313233"
        },
        "render_layer_new": {
            "access": "re",
            "code": "\
55 \
53 \
57 \
56 \
89CE \
68 <Rx22AEC8> \
E8 [Rx6230C] \
83C4 04 \
85C0 \
0F85 7E010000 \
8B7C24 14 \
8B9E 14070000 \
B0 01 \
EB 1A \
8D83 F4FAFFFF \
89F1 \
50 \
E8 [RxC50F0] \
31C0 \
<nop:7> \
8B5B 04 \
85DB \
74 2F \
837B 6C 00 \
75 F3 \
8B8B 0CFBFFFF \
8D51 D5 \
83FA 08 \
77 07 \
0FB689 (<codecave:fast_layer_lookup>-43) \
39F9 \
75 DA \
84C0 \
74 BF \
89F1 \
6A 00 \
57 \
E8 [RxCC030] \
EB B3 \
8B9E 1C070000 \
EB 09 \
6690 \
39F9 \
74 29 \
8B5B 04 \
85DB \
74 44 \
837B 6C 00 \
75 F3 \
8B93 0CFBFFFF \
8D6A E6 \
B9 2D000000 \
83FD 0A \
77 DC \
0FB68A (<codecave:fast_layer_lookup>-17) \
EB D3 \
84C0 \
75 12 \
8D83 F4FAFFFF \
89F1 \
50 \
E8 [RxC50F0] \
31C0 \
EB C1 \
89F1 \
6A 00 \
57 \
E8 [RxCC030] \
EB E2 \
8B9E 34070000 \
B0 01 \
EB 1A \
8D83 F4FAFFFF \
89F1 \
50 \
E8 [RxC50F0] \
31C0 \
<nop:7> \
8B5B 04 \
85DB \
74 2F \
837B 6C 00 \
75 F3 \
8B8B 0CFBFFFF \
8D51 D5 \
83FA 08 \
77 07 \
0FB689 (<codecave:fast_layer_lookup>-43) \
39F9 \
75 DA \
84C0 \
74 BF \
89F1 \
6A 01 \
57 \
E8 [RxCC030] \
EB B3 \
8B9E 3C070000 \
EB 09 \
6690 \
39F9 \
74 29 \
8B5B 04 \
85DB \
74 44 \
837B 6C 00 \
75 F3 \
8B93 0CFBFFFF \
8D6A E6 \
B9 2D000000 \
83FD 0A \
77 DC \
0FB68A (<codecave:fast_layer_lookup>-17) \
EB D3 \
84C0 \
75 12 \
8D83 F4FAFFFF \
89F1 \
50 \
E8 [RxC50F0] \
31C0 \
EB C1 \
89F1 \
6A 01 \
57 \
E8 [RxCC030] \
EB E2 \
68 <Rx22AEC8> \
E8 [Rx6231D] \
83C4 04 \
B8 01000000 \
5E \
5F \
5B \
5D \
C2 0400 \
CC \
50 \
E8 [Rx627B5]"
        },
        "check_colliders_new": {
            "access": "re",
            "code": "\
CC \
89E5 \
53 \
57 \
56 \
83E4 F0 \
81EC C0000000 \
31F6 \
8B81 84EE3600 \
85C0 \
0F84 81020000 \
8B91 C8EE3600 \
8B52 04 \
F30F6F82 E4200000 \
0F5BD8 \
0F591D {x.u32:0x3C000000;0x3C000000;0x3C000000;0x3C000000} \
0F28C3 \
0F5705 {x.u32:0x80000000;0x80000000;0x80000000;0x80000000} \
F20F1089 88EE3600 \
F20F110C24 \
F20F114C24 48 \
0F16C9 \
0F28E3 \
0FC6E0 32 \
0F28F8 \
0FC6FC 8F \
0F58F9 \
0F2825 {x.u32:0x430C0000;0x43D80000;0x430C0000;0x43D80000} \
0F5DFC \
0F282D {x.u32:0xC30C0000;0x42000000;0xC30C0000;0x42000000} \
0F5FFD \
0F117C24 28 \
0F28F8 \
0FC6FB 23 \
0FC6FB A8 \
0F58F9 \
0F5DFC \
0F5FFD \
0F117C24 38 \
0F28FB \
0FC6FB 30 \
0F58F9 \
0F5DFC \
0F5FFD \
0F297C24 70 \
0F28F8 \
0FC6FB 00 \
0FC6C3 55 \
0FC6DB FC \
0F58D9 \
0F5DDC \
0F5FDD \
0F299C24 80000000 \
0F14C9 \
0F28D9 \
0FC6D9 4E \
0FC6FF D8 \
0F58FB \
0F5DFC \
0F5FFD \
0F28F1 \
0F14F7 \
0F117424 08 \
0F15F9 \
0F117C24 18 \
8D79 04 \
0FC6C0 D8 \
0F58C3 \
0F5DC4 \
0F5FC5 \
0F28D9 \
0F14D8 \
0F295C24 50 \
0F15C1 \
0F294424 60 \
0F57C0 \
F30F10C2 \
0FC6C0 14 \
0F298424 A0000000 \
F30F59D2 \
0FC6D2 00 \
0F299424 90000000 \
6BD8 3C \
01FB \
EB 12 \
CCCCCCCCCCCCCC \
83C7 3C \
39DF \
0F84 45010000 \
F647 38 01 \
0F85 BB000000 \
F30F1047 28 \
0F5705 {x.u32:0x80000000;0x80000000;0x80000000;0x80000000} \
E8 [th_sincosf_sse2] \
0F283D {x.u32:0x7FFFFFFF;0x7FFFFFFF;0x7FFFFFFF;0x7FFFFFFF} \
0F289424 90000000 \
0FC6C0 05 \
0F5705 {x.u32:0;0;0x80000000;0} \
F20F100F \
F20F105F 18 \
0F591D {x.u32:0x3F000000;0x3F000000} \
0F16DB \
0F28E3 \
0F5725 {x.u32:0x80000000;0;0x80000000;0} \
0F589C24 A0000000 \
31C9 \
BA 01000000 \
EB 0A \
09D6 \
41 \
01D2 \
83F9 12 \
74 88 \
85D6 \
75 F4 \
F20F102CCC \
0F5CE9 \
0FC6ED 14 \
0F59E8 \
0F28F5 \
0F16F5 \
0F12ED \
0F58EE \
0F28F5 \
0F54F7 \
0FC2F3 02 \
0F50C6 \
F7D0 \
A8 03 \
74 C4 \
A8 0C \
74 C0 \
0F58EC \
0F59ED \
0F28F5 \
0FC6F5 1E \
0F58F5 \
0FC2F2 01 \
0F50C6 \
85C0 \
0F45C2 \
09C6 \
EB A2 \
CCCC \
F30F1047 20 \
F30F59C0 \
F30F58C2 \
0FC6C0 00 \
F20F100F \
0F16C9 \
31C9 \
<nop:6> \
0F281CCC \
0F2864CC 10 \
0F5CD9 \
0F59DB \
0F5CE1 \
0F59E4 \
0F28EB \
0FC6EC D8 \
0FC6DC 8D \
0F58DD \
0FC2D8 01 \
0F50C3 \
D3E0 \
09C6 \
83C1 04 \
83F9 10 \
75 CA \
0F289C24 80000000 \
0F5CD9 \
0F59DB \
0F28CB \
0FC6CB A0 \
0F58CB \
0FC2C8 01 \
660F50C1 \
C1E0 10 \
09C6 \
E9 B0FEFFFF \
8B45 08 \
8930 \
8D65 F4 \
5E \
5F \
5B \
5D \
C2 0400 \
"
        }
    },
    "binhacks": {
        "use_new_render_layer": {
            "addr": [ "RxCCEA8", "RxCCEB8", "RxCCEC8", "RxCCED8", "RxCCEE8", "RxCCEF8", "RxCCF08", "RxCCF18", "RxCCF37", "RxCCF48", "RxCCF58", "RxCCF68", "RxCCF78", "RxCCF88", "RxCCF98", "RxCCFA8", "RxCCFB8", "RxCCFD7", "RxCCFE8", "RxCCFF8", "RxCD008", "RxCD008", "RxCD027", "RxCD038", "RxCD057", "RxCD068", "RxCD087", "RxCD098", "RxCD0A8", "RxCD0B8", "RxCD0C8", "RxCD0D8", "RxCD0E8", "RxCD0F8", "RxCD117", "RxCD128", "RxCD138", "RxCD148", "RxCD158", "RxCD168", "RxCD187", "RxCD198", "RxCD1A8", "RxCD1B8", "RxCD1D7", "RxCD1E8", "RxCD1F8", "RxEC2F1", "RxEC31B", "Rx1322AC", "Rx132720" ],
            "code": "E8 [codecave:render_layer_new]"
        },
        "use_new_render_layer_compat": {
            "addr": "RxCC5A0",
            "code": "E9 [codecave:render_layer_new] CC"
        },
        "faster_sinf": {
            "addr": "Rx4450",
            "code": "\
50 \
F30F5AC0 \
E8 [Rx80C4E] \
D91C24 \
F30F100424 \
58 \
C3CCCC"
        },
        "faster_cosf": {
            "addr": "Rx4420",
            "code": "\
50 \
F30F5AC0 \
E8 [Rx80F1E] \
D91C24 \
F30F100424 \
58 \
C3CCCC"
        },
        "faster_sin0": {
            "addr": [ "Rx1FA66", "Rx1FAE2", "Rx22F2E", "Rx2371B", "Rx27B3B", "Rx288E5", "Rx29378", "Rx2949A", "Rx2954D", "Rx29E2B", "Rx29F58", "Rx2A008", "Rx2AEAE", "Rx2C2EE", "Rx2C98B", "RxC3293", "RxC3383", "RxC3653", "RxC3973", "RxC43CA", "RxC46FA", "RxC495A", "RxC4D6A", "RxC82E4", "RxC88E7", "RxD3339", "RxD4C78", "RxD50EF", "RxD518F", "RxD521F", "RxD52AF", "RxD612F", "RxD6174", "RxD6252", "RxD6294", "RxE9B5C", "RxE9B85", "RxE9EFC", "RxE9F25", "RxEB396", "RxEB3C5", "RxEB556", "RxEB618", "RxEB6BD", "RxEB7F1", "RxEB829", "RxEB853", "RxEB8C3", "RxEB8ED", "RxEB95D", "RxEB987", "RxF3F27", "RxF3FFD", "Rx1095C0", "Rx1095F7", "Rx14AB9F", "Rx154347", "Rx16A2B1" ],
            "code": "\
<nop:5> \
E8 [Rx80C4E]"
        },
        "faster_sin1": {
            "addr": [ "Rx1F9EB", "RxEB359", "RxEB48C", "RxEB77A" ],
            "code": "\
0F28C1 \
6690 \
E8 [Rx80C4E]"
        },
        "faster_sin_jank_splitA": {
            "addr": "RxD61C4",
            "code": "<nop:5>"
        },
        "faster_sin_jank_splitB": {
            "addr": [ "RxD61CB", "RxD61E9" ],
            "code": "E8 [Rx80C4E]"
        },
        "faster_cos0": {
            "addr": [ "Rx1FA02", "Rx1FA7D", "Rx1FAF9", "Rx22F45", "Rx23732", "Rx27B52", "Rx288FC", "Rx2938F", "Rx294B1", "Rx29564", "Rx29E42", "Rx29F6F", "Rx2A01F", "Rx2AEC5", "Rx2C305", "Rx2C9A2", "RxC326A", "RxC335A", "RxC362A", "RxC394A", "RxC43E0", "RxC4710", "RxC4970", "RxC4D80", "RxC82FB", "RxC88FE", "RxD3350", "RxD5106", "RxD51A6", "RxD5236", "RxD52C6", "RxEB4B5", "RxEB7A3", "RxF3F00", "Rx14ABB6", "Rx15435E", "Rx16A3A3" ],
            "code": "\
<nop:5> \
E8 [Rx80F1E]"
        },
        "use_new_collider_check": {
            "addr": "RxFA462",
            "code": "E8 [codecave:check_colliders_new]"
        }
    }
}