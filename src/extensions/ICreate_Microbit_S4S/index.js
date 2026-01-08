// link-bot
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');

 
class MicrobiteIcreateS4S {
    getInfo() {
      return {
        id: 'MicrobiteIcreateS4S',
        name: formatMessage({
            id: 'MicrobiteIcreateS4S.name',
            default: 'Link Bot',
        }),
        color1: '#55DAD1',  // 主颜色
        color2: '#45C2B9',  // 次颜色（渐变）
        color3: '#36AAA1',   // 边框颜色

        //模块 
        blocks: [
        {
            opcode: 'ICM_S4S_motorRun',//电机以速度运动
            blockType: BlockType.COMMAND,
            // text: '电机[CHOICE]速度[TEXT]',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_motorRun',
                default: 'Motor [CHOICE] Speed [TEXT]',
                description: 'MicrobiteIcreateS4S.ICM_S4S_motorRun'
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotor'
                },
                TEXT: {
                    type: ArgumentType.NUMRES_1000_1000,
                    defaultValue: 1000
                }
            }
        },
        {
            opcode: 'ICM_S4S_motorPosition',//电机转动编码
            blockType: BlockType.COMMAND,
            //text: '电机[CHOICE]编码值[TEXT]',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_motorPosition',
                default: 'Motor [CHOICE] Encoder Value [TEXT]',
                description: 'MicrobiteIcreateS4S.ICM_S4S_motorPosition'
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotor'
                },
                TEXT: {
                    type: ArgumentType.NUMBER,
                    defaultValue: 100
                }
            }
        },
        
        {
            opcode: 'ICM_S4S_motorGetPosition',//获取电机编码
            blockType: BlockType.REPORTER,
            // text: '电机[CHOICE]编码值',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_motorGetPosition',
                default: 'Motor [CHOICE] Encoder Value',
                description: 'MicrobiteIcreateS4S.ICM_S4S_motorGetPosition'
            }),
            disableMonitor: true,
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotor'
                }
            }
        },
        
        "---",
        
        {
            opcode: 'ICM_S4S_CarMove',//双电机控制
            blockType: BlockType.COMMAND,
            // text: '小车 速度[TEXT] [CHOICE]',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_CarMove',
                default: 'Car Speed [TEXT] [CHOICE]',
                description: 'MicrobiteIcreateS4S.ICM_S4S_CarMove'
            }),
            disableMonitor: true,
            arguments: {
                TEXT: {
                    type: ArgumentType.NUMRES_1000_1000,
                    defaultValue: 1000
                },
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_MoveType'
                }
            }
        },
        {
            opcode: 'ICM_S4S_CarStop',//双电机停止
            blockType: BlockType.COMMAND,
            // text: '小车 停止运动',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_CarStop',
                default: 'Car Stop Moving',
                description: 'MicrobiteIcreateS4S.ICM_S4S_CarStop'
            }),
            disableMonitor: true
        },
        
        "---",
        {
            opcode: 'ICM_S4S_servo',//舵机
            blockType: BlockType.COMMAND,
            // text: '舵机[CHOICE]角度[TEXT]',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_servo',
                default: 'Servo [CHOICE] Angle [TEXT]',
                description: 'MicrobiteIcreateS4S.ICM_S4S_servo'
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_serverPin'
                },
                TEXT: {
                    type: ArgumentType.NUMRES0_180,
                    defaultValue: 90
                }
            }
        },
        
        "---",

        {
            opcode: 'ICM_S4S_ambient',//设置氛围灯
            blockType: BlockType.COMMAND,
            // text: '氛围灯 亮度[CHOICE]颜色[COL]',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_ambient',
                default: 'Ambient Light Brightness [CHOICE] Color [COL]',
                description: 'MicrobiteIcreateS4S.ICM_S4S_ambient'
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.NUMRES0_255,
                    defaultValue: 255
                },
                COL: {
                    type: ArgumentType.COLOR,
                    defaultValue:'#ff0000'
                }
            }
        },
        {
            opcode: 'ICM_S4S_ambientOFF',//关闭氛围灯
            blockType: BlockType.COMMAND,
            // text: '氛围灯 关闭',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_ambientOFF',
                default: 'Ambient Light Off',
                description: 'MicrobiteIcreateS4S.ICM_S4S_ambientOFF'
            })
        },
        
        "---",
        {
            opcode: 'ICM_S4S_gyroOpen',//陀螺仪开启
            blockType: BlockType.COMMAND,
            // text: '陀螺仪 [CHOICE]',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_gyroOpen',
                default: 'Gyroscope [CHOICE]',
                description: 'MicrobiteIcreateS4S.ICM_S4S_gyroOpen'
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_open'
                }
            }
        },
        {
            opcode: 'ICM_S4S_gyroXangle',//陀螺仪 翻滚角
            blockType: BlockType.REPORTER,
            // text: '陀螺仪 翻滚角数值',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_gyroXangle',
                default: 'Gyroscope Roll Angle Value',
                description: 'MicrobiteIcreateS4S.ICM_S4S_gyroXangle'
            }),
            disableMonitor: true
        },
        {
            opcode: 'ICM_S4S_gyroYangle',//陀螺仪 俯仰角
            blockType: BlockType.REPORTER,
            // text: '陀螺仪 俯仰角数值',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_gyroYangle',
                default: 'Gyroscope Pitch Angle Value',
                description: 'MicrobiteIcreateS4S.ICM_S4S_gyroYangle'
            }),
            disableMonitor: true
        },
        {
            opcode: 'ICM_S4S_acc',//陀螺仪 加速度
            blockType: BlockType.REPORTER,
            // text: '陀螺仪 [CHOICE]轴加速度值',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_acc',
                default: 'Gyroscope [CHOICE] Axis Acceleration Value',
                description: 'MicrobiteIcreateS4S.ICM_S4S_acc'
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
                default: 'Gyroscope [CHOICE] Axis Angular Velocity Value',
                description: 'MicrobiteIcreateS4S.ICM_S4S_gyro'
            }),
            disableMonitor: true,
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_RockerXY'
                }
            }
        },
        
        "---",
        {
            opcode: 'ICM_S4S_voice',//语音
            blockType: BlockType.BOOLEAN,
            // text: '语音模块 识别到[CHOICE]',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_voice',
                default: 'Voice Module Recognized [CHOICE]',
                description: 'MicrobiteIcreateS4S.ICM_S4S_voice'
            }),
            disableMonitor: true,
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_voice'
                }
            }
        },
        
        "---",
        {
            opcode: 'ICM_S4S_ultrGet',//超声波传感器
            blockType: BlockType.REPORTER,
            // text: '超声波传感器 距离值',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_ultrGet',
                default: 'Ultrasonic Sensor Distance Value',
                description: 'MicrobiteIcreateS4S.ICM_S4S_ultrGet'
            }),
            disableMonitor: true
        },
        {
            opcode: 'ICM_S4S_ultrSet',//设置超声波传感器
            blockType: BlockType.COMMAND,
            // text: '超声波传感器 亮度[CHOICE]颜色[COL]',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_ultrSet',
                default: 'Ultrasonic Sensor Brightness [CHOICE] Color [COL]',
                description: 'MicrobiteIcreateS4S.ICM_S4S_ultrSet'
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.NUMRES0_255,
                    defaultValue: 255
                },
                COL: {
                    type: ArgumentType.COLOR,
                    defaultValue:'#0000ff'
                }
            }
        },
        "---",
        {
            opcode: 'ICM_S4S_grayStudy',//灰度学习
            blockType: BlockType.COMMAND,
            // text: '巡线模块 灰度学习',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_grayStudy',
                default: 'Line Following Module Grayscale Learning',
                description: 'MicrobiteIcreateS4S.ICM_S4S_grayStudy'
            })
        },
        {
            opcode: 'ICM_S4S_binaryStudy',//二值学习
            blockType: BlockType.COMMAND,
            // text: '巡线模块 二值学习',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_binaryStudy',
                default: 'Line Following Module Binary Learning',
                description: 'MicrobiteIcreateS4S.ICM_S4S_binaryStudy'
            })
        },
        {
            opcode: 'ICM_S4S_colorStudy',//颜色学习
            blockType: BlockType.COMMAND,
            // text: '巡线模块 颜色学习[CHOICE]',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_colorStudy',
                default: 'Line Following Module Color Learning [CHOICE]',
                description: 'MicrobiteIcreateS4S.ICM_S4S_colorStudy'
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_studyColor'
                }
            }
        },
        {
            opcode: 'ICM_S4S_colorClear',//清空颜色学习
            blockType: BlockType.COMMAND,
            // text: '巡线模块 清除颜色',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_colorClear',
                default: 'Line Following Module Clear Colors',
                description: 'MicrobiteIcreateS4S.ICM_S4S_colorClear'
            })
        },
        {
            opcode: 'ICM_S4S_grayGet',//巡线获取灰度值
            blockType: BlockType.REPORTER,
            // text: '巡线模块 探头[CHOICE]灰度值',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_grayGet',
                default: 'Line Following Module Probe [CHOICE] Grayscale Value',
                description: 'MicrobiteIcreateS4S.ICM_S4S_grayGet'
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
                default: 'Line Following Module Probe [CHOICE] Recognized [CHOICE1]?',
                description: 'MicrobiteIcreateS4S.ICM_S4S_colorGet'
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
                default: 'Line Following Module Probe [CHOICE] Detect Black Line?',
                description: 'MicrobiteIcreateS4S.ICM_S4S_blackGet'
            }),
            disableMonitor: true,
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_gray'
                }
            }
        },

        "---",
        {
            opcode: 'ICM_S4S_rtcSetData',//时钟设置日期
            blockType: BlockType.COMMAND,
            // text: 'RTC 设置年[TEXT]月[TEXT1]日[TEXT2]',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_rtcSetData',
                default: 'RTC Set Year [TEXT] Month [TEXT1] Day [TEXT2]',
                description: 'MicrobiteIcreateS4S.ICM_S4S_rtcSetData'
            }),
            arguments: {
                TEXT: {
                    type: ArgumentType.NUMRES0_99,
                    defaultValue: 26
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
                default: 'RTC Set Hour [TEXT] Minute [TEXT1] Second [TEXT2]',
                description: 'MicrobiteIcreateS4S.ICM_S4S_rtcSetTime'
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
                default: 'RTC Get [CHOICE]',
                description: 'MicrobiteIcreateS4S.ICM_S4S_rtcGetData'
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_rtcData'
                }
            }
        },
        {
            opcode: 'ICM_S4S_rtcGetTime',//获取时间
            blockType: BlockType.REPORTER,
            disableMonitor: true,
            // text: 'RTC 获取[CHOICE]',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_rtcGetTime',
                default: 'RTC Get [CHOICE]',
                description: 'MicrobiteIcreateS4S.ICM_S4S_rtcGetTime'
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_rtcTime'
                }
            }
        }
        ],



        menus: {
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
            choice_studyColor:{//选择灯环颜色
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
            choice_MoveType:{//选择移动状态*
                acceptReporters: false,
                // items: ['前进', '后退','左转','右转']
                items: [
                    {
                        text: formatMessage({
                            id: 'robotmove.menuDir.forward',
                            default: 'moves forward',
                            description: 'robotmove.menuDir.forward'
                        }),
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'robotmove.menuDir.backward',
                            default: 'moves backward',
                            description: 'robotmove.menuDir.backward'
                        }),
                        value: '2'
                    },
                    {
                        text: formatMessage({
                            id: 'robotmove.menuDir.turnleft',
                            default: 'turns left',
                            description: 'robotmove.menuDir.turnleft'
                        }),
                        value: '3'
                    },
                    {
                        text: formatMessage({
                            id: 'robotmove.menuDir.turnright',
                            default: 'turns right',
                            description: 'robotmove.menuDir.turnright'
                        }),
                        value: '4'
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
            choice_open:{//开关
                acceptReporters: false,
                //items: ['开启', '关闭']
                items: [
                    {
                        text: formatMessage({
                            id: 'videoSensing.on',
                            default: 'on',
                            description: 'videoSensing.on'
                        }),
                        value: 'True'
                    },
                    {
                        text: formatMessage({
                            id: 'videoSensing.off',
                            default: 'off',
                            description: 'videoSensing.off'
                        }),
                        value: 'False'
                    }
                ]
            },
            choice_serverPin: {//选择舵机端口*
                acceptReporters: false,
                items: ['0','1']
            },
            choice_DCmotor: {//直流电机端口*
                acceptReporters: false,
                items: ["0","1","2","3"]
            },
            choice_gray: {//灰度传感器探头
                acceptReporters: false,
                items: ["0","1","2","3"]
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
            }
        }
      };
    }

 
    //电机以速度运动
    async ICM_S4S_motorRun(args){
        await ICMB_send(`mainBoard.motor_setPower(${args.CHOICE},${args.TEXT})`)
    }
    //电机转编码
    async ICM_S4S_motorPosition(args){
        await ICMB_send(`mainBoard.motor_setPosition(${args.CHOICE},${args.TEXT})`)
    }
    //获取电机编码值
    async ICM_S4S_motorGetPosition(args){
        return ICMB_read(`mainBoard.encoder_motor_get_position(${args.CHOICE})`)
    }

    //控制小车运动
    async ICM_S4S_CarMove(args){
        await ICMB_send(`mainBoard.car_run(${args.TEXT},${args.CHOICE})`)
    }

    //控制小车停止
    async ICM_S4S_CarStop(args){
        await ICMB_send(`mainBoard.car_run(0,0)`)
    }

    //控制舵机
    async ICM_S4S_servo(args){
        await ICMB_send(`mainBoard.servo_set_angle(${args.CHOICE},${args.TEXT})`)
    }

    //氛围灯
    async ICM_S4S_ambient(args){
        const [r, g, b] = args.COL.replace('#', '').match(/.{1,2}/g).map(x => parseInt(x, 16));
        await ICMB_send(`mainBoard.ambient_light_set_state(${args.CHOICE},(${r},${g},${b}))`)
    }

    //氛围灯关闭
    async ICM_S4S_ambientOFF(args){
        await ICMB_send(`mainBoard.ambient_light_set_state(0,(0,0,0))`)
    }

    //陀螺仪开关
    async ICM_S4S_gyroOpen(args){
        await ICMB_send(`mainBoard.gyro_enable(${args.CHOICE})`)
    }
    //陀螺仪 翻滚角
    ICM_S4S_gyroXangle(args){
        return ICMB_read(`mainBoard.gyro_get_angle(0)`)
    }

    //陀螺仪 俯仰角
    ICM_S4S_gyroYangle(args){
        return ICMB_read(`mainBoard.gyro_get_angle(1)`)
    }
    
    //陀螺仪 加速度
    ICM_S4S_acc(args){
        return ICMB_read(`mainBoard.gyro_get_acc(${args.CHOICE})`)
    }

    //陀螺仪 角速度
    ICM_S4S_gyro(args){
        return ICMB_read(`mainBoard.gyro_get_gyro(${args.CHOICE})`)
    }

    //语音模块
    ICM_S4S_voice(args){
        return ICMB_read(`mainBoard.voice_get_state()==${args.CHOICE}`)
    }
    
    //超声波
    ICM_S4S_ultrGet(args){
        return ICMB_read(`ultr.get_distance()`)
    }

    //超声波灯
    async ICM_S4S_ultrSet(args){
        const [r, g, b] = args.COL.replace('#', '').match(/.{1,2}/g).map(x => parseInt(x, 16));
        await ICMB_send(`ultr.set_color(${args.CHOICE},${r},${g},${b})`)
    }

    //灰度学习
    async ICM_S4S_grayStudy(args){
        await ICMB_send(`gray.gray_study()`)
    }

    //二值学习
    async ICM_S4S_binaryStudy(args){
        await ICMB_send(`gray.binary_study()`)
    }

    //颜色学习
    async ICM_S4S_colorStudy(args){
        await ICMB_send(`gray.color_study(${args.CHOICE})`)
    }

    //清空颜色学习
    async ICM_S4S_colorClear(args){
        await ICMB_send(`gray.clear_color()`)
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
    ICM_S4S_rtcGetTime(args){
        return ICMB_read(`mainBoard.rtc_get_time(${args.CHOICE})`)
    }

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


module.exports = MicrobiteIcreateS4S;