const JSZip = require('@turbowarp/jszip');
const formatMessage = require('format-message');
// ================== 核心逻辑 ==================
module.exports=function createVisualLogic(componentInstance) {
    const self = componentInstance
    let ui=null
    let iot=null
    self.runtime.on('saveUI',(result)=>{
        console.log(result)
        ui = result
    })

    self.runtime.on('saveIot',(result)=>{
        console.log(result)
        iot = result
    })
    function loadProject (input) {
        if (typeof input === 'object' && !(input instanceof ArrayBuffer) &&
          !ArrayBuffer.isView(input)) {
            // If the input is an object and not any ArrayBuffer
            // or an ArrayBuffer view (this includes all typed arrays and DataViews)
            // turn the object into a JSON string, because we suspect
            // this is a project.json as an object
            // validate expects a string or buffer as input
            // TODO not sure if we need to check that it also isn't a data view
            input = JSON.stringify(input);
        }
        console.log(input)

        const validationPromise = new Promise((resolve, reject) => {
            console.log('1111111111111')
            const validate = require('scratch-parser');
            // The second argument of false below indicates to the validator that the
            // input should be parsed/validated as an entire project (and not a single sprite)
            validate(input, false, (error, res) => {
                if (error) {
                    return reject(error);
                }
                console.log(res[1])
                //  if (res[1]) { // res[1] 是 zip 对象
                //     const modeFile = res[1].files['mode.json'];
                //     if (modeFile) {
                //         modeFile.async('text').then(content => {
                //             const mode = JSON.parse(content);
                //             console.log('qqqqqqqqqq',mode)
                //             self.emit('projectModeChanged', mode);
                //             // if (mode != self.mode) {
                //             //     // 如果 mode 为 false，拒绝加载并抛出提示
                //             //     return reject(new Error('项目加载被阻止：当前模式禁止加载此项目'));
                //             // } else {
                //             setTimeout(() => {
                //                 _restoreModelFromZip(res[1]);
                //                 resolve(res);
                //             }, 1000);//等1s
                //             // }
                //         }).catch(e => {
                //             // mode.json 解析失败仍继续加载
                //             console.warn('mode.json 解析失败，继续加载项目', e);
                //             _restoreModelFromZip(res[1]);
                //             resolve(res);
                //         });
                //     } else {
                //         // 没有 mode.json 则正常加载
                //         _restoreModelFromZip(res[1]);
                //         resolve(res);
                //     }

                //     const uiFile = res[1].files['ui.json'];
                //     if (uiFile) {
                //         uiFile.async('text').then(content => {
                //             const uiCon = JSON.parse(content);
                //             console.log('qqqqqqqqqq',uiCon)
                //             self.runtime.emit('projectUiChanged', uiCon);
                //             setTimeout(() => {
                //                 _restoreModelFromZip(res[1]);
                //                 resolve(res);
                //             }, 1000);//等1s
                //             // }
                //         }).catch(e => {
                //             // mode.json 解析失败仍继续加载
                //             console.warn('ui编辑器 解析失败，继续加载项目', e);
                //             reject(formatMessage({
                //                 id: 'loadProject.uiEditorFailed',
                //                 default: 'Failed to load UI editor project. The project may be corrupted.',
                //                 description: 'loadProject.uiEditorFailed'
                //             }))
                //             // _restoreModelFromZip(res[1]);
                //             // resolve(res);
                //         });
                //     } else {
                //         // 没有 mode.json 则正常加载
                //         _restoreModelFromZip(res[1]);
                //         resolve(res);
                //     }

                //     const iotFile = res[1].files['iot.json'];
                //     if (iotFile) {
                //         iotFile.async('text').then(content => {
                //             const iotCon = JSON.parse(content);
                //             console.log('qqqqqqqqqq',iotCon)
                //             self.runtime.emit('projectIotChanged', iotCon);
                //             setTimeout(() => {
                //                 _restoreModelFromZip(res[1]);
                //                 resolve(res);
                //             }, 1000);//等1s
                //             // }
                //         }).catch(e => {
                //             // mode.json 解析失败仍继续加载
                //             console.warn('mode.json 解析失败，继续加载项目', e);
                //             // _restoreModelFromZip(res[1]);
                //             // resolve(res);
                //             reject(formatMessage({
                //                 id: 'loadProject.iotFailed',
                //                 default: 'Failed to load IoT project. The project may be corrupted.',
                //                 description: 'loadProject.iotFailed'
                //             }))
                //         });
                //     } else {
                //         // 没有 mode.json 则正常加载
                //         _restoreModelFromZip(res[1]);
                //         resolve(res);
                //     }
                // } else {
                //     resolve(res);
                // }
                if (res[1]) { // res[1] 是 zip 对象
                    const zip = res[1];
                
                    // 工具函数：延迟 1s（完全等价于你原来的 setTimeout）
                    const delay = () => new Promise(resolve1 => setTimeout(resolve1, 1000));
                
                    // ===== mode.json =====
                    const runMode = () => {
                        const modeFile = zip.files['mode.json'];
                        if (!modeFile) return Promise.resolve(); // 没有 mode.json，直接过
                
                        return modeFile.async('text')
                            .then(content => {
                                const mode = JSON.parse(content);
                                console.log('qqqqqqqqqq', mode);
                                self.emit('projectModeChanged', mode);
                                return delay(); // 原逻辑：等 1s
                            })
                            .catch(e => {
                                // 原逻辑：mode.json 解析失败仍继续加载
                                console.warn('mode.json 解析失败，继续加载项目', e);
                            });
                    };
                
                    // ===== ui.json =====
                    const runUi = () => {
                        const uiFile = zip.files['ui.json'];
                        if (!uiFile) return Promise.resolve();
                
                        return uiFile.async('text')
                            .then(content => {
                                const uiCon = JSON.parse(content);
                                console.log('qqqqqqqqqq', uiCon);
                                self.runtime.emit('projectUiChanged', uiCon);
                                return delay();
                            })
                            .catch(e => {
                                // 原逻辑：ui.json 解析失败 → reject
                                console.warn('ui编辑器 解析失败，继续加载项目', e);
                                return Promise.reject(
                                    formatMessage({
                                        id: 'loadProject.uiEditorFailed',
                                        default: 'Failed to load UI editor project. The project may be corrupted.',
                                        description: 'loadProject.uiEditorFailed'
                                    })
                                );
                            });
                            // ⚠️ 注意：这里没有 catch 吞掉错误，保证 reject 能向上传递
                    };
                
                    // ===== iot.json =====
                    const runIot = () => {
                        const iotFile = zip.files['iot.json'];
                        if (!iotFile) return Promise.resolve();
                
                        return iotFile.async('text')
                            .then(content => {
                                const iotCon = JSON.parse(content);
                                console.log('qqqqqqqqqq', iotCon);
                                self.runtime.emit('projectIotChanged', iotCon);
                                return delay();
                            })
                            .catch(e => {
                                // 原逻辑：iot.json 解析失败 → reject
                                console.warn('iot.json 解析失败，继续加载项目', e);
                                return Promise.reject(
                                    formatMessage({
                                        id: 'loadProject.iotFailed',
                                        default: 'Failed to load IoT project. The project may be corrupted.',
                                        description: 'loadProject.iotFailed'
                                    })
                                );
                            });
                    };
                
                    // ===== 严格串行执行 =====
                    runMode()
                        .then(runUi)
                        .then(runIot)
                        .then(() => {
                            //  所有步骤成功完成
                            _restoreModelFromZip(zip);
                            resolve(res);
                        })
                        .catch(err => {
                            //  ui 或 iot 失败，直接终止
                            reject(err);
                        });
                
                } else {
                    resolve(res);
                }
            });
            console.log('2222222222')
        })
            .catch(error => {
                console.log('333333333')
                const {SB1File, ValidationError} = require('scratch-sb1-converter');

                try {
                    const sb1 = new SB1File(input);
                    const json = sb1.json;
                    json.projectVersion = 2;
                    return Promise.resolve([json, sb1.zip]);
                } catch (sb1Error) {
                    if (
                        sb1Error instanceof ValidationError ||
                        `${sb1Error}`.includes('Non-ascii character in FixedAsciiString')
                    ) {
                        // The input does not validate as a Scratch 1 file.
                    } else {
                        // The project appears to be a Scratch 1 file but it
                        // could not be successfully translated into a Scratch 2
                        // project.
                        return Promise.reject(sb1Error);
                    }
                }
                // Throw original error since the input does not appear to be
                // an SB1File.
                console.log('44444444')
                return Promise.reject(error);
            });

        return validationPromise
            .then(validatedInput => self.deserializeProject(validatedInput[0], validatedInput[1]))
            .then(() => self.runtime.handleProjectLoaded())
            .then(()=>{self.channelLoadModel.postMessage(true)})
            .then(()=>{self.channelLoadModel.postMessage(true)})
            .catch(error => {
                console.log(error)
                // Intentionally rejecting here (want errors to be handled by caller)
                if (Object.prototype.hasOwnProperty.call(error, 'validationError')) {
                    return Promise.reject(JSON.stringify(error));
                }
                console.log('6666666666')
                return Promise.reject(error);
            });
    }
    function _restoreModelFromZip(zip) {
        const prefix = 'tf_model/';
        const tfjsPrefix = 'tensorflowjs_models/';

        // ✅ Step 1: 清除 localStorage 中旧的 TensorFlow.js 模型数据
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (key && (key.startsWith(tfjsPrefix) || key === 'labelClass' || key === 'class')) {
                localStorage.removeItem(key);
            }
        }

        // ✅ Step 2: 从 zip 中查找模型文件并写入新的数据
        const tfKeys = Object.keys(zip.files).filter(path => path.startsWith(prefix));

        // 根据路径解析模型名
        const models = new Set();
        for (const key of tfKeys) {
            const parts = key.split('/');
            if (parts.length >= 2) {
                models.add(parts[1]); // 模型名
            }
        }

        models.forEach(modelName => {
            const baseKey = tfjsPrefix + modelName + '/';
            const fullPath = prefix + modelName + '/';

            // 读取每个 .json 文件写入 localStorage
            const filesToLoad = ['model_topology.json', 'weight_specs.json', 'info.json', 'model_metadata.json'];
            for (const name of filesToLoad) {
                const file = zip.files[fullPath + name];
                if (file) {
                    file.async('text').then(content => {
                        const localKey = baseKey + name.replace('.json', '');
                        localStorage.setItem(localKey, content);
                    });
                }
            }

            // 处理权重文件（weight_data.bin → base64）
            const weightFile = zip.files[fullPath + 'weight_data.bin'];
            if (weightFile) {
                weightFile.async('uint8array').then(bin => {
                    const base64 = btoa(String.fromCharCode(...bin));
                    localStorage.setItem(baseKey + 'weight_data', base64);
                });
            }

            // ✅ 读取并恢复 labelClass 和 class
            const extraKeys = ['labelClass.json', 'class.json'];
            for (const name of extraKeys) {
                const file = zip.files[fullPath + name];
                if (file) {
                    file.async('text').then(content => {
                        const localKey = name.replace('.json', ''); // 去掉扩展名
                        localStorage.setItem(localKey, content);
                    });
                }
            }
        });
    }

    function emitSaveIot() {
        return new Promise((resolve) => {
            self.runtime.emit('saveIot', '', resolve);
        });
    }

    function _saveProjectZip(modeValue) {
        // console.log(ui)

        // self.runtime.emit('saveIot', '', (res) => {
        //     console.log('收到返回结果:', res);
        // });
        // const iotRes = await emitSaveIot();
        const projectJson = self.toJSON();
        const zip = new JSZip();

        // 添加项目主数据和资源
        zip.file('project.json', projectJson);
        self._addFileDescsToZip(self.serializeAssets(), zip);
        // if (self.mode !== undefined) {
        //     zip.file('mode.json', JSON.stringify(self.mode));
        // }
        zip.file('mode.json', JSON.stringify(modeValue));

        zip.file(
            'ui.json',
            ui
        );
        zip.file(
            'iot.json',
            iot
        );

        const date = new Date(1591657163000);
        const TF_PREFIX = 'tensorflowjs_models/';
        const EXTRA_KEYS = ['labelClass', 'class'];

        // 找到模型名（只取第一个以 tensorflowjs_models/ 开头的 key 的模型名）
        let modelName = null;
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(TF_PREFIX)) {
                const relativePath = key.substring(TF_PREFIX.length);
                const parts = relativePath.split('/');
                if (parts.length > 0) {
                    modelName = parts[0];
                    break;
                }
            }
        }

        if (modelName) {
            const baseKey = TF_PREFIX + modelName + '/';
            const zipPathPrefix = `tf_model/${modelName}/`;

            // 保存模型相关的所有 localStorage 数据
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(baseKey)) {
                    const relativePath = key.substring(baseKey.length);
                    const value = localStorage.getItem(key);
                    if (value === null) continue;

                    if (relativePath === 'weight_data') {
                        const bin = _base64ToArrayBuffer(value);
                        zip.file(`${zipPathPrefix}weight_data.bin`, bin);
                    } else {
                        zip.file(`${zipPathPrefix}${relativePath}.json`, value);
                    }
                }
            }

            // ✅ 添加 labelClass 和 class
            EXTRA_KEYS.forEach(extraKey => {
                const extraValue = localStorage.getItem(extraKey);
                if (extraValue !== null) {
                    zip.file(`${zipPathPrefix}${extraKey}.json`, extraValue);
                }
            });
        }

        // 设置文件固定时间戳
        for (const file of Object.values(zip.files)) {
            file.date = date;
        }

        return zip;
    }

    function _base64ToArrayBuffer(base64) {
        const binaryString = atob(base64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    }

    async function loadSB3(item) {
        const currentURL = window.location.href;
        const oneLevelUp = currentURL.substring(0, currentURL.lastIndexOf('/'));
        const twoLevelsUp = oneLevelUp.substring(0, oneLevelUp.lastIndexOf('/'));
        const modelPath = twoLevelsUp + '/static/model/';
        try {
            const response = await fetch(modelPath+`${item.id}`+".sb3");
            const arrayBuffer = await response.arrayBuffer();
            await self.loadProject(arrayBuffer);
            console.log("项目加载成功！");
        } catch (err) {
            console.error("加载失败：", err);
        }
    }

    
    return {
        loadProject,
        _saveProjectZip,
        loadSB3
    };
}
