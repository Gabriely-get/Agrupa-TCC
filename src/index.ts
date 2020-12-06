import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import {Request, Response} from "express";
import * as dotenv from 'dotenv';
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from 'cors';
import {Routes} from "./routes/routes";
// import {authRoutes} from "./routes/auth.routes";
import { checkDuplicateEmail, checkDuplicateNames, checkDuplicateCell } from "./middleware/verifySignUp";
import {isAdmin, verifyToken} from "./middleware/authJwt";
// import {checkDuplicateEmail} from '../src/middleware/verifySignUp';

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // setup express app here
    const corsOptions: cors.CorsOptions = {
        allowedHeaders: [
            'Origin',
            'X-Requested-With',
            'Content-Type',
            'Content-lenght',
            'Host',
            'User-Agent',
            'Accept',
            'Accept-Encoding',
            'Connection',
            'Authorization'
        ],
        credentials: true,
        methods: 'GET, HEAD, OPRTIONS, PUT, PACH, POST, DELETE',
        origin: 'http://localhost:3002',
        preflightContinue: true
    };

    app.use(cors(corsOptions));    

    // Routes.forEach(middleware => {
    //     [middleware.route];
    //     });
    // })

    // register express routes from defined application routes
    Routes.forEach(route => {
        //USER
        //user nao logado -> store USER
        if(route.method=='post' && route.route=='/users'){
            (app as any)[route.method](route.route, checkDuplicateEmail, checkDuplicateNames, checkDuplicateCell,(req: Request, res: Response, next: Function) => {
                const result = (new (route.controller as any))[route.action](req, res, next);
                if (result instanceof Promise) {
                    result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
    
                } else if (result !== null && result !== undefined) {
                    res.json(result);
                }
            });
        }
        //user logado update
        if(route.type=="userLogon" && route.method=="update"){
            (app as any)[route.method](route.route, checkDuplicateEmail, checkDuplicateNames, checkDuplicateCell, verifyToken,(req: Request, res: Response, next: Function) => {
                const result = (new (route.controller as any))[route.action](req, res, next);
                if (result instanceof Promise) {
                    result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
    
                } else if (result !== null && result !== undefined) {
                    res.json(result);
                }
            });
        }
        //user logado get user
        if(route.type=="userLogon" && route.method=="get"){
            (app as any)[route.method](route.route,(req: Request, res: Response, next: Function) => {
                const result = (new (route.controller as any))[route.action](req, res, next);
                if (result instanceof Promise) {
                    result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
    
                } else if (result !== null && result !== undefined) {
                    res.json(result);
                }
            });
        }
        //admin logado
        if(route.type=="authLogon" && !(route.method=="post")){
            (app as any)[route.method](route.route, verifyToken, isAdmin, (req: Request, res: Response, next: Function) => {
                const result = (new (route.controller as any))[route.action](req, res, next);
                if (result instanceof Promise) {
                    result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
    
                } else if (result !== null && result !== undefined) {
                    res.json(result);
                }
            });
        }
        if(route.type=="authLogon" && route.method=="post"){
            (app as any)[route.method](route.route, checkDuplicateEmail, checkDuplicateNames, checkDuplicateCell, verifyToken, isAdmin, (req: Request, res: Response, next: Function) => {
                const result = (new (route.controller as any))[route.action](req, res, next);
                if (result instanceof Promise) {
                    result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
    
                } else if (result !== null && result !== undefined) {
                    res.json(result);
                }
            });
        }
        //
        else{
            (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
                const result = (new (route.controller as any))[route.action](req, res, next);
                if (result instanceof Promise) {
                    result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
    
                } else if (result !== null && result !== undefined) {
                    res.json(result);
                }
            });
        }
        
    });
    
    dotenv.config({
        path: './.env'
    });
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // start express server
    app.listen(8000);

    // insert new users for test
    // await connection.manager.save(connection.manager.create(User, {
    //     firstName: "Timber",
    //     lastName: "Saw",
    //     age: 27
    // // }));
    // const userRep = getRepository(User);
    // await userRep.save({
    //                      email: "gabs2@gmail.com",
    //                      password: "999999999",
    //                      firstName: "Willian",
    //                      lastName: "Santos",
    //                      birthDate: "2000/12/18",
    //                      cellphone: 13991086543
    //                    });

                                // await connection.createQueryBuilder()
                                //  .insert()
                                //  .into(User)
                                //  .values([{
                                //       email: "gabs2@gmail.com",
                                //      password: "999999999",
                                //      firstName: "Willian",
                                //      lastName: "Santos",
                                //      birthDate: "2000/12/18",
                                //      cellphone: 13991086543
                                // }])
                                //  .execute();

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
