"use strict";
// 数据库模块
Object.defineProperty(exports, "__esModule", { value: true });
var dbUrl = 'http://localhost:3306';
function getData() {
    console.log('连接数据库11111------');
    return [
        {
            title: '1111',
            desc: '11111'
        },
        {
            title: '2222',
            desc: '222222'
        }
    ];
}
function save() {
    console.log('保存成功');
}
exports.default = getData;
