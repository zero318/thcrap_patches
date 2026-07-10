{
    "options": {
        "log_format_str": {
            "type": "s",
            "val": "Original game log:\n%s\n"
        },
        "exception_format_str": {
            "type": "s",
            "val": "C++ exception: %s\n"
        },
        "exception_no_description": {
            "type": "s",
            "val": "No description"
        },
        "d3d9_wstr": {
            "type": "w",
            "val": "d3d9.dll"
        },
        "kernel32_wstr": {
            "type": "w",
            "val": "kernel32.dll"
        },
        "VirtualProtect_str": {
            "type": "s",
            "val": "VirtualProtect"
        }
    },
    "codecaves": {
        "page_heap_fix_decompression": {
            "access": "re",
            "code": "\
FF4424 04 \
E9 [RxD7440] \
"
        },
        "expand_file_buffers": {
            "access": "re",
            "code": "\
85C0 \
74 4A \
53 \
57 \
56 \
89C6 \
50 \
E8 [th_msize] \
83C4 04 \
89C7 \
8D58 40 \
53 \
56 \
E8 [th_expand] \
83C4 08 \
85C0 \
75 14 \
53 \
E8 [th_malloc] \
83C4 04 \
57 \
56 \
50 \
E8 [th_memcpy] \
83C4 0C \
0FC1F8 \
6A 40 \
6A 00 \
50 \
E8 [th_memset] \
83C4 0C \
89F8 \
5E \
5F \
5B \
C3 \
"
        },
        "the_worst_fastfail_patch_ever": {
            "access": "re",
            "code": "\
837C24 04 17 \
0F85 [(*<Rx17B1E0>)+2] \
31C0 \
C2 0400 \
"
        },
        "log_cpp_exceptions": {
            "access": "re",
            "code": "\
BA <option:exception_no_description> \
8B4424 04 \
85C0 \
74 09 \
8378 14 0F \
89C2 \
0F4710 \
52 \
68 <option:exception_format_str> \
E8 [log_printf] \
83C4 08 \
E9 [Rx656D0] \
"
        },
        "allocation_test": {
            "access": "re",
            "code": "\
FF7424 04 \
E8 [Rx633BD] \
83C4 04 \
85C0 \
75 01 \
CC \
C3 \
"
        },
        "allocation_test2": {
            "access": "re",
            "code": "\
8B4424 04 \
89C2 \
81C2 0000007F \
CE \
50 \
E8 [Rx7DFC2] \
83C4 04 \
85C0 \
75 01 \
CC \
C3 \
"
        },
        "junowen_version_patch_init": {
            "access": "re",
            "export": true,
            "code": "\
55 \
53 \
57 \
56 \
50 \
68 <option:d3d9_wstr> \
E8 [th_GetModuleHandleW] \
89C6 \
8B40 3C \
66837C30 5C 02 \
75 46 \
89F3 \
81C3 CF1C0000 \
68 <option:kernel32_wstr> \
E8 [th_GetModuleHandleW] \
68 <option:VirtualProtect_str> \
50 \
E8 [th_GetProcAddress] \
89C7 \
89E5 \
55 \
6A 04 \
6A 06 \
53 \
FFD0 \
C786 CF1C0000 660F1F44 \
66C786 D31C0000 0000 \
55 \
FF7424 04 \
6A 06 \
53 \
FFD7 \
83C4 04 \
5E \
5F \
5B \
5D \
C3 \
"
        }
    },
    "binhacks": {
        "page_heap_fix_decompression": {
            "addr": "Rx15E73E",
            "code": "[codecave:page_heap_fix_decompression]"
        },
        "expand_file_buffers": {
            "addr": "RxD6949",
            "code": "[codecave:expand_file_buffers]"
        },
        "atomic_anm_loaded_cleanup": {
            "addr": "RxCDC10",
            "code": "\
56 \
8B4424 08 \
83F8 3F \
77 1D \
31F6 \
87B481 80074C06 \
85F6 \
74 10 \
89F1 \
E8 [RxCD920] \
56 \
E8 [Rx7A4DB] \
83C4 04 \
5E \
C2 0400 \
<int3:0xA1> \
"
        },
        "wtf_is_wrong_with_anms": {
            "addr": "RxCEA6A",
            "code": "\
C786 30020000 01000000 \
31F6 \
<nop:81> \
"
        },
        "actually_use_the_unload_flagA": {
            "addr": "Rx1345CA",
            "code": "6690"
        },
        "actually_use_the_unload_flagB": {
            "addr": "Rx1345CF",
            "code": "<nop:10>"
        },
        "the_worst_fastfail_patch_ever": {
            "addr": "(*<Rx17B1E0>)-5",
            "code": "\
E9 [codecave:the_worst_fastfail_patch_ever] \
EB F9 \
"
        },
        "reenable_logging": {
            "addr": [ "Rx15DD30", "RxCAC30", "RxD18A0" ],
            "code": "E9 [log_printf]"
        },
        "dont_crash_because_of_logging": {
            "addr": "RxCE893",
            "code": "\
8BB481 80074C06 \
E8 [log_printf] \
83C4 08 \
89F0 \
5F \
5E \
C9 \
"
        },
        "print_original_log": {
            "addr": "RxD6F70",
            "code": "\
833D <Rx22B084> 0F \
B8 <Rx22B070> \
0F4700 \
50 \
68 <option:log_format_str> \
E8 [log_printf] \
83C4 08 \
C3 \
CC \
"
        },
        "log_cpp_exceptions": {
            "addr": [ "Rx1F18", "Rx5C05", "Rx64D7", "Rx62812", "Rx62A0D", "Rx62A2D", "Rx6405D", "Rx655C0", "Rx65FDE", "Rx66544" ],
            "code": "[codecave:log_cpp_exceptions]"
        },
        "why_is_the_data_corrupted": {
            "addr": [ "RxDDB92", "RxDE622", "RxDE72F", "RxE7479", "Rx1061BD", "Rx106336", "Rx1061E4", "Rx106360", "Rx10620B", "Rx10638A", "Rx108322", "Rx10BB34", "Rx114E66", "Rx114B30", "Rx114A00", "Rx11D12B", "Rx11D396", "Rx11D0F0", "Rx131D9B", "Rx132009", "Rx15B9CB", "Rx15BA87", "Rx15B9F9", "Rx15BAA1", "Rx162D68" ],
            "code": "CC"
        },
        "even_more_crash_testing": {
            "addr": [ "RxCEB6C", "Rx7A46F", "Rx7A47F" ],
            "code": "CC"
        },
        "allocation_test": {
            "addr": [ "RxCECFE", "RxCEDAD", "RxCEEDD", "RxCF00C" ],
            "code": "[codecave:allocation_test]"
        },
        "allocation_test2": {
            "addr": "RxD7465",
            "code": "[codecave:allocation_test2]"
        }
    }
}