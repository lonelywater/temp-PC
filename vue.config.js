const path = require('path');
function resolve (dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	//关闭语法检查
	lintOnSave: false,
	//引入scss全局变量
	css: {
		loaderOptions: {
			sass: {
				data: '@import "@/assets/scss/base.scss";'
			}
		}
	},
	//设置路径简写
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@',resolve('src'))
			.set('src',resolve('src'))
			.set('assets',resolve('src/assets'))
			.set('components',resolve('src/components'))
			.set('views',resolve('src/views'))
			.set('js',resolve('src/assets/js'))
	},
	//服务器设置
	devServer: {
		host: 'localhost',
		port: '8083',
		open: true,
	}
}
