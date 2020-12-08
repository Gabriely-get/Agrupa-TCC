<<<<<<< HEAD
import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Home from "./home";
import Cadastro from "./cadastro";
import Login from "./login";
import Grupos from "./grupos";
import Eventos from "./eventos";
import Sugestoes from "./sugestoes";
import Perfil from "./perfil";
import GrupoChat from "./grupo-chat";
import GrupoInfo from "./grupo-info";
import GrupoEventos from "./grupo-eventos";
  
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
            <Route path="/grupo" component={GrupoChat}/>
            <Route path="/grupo-info" component={GrupoInfo}/>
            <Route path="/grupo-eventos" component={GrupoEventos}/>
            { /*<Route path="/grupos/:id" component={Grupo}/> */}
        </Switch>
    </BrowserRouter>
)

=======
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./home";
import Cadastro from "./cadastro";
import Login from "./login";
import Grupos from "./grupos";
import Eventos from "./eventos";
import Sugestoes from "./sugestoes";
import Perfil from "./perfil";
import GrupoChat from "./grupo-chat";
import GrupoInfo from "./grupo-info";
import GrupoEventos from "./grupo-eventos";
import { isAuthenticated } from "../services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cadastro" component={Cadastro} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute path="/grupos" component={Grupos} />
            <PrivateRoute path="/eventos" component={Eventos} />
            <PrivateRoute path="/sugestoes" component={Sugestoes} />
            <PrivateRoute path="/perfil" component={Perfil} />
            <PrivateRoute path="/grupo" component={GrupoChat} />
            <PrivateRoute path="/grupo-info" component={GrupoInfo} />
            <PrivateRoute path="/grupo-eventos" component={GrupoEventos} />
            <Route path="*" component={() => <h1>Página não encontrada</h1>} />
        </Switch>
    </BrowserRouter>
)

>>>>>>> 32ff6618120562340e42134b5f5e27e9f5ea9916
export default Routes;