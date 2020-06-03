"use strict";
// 模拟小案例 加上 接口
//注意 : 如果要实现一个泛型接口 , 那么这个类也要是泛型类
var MysqlDB = /** @class */ (function () {
    function MysqlDB() {
        // 数据库地址 http://localhost:3306, root  123456
        console.log('数据库建立连接.');
    }
    MysqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.get = function (id) {
        // 连接数据库 读取到了
        var list = [
            {
                title: 'xxxxxxxx111111',
                desc: '111111'
            }, {
                title: 'xxxxxxxx22222',
                desc: '222222222'
            }
        ];
        return list;
    };
    MysqlDB.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    return MysqlDB;
}());
var MssqlDB = /** @class */ (function () {
    function MssqlDB() {
        // 数据库地址 http://localhost:3306, root  123456
        console.log('数据库建立连接.');
    }
    MssqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MssqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MssqlDB.prototype.get = function (id) {
        // 连接数据库 读取到了
        var list = [
            {
                title: 'xxxxxxxx111111',
                desc: '111111'
            }, {
                title: 'xxxxxxxx22222',
                desc: '222222222'
            }
        ];
        return list;
    };
    MssqlDB.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    return MssqlDB;
}());
//操作用户表  和数据库做映射
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = '张三333';
u.password = '333333';
var myDb = new MysqlDB();
myDb.add(u);
var myDb2 = new MssqlDB();
var data = myDb2.get(5);
console.log(data);
