import React from 'react';
import './eventos.css';
import './header.css';
import { Link } from 'react-router-dom';

export default class Eventos extends React.Component {
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
                        <Link to="/eventos" className="pagina_atual" ><li>Eventos</li></Link>
                        <Link to="/sugestoes" ><li>Sugestões</li></Link>
                    </ul>
                    <ul>
                        <Link to="/perfil" ><li><img src="img/grupo-exemplo5.jpg" /></li></Link>
                        <Link to="/" ><li><i class="fas fa-sign-out-alt"></i></li></Link>
                    </ul>
                </header>
                <section className="pesquisa">
                    <form className="input-pesquisa">
                        <label><i class="fas fa-search"></i>
                            <input type="text" name="pesquisar" placeholder="Pesquisar eventos..." className="pesquisa-eventos"/>
                        </label>
                    </form>
                </section>
                <section className="lista-grupos">
                    <div className="card-grupo">
                        <img src="img/evento-exemplo1.jpg" className="img" />
                        <h1>Caminhada</h1>
                        <div className="info-grupo">
                            <div className="tags-eventos">
                                <p>Exercício</p>
                                <p>Saúde</p>
                            </div>
                            <div className="data">
                                <h3><i class="far fa-calendar-alt"></i>02/12/2020</h3>
                            </div>
                            <div className="grupo-evento">
                                <img src="img/logo.png" />
                                <h3>Idosas em Ação</h3>
                            </div>
                            <a>Participar</a>
                        </div>
                    </div>
                    <div className="card-grupo">
                        <img src="img/evento-exemplo2.jpg" className="img" />
                        <h1>Jogar Ranqueada</h1>
                        <div className="info-grupo">
                            <div className="tags-eventos">
                                <p>Jogo</p>
                                <p>FPS</p>
                                <p>Valorant</p>
                            </div>
                            <div className="data">
                                <h3><i class="far fa-calendar-alt"></i>03/12/2020</h3>
                            </div>
                            <div className="grupo-evento">
                                <img src="img/logo.png" />
                                <h3>Valorant</h3>
                            </div>
                            <a>Participar</a>
                        </div>
                    </div>
                    <div className="card-grupo">
                        <img src="img/evento-exemplo3.jpg" className="img" />
                        <h1>Fazer Bolo</h1>
                        <div className="info-grupo">
                            <div className="tags-eventos">
                                <p>Culinária</p>
                                <p>Doce</p>
                                <p>Bolo</p>
                            </div>
                            <div className="data">
                                <h3><i class="far fa-calendar-alt"></i>07/12/2020</h3>
                            </div>
                            <div className="grupo-evento">
                                <img src="img/logo.png" />
                                <h3>Dicas de Cozinha</h3>
                            </div>
                            <a>Participar</a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}