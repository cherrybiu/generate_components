// node set login
const path = require('path');

// 创建步骤1
async function createCpt() {
    try {
        await exists();  // 检测文件夹是否存在
        await readFile(); // 读取模版文件
        await writeFile(await readFile());  // 写入组件
    } catch (e) {
        console.log(err);
    }
}

// // 获取命令行参数
// var args = process.argv;
