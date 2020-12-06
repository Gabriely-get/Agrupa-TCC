import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import api from "../services/api";
import {login} from '../services/auth';

export default class Login extends React.Component {

      state = {
        email: "",
        senha: "",
        error: ""
      };
    
      handleSignIn = async e => {
        e.preventDefault();
        const { email, senha } = this.state;
        if (!email || !senha) {
          this.setState({ error: "Preencha e-mail e senha para continuar!" });
        } else {
          try {
            const response = await api.post("/logIn", { email, password_user:senha });
            login(response.data.api_token);
            this.props.history.push("/grupos");
          } catch (err) {
            this.setState({
              error:
                "Houve um problema com o login, verifique suas credenciais. T.T"
            });
          }
        }
      };
    

    render() {
        return (
            <div className="box">
                <div className="voltar"><Link to="/"><img src="img/voltar.svg" /></Link></div>
                <div className="div-grid">
                    <div>
                        <img src="img/logo-v-p.png" />
                        <h1 className="slogan">Acesse sua conta e continue interagindo e conhecendo pessoas novas!</h1>
                    </div>
                    <div>
                        <form className="form-login" onSubmit={this.handleSignIn}>
                            <h1 className="titulo">Faça seu Login</h1>
                            <label className="label-email">
                                E-mail
                                <input type="email" name="email" onChange={e => this.setState({ email: e.target.value })}/>
                            </label>
                            <label>
                                Senha
                                <input type="password" name="senha" onChange={e => this.setState({ senha: e.target.value })}/>
                                <a>Esqueci minha senha</a>
                            </label>
                            <input type="submit" value="Entrar" className="entrar"/>
                            <Link to="/cadastro" className="naotenhoconta">Não possuo uma conta</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}