// iot
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');

const icon = require('./uiEditor.svg');

class UIIoT {
    constructor(runtime) {
        this.runtime = runtime;
        this.runtime.on('IoT_ADD_COMPONENT', this.addFromUI.bind(this));
        this.runtime.on('IoT_UPDATE_COMPONENT', this.updateFromUI.bind(this));
        this.runtime.on('IoT_DELETE_COMPONENT', this.deleteFromUI.bind(this));
        this.runtime.on('IoT_CLEAR_ALL', this.clearAllFromUI.bind(this));

        //记录组件数据
        this.components = {
            title:[],
            label: [],
            image: [],
            text: [],
            button: [],
            switch: [],
            slider: [],
            gauge: [],
            joystick: []
        };
    }

    //添加组件
    addFromUI({ type, id, name }) {
        this.components[type].push({
            id: id,
            name: name
        });

        setTimeout(() => {
            this.runtime.extensionManager.refreshBlocks();
        }, 10);
    }

    // 更新组件
    updateFromUI({ id, name }) {
        for (const type in this.components) {
            console.log('更新组件',{id, name})
            const list = this.components[type];

            const item = list.find(i => i.id === id);
            console.log(list)
            console.log(item)
            if (item) {
                item.name = name;
                break;
            }
        }

        setTimeout(() => {
            this.runtime.extensionManager.refreshBlocks();
        }, 10);
    }

    // 删除组件
    deleteFromUI({ id }) {
        for (const type in this.components) {
            this.components[type] = this.components[type].filter(i => i.id !== id);
        }

        setTimeout(() => {
            this.runtime.extensionManager.refreshBlocks();
        }, 10);
    }

    // 清空所有组件
    clearAllFromUI() {
        for (const type in this.components) {
            this.components[type] = [];
        }

        setTimeout(() => {
            this.runtime.extensionManager.refreshBlocks();
        }, 10);
    }


    // 获取某类组件菜单
    getMenu(type) { 
        const list = this.components[type] || [];
        if (list.length === 0) {
            return [{ text: " " , value: "none" }];
        }

        return list.map(item => ({ text: item.name , value: item.name }));
    }


