npm init:在node开发中使用npm init会生成一个pakeage.json文件，这个文件主要是用来记录这个项目的详细信息的，它会将我们在项目开发中所要用到的包，以及项目的详细信息等记录在这个项目中。方便在以后的版本迭代和项目移植的时候会更加的方便。也是防止在后期的项目维护中误删除了一个包导致的项目不能够正常运行。使用npm init初始化项目还有一个好处就是在进行项目传递的时候不需要将项目依赖包一起发送给对方

package name:                      你的项目名字叫啥
version:                          版本号
description:                       对项目的描述
entry point:                      项目的入口文件（一般你要用那个js文件作为node服务，就填写那个文件）
test command:                     项目启动的时候要用什么命令来执行脚本文件（默认为node app.js）
git repository:                    如果你要将项目上传到git中的话，那么就需要填写git的仓库地址（这里就不写地址了）
keywirds：                       项目关键字（我也不知道有啥用，所以我就不写了）
author:                         作者的名字（也就是你叫啥名字）
license:                        发行项目需要的证书（这里也就自己玩玩，就不写了）


npm install --save-dev gulp //开发时依赖选项
gulp --version
创建gulpfile.js
code:
function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask


npm install --devDependencies


"del": "^6.0.0",
"gulp": "^4.0.2",
"gulp-concat": "^2.6.1",
"gulp-load-plugins": "^2.0.5",
"gulp-minify-css": "^1.2.4",
"gulp-uglify": "^3.0.2"


1.修改npm 源：
npm --registry https://registry.npm.taobao.org install express
不影响本地配置，在 npm install XXX 时加入--registry URL即可
永久：npm config set registry https://registry.npm.taobao.org
查看：npm config get registry
改为官方：npm config set registry https://registry.npmjs.org/


2.解决跨域问题：
安装：npm --registry https://registry.npm.taobao.org install gulp-connect-proxy --save-dev
npm --registry https://registry.npm.taobao.org install gulp-connect --save-dev
代码如下：
var Proxy = require('gulp-connect-proxy');
var connect = require('gulp-connect');

gulp.task("server", function () {
    connect.server({
        root: "app",
        port: 8000,
        livereload: true,
        middleware: function (connect, opt) {
            opt.route = '/proxy';
            var proxy = new Proxy(opt);
            return [proxy];
        }
    });
});

在启动 gulp server 任务后, 相当于在本地的8000端口的proxy目录下, 开启了一个转发的服务中间件, 所有的跨越访问, 都经由该服务中间件进行转发.

在访问服务时, 需要在原始URL上添加localhost:8000/proxy/前缀. 例如, 需要访问

localhost:1234/services

则现在需要访问:

localhost:8000/proxy/localhost:1234/services