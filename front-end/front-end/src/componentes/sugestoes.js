import React from 'react';
import './sugestoes.css';
import './header.css';
import { Link } from 'react-router-dom';

export default class Sugestoes extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <ul>
                        <Link to="/grupos" ><li><img src="img/logo.png" /></li></Link>
                        <Link to="/grupos"><li>Início</li></Link>
                        <Link><li><div className="i-grupos">Grupos<ul className="dropdown">
                            <Link to="/grupo:id" ><li><img src="img/grupo-exemplo1.jpg" />Superonze</li></Link>
                            <Link to="/grupo:id" ><li><img src="img/grupo-exemplo2.jpg" />Basqueteiros</li></Link>
                            <Link to="/grupo:id" ><li><img src="img/grupo-exemplo3.jpg" />Fut Americano</li></Link>
                            <Link to="/grupo:id" ><li><img src="img/grupo-exemplo4.jpg" />Overwatch</li></Link>
                            <Link to="/grupo:id" ><li><img src="img/grupo-exemplo5.jpg" />Star Wars</li></Link>
                        </ul><i class="fas fa-caret-down"></i></div></li></Link>
                        <Link to="/eventos"><li>Eventos</li></Link>
                        <Link to="/sugestoes" className="pagina_atual" ><li>Sugestões</li></Link>
                    </ul>
                    <ul>
                        <Link to="/perfil" ><li><img src="img/grupo-exemplo5.jpg" /></li></Link>
                        <Link to="/" ><li><i class="fas fa-sign-out-alt"></i></li></Link>
                    </ul>
                </header>
                <section className="section-sugestoes">
                        <form>
                            <h1 className="titulo">Faça uma Sugestão</h1>
                            <label>
                                <h2>Assunto</h2>
                                <input type="text" name="assunto" placeholder="Informe o assunto da sugestão..." />
                            </label>
                            <label>
                                <h2>Sugestão</h2>
                                <textarea type="text" name="sugestao" placeholder="Digite aqui sua sugestão..." />
                            </label>
                            <input type="submit" value="Enviar" className="btn-sugestao"/>
                        </form>
                </section>
            </div>
        );
    }
}