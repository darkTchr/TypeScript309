// ts  中的函数

// 函数的定义

// function fn (){}

function fn():string{
    return 'str'
}


var fn2 = function():number{
    return 666
}

// 传参
function fn3 (name:string,age:number){
    return `${name} ---  ${age}`
}

console.log(fn3('123',98765));



function fn4 (name:string,age:number):number{
    // return `${name} ---  ${age}`
    return 666;
}

console.log(fn3('123',98765));


// 可选参数

function fn5 (name:string,age?:number):number{
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



function fn6 (name:string,age:number = 20):number{
    // return `${name} ---  ${age}`
    if(age){
        console.log(`${name} ---  ${age}`);
        
    }else{
        console.log(`${name} ---  ${age}`);
        
    }

    return 666;
}

fn6('jack',99)
fn6('jack')

// 剩余参数  

// function fn7(...result:number[]){
function fn7(num1:number,num2:number,...result:number[]){
    // arguments
    // ...

    var sum = num1 + num2 ;

    for(var i = 0 ; i < result.length ; i++){
        sum += result[i] ;
    }


    return  sum;
}


console.log(fn7(1,2,3,4));

// 函数的重载
//  函数名称相同 , 参数列表不同 , 与返回值无关    重载

//ts : 为同一个函数提供多个函数类型定义 来实现

// 箭头函数


function  fn8(name:string,age?:number):string;
function  fn8(age:number):string;
function  fn8(str:any,age?:number):any{
    if(typeof str  === 'string'){
        console.log(`我叫: ${str} --- 我的年龄是: ${age}`);
        
    }else{
        console.log(`我的年龄是: ${str}`);
        
    }
}


fn8('jack') 
fn8(166) 
// fn8(true)      xxx

fn8('rose')
fn8('rose',999)

