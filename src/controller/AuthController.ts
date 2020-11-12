import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { storeAdmin } from '../repository/AuthRepository'
import { secret } from '../config/auth.config';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import {User} from '../entity/User';
import { isString } from "util";

export class AuthController{

    async storeAdmin(req: Request, res: Response, next?: NextFunction){
        return storeAdmin(req, res);
    }

    async signIn(req: Request, res: Response, next?: NextFunction){
        const user = getRepository(User);

        return new Promise(async (resolve) => {
            let userPass;
            if(userPass = await user.findOne({ email: req.body.email })){
                try{
                    let validPassword = bcrypt.compareSync(
                        req.body.password_user,
                        userPass.password_user
                    );
                    if(!(validPassword)){
                        return res.send({message: 'Senha incorreta'});
                    }
                    var token = jwt.sign({ id: userPass.id }, secret, {
                        expiresIn: 86400 // 24 hours
                      });

                    userPass.api_key = token;
                    user.save(userPass);
                    
                    res.setHeader("x-access-token", token);
                    return res.status(200).send({
                            message: 'Usuario logado',
                            email: userPass.email,
                            accessToken: userPass.api_key
                           });
                } catch(e){
                    res.send({message: 'Houve um erro inesperado'});
                    console.log(e);
                    return;
                }
               
            }
            return res.send('message: Email nao cadastrado');
        }).catch((err) => { res.status(500).send({ message: 'Houve um erro inesperado!' }); console.log(err); return;});
    }
}
