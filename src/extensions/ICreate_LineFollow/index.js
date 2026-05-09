// 巡线
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');

const icon = require('./LineFollow.svg');
 
class LineFollow {
    
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'LineFollow',
            name: formatMessage({
                id: 'LineFollow.name',
                default: 'Line Following Sensor',
            }),
            color1: '#FF8F00',  // 主颜色
            color2: '#F57C00',  // 次颜色（渐变）
            color3: '#EF6C00',  // 边框颜色
            menuIconURI: icon, 

            //模块 
            blocks: [
                {
                    blockType: BlockType.LABEL,
                    text: "Line Following Sensor",
                }
            ]
        };
    }
}

module.exports = LineFollow;