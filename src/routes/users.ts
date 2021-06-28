import { Router } from "express";
import { userController } from "../Controllers/users";

const userRouter = Router();
userRouter.post('/', userController.insertUser);
userRouter.get('/', userController.listUsers);
userRouter.get('/:id', userController.getUsers);
userRouter.get('/:id', userController.deleteUsers);
userRouter.put('/:id', userController.updatetUser);


export {
    userRouter
 }