    // =========================
    // block 定义
    // =========================
    getInfo() {
        const blocks = [];

        blocks.push(
            // {
            //     blockType: BlockType.LABEL,
            //     text: "hahaha",
            // },

            {
                opcode: 'showQRCode',//将所选引脚配置为输入模式
                blockType: BlockType.COMMAND,
                blockIconURI:icon,
                text: formatMessage({
                    id: 'UIIoT.showQRCode',
                    default: 'Remote qrcode show in x [X] y[Y] size[SIZE]',
                    description: 'UIIoT.showQRCode'
                }),
                arguments: {
                    X: {
                        type: ArgumentType.NUMBER,
                        defaultValue:'50'
                    },
                    Y: {
                        type: ArgumentType.NUMBER,
                        defaultValue:'50'
                    },
                    SIZE: {
                        type: ArgumentType.NUMBER,
                        defaultValue:'140'
                    },
                }
            },
            // =====================
            // LABEL
            // =====================
            {
                opcode: 'labelCallback',
                blockType: BlockType.HATCUT,
                hideFromPalette: true,
                text: formatMessage({
                    id: 'UIIoT.labelCallback',
                    default: 'Label [ITEM]   Set data [DATA]',
                    description: 'UIIoT.labelCallback'
                }),//Event 3000 ms

                arguments: {
                    ITEM: {
                        type: ArgumentType.STRING,
                        menu: 'labelMenu'
                    },
                    DATA: {
                        type: ArgumentType.STRING,
                        defaultValue: ''
                    }                    
                }
            },
 
            // =====================
            // 图像
            // =====================
            {
                opcode: 'imageCallback',
                blockType: BlockType.HATCUT,
                hideFromPalette: true,
                text: formatMessage({
                    id: 'UIIoT.imageCallback',
                    default: 'Image [ITEM]   Set image url [DATA]',
                    description: 'UIIoT.imageCallback'
                }),
                
                arguments: {
                    ITEM: {
                        type: ArgumentType.STRING,
                        menu: 'imageMenu'
                    },
                    DATA: {
                        type: ArgumentType.STRING,
                        defaultValue: ''
                    }     
                }
            },

            // =====================
            // 文本
            // =====================
            {
                opcode: 'textCallback',
                blockType: BlockType.HAT,
                hideFromPalette: true,
                text: formatMessage({
                    id: 'UIIoT.textCallback',
                    default: 'Text [ITEM] Callback width:iot_text_value',
                    description: 'UIIoT.textCallback'
                }),
                
                arguments: {
                    ITEM: {
                        type: ArgumentType.STRING,
                        menu: 'textMenu'
                    }
                }
            },

            // =====================
            // 按钮
            // =====================
            {
                opcode: 'buttonCallback',
                blockType: BlockType.HAT,
                hideFromPalette: true,
                text: formatMessage({
                    id: 'UIIoT.buttonCallback',
                    default: 'Button [ITEM] Callback',
                    description: 'UIIoT.buttonCallback'
                }),
                
                arguments: {
                    ITEM: {
                        type: ArgumentType.STRING,
                        menu: 'buttonMenu'
                    }
                }
            },

            // =====================
            // 开关
            // =====================
            {
                opcode: 'switchCallback',
                blockType: BlockType.HAT,
                hideFromPalette: true,
                text: formatMessage({
                    id: 'UIIoT.switchCallback',
                    default: 'Switch [ITEM] Callback width:iot_switch_value',
                    description: 'UIIoT.switchCallback'
                }),
                
                arguments: {
                    ITEM: {
                        type: ArgumentType.STRING,
                        menu: 'switchMenu'
                    }
                }
            },

            // =====================
            // 滑块
            // =====================
            {
                opcode: 'sliderCallback',
                blockType: BlockType.HAT,
                hideFromPalette: true,
                text: formatMessage({
                    id: 'UIIoT.sliderCallback',
                    default: 'Slider [ITEM] Callback width:iot_slider_value',
                    description: 'UIIoT.sliderCallback'
                }),
                
                arguments: {
                    ITEM: {
                        type: ArgumentType.STRING,
                        menu: 'sliderMenu'
                    }
                }
            },

            // =====================
            // 仪表盘
            // =====================
            {
                opcode: 'gaugeCallback',
                blockType: BlockType.HATCUT,
                hideFromPalette: true,
                text: formatMessage({
                    id: 'UIIoT.gaugeCallback',
                    default: 'Gauge [ITEM] Set data [DATA]',
                    description: 'UIIoT.gaugeCallback'
                }),
                
                arguments: {
                    ITEM: {
                        type: ArgumentType.STRING,
                        menu: 'gaugeMenu'
                    },
                    DATA: {
                        type: ArgumentType.STRING,
                        defaultValue: ''
                    }     
                }
            },

            // =====================
            // 摇杆
            // =====================
            {
                opcode: 'joystickCallback',
                blockType: BlockType.HAT,
                hideFromPalette: true,
                text: formatMessage({
                    id: 'UIIoT.joystickCallback',
                    default: 'Joystick [ITEM] Callback width:iot_joystick_Xvalue,iot_joystick_Yvalue',
                    description: 'UIIoT.joystickCallback'
                }),
                
                arguments: {
                    ITEM: {
                        type: ArgumentType.STRING,
                        menu: 'joystickMenu'
                    }
                }
            }
        );

        return {
            id: 'UIIoT',
            name: 'IoT',
            color1: '#00897B',  // 主颜色
            color2: '#00796D',  // 次颜色（渐变）
            color3: '#00695F',  // 边框颜色
            menuIconURI: icon,

            blocks: blocks,

            menus: {
                labelMenu: {
                    acceptReporters: false,
                    items: this.getMenu('label')
                },
                imageMenu: {
                    acceptReporters: false,
                    items: this.getMenu('image')
                },
                textMenu: {
                    acceptReporters: false,
                    items: this.getMenu('text')
                },
                buttonMenu: {
                    acceptReporters: false,
                    items: this.getMenu('button')
                },
                switchMenu: {
                    acceptReporters: false,
                    items: this.getMenu('switch')
                },
                sliderMenu: {
                    acceptReporters: false,
                    items: this.getMenu('slider')
                },
                gaugeMenu: {
                    acceptReporters: false,
                    items: this.getMenu('gauge')
                },
                joystickMenu: {
                    acceptReporters: false,
                    items: this.getMenu('joystick')
                }
            }
        };
    }
}

module.exports = UIIoT;