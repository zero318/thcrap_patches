{
  "options": {
    "P1AI": {
      "type": "b",
      "val": false
    } 
  },
  "binhacks": {
    "NoAutoAttacks": {
      "addr": "Rx0A510",
      "code": "C2 0400 CC"
    },
    "JumpFromBossAttack": {
      "addr": "RxD7E97",
      "code": "E9 90700800 CC"
    },
    "JumpFromEXAttack": {
      "addr": "RxD8391",
      "code": "E9 CA6B0800 CC"
    },
    "P2StoryMeter": {
      "addr": [ "RxEADA9", "RxEADBD", "RxEAE36" ],
      "code": "64"
    },

    "StoryP1Input": {
      "addr": "Rx10F890",
      "code": "00"
    },
    
    // Toggle P1 AI
    "StoryP2Input": {
      "enable": "<option:P1AI> == 1",
      "addr": "Rx10F89A",
      "code": "02"
    },
    "StoryP1AI": {
      "enable": "<option:P1AI> == 1",
      "addr": "Rx141532",
      "code": "01"
    },
    
    // Toggle P1 No AI
    "StoryNoAIInput": {
      "enable": "<option:P1AI> == 0",
      "addr": "RxE998F",
      "code": "909090909090"
    },
    "StoryAllowPlayerInput": {
      "enable": "<option:P1AI> == 0",
      "addr": "RxEAC42",
      "code": "90909090909090909090"
    },

    "P2BossAttackToAutoAttack": {
      "addr": "Rx15EF2C",
      "code": "\
        A1 <Rx1AE4C4>\
        3BC3\
        75 1F\
        A1 <Rx1AE4E0>\
        8B40 34\
        85C0\
        74 13\
        8B48 08\
        81C1 E8030000\
        8948 08\
        E9 1497F7FF\
        CCCC\
        8B41 38\
        8B48 18\
        E9 388FF7FF\
        CC\
      "
    },
    "P2EXAttackToAutoAttack": {
      "addr": "Rx15EF60",
      "code": "\
        A1 <Rx1AE4C4>\
        3BC3\
        75 1F\
        A1 <Rx1AE4E0>\
        8B40 34\
        85C0\
        74 13\
        8B48 08\
        81C1 E8030000\
        8948 08\
        E9 E096F7FF\
        CCCC\
        8B0D <Rx207A94> \
        E9 0494F7FF\
        CC\
      "
    }
  }
}