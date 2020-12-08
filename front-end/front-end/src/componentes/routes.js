import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Home from "./home";
import Cadastro from "./cadastro";
import Login from "./login";
import Grupos from "./grupos";
import Eventos from "./eventos";
import Sugestoes from "./sugestoes";
import Perfil from "./perfil";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cadastro" component={Cadastro}/>
            <Route exact path="/login" component={Login}/>
            <Route path="/grupos" component={Grupos}/>
            <Route path="/eventos" component={Eventos}/>
            <Route path="/sugestoes" component={Sugestoes}/>
            <Route path="/perfil" component={Perfil}/>
            { /*<Route path="/grupos/:id" component={Grupo}/> */}
        </Switch>
    </BrowserRouter>
)

export default Routes;