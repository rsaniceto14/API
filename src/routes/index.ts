import { Application, Router } from "express";
import { userController } from "../Controllers/users";
import { userRouter } from "./users";

export const useRoutes = (app: Application) => {
    const apiRouter = Router();
    apiRouter.use('/user', userRouter);

    app.use('/api/v1', apiRouter);

}