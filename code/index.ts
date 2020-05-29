// ts 结合 es6 class


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


class Person {
    // 属性   方法

    // public name:string   // 公有的属性
    // protected name:string   // 被保护的的属性
    private name:string   // 私有的属性

    constructor (n:string){ //构造函数
        this.name = n;
    }


    run():void{
            console.log(
                this.name + '再跑'  //类内使用
            );
            
    }
}


var  p = new Person('小p');

p .run();


console.log(p.name); // 类外使用



class Web extends Person {
    constructor (name:string){
        //super  相当于 去找 父类的  构造函数
        super(name)
    }


    run(){
        console.log(this.name + '子类的 run');
        
    }
}


var w = new Web('李四');
w.run();