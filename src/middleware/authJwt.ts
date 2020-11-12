import { getRepository } from "typeorm";
import { secret } from '../config/auth.config';
import * as jwt from 'jsonwebtoken';
import {User} from "../entity/User";
import { NextFunction, Request, Response } from "express";

//fazer secret private na class

async function verifyToken(req: Request, res: Response, next?: NextFunction){

    return new Promise(async (resolve) => {
        try{
            let token;

            if (!(token = req.headers["x-access-token"])) {
            return res.status(403).send({ message: "No token provided!" });
            }

            jwt.verify(token, secret, (err: any, decoded: any) => {
            if (err) {
                return res.status(401).send({ message: "Unauthorized!" });
            }
            next();
            });
        } catch(e){
            res.send({message: 'Houve um erro inesperado'});
            console.log(e);
            return;
        }
    }).catch((err) => { res.status(500).send({ message: 'Houve um ero inesperado!' }); console.log(err); return;});
}

async function isAdmin(req: Request, res: Response, next?: NextFunction){
    
    return new Promise(async(resolve) => {
        try{
            const user = await getRepository(User);
            let rt;

            if(rt = await req.headers["x-access-token"]){
                let userAcess = await user.findOne({ api_key: rt });
    
                if (!userAcess) {
                    res.status(500).send({ message: 'Nao autorizado! Faça o login novamente.' });
                    return;
                }
                if (userAcess.isAdmin == true) {
                    next();
                    return;
                }
            
                res.status(403).send({ message: "Require Admin Role!" });
                return;
            }
            else{

            }
        } catch(e){
            res.send({message: 'Houve um erro inesperado'});
            console.log(e);
            return;
        }
    }).catch((err) => { res.status(500).send({ message: 'Houve um ero inesperado!' }); console.log(err); return;});
}

const authJwt = {
  verifyToken,
  isAdmin
};

export = authJwt;