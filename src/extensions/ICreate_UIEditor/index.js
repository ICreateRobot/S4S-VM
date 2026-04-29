// UI编辑器
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');

class UIEditor {
    constructor(runtime) {
        this.runtime = runtime;
        this.runtime.on('UI_ADD_COMPONENT', this.addFromUI.bind(this));
        this.runtime.on('UI_UPDATE_COMPONENT', this.updateFromUI.bind(this));
        this.runtime.on('UI_DELETE_COMPONENT', this.deleteFromUI.bind(this));
        this.runtime.on('UI_CLEAR_ALL', this.clearAllFromUI.bind(this)); 

        this.components = {
            title: [],
            label: [],
            rectangle: [],
            circle: [],
            line: [],

            button: [],
            
        };
    }

    //添加组件（从UI编辑器界面传来数据）
    addFromUI({ type, id, name }) {
        this.components[type].push({
            id: id,
            name: name
        });

        setTimeout(() => {
            this.runtime.extensionManager.refreshBlocks();
        }, 10);
    }

    // 更新组件（从UI编辑器界面传来数据）
    updateFromUI({ id, name }) {
        for (const type in this.components) {
            const list = this.components[type];

            const item = list.find(i => i.id === id);
            if (item) {
                item.name = name;
                break;
            }
        }

        setTimeout(() => {
            this.runtime.extensionManager.refreshBlocks();
        }, 10);
    }

