{
    "options": {
        "kernel32_dll_str": { "type": "s", "val": "kernel32.dll" },
        "win32_utf8_dll_str": { "type": "s", "val": "win32_utf8.dll" },
        
        "OpenFileMappingA_str": { "type": "s", "val": "OpenFileMappingA" },
        "CreateFileMappingA_str": { "type": "s", "val": "CreateFileMappingA" },
        "MapViewOfFile_str": { "type": "s", "val": "MapViewOfFile" },
        "UnmapViewOfFile_str": { "type": "s", "val": "UnmapViewOfFile" },
        "GetModuleFileNameU_str": { "type": "s", "val": "GetModuleFileNameU" },
        "GetCurrentProcess_str": { "type": "s", "val": "GetCurrentProcess" },
        
        "OpenFileMappingA_ptr": { "type": "c", "val": "(<codecave:eosd_multi_func_ptrs>)" },
        "CreateFileMappingA_ptr": { "type": "c", "val": "(<codecave:eosd_multi_func_ptrs> + 0x4)" },
        "MapViewOfFile_ptr": { "type": "c", "val": "(<codecave:eosd_multi_func_ptrs> + 0x8)" },
        "UnmapViewOfFile_ptr": { "type": "c", "val": "(<codecave:eosd_multi_func_ptrs> + 0xC)" },
        "GetModuleFileNameU_ptr": { "type": "c", "val": "(<codecave:eosd_multi_func_ptrs> + 0x10)" },
        "GetCurrentProcess_ptr": { "type": "c", "val": "(<codecave:eosd_multi_func_ptrs> + 0x14)" },
        
        "eosd_multi_shared_data_ptr": { "type": "c", "val": "(<codecave:eosd_multi_per_instance_data>)" },
        "eosd_multi_shared_data_handle_ptr": { "type": "c", "val": "(<codecave:eosd_multi_per_instance_data> + 0x4)" },
        "eosd_multi_instance_index_ptr": { "type": "c", "val": "(<codecave:eosd_multi_per_instance_data> + 0x8)" },
        
        "eosd_multi_mapping_name": {
            "type": "s",
            "val": "EoSDMulti"
        },
        "eosd_multi_enable_memshare": {
            "type": "u8",
            "val": 0
        }
    },
    "codecaves": {
        "eosd_multi_func_ptrs": {
            "enable": "<option:eosd_multi_enable_memshare>",
            "access": "r",
            "size": 4,
            "count": 6
        },
        "eosd_multi_constant_pool": {
            "enable": "<option:eosd_multi_enable_memshare>",
            "access": "r",
            "code": "\
1F000F00000000000000000008000000 \
FFFFFFFF000000000400000000000000 \
00000000000000000000000001000000 \
"
        },
        "eosd_multi_setup_patch_init": {
            "enable": "<option:eosd_multi_enable_memshare>",
            "access": "re",
            "export": true,
            "code": "\
57 \
56 \
68 <option:kernel32_dll_str> \
E8 [th_GetModuleHandleA] \
89C6 \
BF <th_GetProcAddress> \
68 <option:OpenFileMappingA_str> \
50 \
FFD7 \
A3 <option:OpenFileMappingA_ptr> \
68 <option:CreateFileMappingA_str> \
56 \
FFD7 \
A3 <option:CreateFileMappingA_ptr> \
68 <option:MapViewOfFile_str> \
56 \
FFD7 \
A3 <option:MapViewOfFile_ptr> \
68 <option:UnmapViewOfFile_str> \
56 \
FFD7 \
A3 <option:UnmapViewOfFile_ptr> \
68 <option:GetCurrentProcess_str> \
56 \
FFD7 \
A3 <option:GetCurrentProcess_ptr> \
68 <option:win32_utf8_dll_str> \
E8 [th_GetModuleHandleA] \
68 <option:GetModuleFileNameU_str> \
50 \
FFD7 \
A3 <option:GetModuleFileNameU_ptr> \
5E \
5F \
C3 \
",
        },
        "eosd_multi_per_instance_data": {
            "enable": "<option:eosd_multi_enable_memshare>",
            "access": "rw",
            "size": 0xC
        },
        "eosd_multi_setup_patch_post_init": {
            "enable": "<option:eosd_multi_enable_memshare>",
            "access": "re",
            "export": true,
            "code": "\
55 \
53 \
57 \
56 \
68 <option:eosd_multi_mapping_name> \
6A 00 \
68 1F000F00 \
FF15 <option:OpenFileMappingA_ptr> \
85C0 \
74 3B \
A3 <option:eosd_multi_shared_data_handle_ptr> \
83EC 14 \
0F2805 <codecave:eosd_multi_constant_pool> \
0F114424 04 \
890424 \
FF15 <option:MapViewOfFile_ptr> \
89C6 \
A3 <option:eosd_multi_shared_data_ptr> \
B8 01000000 \
0FC146 04 \
A3 <option:eosd_multi_instance_index_ptr> \
85C0 \
74 2B \
5E \
5F \
5B \
5D \
C3 \
83EC 18 \
0F2805 (<codecave:eosd_multi_constant_pool> + 0x10) \
0F110424 \
C74424 14 <option:eosd_multi_mapping_name> \
C74424 10 08000000 \
FF15 <option:CreateFileMappingA_ptr> \
EB 9F \
FF15 <option:GetCurrentProcess_ptr> \
89C3 \
6A 00 \
6A 00 \
50 \
FF15 <option:GetModuleFileNameU_ptr> \
89C5 \
50 \
E8 [th_malloc] \
83C4 04 \
89C7 \
55 \
50 \
53 \
FF15 <option:GetModuleFileNameU_ptr> \
31DB \
EB 06 \
43 \
83FB 03 \
74 2B \
8B6E 04 \
6A 00 \
6A 00 \
6A 00 \
57 \
E8 [thcrap_inject_into_new] \
3B6E 04 \
75 E6 \
<nop:14> \
F390 \
3B6E 04 \
74 F9 \
EB CF \
57 \
E8 [th_free] \
83C4 04 \
E9 69FFFFFF \
",
        },
        "eosd_multi_shutdown_patch_exit": {
            "enable": "<option:eosd_multi_enable_memshare>",
            "access": "re",
            "export": true,
            "code": "\
FF35 <option:eosd_multi_shared_data_ptr> \
FF15 <option:UnmapViewOfFile_ptr> \
C3 \
",
        },
        "startup_int3_patch_init": {
            "access": "re",
            "ignore": true,
            "export": true,
            "code": "CC",
        },
        "eosd_multi_dont_die_on_startup_patch_init": {
            "access": "re",
            "export": true,
            "code": "\
6A 01 \
FF15 <0x46A250> \
FF15 <0x46A254> \
F20F2AC0 \
F20F1105 <0x6C6BF8> \
C3 \
"
        },
        "eosd_framelimiter_fix_data": {
            "access": "rw",
            "size": 4
        }
    },
    "binhacks": {
        "remove_mutexA": {
            "addr": 0x421900,
            "code": "31C0C3",
            "expected": "558BEC",
        },
        "dont_skip_draw": {
            "addr": 0x4206E9,
            "ignore": true,
            "code": "<nop:16>",
            "expected": "\
8B45 C0 \
8378 08 00 \
75 07 \
33C0 \
E9 49040000 \
"
        },
        "eosd_framelimiter_fixA": {
            "addr": 0x4208FE,
            "code": "\
6A 01 \
FF15 58A24600 \
8B45 B4 \
89C2 \
2B15 <codecave:eosd_framelimiter_fix_data> \
A3 <codecave:eosd_framelimiter_fix_data> \
0F42D0 \
660F6EC0 \
F20F1015 D8FF4600 \
660F56C2 \
F20F5CC2 \
F20F100D F86B6C00 \
F20F5DC8 \
F20F110D F86B6C00 \
F20F5CC1 \
660F5405 40434700 \
660F2E05 C0B14600 \
72 54 \
F20F101425 C0B14600 \
F20F58CA \
F20F5CC2 \
660F2EC2 \
73 F2 \
F20F110D F86B6C00 \
A0 4B6E6C00 \
8B4D C0 \
3A41 10 \
0F8C 84000000 \
E9 81FEFFFF \
<int3:31> \
"
        }
    }
}