interface DBI<T> {
    add(info:T):boolean;
    update(info:T,id:number):boolean;
    delete(id:number):boolean
    get(id:number):any[];
}

//注意 : 如果要实现一个泛型接口 , 那么这个类也要是泛型类
export class MysqlDB<T> implements DBI<T>{
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


 export class MssqlDB<T> implements DBI<T>{
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