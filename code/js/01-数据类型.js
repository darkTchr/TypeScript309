"use strict";
console.log(666);
function abc() {
    return '';
}
//  将  弱类型语言 js   包装成  类似于 java  的强类型语言
// ts中的数据类型
/*
  boolean   布尔
  number    数字
  string    字符串
  array     数组
  null  和 undefined
  never类型
  tuple     元祖类型
  enum      枚举类型
  any       任意类型
  void类
*/
// public static void main(String args[]){}
//es5
// var  flag = true;
// flag = false;
// flag = 123;
//ts为了代码更规范 更有利于维护  增加了类型校验 , 就是说 写代码必须指定数据类型
var flag = true;
flag = false;
// flag = 666;
var num = 123;
// num = '';
var arr = ['a', 2, 'c', 'd', true]; // es5
// var arr1:[] = [];
// var arr2:number[] = [1,2,3,5,"a"];
// var arr3:Array<number> = [5,6,7,8];
//元祖     是数组的一种
// let arr4:[number,string] = [123,'abc'];
//枚举
// 随着计算机不断的发展 , 程序不仅仅是 用于 数值的计算 , 还更广泛的处理非数值的数据(性别,国家..星期几...)
// 男 0   女  1
// nan    nv
// 用自然语言中的含义清楚明白的单词来表示每一个值
// enum 枚举名{
//     //key : value   x
//     标识符[=整型常数],
//     标识符[=整型常数],
//     标识符[=整型常数]
// }
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
    Flag[Flag["null"] = -1] = "null";
})(Flag || (Flag = {}));
var s = Flag.success;
console.log(s);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 3] = "blue";
    Color[Color["yellow"] = 4] = "yellow";
})(Color || (Color = {}));
var c = Color.red;
console.log(c);
// any 任意类型
var nm = 123;
nm = 'str';
nm = true;
//用处  使用场景
var box = document.getElementById('box');
box.style.color = 'red';
// null  undefined   其他 (never类型)的子类型
// var  numb:number;
var numb;
// numb = 123;
console.log(numb);
var num2;
num2 = 777;
console.log(num2);
//void
function fn() {
    console.log();
    // return 123;
}
//never 其它类型 (null  &  undefined) , 从不会出现的值
var n;
// n =123;             x
// n = (()=>{
//     throw new Error('出错啦');
// })()
// n = null;           x
