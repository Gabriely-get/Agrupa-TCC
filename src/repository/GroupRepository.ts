import { getRepository, createQueryBuilder, Connection, createConnection, getConnection } from "typeorm";
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { secret } from '../config/auth.config';
import {NextFunction, Request, Response, response} from "express";
import { grouptable as Group} from "../entity/groupTable";
import {group_user, group_user as gu} from '../entity/group_user';
import { User } from "../entity/user";

export async function store(req: Request, res: Response){

	const groupRep = getRepository(Group);

	return new Promise(async (resolve, reject) => {
        const random = Math.random() * 4;
        const createID = await bcrypt.hashSync('randomTCCbEgIn248', random);

        const group = new Group();
        group.id = bcrypt.hashSync(createID, 5);
        group.groupName = req.body.groupName;
        group.description = req.body.description;
        group.maxUsers = req.body.maxUsers;
        // group.imgGroup = req.body.imgGroup;
        // group.categoryId = ;
        
        const firstAdminGroup = new gu();
        try{
                const saveG = await groupRep.save(group);
                if(saveG){
                        const rt:any =  req.headers["x-access-token"];

                        jwt.verify(rt, secret, async (err, decoded) => {
                        if (err) {
                        return res.status(401).send({ message: "Unauthorized!" });
                        }
                        if (decoded.id) {
                                const guR = getRepository(group_user);
                                firstAdminGroup.userId = decoded.id;
                                firstAdminGroup.groupId = saveG.id;
                                console.log('ate aq:' + saveG.id);
                                firstAdminGroup.isGroupAdmin = true;

                                const saveGU = await guR.save(firstAdminGroup);
                                console.log('check');
                                return res.send({message: 'Grupo criado com sucesso!', idgroup: saveG.id, idgroupuser: firstAdminGroup.groupId, name: saveG.groupName, isadmin: saveGU.isGroupAdmin, useradmin: saveGU.userId});
                        } else{
                                return res.send({message: 'Erro ao salvar group_user'});
                        }
                        });
                } else{
                        return res.send({message: 'Erro ao salvar o grupo'});
                }
        } catch(e){
                console.log(e);
                return res.send({message: 'Nao salvou o grupo. Verificar erro no console'});
        }
                 
	}).catch((err) => { res.status(500).send({ message: 'Houve um erro inesperado!' }); console.log(err); return;});
}

export async function update(req: Request, res: Response){

	const groupRep = getRepository(Group);

	return new Promise(async (resolve, reject) => {
                let group = await groupRep.findOne({ id: req.params.id });
                console.log('aq update');
                group.groupName = req.body.groupName;
                group.description = req.body.description;
                group.maxUsers = req.body.maxUsers;
                // group.imgGroup = req.body.imgGroup;
                console.log('aq update 2');
                const saveG = await groupRep.save(group);
                console.log('aq update 3');
                return res.send({message: 'Grupo atualizado com sucesso!', Newname:  saveG.groupName, newDEsc: saveG.description});
		
	}).catch((err) => { res.send({ message: 'Houve um erro inesperado!' }); console.log(err); return;});
}
