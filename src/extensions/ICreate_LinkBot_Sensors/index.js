// link-bot
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');
const icon = require('./sensor.png');
 
class LinkBotSensors {
    
    constructor(runtime) {
        this.runtime = runtime;
        this.operators = {
            '<':  (a, b) => a < b,
            '>':  (a, b) => a > b,
            '==': (a, b) => a == b,
            '<=': (a, b) => a <= b,
            '>=': (a, b) => a >= b
        };
    }

    getInfo() {
      return {
        id: 'LinkBotSensors',
        name: formatMessage({
            id: 'LinkBotSensors.name',
            default: 'Sensors',
        }),
        color1: '#2196F3',  // 主颜色
        color2: '#21CBF3',  // 次颜色（渐变）
        color3: '#1976D2',   // 边框颜色
        menuIconURI: icon, 

        //模块 
        blocks: [
        {
            blockType: BlockType.LABEL,
            text: formatMessage({
                id: 'LinkBot.Ultrasonic',
                default: 'Ultrasonic Sensor',
            }),
        },
        {
            opcode: 'ICM_S4S_ultrGet',//超声波传感器
            blockType: BlockType.REPORTER,
            // text: '超声波传感器 距离值',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_ultrGet',
                default: 'get distance in [TYPE]',
            }),
            blockIconURI:icon,
            disableMonitor: true,
            arguments: {
                TYPE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_ultrType'
                },
            }
        },
        {
            opcode: 'ICM_S4S_ultrGetLog',//超声波传感器>mu,
            blockType: BlockType.BOOLEAN,
            // text: '巡线模块 探头[CHOICE]识别黑线?',
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_ultrGetLog',
                default: 'is distance [CHOICE] [NUM] [TYPE]',
            }),
            blockIconURI:icon,
            disableMonitor: true,
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_comparison'
                },
                NUM: {
                    type: ArgumentType.NUMRES0,
                    defaultValue: 5
                },
                TYPE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_ultrType'
                },
            }
        },
        


        {
            blockType: BlockType.LABEL,
            text: formatMessage({
                id: 'LinkBot.Line',
                default: 'Line Following Sensor',
            }),
        },
        /* {
            opcode: 'ICM_S4S_grayStudy',//灰度学习
            blockType: BlockType.COMMAND,
            // text: '巡线模块 灰度学习',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_grayStudy',
                default: 'grayscale learning',
            })
        },
        {
            opcode: 'ICM_S4S_binaryStudy',//二值学习
            blockType: BlockType.COMMAND,
            // text: '巡线模块 二值学习',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_binaryStudy',
                default: 'binary learning',
            })
        },
        {
            opcode: 'ICM_S4S_colorStudy',//颜色学习
            blockType: BlockType.COMMAND,
            // text: '巡线模块 颜色学习[CHOICE]',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_colorStudy',
                default: 'color learning [CHOICE]',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_studyColor'
                }
            }
        }, */
       /*  {
            opcode: 'ICM_S4S_colorClear',//清空颜色学习
            blockType: BlockType.COMMAND,
            // text: '巡线模块 清除颜色',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_colorClear',
                default: 'clear colors',
            })
        }, */
        {
            opcode: 'ICM_S4S_setMode',//切换学习模式
            blockType: BlockType.COMMAND,
            // text: '巡线模块 颜色学习[CHOICE]',
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_setMode',
                default: 'set mode to [CHOICE] learning',
            }),
            blockIconURI:icon,
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_studyMode'
                }
            }
        },
        {
            opcode: 'ICM_S4S_grayGet',//巡线获取灰度值
            blockType: BlockType.REPORTER,
            // text: '巡线模块 探头[CHOICE]灰度值',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_grayGet',
                default: 'get grayscale value from [CHOICE]',
            }),
            blockIconURI:icon,
            disableMonitor: true,
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_gray'
                }
            }
        },
        {
            opcode: 'ICM_S4S_colorGet',//巡线获取颜色值
            blockType: BlockType.BOOLEAN,
            // text: '巡线模块 探头[CHOICE]识别到[CHOICE1]?',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_colorGet',
                default: 'did [CHOICE] recognize [CHOICE1]?',
            }),
            blockIconURI:icon,
            disableMonitor: true,
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_gray'
                },
                CHOICE1: {
                    type: ArgumentType.STRING,
                    menu: 'choice_studyColor'
                }
            }
        },
        {
            opcode: 'ICM_S4S_blackGet',//巡线获取黑线
            blockType: BlockType.BOOLEAN,
            // text: '巡线模块 探头[CHOICE]识别黑线?',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_blackGet',
                default: 'did [CHOICE] detect black line?',
            }),
            blockIconURI:icon,
            disableMonitor: true,
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_gray'
                }
            }
        },


    
        
        /* {
            blockType: BlockType.LABEL,
            text: formatMessage({
                id: 'LinkBot.IMU',
                default: 'IMU',
            }),
        },
        {
            opcode: 'ICM_S4S_isTitled',//向#倾斜
            blockType: BlockType.BOOLEAN,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_isTitled',
                default: 'is titled [CHOICE]?',
            }),
            disableMonitor: true,
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_titled'
                },
            }
        },
        {
            opcode: 'ICM_S4S_isUp',//面朝上
            blockType: BlockType.BOOLEAN,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_isUp',
                default: 'is [CHOICE] up?',
            }),
            disableMonitor: true,
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_up'
                },
            }
        }, */
        // {
        //     opcode: 'ICM_S4S_gyroXangle',//陀螺仪 翻滚角
        //     blockType: BlockType.REPORTER,
        //     text: formatMessage({
        //         id: 'MicrobiteIcreateS4S.ICM_S4S_gyroXangle',
        //         default: 'Gyroscope Roll Angle Value',
        //         description: 'MicrobiteIcreateS4S.ICM_S4S_gyroXangle'
        //     }),
        //     disableMonitor: true
        // },
        // {
        //     opcode: 'ICM_S4S_gyroYangle',//陀螺仪 俯仰角
        //     blockType: BlockType.REPORTER,
        //     text: formatMessage({
        //         id: 'MicrobiteIcreateS4S.ICM_S4S_gyroYangle',
        //         default: 'Gyroscope Pitch Angle Value',
        //         description: 'MicrobiteIcreateS4S.ICM_S4S_gyroYangle'
        //     }),
        //     disableMonitor: true
        // },
       /*  {
            opcode: 'ICM_S4S_gyroXY',//陀螺仪 翻滚角俯仰角
            blockType: BlockType.REPORTER,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_gyroXY',
                default: '[CHOICE] angle',
            }),
            disableMonitor: true,
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_gyro'
                },
            }
        },
        {
            opcode: 'ICM_S4S_acc',//陀螺仪 加速度
            blockType: BlockType.REPORTER,
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_acc',
                default: 'acceleration [CHOICE]',
            }),
            disableMonitor: true,
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_RockerXY'
                }
            }
        },
        {
            opcode: 'ICM_S4S_gyro',//陀螺仪 角速度
            blockType: BlockType.REPORTER,
            // text: '陀螺仪 [CHOICE]轴角速度值',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_gyro',
                default: 'angular velocity [CHOICE]',
            }),
            disableMonitor: true,
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_RockerXY'
                }
            }
        }, */
        
        {
            blockType: BlockType.LABEL,
            text: formatMessage({
                id: 'LinkBot.Voice',
                default: 'Voice Recognition',
            }),
        },
        {
            opcode: 'ICM_S4S_voice',//语音
            blockType: BlockType.BOOLEAN,
            // text: '语音模块 识别到[CHOICE]',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_voice',
                default: 'recognized [CHOICE]',
            }),
            blockIconURI:icon,
            disableMonitor: true,
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_voice'
                }
            }
        },
        
       
        {
            blockType: BlockType.LABEL,
            text: formatMessage({
                id: 'LinkBot.RTC',
                default: 'RTC',
            }),
        },
        {
            opcode: 'ICM_S4S_rtcSetData',//时钟设置日期
            blockType: BlockType.COMMAND,
            // text: 'RTC 设置年[TEXT]月[TEXT1]日[TEXT2]',
            blockIconURI:icon,
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_rtcSetData',
                default: 'RTC set year [TEXT] month [TEXT1] day [TEXT2]',
            }),
            arguments: {
                TEXT: {
                    type: ArgumentType.NUMRES0_99,
                    defaultValue: 0
                },
                TEXT1: {
                    type: ArgumentType.NUMRES1_12,
                    defaultValue: 1
                },
                TEXT2: {
                    type: ArgumentType.NUMRES1_31,
                    defaultValue: 1
                }
            }
        },
        {
            opcode: 'ICM_S4S_rtcSetTime',//时钟设置时间
            blockType: BlockType.COMMAND,
            // text: 'RTC 设置时[TEXT]分[TEXT1]秒[TEXT2]',
            blockIconURI:icon,
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_rtcSetTime',
                default: 'RTC set hour [TEXT] minute [TEXT1] second [TEXT2]',
            }),
            arguments: {
                TEXT: {
                    type: ArgumentType.NUMRES0_23,//0-23
                    defaultValue: 0
                },
                TEXT1: {
                    type: ArgumentType.NUMRES0_59,//0-59
                    defaultValue: 0
                },
                TEXT2: {
                    type: ArgumentType.NUMRES0_59,//0-59
                    defaultValue: 0
                }
            }
        },
        {
            opcode: 'ICM_S4S_rtcGetData',//获取日期
            blockType: BlockType.REPORTER,
            disableMonitor: true,
            // text: 'RTC 获取[CHOICE]',
            blockIconURI:icon,
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_rtcGetData',
                default: 'RTC get [CHOICE]',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_rtcGet'
                }
            }
        },
        /* {
            opcode: 'ICM_S4S_rtcGetTime',//获取时间
            blockType: BlockType.REPORTER,
            disableMonitor: true,
            // text: 'RTC 获取[CHOICE]',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_rtcGetTime',
                default: 'RTC get [CHOICE]',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_rtcTime'
                }
            }
        } */
        ],



        menus: {
            choice_ultrType :{//超声波
                acceptReporters: false,
                items: [
                    // {
                    //     text: formatMessage({
                    //         id: 'LinkBot.choice_MoveMode.mm',
                    //         default: 'mm',
                    //     }),
                    //     value: 'ultrasonic.MM'
                    // },
                    {
                        text: formatMessage({
                            id: 'LinkBot.choice_MoveMode.cm',
                            default: 'cm',
                        }),
                        value: 'ultrasonic.CM'
                    },
                    {
                        text: formatMessage({
                            id: 'LinkBot.choice_ultrType.m',
                            default: 'm',
                        }),
                        value: 'ultrasonic.M'
                    },
                    {
                        text: formatMessage({
                            id: 'LinkBot.choice_ultrType.in',
                            default: 'in',
                        }),
                        value: 'ultrasonic.INCH'
                    },
                ]
            },
            choice_comparison: {//比较运算符
                acceptReporters: false,
                items: [
                    { text: '<', value: '<' },
                    { text: '>', value: '>' },
                    { text: '=', value: '==' },
                    { text: '≤', value: '<=' },
                    { text: '≥', value: '>=' }
                ]
            },
            choice_titled:{//倾斜
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'Linkbot.titled.left',
                            default: 'left',
                        }),
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'Linkbot.titled.right',
                            default: 'right',
                        }),
                        value: '2'
                    },
                    {
                        text: formatMessage({
                            id: 'Linkbot.titled.forward',
                            default: 'forward',
                        }),
                        value: '3'
                    },
                    {
                        text: formatMessage({
                            id: 'Linkbot.titled.backward',
                            default: 'backward',
                        }),
                        value: '4'
                    },
                    {
                        text: formatMessage({
                            id: 'Linkbot.titled.level',
                            default: 'level',
                        }),
                        value: '0'
                    }                
                ]
            },
            choice_up:{//面朝上
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'Linkbot.up.front',
                            default: 'front',
                        }),
                        value: '0'
                    },
                    {
                        text: formatMessage({
                            id: 'Linkbot.up.back',
                            default: 'back',
                        }),
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'Linkbot.up.top',
                            default: 'top',
                        }),
                        value: '2'
                    },
                    {
                        text: formatMessage({
                            id: 'Linkbot.up.bottom',
                            default: 'bottom',
                        }),
                        value: '3'
                    },
                    {
                        text: formatMessage({
                            id: 'Linkbot.up.right',
                            default: 'right side',
                        }),
                        value: '4'
                    },
                    {
                        text: formatMessage({
                            id: 'Linkbot.up.left',
                            default: 'left side',
                        }),
                        value: '5'
                    },
                ]                   
            },
            choice_gyro:{//角
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'Linkbot.gyro.pitch',
                            default: 'pitch',
                        }),
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'Linkbot.gyro.roll',
                            default: 'roll',
                        }),
                        value: '0'
                    },
                    {
                        text: formatMessage({
                            id: 'Linkbot.gyro.yaw',
                            default: 'yaw',
                        }),
                        value: '2'
                    },
                ]
            },
            choice_voice:{//语音模块
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.Linkbot',
                            default: 'Linkbot',
                            description: 'MicrobiteIcreateS4S.Linkbot'
                        }),
                        value: 'LINKBOT'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.GoForward',
                            default: 'Go forward',
                            description: 'MicrobiteIcreateS4S.GoForward'
                        }),
                        value: 'GO_FORWARD'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.GoBack',
                            default: 'Go back',
                            description: 'MicrobiteIcreateS4S.GoBack'
                        }),
                        value: 'GO_BACK'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.TurnLeft',
                            default: 'Turn left',
                            description: 'MicrobiteIcreateS4S.TurnLeft'
                        }),
                        value: 'TURN_LEFT'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.TurnRight',
                            default: 'Turn right',
                            description: 'MicrobiteIcreateS4S.TurnRight'
                        }),
                        value: 'TURN_RIGHT'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.StartMoving',
                            default: 'Start moving',
                            description: 'MicrobiteIcreateS4S.StartMoving'
                        }),
                        value: 'START_MOVING'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.StopMoving',
                            default: 'Stop moving',
                            description: 'MicrobiteIcreateS4S.StopMoving'
                        }),
                        value: 'STOP_MOVING'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.SpeedUp',
                            default: 'Speed up',
                            description: 'MicrobiteIcreateS4S.SpeedUp'
                        }),
                        value: 'SPEED_UP'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.SlowDown',
                            default: 'Slow down',
                            description: 'MicrobiteIcreateS4S.SlowDown'
                        }),
                        value: 'SLOW_DOWN'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.SpinAround',
                            default: 'Spin around',
                            description: 'MicrobiteIcreateS4S.SpinAround'
                        }),
                        value: 'SPIN_AROUND'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.FollowLine',
                            default: 'Follow line',
                            description: 'MicrobiteIcreateS4S.FollowLine'
                        }),
                        value: 'FOLLOW_LINE'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.LightsOn',
                            default: 'Lights on',
                            description: 'MicrobiteIcreateS4S.LightsOn'
                        }),
                        value: 'LIGHTS_ON'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.LightsOff',
                            default: 'Lights off',
                            description: 'MicrobiteIcreateS4S.LightsOff'
                        }),
                        value: 'LIGHTS_OFF'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.ShowRed',
                            default: 'Show red',
                            description: 'MicrobiteIcreateS4S.ShowRed'
                        }),
                        value: 'SHOW_RED'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.ShowGreen',
                            default: 'Show green',
                            description: 'MicrobiteIcreateS4S.ShowGreen'
                        }),
                        value: 'SHOW_GREEN'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.ShowBlue',
                            default: 'Show blue',
                            description: 'MicrobiteIcreateS4S.ShowBlue'
                        }),
                        value: 'SHOW_BLUE'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.CheckDistance',
                            default: 'Check distance',
                            description: 'MicrobiteIcreateS4S.CheckDistance'
                        }),
                        value: 'CHECK_DISTANCE'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.ScanSurroundings',
                            default: 'Scan surroundings',
                            description: 'MicrobiteIcreateS4S.ScanSurroundings'
                        }),
                        value: 'SCAN_SURROUNDINGS'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.DetectObject',
                            default: 'Detect object',
                            description: 'MicrobiteIcreateS4S.DetectObject'
                        }),
                        value: 'DETECT_OBJECT'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.DetectFace',
                            default: 'Detect face',
                            description: 'MicrobiteIcreateS4S.DetectFace'
                        }),
                        value: 'DETECT_FACE'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.DetectCard',
                            default: 'Detect card',
                            description: 'MicrobiteIcreateS4S.DetectCard'
                        }),
                        value: 'DETECT_CARD'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.ReadSensor',
                            default: 'Read sensor',
                            description: 'MicrobiteIcreateS4S.ReadSensor'
                        }),
                        value: 'READ_SENSOR'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.CheckBattery',
                            default: 'Check battery',
                            description: 'MicrobiteIcreateS4S.CheckBattery'
                        }),
                        value: 'CHECK_BATTERY'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.FindLine',
                            default: 'Find line',
                            description: 'MicrobiteIcreateS4S.FindLine'
                        }),
                        value: 'FIND_LINE'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.WhoAmI',
                            default: 'Who am I',
                            description: 'MicrobiteIcreateS4S.WhoAmI'
                        }),
                        value: 'WHO_AM_I'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.WhoAreYou',
                            default: 'Who are you',
                            description: 'MicrobiteIcreateS4S.WhoAreYou'
                        }),
                        value: 'WHO_ARE_YOU'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.Start',
                            default: 'Start',
                            description: 'MicrobiteIcreateS4S.Start'
                        }),
                        value: 'START'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.Stop',
                            default: 'Stop',
                            description: 'MicrobiteIcreateS4S.Stop'
                        }),
                        value: 'STOP'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.Repeat',
                            default: 'Repeat',
                            description: 'MicrobiteIcreateS4S.Repeat'
                        }),
                        value: 'REPEAT'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.Next',
                            default: 'Next',
                            description: 'MicrobiteIcreateS4S.Next'
                        }),
                        value: 'NEXT'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.ReturnHome',
                            default: 'Return home',
                            description: 'MicrobiteIcreateS4S.ReturnHome'
                        }),
                        value: 'RETURN_HOME'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.PickUp',
                            default: 'Pick up',
                            description: 'MicrobiteIcreateS4S.PickUp'
                        }),
                        value: 'PICK_UP'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.PutDown',
                            default: 'Put down',
                            description: 'MicrobiteIcreateS4S.PutDown'
                        }),
                        value: 'PUT_DOWN'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.Sleep',
                            default: 'Sleep',
                            description: 'MicrobiteIcreateS4S.Sleep'
                        }),
                        value: 'SLEEP'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.WakeUp',
                            default: 'Wake up',
                            description: 'MicrobiteIcreateS4S.WakeUp'
                        }),
                        value: 'WAKE_UP'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.PlayMusic',
                            default: 'Play music',
                            description: 'MicrobiteIcreateS4S.PlayMusic'
                        }),
                        value: 'PLAY_MUSIC'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.RecordData',
                            default: 'Record data',
                            description: 'MicrobiteIcreateS4S.RecordData'
                        }),
                        value: 'RECORD_DATA'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.SendMessage',
                            default: 'Send message',
                            description: 'MicrobiteIcreateS4S.SendMessage'
                        }),
                        value: 'SEND_MESSAGE'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.ReceiveMessage',
                            default: 'Receive message',
                            description: 'MicrobiteIcreateS4S.ReceiveMessage'
                        }),
                        value: 'RECEIVE_MESSAGE'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.AttackNow',
                            default: 'Attack now',
                            description: 'MicrobiteIcreateS4S.AttackNow'
                        }),
                        value: 'ATTACK_NOW'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.DefendYourself',
                            default: 'Defend yourself',
                            description: 'MicrobiteIcreateS4S.DefendYourself'
                        }),
                        value: 'DEFEND_YOURSELF'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.ShowMeADance',
                            default: 'Show me a dance',
                            description: 'MicrobiteIcreateS4S.ShowMeADance'
                        }),
                        value: 'SHOW_ME_A_DANCE'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.TellMeAJoke',
                            default: 'Tell me a joke',
                            description: 'MicrobiteIcreateS4S.TellMeAJoke'
                        }),
                        value: 'TELL_ME_A_JOKE'
                    }
                ]
            },
            choice_studyMode:{//选择学习模式
                acceptReporters: false,
                items: [
                    
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.grayscale',
                            default: 'grayscale',
                        }),
                        value: 'line_sensor.GRAY'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.colornone',
                            default: 'clear color',
                        }),
                        value: 'line_sensor.COLOR_NONE'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.black',
                            default: 'Black',
                        }),
                        value: 'line_sensor.BLACK'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.red',
                            default: 'Red',
                        }),
                        value: 'line_sensor.RED'
                    },
                    // {
                    //     text: formatMessage({
                    //         id: 'MicrobiteIcreateP.choiceLightRingColor.origen',
                    //         default: 'Orange',
                    //         description: 'MicrobiteIcreateP.choiceLightRingColor.origen'
                    //     }),
                    //     value: 'line_sensor.ORANGE'
                    // },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.yellow',
                            default: 'Yellow',
                        }),
                        value: 'line_sensor.YELLOW'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.green',
                            default: 'Green',
                        }),
                        value: 'line_sensor.GREEN'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.qing',
                            default: 'Cyan',
                            description: 'MicrobiteIcreateP.choiceLightRingColor.qing'
                        }),
                        value: 'line_sensor.CYAN'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.blue',
                            default: 'Blue',
                        }),
                        value: 'line_sensor.BLUE'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.purple',
                            default: 'Purple',
                        }),
                        value: 'line_sensor.PURPLE'
                    }
                ]
            },
            choice_studyColor:{//选择学习颜色
                acceptReporters: false,
                //items: ['白色', '黑色', '红色', '橙色', '黄色', '绿色', '青色', '蓝色', '紫色']
                items: [
                    // {
                    //     text: formatMessage({
                    //         id: 'MicrobiteIcreateP.choiceLightRingColor.white',
                    //         default: 'White',
                    //         description: 'MicrobiteIcreateP.choiceLightRingColor.white'
                    //     }),
                    //     value: '0'
                    // },
                    // {
                    //     text: formatMessage({
                    //         id: 'MicrobiteIcreateP.choiceLightRingColor.black',
                    //         default: 'Black',
                    //         description: 'MicrobiteIcreateP.choiceLightRingColor.black'
                    //     }),
                    //     value: '1'
                    // },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.red',
                            default: 'Red',
                            description: 'MicrobiteIcreateP.choiceLightRingColor.red'
                        }),
                        value: 'line_sensor.RED'
                    },
                    // {
                    //     text: formatMessage({
                    //         id: 'MicrobiteIcreateP.choiceLightRingColor.origen',
                    //         default: 'Orange',
                    //         description: 'MicrobiteIcreateP.choiceLightRingColor.origen'
                    //     }),
                    //     value: 'line_sensor.ORANGE'
                    // },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.yellow',
                            default: 'Yellow',
                            description: 'MicrobiteIcreateP.choiceLightRingColor.yellow'
                        }),
                        value: 'line_sensor.YELLOW'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.green',
                            default: 'Green',
                            description: 'MicrobiteIcreateP.choiceLightRingColor.green'
                        }),
                        value: 'line_sensor.GREEN'
                    },
                    // {
                    //     text: formatMessage({
                    //         id: 'MicrobiteIcreateP.choiceLightRingColor.qing',
                    //         default: 'Cyan',
                    //         description: 'MicrobiteIcreateP.choiceLightRingColor.qing'
                    //     }),
                    //     value: 'line_sensor.CYAN'
                    // },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.blue',
                            default: 'Blue',
                            description: 'MicrobiteIcreateP.choiceLightRingColor.blue'
                        }),
                        value: 'line_sensor.BLUE'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.purple',
                            default: 'Purple',
                            description: 'MicrobiteIcreateP.choiceLightRingColor.purple'
                        }),
                        value: 'line_sensor.PURPLE'
                    }
                ]
            },
            
            choice_RockerXY:{//角度*
                acceptReporters: false,
                items: [
                    {
                        text: "X",
                        value: '0'
                    },
                    {
                        text: "Y",
                        value: '1'
                    },
                    {
                        text: "Z",
                        value: '2'
                    },
                ]
            },
            
            choice_gray: {//灰度传感器探头
                acceptReporters: false,
                items: [ { text: "L2", value: 'line_sensor.PROBE_L2' },
                    { text: "L1", value: 'line_sensor.PROBE_L1' },
                    { text: "R1", value: 'line_sensor.PROBE_R1' },
                    { text: "R2", value: 'line_sensor.PROBE_R2' },
                ]
            },
            choice_rtcData:{
                acceptReporters: false,
                //items: ["年","月","日"]
                items: [
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.year',
                            default: 'year',
                            description: 'MicrobiteIcreateS4S.year'
                        }),
                        value: '0'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.month',
                            default: 'month',
                            description: 'MicrobiteIcreateS4S.month'
                        }),
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.day',
                            default: 'day',
                            description: 'MicrobiteIcreateS4S.day'
                        }),
                        value: '2'
                    }
                ]
            },
            choice_rtcTime:{
                acceptReporters: false,
                //items: ["时","分","秒"]
                items: [
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.hour',
                            default: 'hour',
                            description: 'MicrobiteIcreateS4S.hour'
                        }),
                        value: '0'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.minute',
                            default: 'minute',
                            description: 'MicrobiteIcreateS4S.minute'
                        }),
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.second',
                            default: 'second',
                            description: 'MicrobiteIcreateS4S.second'
                        }),
                        value: '2'
                    }
                ]
            },
            choice_rtcGet:{
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.year',
                            default: 'year',
                        }),
                        value: 'rtc.YEAR'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.month',
                            default: 'month',
                        }),
                        value: 'rtc.MONTH'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.week',
                            default: 'week',
                        }),
                        value: 'rtc.WEEK'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.day',
                            default: 'day',
                        }),
                        value: 'rtc.DAY'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.hour',
                            default: 'hour',
                            description: 'MicrobiteIcreateS4S.hour'
                        }),
                        value: 'rtc.HOUR'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.minute',
                            default: 'minute',
                            description: 'MicrobiteIcreateS4S.minute'
                        }),
                        value: 'rtc.MINUTE'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.second',
                            default: 'second',
                            description: 'MicrobiteIcreateS4S.second'
                        }),
                        value: 'rtc.SECOND'
                    }
                ]
            },
        }
      };
    }



    //################################陀螺仪######################################
    
    //向#倾斜
    ICM_S4S_isTitled(args){
        return this.ICMB_read(`mainBoard.gyro_get_tilted() == ${args.CHOICE}`)
    }
    //面朝上
    ICM_S4S_isUp(args){
        return this.ICMB_read(`mainBoard.gyro_get_orientation() == ${args.CHOICE}`)
    }
    //陀螺仪开关
    // async ICM_S4S_gyroOpen(args){
    //     await this.ICMB_send(`mainBoard.gyro_enable(${args.CHOICE})`)
    // }
    // //陀螺仪 翻滚角
    // ICM_S4S_gyroXangle(args){
    //     return this.ICMB_read(`mainBoard.gyro_get_angle(0)`)
    // }

    // //陀螺仪 俯仰角
    // ICM_S4S_gyroYangle(args){
    //     return this.ICMB_read(`mainBoard.gyro_get_angle(1)`)
    // }
    ICM_S4S_gyroXY(args){
        return this.ICMB_read(`mainBoard.gyro_get_angle(${args.CHOICE})`)
    }
    
    //陀螺仪 加速度
    ICM_S4S_acc(args){
        return this.ICMB_read(`mainBoard.gyro_get_acc(${args.CHOICE})`)
    }

    //陀螺仪 角速度
    ICM_S4S_gyro(args){
        return this.ICMB_read(`mainBoard.gyro_get_gyro(${args.CHOICE})`)
    }

     //################################语音######################################
    //语音模块
    ICM_S4S_voice(args){
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`voice.recognized(voice.${args.CHOICE})`
            return this.ICMB_read(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            code=packCommand(`bot.voice_recognized("VOICE_${args.CHOICE}")`)
            return this.ICA_read(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`voice.recognized(voice.${args.CHOICE})`
            return this.ICE_read(code)
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
        // return this.ICMB_read(`mainBoard.voice_get_state()==${args.CHOICE}`)
    }
    
    toFixedNumber(val) {
        console.log(val)
        console.log(typeof val)
        const num = Number(val);      // 字符串 → 数字
        return Number(num.toFixed(2)); // 保留两位小数
      }
    //################################超声波######################################
    //超声波
    async ICM_S4S_ultrGet(args){
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`ultrasonic.get_distance(${args.TYPE})`
            let result = await this.ICMB_read(code)
            return this.toFixedNumber(result)
        }else if(this.runtime.currentDevice=='Arduino'){
            let type='ULTRASONIC_'+getAfterDot(args.TYPE)
            code=packCommand(`cultr.ultrasonic_get_distance("${type}")`)
            let result = await this.ICA_read(code)
            return this.toFixedNumber(result)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`ultrasonic.get_distance(${args.TYPE})`
            let result = await this.ICE_read(code)
            return this.toFixedNumber(result)
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
        // return this.ICMB_read(`ultr.get_distance(${args.TYPE})`)
    }
     //超声波判断
    async ICM_S4S_ultrGetLog(args){
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`ultrasonic.get_distance(${args.TYPE})`
            let distance=await this.ICMB_read(code)
            
            console.log(distance,args.NUM)
            return this.operators[args.CHOICE](distance, Number(args.NUM)) 
        }else if(this.runtime.currentDevice=='Arduino'){
            let type='ULTRASONIC_'+getAfterDot(args.TYPE)
            code=packCommand(`cultr.ultrasonic_get_distance("${type}")`)
            let distance=await this.ICA_read(code)
            
            console.log(distance,args.NUM)
            return this.operators[args.CHOICE](distance, Number(args.NUM)) 
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`ultrasonic.get_distance(${args.TYPE})`
            let distance=await this.ICE_read(code)
            
            console.log(distance,args.NUM)
            return this.operators[args.CHOICE](distance, Number(args.NUM)) 
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
        // return this.ICMB_read(`ultr.get_distance(${args.TYPE})${args.CHOICE}${args.NUM}`)
    }

   

    //################################巡线######################################
    //灰度学习
    /* async ICM_S4S_grayStudy(args){
        await this.ICMB_send(`gray.gray_study()`)
    }

    //二值学习
    async ICM_S4S_binaryStudy(args){
        await this.ICMB_send(`gray.binary_study()`)
    }

    //颜色学习
    async ICM_S4S_colorStudy(args){
        await this.ICMB_send(`gray.color_study(${args.CHOICE})`)
    } */

    //清空颜色学习
    /* async ICM_S4S_colorClear(args){
        await this.ICMB_send(`gray.clear_color()`)
    } */

    //学习（灰度单独处理）
    async ICM_S4S_setMode(args){
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`line_sensor.learn(${args.CHOICE})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            let choice='LINE_SENSOR_'+getAfterDot(args.CHOICE)
            code=packCommand(`gray.line_sensor_learn("${choice}")`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`line_sensor.learn(${args.CHOICE})`
            await this.ICE_send(code)
        }else{
             this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
        }
        // let code = `gray.color_study(${args.CHOICE})`;
        // if(args.CHOICE == "gray"){
        //     code = "gray.gray_study()"
        // }
        // await this.ICMB_send(code)
    }

    //巡线获取灰度值
    ICM_S4S_grayGet(args){
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`line_sensor.gray(${args.CHOICE})`
            return this.ICMB_read(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            let choice='LINE_SENSOR_'+getAfterDot(args.CHOICE)
            code=packCommand(`gray.line_sensor_gray("${choice}")`)
            return this.ICA_read(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`line_sensor.gray(${args.CHOICE})`
            return this.ICE_read(code)
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
        // return this.ICMB_read(`gray.gray(${args.CHOICE})`)
    }

    //巡线获取颜色
    async ICM_S4S_colorGet(args){

        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`line_sensor.color(${args.CHOICE},${args.CHOICE1})`
            return this.ICMB_read(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            let choice1='LINE_SENSOR_'+getAfterDot(args.CHOICE1)
            let choice ='LINE_SENSOR_'+getAfterDot(args.CHOICE)
            code=packCommand(`gray.line_sensor_color("${choice}","${choice1}")`)
            let bool = await this.ICA_read(code)
            return bool==1
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`line_sensor.color(${args.CHOICE},${args.CHOICE1})`
            return this.ICE_read(code)
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
        // return this.ICMB_read(`gray.color(${args.CHOICE}) == ${args.CHOICE1}`)
    }

    //巡线获取黑线
    async ICM_S4S_blackGet(args){
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`line_sensor.detect_line(${args.CHOICE})`
            return this.ICMB_read(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            let choice='LINE_SENSOR_'+getAfterDot(args.CHOICE)
            code=packCommand(`gray.line_sensor_detect_line("${choice}")`)
            let bool=await this.ICA_read(code)
            return bool==1
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`line_sensor.detect_line(${args.CHOICE})`
            return this.ICE_read(code)
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
        // return this.ICMB_read(`gray.black(${args.CHOICE}) == 1`)
    }

    //################################RTC######################################
    //时钟设置日期
    async ICM_S4S_rtcSetData(args){
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`rtc.set_date(${Number(args.TEXT)},${Number(args.TEXT1)},${Number(args.TEXT2)})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            code=packCommand(`bot.rtc_set_date(${Number(args.TEXT)},${Number(args.TEXT1)},${Number(args.TEXT2)})`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`rtc.set_date(${Number(args.TEXT)},${Number(args.TEXT1)},${Number(args.TEXT2)})`
            await this.ICE_send(code)
        }else{
             this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
        }
        // await this.ICMB_send(`mainBoard.rtc_set_date(${args.TEXT},${args.TEXT1},${args.TEXT2})`)
    }

    //时钟设置时间
    async ICM_S4S_rtcSetTime(args){
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`rtc.set_time(${Number(args.TEXT)},${Number(args.TEXT1)},${Number(args.TEXT2)})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            code=packCommand(`bot.rtc_set_time(${Number(args.TEXT)},${Number(args.TEXT1)},${Number(args.TEXT2)})`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`rtc.set_time(${Number(args.TEXT)},${Number(args.TEXT1)},${Number(args.TEXT2)})`
            await this.ICE_send(code)
        }else{
             this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
        }
        // await this.ICMB_send(`mainBoard.rtc_set_time(${args.TEXT},${args.TEXT1},${args.TEXT2})`)
    }

    // 获取日期/时间
    ICM_S4S_rtcGetData(args) {
        // const choice = parseInt(args.CHOICE);
        
        // if (choice <= 3) {
        //     return this.ICMB_read(`mainBoard.rtc_get_date(${choice})`);
        // } else {
        //     const timeIndex = choice - 4;
        //     return this.ICMB_read(`mainBoard.rtc_get_time(${timeIndex})`);
        // }

        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`rtc.get(${args.CHOICE})`
            return this.ICMB_read(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            console.log(args.CHOICE)
            let choice='RTC_'+getAfterDot(args.CHOICE)
            console.log(choice)
            code=packCommand(`bot.rtc_get("${choice}")`)
            return this.ICA_read(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`rtc.get(${args.CHOICE})`
            return this.ICE_read(code)
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

    //获取时间
   /*  ICM_S4S_rtcGetTime(args){
        return this.ICMB_read(`mainBoard.rtc_get_time(${args.CHOICE})`)
    } */

    //发送
    async ICA_send(dataBytes) {
        try {
            // const packet = buildPacket(dataBytes);
            const packet = dataBytes
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
            // const packet = buildPacket(dataBytes);
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


    //发送
    async ICMB_send(str){
        //console.log('[发送]', str);
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
    async ICMB_read(str){
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

}



function packCommand(cmd) {
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
      else {
        throw new Error(`参数格式错误: ${val}（字符串必须带引号）`);
      }
  
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
  function getAfterDot(str) {
    const index = str.indexOf('.');
    if (index === -1) return ''; // 没有点
    return str.slice(index + 1);
  }
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


module.exports = LinkBotSensors;