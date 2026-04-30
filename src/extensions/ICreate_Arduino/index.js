/*Arduino 主板扩展 */
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');
const arduinoSvg = require('./arduino.svg')

class ArduinoS4S { 
    constructor(runtime){
        this.runtime=runtime

        console.log(this.runtime)
        this.runtime.on('VM_UPDATE_MODE', this.updateMode.bind(this));
        // this.mode=true
        // this.channelMode=new BroadcastChannel('mode')
        // this.channelMode.addEventListener('message',(event)=>{
        //     this.mode=event.data
        //     currentMode.setMode(event.data)
        // })
        this.mode=this.runtime.runMode
    }
    updateMode(obj){
        console.log(obj)
        this.mode=obj
        setTimeout(() => {
            this.runtime.extensionManager.refreshBlocks();
        }, 10);
    }
    getInfo() {

        let blocks=[

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'ArduinoS4S.display',
                    default: 'Display',
                }),
            },
            {
                opcode: 'ICA_S4S_oledInit',//初始化oled
                blockType: BlockType.COMMAND,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_oledInit',
                    default: 'OLED init',
                    description: 'ArduinoS4S.ICA_S4S_oledInit'
                }),
                arguments: {
                }
            },

            {
                opcode: 'ICA_S4S_clearOled',//清空显示屏
                blockType: BlockType.COMMAND,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_clearOled',
                    default: 'clear screen',
                    description: 'ArduinoS4S.ICA_S4S_clearOled'
                }),
                arguments: {
                }
            },

            {
                opcode: 'ICA_S4S_textSize',//设置显示文本大小
                blockType: BlockType.COMMAND,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_textSize',
                    default: 'set text size [NUM]',
                    description: 'ArduinoS4S.ICA_S4S_textSize'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.STRING,
                        menu: 'choice_textSize'
                    }
                }
            },

            {
                opcode: 'ICA_S4S_setTextXY',//在指定位置显示文本
                blockType: BlockType.COMMAND,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_setTextXY',
                    default: 'print [TEXT] at X [X] Y [Y]',
                    description: 'ArduinoS4S.ICA_S4S_setTextXY'
                }),
                arguments: {
                    TEXT: {
                        type: ArgumentType.STRING,
                        defaultValue: 'ABC'
                    },
                    X: {
                        type: ArgumentType.NUMRES_1000_1000,
                        defaultValue: 0
                    },
                    Y: {
                        type: ArgumentType.NUMRES_1000_1000,
                        defaultValue: 0
                    }
                }
            },

            {
                opcode: 'ICA_S4S_drawPixel',//画点
                blockType: BlockType.COMMAND,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_drawPixel',
                    default: 'draw pixel at X[X] Y[Y]',
                    description: 'ArduinoS4S.ICA_S4S_drawPixel'
                }),
                arguments: {
                    X: {
                        type: ArgumentType.NUMRES_1000_1000,
                        defaultValue: 0
                    },
                    Y: {
                        type: ArgumentType.NUMRES_1000_1000,
                        defaultValue: 0
                    }
                }
            },
            {
                opcode: 'ICA_S4S_drawLine',//画线
                blockType: BlockType.COMMAND,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_drawLine',
                    default: 'draw line X1[X1] Y1[Y1],X2[X2] Y2[Y2]',
                    description: 'ArduinoS4S.ICA_S4S_drawLine'
                }),
                arguments: {
                    X1: {
                        type: ArgumentType.NUMRES_1000_1000,
                        defaultValue: 0
                    },
                    Y1: {
                        type: ArgumentType.NUMRES_1000_1000,
                        defaultValue: 0
                    },
                    X2: {
                        type: ArgumentType.NUMRES_1000_1000,
                        defaultValue: 1
                    },
                    Y2: {
                        type: ArgumentType.NUMRES_1000_1000,
                        defaultValue: 1
                    }
                }
            },

            {
                opcode: 'ICA_S4S_drawrectAngle',//画矩形
                blockType: BlockType.COMMAND,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_drawrectAngle',
                    default: 'draw rectangle X[X] Y[Y],W[W] H[H]',
                    description: 'ArduinoS4S.ICA_S4S_drawrectAngle'
                }),
                arguments: {
                    X: {
                        type: ArgumentType.NUMRES_1000_1000,
                        defaultValue: 0
                    },
                    Y: {
                        type: ArgumentType.NUMRES_1000_1000,
                        defaultValue: 0
                    },
                    W: {
                        type: ArgumentType.NUMRES0_1000,
                        defaultValue: 5
                    },
                    H: {
                        type: ArgumentType.NUMRES0_1000,
                        defaultValue: 5
                    }
                }
            },

            {
                opcode: 'ICA_S4S_drawCircle',//画圆
                blockType: BlockType.COMMAND,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_drawCircle',
                    default: 'draw rectangle X[X] Y[Y],R[R]',
                    description: 'ArduinoS4S.ICA_S4S_drawCircle'
                }),
                arguments: {
                    X: {
                        type: ArgumentType.NUMRES_1000_1000,
                        defaultValue: 0
                    },
                    Y: {
                        type: ArgumentType.NUMRES_1000_1000,
                        defaultValue: 0
                    },
                    R: {
                        type: ArgumentType.NUMRES0_1000,
                        defaultValue: 5
                    }
                }
            },
            {
                opcode: 'ICA_S4S_refresh',//刷新显示屏
                blockType: BlockType.COMMAND,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_refresh',
                    default: 'refresh',
                    description: 'ArduinoS4S.ICA_S4S_refresh'
                }),
                arguments: {
                }
            },
            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'ArduinoS4S.Sensors',
                    default: 'Sensors',
                }),
            },

            {
                opcode: 'ICA_S4S_button',//按钮是否被按下
                blockType: BlockType.BOOLEAN,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_button',
                    default: '[CHOICE] button pressed?',
                    description: 'ArduinoS4S.ICA_S4S_button'
                }),
                disableMonitor: true,
                arguments: {
                    CHOICE: {
                        type: ArgumentType.STRING,
                        menu: 'choice_button'
                    },
                    
                }
            },

            {
                opcode: 'ICA_S4S_sound',//声音大小
                blockType: BlockType.REPORTER,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_sound',
                    default: 'sound level',
                    description: 'ArduinoS4S.ICA_S4S_sound'
                }),
                disableMonitor: true,
                arguments: {
                   
                    
                }
            },

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'ArduinoS4S.Microphone',
                    default: 'Microphone',
                }),
            },

            {
                opcode: 'ICA_S4S_startRecording',//开始录音
                blockType: BlockType.COMMAND,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_startRecording',
                    default: 'start recording for [NUM] seconds',
                    description: 'ArduinoS4S.ICA_S4S_startRecording'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMRES1_60,
                        defaultValue: 5
                    }
                }
            },

            {
                opcode: 'ICA_S4S_playRecording',//播放录音
                blockType: BlockType.COMMAND,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_playRecording',
                    default: 'play recording',
                    description: 'ArduinoS4S.ICA_S4S_playRecording'
                }),
                arguments: {
                }
            },

            {
                opcode: 'ICA_S4S_stopPlayRecording',//停止播放录音
                blockType: BlockType.COMMAND,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_stopPlayRecording',
                    default: 'stop play recording',
                    description: 'ArduinoS4S.ICA_S4S_stopPlayRecording'
                }),
                arguments: {
                }
            },

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'ArduinoS4S.Speaker',
                    default: 'Speaker',
                }),
            },

            {
                opcode: 'ICA_S4S_getAudioFile',//获取音频文件
                blockType: BlockType.COMMAND,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_getAudioFile',
                    default: 'get audio file [TEXT] from sd card',
                    description: 'ArduinoS4S.ICA_S4S_getAudioFile'
                }),
                arguments: {
                    TEXT: {
                        type: ArgumentType.STRING,
                        defaultValue: ''
                    }
                }
            },

            {
                opcode: 'ICA_S4S_setVolume',//设置播放声音大小
                blockType: BlockType.COMMAND,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_setVolume',
                    default: 'set output volume to [NUM]',
                    description: 'ArduinoS4S.ICA_S4S_setVolume'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMRES0_100,
                        defaultValue: 5
                    }
                }
            },

            {
                opcode: 'ICA_S4S_playAudio',//播放音频
                blockType: BlockType.COMMAND,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_playAudio',
                    default: 'play audio',
                    description: 'ArduinoS4S.ICA_S4S_playAudio'
                }),
                arguments: {
                    
                }
            },
            {
                opcode: 'ICA_S4S_stopAudio',//停止播放音频
                blockType: BlockType.COMMAND,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_stopAudio',
                    default: 'stop audio',
                    description: 'ArduinoS4S.ICA_S4S_stopAudio'
                }),
                arguments: {
                    
                }
            },

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'ArduinoS4S.Pins',
                    default: 'Pins',
                }),
            },

            {
                opcode: 'ICA_S4S_setDigital',//设置数字引脚输出为高低电平
                blockType: BlockType.COMMAND,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_setDigital',
                    default: 'set digital pin [PIN] output as [CHOICE]',
                    description: 'ArduinoS4S.ICA_S4S_setDigital'
                }),
                arguments: {
                    PIN: {
                        type: ArgumentType.STRING,
                        menu: 'DIGITAL_PIN'
                    },
                    CHOICE: {
                        type: ArgumentType.STRING,
                        menu: 'DIGITAL_HIGHLOW'
                    },
                }
            },

            {
                opcode: 'ICA_S4S_setPwm',//设置pwm引脚
                blockType: BlockType.COMMAND,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_setPwm',
                    default: 'set pwm pin [PIN] output as [NUM]',
                    description: 'ArduinoS4S.ICA_S4S_setPwm'
                }),
                arguments: {
                    PIN: {
                        type: ArgumentType.STRING,
                        menu: 'PWM_PIN'
                    },
                    NUM: {
                        type: ArgumentType.STRING,
                        defaultValue:255
                    },
                }
            },

            {
                opcode: 'ICA_S4S_readDigitalPin',//读取数字引脚
                blockType: BlockType.BOOLEAN,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_readDigitalPin',
                    default: 'read status of digital pin [PIN]',
                    description: 'ArduinoS4S.ICA_S4S_readDigitalPin'
                }),
                disableMonitor: true,
                arguments: {
                    PIN: {
                        type: ArgumentType.STRING,
                        menu: 'DIGITAL_PIN'
                    },
                }
            },

            {
                opcode: 'ICA_S4S_readAnalogPin',//读取模拟引脚
                blockType: BlockType.REPORTER,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_readAnalogPin',
                    default: 'read analog pin [PIN]',
                    description: 'ArduinoS4S.ICA_S4S_readAnalogPin'
                }),
                disableMonitor: true,
                arguments: {
                    PIN: {
                        type: ArgumentType.STRING,
                        menu: 'ANALOG_PIN'
                    },
                }
            },

            {
                opcode: 'ICA_S4S_setInputPull',//将所选引脚配置为输入模式
                blockType: BlockType.COMMAND,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_setInputPull',
                    default: 'set pin [PIN] to input pull [CHOICE]',
                    description: 'ArduinoS4S.ICA_S4S_setInputPull'
                }),
                arguments: {
                    PIN: {
                        type: ArgumentType.STRING,
                        menu: 'DIGITAL_PIN'
                    },
                    CHOICE: {
                        type: ArgumentType.STRING,
                        menu: 'INPUT_PULL'
                    },
                }
            },

            {
                opcode: 'ICA_S4S_readPulse',//测量所选引脚上高电平或低电平脉冲的持续时间
                blockType: BlockType.REPORTER,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_readPulse',
                    default: 'read pulse pin [CHOICE] timeout [NUM]',
                    description: 'ArduinoS4S.ICA_S4S_readPulse'
                }),
                disableMonitor: true,
                arguments: {
                    CHOICE: {
                        type: ArgumentType.STRING,
                        menu: 'DIGITAL_PIN'
                    },
                    NUM: {
                        type: ArgumentType.STRING,
                        defaultValue:2000
                    },
                }
            },

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'ArduinoS4S.Timer',
                    default: 'Timer',
                }),
            },

            {
                opcode: 'ICA_S4S_getTimer',//获取时间值
                blockType: BlockType.REPORTER,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_getTimer',
                    default: 'Get timer value',
                    description: 'ArduinoS4S.ICA_S4S_getTimer'
                }),
                disableMonitor: true,
                arguments: {
                  
                }
            },

            {
                opcode: 'ICA_S4S_resetTimer',//重置计时器
                blockType: BlockType.COMMAND,
                blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'ArduinoS4S.ICA_S4S_resetTimer',
                    default: 'Reset timer',
                    description: 'ArduinoS4S.ICA_S4S_resetTimer'
                }),
                arguments: {
                  
                }
            },

            

            // {
            //     opcode: 'ICA_S4S_motorRun',//电机以速度运动
            //     blockType: BlockType.COMMAND,
            //     // text: '电机[CHOICE]速度[TEXT]',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_motorRun',
            //         default: 'Motor [CHOICE] Speed [TEXT]',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_motorRun'
            //     }),
            //     arguments: {
            //         CHOICE: {
            //             type: ArgumentType.STRING,
            //             menu: 'choice_DCmotor'
            //         },
            //         TEXT: {
            //             type: ArgumentType.NUMRES_1000_1000,
            //             defaultValue: 1000
            //         }
            //     }
            // },
            // {
            //     opcode: 'ICA_S4S_motorPosition',//电机转动编码
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
            //             menu: 'choice_DCmotor'
            //         },
            //         TEXT: {
            //             type: ArgumentType.NUMBER,
            //             defaultValue: 100
            //         }
            //     }
            // },
            // {
            //     opcode: 'ICA_S4S_motorGetPosition',//获取电机编码
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
            //             menu: 'choice_DCmotor'
            //         }
            //     }
            // },

            // "---",
        
            // {
            //     opcode: 'ICA_S4S_CarMove',//双电机控制
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
            //     opcode: 'ICA_S4S_CarStop',//双电机停止
            //     blockType: BlockType.COMMAND,
            //     // text: '小车 停止运动',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_CarStop',
            //         default: 'Car Stop Moving',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_CarStop'
            //     }),
            //     disableMonitor: true
            // },

            // "---",

            // {
            //     opcode: 'ICA_S4S_servo',//舵机
            //     blockType: BlockType.COMMAND,
            //     // text: '舵机[CHOICE]角度[TEXT]',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_servo',
            //         default: 'Servo [CHOICE] Angle [TEXT]',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_servo'
            //     }),
            //     arguments: {
            //         CHOICE: {
            //             type: ArgumentType.STRING,
            //             menu: 'choice_serverPin'
            //         },
            //         TEXT: {
            //             type: ArgumentType.NUMRES0_180,
            //             defaultValue: 90
            //         }
            //     }
            // },

            // "---",

            // {
            //     opcode: 'ICA_S4S_ambient',//设置氛围灯
            //     blockType: BlockType.COMMAND,
            //     // text: '氛围灯 亮度[CHOICE]颜色[COL]',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_ambient',
            //         default: 'Ambient Light Brightness [CHOICE] Color [COL]',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_ambient'
            //     }),
            //     arguments: {
            //         CHOICE: {
            //             type: ArgumentType.NUMRES0_255,
            //             defaultValue: 255
            //         },
            //         COL: {
            //             type: ArgumentType.COLOR,
            //             defaultValue:'#ff0000'
            //         }
            //     }
            // },
            // {
            //     opcode: 'ICA_S4S_ambientOFF',//关闭氛围灯
            //     blockType: BlockType.COMMAND,
            //     // text: '氛围灯 关闭',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_ambientOFF',
            //         default: 'Ambient Light Off',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_ambientOFF'
            //     })
            // },

            // "---",

            // {
            //     opcode: 'ICA_S4S_gyroOpen',//陀螺仪开启
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
            // {
            //     opcode: 'ICA_S4S_gyroXangle',//陀螺仪 翻滚角
            //     blockType: BlockType.REPORTER,
            //     // text: '陀螺仪 翻滚角数值',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_gyroXangle',
            //         default: 'Gyroscope Roll Angle Value',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_gyroXangle'
            //     }),
            //     disableMonitor: true
            // },
            // {
            //     opcode: 'ICA_S4S_gyroYangle',//陀螺仪 俯仰角
            //     blockType: BlockType.REPORTER,
            //     // text: '陀螺仪 俯仰角数值',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_gyroYangle',
            //         default: 'Gyroscope Pitch Angle Value',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_gyroYangle'
            //     }),
            //     disableMonitor: true
            // },
            // {
            //     opcode: 'ICA_S4S_acc',//陀螺仪 加速度
            //     blockType: BlockType.REPORTER,
            //     // text: '陀螺仪 [CHOICE]轴加速度值',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_acc',
            //         default: 'Gyroscope [CHOICE] Axis Acceleration Value',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_acc'
            //     }),
            //     disableMonitor: true,
            //     arguments: {
            //         CHOICE: {
            //             type: ArgumentType.STRING,
            //             menu: 'choice_RockerXY'
            //         }
            //     }
            // },
            // {
            //     opcode: 'ICA_S4S_gyro',//陀螺仪 角速度
            //     blockType: BlockType.REPORTER,
            //     // text: '陀螺仪 [CHOICE]轴角速度值',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_gyro',
            //         default: 'Gyroscope [CHOICE] Axis Angular Velocity Value',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_gyro'
            //     }),
            //     disableMonitor: true,
            //     arguments: {
            //         CHOICE: {
            //             type: ArgumentType.STRING,
            //             menu: 'choice_RockerXY'
            //         }
            //     }
            // },

            // "---",
            // {
            //     opcode: 'ICA_S4S_voice',//语音
            //     blockType: BlockType.BOOLEAN,
            //     // text: '语音模块 识别到[CHOICE]',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_voice',
            //         default: 'Voice Module Recognized [CHOICE]',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_voice'
            //     }),
            //     disableMonitor: true,
            //     arguments: {
            //         CHOICE: {
            //             type: ArgumentType.STRING,
            //             menu: 'choice_voice'
            //         }
            //     }
            // },

            // "---",

            // {
            //     opcode: 'ICA_S4S_ultrGet',//超声波传感器
            //     blockType: BlockType.REPORTER,
            //     // text: '超声波传感器 距离值',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_ultrGet',
            //         default: 'Ultrasonic Sensor Distance Value',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_ultrGet'
            //     }),
            //     disableMonitor: true
            // },
            // {
            //     opcode: 'ICA_S4S_ultrSet',//设置超声波传感器
            //     blockType: BlockType.COMMAND,
            //     // text: '超声波传感器 亮度[CHOICE]颜色[COL]',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_ultrSet',
            //         default: 'Ultrasonic Sensor Brightness [CHOICE] Color [COL]',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_ultrSet'
            //     }),
            //     arguments: {
            //         CHOICE: {
            //             type: ArgumentType.NUMRES0_255,
            //             defaultValue: 255
            //         },
            //         COL: {
            //             type: ArgumentType.COLOR,
            //             defaultValue:'#0000ff'
            //         }
            //     }
            // },

            // "---",

            // {
            //     opcode: 'ICA_S4S_grayStudy',//灰度学习
            //     blockType: BlockType.COMMAND,
            //     // text: '巡线模块 灰度学习',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_grayStudy',
            //         default: 'Line Following Module Grayscale Learning',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_grayStudy'
            //     })
            // },
            // {
            //     opcode: 'ICA_S4S_binaryStudy',//二值学习
            //     blockType: BlockType.COMMAND,
            //     // text: '巡线模块 二值学习',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_binaryStudy',
            //         default: 'Line Following Module Binary Learning',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_binaryStudy'
            //     })
            // },
            // {
            //     opcode: 'ICA_S4S_colorStudy',//颜色学习
            //     blockType: BlockType.COMMAND,
            //     // text: '巡线模块 颜色学习[CHOICE]',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_colorStudy',
            //         default: 'Line Following Module Color Learning [CHOICE]',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_colorStudy'
            //     }),
            //     arguments: {
            //         CHOICE: {
            //             type: ArgumentType.STRING,
            //             menu: 'choice_studyColor'
            //         }
            //     }
            // },
            // {
            //     opcode: 'ICA_S4S_colorClear',//清空颜色学习
            //     blockType: BlockType.COMMAND,
            //     // text: '巡线模块 清除颜色',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_colorClear',
            //         default: 'Line Following Module Clear Colors',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_colorClear'
            //     })
            // },
            // {
            //     opcode: 'ICA_S4S_grayGet',//巡线获取灰度值
            //     blockType: BlockType.REPORTER,
            //     // text: '巡线模块 探头[CHOICE]灰度值',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_grayGet',
            //         default: 'Line Following Module Probe [CHOICE] Grayscale Value',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_grayGet'
            //     }),
            //     disableMonitor: true,
            //     arguments: {
            //         CHOICE: {
            //             type: ArgumentType.STRING,
            //             menu: 'choice_gray'
            //         }
            //     }
            // },
            // {
            //     opcode: 'ICA_S4S_colorGet',//巡线获取颜色值
            //     blockType: BlockType.BOOLEAN,
            //     // text: '巡线模块 探头[CHOICE]识别到[CHOICE1]?',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_colorGet',
            //         default: 'Line Following Module Probe [CHOICE] Recognized [CHOICE1]?',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_colorGet'
            //     }),
            //     disableMonitor: true,
            //     arguments: {
            //         CHOICE: {
            //             type: ArgumentType.STRING,
            //             menu: 'choice_gray'
            //         },
            //         CHOICE1: {
            //             type: ArgumentType.STRING,
            //             menu: 'choice_studyColor'
            //         }
            //     }
            // },
            // {
            //     opcode: 'ICA_S4S_blackGet',//巡线获取黑线
            //     blockType: BlockType.BOOLEAN,
            //     // text: '巡线模块 探头[CHOICE]识别黑线?',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_blackGet',
            //         default: 'Line Following Module Probe [CHOICE] Detect Black Line?',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_blackGet'
            //     }),
            //     disableMonitor: true,
            //     arguments: {
            //         CHOICE: {
            //             type: ArgumentType.STRING,
            //             menu: 'choice_gray'
            //         }
            //     }
            // },

            // "---",

            // {
            //     opcode: 'ICA_S4S_rtcSetData',//时钟设置日期
            //     blockType: BlockType.COMMAND,
            //     // text: 'RTC 设置年[TEXT]月[TEXT1]日[TEXT2]',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_rtcSetData',
            //         default: 'RTC Set Year [TEXT] Month [TEXT1] Day [TEXT2]',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_rtcSetData'
            //     }),
            //     arguments: {
            //         TEXT: {
            //             type: ArgumentType.NUMRES0_99,
            //             defaultValue: 26
            //         },
            //         TEXT1: {
            //             type: ArgumentType.NUMRES1_12,
            //             defaultValue: 1
            //         },
            //         TEXT2: {
            //             type: ArgumentType.NUMRES1_31,
            //             defaultValue: 1
            //         }
            //     }
            // },
            // {
            //     opcode: 'ICA_S4S_rtcSetTime',//时钟设置时间
            //     blockType: BlockType.COMMAND,
            //     // text: 'RTC 设置时[TEXT]分[TEXT1]秒[TEXT2]',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_rtcSetTime',
            //         default: 'RTC Set Hour [TEXT] Minute [TEXT1] Second [TEXT2]',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_rtcSetTime'
            //     }),
            //     arguments: {
            //         TEXT: {
            //             type: ArgumentType.NUMRES0_23,//0-23
            //             defaultValue: 0
            //         },
            //         TEXT1: {
            //             type: ArgumentType.NUMRES0_59,//0-59
            //             defaultValue: 0
            //         },
            //         TEXT2: {
            //             type: ArgumentType.NUMRES0_59,//0-59
            //             defaultValue: 0
            //         }
            //     }
            // },
            // {
            //     opcode: 'ICA_S4S_rtcGetData',//获取日期
            //     blockType: BlockType.REPORTER,
            //     disableMonitor: true,
            //     // text: 'RTC 获取[CHOICE]',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_rtcGetData',
            //         default: 'RTC Get [CHOICE]',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_rtcGetData'
            //     }),
            //     arguments: {
            //         CHOICE: {
            //             type: ArgumentType.STRING,
            //             menu: 'choice_rtcData'
            //         }
            //     }
            // },
            // {
            //     opcode: 'ICA_S4S_rtcGetTime',//获取时间
            //     blockType: BlockType.REPORTER,
            //     disableMonitor: true,
            //     // text: 'RTC 获取[CHOICE]',
            //     text: formatMessage({
            //         id: 'MicrobiteIcreateS4S.ICM_S4S_rtcGetTime',
            //         default: 'RTC Get [CHOICE]',
            //         description: 'MicrobiteIcreateS4S.ICM_S4S_rtcGetTime'
            //     }),
            //     arguments: {
            //         CHOICE: {
            //             type: ArgumentType.STRING,
            //             menu: 'choice_rtcTime'
            //         }
            //     }
            // }
        ]
        if(this.mode=='upload'){
            blocks.push(
                {
                    blockType: BlockType.LABEL,
                    text: formatMessage({
                        id: 'ArduinoS4S.Serial',
                        default: 'Serial',
                    }),
                },
    
                {
                    opcode: 'ICA_S4S_writeText',//写入文本
                    blockType: BlockType.COMMAND,
                    blockIconURI:arduinoSvg,
                    text: formatMessage({
                        id: 'ArduinoS4S.ICA_S4S_writeText',
                        default: 'write [TEXT] to serial port',
                        description: 'ArduinoS4S.ICA_S4S_writeText'
                    }),
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue:'hello'
                        },
                    }
                },
    
                {
                    opcode: 'ICA_S4S_readableBytes',//读取字节
                    blockType: BlockType.REPORTER,
                    blockIconURI:arduinoSvg,
                    text: formatMessage({
                        id: 'ArduinoS4S.ICA_S4S_readableBytes',
                        default: 'readable bytes from serial port',
                        description: 'ArduinoS4S.ICA_S4S_readableBytes'
                    }),
                    disableMonitor: true,
                    arguments: {
                      
                    }
                },
    
                {
                    opcode: 'ICA_S4S_readByte',//串口读取单个字节
                    blockType: BlockType.REPORTER,
                    blockIconURI:arduinoSvg,
                    text: formatMessage({
                        id: 'ArduinoS4S.ICA_S4S_readByte',
                        default: 'read a byte from serial port',
                        description: 'ArduinoS4S.ICA_S4S_readByte'
                    }),
                    disableMonitor: true,
                    arguments: {
                      
                    }
                },
    
                {
                    opcode: 'ICA_S4S_readString',//串口读取字符串
                    blockType: BlockType.REPORTER,
                    blockIconURI:arduinoSvg,
                    text: formatMessage({
                        id: 'ArduinoS4S.ICA_S4S_readString',
                        default: 'serial read string',
                        description: 'ArduinoS4S.ICA_S4S_readString'
                    }),
                    disableMonitor: true,
                    arguments: {
                      
                    }
                },
    
                {
                    opcode: 'ICA_S4S_readUntil',//读取数据直到满足条件
                    blockType: BlockType.REPORTER,
                    blockIconURI:arduinoSvg,
                    text: formatMessage({
                        id: 'ArduinoS4S.ICA_S4S_readUntil',
                        default: 'serial read until [CHOICE]',
                        description: 'ArduinoS4S.ICA_S4S_readUntil'
                    }),
                    disableMonitor: true,
                    arguments: {
                        CHOICE: {
                            type: ArgumentType.STRING,
                            menu: 'READ_UNTIL'
                        },
                    }
                },
    
                {
                    opcode: 'ICA_S4S_setBaud',
                    blockType: BlockType.COMMAND,
                    blockIconURI:arduinoSvg,
                    text: formatMessage({
                        id: 'ArduinoS4S.ICA_S4S_setBaud',
                        default: 'set serial baud rate to [CHOICE]',
                        description: 'ArduinoS4S.ICA_S4S_setBaud'
                    }),
                    arguments: {
                        CHOICE: {
                            type: ArgumentType.STRING,
                            menu:'BAUD_RATE'
                        },
                    }
                }
            )
        }
      return {
        id: 'ArduinoS4S',
        name: formatMessage({
            id: 'ArduinoS4S.name',
            default: 'Arduino',
            description: 'ArduinoS4S.name'
        }), 
        menuIconURI: arduinoSvg, 

        blocks: blocks,

        menus: {
            choice_button: {//按钮选项
                acceptReporters: false,
                items: [
                    { text: "A", value: '1' },
                    { text: "B", value: '2' },
                    { text: "A+B", value: '3' }
                ]
            },
            choice_textSize: {//高低电平*
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'ArduinoS4S.ICA_S4S_textSize.choice_textSize.small',
                            default: 'small',
                            description: 'ArduinoS4S.ICA_S4S_textSize.choice_textSize.small'
                        }),
                        value: '1' 
                    },
                    { 
                        text: formatMessage({
                            id: 'ArduinoS4S.ICA_S4S_textSize.choice_textSize.middle',
                            default: 'low',
                            description: 'ArduinoS4S.ICA_S4S_textSize.choice_textSize.middle'
                        }),
                        value: '2'
                    },
                    { 
                        text: formatMessage({
                            id: 'ArduinoS4S.ICA_S4S_textSize.choice_textSize.large',
                            default: 'large',
                            description: 'ArduinoS4S.ICA_S4S_textSize.choice_textSize.large'
                        }),
                        value: '3'
                    }
                ]
            },
            DIGITAL_PIN: {//数字引脚
                acceptReporters: false,
                items: [
                    { text: "A0", value: 'A0' },
                    { text: "A1", value: 'A1' },
                    { text: "A2", value: 'A2' },
                    { text: "A3", value: 'A3' },
                    { text: "A4", value: 'A4' },
                    { text: "A5", value: 'A5' },
                    { text: "D0", value: 'D0' },
                    { text: "D1", value: 'D1' },
                    { text: "D2", value: 'D2' },
                    { text: "D3", value: 'D3' },
                    { text: "D4", value: 'D4' },
                    { text: "D5", value: 'D5' },
                    { text: "D6", value: 'D6' },
                    { text: "D7", value: 'D7' },
                    { text: "D8", value: 'D8' },
                    { text: "D9", value: 'D9' },
                    { text: "D10", value: 'D10' },
                    { text: "D11", value: 'D11' },
                    { text: "D12", value: 'D12' },
                    { text: "D13", value: 'D13' },
                    { text: "P003", value: 'P003' },
                    { text: "P004", value: 'P004' },
                    { text: "P011", value: 'P011' },
                    { text: "P012", value: 'P012' },
                    { text: "P013", value: 'P013' },
                    { text: "P015", value: 'P015' },
                    { text: "P113", value: 'P113' },
                    { text: "P204", value: 'P204' },
                    { text: "P400", value: 'P400' },
                    { text: "P401", value: 'P401' },
                    { text: "P408", value: 'P408' },
                ]
            },
            DIGITAL_HIGHLOW: {//高低电平*
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'ArduinoS4S.ICA_S4S_setDigital.DIGITAL_HIGHLOW.high',
                            default: 'high',
                            description: 'ArduinoS4S.ICA_S4S_setDigital.DIGITAL_HIGHLOW.high'
                        }),
                        value: '1' 
                    },
                    { 
                        text: formatMessage({
                            id: 'ArduinoS4S.ICA_S4S_setDigital.DIGITAL_HIGHLOW.low',
                            default: 'low',
                            description: 'ArduinoS4S.ICA_S4S_setDigital.DIGITAL_HIGHLOW.low'
                        }),
                        value: '0'
                    }
                ]
            },

            PWM_PIN: {//PWM端口
                acceptReporters: false,
                items: [
                    { text: "D3", value: 'D3' },
                    { text: "D5", value: 'D5' },
                    { text: "D6", value: 'D6' },
                    { text: "D9", value: 'D9' },
                    { text: "D10", value: 'D10' },
                    { text: "D11", value: 'D11' }
                ]
            },
            ANALOG_PIN: {//ANALOG端口
                acceptReporters: false,
                items: [
                    { text: "A0", value: 'A1' },
                    { text: "A1", value: 'A2' },
                    { text: "A2", value: 'A3' },
                    { text: "A3", value: 'A4' },
                    { text: "A4", value: 'A5' },
                    { text: "A5", value: 'A6' }
                ]
            },

            INPUT_PULL: {//高低电平*
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'ArduinoS4S.ICA_S4S_setInputPull.INPUT_PULL.input',
                            default: 'input',
                            description: 'ArduinoS4S.ICA_S4S_setInputPull.INPUT_PULL.input'
                        }),
                        value: '0' 
                    },
                    {
                        text: formatMessage({
                            id: 'ArduinoS4S.ICA_S4S_setInputPull.INPUT_PULL.output',
                            default: 'output',
                            description: 'ArduinoS4S.ICA_S4S_setInputPull.INPUT_PULL.output'
                        }),
                        value: '1' 
                    },
                    {
                        text: formatMessage({
                            id: 'ArduinoS4S.ICA_S4S_setInputPull.INPUT_PULL.UP',
                            default: 'pull-up input',
                            description: 'ArduinoS4S.ICA_S4S_setInputPull.INPUT_PULL.UP'
                        }),
                        value: '2' 
                    },
                    {
                        text: formatMessage({
                            id: 'ArduinoS4S.ICA_S4S_setInputPull.INPUT_PULL.DOWN',
                            default: 'pull-down input',
                            description: 'ArduinoS4S.ICA_S4S_setInputPull.INPUT_PULL.DOWN'
                        }),
                        value: '3' 
                    },
                    {
                        text: formatMessage({
                            id: 'ArduinoS4S.ICA_S4S_setInputPull.INPUT_PULL.openOutput',
                            default: 'open-drain output',
                            description: 'ArduinoS4S.ICA_S4S_setInputPull.INPUT_PULL.openOutput'
                        }),
                        value: '4' 
                    },
                ]
            },

            READ_UNTIL:{//串口读取数据直到
                acceptReporters: false,
                items: [
                    'new line()',
                    ',',
                    '$',
                    ':',
                    '.',
                    '#',
                    'carriage return()',
                    'space',
                    'tab()',
                    '|',
                    ';'
                    
                    ]
            },
            BAUD_RATE:{
                acceptReporters: false,
                items: [
                    '115200',
                    '57600',
                    '38400',
                    '31250',
                    '28800',
                    '19200',
                    '14400',
                    '9600',
                    '4800',
                    '2400',
                    '1200'
                ]
            },
            choice_DCmotor: {//直流电机端口*
                acceptReporters: false,
                items: [
                    { text: "0", value: '80' },
                    { text: "1", value: '90' },
                    { text: "2", value: '100' },
                    { text: "3", value: '110' }
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
            choice_studyColor:{//选择灯环颜色
                acceptReporters: false,
                //items: ['白色', '黑色', '红色', '橙色', '黄色', '绿色', '青色', '蓝色', '紫色']
                items: [
                    {
                        text: formatMessage({
                            id: 'MicrobiteIcreateP.choiceLightRingColor.red',
                            default: 'Red',
                            description: 'MicrobiteIcreateP.choiceLightRingColor.red'
                        }),
                        value: '2'
                    },
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
                    { text: "X", value: '0' },
                    { text: "Y", value: '1' },
                    { text: "Z", value: '2' }
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

    
    async ICA_S4S_oledInit(args){
        let code = packCommand(`esp_oled.init()`)
        
        await ICA_send(code)
    }
 
    async ICA_S4S_clearOled(args){
        let code = packCommand(`esp_oled.clear_screen()`)
        
        await ICA_send(code)
        // await ICA_send(`esp_oled.clear_screen()`)
    }

    async ICA_S4S_textSize(args){
        let code = packCommand(`esp_oled.set_text_size(${Number(args.NUM)})`)
        
        await ICA_send(code)
        // await ICA_send(`esp_oled.clear_screen()`)
    }

    async ICA_S4S_setTextXY(args){
        let code = packCommand(`esp_oled.print(${Number(args.X)},${Number(args.Y)},"${args.TEXT}")`)
        
        await ICA_send(code)
    }

    async ICA_S4S_drawPixel(args){
        let code = packCommand(`esp_oled.draw_pixel(${Number(args.X)},${Number(args.Y)})`)
        
        await ICA_send(code)
    }

    async ICA_S4S_drawLine(args){
        let code = packCommand(`esp_oled.draw_line(${Number(args.X1)},${Number(args.Y1)},${Number(args.X2)},${Number(args.Y2)})`)
        
        await ICA_send(code)
    }
    async ICA_S4S_drawrectAngle(args){
        let code = packCommand(`esp_oled.draw_rect(${Number(args.X)},${Number(args.Y)},${Number(args.W)},${Number(args.H)})`)
        
        await ICA_send(code)
    }

    async ICA_S4S_drawCircle(args){
        let code = packCommand(`esp_oled.draw_circle(${Number(args.X)},${Number(args.Y)},${Number(args.R)})`)
        
        await ICA_send(code)
    }
    async ICA_S4S_refresh(){
        let code = packCommand(`esp_oled.refresh()`)
        
        await ICA_send(code)
    }

    async ICA_S4S_button(args){
        let code = packCommand(`esp_pin.button_pressed()`)
        let result =await ICA_read(code)
        if(result==args.CHOICE){
            return true
        }
        return false
    }

    async ICA_S4S_sound(){
        let code = packCommand(`esp_audio.get_sound_level()`)
        return ICA_read(code)
    }

    async ICA_S4S_startRecording(args){
        let code = packCommand(`esp_audio.start_recording(${Number(args.NUM)})`)
        await ICA_send(code)
    }

    async ICA_S4S_playRecording(){
        let code = packCommand(`esp_audio.play_recording(1)`)
        await ICA_send(code)
    }

    async ICA_S4S_stopPlayRecording(){
        let code = packCommand(`esp_audio.play_recording(0)`)
        await ICA_send(code)
    }

    async ICA_S4S_getAudioFile(args){
        let code = packCommand(`esp_audio.set_audio_file("${args.TEXT}")`)
        await ICA_send(code)
    }

    async ICA_S4S_setVolume(args){
        let code = packCommand(`esp_audio.set_volume(${args.NUM})`)
        await ICA_send(code)
    }

    async ICA_S4S_playAudio(){
        let code = packCommand(`esp_audio.play_audio(1)`)
        await ICA_send(code)
    }

    async ICA_S4S_stopAudio(){
        let code = packCommand(`esp_audio.play_audio(0)`)
        await ICA_send(code)
    }

    async ICA_S4S_setDigital(args){
        let code = packCommand(`esp_pin.digitalWrite("${args.PIN}",${Number(args.CHOICE)})`)
        await ICA_send(code)
    }

    async ICA_S4S_setPwm(args){
        let code = packCommand(`esp_pin.analogWrite("${args.PIN}",${Number(args.NUM)})`)
        await ICA_send(code)
    }

    async ICA_S4S_readDigitalPin(args){
        let code = packCommand(`esp_pin.digitalRead("${args.PIN}")`)
        let result = await ICA_read(code)
        return result==1
    }

    async ICA_S4S_readAnalogPin(args){
        let code = packCommand(`esp_pin.analogRead("${args.PIN}")`)
        return ICA_read(code)
    }

    async ICA_S4S_setInputPull(args){
        let code = packCommand(`esp_pin.pinMode("${args.PIN}",${Number(args.CHOICE)})`)
        return ICA_read(code)
    }

    async ICA_S4S_readPulse(args){
        let code = packCommand(`esp_pin.pulseIn("${args.CHOICE}",${Number(args.NUM)})`)
        return ICA_read(code)
    }

    async ICA_S4S_getTimer(){
        let code = packCommand(`sys.tick_get()`)
        return ICA_read(code)
    }

    async ICA_S4S_resetTimer(){
        let code = packCommand(`sys.tick_reset()`)
        await ICA_send(code)
    }

    //--------------------电机---------------------------
    //电机以速度运动
    async ICA_S4S_motorRun(args) {
        const speedBytes = int16ToBytes(parseInt(args.TEXT));
        let data = [parseInt(args.CHOICE), 0, ...speedBytes];//模式+速度

        await ICA_send([ 0x01, data.length, ...data]) ;
    }

    //电机转编码
    async ICA_S4S_motorPosition(args){
        await ICA_send([ 0x01, 2, parseInt(args.CHOICE), 1]) ;//模式

        const posBytes = int32ToBytes(parseInt(args.TEXT));
        let data = [parseInt(args.CHOICE)+2, ...posBytes];//角度
        await ICA_send([ 0x01, data.length, ...data]) ;
    }

    //获取电机编码值
    async ICA_S4S_motorGetPosition(args){
        await ICA_send([ 0x01, 2, parseInt(args.CHOICE), 1]) ;//模式
        return ICA_read([ 0x02, 1, parseInt(args.CHOICE)+3])
    }

    //控制小车运动
    async ICA_S4S_CarMove(args){
        // 速度方向
        const speed = parseInt(args.TEXT);
        let leftSpeed, rightSpeed;
        if(args.CHOICE == 0){
            leftSpeed = speed;
            rightSpeed = speed;
        }else if(args.CHOICE == `1`){
            leftSpeed = -speed;
            rightSpeed = -speed;
        }else if(args.CHOICE == `2`){
            leftSpeed = -speed;
            rightSpeed = speed;
        }else if(args.CHOICE == `3`){
            leftSpeed = speed;
            rightSpeed = -speed;
        }

        let leftdata = [80, 0, ...int16ToBytes(leftSpeed)];//左电机：模式+速度
        await ICA_send([ 0x01, leftdata.length, ...leftdata]) ;
        let rightdata = [90, 0, ...int16ToBytes(rightSpeed)];//右电机：模式+速度
        await ICA_send([ 0x01, rightdata.length, ...rightdata]) ;
    }

    //控制小车停止
    async ICA_S4S_CarStop(){
        let leftdata = [80, 0, ...int16ToBytes(0)];//左电机：模式+速度
        await ICA_send([ 0x01, leftdata.length, ...leftdata]) ;
        let rightdata = [90, 0, ...int16ToBytes(0)];//右电机：模式+速度
        await ICA_send([ 0x01, rightdata.length, ...rightdata]) ;
    }

    //--------------------舵机---------------------------
    //控制舵机
     async ICA_S4S_servo(args){
        let data = [15+parseInt(args.CHOICE), parseInt(args.TEXT)];//角度
        await ICA_send([ 0x01, data.length, ...data]) ;
    }

    //--------------------氛围灯---------------------------
    //氛围灯
    async ICA_S4S_ambient(args){
        const [r, g, b] = args.COL.replace('#', '').match(/.{1,2}/g).map(x => parseInt(x, 16));
        let data = [0x05, parseInt(args.CHOICE), r, g, b];//亮度+颜色
        await ICA_send([ 0x01, data.length, ...data])
    }

    //氛围灯关闭
    async ICA_S4S_ambientOFF(){
        let data = [0x05, 0, 0, 0, 0];//亮度+颜色
        await ICA_send([ 0x01, data.length, ...data])
    }

    //--------------------陀螺仪---------------------------
    //陀螺仪开关
    async ICA_S4S_gyroOpen(args){
        let open =  0;
        if(args.CHOICE == "True") open = 1;

        await ICA_send([ 0x01, 2, 20, open]) ;
    }
    //陀螺仪 翻滚角
    ICA_S4S_gyroXangle(){
        return ICA_read([ 0x02, 1, 20+4, 0x03, 2, 0, 2]);//读取角度 x
    }

    //陀螺仪 俯仰角
    ICA_S4S_gyroYangle(){
        return ICA_read([ 0x02, 1, 20+4, 0x03, 2, 2, 2]);//读取角度 y
    }
    
    //陀螺仪 加速度
    ICA_S4S_acc(args){
        let index = parseInt(args.CHOICE)*2;
        return ICA_read([ 0x02, 1, 20+2, 0x03, 2, index, 2]);//读取加速度
    }

    //陀螺仪 角速度
    ICA_S4S_gyro(args){
        let index = parseInt(args.CHOICE)*2;
        return ICA_read([ 0x02, 1, 20+3, 0x03, 2, index, 2]);//读取角速度
    }

    //--------------------语音模块---------------------------
    //语音模块
    ICA_S4S_voice(args){
        let value = ICA_read([ 0x02, 1, 30]);
        return value == args.CHOICE;
    }

    //--------------------超声波---------------------------
    //超声波
    ICA_S4S_ultrGet(args){
        return ICMB_read(`ultr.get_distance()`)
    }

    //超声波灯
    async ICA_S4S_ultrSet(args){
        const [r, g, b] = args.COL.replace('#', '').match(/.{1,2}/g).map(x => parseInt(x, 16));
        await ICMB_send(`ultr.set_color(${args.CHOICE},${r},${g},${b})`)
    }

    //--------------------巡线---------------------------
    //灰度学习
    async ICA_S4S_grayStudy(args){
        await ICMB_send(`gray.gray_study()`)
    }

    //二值学习
    async ICA_S4S_binaryStudy(args){
        await ICMB_send(`gray.binary_study()`)
    }

    //颜色学习
    async ICA_S4S_colorStudy(args){
        await ICMB_send(`gray.color_study(${args.CHOICE})`)
    }

    //清空颜色学习
    async ICA_S4S_colorClear(args){
        await ICMB_send(`gray.clear_color()`)
    }

    //巡线获取灰度值
    ICA_S4S_grayGet(args){
        return ICMB_read(`gray.gray(${args.CHOICE})`)
    }

    //巡线获取颜色
    ICA_S4S_colorGet(args){
        return ICMB_read(`gray.color(${args.CHOICE}) == ${args.CHOICE1}`)
    }

    //巡线获取黑线
    ICA_S4S_blackGet(args){
        return ICMB_read(`gray.black(${args.CHOICE}) == 1`)
    }

    //--------------------RTC---------------------------
    //时钟设置日期
    async ICA_S4S_rtcSetData(args){
        let data = [10+1, 0, parseInt(args.TEXT1), parseInt(args.TEXT2), parseInt(args.TEXT)];//周、月、日、年
        await ICA_send([ 0x01, data.length, ...data]) ;
    }

    //时钟设置时间
    async ICA_S4S_rtcSetTime(args){
        let data = [10+0, parseInt(args.TEXT), parseInt(args.TEXT1), parseInt(args.TEXT2)];//时、分、秒
        await ICA_send([ 0x01, data.length, ...data]) ;
    }

    //获取日期
    ICA_S4S_rtcGetData(args){
        let index = parseInt(args.CHOICE);
        //return ICMB_read(`mainBoard.rtc_get_date(${args.CHOICE})`)
        if(args.CHOICE == 0){//年
            index = 3
        }
        return ICA_read([ 0x02, 1, 10+1, 0x03, 2, index, 1]);//读取日期
    }

    //获取时间
    ICA_S4S_rtcGetTime(args){
        return ICA_read([ 0x02, 1, 10, 0x03, 2, parseInt(args.CHOICE), 1]);//读取时间
    }
    
}

//辅助函数--字节转换 (大端序)
//----------------------------------------------------
function int16ToBytes(value) {//2位
    const buffer = Buffer.alloc(2);
    buffer.writeInt16BE(value);
    return [...buffer];
}

function int32ToBytes(value) {//4位
    const buffer = Buffer.alloc(4);
    buffer.writeInt32BE(value); 
    return [...buffer];
}
//----------------------------------------------------

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
        // const packet = buildPacket(dataBytes);
        const packet = dataBytes
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
        // const packet = buildPacket(dataBytes);
        const packet = dataBytes;
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


module.exports = ArduinoS4S;


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




// //进度监听
// let flashModal = null;

// function showFlashModal() {
//     if (flashModal) return;

//     flashModal = document.createElement("div");
//     flashModal.id = "flash-modal";
//     flashModal.style.cssText = `
//         position: fixed;
//         inset: 0;
//         background: rgba(0,0,0,0.55);
//         backdrop-filter: blur(3px);
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         z-index: 999999;
//         opacity: 0;
//         transition: opacity .25s ease;
//     `;

//     flashModal.innerHTML = `
//         <div id="flash-box" style="
//             width: 380px;
//             padding: 26px 28px;
//             background: #1e1e1e;
//             border-radius: 14px;
//             text-align: center;
//             color: white;
//             position: relative;
//             box-shadow: 0 8px 25px rgba(0,0,0,0.35);
//             animation: flashPop .3s ease;
//         ">

//             <style>
//                 @keyframes flashPop {
//                     0% { transform: scale(0.92); opacity: .3; }
//                     100% { transform: scale(1); opacity: 1; }
//                 }
//                 #flash-close:hover { background: rgba(255,255,255,0.2); }
//             </style>

//             <div id="flash-close" style="
//                 display:none;
//                 position:absolute;
//                 top:10px;
//                 right:10px;
//                 width:26px;
//                 height:26px;
//                 border-radius:6px;
//                 cursor:pointer;
//                 font-size:20px;
//                 color:#ccc;
//                 line-height:26px;
//                 text-align:center;
//                 transition: .2s;
//             ">✖</div>

//             <div id="flash-title" style="
//                 margin-bottom: 15px;
//                 font-size: 17px;
//                 font-weight: 600;
//                 letter-spacing: 0.3px;
//             ">Downloading Firmware...</div>

//             <div style="
//                 width: 100%;
//                 height: 12px;
//                 background: rgba(255,255,255,0.15);
//                 border-radius: 6px;
//                 overflow: hidden;
//                 margin-bottom: 12px;
//             ">
//                 <div id="flash-bar" style="
//                     height: 100%;
//                     width: 0%;
//                     background: linear-gradient(90deg,#4CAF50,#66cc6a);
//                     transition: width .2s ease;
//                 "></div>
//             </div>

//             <div id="flash-percent" style="
//                 font-size: 14px;
//                 opacity: .9;
//             ">0%</div>

//             <!-- 错误提示 -->
//             <div id="flash-error" style="
//                 display:none;
//                 margin-top:18px;
//                 padding:10px 12px;
//                 background: rgba(255,60,60,0.2);
//                 border: 1px solid rgba(255,60,60,0.4);
//                 border-radius: 8px;
//                 color:#ff6666;
//                 font-size: 14px;
//                 line-height: 1.6;
//             "></div>

//         </div>
//     `;

//     document.body.appendChild(flashModal);

//     // 淡入
//     requestAnimationFrame(() => {
//         flashModal.style.opacity = "1";
//     });

//     // 关闭按钮
//     document.getElementById("flash-close").onclick = () => {
//         //window.close();
//         hideFlashModal();
//     };
// }

// // 更新进度
// function updateFlashProgress(p) {
//     showFlashModal();
//     document.getElementById("flash-bar").style.width = `${p}%`;
//     document.getElementById("flash-percent").textContent = `${p}%`;
// }

// // 显示错误
// function showFlashError(msg) {
//     showFlashModal();

//     const errBox = document.getElementById("flash-error");
//     errBox.style.display = "block";
//     errBox.textContent = msg;

//     document.getElementById("flash-title").textContent = "ERROR";
//     document.getElementById("flash-bar").style.background = "#ff3333";

//     document.getElementById("flash-close").style.display = "block";
// }

// // 隐藏
// function hideFlashModal() {
//     if (flashModal) {
//         flashModal.style.opacity = "0";
//         setTimeout(() => {
//             flashModal.remove();
//             flashModal = null;
//         }, 250);
//     }
// }

// window.EditorPreload.onFlashProgress(updateFlashProgress);//更新
// window.EditorPreload.onFlashError(showFlashError);//报错
// window.EditorPreload.onFlashDone(hideFlashModal);//结束
