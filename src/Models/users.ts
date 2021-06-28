import { dbQuery, dbQueryFirst } from "../Services/db"
import { sqlite3 } from "sqlite3"


export type Users = {

id: string;
name: string;
lastname: string;
nickname: string; 
address: string;
bio: string;
createdAt: Date;
updatedAt: Date;

}

 const insertUser = async (user: Users) => {
   await  dbQuery("insert into users (name, lastname, nickname, address, bio) values(?,?,?,?,?)", 
    [user.name, user.lastname, user.nickname, user.address, user.bio])

    let retorno = await dbQuery("select seq as id from sqlite_sequence where name = 'user'");
    return retorno[0].id as number | undefined;


}

const updateUser = async (user: Users) => {
    await  dbQuery("update users set (name = ? , lastname = ?, nickname = ?, address = ?, bio = ?) where id = ?", 
     [user.name, user.lastname, user.nickname, user.address, user.bio, user.id])
        return getUser(user.id);


 }


const listUsers = async () => {

    const retorno = await dbQuery('select * from Users');
    return retorno as Users[];

}

const getUser = async  (id: number)=> {

    const retorno = await dbQueryFirst('select * from Users where id = ?', [id]);
    return retorno as Users | undefined;

}

const deleteUsers = async (id: number) => {
 await dbQueryFirst('delete from Users where id = ?', [id]);
    

}



export const userModel = {
    insertUser,
    listUsers,
    getUser,
    deleteUsers,
    updateUser
}