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
        
        // this.runtime.emit('ADD_VARIABLE_ESPMORE','sta_record');
 
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
                    id: 'Esp32S4SMore.wifi',
                    default: 'WI-FI',
                    description: 'Esp32S4SMore.wifi'
                }),
            },
            {
                opcode: 'setWifi',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.setWifi',
                    default: 'connect to wifi [ssid] password [pass]',
                    description: 'Esp32S4SMore.setWifi'
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
                opcode: 'wifiIsConnected',
                blockType: BlockType.BOOLEAN,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.wifiIsConnected',
                    default: 'network connected ?',
                    description: 'Esp32S4SMore.wifiIsConnected'
                }),
                arguments:{
                   
                },
                disableMonitor: true
            },
            // {
            //     opcode: 'reconnectWifi',
            //     blockType: BlockType.COMMAND,
            //     blockIconURI:icon,
            //     text: formatMessage({
            //         id: 'Esp32S4SMore.reconnectWifi',
            //         default: 'connect to Wi-Fi again',
            //         description: 'Esp32S4SMore.reconnectWifi'
            //     }),
            //     arguments:{
                  
            //     }
            // },
            {
                opcode: 'wifiDisconnect',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.wifiDisconnect',
                    default: 'disconnect from wifi',
                    description: 'Esp32S4SMore.wifiDisconnect'
                }),
                arguments:{
                  
                }
            },
            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'Esp32S4SMore.ble',
                    default: 'Bluetooth',
                    description: 'Esp32S4SMore.ble'
                }),
            },

            // {
            //     opcode: 'getBleAddress',
            //     blockType: BlockType.REPORTER,
            //     blockIconURI:icon,
            //     text: formatMessage({
            //         id: 'Esp32S4SMore.getBleAddress',
            //         default: 'get bluetooth Mac address',
            //         description: 'Esp32S4SMore.getBleAddress'
            //     }),
            //     arguments:{
                   
            //     },
            //     disableMonitor: true
            // },

            {
                opcode: 'configBle',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.configBle',
                    default: 'config bluetooth with name [NAME]',
                    description: 'Esp32S4SMore.configBle'
                }),
                arguments:{
                    NAME:{
                        type: ArgumentType.STRING,
                        defaultValue:'s4s'
                    }
                }
            },
            {
                opcode: 'startBle',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.startBle',
                    default: 'start bluetooth service uuid [SERVICE] read characteristic [READ] write characteristic [WRITE]',
                    description: 'Esp32S4SMore.startBle'
                }),
                arguments:{
                    SERVICE:{
                        type: ArgumentType.STRING,
                        defaultValue:'0000FF00-0000-1000-8000-00805F9B34FB'
                    },
                    READ:{
                        type: ArgumentType.STRING,
                        defaultValue:'0000FF01-0000-1000-8000-00805F9B34FB'
                    },
                    WRITE:{
                        type: ArgumentType.STRING,
                        defaultValue:'0000FF02-0000-1000-8000-00805F9B34FB'
                    }
                  
                }
            },
            {
                opcode: 'stopBle',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.stopBle',
                    default: 'stop bluetooth',
                    description: 'Esp32S4SMore.stopBle'
                }),
                arguments:{
                  
                }
            },

            // {
            //     opcode: 'bleConnected',
            //     blockType: BlockType.BOOLEAN,
            //     blockIconURI:icon,
            //     text: formatMessage({
            //         id: 'Esp32S4SMore.bleConnected',
            //         default: 'bluetooth connected?',
            //         description: 'Esp32S4SMore.bleConnected'
            //     }),
            //     arguments:{
                  
            //     },
            //     disableMonitor:true
            // },
            // {
            //     opcode: 'isAvailBle',
            //     blockType: BlockType.BOOLEAN,
            //     blockIconURI:icon,
            //     text: formatMessage({
            //         id: 'Esp32S4SMore.isAvailBle',
            //         default: 'is data available on bluetooth',
            //         description: 'Esp32S4SMore.isAvailBle'
            //     }),
            //     arguments:{
                  
            //     },
            //     disableMonitor:true
            // },

            {
                opcode: 'readByteBle',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.readByteBle',
                    default: 'read [NUM] bytes from bluetooth with characteristic uuid [CHARA]',
                    description: 'Esp32S4SMore.readByteBle'
                }),
                arguments:{
                    NUM:{
                        type: ArgumentType.NUMBER,
                        defaultValue:0
                    },
                    CHARA:{
                        type: ArgumentType.STRING,
                        defaultValue:'0000FF02-0000-1000-8000-00805F9B34FB'
                    },
                  
                },
                disableMonitor:true
            },

            {
                opcode: 'sendBle',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.sendBle',
                    default: 'send [DATA] on bluetooth with characteristic uuid [CHARA]',
                    description: 'Esp32S4SMore.sendBle'
                }),
                arguments:{
                    DATA:{
                        type: ArgumentType.STRING,
                    },
                    CHARA:{
                        type: ArgumentType.STRING,
                        defaultValue:'0000FF01-0000-1000-8000-00805F9B34FB'
                    },
                },
                disableMonitor:true
            },


            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'Esp32S4SMore.http',
                    default: 'HTTP',
                    description: 'Esp32S4SMore.http'
                }),
            },

            // {
            //     opcode: 'setURLHTTP',
            //     blockType: BlockType.COMMAND,
            //     blockIconURI:icon,
            //     text: formatMessage({
            //         id: 'Esp32S4SMore.setURLHTTP',
            //         default: 'set HTTP URL [URL]',
            //         description: 'Esp32S4SMore.setURLHTTP'
            //     }),
            //     arguments:{
            //         URL:{
            //             type: ArgumentType.STRING,
            //         }
            //     },
            // },
            {
                opcode: 'setHeaderHTTP',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.setHeaderHTTP',
                    default: 'set HTTP header [HEADER] value [VALUE]',
                    description: 'Esp32S4SMore.setHeaderHTTP'
                }),
                arguments:{
                    HEADER:{
                        type: ArgumentType.STRING,
                        defaultValue:'Content-Type'
                    },
                    VALUE:{
                        type: ArgumentType.STRING,
                        defaultValue:'application/json'
                    }
                },
            },
            {
                opcode: 'sendGetHTTP',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.sendGetHTTP',
                    default: 'send HTTP GET [TEXT]',
                    description: 'Esp32S4SMore.sendGetHTTP'
                }),
                arguments:{
                    TEXT:{
                        type: ArgumentType.STRING,
                        defaultValue:'http://'
                    }
                },
            },
            {
                opcode: 'sendPostHTTP',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.sendPostHTTP',
                    default: 'send HTTP POST [TEXT1] data key: [KEY] value: [VALUE] ',
                    description: 'Esp32S4SMore.sendPostHTTP'
                }),
                arguments:{
                    TEXT1:{
                        type: ArgumentType.STRING,
                        defaultValue:'http://'
                    },
                    KEY:{
                        type: ArgumentType.STRING,
                        defaultValue:'data'
                    },
                    VALUE:{
                        type: ArgumentType.STRING,
                        defaultValue:'abc'
                    }
                },
            },

           

            {
                opcode: 'getHTTPCode',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.getHTTPCode',
                    default: 'get HTTP response code',
                    description: 'Esp32S4SMore.getHTTPCode'
                }),
                arguments:{
                  
                },
                disableMonitor:true
            },

            {
                opcode: 'getHTTPBody',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.getHTTPBody',
                    default: 'get HTTP response body',
                    description: 'Esp32S4SMore.getHTTPBody'
                }),
                arguments:{
                  
                },
                disableMonitor:true
            },
            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'Esp32S4SMore.espnow',
                    default: 'ESP-NOW',
                    description: 'Esp32S4SMore.espnow'
                }),
            },

            {
                opcode: 'startEspnow',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.startEspnow',
                    default: 'start ESP-NOW channel [NUM] data type [TYPE]',
                    description: 'Esp32S4SMore.startEspnow'
                }),
                arguments:{
                    NUM:{
                        type: ArgumentType.NUMBER,
                    },
                    TYPE:{
                        type: ArgumentType.NUMBER,
                    }
                },
            },

            {
                opcode: 'stopEspnow',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.stopEspnow',
                    default: 'stop ESP-NOW ',
                    description: 'Esp32S4SMore.stopEspnow'
                }),
                arguments:{
                    
                },
            },

            {
                opcode: 'setEspnow',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.setEspnow',
                    default: 'set ESP-NOW hotspot name [NAME] password [PASS]',
                    description: 'Esp32S4SMore.setEspnow'
                }),
                arguments:{
                    NAME:{
                        type: ArgumentType.STRING,
                    },
                    PASS:{
                        type: ArgumentType.STRING,
                    }
                },
            },

            {
                opcode: 'setEspnowKey',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.setEspnowKey',
                    default: 'set ESP-NOW encryption key [KEY]',
                    description: 'Esp32S4SMore.setEspnowKey'
                }),
                arguments:{
                    KEY:{
                        type: ArgumentType.STRING,
                    },
                },
            },

            // {
            //     opcode: 'espnowAddPeer',
            //     blockType: BlockType.COMMAND,
            //     blockIconURI:icon,
            //     text: formatMessage({
            //         id: 'Esp32S4SMore.espnowAddPeer',
            //         default: 'add device [MAC] id [ID] network [NET] encrypt [ENCRY] local master key [KEY]',
            //         description: 'Esp32S4SMore.espnowAddPeer'
            //     }),
            //     arguments:{
            //         KEY:{
            //             type: ArgumentType.STRING,
            //         },
            //     },
            // },


            {
                opcode: 'espnowSendData',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.espnowSendData',
                    default: 'send to device id [NUM] data [DATA]',
                    description: 'Esp32S4SMore.espnowSendData'
                }),
                arguments:{
                    NUM:{
                        type: ArgumentType.NUMBER,
                    },
                    DATA:{
                        type: ArgumentType.STRING,
                    },
                },
            },

            {
                opcode: 'espnowSendDataAll',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.espnowSendDataAll',
                    default: 'send to all device data [DATA]',
                    description: 'Esp32S4SMore.espnowSendDataAll'
                }),
                arguments:{
                    DATA:{
                        type: ArgumentType.STRING,
                    },
                },
            },

            {
                opcode: 'espnowGetMode',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.espnowGetMode',
                    default: 'get my address mode [MODE]',
                    description: 'Esp32S4SMore.espnowGetMode'
                }),
                arguments:{
                    MODE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_MODE'
                    },
                },
                disableMonitor:true
            },
            {
                opcode: 'espnowGetDeviceInfo',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.espnowGetDeviceInfo',
                    default: 'get device info from ssid [SSID]',
                    description: 'Esp32S4SMore.espnowGetDeviceInfo'
                }),
                arguments:{
                    SSID:{
                        type: ArgumentType.STRING,
                    },
                },
                disableMonitor:true
            },

            {
                opcode: 'espnowRecived',
                blockType: BlockType.BOOLEAN,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.espnowRecived',
                    default: 'message recived ?',
                    description: 'Esp32S4SMore.espnowRecived'
                }),
                arguments:{
                   
                },
                disableMonitor:true
            },

            {
                opcode: 'espnowGetMess',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.espnowGetMess',
                    default: 'get message',
                    description: 'Esp32S4SMore.espnowGetMess'
                }),
                arguments:{
                   
                },
                disableMonitor:true
            },

            {
                opcode: 'espnowRecFromAddr',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.espnowRecFromAddr',
                    default: 'received from address',
                    description: 'Esp32S4SMore.espnowRecFromAddr'
                }),
                arguments:{
                   
                },
                disableMonitor:true
            },

            {
                opcode: 'espnowMessSent',
                blockType: BlockType.BOOLEAN,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.espnowMessSent',
                    default: 'message sent ?',
                    description: 'Esp32S4SMore.espnowMessSent'
                }),
                arguments:{
                   
                },
                disableMonitor:true
            },

            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'Esp32S4SMore.uart',
                    default: 'UART',
                    description: 'Esp32S4SMore.uart'
                }),
            },
            {
                opcode: 'startUart',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.startUart',
                    default: 'start UART [NUM] baud rate [BAUD] port [CHOICE]',
                    description: 'Esp32S4SMore.startUart'
                }),
                arguments:{
                    NUM:{
                        type: ArgumentType.STRING,
                        menu:'MENU_UART_NUM'
                    },
                    BAUD:{
                        type: ArgumentType.NUMBER,
                    },
                    CHOICE:{
                        type: ArgumentType.STRING,
                    },
                },
            },

            {
                opcode: 'startUartTxRx',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.startUartTxRx',
                    default: 'start UART [NUM] baud rate [BAUD] TX [TX] RX [RX]',
                    description: 'Esp32S4SMore.startUartTxRx'
                }),
                arguments:{
                    NUM:{
                        type: ArgumentType.STRING,
                        menu:'MENU_UART_NUM'
                    },
                    BAUD:{
                        type: ArgumentType.NUMBER,
                    },
                    TX:{
                        type: ArgumentType.NUMBER,
                    },
                    RX:{
                        type: ArgumentType.NUMBER,
                    },
                },
            },

            {
                opcode: 'stopUart',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.stopUart',
                    default: 'stop UART [NUM]',
                    description: 'Esp32S4SMore.stopUart'
                }),
                arguments:{
                    NUM:{
                        type: ArgumentType.STRING,
                        menu:'MENU_UART_NUM'
                    }
                },
            },

            {
                opcode: 'writeUart',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.writeUart',
                    default: 'write to UART [NUM] [TEXT]',
                    description: 'Esp32S4SMore.writeUart'
                }),
                arguments:{
                    NUM:{
                        type: ArgumentType.STRING,
                        menu:'MENU_UART_NUM'
                    },
                    TEXT:{
                        type: ArgumentType.STRING,
                    },
                },
            },

            {
                opcode: 'writeUartByte',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.writeUartByte',
                    default: 'write to UART [NUM] [BYTES]',
                    description: 'Esp32S4SMore.writeUartByte'
                }),
                arguments:{
                    NUM:{
                        type: ArgumentType.STRING,
                        menu:'MENU_UART_NUM'
                    },
                    BYTES:{
                        type: ArgumentType.NUMBER,
                    },
                },
            },

            {
                opcode: 'readUart',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.readUart',
                    default: 'read from UART [NUM]',
                    description: 'Esp32S4SMore.readUart'
                }),
                arguments:{
                    NUM:{
                        type: ArgumentType.STRING,
                        menu:'MENU_UART_NUM'
                    },
                },
                disableMonitor:true
            },

            {
                opcode: 'readByteUart',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.readByteUart',
                    default: 'read byte from UART [NUM]',
                    description: 'Esp32S4SMore.readByteUart'
                }),
                arguments:{
                    NUM:{
                        type: ArgumentType.STRING,
                        menu:'MENU_UART_NUM'
                    },
                },
                disableMonitor:true
            },


            {
                opcode: 'readByteNumUart',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.readByteNumUart',
                    default: 'read [NUM] characters from UART [PORT]',
                    description: 'Esp32S4SMore.readByteNumUart'
                }),
                arguments:{
                    PORT:{
                        type: ArgumentType.STRING,
                        menu:'MENU_UART_NUM'
                    },

                    NUM:{
                        type: ArgumentType.NUMBER,
                    },
                },
                disableMonitor:true
            },

            {
                opcode: 'uartAvail',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.uartAvail',
                    default: 'UART [PORT] data available?',
                    description: 'Esp32S4SMore.uartAvail'
                }),
                arguments:{
                    PORT:{
                        type: ArgumentType.STRING,
                        menu:'MENU_UART_NUM'
                    },
                },
                disableMonitor:true
            },

            {
                opcode: 'setUartTimeout',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.setUartTimeout',
                    default: 'set UART [PORT] timeout [NUM]',
                    description: 'Esp32S4SMore.setUartTimeout'
                }),
                arguments:{
                    PORT:{
                        type: ArgumentType.STRING,
                        menu:'MENU_UART_NUM'
                    },
                    NUM:{
                        type: ArgumentType.NUMBER,
                    },
                },
            },


            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'Esp32S4SMore.i2c',
                    default: 'I2C',
                    description: 'Esp32S4SMore.i2c'
                }),
            },
            {
                opcode: 'startI2CPort',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.startI2CPort',
                    default: 'start I2C PORT [PORT] freq [FREQ]',
                    description: 'Esp32S4SMore.startI2CPort'
                }),
                arguments:{
                    PORT:{
                        type: ArgumentType.STRING,
                        menu:'MENU_I2C_NUM'
                    },
                    FREQ:{
                        type: ArgumentType.STRING,
                        menu:'MENU_I2C_FREQ'
                    },
                },
            },

            {
                opcode: 'startI2CSDA',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.startI2CSDA',
                    default: 'start I2C SDA [SDA] SCL [SCL] freq [FREQ]',
                    description: 'Esp32S4SMore.startI2CSDA'
                }),
                arguments:{
                    SDA:{
                        type: ArgumentType.NUMBER
                    },
                    SCL:{
                        type: ArgumentType.NUMBER
                    },
                    FREQ:{
                        type: ArgumentType.STRING,
                        menu:'MENU_I2C_FREQ'
                    },
                },
            },

            {
                opcode: 'stopI2C',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.stopI2C',
                    default: 'stop I2C',
                    description: 'Esp32S4SMore.stopI2C'
                }),
                arguments:{
                    
                },
            },
            {
                opcode: 'setI2CAddr',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.setI2CAddr',
                    default: 'set [I2C] device address [HEX]',
                    description: 'Esp32S4SMore.setI2CAddr'
                }),
                arguments:{
                    I2C:{
                        type: ArgumentType.STRING,
                        menu:'MENU_I2C_NUM'
                    },
                    HEX:{
                        type: ArgumentType.NUMBER
                    },
                },
            },
            {
                opcode: 'getAllDevice',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.getAllDevice',
                    default: 'get all devices on [PORT]',
                    description: 'Esp32S4SMore.getAllDevice'
                }),
                arguments:{
                    PORT:{
                        type: ArgumentType.STRING,
                        menu:'MENU_I2C_NUM'
                    },
                },
                disableMonitor:true
            },

            {
                opcode: 'readBytesI2C',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.readBytesI2C',
                    default: 'read [NUM] bytes from [PORT] register [ADDR]',
                    description: 'Esp32S4SMore.readBytesI2C'
                }),
                arguments:{
                    NUM:{
                        type: ArgumentType.NUMBER
                    },
                    PORT:{
                        type: ArgumentType.STRING,
                        menu:'MENU_I2C_NUM'
                    },
                    ADDR:{
                        type: ArgumentType.NUMBER
                    },
                },
                disableMonitor:true
            },


            {
                opcode: 'readValueI2C',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.readValueI2C',
                    default: 'read [NUM] values from [PORT] as [CHOICE] ',
                    description: 'Esp32S4SMore.readValueI2C'
                }),
                arguments:{
                    NUM:{
                        type: ArgumentType.NUMBER
                    },
                    PORT:{
                        type: ArgumentType.STRING,
                        menu:'MENU_I2C_NUM'
                    },
                    CHOICE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_I2C_UINT'
                    },
                },
                disableMonitor:true
            },

            {
                opcode: 'writeI2C',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.writeI2C',
                    default: 'write [NUM1] to [I2C] register [NUM2]',
                    description: 'Esp32S4SMore.writeI2C'
                }),
                arguments:{
                    I2C:{
                        type: ArgumentType.STRING,
                        menu:'MENU_I2C_NUM'
                    },
                    NUM1:{
                        type: ArgumentType.STRING
                    },
                    NUM2:{
                        type: ArgumentType.STRING
                    },
                },
            },
            {
                opcode: 'writeI2CDir',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.writeI2CDir',
                    default: 'write [NUM] directly to [I2C] as [CHOICE]',
                    description: 'Esp32S4SMore.writeI2CDir'
                }),
                arguments:{
                    I2C:{
                        type: ArgumentType.STRING,
                        menu:'MENU_I2C_NUM'
                    },
                    NUM:{
                        type: ArgumentType.STRING
                    },
                    CHOICE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_I2C_UINT'
                    },
                },
            },


            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'Esp32S4SMore.spi',
                    default: 'SPI',
                    description: 'Esp32S4SMore.spi'
                }),
            },
            {
                opcode: 'startSpi',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.startSpi',
                    default: 'start SPI SCK [SCK] MOSI [MOSI] MISO [MISO] first bit [FIRST] mode [MODE]',
                    description: 'Esp32S4SMore.startSpi'
                }),
                arguments:{
                    SCK:{
                        type: ArgumentType.NUMBER
                    },
                    MOSI:{
                        type: ArgumentType.NUMBER
                    },
                    MISO:{
                        type: ArgumentType.NUMBER
                    },
                    FIRST:{
                        type: ArgumentType.STRING,
                        menu:'MENU_SPI_FIRSTBIT'
                    },
                    MODE:{
                        type: ArgumentType.STRING,
                        menu:'MENU_SPI_MODE'
                    },
                },
            },

            {
                opcode: 'stopSpi',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.stopSpi',
                    default: 'stop SPI',
                    description: 'Esp32S4SMore.stopSpi'
                }),
                arguments:{
                    
                },
            },

            {
                opcode: 'sendSpi',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.sendSpi',
                    default: 'send data [VAR] through [SPI] ',
                    description: 'Esp32S4SMore.sendSpi'
                }),
                arguments:{
                    VAR:{
                        type: ArgumentType.STRING
                    },
                    SPI:{
                        type: ArgumentType.STRING,
                        menu:'MENU_SPI_TYPE'
                    }
                },
            },

            {
                opcode: 'sendReciveSpi',
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.sendReciveSpi',
                    default: 'send [VAR1] and receive into [VAR2] through [SPI]',
                    description: 'Esp32S4SMore.sendReciveSpi'
                }),
                arguments:{
                    VAR1:{
                        type: ArgumentType.STRING
                    },
                    VAR2:{
                        type: ArgumentType.STRING
                    },
                    SPI:{
                        type: ArgumentType.STRING,
                        menu:'MENU_SPI_TYPE'
                    }
                },
            },

            {
                opcode: 'readBytesSpi',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.readBytesSpi',
                    default: 'read [NUM] bytes from [SPI]',
                    description: 'Esp32S4SMore.readBytesSpi'
                }),
                arguments:{
                    NUM:{
                        type: ArgumentType.NUMBER
                    },
                    SPI:{
                        type: ArgumentType.STRING,
                        menu:'MENU_SPI_TYPE'
                    }
                },
                disableMonitor:true
            },
            {
                opcode: 'readIntoSpi',
                blockType: BlockType.REPORTER,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'Esp32S4SMore.readIntoSpi',
                    default: 'read from [SPI] into [VAR]',
                    description: 'Esp32S4SMore.readIntoSpi'
                }),
                arguments:{
                    VAR:{
                        type: ArgumentType.STRING
                    },
                    SPI:{
                        type: ArgumentType.STRING,
                        menu:'MENU_SPI_TYPE'
                    }
                },
                disableMonitor:true
            },
            
        ],

        menus: {
            MENU_SPI_TYPE:{
                acceptReporters: false,
                items: [
                    { text: "SPI2_HOST", value: '1' },
                    { text: "SPI3_HOST", value: '2' },
                ]
            },
            MENU_SPI_MODE:{
                acceptReporters: false,
                items: [
                    { text: "0", value: '0' },
                    { text: "1", value: '1' },
                    { text: "2", value: '2' },
                    { text: "3", value: '3' },
                ]
            },
            MENU_SPI_FIRSTBIT:{
                acceptReporters: false,
                items: [
                    { text: "MSB", value: 'MSB' },
                    { text: "LSB", value: 'LSB' },
                ]
            },
            MENU_I2C_UINT:{
                acceptReporters: false,
                items: [
                    { text: "UINT8", value: '0' },
                    { text: "INT8", value: '1' },
                    { text: "UINT16", value: '2' },
                    { text: "INT16", value: '3' },
                    { text: "UINT32", value: '4' },
                    { text: "INT32", value: '5' },
                    { text: "FLOAT", value: '6' },
                ]
            },
            MENU_I2C_FREQ:{
                acceptReporters: false,
                items: [
                    { text: "100K", value: '100000' },
                    { text: "400K", value: '400000' },
                ]
            },
            MENU_I2C_NUM:{
                acceptReporters: false,
                items: [
                    { text: "i2c0", value: '0' },
                    { text: "i2c1", value: '1' },
                ]
            },
            MENU_UART_NUM:{
                acceptReporters: false,
                items: [
                    { text: "0", value: '0' },
                    { text: "1", value: '1' },
                    { text: "2", value: '2' },
                ]
            },
            MENU_MODE:{
                acceptReporters: false,
                items: [
                    { text: "STA", value: '0' },
                    { text: "AP", value: '1' },
                ]
            },
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
        // this.runtime.emit('ADD_VARIABLE_ESPMORE','sta_record');
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