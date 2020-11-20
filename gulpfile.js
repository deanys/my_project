// function task(cb) {
//     cb();
// }

// exports.task = task;
//上面不行，函数名有问题


function defaultTask(cb) {
    // place code for your default task here
    cb();
}

exports.default = defaultTask