    // 删除组件（从UI编辑器界面传来数据）
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
            return [[' ', '__none__']];
        }

        return list.map(item => ({ text: item.name , value: item.id }));
    }

    // 是否存在组件
    has(type) {
        return (this.components[type]?.length || 0) > 0;
    }


    // =========================
    // block 定义
    // =========================
    getInfo() {
        const blocks = [];

        // 背景模块永远存在
        blocks.push(
            {
                blockType: BlockType.LABEL,
                text: formatMessage({
                    id: 'UIEditor.screen',
                    default: 'Screen',
                }),
            },
            {
                opcode: 'setScreenColor',//设置背景色
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'UIEditor.setScreenColor',
                    default: 'set Screen background color [COLOR]'
                }),
                arguments: {
                    COLOR: {
                        type: ArgumentType.COLOR,
                        defaultValue:'#000000'
                    }
                }
            },
        );

        // =================================================
        // 标题
        // =================================================
        if (this.has('title')) {
            blocks.push(
                {
                    blockType: BlockType.LABEL,
                    text: formatMessage({
                        id: 'UIEditor.title',
                        default: 'Title',
                    }),
                },
                {
                    opcode: 'setTitleText',//设置标题文本
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setTitleText',
                        default: 'set Title [TITLE] text [TEXT]'
                    }),
                    arguments: {
                        TITLE: {
                            type: ArgumentType.STRING,
                            menu: 'titleMenu'
                        },
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Title'
                        } 
                    }  
                },
                {
                    opcode: 'setTitleColor',//设置标题文本颜色
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setTitleColor',
                        default: 'set Title [TITLE] color [COLOR]'
                    }),
                    arguments: {
                        TITLE: {
                            type: ArgumentType.STRING,
                            menu: 'titleMenu'
                        },
                        COLOR: {
                            type: ArgumentType.COLOR,
                            defaultValue: '#000000'
                        } 
                    }  
                },
                {
                    opcode: 'setTitleBackgroundColor',//设置标题背景颜色
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setTitleBackgroundColor',
                        default: 'set Title [TITLE] background color [COLOR]'
                    }),
                    arguments: {
                        TITLE: {
                            type: ArgumentType.STRING,
                            menu: 'titleMenu'
                        },
                        COLOR: {
                            type: ArgumentType.COLOR,
                            defaultValue: '#ffffff'
                        } 
                    }  
                },
                {
                    opcode: 'setTitleFontSize',//设置字体大小
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setTitleFontSize',
                        default: 'set Title [TITLE] font size [SIZE]'
                    }),
                    arguments: {
                        TITLE: {
                            type: ArgumentType.STRING,
                            menu: 'titleMenu'
                        },
                        SIZE: {
                            type: ArgumentType.STRING,
                            menu: 'fontSizeMenu',
                        } 
                    }  
                },
            )
        }

        // =================================================
        // 标签
        // =================================================
        if (this.has('label')) {
            blocks.push(
                {
                    blockType: BlockType.LABEL,
                    text: formatMessage({
                        id: 'UIEditor.label',
                        default: 'Label',
                    }),
                },
                {
                    opcode: 'setLabelText',//设置标签文本
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setLabelText',
                        default: 'set Label [LABEL] text [TEXT]'
                    }),
                    arguments: {
                        LABEL: {
                            type: ArgumentType.STRING,
                            menu: 'labelMenu'
                        },
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Label'
                        }
                    }
                },
                {
                    opcode: 'setLabelPosition',//设置标签位置
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setLabelPosition',
                        default: 'set Label [LABEL] position x [X] y [Y]'
                    }),
                    arguments: {
                        LABEL: {
                            type: ArgumentType.STRING,
                            menu: 'labelMenu'
                        },
                        X: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {   
                    opcode: 'setLabelPositionX',//设置标签位置-X
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setLabelPositionX',
                        default: 'set Label [LABEL] position x [X]'
                    }),
                    arguments: {
                        LABEL: {
                            type: ArgumentType.STRING,
                            menu: 'labelMenu'
                        },
                        X: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'setLabelPositionY',//设置标签位置-Y
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setLabelPositionY',
                        default: 'set Label [LABEL] position y [Y]'
                    }),   
                    arguments: {
                        LABEL: {
                            type: ArgumentType.STRING,
                            menu: 'labelMenu'
                        },
                        Y: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'setLabelColor',//设置标签文本颜色
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setLabelColor',
                        default: 'set Label [LABEL] color [COLOR]'
                    }),
                    arguments: {
                        LABEL: {
                            type: ArgumentType.STRING,
                            menu: 'labelMenu'
                        },
                        COLOR: {
                            type: ArgumentType.COLOR,
                            defaultValue: '#000000'
                        }
                    }
                },
                {
                    opcode: 'setLabelBackgroundColor',//设置标签背景颜色
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setLabelBackgroundColor',
                        default: 'set Label [LABEL] background color [COLOR]'
                    }),
                    arguments: {
                        LABEL: {
                            type: ArgumentType.STRING,
                            menu: 'labelMenu'
                        },
                        COLOR: {
                            type: ArgumentType.COLOR,
                            defaultValue: '#ffffff'
                        }
                    }
                },
                {
                    opcode: 'setLabelFontSize',//设置标签字体大小
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setLabelFontSize',
                        default: 'set Label [LABEL] font size [SIZE]'
                    }),
                    arguments: {
                        LABEL: {
                            type: ArgumentType.STRING,
                            menu: 'labelMenu'
                        },
                        SIZE: {
                            type: ArgumentType.STRING,
                            menu: 'fontSizeMenu'
                        }
                    }
                },
            )
        }

        // =================================================
        // 矩形
        // =================================================
        if (this.has('rectangle')) {
            blocks.push(
                {
                    blockType: BlockType.LABEL,
                    text: formatMessage({
                        id: 'UIEditor.rectangle',
                        default: 'Rectangle',
                    }),
                },
                {
                    opcode: 'setRectangleSize',//设置矩形大小
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setRectangleSize',
                        default: 'set Rectangle [RECTANGLE] size width [WIDTH] height [HEIGHT]'
                    }),
                    arguments: {
                        RECTANGLE: {
                            type: ArgumentType.STRING,
                            menu: 'rectangleMenu'
                        },
                        WIDTH: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50
                        },
                        HEIGHT: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50
                        }       
                    }
                },
                {
                    opcode: 'setRectangleSizeWidth',//设置矩形宽度
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setRectangleSizeWidth',
                        default: 'set Rectangle [RECTANGLE] size width [WIDTH]'
                    }),
                    arguments: {
                        RECTANGLE: {
                            type: ArgumentType.STRING,
                            menu: 'rectangleMenu'
                        },
                        WIDTH: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50
                        }
                    }
                },
                {   
                    opcode: 'setRectangleSizeHeight',//设置矩形高度
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setRectangleSizeHeight',
                        default: 'set Rectangle [RECTANGLE] size height [HEIGHT]'
                    }),
                    arguments: {
                        RECTANGLE: {
                            type: ArgumentType.STRING,
                            menu: 'rectangleMenu'
                        },
                        HEIGHT: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50
                        }
                    }
                },
                {
                    opcode: 'setRectanglePosition',//设置矩形位置
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setRectanglePosition',
                        default: 'set Rectangle [RECTANGLE] position x [X] y [Y]'
                    }),
                    arguments: {
                        RECTANGLE: {
                            type: ArgumentType.STRING,
                            menu: 'rectangleMenu'
                        },
                        X: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }       
                    }
                },
                {
                    opcode: 'setRectanglePositionX',//设置矩形位置-X
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setRectanglePositionX',
                        default: 'set Rectangle [RECTANGLE] position x [X]'
                    }),
                    arguments: {
                        RECTANGLE: {
                            type: ArgumentType.STRING,
                            menu: 'rectangleMenu'
                        },
                        X: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'setRectanglePositionY',//设置矩形位置-Y
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setRectanglePositionY',
                        default: 'set Rectangle [RECTANGLE] position y [Y]'
                    }),
                    arguments: {
                        RECTANGLE: {
                            type: ArgumentType.STRING,
                            menu: 'rectangleMenu'
                        },
                        Y: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'setRectangleColor',//设置矩形颜色
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setRectangleColor',
                        default: 'set Rectangle [RECTANGLE] color [COLOR]'
                    }),
                    arguments: {
                        RECTANGLE: {
                            type: ArgumentType.STRING,
                            menu: 'rectangleMenu'
                        },
                        COLOR: {
                            type: ArgumentType.COLOR,
                            defaultValue: '#000000'
                        }
                    }
                },
                {
                    opcode: 'setRectangleBorderColor',//设置矩形边框颜色
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setRectangleBorderColor',
                        default: 'set Rectangle [RECTANGLE] border color [COLOR]'
                    }),
                    arguments: {
                        RECTANGLE: {
                            type: ArgumentType.STRING,
                            menu: 'rectangleMenu'
                        },
                        COLOR: {
                            type: ArgumentType.COLOR,
                            defaultValue: '#ffffff'
                        }
                    }
                },
            )
        }

        // =================================================
        // 圆形
        // =================================================
        if (this.has('circle')) {
            blocks.push(
                {
                    blockType: BlockType.LABEL,
                    text: formatMessage({
                        id: 'UIEditor.circle',
                        default: 'Circle',
                    }),
                },
                {
                    opcode: 'setCircleSize',//设置圆形大小
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setCircleSize',
                        default: 'set Circle [CIRCLE] size radius [RADIUS]'
                    }),
                    arguments: {
                        CIRCLE: {
                            type: ArgumentType.STRING,
                            menu: 'circleMenu'
                        },
                        RADIUS: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 30
                        }
                    }
                },
                {
                    opcode: 'setCirclePosition',//设置圆形位置
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setCirclePosition',
                        default: 'set Circle [CIRCLE] position x [X] y [Y]'
                    }),
                    arguments: {
                        CIRCLE: {
                            type: ArgumentType.STRING,
                            menu: 'circleMenu'
                        },
                        X: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y: {        
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'setCirclePositionX',//设置圆形位置-X
                    blockType: BlockType.COMMAND,
                    text: formatMessage({       
                        id: 'UIEditor.setCirclePositionX',
                        default: 'set Circle [CIRCLE] position x [X]'
                    }),
                    arguments: {
                        CIRCLE: {
                            type: ArgumentType.STRING,
                            menu: 'circleMenu'
                        },
                        X: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'setCirclePositionY',//设置圆形位置-Y
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setCirclePositionY',  
                        default: 'set Circle [CIRCLE] position y [Y]'                    
                    }),
                    arguments: {
                        CIRCLE: {
                            type: ArgumentType.STRING,
                            menu: 'circleMenu'
                        },
                        Y: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'setCircleColor',//设置圆形颜色
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setCircleColor',
                        default: 'set Circle [CIRCLE] color [COLOR]'
                    }),
                    arguments: {
                        CIRCLE: {
                            type: ArgumentType.STRING,
                            menu: 'circleMenu'
                        },
                        COLOR: {
                            type: ArgumentType.COLOR,
                            defaultValue: '#000000'
                        }
                    }
                },
                {
                    opcode: 'setCircleBorderColor',//设置圆形边框颜色
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'UIEditor.setCircleBorderColor',
                        default: 'set Circle [CIRCLE] border color [COLOR]'
                    }),
                    arguments: {
                        CIRCLE: {
                            type: ArgumentType.STRING,
                            menu: 'circleMenu'
                        },
                        COLOR: {
                            type: ArgumentType.COLOR,
                            defaultValue: '#ffffff'
                        }
                    }
                },

            )
        }

        // =================================================
        // 线条
        // =================================================
        // if (this.has('line')) {
        //     blocks.push(
        //         {
        //             blockType: BlockType.LABEL,
        //             text: formatMessage({
        //                 id: 'UIEditor.line',
        //                 default: 'Line',
        //             }),
        //         },
                
        //     )
        // }   

       

        return {
            id: 'UIEditor',
            name: 'UI Editor',
            color1: '#55DAD1',
            color2: '#45C2B9',
            color3: '#36AAA1',

            blocks: blocks,

            menus: {
                titleMenu: {
                    acceptReporters: false,
                    items: this.getMenu('title')
                },
                labelMenu: {
                    acceptReporters: false,
                    items: this.getMenu('label')
                },
                rectangleMenu: {
                    acceptReporters: false,
                    items: this.getMenu('rectangle')
                },
                circleMenu: {
                    acceptReporters: false,
                    items: this.getMenu('circle')
                },
                buttonMenu: {
                    acceptReporters: false,
                    items: this.getMenu('button')
                },
                fontSizeMenu: {
                    acceptReporters: false,
                    items: [
                        { text: 'small', value: "12" },
                        { text: 'medium', value: "14" },
                        { text: 'large', value: "16" }
                    ]
                }
            }
        };
    }






    setScreenColor(args, util) {
        console.log(this.runtime.runMode)
    }


   


    
}

module.exports = UIEditor;