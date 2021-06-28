import { Request, Response } from "express";

export const badRequest = (res: Response, err: string) => {
res.status(400).json(
    err
)

}

export const internalServerError = (res: Response, err: Error ) => {
    res.status(500).json(
        err.message
    )
    
    }

    export const notFound = (res: Response)=> res.sendStatus(404);
    export const success = (res: Response)=> res.sendStatus(200);
