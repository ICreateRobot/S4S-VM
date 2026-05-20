const BASE_URL = "http://192.168.20.161:3000";

class wifiIOT {
    constructor (runtime) {
        this._username = '';
        this.runtime = runtime;
    }

    // 通用 RPC 读取
    async readData(code, connKey) {
        try {
            if (!connKey) {
                this.runtime.ioDevices.toast.guiToast("001", "请连接设备", 'error', 2000);
                return null;
            }

            const res = await fetch(
                `${BASE_URL}/device/rpc`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        connKey,
                        code
                    })
                }
            );
            const data = await res.json();

            // 正常
            if (data.code === 200) {
                return data.data.output;
            }else{//其他异常一并处理
                this.runtime.ioDevices.toast.guiToast("002", "请检测设备是否在线，链接码是否正确", 'error', 2000);

                // 通知 GUI 清除连接
                this.runtime.emit("WIFI_DEVICE_DISCONNECTED");

                return null;
            }

        } catch (err) {
            //一般没有网络也不会有链接码，所以基本应该用不到此处
            console.error("wifi rpc error:", err);
            return null;
        }
    }
}

module.exports = wifiIOT;