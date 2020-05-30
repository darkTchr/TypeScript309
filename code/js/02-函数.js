"use strict";
// ts  中的函数
// 函数的定义
// function fn (){}
function fn() {
    return 'str';
}
var fn2 = function () {
    return 666;
};
// 传参
function fn3(name, age) {
    return name + " ---  " + age;
}
console.log(fn3('123', 98765));
function fn4(name, age) {
    // return `${name} ---  ${age}`
    return 666;
}
console.log(fn3('123', 98765));
// 可选参数
function fn5(name, age) {
    // return `${name} ---  ${age}`
    return 666;
}
// 可选参数要写在  正常参数的后面
// function fn6 (name?:string,age:number):number{     x
//     // return `${name} ---  ${age}`
//     return 666;
// }
console.log(fn5('45678'));
// 默认参数
function fn6(name, age) {
    if (age === void 0) { age = 20; }
    // return `${name} ---  ${age}`
    if (age) {
        console.log(name + " ---  " + age);
    }
    else {
        console.log(name + " ---  " + age);
    }
    return 666;
}
fn6('jack', 99);
fn6('jack');
// 剩余参数  
// function fn7(...result:number[]){
function fn7(num1, num2) {
    // arguments
    // ...
    var result = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        result[_i - 2] = arguments[_i];
    }
    var sum = num1 + num2;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log(fn7(1, 2, 3, 4));
function fn8(str, age) {
    if (typeof str === 'string') {
        console.log("\u6211\u53EB: " + str + " --- \u6211\u7684\u5E74\u9F84\u662F: " + age);
    }
    else {
        console.log("\u6211\u7684\u5E74\u9F84\u662F: " + str);
    }
}
fn8('jack');
fn8(166);
// fn8(true)      xxx
fn8('rose');
fn8('rose', 999);
