// link-bot
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');
const icon = require('./linkbot.png');
 
class LinkBot {
    
    constructor(runtime) {
        this.runtime = runtime;
        this.DirectionMap=['FORWARD','BACKWORD','LEFT','RIGHT']
        this.UnitMap=['SECONDS','ROTATIONS','CENTIMETERS']
    }

    getInfo() {
      return {
        id: 'LinkBot',
        name: formatMessage({
            id: 'MicrobiteIcreateS4S.name',
            default: 'Link Bot',
        }),
        color1: '#2196F3',  // 主颜色
        color2: '#21CBF3',  // 次颜色（渐变）
        color3: '#1976D2',   // 边框颜色
        menuIconURI: icon, 

        //模块 
        blocks: [
     

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
            blockIconURI:icon,
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
            blockIconURI:icon,
            arguments: {
                TYPE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_MoveType',
                },
            }
        },
        {
            opcode: 'ICM_S4S_MovRunSec',//双电机移动[]
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_MovRunSec',
                default: 'move [TYPE] for [NUM] [MODE]',
            }),
            blockIconURI:icon,
            arguments: {
                TYPE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_MoveType',
                },
                NUM: {
                    type: ArgumentType.NUMRES0,
                    defaultValue: 2
                },
                MODE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_MoveMode',
                },
            }
        },
        

        {
            opcode: 'ICM_S4S_MovSetPow',//双电机设置动力分开
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_MovSetPow',
                default: 'move at [P1] [P2] speed',
            }),
            blockIconURI:icon,
            arguments: {
                P1: {
                    type: ArgumentType.NUMRES_100_100,
                    defaultValue: 5
                },
                P2: {
                    type: ArgumentType.NUMRES_100_100,
                    defaultValue: 5
                },
            }
        },

        {
            opcode: 'ICM_S4S_MovSetPowMode',//双电机设置动力分开移动指定模式
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_MovSetPowMode',
                default: 'move at [P1] [P2] speed for [NUM] [MODE]',
            }),
            blockIconURI:icon,
            arguments: {
                P1: {
                    type: ArgumentType.NUMRES_100_100,
                    defaultValue: 5
                },
                P2: {
                    type: ArgumentType.NUMRES_100_100,
                    defaultValue: 5
                },
                NUM: {
                    type: ArgumentType.NUMRES0,
                    defaultValue: 2
                },
                MODE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_MoveMode',
                },
            }
        },

        {
            opcode: 'ICM_S4S_MovStop',//双电机停止
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_MovStop',
                default: 'stop moving',
            }),
            blockIconURI:icon,
        },
        {
            opcode: 'ICM_S4S_MovSetPowAll',//双电机设置动力全部
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_MovSetPowAll',
                default: 'set movement speed to [NUM] ',
            }),
            blockIconURI:icon,
            arguments: {
                NUM: {
                    type: ArgumentType.NUMRES0_100,
                    defaultValue: 5
                },
            }
        },
        
        
      
        ],

        menus: {
            choice_DCmotorPin: { // 直流电机端口*
                acceptReporters: false,
                items: [
                    { text: 'M1', value: '0' },
                    { text: 'M2', value: '1' },
                    { text: 'M3', value: '2' },
                    { text: 'M4', value: '3' }
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
                        value: 'movement.FORWARD'
                    },
                    {
                        text: formatMessage({
                            id: 'robotmove.menuDir.backward',
                            default: 'backward',
                        }),
                        value: 'movement.BACKWARD'
                    },
                    {
                        text: formatMessage({
                            id: 'robotmove.menuDir.turnleft',
                            default: 'left',
                        }),
                        value: 'movement.LEFT'
                    },
                    {
                        text: formatMessage({
                            id: 'robotmove.menuDir.turnright',
                            default: 'right',
                        }),
                        value: 'movement.RIGHT'
                    }
                ]
            },
            choice_MoveMode:{//选择移动状态模式
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'LinkBot.choice_DCmotorType.seconds',
                            default: 'seconds',
                        }),
                        value: 'movement.SECONDS'
                    },
                    {
                        text: formatMessage({
                            id: 'LinkBot.choice_DCmotorType.rotations',
                            default: 'rotations',
                        }),
                        value: 'movement.ROTATIONS'
                    },
                    {
                        text: formatMessage({
                            id: 'LinkBot.choice_MoveMode.cm',
                            default: 'cm',
                        }),
                        value: 'movement.CENTIMETERS'
                    }
                ]
            },
           
        }
      };
    }

 
    //################################运动######################################
    // 设置双电机端口
    async ICM_S4S_MovSetPin(args) {
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`movement.set_motors(${Number(args.P1)}, ${Number(args.P2)})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            code=packCommand(`bot.movement_set_motors(${Number(args.P1)}, ${Number(args.P2)})`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`movement.set_motors(${Number(args.P1)}, ${Number(args.P2)})`
            await this.ICE_send(code)
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
        }
        // await this.ICMB_send(`encoder_motor_pair_set_group(${args.P1},${args.P2})`)
    }
    // 双电机开始移动
    async ICM_S4S_MovRun(args) {
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`movement.start(${args.TYPE})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            let type='MOVEMENT_'+getAfterDot(args.TYPE)
            code=packCommand(`bot.movement_start("${type}")`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`movement.start(${args.TYPE})`
            await this.ICE_send(code)
        }else{
            this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
        }
        // await this.ICMB_send(`encoder_motor_pair_run(${args.TYPE})`)
    }
    // 双电机移动指定秒数
    async ICM_S4S_MovRunSec(args) {
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`movement.move(${args.TYPE},${Number(args.NUM)},${args.MODE})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            let type='MOVEMENT_'+getAfterDot(args.TYPE)
            let mode = 'MOVEMENT_'+getAfterDot(args.MODE)
            code=packCommand(`bot.movement_move("${type}",${Number(args.NUM)},"${mode}")`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`movement.move(${args.TYPE},${Number(args.NUM)},${args.MODE})`
            await this.ICE_send(code)
        }else{
             this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
        }
        // await this.ICMB_send(`encoder_motor_pair_run_for(${args.TYPE},${args.NUM},${args.MODE})`)
    }
    // 双电机分别设置动力
    async ICM_S4S_MovSetPow(args) {
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`movement.drive(${Number(args.P1)},${Number(args.P2)})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            code=packCommand(`bot.movement_drive(${Number(args.P1)},${Number(args.P2)})`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`movement.drive(${Number(args.P1)},${Number(args.P2)})`
            await this.ICE_send(code)
        }else{
             this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
        }
        // await this.ICMB_send(`encoder_motor_pair_run_dynamic_speed(${args.P1},${args.P2})`)
    }
    // 双电机分别设置动力移动指定模式
    async ICM_S4S_MovSetPowMode(args) {
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`movement.drive_for(${Number(args.P1)},${Number(args.P2)},${Number(args.NUM)},${args.MODE})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            let mode='MOVEMENT_'+getAfterDot(args.MODE)
            code=packCommand(`bot.movement_drive_for(${Number(args.P1)},${Number(args.P2)},${Number(args.NUM)},"${mode}")`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`movement.drive_for(${Number(args.P1)},${Number(args.P2)},${Number(args.NUM)},${args.MODE})`
            await this.ICE_send(code)
        }else{
             this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
        }
        // await this.ICMB_send(`encoder_motor_pair_speed_run_for(${args.P1},${args.P2},${args.NUM},${args.MODE})`)
    }
    // 双电机停止
    async ICM_S4S_MovStop() {
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`movement.stop()`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            code=packCommand(`bot.movement_stop()`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`movement.stop()`
            await this.ICE_send(code)
        }else{
             this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
        }
        // await this.ICMB_send(`encoder_motor_pair_stop()`)
    }
    // 双电机统一设置动力(不移动)
    async ICM_S4S_MovSetPowAll(args) {
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`movement.set_speed(${Number(args.NUM)})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            code=packCommand(`bot.movement_set_speed(${Number(args.NUM)})`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`movement.set_speed(${Number(args.NUM)})`
            await this.ICE_send(code)
        }else{
             this.runtime.ioDevices.toast.guiToast('',
            formatMessage({
                id: 'gui.alert.selectDevice',
                default: 'Please select a device first'
            }), 
            'error',
             2000);
        }
        // await this.ICMB_send(`encoder_motor_pair_set_dynamic_speed(${args.NUM},${args.NUM})`)
    }

    async ICMB_send(str){
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
//发送

function getAfterDot(str) {
    const index = str.indexOf('.');
    if (index === -1) return ''; // 没有点
    return str.slice(index + 1);
  }
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


module.exports = LinkBot;