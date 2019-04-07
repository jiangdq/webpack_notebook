# WebPack 优化
- 在Webpack中随着项目体积越来越大，那么这个时候就需要开始对项目webpack进行优化。

## noParse
- 在loader中对于不需要处理的模块可以才用noParse将其排出在外。
- 比如例子中排除掉所谓的`lodash`这个模块，打包情况按照作者的电脑打包速度来说排出该模块可以增速`300ms`这个速度按照不同电脑打包速度为准。
``` javascript
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        noParse: /lodash/,
        rules: [{
            test: /\.js$/, 
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                    ]
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ]
}

```
## exclude
- 通过使用`exclude`可以排出掉整个`node_modules文件`
- 在例子中所使用`exclude`排出`node_modules`文件打包速度提升`1000ms` 相对上面的noParse提升更加明显
``` javascript
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: { 
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                    ]
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ]
}
```
## IgnorePlugin
## dllPlugin
## happypack
## 抽离公共代码
## 懒加载
## 热更新

