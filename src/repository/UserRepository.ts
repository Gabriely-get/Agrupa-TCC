import { getRepository } from "typeorm";
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { secret } from '../config/auth.config';
import {NextFunction, Request, Response, response} from "express";
import {User} from "../entity/User";

export async function store(req: Request, res: Response){

	const userRep = await getRepository(User);

	return new Promise(async (resolve, reject) => {
		try{
			const random = Math.random() * 4;
			const createID = await bcrypt.hashSync('randomTCCbEgIn248', random);

			const user = new User();
			user.id = bcrypt.hashSync(createID, 5);
			user.isAdmin = false;
			user.email = req.body.email;
			user.password_user = bcrypt.hashSync(req.body.password_user, 8);
			user.userName = req.body.name;
			user.nickName = req.body.nickName;
			user.birthDate = req.body.birthDate;

			const saveU = await userRep.save(user);
			
			return res.send({message: 'Usuario cadastrado com sucesso!', id: saveU.id,  pass: saveU.password_user});
			
		} catch(e){
			res.send({message: 'Houve um erro inesperado'});
			console.log(e);
			return;
		}
	}).catch((err) => { res.status(500).send({ message: 'Houve um erro inesperado!' }); console.log(err); return;});
}

export async function update(req: Request, res: Response){

	const userRep = await getRepository(User);

	return new Promise(async (resolve, reject) => {
		try{
			let rt;

            if(rt = await req.headers["x-access-token"]){

				let user = await userRep.findOne({ api_key: rt });

				jwt.verify(rt, secret, (err, decoded) => {
					if (err) {
						return res.status(401).send({ message: "Unauthorized!" });
					}
					if(req.params.id == decoded.id){
			
						user.email = req.body.email;
						user.userName = req.body.name;
						user.nickName = req.body.nickName;
						user.birthDate = req.body.birthDate;

						const saveU = userRep.save(user);
						
						return res.send({message: 'Usuario alterado com sucesso!', id: decoded.id});
					}
					return res.status(401).send({ message: "Açao nao autorizada" });
				});
			}
			return res.status(403).send({ message: "No token provided!" });
		} catch(e){
			res.send({message: 'Houve um erro inesperado'});
			console.log(e);
			return;
		}
	}).catch((err) => { res.status(500).send({ message: 'Houve um erro inesperado!' }); console.log(err); return;});
}
// }

	