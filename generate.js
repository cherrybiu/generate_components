const fs = require('fs');

let basePath = 'src/components';
const cptName = process.argv.splice(2)[0] // 创建的文件名
let path = cptName.split('/');
let fileName = path[path.length - 1];
let readsFile = ['src/tmp/index.js','src/tmp/tmp.js']
let writeFile = [`${fileName}.js`, `${fileName}.html`, `${fileName}.css`, 'index.js' ]

// 检测是否存在文件夹
const exists = function () {
    return new Promise((res, reject) => {
        (async function () {
            for (let a of path) {
                fs.existsSync(basePath + a) ? basePath = `${basePath}${a}/` : await mkdir(a)
            }
            res(basePath)
        })()
    })
}

// 建立文件夹
let mkdir = function(dir) {
    return new Promise((res, rej) => {
        fs.mkdir(basePath + dir, (err) => {
            if (err) rej(err);
            basePath = `${basePath}${dir}`
            res(basePath)
        })
    })
}

// 读取模版文件内容， 并填充目标组件
let readFile = function() {
    return new Promise((res, rej) => {
        for (let file of readsFile) {
            let text = fs.readFileSync(file).toString();
        }
    })
}
