// 巡线
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');

const icon = require('./LineFollow.svg');
 
class LineFollow {
    
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'LineFollow',
            name: formatMessage({
                id: 'LineFollow.name',
                default: 'Line Following Sensor',
            }),
            color1: '#FF8F00',  // 主颜色
            color2: '#F57C00',  // 次颜色（渐变）
            color3: '#EF6C00',  // 边框颜色
            menuIconURI: icon, 

            //模块 
            blocks: [
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
            ],
            menus:{
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
                        },
                        {
                            text: formatMessage({
                                id: 'MicrobiteIcreateP.choiceLightRingColor.black',
                                default: 'Black',
                            }),
                            value: 'line_sensor.BLACK'
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
                        },
                        {
                            text: formatMessage({
                                id: 'MicrobiteIcreateP.choiceLightRingColor.black',
                                default: 'Black',
                            }),
                            value: 'line_sensor.BLACK'
                        }
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
            }
        };
    }
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
            return this.ICE_read_wifi(code)
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
            return this.ICE_read_wifi(code)
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
            return this.ICE_read_wifi(code)
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


module.exports = LineFollow;