//es 5 类(构造方法)   es6 class


//简单的类
// function People(){
//     //this
//     this.name = 'jack';
//     this.age = 777;
// }

// var p = new People();

// console.log(p.name);


//构造函数 原型链  , 在内部增加方法

// function People(){
//     //this
//     this.name = 'jack';
//     this.age = 777;

//     this.run = function(){
//         console.log(this.name + '在运动');
        
//     }
// }

// //在原型上增加 , 会被多个实例共享  , 构造函数不会

// People.prototype.sex= '男'

// People.prototype.work = function(){
//     console.log(this.name + '正在工作');
    
// }



// var p = new People();

// console.log(p.name);
// p.run()
// p.work()



//静态(static)   用类名直接调用  不用通过实例化对象

// function People(){
//     //this
//     this.name = 'jack';
//     this.age = 777;

//     this.run = function(){
//         console.log(this.name + '在运动');
        
//     }
// }

// People.getInfo = function(){
//     console.log('我是一个静态方法');
    
// }



// //在原型上增加 , 会被多个实例共享  , 构造函数不会

// People.prototype.sex= '男'

// People.prototype.work = function(){
//     console.log(this.name + '正在工作');
    
// }



// var p = new People();

// console.log(p.name);
// p.run()
// p.work()
// //调用静态方法
// People.getInfo();


//  继承  es5   对象冒充实现继承

// function People(){
//     //this
//     this.name = 'jack';
//     this.age = 777;

//     this.run = function(){
//         console.log(this.name + '在运动');
        
//     }
// }

// //在原型上增加 , 会被多个实例共享  , 构造函数不会

// People.prototype.sex= '男'

// People.prototype.work = function(){
//     console.log(this.name + '正在工作');
    
// }




// function Web(){
//     // People.call(this) //对象冒充
// }


// // var  w = new Web();

// // w.run();

// // w.work();    x  对象冒充可以继承构造函数内部的 , 但原型上的不行


// Web.prototype = new People()


// var w = new Web();
// //原型链继承 可以继承构造函数内的 , 也可以继承原型链上的
// w.run();

// w.work();



// function People(name,age){
//     //this
//     this.name = name;
//     this.age = age;

//     this.run = function(){
//         console.log(this.name + '在运动');
        
//     }
// }

// //在原型上增加 , 会被多个实例共享  , 构造函数不会

// People.prototype.sex= '男'

// People.prototype.work = function(){
//     console.log(this.name + '正在工作');
    
// }

// function Web (name,age){

// }

// Web.prototype = new People();


// var w = new Web('lisi',66)  // 实例化自累的时候没有办法像父类传参      未解之谜


// w.run();


// 原型链 + 对象冒充  组合的继承模式

function People(name,age){
    //this
    this.name = name;
    this.age = age;

    this.run = function(){
        console.log(this.name + '在运动');
        
    }
}

//在原型上增加 , 会被多个实例共享  , 构造函数不会

People.prototype.sex= '男'

People.prototype.work = function(){
    console.log(this.name + '正在工作');
    
}

function Web (name,age){
    // 对象冒充 , 并 传递参数
    People.call(this,name,age)
}

Web.prototype = new People();


var w = new Web('lisi',66)  // 实例化自累的时候没有办法像父类传参      未解之谜


w.run();
w.work();