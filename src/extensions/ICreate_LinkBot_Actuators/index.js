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
        color1: '#2196F3',  // 主颜色
        color2: '#21CBF3',  // 次颜色（渐变）
        color3: '#1976D2',   // 边框颜色
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
            blockIconURI:icon,
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
            blockIconURI:icon,
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
            blockIconURI:icon,
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
            blockIconURI:icon,
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
            blockIconURI:icon,
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
            blockIconURI:icon,
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
            blockIconURI:icon,
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
            blockIconURI:icon,
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
            blockIconURI:icon,
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
            blockIconURI:icon,
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
            blockIconURI:icon,
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
            blockIconURI:icon,
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
            blockIconURI:icon,
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
            blockIconURI:icon,
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
            blockIconURI:icon,
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
                        value: 'motors.ROTATIONS'
                    },
                    {
                        text: formatMessage({
                            id: 'LinkBot.choice_DCmotorType.degrees',
                            default: 'degrees'
                        }),
                        value: 'motors.DEGREES'
                    },
                    {
                        text: formatMessage({
                            id: 'LinkBot.choice_DCmotorType.seconds',
                            default: 'seconds'
                        }),
                        value: 'motors.SECONDS'
                    },
                ]
            },
            choice_DCmotorDIVERSION: { // 直流电机转向
                acceptReporters: false,
                items: [
                    { text: '↻', value: 'motors.FORWARD' },
                    { text: '↺', value: 'motors.BACKWARD' }
                ]
            }
        }
      };
    }

    //################################舵机######################################
    //控制舵机
    async ICM_S4S_servo(args){
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`servo.set_angle(${Number(args.CHOICE)},${Number(args.TEXT)})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            code=packCommand(`bot.servo_set_angle(${Number(args.CHOICE)},${Number(args.TEXT)})`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`servo.set_angle(${Number(args.CHOICE)},${Number(args.TEXT)})`
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
        // await this.ICMB_send(`mainBoard.servo_set_angle(${args.CHOICE},${args.TEXT})`)
    }
    //释放舵机
    async ICM_S4S_servoRelease(args){
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`servo.release(${Number(args.CHOICE)})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            code=packCommand(`bot.servo_release(${Number(args.CHOICE)})`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`servo.release(${Number(args.CHOICE)})`
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
        // await this.ICMB_send(`mainBoard.servo_release(${args.CHOICE})`)
    }
    //连续舵机
    async LinkBot_continuous_servo(args){
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`servo.set_speed(${Number(args.CHOICE)},${Number(args.TEXT)})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            code=packCommand(`bot.servo_set_speed(${Number(args.CHOICE)},${Number(args.TEXT)})`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`servo.set_speed(${Number(args.CHOICE)},${Number(args.TEXT)})`
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
        // await this.ICMB_send(`mainBoard.continuous_servo_set_speed(${args.CHOICE},${args.TEXT})`)
    }
    //连续舵机停止
    async LinkBot_continuous_servoStop(args){
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`servo.stop(${Number(args.CHOICE)})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            code=packCommand(`bot.servo_stop(${Number(args.CHOICE)})`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`servo.stop(${Number(args.CHOICE)})`
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
        // await this.ICMB_send(`mainBoard.continuous_servo_set_speed(${args.CHOICE},0)`)
    }

    //################################dc电机######################################
    //电机 端口 转向 NUM 类型
    async ICM_S4S_motorRunType(args){
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`motors.run_for(${Number(args.CHOICE)},${args.DIVERSION},${Number(args.NUM)},${args.TYPE})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            let diversion='MOTORS_'+getAfterDot(args.DIVERSION)
            let type='MOTORS_'+getAfterDot(args.TYPE)
            code=packCommand(`bot.motors_run_for(${Number(args.CHOICE)},"${diversion}",${Number(args.NUM)},"${type}")`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`motors.run_for(${Number(args.CHOICE)},${args.DIVERSION},${Number(args.NUM)},${args.TYPE})`
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
        // await this.ICMB_send(`encoder_motor_run_3state(${args.CHOICE},${args.DIVERSION},${args.NUM},${args.TYPE})`)
    }
    //电机 端口 转向 
    async ICM_S4S_motorRunDiv(args){
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`motors.start(${Number(args.CHOICE)},${args.DIVERSION})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            let diversion='MOTORS_'+getAfterDot(args.DIVERSION)
            code=packCommand(`bot.motors_start(${Number(args.CHOICE)},"${diversion}")`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`motors.start(${Number(args.CHOICE)},${args.DIVERSION})`
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
        // await this.ICMB_send(`encoder_motor_run(${args.CHOICE},${args.DIVERSION})`)
    }
    //电机停止 端口 
    async ICM_S4S_motorStop(args){
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`motors.stop(${Number(args.CHOICE)})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            code=packCommand(`bot.motors_stop(${Number(args.CHOICE)})`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`motors.stop(${Number(args.CHOICE)})`
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
        // await this.ICMB_send(`encoder_motor_stop(${args.CHOICE})`)
    }
    //电机设置 端口 速度
    async ICM_S4S_motorSetSpeed(args){
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`motors.set_speed(${Number(args.CHOICE)},${Number(args.NUM)})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            code=packCommand(`bot.motors_set_speed(${Number(args.CHOICE)},${Number(args.NUM)})`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`motors.set_speed(${Number(args.CHOICE)},${Number(args.NUM)})`
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
        // await this.ICMB_send(`encoder_motor_set_dynamic_speed(${args.CHOICE},${args.NUM})`)
    }
    // 电机获取 位置
    async ICM_S4S_motorGetPos(args) {
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`motors.position(${Number(args.CHOICE)})`
            return this.ICMB_read(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            code=packCommand(`bot.motors_position(${Number(args.CHOICE)})`)
            return this.ICA_read(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`motors.position(${Number(args.CHOICE)})`
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
        
        
        // return this.ICMB_read(`encoder_motor_get_angle(${args.CHOICE})`);
    }
    // 电机获取 速度
    ICM_S4S_motorGetSpeed(args) {
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`motors.speed(${Number(args.CHOICE)})`
            return this.ICMB_read(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            code=packCommand(`bot.motors_speed(${Number(args.CHOICE)})`)
            return this.ICA_read(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`motors.speed(${Number(args.CHOICE)})`
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
        // return this.ICMB_read(`encoder_motor_get_dynamic_speed(${args.CHOICE})`);
    }
    // 电机设置 端口 相对位置为 0
    async ICM_S4S_motorSetPos(args) {
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`motors.reset_position(${Number(args.CHOICE)})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            code=packCommand(`bot.motors_reset_position(${Number(args.CHOICE)})`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`motors.reset_position(${Number(args.CHOICE)})`
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
        // await this.ICMB_send(`encoder_motor_reset_angle(${args.CHOICE})`)
    }
    // // 电机 端口 动力
    // async ICM_S4S_motorRunPower(args) {
    //     await this.ICMB_send(`encoder_motor_set_power(${args.CHOICE},${args.NUM})`)
    // }
    // // 电机获取 端口 动力
    // ICM_S4S_motorGetPower(args) {
    //     return this.ICMB_read(`encoder_motor_get_power(${args.CHOICE})`);
    // }
    // 电机 端口 RPM
    async ICM_S4S_motorRunRPM(args) {
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`motors.start_rpm(${Number(args.CHOICE)},${Number(args.NUM)})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            code=packCommand(`bot.motors_start_rpm(${Number(args.CHOICE)},${Number(args.NUM)})`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`motors.start_rpm(${Number(args.CHOICE)},${Number(args.NUM)})`
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
        // await this.ICMB_send(`encoder_motor_start_rpm_speed(${args.CHOICE},${args.NUM})`)
    }
    // 电机获取 端口 RPM
    ICM_S4S_motorGetRPM(args) {
        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`motors.rpm(${Number(args.CHOICE)})`
            return this.ICMB_read(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            code=packCommand(`bot.motors_rpm(${Number(args.CHOICE)})`)
            return this.ICA_read(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`motors.rpm(${Number(args.CHOICE)})`
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
        // return this.ICMB_read(`mainBoard.encoder_motor_get_rpm_speed(${args.CHOICE})`);
    }
    
    //################################氛围灯######################################
    //氛围灯
    async ICM_S4S_ambient(args){
        const [r, g, b] = args.COL.replace('#', '').match(/.{1,2}/g).map(x => parseInt(x, 16));


        let code=""
        if(this.runtime.currentDevice=='Microbit'){
            code=`light.set_color(${r},${g},${b})`
            await this.ICMB_send(code)
        }else if(this.runtime.currentDevice=='Arduino'){
            code=packCommand(`bot.light_set_color(${r},${g},${b})`)
            await this.ICA_send(code)
        }else if(this.runtime.currentDevice=='ESP32'){
            code=`light.set_color(${r},${g},${b})`
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
        // await this.ICMB_send(`mainBoard.ambient_light_set_state(255,(${r},${g},${b}))`)
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

module.exports = LinkBotActuators;