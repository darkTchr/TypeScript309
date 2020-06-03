// 模拟小案例 加上 接口

// 功能 : 定义一个数据库的库 支持 Mysql  Mssql MongDb

//要求 : 约束统一的规范 , 以及 代码重用


interface DBI<T> {
    add(info:T):boolean;
    update(info:T,id:number):boolean;
    delete(id:number):boolean
    get(id:number):any[];
}

//注意 : 如果要实现一个泛型接口 , 那么这个类也要是泛型类
class MysqlDB<T> implements DBI<T>{
    constructor(){
        // 数据库地址 http://localhost:3306, root  123456
        console.log('数据库建立连接.');
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        // 连接数据库 读取到了

        var list = [
            {
                title:'xxxxxxxx111111',
                desc:'111111'
            },{
                title:'xxxxxxxx22222',
                desc:'222222222'
            }
        ]


        return  list
    }

    add(info:T):boolean{

        console.log(info);
        
        return true
    }
}


class MssqlDB<T> implements DBI<T>{
    constructor(){
        // 数据库地址 http://localhost:3306, root  123456
        console.log('数据库建立连接.');
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        // 连接数据库 读取到了

        var list = [
            {
                title:'xxxxxxxx111111',
                desc:'111111'
            },{
                title:'xxxxxxxx22222',
                desc:'222222222'
            }
        ]


        return  list
    }

    add(info:T):boolean{

        console.log(info);
        
        return true
    }
}


//操作用户表  和数据库做映射


class User {
    username:string | undefined
    password :string | undefined
}
var u = new User();
u.username= '张三333'
u.password = '333333'

var myDb = new MysqlDB<User>();
myDb.add(u);


var myDb2 = new MssqlDB<User>();

var data = myDb2.get(5);

console.log(data);


