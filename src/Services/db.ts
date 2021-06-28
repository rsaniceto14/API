import { query } from "express";
import { sqlite3 } from "sqlite3";


const DATABASE_FILE = process.env.DATABASE_FILE;
if(!DATABASE_FILE)
    throw new Error("Database Not found");

    export const openConnection = () => {
        let db = new sqlite3.Database(DATABASE_FILE);
        return db;
    }

    export const dbQueryFirst = async (query: string, params?: any[]) =>  {
        const retorno = await dbQueryFirst(query, params);
        return retorno[0];


    }

    export const dbQuery = (query: string, params?: any[]) => {
        let db = openConnection();
        return new Promise<any[]>((resolve, reject) => {  
            db.all(query, params, (err: any, rows: any[]) => { 
            if(err)
            reject(err);
            else
            resolve(rows);
            })
        
        })

        .finally(()=>{
            db.close();
        })



    }