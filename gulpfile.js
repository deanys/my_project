// function task(cb) {
//     cb();
// }

// exports.task = task;
//上面不行，函数名有问题


// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
// }

// exports.default = defaultTask


// 怎么知道我想要打包生成环境还开发环境？
// 需要知道输入的执行命令
// nodejs中有个全局对象 process 进程对象
// console.log( process )// {...}
// console.log( process.argv )// [...]
// console.log( process.argv[2] )// dev  build ...
console.log("这是啥");
let mode = process.argv[2]
console.log("mode is " + mode);
switch (mode) {
    case 'dev':
        require('./gulpfile-dev.js')
        break
    case 'build':
        require('./gulpfile-build.js')
        break
}