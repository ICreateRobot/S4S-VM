// 超声波
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');

const icon = require('./Ultrasonic.svg');
 
class Ultrasonic {
    
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'Ultrasonic',
            name: formatMessage({
                id: 'Ultrasonic.name',
                default: 'Ultrasonic',
            }),
            color1: '#FF8F00',  // 主颜色
            color2: '#F57C00',  // 次颜色（渐变）
            color3: '#EF6C00',  // 边框颜色
            menuIconURI: icon, 

            //模块 
            blocks: [
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
                    opcode: 'ICM_S4S_ultrSet',//设置超声波传感器
                    blockType: BlockType.COMMAND,
                    // text: '超声波传感器 亮度[CHOICE]颜色[COL]',
                    text: formatMessage({
                        id: 'MicrobiteIcreateS4S.ICM_S4S_ultrSet',
                        default: 'set eye color to [COL]',
                    }),
                    blockIconURI:icon,
                    arguments: {
                        COL: {
                            type: ArgumentType.COLOR,
                            defaultValue:'#0000ff'
                        }
                    }
                },
            ],
            menus:{
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
            }
        };
    }
    toFixedNumber(val) {
        console.log(val)
        console.log(typeof val)
        const num = Number(val);      // 字符串 → 数字
        return Number(num.toFixed(2)); // 保留两位小数
      }
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
            let result = await this.ICE_read_wifi(code)
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
            let distance=await this.ICE_read_wifi(code)
            
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
    //超声波灯
    async ICM_S4S_ultrSet(args){
        const [r, g, b] = args.COL.replace('#', '').match(/.{1,2}/g).map(x => parseInt(x, 16));
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`ultrasonic.set_color(${r},${g},${b})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            code=packCommand(`cultr.ultrasonic_set_color(${r},${g},${b})`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`ultrasonic.set_color(${r},${g},${b})`
            await this.ICE_read_wifi(code)
        }else{
             this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
        }
        // await this.ICMB_send(`ultr.set_color(255,${r},${g},${b})`)
    }

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

module.exports = Ultrasonic;