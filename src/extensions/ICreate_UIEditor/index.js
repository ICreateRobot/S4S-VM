// UI编辑器
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');

const icon = require('./uiEditor.svg');

class UIEditor {
    constructor(runtime) {
        this.runtime = runtime;
        this.runtime.on('UI_ADD_COMPONENT', this.addFromUI.bind(this));
        this.runtime.on('UI_UPDATE_COMPONENT', this.updateFromUI.bind(this));
        this.runtime.on('UI_DELETE_COMPONENT', this.deleteFromUI.bind(this));
        this.runtime.on('UI_CLEAR_ALL', this.clearAllFromUI.bind(this)); 

        //记录组件数据
        this.components = {
            title: [],
            label: [],
            rectangle: [],
            circle: [],
            line: [],
            image: [],
            button: [],
            switch: [],
            slider: []
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

    // 清空所有组件（无需数据直接删）
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
        console.log(list)

        return list.map(item => ({ text: item.name , value: item.name }));
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
                    blockIconURI:icon,
                blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                            defaultValue: 40
                        },
                        HEIGHT: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 40
                        }       
                    }
                },
                {
                    opcode: 'setRectangleSizeWidth',//设置矩形宽度
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
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
                            defaultValue: 40
                        }
                    }
                },
                {   
                    opcode: 'setRectangleSizeHeight',//设置矩形高度
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
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
                            defaultValue: 40
                        }
                    }
                },
                {
                    opcode: 'setRectanglePosition',//设置矩形位置
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                            defaultValue: 20
                        }
                    }
                },
                {
                    opcode: 'setCirclePosition',//设置圆形位置
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
                    blockIconURI:icon,
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
        if (this.has('line')) {
            blocks.push(
                {
                    blockType: BlockType.LABEL,
                    text: formatMessage({
                        id: 'UIEditor.line',
                        default: 'Line',
                    }),
                },
                {
                    opcode: 'setLinePosition',//设置线条位置
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setLinePosition',
                        default: 'set Line [LINE] position x1 [X1] y1 [Y1] x2 [X2] y2 [Y2]'
                    }),
                    arguments: {
                        LINE: {
                            type: ArgumentType.STRING,
                            menu: 'lineMenu'
                        },
                        X1: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y1: {        
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        X2: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y2: {        
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'setLineColor',//设置线条颜色
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setLineColor',
                        default: 'set Line [LINE] color [COLOR]'
                    }),
                    arguments: {
                        LINE: {
                            type: ArgumentType.STRING,
                            menu: 'lineMenu'
                        },
                        COLOR: {
                            type: ArgumentType.COLOR,
                            defaultValue: '#FF0000'
                        }
                    }
                }, 
            )
        }   

        // =================================================
        // 图片
        // =================================================
        if (this.has('image')) {
            blocks.push(
                {
                    blockType: BlockType.LABEL,
                    text: formatMessage({
                        id: 'UIEditor.image',
                        default: 'Image',
                    }),
                },
                {
                    opcode: 'setImagePath',//设置图片路径
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setImagePath',
                        default: 'set Image [IMAGE] path [PATH]'
                    }),
                    arguments: {
                        IMAGE: {
                            type: ArgumentType.STRING,
                            menu: 'imageMenu'
                        },
                        PATH: {
                            type: ArgumentType.STRING,
                            defaultValue: '/img/1.png'
                        }
                    }
                },
                // {
                //     opcode: 'setImageSize',//设置图片大小
                //     blockType: BlockType.COMMAND,
                //     blockIconURI:icon,
                //     text: formatMessage({
                //         id: 'UIEditor.setImageSize',
                //         default: 'set Image [IMAGE] size width [WIDTH] height [HEIGHT]'
                //     }),
                //     arguments: {
                //         IMAGE: {
                //             type: ArgumentType.STRING,
                //             menu: 'imageMenu'
                //         },
                //         WIDTH: {
                //             type: ArgumentType.NUMBER,
                //             defaultValue: 70
                //         },
                //         HEIGHT: {
                //             type: ArgumentType.NUMBER,
                //             defaultValue: 70
                //         }
                //     }
                // },
                // {
                //     opcode: 'setImageSizeWidth',//设置图片宽度
                //     blockType: BlockType.COMMAND,
                //     blockIconURI:icon,
                //     text: formatMessage({
                //         id: 'UIEditor.setImageSizeWidth',
                //         default: 'set Image [IMAGE] size width [WIDTH]'
                //     }),
                //     arguments: {
                //         IMAGE: {
                //             type: ArgumentType.STRING,
                //             menu: 'imageMenu'
                //         },
                //         WIDTH: {
                //             type: ArgumentType.NUMBER,
                //             defaultValue: 70
                //         }
                //     }
                // },
                // {
                //     opcode: 'setImageSizeHeight',//设置图片高度
                //     blockType: BlockType.COMMAND,
                //     blockIconURI:icon,
                //     text: formatMessage({
                //         id: 'UIEditor.setImageSizeHeight',
                //         default: 'set Image [IMAGE] size height [HEIGHT]'
                //     }),
                //     arguments: {
                //         IMAGE: {
                //             type: ArgumentType.STRING,
                //             menu: 'imageMenu'
                //         },
                //         HEIGHT: {
                //             type: ArgumentType.NUMBER,
                //             defaultValue: 70
                //         }       
                //      }
                // },
                {
                    opcode: 'setImagePosition',//设置图片位置
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setImagePosition',
                        default: 'set Image [IMAGE] position x [X] y [Y]'
                    }),
                    arguments: {
                        IMAGE: {
                            type: ArgumentType.STRING,
                            menu: 'imageMenu'
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
                    opcode: 'setImagePositionX',//设置图片位置-x
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setImagePositionX',
                        default: 'set Image [IMAGE] position x [X]'
                    }),
                    arguments: {
                        IMAGE: {
                            type: ArgumentType.STRING,
                            menu: 'imageMenu'
                        },
                        X: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'setImagePositionY',//设置图片位置-y
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setImagePositionY',
                        default: 'set Image [IMAGE] position y [Y]'
                    }),
                    arguments: {
                        IMAGE: {
                            type: ArgumentType.STRING,
                            menu: 'imageMenu'
                        },
                        Y: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                }                
            )
        }

        // =================================================
        // 按钮
        // =================================================
        if (this.has('button')) {
            blocks.push(
                {
                    blockType: BlockType.LABEL,
                    text: formatMessage({
                        id: 'UIEditor.button',
                        default: 'Button',
                    }),
                },
                {
                    opcode: 'setButtonText',//设置按钮文本
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setButtonText',
                        default: 'set Button [BUTTON] text [TEXT]'
                    }),
                    arguments: {
                        BUTTON: {
                            type: ArgumentType.STRING,
                            menu: 'buttonMenu'
                        },
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'button'
                        }
                    }
                },
                {
                    opcode: 'setButtonSize',//设置按钮大小
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setButtonSize',
                        default: 'set Button [BUTTON] size width [WIDTH] height [HEIGHT]'
                    }),
                    arguments: {
                        BUTTON: {
                            type: ArgumentType.STRING,
                            menu: 'buttonMenu'
                        },
                        WIDTH: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 80
                        },
                        HEIGHT: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 40
                        }       
                    }
                },
                {
                    opcode: 'setButtonSizeWidth',//设置按钮宽度
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setButtonSizeWidth',
                        default: 'set Button [BUTTON] size width [WIDTH]'
                    }),
                    arguments: {
                        BUTTON: {
                            type: ArgumentType.STRING,
                            menu: 'buttonMenu'
                        },
                        WIDTH: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 80
                        }
                    }
                },
                {
                    opcode: 'setButtonSizeHeight',//设置按钮高度
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setButtonSizeHeight',
                        default: 'set Button [BUTTON] size height [HEIGHT]'
                    }),
                    arguments: {
                        BUTTON: {
                            type: ArgumentType.STRING,
                            menu: 'buttonMenu'
                        },
                        HEIGHT: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 40
                        }       
                    }
                },
                {
                    opcode: 'setButtonPosition',//设置按钮位置
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setButtonPosition',
                        default: 'set Button [BUTTON] position x [X] y [Y]'
                    }),
                    arguments: {
                        BUTTON: {
                            type: ArgumentType.STRING,
                            menu: 'buttonMenu'
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
                    opcode: 'setButtonPositionX',//设置按钮位置-x
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setButtonPositionX',      
                        default: 'set Button [BUTTON] position x [X]'
                    }),
                    arguments: {
                        BUTTON: {
                            type: ArgumentType.STRING,
                            menu: 'buttonMenu'
                        },
                        X: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'setButtonPositionY',//设置按钮位置-y
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setButtonPositionY',
                        default: 'set Button [BUTTON] position y [Y]'
                    }),
                    arguments: {
                        BUTTON: {
                            type: ArgumentType.STRING,
                            menu: 'buttonMenu'
                        },
                        Y: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'setButtonColor',//设置按钮颜色
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setButtonColor',
                        default: 'set Button [BUTTON] color [COLOR]'
                    }),
                    arguments: {
                        BUTTON: {
                            type: ArgumentType.STRING,
                            menu: 'buttonMenu'
                        },
                        COLOR: {
                            type: ArgumentType.COLOR,
                            defaultValue: '#0000FF'
                        }
                    }
                },
                {
                    opcode: 'setButtonTextColor',//设置按钮文本颜色
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setButtonTextColor',
                        default: 'set Button [BUTTON] text color [COLOR]'
                    }),
                    arguments: {
                        BUTTON: {
                            type: ArgumentType.STRING,
                            menu: 'buttonMenu'
                        },
                        COLOR: {
                            type: ArgumentType.COLOR,
                            defaultValue: '#FFFFFF'
                        }
                    }
                },
                {
                    opcode: 'setButtonFontSize',//设置按钮字体大小
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setButtonFontSize',
                        default: 'set Button [BUTTON] font size [SIZE]'
                    }),
                    arguments: {
                        BUTTON: {
                            type: ArgumentType.STRING,
                            menu: 'buttonMenu'
                        },
                        SIZE: {
                            type: ArgumentType.STRING,
                            menu: 'fontSizeMenu'
                        }
                    }
                },
                {
                    opcode: 'whenButtonClicked',//当按钮被点击
                    blockType: BlockType.HAT,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.whenButtonClicked',
                        default: 'when Button [BUTTON] clicked'
                    }),
                    arguments: {
                        BUTTON: {
                            type: ArgumentType.STRING,
                            menu: 'buttonMenu'
                        },
                        
                    }
                },
            )
        }

        // =================================================
        // 开关
        // =================================================
        if (this.has('switch')) {
            blocks.push(
                {
                    blockType: BlockType.LABEL,
                    text: formatMessage({
                        id: 'UIEditor.switch',
                        default: 'Switch',
                    }),
                },
                {
                    opcode: 'setSwitchOnColor',//设置开启状态颜色
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setSwitchOnColor',
                        default: 'set Switch [SWITCH] on color [COLOR]'
                    }),
                    arguments: {
                        SWITCH: {
                            type: ArgumentType.STRING,
                            menu: 'switchMenu'
                        },
                        COLOR: {
                            type: ArgumentType.COLOR,   
                            defaultValue: '#00FF00'
                        }
                    }
                },
                {
                    opcode: 'setSwitchOffColor',//设置关闭状态颜色
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setSwitchOffColor',
                        default: 'set Switch [SWITCH] off color [COLOR]'
                    }),
                    arguments: {
                        SWITCH: {
                            type: ArgumentType.STRING,
                            menu: 'switchMenu'
                        },
                        COLOR: {
                            type: ArgumentType.COLOR,   
                            defaultValue: '#FF0000'
                        }
                    }
                },    
                {
                    opcode: 'setSwitchSize',//设置开关大小
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setSwitchSize',
                        default: 'set Switch [SWITCH] size width [WIDTH] height [HEIGHT]'
                    }),
                    arguments: {
                        SWITCH: {
                            type: ArgumentType.STRING,
                            menu: 'switchMenu'
                        },
                        WIDTH: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 80
                        },
                        HEIGHT: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 40
                        }       
                    }
                 },
                 {
                    opcode: 'setSwitchSizeWidth',//设置开关宽度
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setSwitchSizeWidth',
                        default: 'set Switch [SWITCH] size width [WIDTH]'
                    }),
                    arguments: {
                        SWITCH: {
                            type: ArgumentType.STRING,
                            menu: 'switchMenu'
                        },
                        WIDTH: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 80
                        }  
                    } 
                },
                {
                    opcode: 'setSwitchSizeHeight',//设置开关高度    
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setSwitchSizeHeight',
                        default: 'set Switch [SWITCH] size height [HEIGHT]'
                    }),
                    arguments: {
                        SWITCH: {
                            type: ArgumentType.STRING,
                            menu: 'switchMenu'
                        },
                        HEIGHT: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 40
                        }  
                    }
                },
                {
                    opcode: 'setSwitchPosition',//设置开关位置
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setSwitchPosition',
                        default: 'set Switch [SWITCH] position x [X] y [Y]'
                    }),
                    arguments: {
                        SWITCH: {
                            type: ArgumentType.STRING,
                            menu: 'switchMenu'
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
                    opcode: 'setSwitchPositionX',//设置开关位置-x
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setSwitchPositionX',
                        default: 'set Switch [SWITCH] position x [X]'
                    }),
                    arguments: {
                        SWITCH: {
                            type: ArgumentType.STRING,
                            menu: 'switchMenu'
                        },
                        X: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'setSwitchPositionY',//设置开关位置-y
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setSwitchPositionY',
                        default: 'set Switch [SWITCH] position y [Y]'
                    }),
                    arguments: {
                        SWITCH: {
                            type: ArgumentType.STRING,
                            menu: 'switchMenu'
                        },
                        Y: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'setSwitchState',//设置开关状态
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setSwitchState',
                        default: 'set Switch [SWITCH] state [STATE]'
                    }),
                    arguments: {
                        SWITCH: {
                            type: ArgumentType.STRING,
                            menu: 'switchMenu'
                        },
                        STATE: {
                            type: ArgumentType.STRING,
                            menu: 'switchStateMenu'
                        }
                    }
                },
                {
                    opcode: 'whenSwitchChanged',//当开关状态改变
                    blockType: BlockType.HAT,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.whenSwitchChanged',
                        default: 'when Switch [SWITCH] [STATE]'
                    }),
                    arguments: {
                        SWITCH: {
                            type: ArgumentType.STRING,
                            menu: 'switchMenu'
                        },
                        STATE: {
                            type: ArgumentType.STRING,
                            menu: 'switchStateMenu'
                        },
                        SUBSTACK: {                    
                            type: ArgumentType.STATEMENT
                        }
                     }
                },
                {
                    opcode: 'getSwitchState',//获取开关状态
                    blockType: BlockType.BOOLEAN,
                    blockIconURI:icon,
                    disableMonitor: true,
                    text: formatMessage({
                        id: 'UIEditor.getSwitchState',
                        default: 'get Switch [SWITCH] state'
                    }),
                    arguments: {
                        SWITCH: {
                            type: ArgumentType.STRING,
                            menu: 'switchMenu'
                        }
                     }
                },
            )
        }

        // =================================================
        // 滑块
        // =================================================
        if (this.has('slider')) {
            blocks.push(
                {
                    blockType: BlockType.LABEL,
                    text: formatMessage({
                        id: 'UIEditor.slider',
                        default: 'Slider',
                    }),
                },
                {
                    opcode: 'setSliderColor',//设置滑块颜色
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setSliderColor',
                        default: 'set Slider [SLIDER] color [COLOR]'
                    }),
                    arguments: {  
                        SLIDER: {
                            type: ArgumentType.STRING,
                            menu: 'sliderMenu'
                        },
                        COLOR: {
                            type: ArgumentType.COLOR,
                            defaultValue: '#FF0000'
                        }
                    }
                },
                {
                    opcode: 'setSliderSize',//设置滑块大小
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setSliderSize',
                        default: 'set Slider [SLIDER] size width [WIDTH] height [HEIGHT]'
                    }),
                    arguments: {
                        SLIDER: {
                            type: ArgumentType.STRING,
                            menu: 'sliderMenu'
                        },
                        WIDTH: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 100
                        },
                        HEIGHT: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 40
                        }       
                    }
                },
                {
                    opcode: 'setSliderSizeWidth',//设置滑块宽度
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({   
                        id: 'UIEditor.setSliderSizeWidth',
                        default: 'set Slider [SLIDER] size width [WIDTH]'
                    }),
                    arguments: {
                        SLIDER: {
                            type: ArgumentType.STRING,
                            menu: 'sliderMenu'
                        },
                        WIDTH: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 100
                        }  
                    }
                },
                {
                    opcode: 'setSliderSizeHeight',//设置滑块高度
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setSliderSizeHeight',
                        default: 'set Slider [SLIDER] size height [HEIGHT]'
                    }),
                    arguments: {    
                        SLIDER: {
                            type: ArgumentType.STRING,
                            menu: 'sliderMenu'
                        },
                        HEIGHT: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 40
                        }  
                    }
                },
                {
                    opcode: 'setSliderPosition',//设置滑块位置
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setSliderPosition',
                        default: 'set Slider [SLIDER] position x [X] y [Y]'
                    }),
                    arguments: {
                        SLIDER: {
                            type: ArgumentType.STRING,
                            menu: 'sliderMenu'
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
                    opcode: 'setSliderPositionX',//设置滑块位置-x
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setSliderPositionX',
                        default: 'set Slider [SLIDER] position x [X]'
                    }),
                    arguments: {
                        SLIDER: {
                            type: ArgumentType.STRING,
                            menu: 'sliderMenu'
                        },
                        X: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'setSliderPositionY',//设置滑块位置-y
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setSliderPositionY',
                        default: 'set Slider [SLIDER] position y [Y]'
                    }),
                    arguments: {
                        SLIDER: {
                            type: ArgumentType.STRING,
                            menu: 'sliderMenu'
                        },
                        Y: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },

                {
                    opcode: 'setSliderValue',//设置滑块数值
                    blockType: BlockType.COMMAND,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.setSliderValue',
                        default: 'set Slider [SLIDER] value [VALUE]'
                    }),
                    arguments: {
                        SLIDER: {
                            type: ArgumentType.STRING,
                            menu: 'sliderMenu'
                        },
                        VALUE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50
                        }
                    }
                },
                {
                    opcode: 'whenSliderChanged',//当滑块数值改变
                    blockType: BlockType.HAT,
                    blockIconURI:icon,
                    text: formatMessage({
                        id: 'UIEditor.whenSliderChanged',
                        default: 'when Slider [SLIDER] value changed'
                    }),
                    arguments: {
                        SLIDER: {
                            type: ArgumentType.STRING,
                            menu: 'sliderMenu'
                        },
                        SUBSTACK: {                    
                            type: ArgumentType.STATEMENT
                        }
                    }
                },
                {
                    opcode: 'getSliderValue',//获取滑块数值
                    blockType: BlockType.REPORTER,
                    blockIconURI:icon,
                    disableMonitor: true,
                    text: formatMessage({
                        id: 'UIEditor.getSliderValue',
                        default: 'get Slider [SLIDER] value'
                    }),
                    arguments: {
                        SLIDER: {
                            type: ArgumentType.STRING,
                            menu: 'sliderMenu'
                        }
                    }
                },
                
            )
        }

        return {
            id: 'UIEditor',
            name: 'UI Editor',
            color1: '#00897B',  // 主颜色
            color2: '#00796D',  // 次颜色（渐变）
            color3: '#00695F',  // 边框颜色
            menuIconURI: icon, 

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
                lineMenu:{
                    acceptReporters: false,
                    items: this.getMenu('line')
                },
                imageMenu: {
                    acceptReporters: false,
                    items: this.getMenu('image')
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
                fontSizeMenu: {
                    acceptReporters: false,
                    items: [
                        { text: 'small', value: "12" },
                        { text: 'medium', value: "18" },
                        { text: 'large', value: "24" }
                    ]
                },
                switchStateMenu: {
                    acceptReporters: false,
                    items: [
                        { text: 'on', value: "True" },
                        { text: 'off', value: "False" }
                    ]
                }
            }
        };
    }


    //-----------------执行------------------------------
    setScreenColor(args, util) {
        console.log(this.runtime.runMode)
    }
    
}

module.exports = UIEditor;