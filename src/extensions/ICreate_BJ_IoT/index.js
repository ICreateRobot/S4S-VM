/*北京学校 iot项目扩展 */
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');


class BJIoT { 

    constructor(runtime){
        this.runtime=runtime
    }

    getInfo() {
    return {
        id: 'BJIoT',
        name: "IoT",

        color1: '#5C6BC0',
        color2: '#4F5DA8',
        color3: '#445091',

        blocks: [
            {
                opcode: 'lightOn',
                blockType: BlockType.COMMAND,
                text: '开启 氛围灯'
            },
            {
                opcode: 'lightOff',
                blockType: BlockType.COMMAND,
                text: '关闭 氛围灯'
            },
            {
                opcode: 'setBrightness',
                blockType: BlockType.COMMAND,
                text: '设置 氛围灯 亮度 [VALUE]',
                arguments: {
                    VALUE: { type: ArgumentType.NUMBER, defaultValue: 255 }
                }
            },
            {
                opcode: 'setColorHex',
                blockType: BlockType.COMMAND,
                text: '设置 氛围灯 颜色 [COLOR]',
                arguments: {
                    COLOR: { type: ArgumentType.COLOR, defaultValue: '#ff0000' }
                }
            },
            {
                opcode: 'setColorRGB',
                blockType: BlockType.COMMAND,
                text: '设置 氛围灯 R [R] G [G] B [B]',
                arguments: {
                    R: { type: ArgumentType.NUMBER, defaultValue: 255 },
                    G: { type: ArgumentType.NUMBER, defaultValue: 0 },
                    B: { type: ArgumentType.NUMBER, defaultValue: 0 }
                }
            }
        ]
    };
}

    lightOn() {
        return this.ICMB_send("light/on");
    }

    lightOff() {
        return this.ICMB_send("light/off");
    }

    setBrightness(args) {
        return this.ICMB_send("light/brightness", {
            brightness: Number(args.VALUE)
        });
    }

    setColorHex(args) {
        const hex = args.COLOR.replace('#', '');

        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);

        return this.ICMB_send("light/rgb", {
            r, g, b
        });
    }

    setColorRGB(args) {
        return this.ICMB_send("light/rgb", {
            r: Number(args.R),
            g: Number(args.G),
            b: Number(args.B)
        });
    }


    async ICMB_send(path, data = {}) {
        try {
            const res = await fetch(`http://127.0.0.1:3000/${path}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!res.ok) {
                throw new Error(`HTTP ${res.status}`);
            }

            const json = await res.json();

            if (json && json.success === false) {
                this.runtime.ioDevices.toast.guiToast(
                    'IoT',
                    json.error || 'unknown error',
                    'error',
                    2000
                );
            }

            return json;

        } catch (err) {
            console.error('[IoT ERROR]', err);

            this.runtime.ioDevices.toast.guiToast(
                'IoT',
                err.message,
                'error',
                2000
            );

            return {
                success: false,
                error: err.message
            };
        }
    }

   
}



module.exports = BJIoT;