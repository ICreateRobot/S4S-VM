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
        color1: '#4ca5f3',  
        color2: '#3a8bda',  
        color3: '#2c72c1',   
        
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
                opcode: 'faceRecogLearnNum',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'k210.faceRecogLearnNum',
                    default: 'Number of recognized learned faces',
                    description: 'k210.faceRecogLearnNum'
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

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'k210.wirelessLabel',
                    default: 'WIRELESS IMAGE TRANSMISSION',
                    description: 'k210.wirelessLabel'
                }),
            },

            {
                opcode: 'wirelessSet',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'k210.wirelessSet',
                    default: 'Connect to WiFi name: [ONE] Password: [TWO]',
                    description: 'k210.wirelessSet'
                }),
                arguments:{
                    ONE:{
                        type: ArgumentType.STRING,
                    },
                    TWO:{
                        type: ArgumentType.STRING,
                    },
                }
            },

            {
                opcode: 'wirelessConnect',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'k210.wirelessConnect',
                    default: 'Scan QR code to connect to WiFi',
                    description: 'k210.wirelessConnect'
                }),
                arguments:{
                }
            },

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
                        value: '4'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuRoad.turnLeft',
                            default: 'Turn Left',
                            description: 'k210.menuRoad.turnLeft'
                        }),
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuRoad.stop',
                            default: 'Stop',
                            description: 'k210.menuRoad.stop'
                        }),
                        value: '2'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuRoad.honk',
                            default: 'Honk',
                            description: 'k210.menuRoad.honk'
                        }),
                        value: '5'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuRoad.greenLight',
                            default: 'Green Light',
                            description: 'k210.menuRoad.greenLight'
                        }),
                        value: '0'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuRoad.redLight',
                            default: 'Red Light',
                            description: 'k210.menuRoad.redLight'
                        }),
                        value: '3'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuRoad.target',
                            default: 'Target',
                            description: 'k210.menuRoad.target'
                        }),
                        value: '6'
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
                            default: 'class 0',
                            description: 'k210.menuDeepClass.class0'
                        }),
                        value: '0'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuDeepClass.class1',
                            default: 'class 1',
                            description: 'k210.menuDeepClass.class1'
                        }),
                        value: '1'
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
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuEmote.smiling',
                            default: 'Smiling',
                            description: 'k210.menuEmote.smiling'
                        }),
                        value: '2'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuEmote.Wearing',
                            default: 'Wearing Glasses',
                            description: 'k210.menuEmote.Wearing'
                        }),
                        value: '3'
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
                        value: '0'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuFace.face1',
                            default: 'Face 1',
                            description: 'k210.menuFace.face1'
                        }),
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuFace.face2',
                            default: 'Face 2',
                            description: 'k210.menuFace.face2'
                        }),
                        value: '2'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuFace.face3',
                            default: 'Face 3',
                            description: 'k210.menuFace.face3'
                        }),
                        value: '3'
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
                        value: '0'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Bicycle',
                            default: '(1)Bicycle',
                            description: 'k210.menuObj.Bicycle'
                        }),
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Bird',
                            default: '(2)Bird',
                            description: 'k210.menuObj.Bird'
                        }),
                        value: '2'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Boat',
                            default: '(3)Boat',
                            description: 'k210.menuObj.Boat'
                        }),
                        value: '3'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Bottle',
                            default: '(4)Bottle',
                            description: 'k210.menuObj.Bottle'
                        }),
                        value: '4'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Bus',
                            default: '(5)Bus',
                            description: 'k210.menuObj.Bus'
                        }),
                        value: '5'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Car',
                            default: '(6)Car',
                            description: 'k210.menuObj.Car'
                        }),
                        value: '6'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Cat',
                            default: '(7)Cat',
                            description: 'k210.menuObj.Cat'
                        }),
                        value: '7'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Chair',
                            default: '(8)Chair',
                            description: 'k210.menuObj.Chair'
                        }),
                        value: '8'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Cow',
                            default: '(9)Cow',
                            description: 'k210.menuObj.Cow'
                        }),
                        value: '9'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.DiningTable',
                            default: '(10)Dining Table',
                            description: 'k210.menuObj.DiningTable'
                        }),
                        value: '10'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Dog',
                            default: '(11)Dog',
                            description: 'k210.menuObj.Dog'
                        }),
                        value: '11'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.House',
                            default: '(12)House',
                            description: 'k210.menuObj.House'
                        }),
                        value: '12'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Motorcycle',
                            default: '(13)Motorcycle',
                            description: 'k210.menuObj.Motorcycle'
                        }),
                        value: '13'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Person',
                            default: '(14)Person',
                            description: 'k210.menuObj.Person'
                        }),
                        value: '14'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.PottedPlant',
                            default: '(15)Potted Plant',
                            description: 'k210.menuObj.PottedPlant'
                        }),
                        value: '15'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Sheep',
                            default: '(16)Sheep',
                            description: 'k210.menuObj.Sheep'
                        }),
                        value: '16'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Sofa',
                            default: '(17)Sofa',
                            description: 'k210.menuObj.Sofa'
                        }),
                        value: '17'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Ship',
                            default: '(18)Ship',
                            description: 'k210.menuObj.Ship'
                        }),
                        value: '18'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuObj.Television',
                            default: '(19)Television',
                            description: 'k210.menuObj.Television'
                        }),
                        value: '19'
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
                        value: '2'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuPlaceVertical.middle',
                            default: 'middle',
                            description: 'k210.menuPlaceVertical.middle'
                        }),
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuPlaceVertical.bottom',
                            default: 'bottom',
                            description: 'k210.menuPlaceVertical.bottom'
                        }),
                        value: '0'
                    },
                
                ]
            },

            MENU_PLACE:{
                acceptReporters: false,
                items: [
                    {
                        text: 'x',
                        value: '0'
                    },
                    {
                        text: 'y',
                        value: '1'
                    },
                    {
                        text: 'W',
                        value: '2'
                    },
                    {
                        text: 'H',
                        value: '3'
                    },
                
                ]
            },
            MENU_RGB:{
                acceptReporters: false,
                items: [
                    {
                        text: 'R',
                        value: 'r'
                    },
                    {
                        text: 'G',
                        value: 'g'
                    },
                    {
                        text: 'B',
                        value: 'b'
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
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'robotcolorplace.menuColor.green',
                            default: 'Green',
                            description: 'robotcolorplace.menuColor.green'
                        }),
                        value: '2'
                    },
                    {
                        text: formatMessage({
                            id: 'robotcolorplace.menuColor.blue',
                            default: 'Blue',
                            description: 'robotcolorplace.menuColor.blue'
                        }),
                        value: '3'
                    },
                    {
                        text: formatMessage({
                            id: 'robotcolorplace.menuColor.yellow',
                            default: 'Yellow',
                            description: 'robotcolorplace.menuColor.yellow'
                        }),
                        value: '4'
                    },
                    {
                        text: formatMessage({
                            id: 'robotcolorplace.menuColor.black',
                            default: 'Black',
                            description: 'robotcolorplace.menuColor.black'
                        }),
                        value: '5'
                    },
                    {
                        text: formatMessage({
                            id: 'robotcolorplace.menuColor.white',
                            default: 'White',
                            description: 'robotcolorplace.menuColor.white'
                        }),
                        value: '6'
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
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuMode.colorBlock',
                            default: 'color block tracking',
                            description: 'k210.menuMode.colorBlock'
                        }),
                        value: '2'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuMode.tag',
                            default: 'tag recognition',
                            description: 'k210.menuMode.tag'
                        }),
                        value: '3'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuMode.line',
                            default: 'line recognition',
                            description: 'k210.menuMode.line'
                        }),
                        value: '4'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuMode.class',
                            default: '20-class object recognition',
                            description: 'k210.menuMode.class'
                        }),
                        value: '5'
                    },

                    {
                        text: formatMessage({
                            id: 'k210.menuMode.qr',
                            default: 'QR code recognition',
                            description: 'k210.menuMode.qr'
                        }),
                        value: '6'
                    },

                    {
                        text: formatMessage({
                            id: 'k210.menuMode.faceAttr',
                            default: 'face attributes',
                            description: 'k210.menuMode.faceAttr'
                        }),
                        value: '7'
                    },

                    {
                        text: formatMessage({
                            id: 'k210.menuMode.faceRecogn',
                            default: 'face recognition',
                            description: 'k210.menuMode.faceRecogn'
                        }),
                        value: '8'
                    },
                    {
                        text: formatMessage({
                            id: 'k210.menuMode.deep',
                            default: 'deep learning',
                            description: 'k210.menuMode.deep'
                        }),
                        value: '9'
                    },

                    {
                        text: formatMessage({
                            id: 'k210.menuMode.road',
                            default: 'road sign recognition',
                            description: 'k210.menuMode.road'
                        }),
                        value: '10'
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
            await ICMB_send(`aiVision.set_sys_mode(${Number(args.TWO)})`)
        }else if(this.runtime.currentDevice === "Arduino"){

        }else if(this.runtime.currentDevice === "ESP32"){
            
        }   
    }

    async currentMode(){
        if(this.runtime.currentDevice === "Microbit"){
            return ICMBP_read(`aiVision.get_sys_mode()`);
        }
    }

    // ###############颜色识别###############
    async colorRecogn(args){
        if(this.runtime.currentDevice === "Microbit"){
            const str = await ICMBP_read(`aiVision.get_color_rgb()`);
            const [R, G, B] = str.slice(1, -1).split(',').map(Number);
            return { r: R, g: G, b: B }[args.ONE];
        }else if(this.runtime.currentDevice === "Arduino"){
        
        }else if(this.runtime.currentDevice === "ESP32"){
            
        }
             
    }

    // ###############色块追踪###############
    //设置追踪颜色
    async colorBlockSet(args){
        await ICMB_send(`aiVision.set_find_color(ai_camera.patch_color_tab[${Number(args.ONE)}])`)
    }
    //是否追踪到
    async colorIsTrack(){
        let num = await ICMBP_read(`aiVision.get_identify_num(ai_camera.AI_CAMERA_PATCH)`)
        if(num>0){
            return true
        }else{
            return false
        }
    }
    //位置信息
    async colorBlockInfo(args){
        let info = await ICMBP_read(`aiVision.get_identify_position(ai_camera.AI_CAMERA_PATCH)`)
        // let istrack = await this.colorIsTrack()
        // if(istrack){
            return JSON.parse(info)[Number(args.ONE)]
        // }else{
        //     return ''
        // }
    }

    // ###############标签识别###############
    //数量
    async tagNum(){
        let num = await ICMBP_read(`aiVision.get_identify_num(ai_camera.AI_CAMERA_TAG)`)
        return num
    }
    //内容
    async tagCont(){
        let id = await ICMBP_read(`aiVision.get_identify_id(ai_camera.AI_CAMERA_TAG)`)
        // if(await this.tagNum()>0){
            return id
        // }else{
        //     return ''
        // }
    }
    // 旋转角度
    async tagAngle(){
        let angle = await ICMBP_read(`aiVision.get_identify_rotation(ai_camera.AI_CAMERA_TAG)`)
        // if(await this.tagNum()>0){
            return angle
        // }else{
        //     return 0;
        // }
    }
    // 位置信息
    async tagInfo(args){
        let info = await ICMBP_read(`aiVision.get_identify_position(ai_camera.AI_CAMERA_TAG)`)
        // if(await this.tagNum()>0){
            return JSON.parse(info)[Number(args.ONE)]
        // }else{
        //     return ''
        // }
    }

    // ###############线条识别###############
    //是否识别
    async lineIsRecog(){
        let num=await ICMBP_read(`aiVision.get_identify_num(ai_camera.AI_CAMERA_LINE)`)
        if(num>0){
            return true
        }else{
            return false
        }
    }
    // 位置信息
    async lineInfo(args){
        let info = await ICMBP_read(`aiVision.get_identify_position(ai_camera.AI_CAMERA_LINE,${Number(args.ONE)})`)
        // if(await this.lineIsRecog()){
            return JSON.parse(info)[Number(args.TWO)]
        // }else{
        //     return ''
        // }
    }

    // ###############20类物体###############
    //数量
    async objectNum(){
        return await ICMBP_read(`aiVision.get_identify_num(ai_camera.AI_CAMERA_20_CLASS)`)
    }
    // 识别到？
    async objectIsRecogn(args){
        //let num=await ICMBP_read(`aiVision.get_identify_num(ai_camera.AI_CAMERA_20_CLASS)`)
        let obj = await ICMBP_read(`aiVision.get_identify_id(ai_camera.AI_CAMERA_20_CLASS)`)
        if( args.ONE == obj ){ //&& num>0
            return true
        }else{
            return false
        }
    }
    // 位置信息
    async objInfo(args){
        let info = await ICMBP_read(`aiVision.get_identify_position(ai_camera.AI_CAMERA_20_CLASS)`)
        // if(await this.objectNum()>0){
            return JSON.parse(info)[Number(args.ONE)]
        // }else{
        //     return ''
        // }     
    }

    // ###############二维码###############
    //是否识别
    async qrIsRecogn(){
        let num=await ICMBP_read(`aiVision.get_identify_num(ai_camera.AI_CAMERA_QRCODE)`)
        if(num>0){
            return true
        }else{
            return false
        }
    }
    // 内容
    async qrCont(){
        let info = await ICMBP_read(`aiVision.get_qrcode_content()`)
        // if(await this.qrIsRecogn()){
            return info
        // }else{
        //     return ''
        // }
    }
    // 位置信息
    async qrInfo(args){
        let info = await ICMBP_read(`aiVision.get_identify_position(ai_camera.AI_CAMERA_QRCODE)`)
        // if(await this.qrIsRecogn()){
            return JSON.parse(info)[Number(args.ONE)]
        // }else{
        //     return ''
        // }  
    }

    // ###############人脸属性###############
    // 数量
    async faceAttrNum(){
        return await ICMBP_read(`aiVision.get_identify_num(ai_camera.AI_CAMERA_FACE_ATTRIBUTE,1)`)
    }
    // 位置信息
    async faceAttrInfo(args){
        let info = await ICMBP_read(`aiVision.get_identify_position(ai_camera.AI_CAMERA_FACE_ATTRIBUTE,${Number(args.ONE)})`)
        // if(await this.faceAttrNum()>0){
            return JSON.parse(info)[Number(args.TWO)]
        // }else{
        //     return ''
        // }
    }
    // 属性
    async faceAttrEmote(args){
        let num=await ICMBP_read(`aiVision.get_identify_face_attribute(${Number(args.ONE)})`)
        let [mouse, smile, glasse] = num.slice(1, -1).split(",").map(Number);
        // if(await this.faceAttrNum()>0){
            if(args.TWO=='1'){
                if(mouse==0){
                    return false
                }else{
                    return true
                }
            }else if(args.TWO=='2'){
                if(smile==0){
                    return false
                }else{
                    return true
                }
            }else if(args.TWO=='3'){
                if(glasse==0){
                    return false
                }else{
                    return true
                }
            }
        // }else{
        //     return false
        // }
    }

    // ###############人脸识别###############
    // 学习
    async faceLearn(){
        await ICMB_send(`aiVision.face_study()`)
    }
    // 数量
    async faceRecogNum(){
        return await ICMBP_read(`aiVision.get_identify_num(ai_camera.AI_CAMERA_FACE_RE,1)`)
    }
    // 识别到学习的数量
    async faceRecogLearnNum(){
        return await ICMBP_read(`aiVision.get_identify_num(ai_camera.AI_CAMERA_FACE_RE,0)`)
    }
    // 位置信息
    async faceRecognEmote(args){
        let info = await ICMBP_read(`aiVision.get_identify_position(ai_camera.AI_CAMERA_FACE_RE,${Number(args.ONE)})`)
        // if(await this.faceRecogLearnNum()){
            return JSON.parse(info)[Number(args.TWO)]
        // }else{
        //     return ''
        // }
    }

    // ###############深度学习###############
    async deepLearning(args){
        let id=await ICMBP_read(`aiVision.get_identify_id(ai_camera.AI_CAMERA_DEEP_LEARN)`)
        //let num=await ICMBP_read(`aiVision.get_identify_num(ai_camera.AI_CAMERA_DEEP_LEARN)`)
        //if(num>0){
            if(Number(args.ONE)==Number(id)){
                return true
            }else{
                return false
            }
        // }else{
        //     return false
        // }
    }

    // ###############路标识别###############
    // 数量
    async roadNum(){
        let num=await ICMBP_read(`aiVision.get_identify_num(ai_camera.AI_CAMERA_CARD)`)
        return num
    }
    // 识别到？
    async roadRecog(args){
        let flag=await ICMBP_read(`aiVision.get_identify_id(ai_camera.AI_CAMERA_CARD)`)
        if(args.ONE==flag ){//&& await this.roadNum()>0
            return true
        }else{
            return false
        }
    }
    // 位置信息
    async roadInfo(args){
        let info = await ICMBP_read(`aiVision.get_identify_position(ai_camera.AI_CAMERA_CARD)`)
        // if(await this.roadNum()>0){
            return JSON.parse(info)[Number(args.ONE)]
        // }else{
        //     return ''
        // }
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
        if(args.ONE=='1'){
            await ICMB_send(`aiVision.set_light_brightness(5)`)
        }else{
            await ICMB_send(`aiVision.set_light_brightness(0)`)
        }
    }

    async lightBrightness(args){
        await ICMB_send(`aiVision.set_light_brightness(${args.ONE})`)
    }

    async lightGetBrightness(){
        let info = await ICMBP_read(`aiVision.get_light_brightness()`)
        return info
    }


}



// ################################Microbit########################################
//发送
async function ICMB_send(str){
    //console.log('[发送]', str);
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

