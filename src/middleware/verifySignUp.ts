import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";



async function checkDuplicateEmail(req: Request, res: Response, next?: NextFunction){
      // Email
    const userRepository = await getRepository(User);

    return new Promise(async (resolve) => {
        let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9]+.(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
			
        if(!(reg.test(req.body.email))){
            return res.send({message: 'Email invalido!'})
        }
        else{
            const emailExists = await userRepository.findOne({ email: req.body.email });

            if(emailExists){
                return res.status(400).send({ message: 'Ja existe um usuario cadastrado com este email!'});
            }
            next();
        }
                  
    }).catch((err) => { res.status(500).send({ message: 'Houve um erro inesperado!' }); console.log(err); return;});

}      

async function checkDuplicateNames(req: Request, res: Response, next?: NextFunction){
    const userRepository = await getRepository(User);

    return new Promise(async (resolve) => {
        
        if((req.body.firstName == "" || req.body.lastName == "") || (req.body.firstName == null || req.body.lastName == null) || (req.body.firstName == undefined || req.body.lastName == undefined) || (req.body.firstName == "null" || req.body.lastName == "null")){
            return res.send({ message: 'Os campos nome e sobrenome devem ser preenchidos!' });
        }
        else{
            const nameExists = await userRepository.findOne({firstName: req.body.firstName, lastName: req.body.lastName});
        
            if(nameExists){
                return res.send({message: 'Ja existe um usuario cadastrado com este nome!'});
            }
            next();
        }
    }).catch((err) => { res.status(500).send({ message: 'Houve um erro inesperado!' }); console.log(err); return;});
}

async function checkDuplicateCell(req: Request, res: Response, next?: NextFunction){
    const userRepository = await getRepository(User);

    return new Promise(async (resolve) => {

        const cellExists = await userRepository.findOne({cellphone: req.body.cellphone});
        
        if(cellExists){
            return res.send({message: 'Ja existe um usuario cadastrado com este telefone!'});
        }
        next();
        
    }).catch((err) => { res.status(500).send({ message: 'Houve um erro inesperado!' }); console.log(err); return;});
}

//middleware data de nascimento
async function checkBirthDate(req: Request, res: Response, next?: NextFunction){
    
  const userRepository = await getRepository(User);

  return new Promise(async (resolve) => {
      
      if(req.body.birthDate == "" || req.body.birthDate == null || req.body.birthDate == undefined || req.body.birthDate == "null"){
          return res.send({ message: 'O campo data de nascimento deve ser preenchido!' });
      }
      else{
        //   const date = req.body.birthDate;
        //   let dateSplit = Date.now();
        //   let dateSplit = split('/', date);
        let date1 = new Date('2020/11/18');
        let date2 = new Date(req.body.birthDate);
        let timeDiff = Math.abs(date1.getTime() - date2.getTime());
        let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
          return res.send({ date: Date.now(), ne: diffDays, q: date2.getMonth(), we: date2.getDate(), fr: date2.getDay(), bg: date2.getFullYear() });
        //   if(emailExists){
        //       return res.status(400).send({ message: 'Ja existe um usuario cadastrado com este email!'});
        //   }
        //   next();
      }
                
  }).catch((err) => { res.status(500).send({ message: 'Houve um ero inesperado!' }); console.log(err); return;});

}      

const verifysignup = { checkDuplicateEmail,
                       checkDuplicateNames,
                       checkDuplicateCell,
                       checkBirthDate     
                    };
  
 export = verifysignup;