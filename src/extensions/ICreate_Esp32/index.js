// link-bot _Power
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');
// const icon = require('./battery.png');

 
class Esp32S4S {
    
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
      return {
        id: 'Esp32S4S',
        name: formatMessage({
            id: 'Esp32S4S.name',
            default: 'Esp32',
        }),
        color1: '#00897B',  // 主颜色
        color2: '#00796D',  // 次颜色（渐变）
        color3: '#00695F',  // 边框颜色
        // menuIconURI: icon, 

        //模块 
        blocks: [

            // {
            //     blockType: BlockType.LABEL,
            //     text: formatMessage({
            //         id: 'Esp32S4S.display',
            //         default: 'Display',
            //     }),
            // },
            // {
            //     opcode: 'clearScreen',//初始化oled
            //     blockType: BlockType.COMMAND,
            //     text: formatMessage({
            //         id: 'Esp32S4S.clearScreen',
            //         default: 'clear screen',
            //         description: 'Esp32S4S.clearScreen'
            //     }),
            //     arguments: {
            //     }
            // },
            // {
            //     opcode: 'setScreenColor',//初始化oled
            //     blockType: BlockType.COMMAND,
            //     text: formatMessage({
            //         id: 'Esp32S4S.setScreenColor',
            //         default: 'set screen color [COLOR]',
            //         description: 'Esp32S4S.setScreenColor'
            //     }),
            //     arguments: {
            //         COLOR: {
            //             type: ArgumentType.COLOR,
            //             defaultValue:'#FF0000'
            //         }
            //     }
            // },

            // {
            //     opcode: 'displayText',//初始化oled
            //     blockType: BlockType.COMMAND,
            //     text: formatMessage({
            //         id: 'Esp32S4S.displayText',
            //         default: 'display text [TEXT] with color [COLOR]',
            //         description: 'Esp32S4S.displayText'
            //     }),
            //     arguments: {
            //         TEXT: {
            //             type: ArgumentType.STRING,
            //             defaultValue:'Hello LinkBot'
            //         },
            //         COLOR: {
            //             type: ArgumentType.COLOR,
            //             defaultValue:'#FF0000'
            //         }
            //     }
            // },
            // {
            //     opcode: 'drawPixel',//初始化oled
            //     blockType: BlockType.COMMAND,
            //     text: formatMessage({
            //         id: 'Esp32S4S.drawPixel',
            //         default: 'draw pixel at x[X] y[Y]',
            //         description: 'Esp32S4S.drawPixel'
            //     }),
            //     arguments: {
            //         X: {
            //             type: ArgumentType.STRING,
            //             defaultValue:0
            //         },
            //         Y: {
            //             type: ArgumentType.STRING,
            //             defaultValue:0
            //         }
            //     }
            // },

            // {
            //     opcode: 'drawLine',//初始化oled
            //     blockType: BlockType.COMMAND,
            //     text: formatMessage({
            //         id: 'Esp32S4S.drawLine',
            //         default: 'draw line X1[X1]Y1[Y1] X2[X2]Y2[Y2]',
            //         description: 'Esp32S4S.drawLine'
            //     }),
            //     arguments: {
            //         X1: {
            //             type: ArgumentType.STRING,
            //             defaultValue:0
            //         },
            //         Y1: {
            //             type: ArgumentType.STRING,
            //             defaultValue:0
            //         },
            //         X2: {
            //             type: ArgumentType.STRING,
            //             defaultValue:1
            //         },
            //         Y2: {
            //             type: ArgumentType.STRING,
            //             defaultValue:1
            //         }
            //     }
            // },

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'Esp32S4S.sensor',
                    default: 'Sensor',
                }),
            },
            {
                opcode: 'buttonPressed',
                blockType: BlockType.BOOLEAN,
                disableMonitor: true,
                // blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4S.buttonPressed',
                    default: '[CHOICE] button pressed?',
                }),
                arguments:{
                    CHOICE:{
                        type: ArgumentType.STRING,
                        menu:"BUTTON_MENU"
                    }
                }
            },
            {
                opcode: 'soundLevel',
                blockType: BlockType.REPORTER,
                disableMonitor: true,
                // blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4S.soundLevel',
                    default: 'sound level',
                }),
                arguments:{
                   
                }
            },

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'Esp32S4S.Microphone',
                    default: 'Microphone',
                }),
            },

            {
                opcode: 'startRecording',//开始录音
                blockType: BlockType.COMMAND,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.startRecording',
                    default: 'start recording for [NUM] seconds',
                    description: 'Esp32S4S.startRecording'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.STRING,
                        defaultValue: 5
                    }
                }
            },

            {
                opcode: 'playRecording',//播放录音
                blockType: BlockType.COMMAND,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.playRecording',
                    default: 'play recording',
                    description: 'Esp32S4S.playRecording'
                }),
                arguments: {
                }
            },

            {
                opcode: 'stopPlayRecording',//停止播放录音
                blockType: BlockType.COMMAND,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.stopPlayRecording',
                    default: 'stop play recording',
                    description: 'Esp32S4S.stopPlayRecording'
                }),
                arguments: {
                }
            },

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'Esp32S4S.Speaker',
                    default: 'Speaker',
                }),
            },

            {
                opcode: 'getAudioFile',//获取音频文件
                blockType: BlockType.COMMAND,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.getAudioFile',
                    default: 'get audio file [TEXT] from sd card',
                    description: 'Esp32S4S.getAudioFile'
                }),
                arguments: {
                    TEXT: {
                        type: ArgumentType.STRING,
                        defaultValue: ''
                    }
                }
            },

            {
                opcode: 'setVolume',//设置播放声音大小
                blockType: BlockType.COMMAND,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.setVolume',
                    default: 'set output volume to [NUM]',
                    description: 'Esp32S4S.setVolume'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.STRING,
                        defaultValue: 5
                    }
                }
            },

            {
                opcode: 'playAudio',//播放音频
                blockType: BlockType.COMMAND,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.playAudio',
                    default: 'play audio',
                    description: 'Esp32S4S.playAudio'
                }),
                arguments: {
                    
                }
            },
            {
                opcode: 'stopAudio',//停止播放音频
                blockType: BlockType.COMMAND,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.stopAudio',
                    default: 'stop audio',
                    description: 'Esp32S4S.stopAudio'
                }),
                arguments: {
                    
                }
            },

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'Esp32S4S.Pins',
                    default: 'Pins',
                }),
            },

            {
                opcode: 'setDigital',//设置数字引脚输出为高低电平
                blockType: BlockType.COMMAND,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.setDigital',
                    default: 'set digital pin [PIN] output as [CHOICE]',
                    description: 'Esp32S4S.setDigital'
                }),
                arguments: {
                    PIN: {
                        type: ArgumentType.STRING,
                        menu: 'DIGITAL_PIN',
                        defaultValue:'0'
                    },
                    CHOICE: {
                        type: ArgumentType.STRING,
                        menu: 'DIGITAL_HIGHLOW'
                    },
                }
            },

            {
                opcode: 'setPwm',//设置pwm引脚
                blockType: BlockType.COMMAND,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.setPwm',
                    default: 'set pwm pin [PIN] output as [NUM]',
                    description: 'Esp32S4S.setPwm'
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
                opcode: 'readDigitalPin',//读取数字引脚
                blockType: BlockType.BOOLEAN,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.readDigitalPin',
                    default: 'read status of digital pin [PIN]',
                    description: 'Esp32S4S.readDigitalPin'
                }),
                disableMonitor: true,
                arguments: {
                    PIN: {
                        type: ArgumentType.STRING,
                        menu: 'DIGITAL_PIN',
                        defaultValue:'0'
                    },
                }
            },

            {
                opcode: 'readAnalogPin',//读取模拟引脚
                blockType: BlockType.REPORTER,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.readAnalogPin',
                    default: 'read analog pin [PIN]',
                    description: 'Esp32S4S.readAnalogPin'
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
                opcode: 'setInputPull',//将所选引脚配置为输入模式
                blockType: BlockType.COMMAND,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.setInputPull',
                    default: 'set pin [PIN] to input pull [CHOICE]',
                    description: 'Esp32S4S.setInputPull'
                }),
                arguments: {
                    PIN: {
                        type: ArgumentType.STRING,
                        menu: 'DIGITAL_PIN',
                        defaultValue:'0'
                    },
                    CHOICE: {
                        type: ArgumentType.STRING,
                        menu: 'INPUT_PULL'
                    },
                }
            },

            {
                opcode: 'readPulse',//测量所选引脚上高电平或低电平脉冲的持续时间
                blockType: BlockType.REPORTER,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.readPulse',
                    default: 'read pulse pin [CHOICE] timeout [NUM]',
                    description: 'Esp32S4S.readPulse'
                }),
                disableMonitor: true,
                arguments: {
                    CHOICE: {
                        type: ArgumentType.STRING,
                        menu: 'DIGITAL_PIN',
                        defaultValue:'0'
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
                    id: 'Esp32S4S.Timer',
                    default: 'Timer',
                }),
            },

            {
                opcode: 'getTimer',//获取时间值
                blockType: BlockType.REPORTER,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.getTimer',
                    default: 'get timer value',
                    description: 'Esp32S4S.getTimer'
                }),
                disableMonitor: true,
                arguments: {
                  
                }
            },

            {
                opcode: 'resetTimer',//重置计时器
                blockType: BlockType.COMMAND,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.resetTimer',
                    default: 'reset timer',
                    description: 'Esp32S4S.resetTimer'
                }),
                arguments: {
                  
                }
            },

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'Esp32S4S.Serial',
                    default: 'Serial',
                }),
            },

            {
                opcode: 'writeText',//写入文本
                blockType: BlockType.COMMAND,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.writeText',
                    default: 'write [TEXT] to serial port',
                    description: 'Esp32S4S.writeText'
                }),
                arguments: {
                    TEXT: {
                        type: ArgumentType.STRING,
                        defaultValue:'hello'
                    },
                }
            },

            {
                opcode: 'readableBytes',//读取字节
                blockType: BlockType.REPORTER,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.readableBytes',
                    default: 'readable bytes from serial port',
                    description: 'Esp32S4S.readableBytes'
                }),
                disableMonitor: true,
                arguments: {
                  
                }
            },

            {
                opcode: 'readByte',//串口读取单个字节
                blockType: BlockType.REPORTER,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.readByte',
                    default: 'read a byte from serial port',
                    description: 'Esp32S4S.readByte'
                }),
                disableMonitor: true,
                arguments: {
                  
                }
            },

            {
                opcode: 'readString',//串口读取字符串
                blockType: BlockType.REPORTER,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.readString',
                    default: 'serial read string',
                    description: 'Esp32S4S.readString'
                }),
                disableMonitor: true,
                arguments: {
                  
                }
            },

            {
                opcode: 'readUntil',//读取数据直到满足条件
                blockType: BlockType.REPORTER,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.readUntil',
                    default: 'serial read until [CHOICE]',
                    description: 'Esp32S4S.readUntil'
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
                opcode: 'setBaud',
                blockType: BlockType.COMMAND,
                // blockIconURI:arduinoSvg,
                text: formatMessage({
                    id: 'Esp32S4S.setBaud',
                    default: 'set serial baud rate to [CHOICE]',
                    description: 'Esp32S4S.setBaud'
                }),
                arguments: {
                    CHOICE: {
                        type: ArgumentType.STRING,
                        menu:'BAUD_RATE'
                    },
                }
            },

            // {
            //     opcode: 'Linkbot_power_external',//电池外部
            //     blockType: BlockType.REPORTER,
            //     disableMonitor: true,
            //     // blockIconURI:icon,
            //     text: formatMessage({
            //         id: 'Linkbot.Linkbot_power_external',
            //         default: 'read the external battery voltage',
            //     }),
            // },
        
        ],

        menus: {
            BUTTON_MENU: {//按钮选项
                acceptReporters: false,
                items: [
                    { text: "A", value: '0' },
                    { text: "B", value: '1' },
                    // { text: "A+B", value: '2' }
                ]
            },
            DIGITAL_PIN: {//数字引脚
                acceptReporters: false,
                items: [
                    { text: "A0", value: '0' },
                    { text: "A1", value: '1' },
                    { text: "A2", value: '2' },
                    { text: "A3", value: '3' },
                    { text: "A4", value: '4' },
                    { text: "A5", value: '5' },
                    { text: "D0", value: '6' },
                    { text: "D1", value: '7' },
                    { text: "D2", value: '8' },
                    { text: "D3", value: '9' },
                    { text: "D4", value: '10' },
                    { text: "D5", value: '11' },
                    { text: "D6", value: '12' },
                    { text: "D7", value: '13' },
                    { text: "D8", value: '14' },
                    { text: "D9", value: '15' },
                    { text: "D10", value: '16' },
                    { text: "D11", value: '17' },
                    { text: "D12", value: '18' },
                    { text: "D13", value: '19' },
                    { text: "P003", value: '20' },
                    { text: "P004", value: '21' },
                    { text: "P011", value: '22' },
                    { text: "P012", value: '23' },
                    { text: "P013", value: '24' },
                    { text: "P015", value: '25' },
                    { text: "P113", value: '26' },
                    { text: "P204", value: '27' },
                    { text: "P400", value: '28' },
                    { text: "P401", value: '29' },
                    { text: "P408", value: '30' },
                ]
            },
            DIGITAL_HIGHLOW: {//高低电平*
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'Esp32S4S.setDigital.DIGITAL_HIGHLOW.high',
                            default: 'high',
                            description: 'Esp32S4S.setDigital.DIGITAL_HIGHLOW.high'
                        }),
                        value: '0' 
                    },
                    { 
                        text: formatMessage({
                            id: 'Esp32S4S.setDigital.DIGITAL_HIGHLOW.low',
                            default: 'low',
                            description: 'Esp32S4S.setDigital.DIGITAL_HIGHLOW.low'
                        }),
                        value: '1'
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
                            id: 'Esp32S4S.setInputPull.INPUT_PULL.UP',
                            default: 'UP',
                            description: 'Esp32S4S.setInputPull.INPUT_PULL.UP'
                        }),
                        value: '0' 
                    },
                    {
                        text: formatMessage({
                            id: 'Esp32S4S.setInputPull.INPUT_PULL.DOWN',
                            default: 'DOWN',
                            description: 'Esp32S4S.setInputPull.INPUT_PULL.DOWN'
                        }),
                        value: '1' 
                    },
                    {
                        text: formatMessage({
                            id: 'Esp32S4S.setInputPull.INPUT_PULL.NONE',
                            default: 'NONE',
                            description: 'Esp32S4S.setInputPull.INPUT_PULL.NONE'
                        }),
                        value: '2' 
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
        }

      };
    }
    
    buttonPressed(args){

    }
    soundLevel(args){

    }
    startRecording(args){

    }
    playRecording(args){

    }
    stopPlayRecording(args){

    }
    getAudioFile(args){

    }
    setVolume(args){

    }
    playAudio(args){

    }
    stopAudio(args){

    }
    setDigital(args){

    }
    setPwm(args){

    }
    readDigitalPin(args){

    }
    readAnalogPin(args){
        
    }
    setInputPull(args){

    }
    readPulse(args){

    }
    getTimer(args){

    }
    resetTimer(args){

    }
    writeText(args){

    }
    readableBytes(args){

    }
    readByte(args){

    }
    readString(args){

    }
    readUntil(args){

    }
    setBaud(args){
        
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

module.exports = Esp32S4S;