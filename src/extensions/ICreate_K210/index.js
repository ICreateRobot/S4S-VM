// 视觉识别模块
const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type')
const formatMessage = require('format-message');

class ICreateK210 {

    constructor(runtime) {
        this.runtime = runtime;
        
    }

    getInfo() {
        return {
        id: 'ICreateK210',
        name: formatMessage({
                id: 'k210.name',
                default: 'AI Vision',
                description: 'k210.name'
            }),
        color1: '#2196F3',   
        color2: '#21CBF3',
        
        blocks: [
            {
                opcode: 'settings',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'k210.settings',
                    default: 'Switch vision module to [TWO]',
                    description: 'k210.settings'
                }),
                arguments:{
                    TWO:{
                        type: ArgumentType.STRING,
                        menu:'MENU_MODE',
                    }
                }
            },

            {
                opcode: 'currentMode',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'k210.currentMode',
                    default: 'Current mode',
                    description: 'k210.currentMode'
                }),
                arguments:{
                },
                disableMonitor: true
            },

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'k210.colorRecognLabel',
                    default: 'color recognition',
                    description: 'k210.colorRecognLabel'
                }),
            },

            {
                opcode: 'colorRecogn',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'k210.colorRecogn',
                    default: 'Recognized color [ONE] value',
                    description: 'k210.colorRecogn'
                }),
                arguments:{
                    ONE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_RGB'
                    }
                },
                disableMonitor: true
            },


            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'k210.colorBlockLabel',
                    default: 'color block tracking',
                    description: 'k210.colorBlockLabel'
                }),
            },

            {
                opcode: 'colorBlockSet',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'k210.colorBlockSet',
                    default: 'Set tracking color [ONE]',
                    description: 'k210.colorBlockSet'
                }),
                arguments:{
                    ONE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_COLOR'
                    }
                }
            },

            {
                opcode: 'colorIsTrack',
                blockType: BlockType.BOOLEAN,
                text: formatMessage({
                    id: 'k210.colorIsTrack',
                    default: 'Tracked target color?',
                    description: 'k210.colorIsTrack'
                }),
                arguments:{
                },
                disableMonitor: true
            },

            {
                opcode: 'colorBlockInfo',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'k210.colorBlockInfo',
                    default: 'Get color block position info [ONE]',
                    description: 'k210.colorBlockInfo'
                }),
                arguments:{
                    ONE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_PLACE'
                    }
                },
                disableMonitor: true
            },


            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'k210.tagLabel',
                    default: 'tag recognition',
                    description: 'k210.tagLabel'
                }),
            },
            
            {
                opcode: 'tagNum',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'k210.tagNum',
                    default: 'Number of recognized tags',
                    description: 'k210.tagNum'
                }),
                arguments:{

                },
                disableMonitor: true
            },

            {
                opcode: 'tagCont',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'k210.tagCont',
                    default: 'Recognized tag content',
                    description: 'k210.tagCont'
                }),
                arguments:{

                },
                disableMonitor: true
            },

            {
                opcode: 'tagAngle',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'k210.tagAngle',
                    default: 'Tag rotation angle',
                    description: 'k210.tagAngle'
                }),
                arguments:{

                },
                disableMonitor: true
            },


            {
                opcode: 'tagInfo',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'k210.tagInfo',
                    default: 'Recognized tag position info [ONE]',
                    description: 'k210.tagInfo'
                }),
                arguments:{
                    ONE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_PLACE'
                    }
                },
                disableMonitor: true
            },

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'k210.lineLabel',
                    default: 'line recognition',
                    description: 'k210.lineLabel'
                }),
            },
            {
                opcode: 'lineIsRecog',
                blockType: BlockType.BOOLEAN,
                text: formatMessage({
                    id: 'k210.lineIsRecog',
                    default: 'Is a line recognized?',
                    description: 'k210.lineIsRecog'
                }),
                arguments:{
                },
                disableMonitor: true
            },
            {
                opcode: 'lineInfo',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'k210.lineInfo',
                    default: 'Get line position info at [ONE] [TWO]',
                    description: 'k210.lineInfo'
                }),
                arguments:{
                    ONE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_PLACE_VERTICAL'
                    },
                    TWO:{
                        type: ArgumentType.STRING,
                        menu:'MENU_PLACE'
                    }
                },
                disableMonitor: true
            },

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'k210.objectLabel',
                    default: '20-class object recognition',
                    description: 'k210.objectLabel'
                }),
            },

            {
                opcode: 'objectNum',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'k210.objectNum',
                    default: 'Number of recognized objects',
                    description: 'k210.objectNum'
                }),
                arguments:{

                },
                disableMonitor: true
            },

            {
                opcode: 'objectIsRecogn',
                blockType: BlockType.BOOLEAN,
                text: formatMessage({
                    id: 'k210.objectIsRecogn',
                    default: 'Recognized object  [ONE]?',
                    description: 'k210.objectIsRecogn'
                }),
                arguments:{
                    ONE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_OBJ'
                    },
                },
                disableMonitor: true
            },

            {
                opcode: 'objInfo',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'k210.objInfo',
                    default: 'Recognized object position info [ONE]',
                    description: 'k210.objInfo'
                }),
                arguments:{
                    ONE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_PLACE'
                    }
                },
                disableMonitor: true
            },


            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'k210.qrLabel',
                    default: 'QR code recognition',
                    description: 'k210.qrLabel'
                }),
            },


            {
                opcode: 'qrIsRecogn',
                blockType: BlockType.BOOLEAN,
                text: formatMessage({
                    id: 'k210.qrIsRecogn',
                    default: 'Is a QR code recognized?',
                    description: 'k210.qrIsRecogn'
                }),
                arguments:{
                },
                disableMonitor: true
            },

            {
                opcode: 'qrCont',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'k210.qrCont',
                    default: 'Recognized QR code content',
                    description: 'k210.qrCont'
                }),
                arguments:{
                },
                disableMonitor: true
            },
            {
                opcode: 'qrInfo',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'k210.qrInfo',
                    default: 'Recognized QR code position info [ONE]',
                    description: 'k210.qrInfo'
                }),
                arguments:{
                    ONE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_PLACE'
                    }
                },
                disableMonitor: true
            },

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'k210.faceAttrLabel',
                    default: 'face attributes',
                    description: 'k210.faceAttrLabel'
                }),
            },

            {
                opcode: 'faceAttrNum',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'k210.faceAttrNum',
                    default: 'Number of detected faces',
                    description: 'k210.faceAttrNum'
                }),
                arguments:{

                },
                disableMonitor: true
            },


            {
                opcode: 'faceAttrInfo',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'k210.faceAttrInfo',
                    default: 'Detected [ONE] position info [TWO]',
                    description: 'k210.faceAttrInfo'
                }),
                arguments:{
                    ONE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_FACE'
                    },
                    TWO:{
                        type: ArgumentType.STRING,
                        menu:'MENU_PLACE'
                    }
                },
                disableMonitor: true
            },

            {
                opcode: 'faceAttrEmote',
                blockType: BlockType.BOOLEAN,
                text: formatMessage({
                    id: 'k210.faceAttrEmote',
                    default: 'Is [ONE] [TWO]?',
                    description: 'k210.faceAttrEmote'
                }),
                arguments:{
                    ONE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_FACE'
                    },
                    TWO:{
                        type: ArgumentType.STRING,
                        menu:'MENU_EMOTE'
                    }
                },
                disableMonitor: true
            },

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'k210.faceRecognLabel',
                    default: 'face recognition',
                    description: 'k210.faceRecognLabel'
                }),
            },
            {
                opcode: 'faceLearn',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'k210.faceLearn',
                    default: 'Learn current face',
                    description: 'k210.faceLearn'
                }),
                arguments:{
                }
            },
            {
                opcode: 'faceRecogNum',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'k210.faceRecogNum',
                    default: 'Number of recognized faces',
                    description: 'k210.faceRecogNum'
                }),
                arguments:{
                
                },
                disableMonitor: true
            },

            {
                opcode: 'faceRecogLearn',
                blockType: BlockType.BOOLEAN,
                text: formatMessage({
                    id: 'k210.faceRecogLearn',
                    default: 'Is a learned face detected?',
                    description: 'k210.faceRecogLearn'
                }),
                arguments:{
                
                },
                disableMonitor: true
            },

            {
                opcode: 'faceRecognEmote',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'k210.faceRecognEmote',
                    default: 'Recognized [ONE] position info [TWO]?',
                    description: 'k210.faceRecognEmote'
                }),
                arguments:{
                    ONE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_FACE'
                    },
                    TWO:{
                        type: ArgumentType.STRING,
                        menu:'MENU_PLACE'
                    }
                },
                disableMonitor: true
            },

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'k210.deepLearningLabel',
                    default: 'deep learning',
                    description: 'k210.deepLearningLabel'
                }),
            },

            {
                opcode: 'deepLearning',
                blockType: BlockType.BOOLEAN,
                text: formatMessage({
                    id: 'k210.deepLearning',
                    default: 'Is [ONE] recognized?',
                    description: 'k210.deepLearning'
                }),
                arguments:{
                    ONE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_DEEP_CLASS'
                    },
                },
                disableMonitor: true
            },

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'k210.roadLabel',
                    default: 'road sign recognition',
                    description: 'k210.roadLabel'
                }),
            },

            {
                opcode: 'roadNum',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'k210.roadNum',
                    default: 'Number of recognized road signs',
                    description: 'k210.roadNum'
                }),
                arguments:{
                },
                disableMonitor: true
            },


            {
                opcode: 'roadRecog',
                blockType: BlockType.BOOLEAN,
                text: formatMessage({
                    id: 'k210.roadRecog',
                    default: 'Recognized road sign [ONE]?',
                    description: 'k210.roadRecog'
                }),
                arguments:{
                    ONE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_ROAD'
                    },
                },
                disableMonitor: true
            },

            {
                opcode: 'roadInfo',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'k210.roadInfo',
                    default: 'Recognized road sign position info [ONE]',
                    description: 'k210.roadInfo'
                }),
                arguments:{
                    ONE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_PLACE'
                    }
                },
                disableMonitor: true
            },

            // {
            //     blockType: BlockType.LABEL,
            //     text: formatMessage({
            //         id: 'k210.chat',
            //         default: 'AI chat',
            //         description: 'k210.chat'
            //     }),
            // },

            // {
            //     opcode: 'chatState',
            //     blockType: BlockType.BOOLEAN,
            //     text: formatMessage({
            //         id: 'k210.chatState',
            //         default: 'Current state is [ONE]?',
            //         description: 'k210.chatState'
            //     }),
            //     arguments:{
            //         ONE:{
            //             type: ArgumentType.STRING,
            //             menu:'MENU_CHAT'
            //         },
            //     },
            //     disableMonitor: true
            // },

            // {
            //     opcode: 'chatMotion',
            //     blockType: BlockType.BOOLEAN,
            //     text: formatMessage({
            //         id: 'k210.chatMotion',
            //         default: 'Detected motion command [ONE]?',
            //         description: 'k210.chatMotion'
            //     }),
            //     arguments:{
            //         ONE:{
            //             type: ArgumentType.STRING,
            //             menu:'MENU_MOTION'
            //         },
            //     },
            //     disableMonitor: true
            // },

            // {
            //     opcode: 'chatMotionSpeed',
            //     blockType: BlockType.REPORTER,
            //     text: formatMessage({
            //         id: 'k210.chatMotionSpeed',
            //         default: 'Detected motion speed',
            //         description: 'k210.chatMotionSpeed'
            //     }),
            //     arguments:{
                    
            //     },
            //     disableMonitor: true
            // },
            // {
            //     opcode: 'chatCustomCommand',
            //     blockType: BlockType.REPORTER,
            //     text: formatMessage({
            //         id: 'k210.chatCustomCommand',
            //         default: 'Detected custom command',
            //         description: 'k210.chatCustomCommand'
            //     }),
            //     arguments:{
                    
            //     },
            //     disableMonitor: true
            // },

            // {
            //     blockType: BlockType.LABEL,
            //     text: formatMessage({
            //         id: 'k210.wirelessLabel',
            //         default: 'WIRELESS IMAGE TRANSMISSION',
            //         description: 'k210.wirelessLabel'
            //     }),
            // },

            // {
            //     opcode: 'wirelessJoystick',
            //     blockType: BlockType.REPORTER,
            //     text: formatMessage({
            //         id: 'k210.wirelessJoystick',
            //         default: 'Get joystick position [ONE]',
            //         description: 'k210.wirelessJoystick'
            //     }),
            //     arguments:{
            //         ONE:{
            //             type: ArgumentType.STRING,
            //             menu:'MENU_POSITION'
            //         },
            //     },
            //     disableMonitor: true
            // },
            // {
            //     opcode: 'wirelessButton',
            //     blockType: BlockType.BOOLEAN,
            //     text: formatMessage({
            //         id: 'k210.wirelessButton',
            //         default: 'Button [ONE] pressed ?',
            //         description: 'k210.wirelessButton'
            //     }),
            //     arguments:{
            //         ONE:{
            //             type: ArgumentType.STRING,
            //             menu:'MENU_BUTTON'
            //         },
            //     },
            //     disableMonitor: true
            // },
            // {
            //     opcode: 'wirelessKeybord',
            //     blockType: BlockType.BOOLEAN,
            //     text: formatMessage({
            //         id: 'k210.wirelessKeybord',
            //         default: 'Keyboard [ONE] pressed ?',
            //         description: 'k210.wirelessKeybord'
            //     }),
            //     arguments:{
            //         ONE:{
            //             type: ArgumentType.STRING,
            //             menu:'MENU_KEYBOARD'
            //         },
            //     },
            //     disableMonitor: true
            // },

            // {
            //     opcode: 'wirelessSet',
            //     blockType: BlockType.COMMAND,
            //     text: formatMessage({
            //         id: 'k210.wirelessSet',
            //         default: 'Connect to WiFi name: [ONE] Password: [TWO]',
            //         description: 'k210.wirelessSet'
            //     }),
            //     arguments:{
            //         ONE:{
            //             type: ArgumentType.STRING,
            //         },
            //         TWO:{
            //             type: ArgumentType.STRING,
            //         },
            //     }
            // },

            // {
            //     opcode: 'wirelessConnect',
            //     blockType: BlockType.COMMAND,
            //     text: formatMessage({
            //         id: 'k210.wirelessConnect',
            //         default: 'Scan QR code to connect to WiFi',
            //         description: 'k210.wirelessConnect'
            //     }),
            //     arguments:{
            //     }
            // },

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'k210.settingsLabel',
                    default: 'settings',
                    description: 'k210.settingsLabel'
                }),
            },

            {
                opcode: 'lightSwitch',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'k210.lightSwitch',
                    default: '[ONE] fill light',
                    description: 'k210.lightSwitch'
                }),
                arguments:{
                    ONE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_SWITCH'
                    }
                }
            },

            {
                opcode: 'lightBrightness',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'k210.lightBrightness',
                    default: 'Set fill light brightness [ONE]',
                    description: 'k210.lightBrightness'
                }),
                arguments:{
                    ONE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_BRIGHTNESS'
                    }
                }
            },
            {
                opcode: 'lightGetBrightness',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'k210.lightGetBrightness',
                    default: 'Fill light brightness',
                    description: 'k210.lightGetBrightness'
                }),
                arguments:{
                },
                disableMonitor: true
            },

        ],


        menus: {
            MENU_BRIGHTNESS: {
                acceptReporters: false,
                items: [
                {
                    text:'0',
                    value: '0'
                },
                {
                    text:'1',
                    value: '1'
                },
                {
                    text:'2',
                    value: '2'
                },
                {
                    text:'3',
                    value: '3'
                },
                {
                    text:'4',
                    value: '4'
                },
                {
                    text:'5',
                    value: '5'
                },
                {
                    text:'6',
                    value: '6'
                },
                {
                    text:'7',
                    value: '7'
                },
                {
                    text:'8',
                    value: '8'
                },
                {
                    text:'9',
                    value: '9'
                },
                {
                    text:'10',
                    value: '10'
                },
                    
                ]
            },
            MENU_SWITCH: {
                acceptReporters: false,
                items: [
                {
                    text: formatMessage({
                        id: 'K210.menuSwitch.open',
                        default: 'open',
                        description: 'K210.menuSwitch.open'
                    }),
                    value: '1'
                    },
                {
                    text: formatMessage({
                        id: 'K210.menuSwitch.close',
                        default: 'close',
                        description: 'K210.menuSwitch.close'
                    }),
                    value: '0'
                },
                    
                ]
            },
            MENU_ROAD: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'k210.menuRoad.turnRight',
                            default: 'Turn Right',
                            description: 'k210.menuRoad.turnRight'
                        }),
                        value: 'TURN_RIGHT'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuRoad.turnLeft',
                            default: 'Turn Left',
                            description: 'k210.menuRoad.turnLeft'
                        }),
                        value: 'TURN_LEFT'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuRoad.stop',
                            default: 'Stop',
                            description: 'k210.menuRoad.stop'
                        }),
                        value: 'STOP_MOVING'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuRoad.honk',
                            default: 'Honk',
                            description: 'k210.menuRoad.honk'
                        }),
                        value: 'EVENT_HONK'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuRoad.greenLight',
                            default: 'Green Light',
                            description: 'k210.menuRoad.greenLight'
                        }),
                        value: 'GREEN'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuRoad.redLight',
                            default: 'Red Light',
                            description: 'k210.menuRoad.redLight'
                        }),
                        value: 'RED'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuRoad.target',
                            default: 'Target',
                            description: 'k210.menuRoad.target'
                        }),
                        value: 'EVENT_TARGET'
                    }
                ]
            },

            // 深度学习类别
            MENU_DEEP_CLASS:{
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'k210.menuDeepClass.class0',
                            default: 'class 1',
                            description: 'k210.menuDeepClass.class0'
                        }),
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuDeepClass.class1',
                            default: 'class 2',
                            description: 'k210.menuDeepClass.class1'
                        }),
                        value: '2'
                    },
                
                ]
            },

            // 人脸属性
            MENU_EMOTE:{
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'k210.menuEmote.open',
                            default: 'Mouth Open',
                            description: 'k210.menuEmote.open'
                        }),
                        value: 'FACE_OPEN_MOUTH'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuEmote.smiling',
                            default: 'Smiling',
                            description: 'k210.menuEmote.smiling'
                        }),
                        value: 'FACE_SMILE'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuEmote.Wearing',
                            default: 'Wearing Glasses',
                            description: 'k210.menuEmote.Wearing'
                        }),
                        value: 'FACE_GLASSES'
                    },
                
                ]
            },
            MENU_FACE:{
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'k210.menuFace.face0',
                            default: 'Face 0',
                            description: 'k210.menuFace.face0'
                        }),
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuFace.face1',
                            default: 'Face 1',
                            description: 'k210.menuFace.face1'
                        }),
                        value: '2'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuFace.face2',
                            default: 'Face 2',
                            description: 'k210.menuFace.face2'
                        }),
                        value: '3'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuFace.face3',
                            default: 'Face 3',
                            description: 'k210.menuFace.face3'
                        }),
                        value: '4'
                    },
                
                ]
            },

            // 20类物体
            MENU_OBJ: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Airplane',
                            default: '(0)Airplane',
                            description: 'k210.menuObj.Airplane'
                        }),
                        value: 'OBJECT_AIRPLANE'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Bicycle',
                            default: '(1)Bicycle',
                            description: 'k210.menuObj.Bicycle'
                        }),
                        value: 'OBJECT_BICYCLE'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Bird',
                            default: '(2)Bird',
                            description: 'k210.menuObj.Bird'
                        }),
                        value: 'OBJECT_BIRD'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Boat',
                            default: '(3)Boat',
                            description: 'k210.menuObj.Boat'
                        }),
                        value: 'OBJECT_BOAT'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Bottle',
                            default: '(4)Bottle',
                            description: 'k210.menuObj.Bottle'
                        }),
                        value: 'OBJECT_BOTTLE'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Bus',
                            default: '(5)Bus',
                            description: 'k210.menuObj.Bus'
                        }),
                        value: 'OBJECT_BUS'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Car',
                            default: '(6)Car',
                            description: 'k210.menuObj.Car'
                        }),
                        value: 'OBJECT_CAR'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Cat',
                            default: '(7)Cat',
                            description: 'k210.menuObj.Cat'
                        }),
                        value: 'OBJECT_CAT'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Chair',
                            default: '(8)Chair',
                            description: 'k210.menuObj.Chair'
                        }),
                        value: 'OBJECT_CHAIR'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Cow',
                            default: '(9)Cow',
                            description: 'k210.menuObj.Cow'
                        }),
                        value: 'OBJECT_COW'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.DiningTable',
                            default: '(10)Dining Table',
                            description: 'k210.menuObj.DiningTable'
                        }),
                        value: 'OBJECT_DININGTABLE'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Dog',
                            default: '(11)Dog',
                            description: 'k210.menuObj.Dog'
                        }),
                        value: 'OBJECT_DOG'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.House',
                            default: '(12)House',
                            description: 'k210.menuObj.House'
                        }),
                        value: 'OBJECT_HORSE'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Motorcycle',
                            default: '(13)Motorcycle',
                            description: 'k210.menuObj.Motorcycle'
                        }),
                        value: 'OBJECT_MOTORBIKE'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Person',
                            default: '(14)Person',
                            description: 'k210.menuObj.Person'
                        }),
                        value: ' OBJECT_PERSON'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.PottedPlant',
                            default: '(15)Potted Plant',
                            description: 'k210.menuObj.PottedPlant'
                        }),
                        value: 'OBJECT_POTTEDPLANT'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Sheep',
                            default: '(16)Sheep',
                            description: 'k210.menuObj.Sheep'
                        }),
                        value: 'OBJECT_SHEEP'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Sofa',
                            default: '(17)Sofa',
                            description: 'k210.menuObj.Sofa'
                        }),
                        value: 'OBJECT_SOFA'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Ship',
                            default: '(18)Ship',
                            description: 'k210.menuObj.Ship'
                        }),
                        value: 'OBJECT_TRAIN'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Television',
                            default: '(19)Television',
                            description: 'k210.menuObj.Television'
                        }),
                        value: 'OBJECT_TV'
                    }
                ]
            },

            MENU_PLACE_VERTICAL:{
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'k210.menuPlaceVertical.top',
                            default: 'top',
                            description: 'k210.menuPlaceVertical.top'
                        }),
                        value: 'UP'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuPlaceVertical.middle',
                            default: 'middle',
                            description: 'k210.menuPlaceVertical.middle'
                        }),
                        value: 'MIDDLE'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuPlaceVertical.bottom',
                            default: 'bottom',
                            description: 'k210.menuPlaceVertical.bottom'
                        }),
                        value: 'DOWN'
                    },
                
                ]
            },

            MENU_PLACE:{
                acceptReporters: false,
                items: [
                    {
                        text: 'x',
                        value: 'AXIS_X'
                    },
                    {
                        text: 'y',
                        value: 'AXIS_Y'
                    },
                    {
                        text: 'W',
                        value: 'AXIS_W'
                    },
                    {
                        text: 'H',
                        value: 'AXIS_H'
                    },
                
                ]
            },
            MENU_RGB:{
                acceptReporters: false,
                items: [
                    {
                        text: 'R',
                        value: 'RED'
                    },
                    {
                        text: 'G',
                        value: 'GREEN'
                    },
                    {
                        text: 'B',
                        value: 'BLUE'
                    },

                ]
            },
            MENU_COLOR:{
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'robotcolorplace.menuColor.red',
                            default: 'Red',
                            description: 'robotcolorplace.menuColor.red'
                        }),
                        value: 'RED'
                    },
                    {
                        text: formatMessage({
                            id: 'robotcolorplace.menuColor.green',
                            default: 'Green',
                            description: 'robotcolorplace.menuColor.green'
                        }),
                        value: 'GREEN'
                    },
                    {
                        text: formatMessage({
                            id: 'robotcolorplace.menuColor.blue',
                            default: 'Blue',
                            description: 'robotcolorplace.menuColor.blue'
                        }),
                        value: 'BLUE'
                    },
                    {
                        text: formatMessage({
                            id: 'robotcolorplace.menuColor.yellow',
                            default: 'Yellow',
                            description: 'robotcolorplace.menuColor.yellow'
                        }),
                        value: 'YELLOW'
                    },
                    {
                        text: formatMessage({
                            id: 'robotcolorplace.menuColor.black',
                            default: 'Black',
                            description: 'robotcolorplace.menuColor.black'
                        }),
                        value: 'BLACK'
                    },
                    {
                        text: formatMessage({
                            id: 'robotcolorplace.menuColor.white',
                            default: 'White',
                            description: 'robotcolorplace.menuColor.white'
                        }),
                        value: 'WHITE'
                    },
                ]
            },
            MENU_PORT: {
                acceptReporters: false,
                items: [
                    {
                        text: '1',
                        value: '1'
                    },
                    {
                        text: '2',
                        value: '2'
                    },
                    {
                        text: '3',
                        value: '3'
                    },
                    {
                        text: '4',
                        value: '4'
                    },
                    {
                        text: '5',
                        value: '5'
                    },
                    {
                        text: '6',
                        value: '6'
                    },
                    {
                        text: '7',
                        value: '7'
                    },
                    {
                        text: '8',
                        value: '8'
                    },
                    
                ]
            },

            MENU_MODE: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'k210.menuMode.recogn',
                            default: 'color recognition',
                            description: 'k210.menuMode.recogn'
                        }),
                        value: 'COLOR'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuMode.colorBlock',
                            default: 'color block tracking',
                            description: 'k210.menuMode.colorBlock'
                        }),
                        value: 'COLOR_TRACK'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuMode.tag',
                            default: 'tag recognition',
                            description: 'k210.menuMode.tag'
                        }),
                        value: 'TAG'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuMode.line',
                            default: 'line recognition',
                            description: 'k210.menuMode.line'
                        }),
                        value: 'LINE'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuMode.class',
                            default: '20-class object recognition',
                            description: 'k210.menuMode.class'
                        }),
                        value: 'OBJECT'
                    },

                    {
                        text: formatMessage({
                            id: 'k210.menuMode.qr',
                            default: 'QR code recognition',
                            description: 'k210.menuMode.qr'
                        }),
                        value: 'QR'
                    },

                    {
                        text: formatMessage({
                            id: 'k210.menuMode.faceAttr',
                            default: 'face attributes',
                            description: 'k210.menuMode.faceAttr'
                        }),
                        value: 'FACE_DETECT'
                    },

                    {
                        text: formatMessage({
                            id: 'k210.menuMode.faceRecogn',
                            default: 'face recognition',
                            description: 'k210.menuMode.faceRecogn'
                        }),
                        value: 'FACE_RECOGNIZE'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuMode.deep',
                            default: 'deep learning',
                            description: 'k210.menuMode.deep'
                        }),
                        value: 'AI'
                    },

                    {
                        text: formatMessage({
                            id: 'k210.menuMode.road',
                            default: 'road sign recognition',
                            description: 'k210.menuMode.road'
                        }),
                        value: 'CARD'
                    },
                    // {
                    //     text: formatMessage({
                    //         id: 'k210.menuMode.wifi',
                    //         default: 'Video transmission mode',
                    //         description: 'k210.menuMode.wifi'
                    //     }),
                    //     value: 'WIFI'
                    // },
                ]
            },
            MENU_CHAT: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'k210.menuChat.notStart',
                            default: 'Not Started',
                            description: 'k210.menuChat.notStart'
                        }),
                        value: 'AI_OFF'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuChat.connecting',
                            default: 'Connecting',
                            description: 'k210.menuChat.connecting'
                        }),
                        value: 'AI_CONNECTING'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuChat.standby',
                            default: 'tag Standby',
                            description: 'k210.menuChat.standby'
                        }),
                        value: 'AI_IDLE'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuChat.listening',
                            default: 'Listening',
                            description: 'k210.menuChat.listening'
                        }),
                        value: 'AI_LISTENING'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuChat.speaking',
                            default: 'Speaking',
                            description: 'k210.menuChat.speaking'
                        }),
                        value: 'AI_SPEAKING'
                    },

                    {
                        text: formatMessage({
                            id: 'k210.menuChat.config',
                            default: 'Network Config',
                            description: 'k210.menuChat.config'
                        }),
                        value: 'AI_CONFIGURING'
                    },
                ]
            },

            MENU_MOTION: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'k210.menuMotion.forward',
                            default: 'Forward',
                            description: 'k210.menuMotion.forward'
                        }),
                        value: 'GO_FORWARD'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuMotion.backward',
                            default: 'Backward',
                            description: 'k210.menuMotion.backward'
                        }),
                        value: 'GO_BACK'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuMotion.left',
                            default: 'Turn left',
                            description: 'k210.menuMotion.left'
                        }),
                        value: 'TURN_LEFT'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuMotion.right',
                            default: 'Turn right',
                            description: 'k210.menuMotion.right'
                        }),
                        value: 'TURN_RIGHT'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuMotion.stop',
                            default: 'Stop',
                            description: 'k210.menuMotion.stop'
                        }),
                        value: 'STOP_MOVING'
                    },
                ]
            },
            MENU_POSITION: {
                acceptReporters: false,
                items: [
                    {
                        text: 'X',
                        value: 'AXIS_X'
                    },
                    {
                        text: 'Y',
                        value: 'AXIS_Y'
                    },
                    
                ]
            },
            MENU_BUTTON: {
                acceptReporters: false,
                items: [
                    {
                        text: '1',
                        value: '1'
                    },
                    {
                        text: '2',
                        value: '2'
                    },
                    {
                        text: '3',
                        value: '3'
                    },
                    {
                        text: '4',
                        value: '4'
                    },
                    {
                        text: '5',
                        value: '5'
                    },
                    {
                        text: '6',
                        value: '6'
                    },
                    
                ]
            },
            MENU_KEYBOARD: {
                acceptReporters: false,
                items: [
                    {
                        text: 'W',
                        value: '1'
                    },
                    {
                        text: 'A',
                        value: '2'
                    },
                    {
                        text: 'S',
                        value: '3'
                    },
                    {
                        text: 'D',
                        value: '4'
                    },
                    
                ]
            },
        }
        };
    }


