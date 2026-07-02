// link-bot _Power
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');
const icon = require('./ESP32.svg');

 
class Esp32S4SMore {
    
    constructor(runtime){
        this.runtime=runtime

        console.log(this.runtime)
        // this.runtime.on('VM_UPDATE_MODE', this.updateMode.bind(this));
        // this.mode=this.runtime.runMode
        
        this.runtime.emit('ADD_VARIABLE_ESPMORE','sta_record');
 
    }
    // updateMode(obj){
    //     console.log(obj)
    //     this.mode=obj
    //     setTimeout(() => {
    //         this.runtime.extensionManager.refreshBlocks();
    //     }, 10);
    // }

    getInfo() {

      return {
        id: 'Esp32S4SMore',
        name: formatMessage({
            id: 'Esp32S4SMore.name',
            default: 'Esp32 More',
        }),
        color1: '#00897B',  // 主颜色
        color2: '#00796D',  // 次颜色（渐变）
        color3: '#00695F',  // 边框颜色
        menuIconURI: icon, 

        //模块 
        blocks: [
            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'Esp32S4SMore.WLANSTA',
                    default: 'WLAN STA',
                    description: 'Esp32S4SMore.WLANSTA'
                }),
            },
            {
                opcode: 'initWlanSta',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.initWlanSta',
                    default: 'init WLAN STA',
                    description: 'Esp32S4SMore.initWlanSta'
                }),
                arguments:{
                    
                }
            },
            '---',
            {
                opcode: 'connectStatus',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.connectStatus',
                    default: 'connect status [ONE]',
                    description: 'Esp32S4SMore.connectStatus'
                }),
                arguments:{
                    ONE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_WLAN_STATUS',
                    }
                },
                disableMonitor: true
            },
            '---',
            {
                opcode: 'getRssi',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.getRssi',
                    default: 'WLAN STA get RSSI',
                    description: 'Esp32S4SMore.getRssi'
                }),
                arguments:{
                   
                },
                disableMonitor: true
            },
            {
                opcode: 'wlanGetConnectStatus',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.wlanGetConnectStatus',
                    default: 'WLAN STA get connect status',
                    description: 'Esp32S4SMore.wlanGetConnectStatus'
                }),
                arguments:{
                   
                },
                disableMonitor: true
            },
            {
                opcode: 'wlanStaIsConnected',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.wlanStaIsConnected',
                    default: 'WLAN STA is connected',
                    description: 'Esp32S4SMore.wlanStaIsConnected'
                }),
                arguments:{
                   
                },
                disableMonitor: true
            },
            '---',
            {
                opcode: 'staActive',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.staActive',
                    default: 'WLAN STA active [ONE]',
                    description: 'Esp32S4SMore.staActive'
                }),
                arguments:{
                    ONE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_WLAN_ACTIVE',
                    }
                }
            },

            {
                opcode: 'staSetIdPass',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.staSetIdPass',
                    default: 'WLAN STA connect to SSID [ssid] password [pass]',
                    description: 'Esp32S4SMore.staSetIdPass'
                }),
                arguments:{
                    ssid:{
                        type: ArgumentType.STRING,
                    },
                    pass:{
                        type: ArgumentType.STRING,
                    }
                }
            },
            {
                opcode: 'staDisconnect',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.staDisconnect',
                    default: 'WLAN STA disconnect',
                    description: 'Esp32S4SMore.staDisconnect'
                }),
                arguments:{
                  
                }
            },

            '---',
            {
                opcode: 'staGetIp',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.staGetIp',
                    default: 'WLAN STA get local IP',
                    description: 'Esp32S4SMore.staGetIp'
                }),
                arguments:{
                   
                },
                disableMonitor: true
            },
            {
                opcode: 'staGetsubnet',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.staGetsubnet',
                    default: 'WLAN STA get subnet',
                    description: 'Esp32S4SMore.staGetsubnet'
                }),
                arguments:{
                   
                },
                disableMonitor: true
            },

            {
                opcode: 'staGetGateway',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.staGetGateway',
                    default: 'WLAN STA get gateway',
                    description: 'Esp32S4SMore.staGetGateway'
                }),
                arguments:{
                   
                },
                disableMonitor: true
            },
            {
                opcode: 'staGetReconnects',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.staGetReconnects',
                    default: 'WLAN STA get reconnects(return init)',
                    description: 'Esp32S4SMore.staGetReconnects'
                }),
                arguments:{
                   
                },
                disableMonitor: true
            },
            {
                opcode: 'staGetTxPower',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.staGetTxPower',
                    default: 'WLAN STA get tx power(return float)',
                    description: 'Esp32S4SMore.staGetTxPower'
                }),
                arguments:{
                   
                },
                disableMonitor: true
            },

            '---',
            {
                opcode: 'staSetDhcp',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.staSetDhcp',
                    default: 'WLAN STA set DHCP hostname to [NAME]',
                    description: 'Esp32S4SMore.staSetDhcp'
                }),
                arguments:{
                    NAME:{
                        type: ArgumentType.STRING,
                    }
                }
            },
            {
                opcode: 'staSetReconnects',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.staSetReconnects',
                    default: 'WLAN STA set reconnects to [NUM] (0-254)',
                    description: 'Esp32S4SMore.staSetReconnects'
                }),
                arguments:{
                    NUM:{
                        type: ArgumentType.NUMRES0_255,
                    }
                }
            },
            {
                opcode: 'staSetTxPower',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.staSetTxPower',
                    default: 'WLAN STA set tx power to [POWER]',
                    description: 'Esp32S4SMore.staSetTxPower'
                }),
                arguments:{
                    POWER:{
                        type: ArgumentType.STRING,
                        menu:'MENU_WLAN_POWER',
                    }
                }
            },

            '---',
            {
                opcode: 'staScan',
                blockType: BlockType.LOOP,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.staScan',
                    default: 'for each item [VAR] in list WLAN STA scan do',
                    description: 'Esp32S4SMore.staScan'
                }),
                arguments:{
                    VAR:{
                        type: ArgumentType.VARIABLE,
                        defaultValue:'sta_record'
                    }
                    
                }
            },
            {
                opcode: 'staGetInfo',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.staGetInfo',
                    default: 'get [VAR] AP [INFO]',
                    description: 'Esp32S4SMore.staGetInfo'
                }),
                arguments:{
                    VAR:{
                        type: ArgumentType.VARIABLE,
                        defaultValue:'sta_record'
                    },
                    INFO:{
                        type: ArgumentType.NUMBER,
                        menu:'MENU_WLAN_INFO'
                    },
                    
                },
                disableMonitor: true
            },

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'Esp32S4SMore.WLANAP',
                    default: 'WLAN AP',
                    description: 'Esp32S4SMore.WLANAP'
                }),
            },
            {
                opcode: 'initWlanAp',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.initWlanAp',
                    default: 'init WLAN AP',
                    description: 'Esp32S4SMore.initWlanAp'
                }),
                arguments:{
                    
                }
            },
            {
                opcode: 'apIsConnected',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.apIsConnected',
                    default: 'WLAN AP is connected',
                    description: 'Esp32S4SMore.apIsConnected'
                }),
                arguments:{
                    
                },
                disableMonitor:true
            },
            {
                opcode: 'apGetSsid',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.apGetSsid',
                    default: 'WLAN AP get SSID',
                    description: 'Esp32S4SMore.apGetSsid'
                }),
                arguments:{
                    
                },
                disableMonitor:true
            },
            {
                opcode: 'apConfigWifi',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.apConfigWifi',
                    default: 'init WLAN AP',
                    description: 'Esp32S4SMore.apConfigWifi'
                }),
                arguments:{
                    
                }
            },
        ],

        menus: {
            MENU_WLAN_STATUS:{
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'Esp32S4SMore.connectStatus.MENU_WLAN_STATUS.IDLE',
                            default: 'IDLE',
                            description: 'Esp32S4SMore.connectStatus.MENU_WLAN_STATUS.IDLE'
                        }),
                        value: 'IDLE' 
                    },
                    {
                        text: formatMessage({
                            id: 'Esp32S4SMore.connectStatus.MENU_WLAN_STATUS.CONNECTING',
                            default: 'CONNECTING',
                            description: 'Esp32S4SMore.connectStatus.MENU_WLAN_STATUS.CONNECTING'
                        }),
                        value: 'CONNECTING' 
                    },
                    {
                        text: formatMessage({
                            id: 'Esp32S4SMore.connectStatus.MENU_WLAN_STATUS.GOT_IP',
                            default: 'GOT_IP',
                            description: 'Esp32S4SMore.connectStatus.MENU_WLAN_STATUS.GOT_IP'
                        }),
                        value: 'GOT_IP' 
                    },
                    {
                        text: formatMessage({
                            id: 'Esp32S4SMore.connectStatus.MENU_WLAN_STATUS.NO_AP_FOUND',
                            default: 'NO_AP_FOUND',
                            description: 'Esp32S4SMore.connectStatus.MENU_WLAN_STATUS.NO_AP_FOUND'
                        }),
                        value: 'NO_AP_FOUND' 
                    },
                    {
                        text: formatMessage({
                            id: 'Esp32S4SMore.connectStatus.MENU_WLAN_STATUS.WRONG_PASSWORD',
                            default: 'WRONG_PASSWORD',
                            description: 'Esp32S4SMore.connectStatus.MENU_WLAN_STATUS.WRONG_PASSWORD'
                        }),
                        value: 'WRONG_PASSWORD' 
                    },
                    {
                        text: formatMessage({
                            id: 'Esp32S4SMore.connectStatus.MENU_WLAN_STATUS.BEACON_TIMEOUT',
                            default: 'BEACON_TIMEOUT',
                            description: 'Esp32S4SMore.connectStatus.MENU_WLAN_STATUS.BEACON_TIMEOUT'
                        }),
                        value: 'BEACON_TIMEOUT' 
                    },
                    {
                        text: formatMessage({
                            id: 'Esp32S4SMore.connectStatus.MENU_WLAN_STATUS.ASSOC_FAIL',
                            default: 'ASSOC_FAIL',
                            description: 'Esp32S4SMore.connectStatus.MENU_WLAN_STATUS.ASSOC_FAIL'
                        }),
                        value: 'ASSOC_FAIL' 
                    },
                    {
                        text: formatMessage({
                            id: 'Esp32S4SMore.connectStatus.MENU_WLAN_STATUS.HANDSHAKE_TIMEOUT',
                            default: 'HANDSHAKE_TIMEOUT',
                            description: 'Esp32S4SMore.connectStatus.MENU_WLAN_STATUS.HANDSHAKE_TIMEOUT'
                        }),
                        value: 'HANDSHAKE_TIMEOUT' 
                    },
                    
                ]
            },
            MENU_WLAN_ACTIVE:{
                acceptReporters: false,
                items: [
                    { text: "True", value: 'true' },
                    { text: "False", value: 'false' },
                    // { text: "A+B", value: '2' }
                ]
            },

            MENU_WLAN_POWER:{
                acceptReporters: false,
                items: [
                    { text: "2dBm", value: '2' },
                    { text: "5dBm", value: '5' },
                    { text: "7dBm", value: '7' },
                    { text: "8dBm", value: '8' },
                    { text: "11dBm", value: '11' },
                    { text: "13dBm", value: '13' },
                    { text: "14dBm", value: '14' },
                    { text: "15dBm", value: '15' },
                    { text: "16dBm", value: '16' },
                    { text: "18dBm", value: '18' },
                    { text: "20dBm", value: '20' },
                ]
            },
            MENU_WLAN_INFO: {
                acceptReporters: false,
                items: [
                    { text: "SSID", value: '0' },
                    { text: "MAC address", value: '1' },
                    { text: "channel", value: '2' },
                    { text: "RSSI", value: '3' },
                    { text: "auth mode", value: '4' },
                ]
            },
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
                            id: 'Esp32S4SMore.setDigital.DIGITAL_HIGHLOW.high',
                            default: 'high',
                            description: 'Esp32S4SMore.setDigital.DIGITAL_HIGHLOW.high'
                        }),
                        value: '1' 
                    },
                    { 
                        text: formatMessage({
                            id: 'Esp32S4SMore.setDigital.DIGITAL_HIGHLOW.low',
                            default: 'low',
                            description: 'Esp32S4SMore.setDigital.DIGITAL_HIGHLOW.low'
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
                            id: 'Esp32S4SMore.setInputPull.INPUT_PULL.UP',
                            default: 'UP',
                            description: 'Esp32S4SMore.setInputPull.INPUT_PULL.UP'
                        }),
                        value: '0' 
                    },
                    {
                        text: formatMessage({
                            id: 'Esp32S4SMore.setInputPull.INPUT_PULL.DOWN',
                            default: 'DOWN',
                            description: 'Esp32S4SMore.setInputPull.INPUT_PULL.DOWN'
                        }),
                        value: '1' 
                    },
                    {
                        text: formatMessage({
                            id: 'Esp32S4SMore.setInputPull.INPUT_PULL.NONE',
                            default: 'NONE',
                            description: 'Esp32S4SMore.setInputPull.INPUT_PULL.NONE'
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
                            id: 'Esp32S4SMore.startRecording.AUDIOSOURCE.SD',
                            default: 'SD card audio',
                            description: 'Esp32S4SMore.startRecording.AUDIOSOURCE.SD'
                        }),
                        value: '0' 
                    },
                    {
                        text: formatMessage({
                            id: 'Esp32S4SMore.startRecording.AUDIOSOURCE.LOCAL',
                            default: 'Local audio',
                            description: 'Esp32S4SMore.startRecording.AUDIOSOURCE.LOCAL'
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
    async initWlanSta(){
        this.runtime.emit('ADD_VARIABLE_ESPMORE','sta_record');
    }
    
    async buttonPressed(args){
        return this.ICE_read_wifi(`button.is_pressed(button.${args.CHOICE})`)
    }
    async soundLevel(args){
        return this.ICE_read_wifi(`audio.get_sound_level()`)
    }
    async startRecording(args){
        let position=Number(args.AUDIOSOURCE)
        if(position === 0){
            await this.ICE_read_wifi(`audio.start_recording("sd/${args.FILENAME}.wav",${args.NUM})`)
        }else{
            await this.ICE_read_wifi(`audio.start_recording("${args.FILENAME}.wav",${args.NUM})`)
        }
        
    }
    async playRecording(args){
        let position=Number(args.AUDIOSOURCE)
        if(position === 0){
            await this.ICE_read_wifi(`audio.play_recording("sd/${args.FILENAME}.wav")`)
        }else{
            await this.ICE_read_wifi(`audio.play_recording("${args.FILENAME}.wav")`)
        }
        
    }
    async stopPlayRecording(args){
        await this.ICE_read_wifi(`audio.stop_sounds()`)
    }
    getAudioFile(args){

    }
    async setVolume(args){
        await this.ICE_read_wifi(`audio.set_volume(${args.NUM})`)
    }
    async playAudio(args){
        await this.ICE_read_wifi(`audio.play_audio(${args.TEXT})`)
    }
    async stopAudio(args){
        await this.ICE_read_wifi(`audio.stop_sounds()`)
    }
    async setDigital(args){
        await this.ICE_read_wifi(`esp_pin.digitalWrite(${args.PIN},${Number(args.CHOICE)})`)
    }
    async setPwm(args){
        await this.ICE_read_wifi(`esp_pin.analogWrite(${args.PIN},${args.NUM})`)
    }
    async readDigitalPin(args){
        return this.ICE_read_wifi(`esp_pin.digitalRead(${args.PIN})`)
    }
    async readAnalogPin(args){
        return this.ICE_read_wifi(`esp_pin.analogRead(${args.PIN})`)
    }
    setInputPull(args){

    }
    async readPulse(args){
        return this.ICE_read_wifi(`esp_pin.pulseIn(${args.CHOICE},1,${args.NUM})`)
    }
    async getTimer(args){
        return this.ICE_read_wifi(`system.tick_get()`)
    }
    async resetTimer(args){
        await this.ICE_read_wifi(`system.tick_reset()`)
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



module.exports = Esp32S4SMore;