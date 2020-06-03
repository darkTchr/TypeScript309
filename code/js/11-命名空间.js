"use strict";
/*
    命名空间:
    在代码量较大的时候 , 为了避免命名冲突 , 将相似的类 方法 接口 放置到命名空间内 , 起到隔离的作用

    Java  .Net 一样的

    // 命名空间: 内部模块 , 主要用于组织代码 , 避免命名冲突

    // 模块 : 是ts外部模块的简称 , 侧重代码的复用 , 一个模块里面可能有多个命名空间
*/
Object.defineProperty(exports, "__esModule", { value: true });
// namespace A{
//         interface Animal {
//             name:string;
//             eat(str:string):void
//         }
//        export class Dog implements Animal {
//             name:string
//             constructor(name:string){
//                 this.name = name
//             }
//             eat(){
//                 console.log('A狗再吃');
//             }
//         }
// }
// namespace B{
//     interface Animal {
//         name:string;
//         eat(str:string):void
//     }
//    export class Dog implements Animal {
//         name:string
//         constructor(name:string){
//             this.name = name
//         }
//         eat(){
//             console.log('B狗在吃');
//         }
//     }
// }
var animal_1 = require("./modules/animal");
var dog = new animal_1.A.Dog('可以');
dog.eat();
var dog2 = new animal_1.B.Dog('可以');
dog2.eat();
