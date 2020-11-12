import { useContainer } from "typeorm";
import * as ac from "../controller/AuthController";
import {checkDuplicateEmail} from '../middleware/verifySignUp';

// let method = new uc.UserController;

export const authRoutes = [{
//     method: "get",
//     route: "auth/users",
//     controller: uc.UserController,
//     action: "all"
// }, {
//     method: "get",
//     route: "/users/:id",
//     controller: uc.UserController,
//     action: "one"
// }, {
    method: "post",
    route: "auth/users",
    controller: ac.AuthController,
    action: "storeAdmin"
}
// , {
//     method: "delete",
//     route: "/users/:id",
//     controller: uc.UserController,
//     action: "remove"
// }
];