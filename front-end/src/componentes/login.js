import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import api from "../services/api";
import bcrypt from 'bcryptjs';
import { KEY } from '../services/auth';
import {loginSetStorage, campotoken, crypttoken} from '../services/auth';

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
          this.setState({
            error: 
              'Preencha e-mail e senha para continuar!'
            });
          console.log('sem email ou senha');
        } else {
            try {
               const response = await api.post("/logIn", { email, password_user:senha });
              
              if(await response.data.message == "Usuario logado"){
                localStorage.setItem(campotoken, response.data.token);
                console.log(response.data);
                this.props.history.push("/grupos");

              } else{
                console.log('response.data');

                this.setState({
                  error: 
                    response.data.message
                });
              }

            } catch (err) {
              console.log("erro: " + err);
              this.setState({
                error:
                  "Erro inesperado"
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
                            <label>
                              { this.state.error && <h3 id="loginError"> {this.state.error} </h3> }
                            </label>
                            <label className="label-email">
                                E-mail
                                <input required type="email" name="email" onChange={e => this.setState({ email: e.target.value })}/>
                            </label>
                            <label>
                                Senha
                                <input required type="password" name="senha" onChange={e => this.setState({ senha: e.target.value })}/>
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
