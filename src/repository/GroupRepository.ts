<<<<<<< HEAD
import { getRepository, createQueryBuilder, Connection, createConnection, getConnection } from "typeorm";
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { secret } from '../config/auth.config';
import {NextFunction, Request, Response, response} from "express";
import { grouptable as Group, grouptable } from "../entity/groupTable";
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

        const saveG = await groupRep.save(group);
        
        return res.send({message: 'Grupo criado com sucesso!', id: saveG.id,  name: saveG.groupName});
		
	}).catch((err) => { res.status(500).send({ message: 'Houve um erro inesperado!' }); console.log(err); return;});
}

export async function update(req: Request, res: Response){

	const groupRep = getRepository(Group);

	return new Promise(async (resolve, reject) => {
        let group = await groupRep.findOne({ id: req.params.id });

        group.groupName = req.body.groupName;
        group.description = req.body.description;
        group.maxUsers = req.body.maxUsers;
        // group.imgGroup = req.body.imgGroup;

        const saveG = await groupRep.save(group);
        
        return res.send({message: 'Grupo atualizado com sucesso!', data: saveG.groupName});
		
	}).catch((err) => { res.status(500).send({ message: 'Houve um erro inesperado!' }); console.log(err); return;});
=======
import { getRepository, createQueryBuilder, Connection, createConnection, getConnection } from "typeorm";
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { secret } from '../config/auth.config';
import {NextFunction, Request, Response, response} from "express";
import { grouptable as Group, grouptable } from "../entity/groupTable";
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

        const saveG = await groupRep.save(group);
        
        return res.send({message: 'Grupo criado com sucesso!', id: saveG.id,  name: saveG.groupName});
		
	}).catch((err) => { res.status(500).send({ message: 'Houve um erro inesperado!' }); console.log(err); return;});
}

export async function update(req: Request, res: Response){

	const groupRep = getRepository(Group);

	return new Promise(async (resolve, reject) => {
        let group = await groupRep.findOne({ id: req.params.id });

        group.groupName = req.body.groupName;
        group.description = req.body.description;
        group.maxUsers = req.body.maxUsers;
        // group.imgGroup = req.body.imgGroup;

        const saveG = await groupRep.save(group);
        
        return res.send({message: 'Grupo atualizado com sucesso!', data: saveG.groupName});
		
	}).catch((err) => { res.status(500).send({ message: 'Houve um erro inesperado!' }); console.log(err); return;});
>>>>>>> 32ff6618120562340e42134b5f5e27e9f5ea9916
}