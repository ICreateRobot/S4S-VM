// link-bot
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');

 
class LinkBot {
    
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
      return {
        id: 'LinkBot',
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
            blockType: BlockType.LABEL,
            text: formatMessage({
                id: 'LinkBot.servo',
                default: 'Servo Motors',
            }),
        },
        {
            opcode: 'ICM_S4S_servo',//舵机
            blockType: BlockType.COMMAND,
            // text: '舵机[CHOICE]角度[TEXT]',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_servo',
                default: 'set servo [CHOICE] angle [TEXT]°',
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
        
        {
            blockType: BlockType.LABEL,
            text: formatMessage({
                id: 'LinkBot.DCmotors',
                default: 'DC Motors',
            }),
        },
        {
            opcode: 'ICM_S4S_motorRunType',//电机以方向转（）【】
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_motorRunType',
                default: 'motor [CHOICE] run [DIVERSION] for [NUM] [TYPE]',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin'
                },
                DIVERSION:{
                    ype: ArgumentType.STRING,
                    menu: 'choice_DCmotorDIVERSION'
                },
                NUM: {
                    type: ArgumentType.NUMRES0,
                    defaultValue: 1
                },
                TYPE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorType'
                },
            }
        },
        {
            opcode: 'ICM_S4S_motorRunDiv',//电机 端口 转向
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_motorRunDiv',
                default: 'motor [CHOICE] start motor [DIVERSION] ',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin'
                },
                DIVERSION:{
                    ype: ArgumentType.STRING,
                    menu: 'choice_DCmotorDIVERSION'
                },
            }
        },
        {
            opcode: 'ICM_S4S_motorStop',//电机停止 端口 
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_motorStop',
                default: 'motor [CHOICE] stop motor',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin'
                },
            }
        },
        {
            opcode: 'ICM_S4S_motorSetSpeed',//电机设置 端口 速度
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_motorSetSpeed',
                default: 'motor [CHOICE] set speed to [NUM]',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin'
                },
                NUM: {
                    type: ArgumentType.NUMRES0_100,
                    defaultValue: 5
                },
            }
        },
        {
            opcode: 'ICM_S4S_motorGetPos',//电机获取 位置
            blockType: BlockType.REPORTER,
            disableMonitor: true,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_motorGetPos',
                default: 'motor [CHOICE] position',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin'
                },
            }
        },
        {
            opcode: 'ICM_S4S_motorGetSpeed',//电机获取 速度
            blockType: BlockType.REPORTER,
            disableMonitor: true,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_motorGetSpeed',
                default: 'motor [CHOICE] speed',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin'
                },
            }
        },
        {
            opcode: 'ICM_S4S_motorSetPos',//电机设置 端口 角度
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_motorSetPos',
                default: 'motor [CHOICE] set relative position to 0',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin'
                },
            }
        },
        {
            opcode: 'ICM_S4S_motorRunPower',//电机 端口 动力
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_motorRunPower',
                default: 'motor [CHOICE] start motor at [NUM]% power',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin'
                },
                NUM: {
                    type: ArgumentType.NUMRES_100_100,
                    defaultValue: 50
                },
            }
        },
        {
            opcode: 'ICM_S4S_motorGetPower',//电机获取 端口 动力
            blockType: BlockType.REPORTER,
            disableMonitor: true,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_motorGetPower',
                default: 'motor [CHOICE] power',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin'
                },
            }
        },


        // {
        //     opcode: 'ICM_S4S_motorRun',//电机以速度运动
        //     blockType: BlockType.COMMAND,
        //     // text: '电机[CHOICE]速度[TEXT]',
        //     text: formatMessage({
        //         id: 'MicrobiteIcreateS4S.ICM_S4S_motorRun',
        //         default: 'Motor [CHOICE] Speed [TEXT]',
        //     }),
        //     arguments: {
        //         CHOICE: {
        //             type: ArgumentType.STRING,
        //             menu: 'choice_DCmotorPin'
        //         },
        //         TEXT: {
        //             type: ArgumentType.NUMRES_1000_1000,
        //             defaultValue: 1000
        //         }
        //     }
        // },
        // {
        //     opcode: 'ICM_S4S_motorPosition',//电机转动编码
        //     blockType: BlockType.COMMAND,
        //     //text: '电机[CHOICE]编码值[TEXT]',
        //     text: formatMessage({
        //         id: 'MicrobiteIcreateS4S.ICM_S4S_motorPosition',
        //         default: 'Motor [CHOICE] Encoder Value [TEXT]',
        //         description: 'MicrobiteIcreateS4S.ICM_S4S_motorPosition'
        //     }),
        //     arguments: {
        //         CHOICE: {
        //             type: ArgumentType.STRING,
        //             menu: 'choice_DCmotorPin'
        //         },
        //         TEXT: {
        //             type: ArgumentType.NUMBER,
        //             defaultValue: 100
        //         }
        //     }
        // },
        
        // {
        //     opcode: 'ICM_S4S_motorGetPosition',//获取电机编码
        //     blockType: BlockType.REPORTER,
        //     // text: '电机[CHOICE]编码值',
        //     text: formatMessage({
        //         id: 'MicrobiteIcreateS4S.ICM_S4S_motorGetPosition',
        //         default: 'Motor [CHOICE] Encoder Value',
        //         description: 'MicrobiteIcreateS4S.ICM_S4S_motorGetPosition'
        //     }),
        //     disableMonitor: true,
        //     arguments: {
        //         CHOICE: {
        //             type: ArgumentType.STRING,
        //             menu: 'choice_DCmotorPin'
        //         }
        //     }
        // },
        
        // "---",

        {
            blockType: BlockType.LABEL,
            text: formatMessage({
                id: 'LinkBot.Movement',
                default: 'Movement',
            }),
        },
        {
            opcode: 'ICM_S4S_MovSetPin',//设置双电机端口
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_MovSetPin',
                default: 'set movement motors to [P1] and [P2] ',
            }),
            arguments: {
                P1: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin',
                    defaultValue: 0
                },
                P2: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin',
                    defaultValue: 1
                },
            }
        },
        {
            opcode: 'ICM_S4S_MovRun',//双电机移动
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_MovRun',
                default: 'start moving [TYPE]',
            }),
            arguments: {
                TYPE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_MoveType',
                },
            }
        },
        {
            opcode: 'ICM_S4S_MovRunSec',//双电机移动秒
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_MovRunSec',
                default: 'move [TYPE] for [NUM] seconds',
            }),
            arguments: {
                TYPE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_MoveType',
                },
                NUM: {
                    type: ArgumentType.NUMRES0,
                    defaultValue: 2
                },
            }
        },
        {
            opcode: 'ICM_S4S_MovStop',//双电机停止
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_MovStop',
                default: 'stop moving',
            })
        },
        {
            opcode: 'ICM_S4S_MovSetPowAll',//双电机设置动力全部
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_MovSetPowAll',
                default: 'set movement speed to [NUM] ',
            }),
            arguments: {
                NUM: {
                    type: ArgumentType.NUMRES0_100,
                    defaultValue: 5
                },
            }
        },
        {
            opcode: 'ICM_S4S_MovSetPow',//双电机设置动力分开
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_MovSetPow',
                default: 'start moving at [P1] [P2]  speed',
            }),
            arguments: {
                P1: {
                    type: ArgumentType.NUMRES0_100,
                    defaultValue: 5
                },
                P2: {
                    type: ArgumentType.NUMRES0_100,
                    defaultValue: 5
                },
            }
        },
        
        // {
        //     opcode: 'ICM_S4S_CarMove',//双电机控制
        //     blockType: BlockType.COMMAND,
        //     // text: '小车 速度[TEXT] [CHOICE]',
        //     text: formatMessage({
        //         id: 'MicrobiteIcreateS4S.ICM_S4S_CarMove',
        //         default: 'Car Speed [TEXT] [CHOICE]',
        //         description: 'MicrobiteIcreateS4S.ICM_S4S_CarMove'
        //     }),
        //     disableMonitor: true,
        //     arguments: {
        //         TEXT: {
        //             type: ArgumentType.NUMRES_1000_1000,
        //             defaultValue: 1000
        //         },
        //         CHOICE: {
        //             type: ArgumentType.STRING,
        //             menu: 'choice_MoveType'
        //         }
        //     }
        // },
        // {
        //     opcode: 'ICM_S4S_CarStop',//双电机停止
        //     blockType: BlockType.COMMAND,
        //     // text: '小车 停止运动',
        //     text: formatMessage({
        //         id: 'MicrobiteIcreateS4S.ICM_S4S_CarStop',
        //         default: 'Car Stop Moving',
        //         description: 'MicrobiteIcreateS4S.ICM_S4S_CarStop'
        //     }),
        //     disableMonitor: true
        // },
        
        {
            blockType: BlockType.LABEL,
            text: formatMessage({
                id: 'LinkBot.Atmosphere',
                default: 'Atmosphere Lamp',
            }),
        },
        {
            opcode: 'ICM_S4S_ambient',//设置氛围灯
            blockType: BlockType.COMMAND,
            // text: '氛围灯 亮度[CHOICE]颜色[COL]',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_ambient',
                default: 'atmosphere lamp brightness [CHOICE] color [COL]',
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
                default: 'atmosphere lamp off',
                description: 'MicrobiteIcreateS4S.ICM_S4S_ambientOFF'
            })
        },


        {
            blockType: BlockType.LABEL,
            text: formatMessage({
                id: 'LinkBot.Line',
                default: 'Line Following Sensor',
            }),
        },
        {
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
        },
        {
            opcode: 'ICM_S4S_colorClear',//清空颜色学习
            blockType: BlockType.COMMAND,
            // text: '巡线模块 清除颜色',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_colorClear',
                default: 'clear colors',
            })
        },
        {
            opcode: 'ICM_S4S_grayGet',//巡线获取灰度值
            blockType: BlockType.REPORTER,
            // text: '巡线模块 探头[CHOICE]灰度值',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_grayGet',
                default: 'probe [CHOICE] grayscale value',
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
                default: 'probe [CHOICE] recognized [CHOICE1]?',
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
                default: 'probe [CHOICE] detect black line?',
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
                default: 'distance value',
            }),
            disableMonitor: true
        },
        {
            opcode: 'ICM_S4S_ultrGetLog',//超声波传感器>mu,
            blockType: BlockType.BOOLEAN,
            // text: '巡线模块 探头[CHOICE]识别黑线?',
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_ultrGetLog',
                default: 'distance value [Type] [NUM]',
            }),
            disableMonitor: true,
            arguments: {
                Type: {
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
            opcode: 'ICM_S4S_ultrSet',//设置超声波传感器
            blockType: BlockType.COMMAND,
            // text: '超声波传感器 亮度[CHOICE]颜色[COL]',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_ultrSet',
                default: 'set brightness [CHOICE] color [COL]',
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

        
        {
            blockType: BlockType.LABEL,
            text: formatMessage({
                id: 'LinkBot.IMU',
                default: 'IMU',
            }),
        },
        // {
        //     opcode: 'ICM_S4S_gyroOpen',//陀螺仪开启
        //     blockType: BlockType.COMMAND,
        //     // text: '陀螺仪 [CHOICE]',
        //     text: formatMessage({
        //         id: 'MicrobiteIcreateS4S.ICM_S4S_gyroOpen',
        //         default: 'Gyroscope [CHOICE]',
        //         description: 'MicrobiteIcreateS4S.ICM_S4S_gyroOpen'
        //     }),
        //     arguments: {
        //         CHOICE: {
        //             type: ArgumentType.STRING,
        //             menu: 'choice_open'
        //         }
        //     }
        // },
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
                default: 'RTC get [CHOICE]',
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
            choice_serverPin: {//选择舵机端口*
                acceptReporters: false,
                items: ['0','1']
            },
            choice_DCmotorPin: { // 直流电机端口*
                acceptReporters: false,
                items: [
                    { text: '0', value: '0' },
                    { text: '1', value: '1' },
                    { text: '2', value: '2' },
                    { text: '3', value: '3' }
                ]
            },
            choice_DCmotorType: { // 直流电机工作模式*
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'LinkBot.choice_DCmotorType.rotations',
                            default: 'rotations'
                        }),
                        value: '0'
                    },
                    {
                        text: formatMessage({
                            id: 'LinkBot.choice_DCmotorType.degrees',
                            default: 'degrees'
                        }),
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'LinkBot.choice_DCmotorType.seconds',
                            default: 'seconds'
                        }),
                        value: '2'
                    },
                ]
            },
            choice_DCmotorDIVERSION: { // 直流电机转向
                acceptReporters: false,
                items: [
                    { text: '↻', value: '0' },
                    { text: '↺', value: '1' }
                ]
            },
            choice_MoveType:{//选择移动状态*
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'robotmove.menuDir.forward',
                            default: 'forward',
                        }),
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'robotmove.menuDir.backward',
                            default: 'backward',
                        }),
                        value: '2'
                    },
                    {
                        text: formatMessage({
                            id: 'robotmove.menuDir.turnleft',
                            default: 'left',
                        }),
                        value: '3'
                    },
                    {
                        text: formatMessage({
                            id: 'robotmove.menuDir.turnright',
                            default: 'right',
                        }),
                        value: '4'
                    }
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

    //################################舵机######################################
    //控制舵机
    async ICM_S4S_servo(args){
        await ICMB_send(`mainBoard.servo_set_angle(${args.CHOICE},${args.TEXT})`)
    }

    //################################dc电机######################################
    //电机 端口 转向 NUM 类型
    async ICM_S4S_motorRunType(args){
        await ICMB_send(`encoder_motor_run_dir_3state(${args.CHOICE},${args.DIVERSION},${args.TYPE},${args.NUM})`)
    }
    //电机 端口 转向 
    async ICM_S4S_motorRunDiv(args){
        await ICMB_send(`encoder_motor_run(${args.CHOICE},${args.DIVERSION})`)
    }
    //电机停止 端口 
    async ICM_S4S_motorStop(args){
        await ICMB_send(`encoder_motor_stop(${args.CHOICE})`)
    }
    //电机设置 端口 速度
    async ICM_S4S_motorSetSpeed(args){
        await ICMB_send(`encoder_motor_set_speed(${args.CHOICE},${args.NUM})`)
    }
    // 电机获取 位置
    ICM_S4S_motorGetPos(args) {
        return ICMB_read(`encoder_motor_get_angle(${args.CHOICE})`);
    }
    // 电机获取 速度
    ICM_S4S_motorGetSpeed(args) {
        return ICMB_read(`encoder_motor_get_speed(${args.CHOICE})`);
    }
    // 电机设置 端口 相对位置为 0
    async ICM_S4S_motorSetPos(args) {
        await ICMB_send(`encoder_motor_reset_angle(${args.CHOICE})`)
    }
    // 电机 端口 动力
    async ICM_S4S_motorRunPower(args) {
        await ICMB_send(`encoder_motor_set_power(${args.CHOICE},${args.NUM})`)
    }
    // 电机获取 端口 动力
    ICM_S4S_motorGetPower(args) {
        return ICMB_read(`encoder_motor_get_power(${args.CHOICE})`);
    }

    // //电机以速度运动
    // async ICM_S4S_motorRun(args){
    //     await ICMB_send(`mainBoard.motor_setPower(${args.CHOICE},${args.TEXT})`)
    // }
    // //电机转编码
    // async ICM_S4S_motorPosition(args){
    //     await ICMB_send(`mainBoard.motor_setPosition(${args.CHOICE},${args.TEXT})`)
    // }
    // //获取电机编码值
    // async ICM_S4S_motorGetPosition(args){
    //     return ICMB_read(`mainBoard.encoder_motor_get_position(${args.CHOICE})`)
    // }

    //################################运动######################################
    // 设置双电机端口
    async ICM_S4S_MovSetPin(args) {
        await ICMB_send(`encoder_motor_pair_set_group(${args.P1},${args.P2})`)
    }
    // 双电机开始移动
    async ICM_S4S_MovRun(args) {
        await ICMB_send(`encoder_motor_pair_run(${args.TYPE})`)
    }
    // 双电机移动指定秒数
    async ICM_S4S_MovRunSec(args) {
        await ICMB_send(`encoder_motor_pair_run_time(${args.TYPE},${args.NUM})`)
    }
    // 双电机停止
    async ICM_S4S_MovStop() {
        await ICMB_send(`encoder_motor_pair_stop()`)
    }
    // 双电机统一设置动力
    async ICM_S4S_MovSetPowAll(args) {
        await ICMB_send(`encoder_motor_pair_set_speed(${args.NUM},${args.NUM})`)
    }
    // 双电机分别设置动力
    async ICM_S4S_MovSetPow(args) {
        await ICMB_send(`encoder_motor_pair_set_speed(${args.P1},${args.P2})`)
    }

    // //控制小车运动
    // async ICM_S4S_CarMove(args){
    //     await ICMB_send(`mainBoard.car_run(${args.TEXT},${args.CHOICE})`)
    // }

    // //控制小车停止
    // async ICM_S4S_CarStop(args){
    //     await ICMB_send(`mainBoard.car_run(0,0)`)
    // }

    
    //################################氛围灯######################################
    //氛围灯
    async ICM_S4S_ambient(args){
        const [r, g, b] = args.COL.replace('#', '').match(/.{1,2}/g).map(x => parseInt(x, 16));
        await ICMB_send(`mainBoard.ambient_light_set_state(${args.CHOICE},(${r},${g},${b}))`)
    }

    //氛围灯关闭
    async ICM_S4S_ambientOFF(args){
        await ICMB_send(`mainBoard.ambient_light_set_state(0,(0,0,0))`)
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


module.exports = LinkBot;