/* 所有的单模块增加两次检测的模块，全部弃用执行检测函数，拿到的什么值就直接使用什么值，因为多个模块并行的情况下增加负担 */

// if(this.runtime.currentDevice === "Microbit"){
   
// }else if(this.runtime.currentDevice === "Arduino"){

// }else if(this.runtime.currentDevice === "ESP32"){
    
// }
    // 设置
    async settings(args){
        if(this.runtime.currentDevice === "Microbit"){
            await ICMB_send(`vision.set_mode(vision.${args.TWO})`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){
            
        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
        }   
    }
    modeMap=[
        {
            id: 'k210.menuMode.recogn',
            default: 'color recognition'
        },
        {
            id: 'k210.menuMode.colorBlock',
            default: 'color block tracking'
        },
        {
            id: 'k210.menuMode.tag',
            default: 'tag recognition'
        },
        {
            id: 'k210.menuMode.line',
            default: 'line recognition'
        },
        {
            id: 'k210.menuMode.class',
            default: '20-class object recognition'
        },
        {
            id: 'k210.menuMode.qr',
            default: 'QR code recognition'
        },
        {
            id: 'k210.menuMode.faceAttr',
            default: 'face attributes'
        },
        {
            id: 'k210.menuMode.faceRecogn',
            default: 'face recognition'
        },
        {
            id: 'k210.menuMode.deep',
            default: 'deep learning'
        },
        {
            id: 'k210.menuMode.road',
            default: 'road sign recognition'
        }
    ]

    async currentMode(){
        if(this.runtime.currentDevice === "Microbit"){
            let info=await ICMBP_read(`vision.get_mode()`);
            const index = Number(info);

            if (!this.modeMap[index]) {
                return '';
            }
    
            const { id, default: defaultText } = this.modeMap[index];
            return `'${formatMessage({ id, default: defaultText })}'`;
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){
            
        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
    }

    // ###############颜色识别###############
    async colorRecogn(args){
        if(this.runtime.currentDevice === "Microbit"){
            const str = await ICMBP_read(`vision.color_value(vision.${args.ONE})`);
            // const [R, G, B] = str.slice(1, -1).split(',').map(Number);
            return str;
        }else if(this.runtime.currentDevice === "Arduino"){
        
        }else if(this.runtime.currentDevice === "ESP32"){
            
        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
             
    }

    // ###############色块追踪###############
    //设置追踪颜色
    async colorBlockSet(args){
        if(this.runtime.currentDevice === "Microbit"){
            await ICMB_send(`vision.set_color(vision.${args.ONE})`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){
            
        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
        }   
        
    }
    //是否追踪到
    async colorIsTrack(){
        if(this.runtime.currentDevice === "Microbit"){
            return ICMBP_read(`vision.color_detected()`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
        
    }
    //位置信息
    async colorBlockInfo(args){
        if(this.runtime.currentDevice === "Microbit"){
            return ICMBP_read(`vision.color_position(vision.${args.ONE})`)
            
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
        
    }

    // ###############标签识别###############
    //数量
    async tagNum(){
        if(this.runtime.currentDevice === "Microbit"){
            let num = await ICMBP_read(`vision.tag_count()`)
            return num
        }else if(this.runtime.currentDevice ==="Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
        
    }
    //内容
    async tagCont(){
        if(this.runtime.currentDevice === "Microbit"){
            let id = await ICMBP_read(`vision.tag_id()`)
            // if(await this.tagNum()>0){
                return id
            // }else{
            //     return ''
            // }
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
        
    }
    // 旋转角度
    async tagAngle(){
        if(this.runtime.currentDevice === "Microbit"){
            let angle = await ICMBP_read(`vision.tag_rotation()`)
            // if(await this.tagNum()>0){
                return angle
            // }else{
            //     return 0;
            // }
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
        
    }
    // 位置信息
    async tagInfo(args){
        if(this.runtime.currentDevice === "Microbit"){
            return ICMBP_read(`vision.tag_position(vision.${args.ONE})`)
            
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
        
    }

    // ###############线条识别###############
    //是否识别
    async lineIsRecog(){
        if(this.runtime.currentDevice === "Microbit"){
            return ICMBP_read(`vision.line_detected()`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice ==="ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
        
    }
    // 位置信息
    async lineInfo(args){
        if(this.runtime.currentDevice === "Microbit"){
            let info = await ICMBP_read(`vision.line_position(vision.${args.ONE},vision.${args.TWO})`)
            return info
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
        
    }

    // ###############20类物体###############
    //数量
    async objectNum(){
        if(this.runtime.currentDevice === "Microbit"){
            return await ICMBP_read(`vision.object_count()`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
        
    }
    // 识别到？
    async objectIsRecogn(args){
        if(this.runtime.currentDevice === "Microbit"){
            //let num=await ICMBP_read(`aiVision.get_identify_num(ai_camera.AI_CAMERA_20_CLASS)`)
            return ICMBP_read(`vision.object_detected(vision.${args.ONE})`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice ==="ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
        
    }
    // 位置信息
    async objInfo(args){
        if(this.runtime.currentDevice === "Microbit"){
            let info = await ICMBP_read(`vision.object_position(vision.${args.ONE})`)
            return info
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
        
    }

    // ###############二维码###############
    //是否识别
    async qrIsRecogn(){
        if(this.runtime.currentDevice === "Microbit"){
            return ICMBP_read(`vision.qr_detected()`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
        
    }
    // 内容
    async qrCont(){
        if(this.runtime.currentDevice === "Microbit"){
            let info = await ICMBP_read(`vision.qr_data()`)
            return info
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
        
    }
    // 位置信息
    async qrInfo(args){
        if(this.runtime.currentDevice === "Microbit"){
            let info = await ICMBP_read(`vision.qr_position(vision.${args.ONE})`)
            return info
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
        
    }

    // ###############人脸属性###############
    // 数量
    async faceAttrNum(){
        if(this.runtime.currentDevice === "Microbit"){
            return await ICMBP_read(`vision.face_count()`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
        
    }
    // 位置信息
    async faceAttrInfo(args){
        if(this.runtime.currentDevice === "Microbit"){
            let info = await ICMBP_read(`vision.face_position(vision.${args.TWO},${Number(args.ONE)})`)
            return info
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
        
    }
    // 属性
    async faceAttrEmote(args){
        if(this.runtime.currentDevice === "Microbit"){
            let num=await ICMBP_read(`vision.face_attribute(vision.${args.TWO},${Number(args.ONE)})`)
            return num
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){
            
        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
        
    }

    // ###############人脸识别###############
    // 学习
    async faceLearn(){
        if(this.runtime.currentDevice === "Microbit"){
            await ICMB_send(`vision.face_recognized_learn()`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
        } 
        
    }
    // 数量
    async faceRecogNum(){
        if(this.runtime.currentDevice === "Microbit"){
            return await ICMBP_read(`vision.face_recognized_count()`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
        
    }
    // 是否检测到一张学习过的人脸
    async faceRecogLearn(){
        if(this.runtime.currentDevice === "Microbit"){
            return await ICMBP_read(`vision.face_recognized_detected()`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
        
    }
    // 位置信息
    async faceRecognEmote(args){
        if(this.runtime.currentDevice === "Microbit"){
            let info = await ICMBP_read(`vision.face_recognized_position(vision.${args.TWO},${args.ONE})`)
            return info
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return ''
        } 
        
    }

    // ###############深度学习###############
    async deepLearning(args){
        if(this.runtime.currentDevice === "Microbit"){
            return ICMBP_read(`vision.class_recognized(${Number(args.ONE)})`)
           
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return
        } 
        
    }

    // ###############路标识别###############
    // 数量
    async roadNum(){
        if(this.runtime.currentDevice === "Microbit"){
            let num=await ICMBP_read(`vision.card_count()`)
            return num
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return
        } 
        
    }
    // 识别到？
    async roadRecog(args){
        if(this.runtime.currentDevice === "Microbit"){
            if(args.ONE=='RED' || args.ONE=='GREEN'){
                return ICMBP_read(`vision.card_detected(vision.${args.ONE},1)`)
            }else{
                return ICMBP_read(`vision.card_detected(vision.${args.ONE},2)`)
            }
            
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return
        } 
        
    }
    // 位置信息
    async roadInfo(args){
        if(this.runtime.currentDevice === "Microbit"){
            return ICMBP_read(`vision.card_position(vision.${args.ONE})`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return
        } 
        
        
    }

    async chatState(args){
        if(this.runtime.currentDevice === "Microbit"){
            return ICMBP_read(`vision.state_is(vision.${args.ONE})`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return
        } 

    }

    async chatMotion(args){
        if(this.runtime.currentDevice === "Microbit"){
            return ICMBP_read(`vision.motion_command_detected(vision.${args.ONE})`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return
        } 
    }

    async chatMotionSpeed(args){
        if(this.runtime.currentDevice === "Microbit"){
            return ICMBP_read(`vision.motion_speed()`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return
        } 
    }
    async chatCustomCommand(args){
        if(this.runtime.currentDevice === "Microbit"){
            return ICMBP_read(`vision.custom_command()`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return
        } 
    }

    async wirelessJoystick(args){
        if(this.runtime.currentDevice === "Microbit"){
            return ICMBP_read(`vision.joystick_position(vision.${args.ONE})`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return
        } 
    }

    //是否按下指定按钮
    async wirelessButton(args){
        if(this.runtime.currentDevice === "Microbit"){
            return ICMBP_read(`vision.button_pressed(${Number(args.ONE)})`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return
        } 
    }

    //是否按下指定键盘按键
    async wirelessKeybord(args){
        if(this.runtime.currentDevice === "Microbit"){
            return ICMBP_read(`vision.key_pressed(${Number(args.ONE)})`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return
        } 
    }

    // ###############无线图传###############
    async wirelessSet(args){
        await ICMB_send(`aiVision.set_wifi_server_ssid_passward('${args.ONE}',${args.TWO})`)
    }

    async wirelessConnect(){
        await ICMB_send(`aiVision.set_wifi_server_is_scan_qrcode(ture)`)
    }

    // ###############设置###############
    async lightSwitch(args){
        if(this.runtime.currentDevice === "Microbit"){
            if(Number(args.ONE)==1){
                await ICMB_send(`vision.set_fill_light_brightness(1)`)
            }else{
                await ICMB_send(`vision.set_fill_light_brightness(0)`)
            }
            // await ICMB_send(`vision.fill_light(${Number(args.ONE)})`)

        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
        } 
        
    }

    async lightBrightness(args){
        if(this.runtime.currentDevice === "Microbit"){
            await ICMB_send(`vision.set_fill_light_brightness(${Number(args.ONE)})`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
        } 
        
    }

    async lightGetBrightness(){

        if(this.runtime.currentDevice === "Microbit"){
            let info = await ICMBP_read(`vision.get_fill_light_brightness()`)
            return info
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            showToast(formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }))
            return
        } 
        
    }


}



// ################################Microbit########################################
//发送
async function ICMB_send(str){
    console.log('[发送]', str);
    // 发送命令到主进程
    try {
        const result = await window.EditorPreload.serialSendCommand(str,"Microbit");
        console.log('[收到返回]', result.response || result.error);
        if(!result.success){
            showToast(result.error)
        }
        return result;
    } catch (e) {
        console.error('[发送失败]', e);
        return { success: false, error: e.message };
    }
}

//读取
async function ICMBP_read(str){
    console.log('[读取]', str);
    try {
        const result = await window.EditorPreload.serialSendCommand(str,"Microbit");
        if (result.success) {
            const raw = result.response.trim();
            //console.log('[读取返回]', raw);
            const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(l => l);// 拆成多行

            return lines.length === 1 ? lines[0] : lines;
        } else {
            //console.error('[读取失败]', result.error);
            showToast(result.error)
            return null;
        }
    } catch (e) {
        console.error('[读取异常]', e);
        return null;
    }
}
// ##################################################################


// ################################Arduino########################################

//封包函数
function buildPacket(dataBytes) {
    const length = dataBytes.length + 1;
    return [
        0xAA, 
        (length >> 8) & 0xFF, 
        length & 0xFF, 
        ...dataBytes, 
        0x55
    ];
}


//发送
async function ICA_send(dataBytes) {
    try {
        const packet = buildPacket(dataBytes);
        console.log("发送数据包:", packet);

        const result = await window.EditorPreload.serialSendCommand(packet,"Arduino");

        console.log('[收到返回]', result);
        if (!result.success) {
            showToast(result.error);
        }
        return result;

    } catch (e) {
        console.error('[发送失败]', e);
        return { success: false, error: e.message };
    }
}

//读取
async function ICA_read(dataBytes){
    try {
        const packet = buildPacket(dataBytes);
        console.log("发送数据包:", packet);

        const result = await window.EditorPreload.serialSendCommand(packet,"Arduino");
        if (result.success) {
            console.log('[读取返回]', result.response);
            return result.response;
        } else {
            console.error('[读取失败]', result.error);
            showToast(result.error)
            return null;
        }
    } catch (e) {
        console.error('[读取异常]', e);
        return null;
    }
}
// ##################################################################






// 显示Toast提示
function showToast(message) {
    const toast = document.createElement('div');
    Object.assign(toast.style, {
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#333',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '4px',
        zIndex: '1001',
        animation: 'fadeInOut 3s'
    });
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

module.exports = ICreateK210;

