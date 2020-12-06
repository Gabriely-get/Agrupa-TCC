import { createQueryBuilder, getConnection, getRepository } from "typeorm";
import { secret } from '../config/auth.config';
import * as jwt from 'jsonwebtoken';
import {User} from "../entity/User";
import {grouptable} from "../entity/groupTable";
import { NextFunction, Request, Response } from "express";
import { group_user } from "../entity/group_user";

//fazer secret private na class

async function verifyToken(req: Request, res: Response, next?: NextFunction){

    return new Promise(async (resolve) => {
        let token;

        if (!(token = req.headers["x-access-token"])) {
            return res.status(403).send({ message: "Faça o login para realizar esta ação!" });
        }

        jwt.verify(token, secret, (err: any, decoded: any) => {
        if (err) {
            return res.status(401).send({ message: "Sem autorização para realizar esta ação!" });
        }
        next();
        });
    }).catch((err) => { res.status(500).send({ message: 'Houve um ero inesperado!' }); console.log(err); return;});
}

async function isAdmin(req: Request, res: Response, next?: NextFunction){
    
    return new Promise(async(resolve) => {
            const user = getRepository(User);
            let rt;

            if(rt = req.headers["x-access-token"]){
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
            return res.send({ message: 'Ação nao autorizada!' });
        }
    }).catch((err) => { res.status(500).send({ message: 'Houve um ero inesperado!' }); console.log(err); return;});
}

async function isGroupAdmin(req: Request, res: Response, next?: NextFunction){
    return new Promise(async (resolve) => {
        const conn = getConnection();
        const rt:any =  req.headers["x-access-token"];

        jwt.verify(rt, secret, async (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        if (decoded.id && req.params.id) {
            const gga = await createQueryBuilder()
                        .select()
                        .from(group_user,"gu")
                        .where('gu.groupID = :id1', {id1: req.params.id})
                        .andWhere('gu.userId = :id2', {id2: decoded.id})
                        .getRawOne();
            const getGroupAdmin = await conn.query("SELECT isGroupAdmin FROM group_user WHERE groupId = 'req.params.id' AND userId = 'decoded.id' ");
            
            if(gga){
                res.send(gga);
                next();
            }
            return res.send({message: 'É necessario ser administrador do grupo', id: decoded.id, params: req.params.id, admin: gga.isGroupAdmin});
        }
        return res.status(403).send({ message: "Operação não pode ser concluída por erro das credenciais!" });
        });

    }).catch((err) => { res.status(500).send({ message: 'Houve um erro inesperado!' }); console.log(err); return;});
}

const authJwt = {
  verifyToken,
  isAdmin,
  isGroupAdmin
};

export = authJwt;