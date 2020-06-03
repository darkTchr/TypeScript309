"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.User = void 0;
var db2_1 = require("../modules/db2");
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var UserModel = new db2_1.MssqlDB();
exports.UserModel = UserModel;
