// link-bot _Power
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');
const icon = require('./battery.png');

 
class LinkBot_Power {
    
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
      return {
        id: 'LinkBot_Power',
        name: formatMessage({
            id: 'LinkBot_Power.name',
            default: 'Power',
        }),
        color1: '#55DAD1',  // 主颜色
        color2: '#45C2B9',  // 次颜色（渐变）
        color3: '#36AAA1',   // 边框颜色
        iconURI: icon, 

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
        
        ],


      };
    }

    //################################舵机######################################
    //控制舵机
    async ICM_S4S_servo(args){
        await ICMB_send(`mainBoard.servo_set_angle(${args.CHOICE},${args.TEXT})`)
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


module.exports = LinkBot_Power;