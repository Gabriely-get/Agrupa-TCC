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
      pass2: "",
      error: ""
    };

    handleRegister = async e => {

      e.preventDefault();
      const { email, senha, name, nickName, birthDate, pass2 } = this.state;

      if (!email || !senha || !name || !nickName || !birthDate || !pass2) {
        this.setState({
          error: 
            'Preencha todos os campos para continuar!'
          });
      } else if(!(senha == pass2)){
        this.setState({
          error: 
            'As senhas não coincidem!'
          });
      } else{
        try {
          // console.log('to aq 1');
          console.log(birthDate);
          const response = await api.post("/users", { email, password_user:senha, name, nickName, birthDate });
          // this.setState({
          //   error: 
          //   response.data.message
          //   });
          // thiresponse.data.acessToken;
          // login(t, t);
          // console.log(response.data.message + ' ' + response.data.email + ' ' + response.data.acessToken);
            // console.log(response.data + ' ' + 'pouha viu');
          //   this.props.history.push("/grupos");
          // }
          // else{
          //   console.log('pohaaa');
          // }
          
          if(response.data.message != "Usuario cadastrado com sucesso!"){
            console.log(response.data);
            this.setState({
              error: 
                response.data.message
            });
            
            // const token = response.headers["x-access-token"];
            // console.log(response.data.acessToken + ' ' + token);
          } else{
            this.props.history.push("/grupos");
            console.log(response.data);
          }

        } catch (err) {
          console.log("erro: " + err + "data: " + "'birthDate'" + "erro: " + email +"erro: " + senha +"erro: " + name +"erro: " + nickName);
          this.setState({
            error:
              "Houve um erro inesperado mas não se preocupe, não é sua culpa!"
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
                        <form onSubmit={this.handleRegister}>
                            <h1 className="titulo">Faça seu Cadastro</h1>
                            <label>
                              { this.state.error && <h3 id="loginError"> {this.state.error} </h3> }
                            </label>
                            <div className="inputs">
                                <label>
                                    Nome
                                <input type="text" name="nome" onChange={e => this.setState({ name: e.target.value })} />
                                </label>
                                <label>
                                    Nickname
                                <input type="text" name="nickname" onChange={e => this.setState({ nickName: e.target.value })}/>
                                </label>
                            </div>
                            <label>
                                Data de nascimento
                                <input type="date" name="data-nascimento" onChange={e => this.setState({ birthDate: e.target.value })}/>
                            </label>
                            <label>
                                E-mail
                                <input type="email" name="email" onChange={e => this.setState({ email: e.target.value })} />
                            </label>
                            <label>
                                Senha
                                <input type="password" name="senha" onChange={e => this.setState({ senha: e.target.value })}/>
                            </label>
                            <label>
                                Confirmar senha
                                <input type="password" name="confirmarsenha" onChange={e => this.setState({ pass2: e.target.value })}/>
                            </label>
                            <input type="checkbox" name="termosdeuso" className="termosdeuso" />
                            <b>Li e aceito os <a>termos de uso</a></b>
                            <input type="checkbox" className="checkbox-termos" />
                            <div className="modal-criar-termos">
                                <h1>Termos de uso</h1>
                            </div>
                            <input type="submit" value="Cadastrar" className="cadastrar" />
                            <Link to="/login" className="jatenhoconta">Já possuo uma conta</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}