"use strict";
// ts 模块  : 1.5中术语  内部模块  就是命名空间
Object.defineProperty(exports, "__esModule", { value: true });
// 讲一些公共的功能, 抽离成单独的文件 或者 模块
// 模块里面的 变量 函数 私有的 , 如果想在外部访问他们 , 需要内部先暴露
// import {dbUrl , getData as get , save} from './modules/db'
// import getData from './modules/db';
// get()
// save();
//export default 默认导出
//每一个模块都有一个default导出 , 只能有一个default导出
// import getData from './modules/db'
// import { MssqlDB } from './modules/db2';
// class User {
//     username:string | undefined
//     password :string | undefined
// }
// var u = new User();
// u.username= '张三333'
// u.password = '333333'
// var myDb2 = new MssqlDB<User>();
// var data = myDb2.get(5);
// console.log(data);
var User_1 = require("./model/User");
var u = new User_1.User();
u.username = 'jack';
u.password = '666';
//数据模型, 呼应字段的class对象
User_1.UserModel.add(u);
