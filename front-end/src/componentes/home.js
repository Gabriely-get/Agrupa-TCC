import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">

                <section className="section section1">
                    <div className="box-inicio">
                        <div>
                            <img src="/img/logo-v-p.png" />
                        </div>
                        <div>
                            <h1>Quer conhecer pessoas com interesses iguais a você? O Agrupa pode te ajudar!</h1>
                            <div className="botoes-iniciais">
                                <Link to="/login">Entrar</Link>
                                <Link to="/cadastro">Cadastrar</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section2">
                    <div>
                        <div className="card">
                            <img src="img/logo.png" />
                            <h1>Entre em Grupos</h1>
                            <p>Crie ou entre em grupos de acordo com temas de seu interesse</p>
                        </div>
                    </div>
                    <div>
                        <div className="card card2">
                            <img src="img/chat.png" />
                            <h1>Interaja com Pessoas</h1>
                            <p>Converse e interaja com outros membros dos grupos através de ferramentas interativas</p>
                        </div>
                        <Link to="/cadastro">Explore Mais</Link>
                    </div>
                    <div>
                        <div className="card">
                            <img src="img/feliz.png" />
                            <h1>Faça novos Amigos</h1>
                            <p>Conheça pessoas com mesmos interesses e faça novos amigos para vida toda</p>
                        </div>
                    </div>
                </section>

                <section className="section section3">
                    <div>
                        <div>
                            <h1>Explore grupos de acordo com temas de seu interesse...</h1>
                            <Link to="/cadastro">Explore Mais</Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="img/grupos.png" />
                        </div>
                    </div>
                </section>

                <section className="section section4">
                    <div>
                        <div>
                            <img src="img/eventos.png" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Participe de eventos relacionados aos seus grupos</h1>
                            <Link to="/cadastro">Explore Mais</Link>
                        </div>
                    </div>
                </section>

                <section className="section section5">
                    <div>
                        <div>
                            <h1>Conecte-se hoje você também!</h1>
                            <Link to="/cadastro">Explore Mais</Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="img/logo-v-p.png" />
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}