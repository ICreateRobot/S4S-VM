// link-bot
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');
const icon = require('./linkbot.png');
 
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
            opcode: 'ICM_S4S_MovRunSec',//双电机移动秒
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
                    type: ArgumentType.NUMRES0_100,
                    defaultValue: 5
                },
                P2: {
                    type: ArgumentType.NUMRES0_100,
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
                    type: ArgumentType.NUMRES0_100,
                    defaultValue: 5
                },
                P2: {
                    type: ArgumentType.NUMRES0_100,
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
            choice_MoveMode:{//选择移动状态模式
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'LinkBot.choice_DCmotorType.seconds',
                            default: 'seconds',
                        }),
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'LinkBot.choice_DCmotorType.rotations',
                            default: 'rotations',
                        }),
                        value: '2'
                    },
                    {
                        text: formatMessage({
                            id: 'LinkBot.choice_MoveMode.cm',
                            default: 'cm',
                        }),
                        value: '3'
                    }
                ]
            },
           
        }
      };
    }

 
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
    // 双电机分别设置动力移动指定模式
    async ICM_S4S_MovSetPowMode(args) {
        await ICMB_send(`encoder_motor_pair_set_speed(${args.P1},${args.P2})`)
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