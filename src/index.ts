import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import {Request, Response} from "express";
import * as dotenv from 'dotenv';
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from 'cors';
import {Routes} from "./routes/routes";
import { checkDuplicateEmail, checkDuplicateNickName } from "./middleware/verifySignUp";
import {isAdmin, verifyToken, isGroupAdmin} from "./middleware/authJwt";
import {checkCharacters, checkDuplicateGroupName} from "./middleware/verifyCreateGroup";

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
            'Access-Control-Allow-Headers',
            'Access-Control-Expose-Headers',
            'Connection',
            'X-Acess-Token',
            'x-acess-token',
            'Authorization'
        ],
        credentials: true,
        methods: 'GET, HEAD, OPRTIONS, PUT, PACH, POST, DELETE',
        origin: 'http://localhost:3001',
        preflightContinue: false
    };
    
    app.use(cors());
    app.use(cors(corsOptions));    
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // register express routes from defined application routes
    Routes.forEach(route => {
        //USER
        //user nao logado -> store USER
        if(route.method=='post' && route.route=='/users'){
            (app as any)[route.method](route.route, checkDuplicateEmail, checkDuplicateNickName, (req: Request, res: Response, next: Function) => {
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
            (app as any)[route.method](route.route, checkDuplicateNickName, verifyToken,(req: Request, res: Response, next: Function) => {
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
            (app as any)[route.method](route.route, verifyToken,(req: Request, res: Response, next: Function) => {
                const result = (new (route.controller as any))[route.action](req, res, next);
                if (result instanceof Promise) {
                    result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
    
                } else if (result !== null && result !== undefined) {
                    res.json(result);
                }
            });
        }
        //admin logado -> 
        if(route.type=="authLogon" && !(route.method=="post")){
            (app as any)[route.method](route.route, verifyToken, isAdmin, (req: Request, res: Response, next: Function) => {
                const result = (new (route.controller as any))[route.action](req, res, next);
                if (result instanceof Promise) {
                    result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
    
                } else if (result !== null && result !== undefined) {
                    res.json(result);
                }
            });
        } //store Admin
        if(route.type=="authLogon" && route.method=="post"){
            (app as any)[route.method](route.route, checkDuplicateEmail, checkDuplicateNickName, isAdmin, (req: Request, res: Response, next: Function) => {
                const result = (new (route.controller as any))[route.action](req, res, next);
                if (result instanceof Promise) {
                    result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
    
                } else if (result !== null && result !== undefined) {
                    res.json(result);
                }
            });
        }
        //GROUP
        if(route.type=="authGroupAction" && route.method=="put"){
            (app as any)[route.method](route.route, verifyToken, isGroupAdmin, checkCharacters, checkDuplicateGroupName, (req: Request, res: Response, next: Function) => {
                const result = (new (route.controller as any))[route.action](req, res, next);
                if (result instanceof Promise) {
                    result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
    
                } else if (result !== null && result !== undefined) {
                    res.json(result);
                }
            });
        }
        if(route.type=="authGroupAction" && route.method=="get"){
            (app as any)[route.method](route.route, verifyToken, (req: Request, res: Response, next: Function) => {
                const result = (new (route.controller as any))[route.action](req, res, next);
                if (result instanceof Promise) {
                    result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
    
                } else if (result !== null && result !== undefined) {
                    res.json(result);
                }
            });
        }
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

    // start express server
    app.listen(3000);

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
