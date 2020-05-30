// 静态属性  静态方法      直接绑定在类名上的 , 不需要实例化就能使用 , 上一次 没用到 static

// $('.box')   jQuery
// $.get()

// static修饰  是随着类的加载而加载

class Per {
    public name:string;

    public age:number;

    static sex = '男';

    constructor(name:string , age:number){
        this.name = name;
        this.age = age;
    }

    run(){
        console.log('实例方法   run');
        
    }

    static print(){ // 静态方法    里面没法直接调用类里面的属性
        console.log('print方法 : ' + this.sex);
        console.log('print方法 : ' + Per.sex);
        
    }
}

console.log(Per.sex);

Per.print();    //  √

var p7 = new Per('张三',23);
p7.run();
// p7.print();  x      


// (面向对象 封装  继承  多态)    多态 :事物存在的多种形态

// class A   class B(子)    多态属于继承

// class Animal {
//     name:string
//     constructor(name:string){
//         this.name = name;
//     }

//     //具体吃的是什么 , 不知道 , 每一个子类都有自己的表现
//     eat(){
//         console.log('天生会吃');
//     }
// }



// class Dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     //子类重写方法
//     eat(){
//         return this.name + '吃狗粮 , 旺旺'
//     }
// }



// class Cat extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     //子类重写方法
//     eat(){
//         return this.name + '吃老鼠 , 喵喵'
//     }
// }


// var dog:Dog;
// dog = new Dog('富贵');


// console.log(dog.eat());

// // var an = new Dog('旺财');

// var na:Animal;

// na = new Cat('旺财');

// console.log(na.eat());


// var cat:Cat;

// cat = new Animal('asd');           x