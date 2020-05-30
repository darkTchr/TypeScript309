// 提供其他类继承的基类 , 但不能被实例化 (animal)
// 抽象类    abstract关键字   修饰的类叫抽象类   修饰的方法叫抽象方法(允许[必须要求]子类重写)
//如果类中有方法为抽象方法 , 那么他所在的类  必须为抽象类

// abstract class Animal {
//     public name:string;
//     constructor (name:string){
//         this.name = name;
//     }

//     abstract eat():any; //抽象方法不包含具体实现 , 并且必须在派生类中实现

//     run(){
//         console.log('普通run  , 其他方法可以不实现');
//     }
// }

// // var a = new Animal('小花');       x


// class Dog extends Animal {

//     constructor(name:string){
//         super(name)
//     }

//     eat() {
//         console.log( this.name + '吃狗粮');
//     }

//     run(){
//         console.log(' 可以  快跑');
        
//     }

    
// }

// var d = new Dog('可以');
// d.eat();
// d.run();




// ts  中的接口 

// 在面向对象编程中 , 借口是一种规范的定义 , 他定义了动作和行为的规范  , 在程序设计里面 , 接口起到限制的作用.
//接口并不关心这些类内部状态数据  , ts中类似于java


//属性类接口   对json的约束

//ts 中定义方法

// function printLabel(label:string):void{
//     function printLabel(labelInfo:{label:string}):void{
//     console.log('printLabel');
// }

// // printLabel('abc')
// // printLabel({'abc':666})     // x
// printLabel({'label':'abc'})    // √



//需要接口   interface关键字修饰 , 不写class

interface FullName {
    firstName:string;
    secondName?:string;
    eat:Function;
}


function  printName(name:FullName){
    console.log(name.firstName + '---' + name.secondName);

    name.eat()
    
}


// printName('2345678','asdas')       x

// printName({
//     firstName:'张',
//     secondName:'三',
//     age:30
// })

// var obj = {
//     firstName:'张',
//     // secondName:'三6',
//     age:30,
//     eat:function(){
//         console.log('我还能吃...');
        
//     }
// };

// printName(obj);


// // $.ajax({})


// interface Config {
//     type:string;
//     url:string;
//     data?:string;
//     dataType:string
// }


// //封装原生ajax

// function ajax (config:Config){
//     var xhr = new XMLHttpRequest();
//     xhr.open(config.type,config.url,true); // async

//     xhr.send(config.data);

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState == 4 &&  xhr.status == 200){
//             console.log('okk');
            
//             if(config.dataType == 'json'){
//                 console.log(JSON.parse(xhr.responseText));
//             }else{
//                 console.log(xhr.responseText);
//             }
//         }
//     }
// }


// ajax({
//     url:'http://localhost:3003/result',
//     type:'get',
//     data:'name=zhangsan',
//     dataType:'json'
// })




//函数类型接口 : 对方法传入的参数和返回值进行约束   批量约束



// interface encript{
//     (key:string,value:string):string
// }


// var md5:encript = function(key:string, value:string):string{

//     return  key  +  value;
// }


// md5('name','zs');

//可索引接口     对数组 和 对象的约束  (不常用)

// var ary:number[] = [123,234];  ts创建数组


interface UserArr{
    // [index:number]:string
    [index:string]:string
}

// var arr8:UserArr = ['aaa','bbb'];

// console.log(arr8[0]);


var obj3:UserArr = {name:'jack'};

console.log(obj3.name);



//类类型接口   对类的约束  和抽象类有点相似

// interface Animal {
//     name:string;
//     eat(str:string):void
// }


// class Dog implements Animal {
//     name:string

//     constructor(name:string){
//         this.name = name
//     }

//     eat(){
//         console.log('sqwertyuiopojhgfdsdfgh');
        
//     }
// }



// 接口的扩展

interface Animal{
    eat():void;
}


interface Pers extends Animal {
    work():void
}


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


class Programmer  {
    public name:string ;
    constructor (name:string){
        this.name = name;
    }

    coding(code:string){
        console.log(this.name + code);
    }
}

class Web extends Programmer implements Pers {

    // public name:string

    constructor(name:string){
        super(name)
        // this.name = name;
    }

    eat(){
        console.log(this.name + '吃煎蛋');
        
    }

    work(){
        console.log(this.name + 'coding...');
        
    }
}

var w = new Web('小李');
w.eat();

w.work();