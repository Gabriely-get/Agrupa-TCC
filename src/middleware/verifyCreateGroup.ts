import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {grouptable} from '../entity/groupTable';

async function checkCharacters(req: Request, res: Response, next?: NextFunction){
    return new Promise(async (resolve) => {

        const name = req.body.groupName;
        const desc = req.body.description;
        const users = req.body.maxUsers; 
        const cat = req.body.categoryId;

        if(cat < 3){
            return res.send('O(s) campo(s) devem ser preenchidos o suficiente para que entendam sua intenção com este grupo!')
        }

        if(name.length < 7){
            return res.send('O(s) campo(s) devem ser preenchidos o suficiente para que entendam sua intenção com este grupo!')
        }

        if(desc.length < 20){
           return res.send('O(s) campo(s) devem ser preenchidos o suficiente para que entendam sua intenção com este grupo!')
        }
        
        if(typeof users != "number" ){
            return res.send('O campo deve ser preenchido com numeros')
        }

            if(users > 250){
             return res.send('Os grupos não podem ter mais de 250 pessoas')
        }
        if(users < 50){
            return res.send('O numero maximo de pessoas não pode ser menor que 50')
       }
        
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

export = verifygroup;
