/*microbit 主板扩展 */
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');
const icon = require('./microbit.png');

class MicrobitIcreate { 

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
        const blocks= [
            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'MicrobitIcreate.display',
                    default: 'Display',
                }),
            },
            
            {
                opcode: 'ICM_showSelfImage',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'MicrobitIcreate.ICM_showSelfImage',
                    default: 'display leds [MATRIX]'
                }),
                arguments: {
                MATRIX: {
                    type: ArgumentType.MATRIX,
                    defaultValue: "0101011111111110111000100"
                }
                }
            },

            {
                opcode: 'ICM_showImage',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'MicrobitIcreate.ICM_showImage',
                    default: 'display icon [IMAGE]'
                }),
                arguments: { 
                IMAGE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DisplayImage'
                }
                }
            },
            {
                opcode: 'ICM_showString',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'MicrobitIcreate.ICM_showString',
                    default: 'display string [TEXT]'
                }),
                arguments: {
                TEXT: {
                    type: ArgumentType.STRING,
                    defaultValue: 'hello'
                }
                }
            },
            {
                opcode: 'ICM_showNumber',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'MicrobitIcreate.ICM_showNumber',
                    default: 'display number [NUM]'
                }),
                arguments: { 
                NUM: {
                    type: ArgumentType.NUMBER,
                    defaultValue: 0
                }
                }
            },
            {
                opcode: 'ICM_showArrow',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'MicrobitIcreate.ICM_showArrow',
                    default: 'display arrow [IMAGE]'
                }),
                arguments: {
                IMAGE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DisplayArrow'
                }
                }
            },

            {
                opcode: 'ICM_showPlot',//绘图 x y
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'MicrobitIcreate.ICM_showPlot',
                    default: 'plot x[X] y[Y] ',
                }),
                arguments: {
                    X: {
                        type: ArgumentType.NUMRES0_4,
                        defaultValue: 0
                    },
                    Y: {
                        type: ArgumentType.NUMRES0_4,
                        defaultValue: 0
                    },
                },
            },
            {
                opcode: 'ICM_showToggle',//切换 x y
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'MicrobitIcreate.ICM_showToggle',
                    default: 'toggle x[X] y[Y] ',
                }),
                arguments: {
                    X: {
                        type: ArgumentType.NUMRES0_4,
                        defaultValue: 0
                    },
                    Y: {
                        type: ArgumentType.NUMRES0_4,
                        defaultValue: 0
                    },
                },
            },
            {
                opcode: 'ICM_showUnplot',//取消绘图 x y
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'MicrobitIcreate.ICM_showUnplot',
                    default: 'unplot x[X] y[Y] ',
                }),
                arguments: {
                    X: {
                        type: ArgumentType.NUMRES0_4,
                        defaultValue: 0
                    },
                    Y: {
                        type: ArgumentType.NUMRES0_4,
                        defaultValue: 0
                    },
                },
            },
            {
                opcode: 'ICM_showPoint',//点亮 x y
                blockType: BlockType.BOOLEAN,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'MicrobitIcreate.ICM_showPoint',
                    default: 'point x[X] y[Y] ',
                }),
                arguments: {
                    X: {
                        type: ArgumentType.NUMRES0_4,
                        defaultValue: 0
                    },
                    Y: {
                        type: ArgumentType.NUMRES0_4,
                        defaultValue: 0
                    },
                },
            },

            {
                opcode: 'ICM_showClear',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'MicrobitIcreate.ICM_showClear',
                    default: 'clear display',
                })
            },



            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'MicrobitIcreate.labelSpeaker',
                    default: 'Speaker',
                }),
            },
            {
                opcode: 'ICM_playSpeaker',//说
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'LinkBot.ICM_playSpeaker',
                    default: 'play tone [HZ] Hz volume [VALUE]%',
                }),
                arguments: {
                    HZ: {
                        type: ArgumentType.NUMBER,
                        defaultValue: 440
                    },
                    VALUE: {
                        type: ArgumentType.NUMRES0_100,
                        defaultValue: 100
                    },
                },
            },
            {
                opcode: 'ICM_stopSpeaker',//停
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'LinkBot.ICM_stopSpeaker',
                    default: 'stop tone',
                }),
                arguments: {
                    HZ: {
                        type: ArgumentType.NUMBER,
                        defaultValue: 440
                    },
                    VALUE: {
                        type: ArgumentType.NUMRES0_100,
                        defaultValue: 100
                    },
                },
            },




            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'MicrobitIcreate.labelSensor',
                    default: 'Sensor',
                }),
            },
            {
                opcode: 'ICM_buttonPressed',//按钮按下？
                blockType: BlockType.BOOLEAN,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'MicrobitIcreate.ICM_buttonPressed',
                    default: '[CHOICE] button pressed?',
                }),
                disableMonitor: true,
                arguments: {
                    CHOICE: {
                        type: ArgumentType.STRING,
                        menu: 'choice_Button'
                    }
                }
            },

            {
                opcode: 'ICM_accelerometerGesture',//手势
                blockType: BlockType.BOOLEAN,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'MicrobitIcreate.ICM_accelerometerGesture',
                    default: '[CHOICE] gesture?',
                }),
                disableMonitor: true,
                arguments: {
                    CHOICE: {
                        type: ArgumentType.STRING,
                        menu: 'choice_Gesture'
                    }
                }
            },

            {
                opcode: 'ICM_magnetStrength',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'MicrobitIcreate.ICM_magnetStrength',
                    default: 'magnetic force [CHOICE]',
                }),
                disableMonitor: true,
                arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_MagnetStrength'
                }
                }
            },
            {
                opcode: 'ICM_acceleration',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'MicrobitIcreate.ICM_acceleration',
                    default: 'acceleration [CHOICE]',
                }),
                disableMonitor: true,
                arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_acceleration'
                }
                }
            },

            {
                opcode: 'ICM_light',//亮度
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'MicrobitIcreate.ICM_light',
                    default: 'light level',
                }),
                disableMonitor: true
            },
            {
                opcode: 'ICM_soundLevel',//声音
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'MicrobitIcreate.ICM_soundLevel',
                    default: 'sound level',
                }),
                disableMonitor: true
            },
            {
                opcode: 'ICM_temperature',//温度
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'MicrobitIcreate.ICM_temperature',
                    default: 'temperature(℃)',
                }),
                disableMonitor: true
            },

            

            // {
            //     opcode: 'ICM_pinPressed',//pin按下？
            //     blockType: BlockType.BOOLEAN,
            //     text: formatMessage({
            //         id: 'MicrobitIcreate.ICM_pinPressed',
            //         default: 'pin [CHOICE] is pressed',
            //     }),
            //     disableMonitor: true,
            //     arguments: {
            //         CHOICE: {
            //             type: ArgumentType.STRING,
            //             menu: 'choice_pinPressed'
            //         }
            //     }
            // },
            
            // {
            //     opcode: 'ICM_logoPressed',//logo
            //     blockType: BlockType.BOOLEAN,
            //     text: formatMessage({
            //         id: 'MicrobitIcreate.ICM_logoPressed',
            //         default: 'logo is pressed',
            //     }),
            //     disableMonitor: true
            // },
           
            // {
            //     opcode: 'ICM_compassHeading',//指南针朝向
            //     blockType: BlockType.REPORTER,
            //     blockIconURI:icon,
            //     text: formatMessage({
            //         id: 'MicrobitIcreate.ICM_compassHeading',
            //         default: 'compass heading(°)',
            //     }),
            //     disableMonitor: true
            // },
            

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'MicrobitIcreate.labelPins',
                    default: 'Pins',
                }),
            },
            {
                opcode: 'ICM_analogRead',//模拟读取
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'LinkBot.ICM_analogRead',
                    default: 'analog value of pin [CHOICE]',
                }),
                disableMonitor: true,
                arguments: {
                    CHOICE: {
                        type: ArgumentType.STRING,
                        menu: 'choice_PIN'
                    },
                },
            },
            {
                opcode: 'ICM_pinInput',//pin输入
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'LinkBot.ICM_pinInput',
                    default: 'set pin [CHOICE] to input pull [TYPE]',
                }),
                arguments: {
                    CHOICE: {
                        type: ArgumentType.STRING,
                        menu: 'choice_PIN'
                    },
                    TYPE: {
                        type: ArgumentType.STRING,
                        menu: 'choice_PinType'
                    },
                },
            },
            {
                opcode: 'ICM_digitalRead',//数字读取判断为高
                blockType: BlockType.BOOLEAN,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'LinkBot.ICM_digitalRead',
                    default: '[CHOICE] pin is hight?',
                }),
                disableMonitor: true,
                arguments: {
                    CHOICE: {
                        type: ArgumentType.STRING,
                        menu: 'choice_PIN'
                    },
                },
            },
            {
                opcode: 'ICM_digitalWrite',//数字写入
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'LinkBot.ICM_digitalWrite',
                    default: 'set [CHOICE] digital [TEXT]',
                }),
                arguments: {
                    CHOICE: {
                        type: ArgumentType.STRING,
                        menu: 'choice_PIN'
                    },
                    TEXT: {
                        type: ArgumentType.NUMBER,
                        menu: 'choice_PinLevel'
                    },
                },
            },
            {
                opcode: 'ICM_analogWrite',//模拟写入
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'LinkBot.ICM_analogWrite',
                    default: 'set [CHOICE] analog [TEXT]%',
                }),
                arguments: {
                    CHOICE: {
                        type: ArgumentType.STRING,
                        menu: 'choice_PIN'
                    },
                    TEXT: {
                        type: ArgumentType.NUMRES0_100,
                        defaultValue: 100
                    },
                },
            },
            
            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'MicrobitIcreate.labelRadio',
                    default: 'Radio',
                }),
            },
            {
                opcode: 'ICM_radioSetGroup',//设置无线模块（初始化）
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'LinkBot.ICM_radioSetGroup',
                    default: 'radio set group [TEXT] with power [CHOICE]',
                }),
                arguments: {
                    TEXT: {
                        type: ArgumentType.NUMRES0_100,
                        defaultValue: 100
                    },
                    CHOICE: {
                        type: ArgumentType.STRING,
                        menu: 'choice_radioPower'
                    },
                },
            },
            {
                opcode: 'ICM_radioSend',//无线模块发送数据
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'LinkBot.ICM_radioSend',
                    default: 'send data [TEXT] to microbit',
                }),
                arguments: {
                    TEXT: {
                        type: ArgumentType.STRING,
                        defaultValue: "data"
                    },
            
                },
            },

            {
                opcode: 'ICM_radioRecive',//无线数据读取
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'MicrobitIcreate.ICM_radioRecive',
                    default: 'receive data from microbit',
                }),
                disableMonitor: true,
                arguments: {
                    
                },
            },

            
            // {
            //     opcode: 'ICM_compassCalibrate',
            //     blockType: BlockType.COMMAND,
            //     text: formatMessage({
            //     id: 'MicrobitIcreate.ICM_compassCalibrate',
            //     default: 'Compass Calibrate',
            //     description: 'MicrobitIcreate.ICM_compassCalibrate'
            //     })
            // },
            
            // {
            //     opcode: 'ICM_magnetStrength',
            //     blockType: BlockType.REPORTER,
            //     text: formatMessage({
            //     id: 'MicrobitIcreate.ICM_magnetStrength',
            //     default: 'Magnetic Strength [CHOICE]',
            //     description: 'MicrobitIcreate.ICM_magnetStrength'
            //     }),
            //     disableMonitor: true,
            //     arguments: {
            //     CHOICE: {
            //         type: ArgumentType.STRING,
            //         menu: 'choice_MagnetStrength'
            //     }
            //     }
            // },
           
            // {
            //     opcode: 'ICM_accelerometer',
            //     blockType: BlockType.REPORTER,
            //     text: formatMessage({
            //     id: 'MicrobitIcreate.ICM_accelerometer',
            //     default: 'Acceleration [CHOICE]',
            //     description: 'MicrobitIcreate.ICM_accelerometer'
            //     }),
            //     disableMonitor: true,
            //     arguments: {
            //     CHOICE: {
            //         type: ArgumentType.STRING,
            //         menu: 'choice_Accelerometer'
            //     }
            //     }
            // },
            // {
            //     blockType: BlockType.LABEL,
            //     text: formatMessage({
            //     id: 'MicrobitIcreate.labelMusic',
            //     default: 'Music',
            //     description: 'MicrobitIcreate.labelMusic'
            //     }),
            // },
            // {
            //     opcode: 'ICM_musicPlay',
            //     blockType: BlockType.COMMAND,
            //     text: formatMessage({
            //     id: 'MicrobitIcreate.ICM_musicPlay',
            //     default: 'Play Music [CHOICE]',
            //     description: 'MicrobitIcreate.ICM_musicPlay'
            //     }),
            //     arguments: {
            //     CHOICE: {
            //         type: ArgumentType.STRING,
            //         menu: 'choice_MusicPlay'
            //     }
            //     }
            // },
            // {
            //     opcode: 'ICM_setTempo',
            //     blockType: BlockType.COMMAND,
            //     text: formatMessage({
            //     id: 'MicrobitIcreate.ICM_setTempo',
            //     default: 'Set Playback Speed [TEXT]',
            //     description: 'MicrobitIcreate.ICM_setTempo'
            //     }),
            //     arguments: {
            //     TEXT: {
            //         type: ArgumentType.NUMRES40_500,
            //         defaultValue: 120
            //     }
            //     }
            // },
            // {
            //     opcode: 'ICM_musicPitch',
            //     blockType: BlockType.COMMAND,
            //     text: formatMessage({
            //     id: 'MicrobitIcreate.ICM_musicPitch',
            //     default: 'Tone Frequency [TEXT] Continuous Play',
            //     description: 'MicrobitIcreate.ICM_musicPitch'
            //     }),
            //     arguments: {
            //     TEXT: {
            //         type: ArgumentType.NUMRES20_10000,
            //         defaultValue: 440
            //     }
            //     }
            // },
            // {
            //     opcode: 'ICM_musicStop',
            //     blockType: BlockType.COMMAND,
            //     text: formatMessage({
            //     id: 'MicrobitIcreate.ICM_musicStop',
            //     default: 'Stop Continuous Play',
            //     description: 'MicrobitIcreate.ICM_musicStop'
            //     })
            // },
            // {
            //     opcode: 'ICM_speechSay',
            //     blockType: BlockType.COMMAND,
            //     text: formatMessage({
            //     id: 'MicrobitIcreate.ICM_speechSay',
            //     default: 'Speech Say [TEXT]',
            //     description: 'MicrobitIcreate.ICM_speechSay'
            //     }),
            //     arguments: {
            //     TEXT: {
            //         type: ArgumentType.STRING,
            //         defaultValue: 'Hello, world. How are you?'
            //     }
            //     }
            // },
            // {
            //     opcode: 'ICM_audioPlay',
            //     blockType: BlockType.COMMAND,
            //     text: formatMessage({
            //     id: 'MicrobitIcreate.ICM_audioPlay',
            //     default: 'Play Expressive Sound [CHOICE]',
            //     description: 'MicrobitIcreate.ICM_audioPlay'
            //     }),
            //     arguments: {
            //     CHOICE: {
            //         type: ArgumentType.STRING,
            //         menu: 'choice_AudioPlay'
            //     }
            //     }
            // },
            // {
            //     opcode: 'ICM_setVolume',
            //     blockType: BlockType.COMMAND,
            //     text: formatMessage({
            //     id: 'MicrobitIcreate.ICM_setVolume',
            //     default: 'Set Volume [TEXT]',
            //     description: 'MicrobitIcreate.ICM_setVolume'
            //     }),
            //     arguments: {
            //     TEXT: {
            //         type: ArgumentType.NUMRES0_255,
            //         defaultValue: 128
            //     }  
            //     }
            // },
            // {
            //     opcode: 'ICM_speakerOff',
            //     blockType: BlockType.COMMAND,
            //     text: formatMessage({
            //     id: 'MicrobitIcreate.ICM_speakerOff',
            //     default: '[CHOICE] Speaker',
            //     description: 'MicrobitIcreate.ICM_speakerOff'
            //     }),
            //     arguments: {
            //     CHOICE: {
            //         type: ArgumentType.STRING,
            //         menu: 'choice_SpeakerOff'
            //     }
            //     }
            // }
            ]
            if(this.mode=='upload'){
                blocks.push(
                    {
                        blockType: BlockType.LABEL,
                        text: formatMessage({
                            id: 'MicrobitIcreate.labelSerial',
                            default: 'Serial',
                        }),
                    },
                    {
                        opcode: 'ICM_uartWrite',//串口写入
                        blockType: BlockType.COMMAND,
                        blockIconURI:icon,
                        text: formatMessage({
                            id: 'LinkBot.ICM_uartWrite',
                            default: 'serial write [TEXT]',
                        }),
                        arguments: {
                            TEXT: {
                                type: ArgumentType.STRING,
                                defaultValue:'123'
                            },
                        },
                    },
                    {
                        opcode: 'ICM_uartRead',//串口读取
                        blockType: BlockType.REPORTER,
                        blockIconURI:icon,
                        text: formatMessage({
                            id: 'LinkBot.ICM_uartRead',
                            default: 'serial read string',
                        }),
                        disableMonitor: true,
                        arguments: {
                            
                        },
                    },
        
                    {
                        opcode: 'ICM_uartReadUntil',//串口读取
                        blockType: BlockType.REPORTER,
                        blockIconURI:icon,
                        text: formatMessage({
                            id: 'LinkBot.ICM_uartReadUntil',
                            default: 'serial read until [CHOICE]',
                        }),
                        disableMonitor: true,
                        arguments: {
                            CHOICE: {
                                type: ArgumentType.STRING,
                                menu: 'choice_ReadUntil'
                            },
                        },
                    },
        
        
                    {
                        opcode: 'ICM_uartRedirect',//串口重定向
                        blockType: BlockType.COMMAND,
                        blockIconURI:icon,
                        text: formatMessage({
                            id: 'LinkBot.ICM_uartRedirect',
                            default: 'serial redirect to TX[TX] RX[RX] at baud rate[CHOICE]',
                        }),
                        arguments: {
                            TX: {
                                type: ArgumentType.STRING,
                                menu: 'choice_tx',
                                defaultValue:'p0'
                            },
                            RX: {
                                type: ArgumentType.STRING,
                                menu: 'choice_tx',
                                defaultValue:'p1'
                            },
                            CHOICE: {
                                type: ArgumentType.STRING,
                                menu: 'choice_baudrate',
                                defaultValue:'115200'
                            },
                        },
                    },
        
                    {
                        opcode: 'ICM_uartRedirectUSB',//串口重定向为USB
                        blockType: BlockType.COMMAND,
                        blockIconURI:icon,
                        text: formatMessage({
                            id: 'LinkBot.ICM_uartRedirectUSB',
                            default: 'serial redirect to USB',
                        }),
                        arguments: {
                        },
                    },
                )
            }
      return {
        id: 'MicrobitIcreate',
        name: formatMessage({
            id: 'MicrobitIcreate.name',
            default: 'Micro:bit',
            description: 'MicrobitIcreate.name'
        }), 
        color1: '#0da57a',  
        color2: '#0b8d68', 
        color3: '#097556',  
        menuIconURI: icon, 

        blocks:blocks,

        menus: {
            choice_DisplayImage: {//选择显示图像
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayImage.heart',
                            default: 'Heart'
                        }),
                        value: 'HEART'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayImage.heartSmall',
                            default: 'Small Heart'
                        }),
                        value: 'HEART_SMALL'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayImage.happy',
                            default: 'Happy'
                        }),
                        value: 'HAPPY'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayImage.smile',
                            default: 'Smile'
                        }),
                        value: 'SMILE'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayImage.sad',
                            default: 'Sad'
                        }),
                        value: 'SAD'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayImage.confused',
                            default: 'Confused'
                        }),
                        value: 'CONFUSED'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayImage.angry',
                            default: 'Angry'
                        }),
                        value: 'ANGRY'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayImage.asleep',
                            default: 'Asleep'
                        }),
                        value: 'ASLEEP'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayImage.surprised',
                            default: 'Surprised'
                        }),
                        value: 'SURPRISED'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayImage.silly',
                            default: 'Silly'
                        }),
                        value: 'SILLY'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayImage.fabulous',
                            default: 'Fabulous'
                        }),
                        value: 'FABULOUS'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayImage.yes',
                            default: 'Yes'
                        }),
                        value: 'YES'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayImage.no',
                            default: 'No'
                        }),
                        value: 'NO'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayImage.meh',
                            default: 'Indifferent'
                        }),
                        value: 'MEH'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayImage.duck',
                            default: 'Duck'
                        }),
                        value: 'DUCK'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayImage.giraffe',
                            default: 'Giraffe'
                        }),
                        value: 'GIRAFFE'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayImage.pacman',
                            default: 'Pacman'
                        }),
                        value: 'PACMAN'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayImage.ghost',
                            default: 'Ghost'
                        }),
                        value: 'GHOST'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayImage.skull',
                            default: 'Skull'
                        }),
                        value: 'SKULL'
                    }
                ]
            },
            choice_DisplayArrow :{//选择箭头图标
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayArrow.north',
                            default: 'North'
                        }),
                        value: 'Image.ARROW_N'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayArrow.north_east',
                            default: 'North East'
                        }),
                        value: 'Image.ARROW_NE'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayArrow.east',
                            default: 'East'
                        }),
                        value: 'Image.ARROW_E'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayArrow.south_east',
                            default: 'South East'
                        }),
                        value: 'Image.ARROW_SE'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayArrow.south',
                            default: 'South'
                        }),
                        value: 'Image.ARROW_S'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayArrow.south_west',
                            default: 'South West'
                        }),
                        value: 'Image.ARROW_SW'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayArrow.west',
                            default: 'West'
                        }),
                        value: 'Image.ARROW_W'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayArrow.north_west',
                            default: 'North West'
                        }),
                        value: 'Image.ARROW_NW'
                    }
                ]
            },
            choice_Button: {//选择按钮
                acceptReporters: false,
                items: ['A', 'B','A+B']
            },
            choice_pinPressed:{//选择触摸pin
                acceptReporters: false,
                items: ['P0', 'P1','P2']
            },
            choice_Gesture: {//选择手势
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_Gesture.shake',
                            default: 'Shake'
                        }),
                        value: 'shake'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_Gesture.logoUp',
                            default: 'Logo Up'
                        }),
                        value: 'up'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_Gesture.logoDown',
                            default: 'Logo Down'
                        }),
                        value: 'down'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_Gesture.faceUp',
                            default: 'Face Up'
                        }),
                        value: 'face up'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_Gesture.faceDown',
                            default: 'Face Down'
                        }),
                        value: 'face down'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_Gesture.left',
                            default: 'Left'
                        }),
                        value: 'left'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_Gesture.right',
                            default: 'Right'
                        }),
                        value: 'right'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_Gesture.freefall',
                            default: 'Free Fall'
                        }),
                        value: 'freefall'
                    },
                    {
                        text: formatMessage({
                            id: 'MicrobitIcreate.choice_Gesture.threeG',
                            default: '3G'
                        }),
                        value: '3g'
                    }
                ]
            },
            choice_PIN: {//选择pin
                acceptReporters: false,
                items: [
                    { text: "P0", value: '0' },
                    { text: "P1", value: '1' },
                    { text: "P2", value: '2' },
                    { text: "P3", value: '3' },
                    { text: "P4", value: '4' },
                    { text: "P5", value: '5' },
                    { text: "P6", value: '6' },
                    { text: "P7", value: '7' },
                    { text: "P8", value: '8' },
                    { text: "P9", value: '9' },
                    { text: "P10", value: '10' },
                    { text: "P11", value: '11' },
                    { text: "P12", value: '12' },
                    { text: "P13", value: '13' },
                    { text: "P14", value: '14' },
                    { text: "P15", value: '15' },
                    { text: "P16", value: '16' }
                ]
            },
            choice_PinType:{//选择pin类型
                acceptReporters: false,
                items: [
                    { 
                        text: formatMessage({
                            id: 'LinkBot.choice_PinType.up',
                            default: 'up'
                        }),
                        value: 'PULL_UP' 
                    },
                    { 
                        text: formatMessage({
                            id: 'LinkBot.choice_PinType.down',
                            default: 'down'
                        }),
                         value: 'PULL_DOWN' 
                    },
                    { 
                        text: formatMessage({
                            id: 'LinkBot.choice_PinType.none',
                            default: 'none'
                        }),
                        value: 'NO_PULL' 
                    }
                ]
            },
            choice_PinLevel:{//选择pin类型
                acceptReporters: false,
                items: [
                    { 
                        text: formatMessage({
                            id: 'LinkBot.choice_PinLevel.hight',
                            default: 'hight'
                        }),
                        value: '1' 
                    },
                    { 
                        text: formatMessage({
                            id: 'LinkBot.choice_PinLevel.low',
                            default: 'low'
                        }),
                         value: '0' 
                    },
                ]
            },
            choice_radioPower:{
                acceptReporters: false,
                items: ["0","1","2","3","4","5","6","7"]
            },
            
            choice_DisplayOFF: {//选择启用点阵
                acceptReporters: false,
                // items: ['启用', '停用']
                items: [
                        formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayOFF.enable',
                            default: 'Enable',
                            description: 'MicrobitIcreate.choice_DisplayOFF.enable'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_DisplayOFF.disable',
                            default: 'Disable',
                            description: 'MicrobitIcreate.choice_DisplayOFF.disable'
                        }),
                ]
            },
            
            choice_MagnetStrength:{//选择磁力
                acceptReporters: false,
                items: [
                    { text: "X", value: 'X' },
                    { text: "Y", value: 'Y' },
                    { text: "Z", value: 'Z' },
                    { text: formatMessage({
                        id: 'MicrobitIcreate.choice_MagnetStrength.strength',
                        default: 'absolute',
                        }), 
                        value: 'absolute' 
                    },
                   
                ]
            },
            
            choice_Accelerometer:{//选择加速度
                acceptReporters: false,
                items: ['X', 'Y','Z']
            },
            choice_MusicPlay:{//选择播放音乐
                acceptReporters: false,
                // items: ['鼓点叭叮', '反面角色','生日快乐','布鲁斯','追逐','哒哒哒噔','演艺人','葬礼','放克音乐','向下跳','向上跳','彩虹猫','欢乐颂','能力减弱','能力增强','前奏','笑点','PYTHON','铃声','哇哇哇哇','婚礼']
                items: [
                         formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.baDing',
                            default: 'Drum Beat',
                            description: 'MicrobitIcreate.choice_MusicPlay.baDing'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.baddy',
                            default: 'Villain',
                            description: 'MicrobitIcreate.choice_MusicPlay.baddy'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.birthday',
                            default: 'Happy Birthday',
                            description: 'MicrobitIcreate.choice_MusicPlay.birthday'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.blues',
                            default: 'Blues',
                            description极: 'MicrobitIcreate.choice_MusicPlay.blues'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.chase',
                            default: 'Chase',
                            description: 'MicrobitIcreate.choice_MusicPlay.chase'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.dadadadum',
                            default: 'Da Da Da Dum',
                            description: 'MicrobitIcreate.choice_MusicPlay.dadadadum'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.entertainer',
                            default: 'Entertainer',
                            description: 'MicrobitIcreate.choice_MusicPlay.entertainer'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.funeral',
                            default: 'Funeral',
                            description: 'MicrobitIcreate.choice_MusicPlay.funeral'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.funk',
                            default: 'Funk',
                            description: 'MicrobitIcreate.choice_MusicPlay.funk'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.jumpDown',
                            default: 'Jump Down',
                            description: 'MicrobitIcreate.choice_MusicPlay.jumpDown'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.jumpUp',
                            default: 'Jump Up',
                            description: 'MicrobitIcreate.choice_MusicPlay.jumpUp'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.nyan',
                            default: 'Nyan Cat',
                            description: 'MicrobitIcreate.choice_MusicPlay.nyan'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.ode',
                            default: 'Ode to Joy',
                            description: 'MicrobitIcreate.choice_MusicPlay.ode'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.powerDown',
                            default: 'Power Down',
                            description: 'MicrobitIcreate.choice_MusicPlay.powerDown'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.powerUp',
                            default: 'Power Up',
                            description: 'MicrobitIcreate.choice_MusicPlay.powerUp'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.prelude',
                            default: 'Prelude',
                            description: 'MicrobitIcreate.choice_MusicPlay.prelude'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.punchline',
                            default: 'Punchline',
                            description: 'MicrobitIcreate.choice_MusicPlay.punchline'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.python',
                            default: 'Python',
                            description: 'MicrobitIcreate.choice_MusicPlay.python'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.ringtone',
                            default: 'Ringtone',
                            description: 'MicrobitIcreate.choice_MusicPlay.ringtone'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.wawawawaa',
                            default: 'Wah Wah Sound',
                            description: 'MicrobitIcreate.choice_MusicPlay.wawawawaa'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_MusicPlay.wedding',
                            default: 'Wedding',
                            description: 'MicrobitIcreate.choice_MusicPlay.wedding'
                        })
                    ]
            },
            choice_AudioPlay:{//选择富有表现力声音
                acceptReporters: false,
                // items: ['咯咯笑', '快乐','你好','神秘的','难过','滑','飙升','弹簧','闪烁','打哈欠']
                items: [
                        formatMessage({
                            id: 'MicrobitIcreate.choice_AudioPlay.giggle',
                            default: 'Giggle',
                            description: 'MicrobitIcreate.choice_AudioPlay.giggle'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_AudioPlay.happy',
                            default: 'Happy',
                            description: 'MicrobitIcreate.choice_AudioPlay.happy'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_AudioPlay.hello',
                            default: 'Hello',
                            description: 'MicrobitIcreate.choice_AudioPlay.hello'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_AudioPlay.mysterious',
                            default: 'Mysterious',
                            description: 'MicrobitIcreate.choice_AudioPlay.mysterious'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_AudioPlay.sad',
                            default: 'Sad',
                            description: 'MicrobitIcreate.choice_AudioPlay.sad'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_AudioPlay.slide',
                            default: 'Slide',
                            description: 'MicrobitIcreate.choice_AudioPlay.slide'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_AudioPlay.soaring',
                            default: 'Soaring',
                            description: 'MicrobitIcreate.choice_AudioPlay.soaring'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_AudioPlay.spring',
                            default: 'Spring',
                            description: 'MicrobitIcreate.choice_AudioPlay.spring'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_AudioPlay.twinkle',
                            default: 'Twinkle',
                            description: 'MicrobitIcreate.choice_AudioPlay.twinkle'
                        }),
                        formatMessage({
                            id: 'MicrobitIcreate.choice_AudioPlay.yawn',
                            default: 'Yawn',
                            description: 'MicrobitIcreate.choice_AudioPlay.yawn'
                        })
                    ]
            },
            choice_SpeakerOff:{//选择关闭打开扬声器
                acceptReporters: false,
                // items: ['关闭', '打开']
                items: [
                        formatMessage({
                                id: 'MicrobitIcreate.choice_SpeakerOff.off',
                                default: 'Off',
                                description: 'MicrobitIcreate.choice_SpeakerOff.off'
                        }),
                        formatMessage({
                                id: 'MicrobitIcreate.choice_SpeakerOff.on',
                                default: 'On',
                                description: 'MicrobitIcreate.choice_SpeakerOff.on'
                        }),
                    ]
            },
            choice_acceleration:{//加速度的选项
                acceptReporters: false,
                items: [
                    { text: "X", value: 'X' },
                    { text: "Y", value: 'Y' },
                    { text: "Z", value: 'Z' },
                    { text: formatMessage({
                        id: 'MicrobitIcreate.choice_acceleration.absolute',
                        default: 'absolute',
                        description: 'MicrobitIcreate.choice_acceleration.absolute'
                        }),
                        value: 'Q' 
                    },
                    ]
            },

            choice_ReadUntil:{//串口读取数据直到
                acceptReporters: false,
                items: [
                    { text: "new line()", value: '\\n' },
                    ',',
                    '$',
                    ':',
                    '.',
                    '#',
                    { text: "carriage return()", value: '\\r' },
                    { text: "space", value: ' ' },
                    { text: "tab()", value: '\\t' },
                    '|',
                    ';'
                    
                    ]
            },
            choice_tx:{//串口读取数据直到
                acceptReporters: false,
                items: [
                    'p0',
                    'p1',
                    'p2',
                    'p8',
                    'p12',
                    'p13',
                    'p14',
                    'p15',
                    'p16',
                    'USB_TX',
                    'USB_RX'
                ]
            },
            choice_baudrate:{//串口读取数据直到
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
        }
      };
    }



 

    //--------------------显示---------------------------

    //显示数字
    async ICM_showNumber(args) {
        await this.ICMB_send(`display.show(${args.NUM})`) ;
        return
    }
    //显示自定义图像
    async ICM_showSelfImage(args){
        let replaced = args.MATRIX.replace(/1/g, '9');// 1替换成9
        let result = replaced.match(/.{1,5}/g).join(':');//每5个字符分割一次
        await this.ICMB_send(`display.show(Image("${result}"))`) ;
    }
    //显示图像
    async ICM_showImage(args) {
        await this.ICMB_send(`display.show(Image.${args.IMAGE})`) ;
        return
    }
    //显示字符串
    async ICM_showString(args){
        await this.ICMB_send(`display.show("${args.TEXT}")`) ;
    }
    //显示箭头
    async ICM_showArrow(args) {
        await this.ICMB_send(`display.show(${args.IMAGE})`) ;
        return
    }
    //绘图
    async ICM_showPlot(args){
        await this.ICMB_send(`display.set_pixel(${args.X},${args.Y},9)`) ;
    }
    //切换
    async ICM_showToggle(args){
        await this.ICMB_send(`display.toggle_pixel(${args.X},${args.Y})`) ;
    }
    
    //熄灭
    async ICM_showUnplot(args){
        await this.ICMB_send(`display.set_pixel(${args.X},${args.Y},0)`) ;
    }
    //是否点亮
    async ICM_showPoint(args){
        let result = await this.ICMB_read(`display.get_pixel(${args.X},${args.Y})`)
        console.log(result)
        console.log(typeof result)
        console.log(result>0)
        return result>0 ;
    }
    //清除显示
    async ICM_showClear(){
        await this.ICMB_send(`display.clear()`) ;
    }

    //-----------------------音乐----------------------------------------
    //播放
    async ICM_playSpeaker(args){
        // 映射到 0–255
        const volume = Math.round(args.VALUE * 255 / 100);
        await this.ICMB_send(`Link_buzzer.pitch(hz=${args.HZ},vol=${volume})`) ;
    }

    async ICM_stopSpeaker(){
        //import music
        await this.ICMB_send(`Link_buzzer.stop()`)
    }

   

    //-----------------------传感器----------------------------------------
    //按钮
    ICM_buttonPressed(args){
        let code='button_a.is_pressed() and button_b.is_pressed()';
        if(args.CHOICE == 'A'){
            code = `button_a.is_pressed()`
        }else if(args.CHOICE == 'B'){
            code = `button_b.is_pressed()`
        }
        return this.ICMB_read(code) ;
    }

    //磁力
    ICM_magnetStrength(args){
        return this.ICMB_read(`compass.${DICT_magnetStrengthPlay[args.CHOICE]}()`) ; 
    }
    ICM_acceleration(args){
        return this.ICMB_read(`Link_transducer.gyro_acc('${args.CHOICE}')`) ; 
    }
    //pin按下
    ICM_pinPressed(args){
        let code = `pin${args.CHOICE[args.CHOICE.length - 1]}.is_touched()`;
        // if(args.CHOICE == 'A'){
        //     code = `button_a.is_touched()`
        // }else if(args.CHOICE == 'B'){
        //     code = `button_a.is_pressed()`
        // }
        return this.ICMB_read(code) ;
    }
    //手势
    ICM_accelerometerGesture(args){
        return this.ICMB_read(`accelerometer.was_gesture("${args.CHOICE}")`);
    }
    //徽标被按下
    ICM_logoPressed(args){
        return this.ICMB_read(`pin_logo.is_touched()`);
    }

    //亮度
    ICM_light(){
        return this.ICMB_read(`display.read_light_level()`) ; 
    }
    //声音
    ICM_soundLevel(){
        return this.ICMB_read(`microphone.sound_level()`) ; 
    }
    //指南针朝向
    ICM_compassHeading(){
        return this.ICMB_read(`compass.heading()`) ; 
    }
    //温度
    ICM_temperature(){
        return this.ICMB_read(`temperature()`) ; 
    }
    
    //指南针校准
    // async ICM_compassCalibrate(){
    //     await ICMB_send(`compass.calibrate()`); 
    // }
    
    // //磁力
    // ICM_magnetStrength(args){
    //     return this.ICMB_read(`compass.${DICT_magnetStrengthPlay[args.CHOICE]}()`) ; 
    // }
    
    // //加速度
    // ICM_accelerometer(args){
    //     let code='';
    //     if(args.CHOICE == 'X'){
    //         code = "get_x"
    //     }else if(args.CHOICE == 'Y'){
    //         code = "get_y"
    //     }else if(args.CHOICE == 'Z'){
    //         code = "get_z"
    //     }
    //     return this.ICMB_read(`accelerometer.${code}()`) ; 
    // }

    // // -----------------------音乐---------------------------------------
    // //播放音乐
    // async ICM_musicPlay(args){
    //     //import music
    //     let code=DICT_musicPlay[args.CHOICE];
    //     await ICMB_send(`music.play(music.${code})`)
    // }
    // //设置播放速度
    // async ICM_setTempo(args){
    //     //import music
    //     await ICMB_send(`music.set_tempo(bpm=${args.TEXT})`)
    // }
    // //音调 频率持续播放
    // async ICM_musicPitch(args){
    //     //import music
    //     await ICMB_send(`music.pitch(${args.TEXT})`)
    // }
    // //停止持续播放
    // async ICM_musicStop(args){
    //     //import music
    //     await ICMB_send(`music.stop()`)
    // }
    // //语音 说
    // async ICM_speechSay(args){
    //     //import speech
    //     await ICMB_send(`speech.say("${args.TEXT}")`)
    // }
    // //播放富有表现力的声音
    // async ICM_audioPlay(args){
    //     let code=DICT_audioPlay[args.CHOICE];
    //     await ICMB_send(`audio.play(Sound.${code})`)
    // }
    // //音量
    // async ICM_setVolume(args){
    //     await ICMB_send(`set_volume(${args.TEXT})`)
    // }
    // //关闭、启用扬声器
    // async ICM_speakerOff(args){
    //     await ICMB_send(`speaker.${DICT_speakerPlay[args.CHOICE]}()`)
    // }

    //串口写入
    async ICM_uartWrite(args){
        await this.ICMB_send(`print(${args.TEXT})`) ;
    }
    //串口读取
    ICM_uartRead(args){
        // return this.ICMB_read(`uart.readline()`) ; 
        return this.ICMB_read(`link_uart.readline()`) ; 
    }
    ICM_uartReadUntil(args){
        return this.ICMB_read(`link_uart.readstring('${args.CHOICE}')`)
    }

    //数字写入
    async ICM_digitalWrite(args){
        await this.ICMB_send(`pin${args.CHOICE}.write_digital(${args.TEXT})`) ;
    }
   
    //模拟写入
    async ICM_analogWrite(args){
        // 映射到 0–1023
        const volume = Math.round(args.TEXT * 1023 / 100);
        await this.ICMB_send(`pin${args.CHOICE}.write_analog(${volume})`) ;
    }


    //模拟读取
    ICM_analogRead(args){
        return this.ICMB_read(`pin${args.CHOICE}.read_analog()`) ; 
    }
    //写入
    async ICM_pinInput(args){
        await this.ICMB_send(`pin${args.CHOICE}.set_pull(pin${args.CHOICE}.${args.TYPE})`) ;
    }
    //数字读取
    ICM_digitalRead(args){
        return this.ICMB_read(`pin${args.CHOICE}.read_digital()==1`) ; 
    }

    async ICM_uartRedirect(args){
        await this.ICMB_send(`link_uart.init(${args.CHOICE},'${args.TX}','${args.RX}')`) ;
    }
    async ICM_uartRedirectUSB(args){
        await this.ICMB_send(`link_uart.redirect_usb_uart()`) ;
    }

    async ICM_radioSetGroup(args){
        await this.ICMB_send(`radio.config(group=${args.TEXT},power=${args.CHOICE})`) ;
    }

    async ICM_radioSend(args){
        await this.ICMB_send(`radio.send('${args.TEXT}')`) ;
    }
    async ICM_radioRecive(){
        await this.ICMB_send(`radio.receive()`) ;
    }

    //发送
    async  ICMB_send(str){
        //console.log('[发送]', str);
        // 发送命令到主进程
        try {
            const result = await window.EditorPreload.serialSendCommand(str,"Microbit");
            //console.log('[收到返回]', result.response || result.error);
            if(!result.success){
                this.runtime.ioDevices.toast.guiToast(result.id, result.error, 'error', 2000);//
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
                console.log('[读取返回]', raw);
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
}




let DICT_musicPlay = {
    '鼓点叭叮': "BA_DING",
    'Drum Beat': "BA_DING",
    '反面角色': "BADDY",
    'Villain': "BADDY",
    '生日快乐': "BIRTHDAY",
    'Happy Birthday': "BIRTHDAY",
    '布鲁斯': "BLUES",
    'Blues': "BLUES",
    '追逐': "CHASE",
    'Chase': "CHASE",
    '哒哒哒噔': "DADADADUM",
    'Da Da Da Dum': "DADADADUM",
    '演艺人': "ENTERTAINER",
    'Entertainer': "ENTERTAINER",
    '葬礼': "FUNERAL",
    'Funeral': "FUNERAL",
    '放克音乐': "FUNK",
    'Funk': "FUNK",
    '向下跳': "JUMP_DOWN",
    'Jump Down': "JUMP_DOWN",
    '向上跳': "JUMP_UP",
    'Jump Up': "JUMP_UP",
    '彩虹猫': "NYAN",
    'Nyan Cat': "NYAN",
    '欢乐颂': "ODE",
    'Ode to Joy': "ODE",
    '能力减弱': "POWER_DOWN",
    'Power Down': "POWER_DOWN",
    '能力增强': "POWER_UP",
    'Power Up': "POWER_UP",
    '前奏': "PRELUDE",
    'Prelude': "PRELUDE",
    '笑点': "PUNCHLINE",
    'Punchline': "PUNCHLINE",
    'PYTHON': "PYTHON",
    'Python': "PYTHON",
    '铃声': "RINGTONE",
    'Ringtone': "RINGTONE",
    '哇哇哇哇': "WAWAWAWAA",
    'Wah Wah Sound': "WAWAWAWAA",
    '婚礼': "WEDDING",
    'Wedding': "WEDDING"
}

let DICT_audioPlay = {
    '咯咯笑': "GIGGLE",
    'Giggle': "GIGGLE",
    '快乐': "HAPPY",
    'Happy': "HAPPY",
    '你好': "HELLO",
    'Hello': "HELLO",
    '神秘的': "MYSTERIOUS",
    'Mysterious': "MYSTERIOUS",
    '难过': "SAD",
    'Sad': "SAD",
    '滑': "SLIDE",
    'Slide': "SLIDE",
    '飙升': "SOARING",
    'Soaring': "SOARING",
    '弹簧': "SPRING",
    'Spring': "SPRING",
    '闪烁': "TWINKLE",
    'Twinkle': "TWINKLE",
    '打哈欠': "YAWN",
    'Yawn': "YAWN"
}



let DICT_magnetStrengthPlay = {
    'X': "get_x",
    'Y': "get_y",
    'Z': "get_z",
    'absolute': "get_field_strength" // 添加英文键
}

let DICT_speakerPlay = {
    '关闭': "off",
    'Off': "off",
    '打开': "on",
    'On': "on"
}


module.exports = MicrobitIcreate;


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




//进度监听
let flashModal = null;

function showFlashModal() {
    if (flashModal) return;

    flashModal = document.createElement("div");
    flashModal.id = "flash-modal";
    flashModal.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.55);
        backdrop-filter: blur(3px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999999;
        opacity: 0;
        transition: opacity .25s ease;
    `;

    flashModal.innerHTML = `
        <div id="flash-box" style="
            width: 380px;
            padding: 26px 28px;
            background: #1e1e1e;
            border-radius: 14px;
            text-align: center;
            color: white;
            position: relative;
            box-shadow: 0 8px 25px rgba(0,0,0,0.35);
            animation: flashPop .3s ease;
        ">

            <style>
                @keyframes flashPop {
                    0% { transform: scale(0.92); opacity: .3; }
                    100% { transform: scale(1); opacity: 1; }
                }
                #flash-close:hover { background: rgba(255,255,255,0.2); }
            </style>

            <div id="flash-close" style="
                display:none;
                position:absolute;
                top:10px;
                right:10px;
                width:26px;
                height:26px;
                border-radius:6px;
                cursor:pointer;
                font-size:20px;
                color:#ccc;
                line-height:26px;
                text-align:center;
                transition: .2s;
            ">✖</div>

            <div id="flash-title" style="
                margin-bottom: 15px;
                font-size: 17px;
                font-weight: 600;
                letter-spacing: 0.3px;
            ">Downloading Firmware...</div>

            <div style="
                width: 100%;
                height: 12px;
                background: rgba(255,255,255,0.15);
                border-radius: 6px;
                overflow: hidden;
                margin-bottom: 12px;
            ">
                <div id="flash-bar" style="
                    height: 100%;
                    width: 0%;
                    background: linear-gradient(90deg,#4CAF50,#66cc6a);
                    transition: width .2s ease;
                "></div>
            </div>

            <div id="flash-percent" style="
                font-size: 14px;
                opacity: .9;
            ">0%</div>

            <!-- 错误提示 -->
            <div id="flash-error" style="
                display:none;
                margin-top:18px;
                padding:10px 12px;
                background: rgba(255,60,60,0.2);
                border: 1px solid rgba(255,60,60,0.4);
                border-radius: 8px;
                color:#ff6666;
                font-size: 14px;
                line-height: 1.6;
            "></div>

        </div>
    `;

    document.body.appendChild(flashModal);

    // 淡入
    requestAnimationFrame(() => {
        flashModal.style.opacity = "1";
    });

    // 关闭按钮
    document.getElementById("flash-close").onclick = () => {
        //window.close();
        hideFlashModal();
    };
}

// 更新进度
function updateFlashProgress(p) {
    showFlashModal();
    document.getElementById("flash-bar").style.width = `${p}%`;
    document.getElementById("flash-percent").textContent = `${p}%`;
}

// 显示错误
function showFlashError(msg) {
    showFlashModal();

    const errBox = document.getElementById("flash-error");
    errBox.style.display = "block";
    errBox.textContent = msg;

    document.getElementById("flash-title").textContent = "ERROR";
    document.getElementById("flash-bar").style.background = "#ff3333";

    document.getElementById("flash-close").style.display = "block";
}

// 隐藏
function hideFlashModal() {
    if (flashModal) {
        flashModal.style.opacity = "0";
        setTimeout(() => {
            flashModal.remove();
            flashModal = null;
        }, 250);
    }
}

// window.EditorPreload.onFlashProgress(updateFlashProgress);//更新
// window.EditorPreload.onFlashError(showFlashError);//报错
// window.EditorPreload.onFlashDone(hideFlashModal);//结束
