// link-bot _Power
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');
const icon = require('./ESP32.svg');

 
class Esp32S4S {
    
    constructor(runtime){
        this.runtime=runtime

        console.log(this.runtime)
        this.runtime.on('VM_UPDATE_MODE', this.updateMode.bind(this));
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
                    id: 'Esp32S4S.sensor',
                    default: 'Sensor',
                }),
            },
            {
                opcode: 'buttonPressed',
                blockType: BlockType.BOOLEAN,
                disableMonitor: true,
                blockIconURI:icon,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4S.startRecording',
                    default: 'Record [NUM]s as [FILENAME] using [AUDIOSOURCE]',
                    description: 'Esp32S4S.startRecording'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMRES1_60,
                        defaultValue: 5
                    },
                    FILENAME: {
                        type: ArgumentType.STRING,
                        defaultValue: 'test'
                    },
                    AUDIOSOURCE:{
                        type: ArgumentType.STRING,
                        menu:"AUDIOSOURCE_MENU"
                    },
                }
            },

            {
                opcode: 'playRecording',//播放录音
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4S.playRecording',
                    default: 'play recording [FILENAME] using [AUDIOSOURCE]',
                    description: 'Esp32S4S.playRecording'
                }),
                arguments: {
                    FILENAME: {
                        type: ArgumentType.STRING,
                        defaultValue: 'test'
                    },
                    AUDIOSOURCE:{
                        type: ArgumentType.STRING,
                        menu:"AUDIOSOURCE_MENU"
                    },
                }
            },

            {
                opcode: 'stopPlayRecording',//停止播放录音
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
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

            // {
            //     opcode: 'getAudioFile',//获取音频文件
            //     blockType: BlockType.COMMAND,
            //     blockIconURI:icon,
            //     text: formatMessage({
            //         id: 'Esp32S4S.getAudioFile',
            //         default: 'get audio file [TEXT] from sd card',
            //         description: 'Esp32S4S.getAudioFile'
            //     }),
            //     arguments: {
            //         TEXT: {
            //             type: ArgumentType.STRING,
            //             defaultValue: ''
            //         }
            //     }
            // },

            {
                opcode: 'setVolume',//设置播放声音大小
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4S.setVolume',
                    default: 'set output volume to [NUM]',
                    description: 'Esp32S4S.setVolume'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMRES0_100,
                        defaultValue: 5
                    }
                }
            },

            {
                opcode: 'playAudio',//播放音频
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4S.playAudio',
                    default: 'play audio [TEXT]',
                    description: 'Esp32S4S.playAudio'
                }),
                arguments: {
                    TEXT: {
                        type: ArgumentType.STRING,
                        defaultValue: ''
                    }
                }
            },
            {
                opcode: 'stopAudio',//停止播放音频
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
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
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4S.setDigital',
                    default: 'set digital pin [PIN] output as [CHOICE]',
                    description: 'Esp32S4S.setDigital'
                }),
                arguments: {
                    PIN: {
                        type: ArgumentType.STRING,
                        menu: 'DIGITAL_PIN',
                        defaultValue:'IO0'
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
                blockIconURI:icon,
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
                        type: ArgumentType.NUMBER,
                        defaultValue:255
                    },
                }
            },

            {
                opcode: 'readDigitalPin',//读取数字引脚
                blockType: BlockType.BOOLEAN,
                blockIconURI:icon,
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
                        defaultValue:'IO0'
                    },
                }
            },

            {
                opcode: 'readAnalogPin',//读取模拟引脚
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
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
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4S.setInputPull',
                    default: 'set pin [PIN] to input pull [CHOICE]',
                    description: 'Esp32S4S.setInputPull'
                }),
                arguments: {
                    PIN: {
                        type: ArgumentType.STRING,
                        menu: 'DIGITAL_PIN',
                        defaultValue:'IO0'
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
                blockIconURI:icon,
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
                        defaultValue:'IO0'
                    },
                    NUM: {
                        type: ArgumentType.NUMBER,
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
                blockIconURI:icon,
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
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4S.resetTimer',
                    default: 'reset timer',
                    description: 'Esp32S4S.resetTimer'
                }),
                arguments: {
                  
                }
            },
        ]
        if(this.mode=='upload'){
            blocks.push(
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
            )
        }
      return {
        id: 'Esp32S4S',
        name: formatMessage({
            id: 'Esp32S4S.name',
            default: 'Esp32',
        }),
        color1: '#00897B',  // 主颜色
        color2: '#00796D',  // 次颜色（渐变）
        color3: '#00695F',  // 边框颜色
        menuIconURI: icon, 

        //模块 
        blocks: blocks,

        menus: {
            BUTTON_MENU: {//按钮选项
                acceptReporters: false,
                items: [
                    { text: "A", value: 'A' },
                    { text: "B", value: 'B' },
                    // { text: "A+B", value: '2' }
                ]
            },
            DIGITAL_PIN: {//数字引脚
                acceptReporters: false,
                items: [
                    { text: "0", value: 'IO0' },
                    { text: "8", value: 'IO8' },
                    { text: "9", value: 'IO9' },
                    { text: "17", value: 'IO17' },
                    { text: "18", value: 'IO18' },
                    { text: "19", value: 'IO19' },
                    { text: "20", value: 'IO20' },
                    { text: "35", value: 'IO35' },
                    { text: "36", value: 'IO36' },
                    { text: "37", value: 'IO37' },
                    { text: "46", value: 'IO46' },
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
                        value: '1' 
                    },
                    { 
                        text: formatMessage({
                            id: 'Esp32S4S.setDigital.DIGITAL_HIGHLOW.low',
                            default: 'low',
                            description: 'Esp32S4S.setDigital.DIGITAL_HIGHLOW.low'
                        }),
                        value: '0'
                    }
                ]
            },

            PWM_PIN: {//PWM端口
                acceptReporters: false,
                items: [
                    { text: "0", value: 'IO0' },
                    { text: "8", value: 'IO8' },
                    { text: "9", value: 'IO9' },
                    { text: "17", value: 'IO17' },
                    { text: "18", value: 'IO18' },
                    { text: "19", value: 'IO19' },
                    { text: "20", value: 'IO20' },
                    { text: "35", value: 'IO35' },
                    { text: "36", value: 'IO36' },
                    { text: "37", value: 'IO37' },
                    { text: "46", value: 'IO46' },
                ]
            },
            ANALOG_PIN: {//ANALOG端口
                acceptReporters: false,
                items: [
                    { text: "8", value: 'IO8' },
                    { text: "9", value: 'IO9' },
                    { text: "17", value: 'IO17' },
                    { text: "18", value: 'IO18' },
                    { text: "19", value: 'IO19' },
                    { text: "20", value: 'IO20' },
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

            AUDIOSOURCE_MENU: {//选择音频位置
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'Esp32S4S.startRecording.AUDIOSOURCE.SD',
                            default: 'SD card audio',
                            description: 'Esp32S4S.startRecording.AUDIOSOURCE.SD'
                        }),
                        value: '0' 
                    },
                    {
                        text: formatMessage({
                            id: 'Esp32S4S.startRecording.AUDIOSOURCE.LOCAL',
                            default: 'Local audio',
                            description: 'Esp32S4S.startRecording.AUDIOSOURCE.LOCAL'
                        }),
                        value: '1' 
                    },
                ]
            },

            READ_UNTIL:{//串口读取数据直到
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
    
    async buttonPressed(args){
        return this.ICE_read_wifi(`button.is_pressed(button.${args.CHOICE})`)
    }
    async soundLevel(args){
        return this.ICE_read(`audio.get_sound_level()`)
    }
    async startRecording(args){
        let position=Number(args.AUDIOSOURCE)
        if(position === 0){
            await this.ICE_send(`audio.start_recording("sd/${args.FILENAME}.wav",${args.NUM})`)
        }else{
            await this.ICE_send(`audio.start_recording("${args.FILENAME}.wav",${args.NUM})`)
        }
        
    }
    async playRecording(args){
        let position=Number(args.AUDIOSOURCE)
        if(position === 0){
            await this.ICE_send(`audio.play_recording("sd/${args.FILENAME}.wav")`)
        }else{
            await this.ICE_send(`audio.play_recording("${args.FILENAME}.wav")`)
        }
        
    }
    async stopPlayRecording(args){
        await this.ICE_send(`audio.stop_sounds()`)
    }
    getAudioFile(args){

    }
    async setVolume(args){
        await this.ICE_send(`audio.set_volume(${args.NUM})`)
    }
    async playAudio(args){
        await this.ICE_send(`audio.play_audio(${args.TEXT})`)
    }
    async stopAudio(args){
        await this.ICE_send(`audio.stop_sounds()`)
    }
    async setDigital(args){
        await this.ICE_send(`esp_pin.digitalWrite(${args.PIN},${Number(args.CHOICE)})`)
    }
    async setPwm(args){
        await this.ICE_send(`esp_pin.analogWrite(${args.PIN},${args.NUM})`)
    }
    async readDigitalPin(args){
        return this.ICE_read(`esp_pin.digitalRead(${args.PIN})`)
    }
    async readAnalogPin(args){
        return this.ICE_read(`esp_pin.analogRead(${args.PIN})`)
    }
    setInputPull(args){

    }
    async readPulse(args){
        return this.ICE_read(`esp_pin.pulseIn(${args.CHOICE},1,${args.NUM})`)
    }
    async getTimer(args){
        return this.ICE_read(`system.tick_get()`)
    }
    async resetTimer(args){
        await this.ICE_send(`tick_reset()`)
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
    async ICE_send(str){
        console.log('[发送]', str);
        // 发送命令到主进程
        try {
            const result = await window.EditorPreload.serialSendCommand(str,"Microbit");
            console.log('[收到返回]', result.response || result.error);
            if(!result.success){
                // showToast(result.error)
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
                // showToast(result.error)
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
    // wifi执行数据
    // async ICE_send_wifi(str){
    //     try {
    //         const result = await this.runtime.ioDevices.wifiIOT.readData(str,this.runtime.connKey);
    //         if(!result.success){
    //             this.runtime.ioDevices.toast.guiToast(result.id, result.error, 'error', 2000);
    //         }
    //         return result;
    //     } catch (e) {
    //         console.error('[读取异常]', e);
    //         return null;
    //     }
    // }

    

}



module.exports = Esp32S4S;