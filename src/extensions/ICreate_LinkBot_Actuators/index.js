// link-bot-Actuators
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');
const icon = require('./actuators.png');
const motorIcon = require('./wheels.png');


class LinkBotActuators {

    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
      return {
        id: 'LinkBotActuators',
        name: formatMessage({
            id: 'LinkBotActuators.name',
            default: 'Actuators',
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
                id: 'LinkBot.DCmotors',
                default: 'DC Motors',
            }),
        },
        {
            opcode: 'ICM_S4S_motorRunType',//电机以方向转（）【】
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_motorRunType',
                default: '[CHOICE] run [DIVERSION] for [NUM] [TYPE]',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin'
                },
                DIVERSION:{
                    ype: ArgumentType.STRING,
                    menu: 'choice_DCmotorDIVERSION'
                },
                NUM: {
                    type: ArgumentType.NUMRES0,
                    defaultValue: 1
                },
                TYPE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorType'
                },
            }
        },
        {
            opcode: 'ICM_S4S_motorRunDiv',//电机 端口 转向
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_motorRunDiv',
                default: '[CHOICE] start motor [DIVERSION] ',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin'
                },
                DIVERSION:{
                    ype: ArgumentType.STRING,
                    menu: 'choice_DCmotorDIVERSION'
                },
            }
        },
        {
            opcode: 'ICM_S4S_motorStop',//电机停止 端口 
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_motorStop',
                default: '[CHOICE] stop motor',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin'
                },
            }
        },
        {
            opcode: 'ICM_S4S_motorSetSpeed',//电机设置 端口 速度
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_motorSetSpeed',
                default: '[CHOICE] set speed to [NUM]',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin'
                },
                NUM: {
                    type: ArgumentType.NUMRES0_100,
                    defaultValue: 5
                },
            }
        },
        {
            opcode: 'ICM_S4S_motorGetPos',//电机获取 位置
            blockType: BlockType.REPORTER,
            disableMonitor: true,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_motorGetPos',
                default: '[CHOICE] position',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin'
                },
            }
        },
        {
            opcode: 'ICM_S4S_motorGetSpeed',//电机获取 速度
            blockType: BlockType.REPORTER,
            disableMonitor: true,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_motorGetSpeed',
                default: '[CHOICE] speed',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin'
                },
            }
        },
        {
            opcode: 'ICM_S4S_motorSetPos',//电机设置 端口 角度
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_motorSetPos',
                default: '[CHOICE] set relative position to 0',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin'
                },
            }
        },
        /* {
            opcode: 'ICM_S4S_motorRunPower',//电机 端口 动力
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_motorRunPower',
                default: '[CHOICE] start motor at [NUM]% power',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin'
                },
                NUM: {
                    type: ArgumentType.NUMRES_100_100,
                    defaultValue: 50
                },
            }
        },
        {
            opcode: 'ICM_S4S_motorGetPower',//电机获取 端口 动力
            blockType: BlockType.REPORTER,
            disableMonitor: true,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_motorGetPower',
                default: '[CHOICE] power',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin'
                },
            }
        },
 */
{
            opcode: 'ICM_S4S_motorRunRPM',//电机 端口 动力
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_motorRunRPM',
                default: '[CHOICE] start motor at [NUM] RPM',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin'
                },
                NUM: {
                    type: ArgumentType.NUMRES_100_100,//后续需要开发 -180 -- 180
                    defaultValue: 50
                },
            }
        },
        {
            opcode: 'ICM_S4S_motorGetRPM',//电机获取 端口 RPM
            blockType: BlockType.REPORTER,
            disableMonitor: true,
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_motorGetRPM',
                default: '[CHOICE] RPM',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_DCmotorPin'
                },
            }
        },

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
        {
            opcode: 'ICM_S4S_servoRelease',//释放舵机
            blockType: BlockType.COMMAND,
            // text: '舵机[CHOICE]角度[TEXT]',
            text: formatMessage({
                id: 'LinkBot.ICM_S4S_servoRelease',
                default: 'release servo [CHOICE]',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_serverPin'
                }
            }
        },
        {
            opcode: 'LinkBot_continuous_servo',//连续舵机
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.LinkBot_continuous_servo',
                default: 'set continuous servo [CHOICE] speed [TEXT]',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_serverPin'
                },
                TEXT: {
                    type: ArgumentType.NUMRES_100_100,
                    defaultValue: 5
                }
            }
        },
        {
            opcode: 'LinkBot_continuous_servoStop',//连续舵机停止
            blockType: BlockType.COMMAND,
            text: formatMessage({
                id: 'LinkBot.LinkBot_continuous_servoStop',
                default: 'stop continuous servo [CHOICE]',
            }),
            arguments: {
                CHOICE: {
                    type: ArgumentType.STRING,
                    menu: 'choice_serverPin'
                },
            }
        },


        {
            blockType: BlockType.LABEL,
            text: formatMessage({
                id: 'LinkBot.Atmosphere',
                default: 'LEDS',
            }),
        },
        {
            opcode: 'ICM_S4S_ambient',//设置氛围灯
            blockType: BlockType.COMMAND,
            // text: '氛围灯 亮度[CHOICE]颜色[COL]',
            text: formatMessage({
                id: 'MicrobiteIcreateS4S.ICM_S4S_ambient',
                default: 'set robot color to [COL]',
                description: 'MicrobiteIcreateS4S.ICM_S4S_ambient'
            }),
            arguments: {
                COL: {
                    type: ArgumentType.COLOR,
                    defaultValue:'#ff0000'
                }
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
            arguments: {
                COL: {
                    type: ArgumentType.COLOR,
                    defaultValue:'#0000ff'
                }
            }
        },
   

        ],


        menus: {
            choice_serverPin: {//选择舵机端口*
                acceptReporters: false,
                items: [
                    { text: '1', value: '0' },
                    { text: '2', value: '1' },
                ]
            },
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
                        value: '1'
                    },
                    {
                        text: formatMessage({
                            id: 'LinkBot.choice_DCmotorType.degrees',
                            default: 'degrees'
                        }),
                        value: '3'
                    },
                    {
                        text: formatMessage({
                            id: 'LinkBot.choice_DCmotorType.seconds',
                            default: 'seconds'
                        }),
                        value: '0'
                    },
                ]
            },
            choice_DCmotorDIVERSION: { // 直流电机转向
                acceptReporters: false,
                items: [
                    { text: '↻', value: '1' },
                    { text: '↺', value: '0' }
                ]
            }
        }
      };
    }

    //################################舵机######################################
    //控制舵机
    async ICM_S4S_servo(args){
        await ICMB_send(`mainBoard.servo_set_angle(${args.CHOICE},${args.TEXT})`)
    }
    //释放舵机
    async ICM_S4S_servoRelease(args){
        await ICMB_send(`mainBoard.servo_release(${args.CHOICE})`)
    }
    //连续舵机
    async LinkBot_continuous_servo(args){
        await ICMB_send(`mainBoard.continuous_servo_set_speed(${args.CHOICE},${args.TEXT})`)
    }
    //连续舵机停止
    async LinkBot_continuous_servoStop(args){
        await ICMB_send(`mainBoard.continuous_servo_set_speed(${args.CHOICE},0)`)
    }

    //################################dc电机######################################
    //电机 端口 转向 NUM 类型
    async ICM_S4S_motorRunType(args){
        await ICMB_send(`encoder_motor_run_3state(${args.CHOICE},${args.DIVERSION},${args.NUM},${args.TYPE})`)
    }
    //电机 端口 转向 
    async ICM_S4S_motorRunDiv(args){
        await ICMB_send(`encoder_motor_run(${args.CHOICE},${args.DIVERSION})`)
    }
    //电机停止 端口 
    async ICM_S4S_motorStop(args){
        await ICMB_send(`encoder_motor_stop(${args.CHOICE})`)
    }
    //电机设置 端口 速度
    async ICM_S4S_motorSetSpeed(args){
        await ICMB_send(`encoder_motor_set_dynamic_speed(${args.CHOICE},${args.NUM})`)
    }
    // 电机获取 位置
    ICM_S4S_motorGetPos(args) {
        return ICMB_read(`encoder_motor_get_angle(${args.CHOICE})`);
    }
    // 电机获取 速度
    ICM_S4S_motorGetSpeed(args) {
        return ICMB_read(`encoder_motor_get_dynamic_speed(${args.CHOICE})`);
    }
    // 电机设置 端口 相对位置为 0
    async ICM_S4S_motorSetPos(args) {
        await ICMB_send(`encoder_motor_reset_angle(${args.CHOICE})`)
    }
    // // 电机 端口 动力
    // async ICM_S4S_motorRunPower(args) {
    //     await ICMB_send(`encoder_motor_set_power(${args.CHOICE},${args.NUM})`)
    // }
    // // 电机获取 端口 动力
    // ICM_S4S_motorGetPower(args) {
    //     return ICMB_read(`encoder_motor_get_power(${args.CHOICE})`);
    // }
    // 电机 端口 RPM
    async ICM_S4S_motorRunRPM(args) {
        await ICMB_send(`encoder_motor_start_rpm_speed(${args.CHOICE},${args.NUM})`)
    }
    // 电机获取 端口 RPM
    ICM_S4S_motorGetRPM(args) {
        return ICMB_read(`mainBoard.encoder_motor_get_rpm_speed(${args.CHOICE})`);
    }
    
    //################################氛围灯######################################
    //氛围灯
    async ICM_S4S_ambient(args){
        const [r, g, b] = args.COL.replace('#', '').match(/.{1,2}/g).map(x => parseInt(x, 16));
        await ICMB_send(`mainBoard.ambient_light_set_state(255,(${r},${g},${b}))`)
    }

    //超声波灯
    async ICM_S4S_ultrSet(args){
        const [r, g, b] = args.COL.replace('#', '').match(/.{1,2}/g).map(x => parseInt(x, 16));
        await ICMB_send(`ultr.set_color(255,${r},${g},${b})`)
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


module.exports = LinkBotActuators;