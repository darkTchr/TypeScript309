import { MssqlDB } from '../modules/db2';


class User {
    username:string | undefined
    password :string | undefined
}


var UserModel = new MssqlDB<User>();

export {
    User,UserModel
}