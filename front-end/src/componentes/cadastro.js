import React from 'react';
import './cadastro.css';
import api from "../services/api";
import { Link } from 'react-router-dom';

export default class Cadastro extends React.Component {

    state = {
        email: "",
        senha: "",
        name: "",
        nickName: "",
        birthDate: "",
        error: ""
      };
    
      handleSignIn = async e => {

        e.preventDefault();
        const { email, senha, name, nickName, birthDate } = this.state;

        if (!email || !senha || !name || !name !nickName || !birthDate) {
          this.setState({
            error: 
              'Preencha todos os campos para continuar!'
            });
          console.log('sem todos os campos preenchidos');
        } else {
          try {
            // console.log('to aq 1');
            const response = await api.post("/users", { email, password_user:senha, name, nickName, birthDate });
            // this.setState({
            //   error: 
            //   response.data.message
            //   });
            // thiresponse.data.acessToken;
            // login(t, t);
            // console.log(response.data.message + ' ' + response.data.email + ' ' + response.data.acessToken);
              console.log(response.data);
            //   this.props.history.push("/grupos");
            // }
            // else{
            //   console.log('pohaaa');
            // }
            
            if(response.status == 200){
              this.props.history.push("/grupos");
              const token = response.headers["x-access-token"];
              console.log(response.data.acessToken + ' ' + token);
            } else{
              console.log(response.data);
              this.setState({
                error: 
                  response.data.message
              });
            }

          } catch (err) {
            console.log("erro: " + err);
            this.setState({
              error:
                "Preencha e-mail e senha para continuar!"
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
                        <h1 className="slogan">Crie uma conta para conhecer pessoas novas e interagir em grupos de seu interesse!</h1>
                    </div>
                    <div>
                        <form>
                            <h1 className="titulo">Faça seu Cadastro</h1>
                            <div className="inputs">
                                <label>
                                    Nome
                                <input type="text" name="nome" />
                                </label>
                                <label>
                                    Sobrenome
                                <input type="text" name="sobrenome" />
                                </label>
                            </div>
                            <label>
                                E-mail
                                <input type="email" name="email" />
                            </label>
                            <label>
                                Senha
                                <input type="password" name="senha" />
                            </label>
                            <label>
                                Confirmar Senha
                                <input type="password" name="confirmarsenha" />
                            </label>
                            <input type="checkbox" name="termosdeuso" className="termosdeuso" />
                            <b>Li e aceito os <a>termos de uso</a></b>
                            <Link to="/login"><input type="submit" value="Cadastrar" className="cadastrar"/></Link>
                            <Link to="/login" className="jatenhoconta">Já possuo uma conta</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}