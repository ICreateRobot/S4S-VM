// 超声波
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');

const icon = require('./Ultrasonic.svg');
 
class Ultrasonic {
    
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'Ultrasonic',
            name: formatMessage({
                id: 'Ultrasonic.name',
                default: 'Ultrasonic',
            }),
            color1: '#55DAD1',  // 主颜色
            color2: '#45C2B9',  // 次颜色（渐变）
            color3: '#36AAA1',   // 边框颜色
            menuIconURI: icon, 

            //模块 
            blocks: [
                {
                    blockType: BlockType.LABEL,
                    text:"Ultrasonic",
                }
            ]
        };
    }
}

module.exports = Ultrasonic;