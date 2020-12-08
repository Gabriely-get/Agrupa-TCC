<<<<<<< HEAD
import {getRepository} from "typeorm";
import { store, update} from '../repository/GroupRepository'
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import { resolveSoa } from "dns";

export class GroupController {

    private userRepository = getRepository(User);

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
=======
import {getRepository} from "typeorm";
import { store, update} from '../repository/GroupRepository'
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import { resolveSoa } from "dns";

export class GroupController {

    private userRepository = getRepository(User);

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
>>>>>>> 32ff6618120562340e42134b5f5e27e9f5ea9916
}