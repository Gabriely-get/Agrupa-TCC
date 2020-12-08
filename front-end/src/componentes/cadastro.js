import React from 'react';
import './cadastro.css';
import { Link } from 'react-router-dom';

export default class Cadastro extends React.Component {
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
                                    Nickname
                                <input type="text" name="nickname" />
                                </label>
                            </div>
                            <label>
                                Data de nascimento
                                <input type="date" name="data-nascimento" />
                            </label>
                            <label>
                                E-mail
                                <input type="email" name="email" />
                            </label>
                            <label>
                                Senha
                                <input type="password" name="senha" />
                            </label>
                            <label>
                                Confirmar senha
                                <input type="password" name="confirmarsenha" />
                            </label>
                            <input type="checkbox" name="termosdeuso" className="termosdeuso" />
                            <b>Li e aceito os <a>termos de uso</a></b>
                            <input type="checkbox" className="checkbox-termos" />
                            <div className="modal-criar-termos">
                                <h1>Termos de uso</h1>
                            </div>
                            <Link to="/login"><input type="submit" value="Cadastrar" className="cadastrar" /></Link>
                            <Link to="/login" className="jatenhoconta">Já possuo uma conta</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}