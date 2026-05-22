// 视觉识别模块
const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type')
const formatMessage = require('format-message');
const icon = require('./K210.svg');
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
        color3:'#1565C0',
        menuIconURI: icon, 
        
        blocks: [
            {
                opcode: 'settings',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
                text: formatMessage({
                    id: 'k210.objectLabel',
                    default: '20-class object recognition',
                    description: 'k210.objectLabel'
                }),
            },

            {
                opcode: 'objectNum',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockType: BlockType.BOOLEAN,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'k210.qrCont',
                    default: 'Recognized QR code content = [TEXT]',
                    description: 'k210.qrCont'
                }),
                arguments:{
                    TEXT:{
                        type: ArgumentType.STRING,
                        defaultValue: 'ABC'
                    }
                },
                disableMonitor: true
            },
            {
                opcode: 'qrInfo',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                            default: 'Face 1',
                            description: 'k210.menuFace.face0'
                        }),
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuFace.face1',
                            default: 'Face 2',
                            description: 'k210.menuFace.face1'
                        }),
                        value: '2'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuFace.face2',
                            default: 'Face 3',
                            description: 'k210.menuFace.face2'
                        }),
                        value: '3'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuFace.face3',
                            default: 'Face 4',
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
                        value: 'GO_BACKWARD'
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
            await this.ICMB_send(`vision.set_mode(vision.${args.TWO})`)
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.set_mode("${args.TWO}")`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice === "ESP32"){
            await this.ICE_read_wifi(`vision.set_mode(vision.${args.TWO})`)
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
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
            let info=await this.ICMBP_read(`vision.get_mode()`);
            const index = Number(info);

            if (!this.modeMap[index]) {
                return '';
            }
    
            const { id, default: defaultText } = this.modeMap[index];
            return `'${formatMessage({ id, default: defaultText })}'`;
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.get_mode()`)
            let info=await this.ICA_read(code);

            const index = Number(info);

            if (!this.modeMap[index]) {
                return '';
            }
    
            const { id, default: defaultText } = this.modeMap[index];
            return `'${formatMessage({ id, default: defaultText })}'`;
        }else if(this.runtime.currentDevice === "ESP32"){
            let info=await this.ICE_read_wifi(`vision.get_mode()`);
            const index = Number(info);

            if (!this.modeMap[index]) {
                return '';
            }
    
            const { id, default: defaultText } = this.modeMap[index];
            return `'${formatMessage({ id, default: defaultText })}'`;
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
    }

    // ###############颜色识别###############
    async colorRecogn(args){
        if(this.runtime.currentDevice === "Microbit"){
            const str = await this.ICMBP_read(`vision.color_value(vision.${args.ONE})`);
            // const [R, G, B] = str.slice(1, -1).split(',').map(Number);
            return str;
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.color_value("${args.ONE}")`)
            const str = await this.ICA_read(code)
            return str
        }else if(this.runtime.currentDevice === "ESP32"){
            const str = await this.ICE_read_wifi(`vision.color_value(vision.${args.ONE})`);
            // const [R, G, B] = str.slice(1, -1).split(',').map(Number);
            return str;
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
             
    }

    // ###############色块追踪###############
    //设置追踪颜色
    async colorBlockSet(args){
        if(this.runtime.currentDevice === "Microbit"){
            await this.ICMB_send(`vision.set_color(vision.${args.ONE})`)
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.set_color("${args.ONE}")`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice === "ESP32"){
            await this.ICE_read_wifi(`vision.set_color(vision.${args.ONE})`)
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
        }   
        
    }
    //是否追踪到
    async colorIsTrack(){
        if(this.runtime.currentDevice === "Microbit"){
            return this.ICMBP_read(`vision.color_detected()`)
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.color_detected()`)
            return this.ICA_read(code)==1
        }else if(this.runtime.currentDevice === "ESP32"){
            return this.ICE_read_wifi(`vision.color_detected()`)
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
        
    }
    //位置信息
    async colorBlockInfo(args){
        if(this.runtime.currentDevice === "Microbit"){
            return this.ICMBP_read(`vision.color_position(vision.${args.ONE})`)
            
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.color_position("${args.ONE}")`)
            return this.ICA_read(code)
        }else if(this.runtime.currentDevice === "ESP32"){
            return this.ICE_read_wifi(`vision.color_position(vision.${args.ONE})`)
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
        
    }

    // ###############标签识别###############
    //数量
    async tagNum(){
        if(this.runtime.currentDevice === "Microbit"){
            let num = await this.ICMBP_read(`vision.tag_count()`)
            return num
        }else if(this.runtime.currentDevice ==="Arduino"){
            let code = packCommand(`vision.tag_count()`)
            let num = await this.ICA_read(code)
            return num
        }else if(this.runtime.currentDevice === "ESP32"){
            let num = await this.ICE_read_wifi(`vision.tag_count()`)
            return num
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
        
    }
    //内容
    async tagCont(){
        if(this.runtime.currentDevice === "Microbit"){
            let id = await this.ICMBP_read(`vision.tag_id()`)
            // if(await this.tagNum()>0){
                return id
            // }else{
            //     return ''
            // }
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.tag_id()`)
            let id = await this.ICA_read(code)
            return id
        }else if(this.runtime.currentDevice === "ESP32"){
            let id = await this.ICE_read_wifi(`vision.tag_id()`)
            // if(await this.tagNum()>0){
                return id
            // }else{
            //     return ''
            // }
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
        
    }
    // 旋转角度
    async tagAngle(){
        if(this.runtime.currentDevice === "Microbit"){
            let angle = await this.ICMBP_read(`vision.tag_rotation()`)
            // if(await this.tagNum()>0){
                return angle
            // }else{
            //     return 0;
            // }
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.tag_rotation()`)
            let angle = await this.ICA_read(code)
            return angle
        }else if(this.runtime.currentDevice === "ESP32"){
            let angle = await this.ICE_read_wifi(`vision.tag_rotation()`)
            // if(await this.tagNum()>0){
                return angle
            // }else{
            //     return 0;
            // }
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
        
    }
    // 位置信息
    async tagInfo(args){
        if(this.runtime.currentDevice === "Microbit"){
            return this.ICMBP_read(`vision.tag_position(vision.${args.ONE})`)
            
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.tag_position("${args.ONE}")`)
            return this.ICA_read(code)
        }else if(this.runtime.currentDevice === "ESP32"){
            return this.ICE_read_wifi(`vision.tag_position(vision.${args.ONE})`)
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
        
    }

    // ###############线条识别###############
    //是否识别
    async lineIsRecog(){
        if(this.runtime.currentDevice === "Microbit"){
            return this.ICMBP_read(`vision.line_detected()`)
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.line_detected()`)
            return this.ICA_read(code)
        }else if(this.runtime.currentDevice ==="ESP32"){
            return this.ICE_read_wifi(`vision.line_detected()`)
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
        
    }
    // 位置信息
    async lineInfo(args){
        if(this.runtime.currentDevice === "Microbit"){
            let info = await this.ICMBP_read(`vision.line_position(vision.${args.ONE},vision.${args.TWO})`)
            return info
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.line_position("${args.ONE}","${args.TWO}")`)
            let info =await this.ICA_read(code)
            return info
        }else if(this.runtime.currentDevice === "ESP32"){
            let info = await this.ICE_read_wifi(`vision.line_position(vision.${args.ONE},vision.${args.TWO})`)
            return info
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
        
    }

    // ###############20类物体###############
    //数量
    async objectNum(){
        if(this.runtime.currentDevice === "Microbit"){
            return await this.ICMBP_read(`vision.object_count()`)
        }else if(this.runtime.currentDevice === "Arduino"){
            let code =packCommand(`vision.object_count()`)
            return await this.ICA_read(code)
        }else if(this.runtime.currentDevice === "ESP32"){
            return await this.ICE_read_wifi(`vision.object_count()`)
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
        
    }
    // 识别到？
    async objectIsRecogn(args){
        if(this.runtime.currentDevice === "Microbit"){
            //let num=await this.ICMBP_read(`aiVision.get_identify_num(ai_camera.AI_CAMERA_20_CLASS)`)
            return this.ICMBP_read(`vision.object_detected(vision.${args.ONE})`)
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.object_detected("${args.ONE}")`)
            return this.ICA_read(code)
        }else if(this.runtime.currentDevice ==="ESP32"){
            return this.ICE_read_wifi(`vision.object_detected(vision.${args.ONE})`)
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
        
    }
    // 位置信息
    async objInfo(args){
        if(this.runtime.currentDevice === "Microbit"){
            let info = await this.ICMBP_read(`vision.object_position(vision.${args.ONE})`)
            return info
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.object_position("${args.ONE}")`)
            let info =await this.ICA_read(code)
            return info
        }else if(this.runtime.currentDevice === "ESP32"){
            let info = await this.ICE_read_wifi(`vision.object_position(vision.${args.ONE})`)
            return info
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
        
    }

    // ###############二维码###############
    //是否识别
    async qrIsRecogn(){
        if(this.runtime.currentDevice === "Microbit"){
            return this.ICMBP_read(`vision.qr_detected()`)
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.qr_detected()`)
            return this.ICA_read(code)==1
        }else if(this.runtime.currentDevice === "ESP32"){
            return this.ICE_read_wifi(`vision.qr_detected()`)
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
        
    }
    // 内容
    async qrCont(args){
        let text = args.TEXT
        if(this.runtime.currentDevice === "Microbit"){
            let info = await this.ICMBP_read(`vision.qr_data()`)
            return info == text
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.qr_data()`)
            let info = await this.ICA_read(code)
            return info == text
        }else if(this.runtime.currentDevice === "ESP32"){
            let info = await this.ICE_read_wifi(`vision.qr_data()`)
            return info == text
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
        
    }
    // 位置信息
    async qrInfo(args){
        if(this.runtime.currentDevice === "Microbit"){
            let info = await this.ICMBP_read(`vision.qr_position(vision.${args.ONE})`)
            return info
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.qr_position("${args.ONE}")`)
            let info = await this.ICA_read(code)
            return info
        }else if(this.runtime.currentDevice === "ESP32"){
            let info = await this.ICE_read_wifi(`vision.qr_position(vision.${args.ONE})`)
            return info
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
        
    }

    // ###############人脸属性###############
    // 数量
    async faceAttrNum(){
        if(this.runtime.currentDevice === "Microbit"){
            return await this.ICMBP_read(`vision.face_count()`)
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.face_count()`)
            return await this.ICA_read(code)
        }else if(this.runtime.currentDevice === "ESP32"){
            return await this.ICE_read_wifi(`vision.face_count()`)
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
        
    }
    // 位置信息
    async faceAttrInfo(args){
        if(this.runtime.currentDevice === "Microbit"){
            let info = await this.ICMBP_read(`vision.face_position(vision.${args.TWO},${Number(args.ONE)})`)
            return info
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.face_position("${args.TWO}",${Number(args.ONE)})`)
            let info = await this.ICA_read(code)
            return info
        }else if(this.runtime.currentDevice === "ESP32"){
            let info = await this.ICE_read_wifi(`vision.face_position(vision.${args.TWO},${Number(args.ONE)})`)
            return info
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
        
    }
    // 属性
    async faceAttrEmote(args){
        if(this.runtime.currentDevice === "Microbit"){
            let num=await this.ICMBP_read(`vision.face_attribute(vision.${args.TWO},${Number(args.ONE)})`)
            return num
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.face_attribute("${args.TWO}",${Number(args.ONE)})`)
            let num = await this.ICA_read(code)
            return num==1
        }else if(this.runtime.currentDevice === "ESP32"){
            let num=await this.ICE_read_wifi(`vision.face_attribute(vision.${args.TWO},${Number(args.ONE)})`)
            return num
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
        
    }

    // ###############人脸识别###############
    // 学习
    async faceLearn(){
        if(this.runtime.currentDevice === "Microbit"){
            await this.ICMB_send(`vision.face_recognized_learn()`)
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.face_recognized_learn()`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice === "ESP32"){
            await this.ICE_read_wifi(`vision.face_recognized_learn()`)
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
        } 
        
    }
    // 数量
    async faceRecogNum(){
        if(this.runtime.currentDevice === "Microbit"){
            return await this.ICMBP_read(`vision.face_recognized_count()`)
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.face_recognized_count()`)
            return await this.ICA_read(code)
        }else if(this.runtime.currentDevice === "ESP32"){
            return await this.ICE_read_wifi(`vision.face_recognized_count()`)
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
        
    }
    // 是否检测到一张学习过的人脸
    async faceRecogLearn(){
        if(this.runtime.currentDevice === "Microbit"){
            return await this.ICMBP_read(`vision.face_recognized_detected()`)
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.face_recognized_detected()`)
            return await this.ICA_read(code)==1
        }else if(this.runtime.currentDevice === "ESP32"){
            return await this.ICE_read_wifi(`vision.face_recognized_detected()`)
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
        
    }
    // 位置信息
    async faceRecognEmote(args){
        if(this.runtime.currentDevice === "Microbit"){
            let info = await this.ICMBP_read(`vision.face_recognized_position(vision.${args.TWO},${args.ONE})`)
            return info
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.face_recognized_position("${args.TWO}",${args.ONE})`)
            let info = await this.ICA_read(code)
            return info
        }else if(this.runtime.currentDevice === "ESP32"){
            let info = await this.ICE_read_wifi(`vision.face_recognized_position(vision.${args.TWO},${args.ONE})`)
            return info
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return ''
        } 
        
    }

    // ###############深度学习###############
    async deepLearning(args){
        if(this.runtime.currentDevice === "Microbit"){
            return this.ICMBP_read(`vision.class_recognized(${Number(args.ONE)})`)
           
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.class_recognized(${Number(args.ONE)})`)
            return this.ICA_read(code)==1
        }else if(this.runtime.currentDevice === "ESP32"){
            return this.ICE_read_wifi(`vision.class_recognized(${Number(args.ONE)})`)
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return
        } 
        
    }

    // ###############路标识别###############
    // 数量
    async roadNum(){
        if(this.runtime.currentDevice === "Microbit"){
            let num=await this.ICMBP_read(`vision.card_count()`)
            return num
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.card_count()`)
            let num = await this.ICA_read(code)
            return num
        }else if(this.runtime.currentDevice === "ESP32"){
            let num=await this.ICE_read_wifi(`vision.card_count()`)
            return num
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return
        } 
        
    }
    // 识别到？
    async roadRecog(args){
        if(this.runtime.currentDevice === "Microbit"){
            if(args.ONE=='RED' || args.ONE=='GREEN'){
                return this.ICMBP_read(`vision.card_detected(vision.${args.ONE},1)`)
            }else{
                return this.ICMBP_read(`vision.card_detected(vision.${args.ONE},2)`)
            }
            
        }else if(this.runtime.currentDevice === "Arduino"){
            if(args.ONE=='RED' || args.ONE=='GREEN'){
                let code = packCommand(`vision.card_detected("${args.ONE}",1)`)
                return this.ICA_read(code)==1
            }else{
                let code = packCommand(`vision.card_detected("${args.ONE}",2)`)
                return this.ICA_read(code)==1
            }
        }else if(this.runtime.currentDevice === "ESP32"){
            if(args.ONE=='RED' || args.ONE=='GREEN'){
                return this.ICE_read_wifi(`vision.card_detected(vision.${args.ONE},1)`)
            }else{
                return this.ICE_read_wifi(`vision.card_detected(vision.${args.ONE},2)`)
            }
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return
        } 
        
    }
    // 位置信息
    async roadInfo(args){
        if(this.runtime.currentDevice === "Microbit"){
            return this.ICMBP_read(`vision.card_position(vision.${args.ONE})`)
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.card_position("${args.ONE}")`)
            return this.ICA_read(code)
        }else if(this.runtime.currentDevice === "ESP32"){
            return this.ICE_read_wifi(`vision.card_position(vision.${args.ONE})`)
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return
        } 
        
        
    }

    async chatState(args){
        if(this.runtime.currentDevice === "Microbit"){
            return this.ICMBP_read(`vision.state_is(vision.${args.ONE})`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return
        } 

    }

    async chatMotion(args){
        if(this.runtime.currentDevice === "Microbit"){
            return this.ICMBP_read(`vision.motion_command_detected(vision.${args.ONE})`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return
        } 
    }

    async chatMotionSpeed(args){
        if(this.runtime.currentDevice === "Microbit"){
            return this.ICMBP_read(`vision.motion_speed()`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return
        } 
    }
    async chatCustomCommand(args){
        if(this.runtime.currentDevice === "Microbit"){
            return this.ICMBP_read(`vision.custom_command()`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return
        } 
    }

    async wirelessJoystick(args){
        if(this.runtime.currentDevice === "Microbit"){
            return this.ICMBP_read(`vision.joystick_position(vision.${args.ONE})`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return
        } 
    }

    //是否按下指定按钮
    async wirelessButton(args){
        if(this.runtime.currentDevice === "Microbit"){
            return this.ICMBP_read(`vision.button_pressed(${Number(args.ONE)})`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return
        } 
    }

    //是否按下指定键盘按键
    async wirelessKeybord(args){
        if(this.runtime.currentDevice === "Microbit"){
            return this.ICMBP_read(`vision.key_pressed(${Number(args.ONE)})`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){

        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return
        } 
    }

    // ###############无线图传###############
    async wirelessSet(args){
        await this.ICMB_send(`aiVision.set_wifi_server_ssid_passward('${args.ONE}',${args.TWO})`)
    }

    async wirelessConnect(){
        await this.ICMB_send(`aiVision.set_wifi_server_is_scan_qrcode(ture)`)
    }

    // ###############设置###############
    async lightSwitch(args){
        if(this.runtime.currentDevice === "Microbit"){
            if(Number(args.ONE)==1){
                await this.ICMB_send(`vision.set_fill_light_brightness(1)`)
            }else{
                await this.ICMB_send(`vision.set_fill_light_brightness(0)`)
            }
            // await this.ICMB_send(`vision.fill_light(${Number(args.ONE)})`)

        }else if(this.runtime.currentDevice === "Arduino"){
            if(Number(args.ONE)==1){
                let code = packCommand(`vision.set_fill_light_brightness(1)`)
                await this.ICA_send(code)
            }else{
                let code = packCommand(`vision.set_fill_light_brightness(0)`)
                await this.ICA_send(code)
            }
        }else if(this.runtime.currentDevice === "ESP32"){
            if(Number(args.ONE)==1){
                await this.ICE_read_wifi(`vision.set_fill_light_brightness(1)`)
            }else{
                await this.ICE_read_wifi(`vision.set_fill_light_brightness(0)`)
            }
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
        } 
        
    }

    async lightBrightness(args){
        if(this.runtime.currentDevice === "Microbit"){
            await this.ICMB_send(`vision.set_fill_light_brightness(${Number(args.ONE)})`)
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.set_fill_light_brightness(${Number(args.ONE)})`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice === "ESP32"){
            await this.ICE_read_wifi(`vision.set_fill_light_brightness(${Number(args.ONE)})`)
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
        } 
        
    }

    async lightGetBrightness(){

        if(this.runtime.currentDevice === "Microbit"){
            let info = await this.ICMBP_read(`vision.get_fill_light_brightness()`)
            return info
        }else if(this.runtime.currentDevice === "Arduino"){
            let code = packCommand(`vision.get_fill_light_brightness()`)
            let info = await this.ICA_read(code)
            return info
        }else if(this.runtime.currentDevice === "ESP32"){
            let info = await this.ICE_read_wifi(`vision.get_fill_light_brightness()`)
            return info
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
            return
        } 
        
    }
    //发送
    async ICMB_send(str){
        console.log('[发送]', str);
        // 发送命令到主进程
        try {
            const result = await window.EditorPreload.serialSendCommand(str,"Microbit");
            console.log('[收到返回]', result.response || result.error);
            if(!result.success){
                this.runtime.ioDevices.toast.guiToast(result.id, result.error, 'error', 2000);
            }
            return result;
        } catch (e) {
            console.error('[发送失败]', e);
            return { success: false, error: e.message };
        }
    }

    //读取
    async ICMBP_read(str){
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
                this.runtime.ioDevices.toast.guiToast(result.id, result.error, 'error', 2000);
                return null;
            }
        } catch (e) {
            console.error('[读取异常]', e);
            return null;
        }
    }
    //发送
    async ICA_send(dataBytes) {
        try {
            const packet = dataBytes;
            console.log("发送数据包:", packet);

            const result = await window.EditorPreload.serialSendCommand(packet,"Arduino");

            console.log('[收到返回]', result);
            if (!result.success) {
                this.runtime.ioDevices.toast.guiToast(result.id, result.error, 'error', 2000);
            }
            return result;

        } catch (e) {
            console.error('[发送失败]', e);
            return { success: false, error: e.message };
        }
    }

    //读取
    async ICA_read(dataBytes){
        try {
            const packet = dataBytes;
            console.log("发送数据包:", packet);

            const result = await window.EditorPreload.serialSendCommand(packet,"Arduino");
            if (result.success) {
                console.log('[读取返回]', result.response);
                return result.response;
            } else {
                console.error('[读取失败]', result.error);
                this.runtime.ioDevices.toast.guiToast(result.id, result.error, 'error', 2000);
                return null;
            }
        } catch (e) {
            console.error('[读取异常]', e);
            return null;
        }
    }

    async ICE_send(str){
        console.log('[发送]', str);
        // 发送命令到主进程
        try {
            const result = await window.EditorPreload.serialSendCommand(str,"Microbit");
            console.log('[收到返回]', result.response || result.error);
            if(!result.success){
                this.runtime.ioDevices.toast.guiToast(result.id, result.error, 'error', 2000);
            }
            return result;
        } catch (e) {
            console.error('[发送失败]', e);
            return { success: false, error: e.message };
        }
    }
    //读取
    async ICE_read(str){
        //console.log('[读取]', str);
        try {
            const result = await window.EditorPreload.serialSendCommand(str,"Microbit");
            if (result.success) {
                const raw = result.response.trim();
                //console.log('[读取返回]', raw);
                const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(l => l);// 拆成多行

                return lines.length === 1 ? lines[0] : lines;
            } else {
                //console.error('[读取失败]', result.error);
                this.runtime.ioDevices.toast.guiToast(result.id, result.error, 'error', 2000);
                return null;
            }
        } catch (e) {
            console.error('[读取异常]', e);
            return null;
        }
    }

     // wifi读取数据
     async ICE_read_wifi(str){
        try {
            const result = await this.runtime.ioDevices.wifiIOT.readData(str,this.runtime.connKey);
            return result;
        } catch (e) {
            console.error('[读取异常]', e);
            return null;
        }
    }


}



// ################################Microbit########################################

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



// ##################################################################

function packCommand(cmd) {
    console.log(cmd)
    const HEADER = [0xaa, 0x01];
    const TAIL = 0x55;
  
    let id = 10;
  
    // ✅ 支持无参数
    const match = cmd.match(/^(\w+)\.(\w+)(?:\((.*)\))?$/);
    if (!match) {
      throw new Error("格式错误");
    }
  
    const [, obj, method, argsStr] = match;
  
    let args = [];
  
    // ✅ 解析参数（支持字符串中的逗号）
    if (argsStr && argsStr.trim() !== "") {
      let current = "";
      let inString = false;
  
      for (let c of argsStr) {
        if (c === '"') {
          inString = !inString;
          current += c;
        } else if (c === ',' && !inString) {
          args.push(current.trim());
          current = "";
        } else {
          current += c;
        }
      }
  
      if (current.trim() !== "") {
        args.push(current.trim());
      }
    }
  
    // ✅ 判断数字
    function isNumber(val) {
      return /^-?\d+(\.\d+)?$/.test(val);
    }
  
    let body = [];
  
    // ✅ 1️⃣ obj（强制加引号）
    const objStr = `"${obj}"`;
    const objBytes = Array.from(objStr).map(c => c.charCodeAt(0));
    body.push(id++, objBytes.length, ...objBytes);
  
    // ✅ 2️⃣ method（强制加引号）
    const methodStr = `"${method}"`;
    const methodBytes = Array.from(methodStr).map(c => c.charCodeAt(0));
    body.push(id++, methodBytes.length, ...methodBytes);
  
    // ✅ 3️⃣ 参数（按你规则处理）
    for (let arg of args) {
      let val = arg.trim();
  
      // 字符串（必须用户自己带引号）
      if (val.startsWith('"') && val.endsWith('"')) {
        // OK，直接用
      }
      // 数字
      else if (isNumber(val)) {
        // OK，不加引号
      }
    //   else {
    //     throw new Error(`参数格式错误: ${val}（字符串必须带引号）`);
    //   }
  
      const bytes = Array.from(val).map(c => c.charCodeAt(0));
  
      body.push(id++, bytes.length, ...bytes);
    }
  
    // ✅ 包长 = 字段 + 校验位
    const length = body.length + 1;
  
    const lenHigh = (length >> 8) & 0xff;
    const lenLow = length & 0xff;
  
    return [
      ...HEADER,
      lenHigh,
      lenLow,
      ...body,
      TAIL
    ];
  }




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

