import {getRepository} from "typeorm";
import { store, update} from '../repository/UserRepository'
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import { resolveSoa } from "dns";

export class UserController {

    private userR;
    private userRepository = getRepository(User);

    // constructor(ur: UserRepository){
    //     this.userR = ur;
    // }

    async all(re: Request, res: Response, next: NextFunction) {
        if(await this.userRepository.find()){
            return this.userRepository.find();
        }
        return res.send({ message: 'Nao ha usuarios cadastrados!' });
    }

    async one(req: Request, res: Response, next: NextFunction) {
        if(await this.userRepository.findOne(req.params.id)){
            return this.userRepository.findOne(req.params.id);
        }
        return res.send({ message: 'Nao ha um usuario com esta identificação' });
    }

    async store(req: Request, res: Response, next?: NextFunction) {
        return store(req, res);
    }

    async update(req: Request, res: Response, next?: NextFunction) {
        return update(req, res);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.softRemove(userToRemove);
    }

}