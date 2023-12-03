{
    "options": {
        "log_termination_string": {
            "type": "s",
            "val": "Attempted process termination at Rx%X\n"
        },
        "log_debugger_check_string": {
            "type": "s",
            "val": "Attempted debugger check at Rx%X\n"
        }
    },
    "codecaves": {
        "log_termination": {
            "access": "re",
            "code": "\
8B0424 \
64:8B0D 30000000 \
2B41 08 \
83C0 FA \
50 \
68 <option:log_termination_string> \
E8 [log_printf] \
83C4 08 \
31C0 \
C2 0800 \
"
        },
        "log_debugger_check": {
            "access": "re",
            "code": "\
8B0424 \
64:8B0D 30000000 \
2B41 08 \
83C0 FA \
50 \
68 <option:log_debugger_check_string> \
E8 [log_printf] \
83C4 08 \
31C0 \
C3 \
"
        },
        "log_print_replace": {
            "access": "r",
            "code": "<log_print>"
        }
    },
    "binhacks": {
        "replace_termination": {
            "addr": "Rx388304",
            "code": "<codecave:log_termination>"
        },
        "replace_debugger_check": {
            "addr": "Rx388310",
            "code": "<codecave:log_debugger_check>",
            "ignore": true
        },
        "replace_debug_output": {
            "addr": [ "Rx246BE", "Rx246E0", "RxE6932", "RxE6EFB", "RxE6FC9", "Rx132B72", "Rx1F7372", "Rx26AF58" ],
            "code": "FF15 <codecave:log_print_replace>"
        },
		"ret": {
			"addr": [
				//"Rx12E820",
				//"Rx130630",
				//"Rx132AF0"
			],
            "code": "C3"
		},
        "yeet": {
            "addr": "Rx130630", //"Rx130796",
            "code": "CC",
            "ignore": true
        },
        "patch_trust_check_old": {
            "addr": "Rx13049A",
            "code": "<nop:0x136>",
            "ignore": true
        },
        "patch_trust_check": {
            "addr": "Rx12FD5F",
            "code": "<nop:2>"
        }
	}
}