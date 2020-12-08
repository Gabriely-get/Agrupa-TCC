import { useContainer } from "typeorm";
import * as uc from "../controller/UserController";
import * as ac from "../controller/AuthController";
import * as gc from "../controller/GroupController";
import {checkDuplicateEmail} from '../middleware/verifySignUp';

// let method = new uc.UserController;

export const Routes = [{
    //user
    method: "get",
    route: "/auth/users",
    controller: uc.UserController,
    action: "all",
    type: "authLogon",
}, {
    method: "get",
    route: "/users/:id",
    controller: uc.UserController,
    action: "one",
    type: "userLogon"
}, {
    method: "post",
    route: "/users",
    controller: uc.UserController,
    action: "store"
}, {
    method: "put",
    route: "/users/:id",
    controller: uc.UserController,
    action: "update",
    type: "userLogon"
},{
    method: "delete",
    route: "/users/:id",
    controller: uc.UserController,
    action: "remove",
    type: "authLogon",
},{
    method: "post",
    route: "/auth/users",
    controller: ac.AuthController,
    action: "storeAdmin",
    type: "authLogon",
},{
    method: "post",
    route: "/logIn",
    controller: ac.AuthController,
    action: "signIn"
},{
    method: "get",
    route: "/logOut",
    controller: ac.AuthController,
    action: "signOut",
    type: "userLogOut"
}, //group
{
    method: "put",
    route: "/group/:id",
    controller: gc.GroupController,
    action: "update",
    type: "authGroupAction"
}
];