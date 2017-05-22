const webpack = require('webpack');
const path = require('path');

module.exports = {
    // เปิดใช้งาน sourcemap ด้วยโหมด eval
    devtool: 'eval',

    // ตรงจุดนี้สำคัญครับ! จุดเริ่มต้นของโปรแกรมเราคือ index.js Dashboard.js หรือ
    // Article.js จะเข้าถึงได้ก็ต้องผ่านไฟล์นี้ เราจึงบอกว่า index.js เป็น "entry"
    // หรือทางเข้าถึงของโมดูลอื่น
    entry: [
        './ui/index.js', './ui/theme/elements.scss'
    ],
    output: {
        publicPath: '/static/',
        path: path.join(__dirname, 'static'),

        // หลังจากรวมร่างทุกไฟล์เข้าเป็นไฟล์เดียวแล้ว ให้ไฟล์เดียวนั้นชื่ออะไร
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                // ใช้ Regular Expression ทดสอบ ถ้าไฟล์ไหนลงท้ายด้วย js หรือ jsx ให้ใช้
                // babel-loader
                test: /\.(js|jsx)$/,

                // ไม่รวม node_modules เนื่องจากเป็นของที่คนอื่นเขียน เราไม่ต้องใส่ใจ
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }, {
                // สำหรับไฟล์นามสกุล css ให้ใช้ Loader สองตัวคือ css-loader และ style-loader
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }, {
                // ใช้ Loader สามตัวสำหรับ scss
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: [
                    'style-loader', {
                        loader: 'css-loader',
                        query: {
                            sourceMap: true,
                            module: true,
                            localIdentName: '[local]___[hash:base64:5]'
                        }
                    }, {
                        loader: 'sass-loader',
                        query: {
                            outputStyle: 'expanded',
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};