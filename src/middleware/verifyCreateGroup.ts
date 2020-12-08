<<<<<<< HEAD
import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {grouptable} from '../entity/groupTable';

async function checkCharacters(req: Request, res: Response, next?: NextFunction){
    return new Promise(async (resolve) => {

        const name = req.body.groupName;
        const  nameLength  = name.length;
        // const descLength = req.body.description.length;

        if(nameLength == 0 || nameLength < 7 /*|| (descLength == 0 || descLength < 20)*/){
            return res.send('O(s) campo(s) devem ser preenchidos o suficiente para que entendam sua intenção com este grupo!')
        }
        console.log(nameLength);
        next();

    }).catch((err) => { res.status(500).send({ message: 'Houve um erro inesperado!' }); console.log(err); return; });
}

async function checkDuplicateGroupName(req: Request, res: Response, next?: NextFunction){
    return new Promise(async (resolve) => {

        if(req.body.groupName == "" || req.body.groupName == null || req.body.groupName == undefined || req.body.groupName == "null" ){
            return res.send({ message: 'O nome do grupo é obrigatório!' });
        }
        else{
            const groupRep = getRepository(grouptable);

            const groupNameExists = await groupRep.findOne({groupName: req.body.groupName});

            if(groupNameExists){
                return res.status(400).send({ message: 'Ja existe um grupo com este nome!'});
            }
            next(); 
        }
    }).catch((err) => { res.status(500).send({ message: 'Houve um erro inesperado!' }); console.log(err); return; });
}

const verifygroup = {
    checkCharacters,
    checkDuplicateGroupName
}

=======
import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {grouptable} from '../entity/groupTable';

async function checkCharacters(req: Request, res: Response, next?: NextFunction){
    return new Promise(async (resolve) => {

        const name = req.body.groupName;
        const  nameLength  = name.length;
        // const descLength = req.body.description.length;

        if(nameLength == 0 || nameLength < 7 /*|| (descLength == 0 || descLength < 20)*/){
            return res.send('O(s) campo(s) devem ser preenchidos o suficiente para que entendam sua intenção com este grupo!')
        }
        console.log(nameLength);
        next();

    }).catch((err) => { res.status(500).send({ message: 'Houve um erro inesperado!' }); console.log(err); return; });
}

async function checkDuplicateGroupName(req: Request, res: Response, next?: NextFunction){
    return new Promise(async (resolve) => {

        if(req.body.groupName == "" || req.body.groupName == null || req.body.groupName == undefined || req.body.groupName == "null" ){
            return res.send({ message: 'O nome do grupo é obrigatório!' });
        }
        else{
            const groupRep = getRepository(grouptable);

            const groupNameExists = await groupRep.findOne({groupName: req.body.groupName});

            if(groupNameExists){
                return res.status(400).send({ message: 'Ja existe um grupo com este nome!'});
            }
            next(); 
        }
    }).catch((err) => { res.status(500).send({ message: 'Houve um erro inesperado!' }); console.log(err); return; });
}

const verifygroup = {
    checkCharacters,
    checkDuplicateGroupName
}

>>>>>>> 32ff6618120562340e42134b5f5e27e9f5ea9916
export = verifygroup;