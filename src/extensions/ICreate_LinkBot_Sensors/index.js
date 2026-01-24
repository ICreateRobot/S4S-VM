// link-bot
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');
const icon = require('./sensor.png');
 
class LinkBotSensors {
    
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
      return {
        id: 'LinkBotSensors',
        name: formatMessage({
            id: 'LinkBotSensors.name',
            default: 'Sensors',
        }),
        color1: '#55DAD1',  // 主颜色
        color2: '#45C2B9',  // 次颜色（渐变）
        color3: '#36AAA1',   // 边框颜色
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
                default: 'distance value [TYPE] [NUM]',
            }),
            disableMonitor: true,
            arguments: {
                TYPE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_comparison'
                },
                NUM: {
                    type: ArgumentType.NUMRES0,
                    defaultValue: 5
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
                id: 'MicrobiteIcreateS4S.ICM_S4S_setMode',
                default: 'set mode to [CHOICE] learning',
            }),
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
            disableMonitor: true,
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_gray'
                }
            }
        },


    
        
        {
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
        },
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
        {
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
        },
        
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
                    {
                        text: formatMessage({
                            id: 'LinkBot.choice_MoveMode.cm',
                            default: 'cm',
                        }),
                        value: 'cm'
                    },
                    {
                        text: formatMessage({
                            id: 'LinkBot.choice_ultrType.m',
                            default: 'm',
                        }),
                        value: 'm'
                    },
                    {
                        text: formatMessage({
                            id: 'LinkBot.choice_ultrType.in',
                            default: 'in',
                        }),
                        value: 'in'
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
                //items: ['1', '2', '3']
                items: [
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.wakeup',
                            default: 'wake-up',
                            description: 'MicrobiteIcreateS4S.wakeup'
                        }),
                        value: '1'
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
                        value: 'gray'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.black',
                            default: 'Black',
                        }),
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.red',
                            default: 'Red',
                        }),
                        value: '2'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.yellow',
                            default: 'Yellow',
                        }),
                        value: '4'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.green',
                            default: 'Green',
                        }),
                        value: '5'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.blue',
                            default: 'Blue',
                        }),
                        value: '7'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.purple',
                            default: 'Purple',
                        }),
                        value: '8'
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
                        value: '2'
                    },
                    // {
                    //     text: formatMessage({
                    //         id: 'MicrobiteIcreateP.choiceLightRingColor.origen',
                    //         default: 'Orange',
                    //         description: 'MicrobiteIcreateP.choiceLightRingColor.origen'
                    //     }),
                    //     value: '3'
                    // },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.yellow',
                            default: 'Yellow',
                            description: 'MicrobiteIcreateP.choiceLightRingColor.yellow'
                        }),
                        value: '4'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.green',
                            default: 'Green',
                            description: 'MicrobiteIcreateP.choiceLightRingColor.green'
                        }),
                        value: '5'
                    },
                    // {
                    //     text: formatMessage({
                    //         id: 'MicrobiteIcreateP.choiceLightRingColor.qing',
                    //         default: 'Cyan',
                    //         description: 'MicrobiteIcreateP.choiceLightRingColor.qing'
                    //     }),
                    //     value: '6'
                    // },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.blue',
                            default: 'Blue',
                            description: 'MicrobiteIcreateP.choiceLightRingColor.blue'
                        }),
                        value: '7'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.purple',
                            default: 'Purple',
                            description: 'MicrobiteIcreateP.choiceLightRingColor.purple'
                        }),
                        value: '8'
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
                items: [ { text: "L1", value: '0' },
                    { text: "L2", value: '1' },
                    { text: "L3", value: '2' },
                    { text: "L4", value: '3' },
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
                        value: '0'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.month',
                            default: 'month',
                        }),
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.week',
                            default: 'week',
                        }),
                        value: 'w'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.day',
                            default: 'day',
                        }),
                        value: '2'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.hour',
                            default: 'hour',
                            description: 'MicrobiteIcreateS4S.hour'
                        }),
                        value: '5'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.minute',
                            default: 'minute',
                            description: 'MicrobiteIcreateS4S.minute'
                        }),
                        value: '6'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateS4S.second',
                            default: 'second',
                            description: 'MicrobiteIcreateS4S.second'
                        }),
                        value: '7'
                    }
                ]
            },
        }
      };
    }



    //################################陀螺仪######################################
    
    //向#倾斜
    ICM_S4S_isTitled(args){
        return ICMB_read(`mainBoard.gyro_get_tilted() == ${args.CHOICE}`)
    }
    //面朝上
    ICM_S4S_isUp(args){
        return ICMB_read(`mainBoard.gyro_get_orientation() == ${args.CHOICE}`)
    }
    //陀螺仪开关
    // async ICM_S4S_gyroOpen(args){
    //     await ICMB_send(`mainBoard.gyro_enable(${args.CHOICE})`)
    // }
    // //陀螺仪 翻滚角
    // ICM_S4S_gyroXangle(args){
    //     return ICMB_read(`mainBoard.gyro_get_angle(0)`)
    // }

    // //陀螺仪 俯仰角
    // ICM_S4S_gyroYangle(args){
    //     return ICMB_read(`mainBoard.gyro_get_angle(1)`)
    // }
    ICM_S4S_gyroXY(args){
        return ICMB_read(`mainBoard.gyro_get_angle(${args.CHOICE})`)
    }
    
    //陀螺仪 加速度
    ICM_S4S_acc(args){
        return ICMB_read(`mainBoard.gyro_get_acc(${args.CHOICE})`)
    }

    //陀螺仪 角速度
    ICM_S4S_gyro(args){
        return ICMB_read(`mainBoard.gyro_get_gyro(${args.CHOICE})`)
    }

     //################################语音######################################
    //语音模块
    ICM_S4S_voice(args){
        return ICMB_read(`mainBoard.voice_get_state()==${args.CHOICE}`)
    }
    
    //################################超声波######################################
    //超声波
    ICM_S4S_ultrGet(args){
        return ICMB_read(`ultr.get_distance()`)
    }
     //超声波判断
    ICM_S4S_ultrGetLog(args){
        return ICMB_read(`ultr.get_distance()${args.TYPE}${args.NUM}`)
    }

   

    //################################巡线######################################
    //灰度学习
    /* async ICM_S4S_grayStudy(args){
        await ICMB_send(`gray.gray_study()`)
    }

    //二值学习
    async ICM_S4S_binaryStudy(args){
        await ICMB_send(`gray.binary_study()`)
    }

    //颜色学习
    async ICM_S4S_colorStudy(args){
        await ICMB_send(`gray.color_study(${args.CHOICE})`)
    } */

    //清空颜色学习
    /* async ICM_S4S_colorClear(args){
        await ICMB_send(`gray.clear_color()`)
    } */

    async ICM_S4S_setMode(args){
        let code = `gray.color_study(${args.CHOICE})`;
        if(args.CHOICE == "gray"){
            code = "gray.gray_study()"
        }
        await ICMB_send(code)
    }

    //巡线获取灰度值
    ICM_S4S_grayGet(args){
        return ICMB_read(`gray.gray(${args.CHOICE})`)
    }

    //巡线获取颜色
    ICM_S4S_colorGet(args){
        return ICMB_read(`gray.color(${args.CHOICE}) == ${args.CHOICE1}`)
    }

    //巡线获取黑线
    ICM_S4S_blackGet(args){
        return ICMB_read(`gray.black(${args.CHOICE}) == 1`)
    }

    //################################RTC######################################
    //时钟设置日期
    async ICM_S4S_rtcSetData(args){
        await ICMB_send(`mainBoard.rtc_set_date(${args.TEXT},${args.TEXT1},${args.TEXT2})`)
    }

    //时钟设置时间
    async ICM_S4S_rtcSetTime(args){
        await ICMB_send(`mainBoard.rtc_set_time(${args.TEXT},${args.TEXT1},${args.TEXT2})`)
    }

    //获取日期
    ICM_S4S_rtcGetData(args){
        return ICMB_read(`mainBoard.rtc_get_date(${args.CHOICE})`)
    }

    //获取时间
   /*  ICM_S4S_rtcGetTime(args){
        return ICMB_read(`mainBoard.rtc_get_time(${args.CHOICE})`)
    } */

}



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
async function ICMB_read(str){
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


module.exports = LinkBotSensors;