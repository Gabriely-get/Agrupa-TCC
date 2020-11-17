import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    

    render() {
        return (
            <div className="box">
                <div className="voltar"><Link to="/"><img src="img/voltar.svg" /></Link></div>
                <div className="div-grid">
                    <div>
                        <img src="img/logo-v-p.png" />
                        <h1 className="slogan">Quer conhecer pessoas com interesses iguais a você? O Agrupa pode te ajudar!</h1>
                    </div>
                    <div>
                        <form className="form-login">
                            <h1 className="titulo">Faça seu Login</h1>
                            <label className="label-email">
                                E-mail
                                <input type="email" name="email" />
                            </label>
                            <label>
                                Senha
                                <input type="password" name="senha" />
                                <a>Esqueci minha senha</a>
                            </label>
                            <Link to="/grupos"><input type="submit" value="Entrar" className="entrar"/></Link>
                            <Link to="/cadastro" className="naotenhoconta">Não possuo uma conta</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}