"use strict";
// 提供其他类继承的基类 , 但不能被实例化 (animal)
// 抽象类    abstract关键字   修饰的类叫抽象类   修饰的方法叫抽象方法(允许[必须要求]子类重写)
//如果类中有方法为抽象方法 , 那么他所在的类  必须为抽象类
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
function printName(name) {
    console.log(name.firstName + '---' + name.secondName);
    name.eat();
}
// var arr8:UserArr = ['aaa','bbb'];
// console.log(arr8[0]);
var obj3 = { name: 'jack' };
console.log(obj3.name);
// class Web implements Pers {
//     public name:string;
//     constructor (name:string){
//         this.name =  name;
//     }
//     work(): void {
//         throw new Error("Method not implemented.");
//     }
//     eat(): void {
//         throw new Error("Method not implemented.");
//     }
// }
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function (code) {
        console.log(this.name + code);
    };
    return Programmer;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    // public name:string
    function Web(name) {
        return _super.call(this, name) || this;
        // this.name = name;
    }
    Web.prototype.eat = function () {
        console.log(this.name + '吃煎蛋');
    };
    Web.prototype.work = function () {
        console.log(this.name + 'coding...');
    };
    return Web;
}(Programmer));
var w = new Web('小李');
w.eat();
w.work();
