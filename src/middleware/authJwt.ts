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

        token = req.headers["x-access-token"];
            jwt.verify(token, secret, (err: any, decoded: any) => {
                if (err) {
                    res.send({ message: "Sem autorização para realizar esta ação!" });
                }
                next();
            });
    }).catch((err) => { res.send({ message: 'Houve um erro inesperado!' }); console.log('aqui 3!!!!!!!!!!: '+err); return;});
}

async function isAdmin(req: Request, res: Response, next?: NextFunction){
    
    return new Promise(async(resolve) => {
            const user = getRepository(User);
            let rt;

            if(rt = req.headers["x-access-token"]){
                let userAcess = await user.findOne({ api_key: rt });
    
                if (!userAcess) {
                    res.send({ message: 'Nao autorizado! Faça o login novamente.' });
                    return;
                }
                if (userAcess.isAdmin == true) {
                    next();
                    return;
                }
            
                return res.send({ message: "Require Admin Role!" });
            }
            return res.send({ message: 'Ação nao autorizada!' });
        }).catch((err) => { res.send({ message: 'Houve um erro inesperado!' }); console.log(err); return;});
    }

async function isGroupAdmin(req: Request, res: Response, next?: NextFunction){
    return new Promise(async (resolve) => {
        const conn = getConnection();
        const rt:any =  req.headers["x-access-token"];

        jwt.verify(rt, secret, async (err, decoded) => {
        if (err) {
            return res.send({ message: "Unauthorized!" });
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
        return res.send({ message: "Operação não pode ser concluída por erro das credenciais!" });
        });

    }).catch((err) => { res.send({ message: 'Houve um erro inesperado!' }); console.log(err); return;});
}

const authJwt = {
  verifyToken,
  isAdmin,
  isGroupAdmin
};

export = authJwt;
