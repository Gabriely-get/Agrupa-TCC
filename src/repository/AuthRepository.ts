import { getRepository } from "typeorm";
import * as bcrypt from 'bcryptjs';
import {NextFunction, Request, Response, response} from "express";
import {User} from "../entity/User";
	
export async function storeAdmin(req: Request, res: Response){

	const userRep = await getRepository(User);

	return new Promise(async (resolve, reject) => {
		try{
			// const random = Math.random() * 4;
			const createID = bcrypt.hashSync('randomTCCbEgIn248', 8);

			const user = new User();
            user.id = bcrypt.hashSync(createID, 5);
            user.isAdmin = true,
			user.email = req.body.email;
			user.password_user = bcrypt.hashSync(req.body.password_user, 8);
			user.firstName = req.body.firstName;
			user.lastName = req.body.lastName;
			user.birthDate = req.body.birthDate;
			user.cellphone = req.body.cellphone;

			const saveU = await userRep.save(user);
			
			return res.send({message: 'Administrador cadastrado com sucesso!', id: saveU.id,  pass: saveU.password_user});
			
		} catch(e){
			res.send({message: 'Houve um erro inesperado'});
			console.log(e);
			return;
		}
	}).catch((err) => { res.status(500).send({ message: 'Houve um ero inesperado!' }); console.log(err); return;});
}
// }

	