import { Request, Response } from "express"
import { userModel, Users } from "../Models/users";
import { userRouter } from "../routes/users";
import { badRequest, internalServerError, notFound , success} from "../Services/warnings";


const insertUser = (req: Request, res: Response) => {

{

    const user = req.body;
    if(!user)
    return badRequest(res, "Usuário Inválido");

    if(!user.name)
    return badRequest(res, "Informe o nome do usuário");

    if(!user.nickname)
    return badRequest(res, "Informe o Nickname do usuário");


}

const user = req.body as Users;
return userModel.insertUser(user)
.then(id => {
    res.json({
        id
        })
    })
    .catch(err => internalServerError(res, err))


}

const updatetUser = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id);
    {
    const user = req.body;
    
    if(!user(id))
        return badRequest(res,'id inválido');
 }

    {
    
        const user = req.body;
        if(!user)
        return badRequest(res, "Usuário Inválido");
    
        if(!user.name)
        return badRequest(res, "Informe o nome do usuário");
    
        if(!user.nickname)
        return badRequest(res, "Informe o Nickname do usuário");
        
        const userSaved = await userModel.getUser(id)
            if(!userSaved)
                return notFound(res);
    
    }
    
    const user = req.body as Users;
    return userModel.insertUser(user)
    .then(id => {
        res.json({
            id
            })
        })
        .catch(err => internalServerError(res, err))
    
    
    }






const listUsers = (req: Request, res: Response) => {
    userModel.listUsers()
.then(users => {
    res.json({
        users
        })
    })
    .catch(err => internalServerError(res, err))

}

const getUsers = (req: Request, res: Response) => {

    const id = parseInt(req.params.id);
    {
    const user = req.body;
    
    if(!user(id))
        return badRequest(res,'id inválido');
 }


    userModel.getUser(id)
.then(user => {
    if(user)
    return res.json(user);
    
    else
        return notFound(res); })
    .catch(err => internalServerError(res, err))

}


const deleteUsers = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id);
    {
    const user = req.body;
    
    if(!user(id))
        return badRequest(res,'id inválido');

        const userSaved = await userModel.getUser(id)
        if(!userSaved)
            return notFound(res);
 }




   return userModel.deleteUsers(id)
    .then(() => success(res))
    .catch(err => internalServerError(res, err))

}


export const userController = {
    insertUser,
    listUsers,
    getUsers,
    deleteUsers,
    updatetUser
} 