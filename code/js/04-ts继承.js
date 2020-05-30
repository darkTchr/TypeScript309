"use strict";
// ts 结合 es6 class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//ts 定义类
// class Person {
//     // 属性   方法
//     name:string
//     constructor (n:string){ //构造函数
//         this.name = n;
//     }
//     run():void{
//             console.log(
//             this.name + '再跑'
//             );
//     }
// }
// var p = new Person('zs');
// p.run();
//继承  extends  super
// class Person {
//     // 属性   方法
//     name:string
//     constructor (n:string){ //构造函数
//         this.name = n;
//     }
//     run():void{
//             console.log(
//             this.name + '再跑'
//             );
//     }
// }
// class Web extends Person {
//     constructor (name:string){
//         //super  相当于 去找 父类的  构造函数
//         super(name)
//     }
//     run(){
//         console.log('子类的 run');
//     }
// }
// var w = new Web('李四');
// w.run();
// 修饰符
// public  公共的   protected  被保护的    private  私有   (访问 就是  能不能用)
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.run = function () {
        console.log(this.name + '再跑' //类内使用
        );
    };
    return Person;
}());
var p = new Person('小p');
p.run();
// console.log(p.name); // 类外使用
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        //super  相当于 去找 父类的  构造函数
        return _super.call(this, name) || this;
    }
    Web.prototype.run = function () {
        // console.log(this.name + '子类的 run');
    };
    return Web;
}(Person));
var w = new Web('李四');
w.run();
