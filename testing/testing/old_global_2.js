{
    "options": {
        "disable_debugger_detection": {
            "type": "b",
            "val": false
        },
        "disable_terminate_process": {
            "type": "b",
            "val": true
        }
    },
    "codecave": {
        "disable_terminate_process": {
            "enable": "<option:disable_terminate_process>",
            "access": "re",
            "code": "\
31C0 \
C2 0800\
"
        }
    },
    "binhacks": {
        "patch_trust_check": {
            "addr": "Rx12FD5F",
            "code": "<nop:2>"
        },
        "disable_debugger_check": {
            "enable": "<option:disable_debugger_detection>",
            "addr": [ "Rx1308C3", "Rx131C60" ],
            "code": "FF15{<codecave:disable_terminate_process>}"
            //"code": "31C0<nop:4>"
        },
        "disable_terminate_process": {
            "enable": "<option:disable_terminate_process>",
            "addr": "Rx388304",
            "code": "<codecave:disable_terminate_process>"
        }
	},
	"detours": {
        "kernel32.dll": null,
		"user32.dll": null,
        "gdi32.dll": null,
        "shell32.dll": null,
        "version.dll": null,
        "dsound.dll": null
	}
}