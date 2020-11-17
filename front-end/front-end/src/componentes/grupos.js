import React from 'react';
import './grupos.css';
import './header.css';
import { Link } from 'react-router-dom';

export default class Grupos extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <ul>
                        <Link to="/grupos" ><li><img src="img/logo.png" /></li></Link>
                        <Link to="/grupos" className="pagina_atual"><li>Início</li></Link>
                        <Link><li><div className="i-grupos">Grupos<ul className="dropdown">
                            <Link to="/grupo:id" ><li><img src="img/grupo-exemplo1.jpg" />Superonze</li></Link>
                            <Link to="/grupo:id" ><li><img src="img/grupo-exemplo2.jpg" />Basqueteiros</li></Link>
                            <Link to="/grupo:id" ><li><img src="img/grupo-exemplo3.jpg" />Fut Americano</li></Link>
                            <Link to="/grupo:id" ><li><img src="img/grupo-exemplo4.jpg" />Overwatch</li></Link>
                            <Link to="/grupo:id" ><li><img src="img/grupo-exemplo5.jpg" />Star Wars</li></Link>
                        </ul><i class="fas fa-caret-down"></i></div></li></Link>
                        <Link to="/eventos" ><li>Eventos</li></Link>
                        <Link to="/sugestoes" ><li>Sugestões</li></Link>
                    </ul>
                    <ul>
                        <Link to="/perfil" ><li><img src="img/grupo-exemplo5.jpg" /></li></Link>
                        <Link to="/" ><li><i class="fas fa-sign-out-alt"></i></li></Link>
                    </ul>
                </header>
                <section className="pesquisa">
                    <a>Criar grupo</a>
                    <form className="input-pesquisa">
                        <label><i class="fas fa-search"></i>
                            <input type="text" name="pesquisar" placeholder="Pesquisar grupos..." />
                        </label>
                    </form>
                </section>
                <section className="lista-grupos">
                    <div className="card-grupo">
                        <img src="img/grupo-exemplo6.jpg" className="img" />
                        <h1>Naruto</h1>
                        <div className="info-grupo">
                            <div className="tags">
                                <p>Anime</p>
                                <p>Shounen</p>
                                <p>Ninja</p>
                            </div>
                            <div className="membros">
                                <img src="img/logo.png" />
                                <h3>15 membros</h3>
                            </div>
                            <a>Entrar</a>
                        </div>
                    </div>
                    <div className="card-grupo">
                        <img src="img/grupo-exemplo7.jpg" className="img" />
                        <h1>Valorant</h1>
                        <div className="info-grupo">
                            <div className="tags">
                                <p>Jogo</p>
                                <p>FPS</p>
                                <p>Valorant</p>
                            </div>
                            <div className="membros">
                                <img src="img/logo.png" />
                                <h3>38 membros</h3>
                            </div>
                            <a>Entrar</a>
                        </div>
                    </div>
                    <div className="card-grupo">
                        <img src="img/grupo-exemplo8.jpg" className="img" />
                        <h1>Amantes de Pets</h1>
                        <div className="info-grupo">
                            <div className="tags">
                                <p>Animais</p>
                                <p>Pets</p>
                                <p>Cachorro</p>
                            </div>
                            <div className="membros">
                                <img src="img/logo.png" />
                                <h3>61 membros</h3>
                            </div>
                            <a>Entrar</a>
                        </div>
                    </div>
                    <div className="card-grupo">
                        <img src="img/grupo-exemplo9.jpg" className="img" />
                        <h1>Futebol</h1>
                        <div className="info-grupo">
                            <div className="tags">
                                <p>Esporte</p>
                                <p>Futebol</p>
                            </div>
                            <div className="membros">
                                <img src="img/logo.png" />
                                <h3>40 membros</h3>
                            </div>
                            <a>Entrar</a>
                        </div>
                    </div>
                    <div className="card-grupo">
                        <img src="img/grupo-exemplo10.jpg" className="img" />
                        <h1>Dicas de Cozinha</h1>
                        <div className="info-grupo">
                            <div className="tags">
                                <p>Colinária</p>
                                <p>Cozinha</p>
                                <p>Saúde</p>
                            </div>
                            <div className="membros">
                                <img src="img/logo.png" />
                                <h3>19 membros</h3>
                            </div>
                            <a>Entrar</a>
                        </div>
                    </div>
                    <div className="card-grupo">
                        <img src="img/grupo-exemplo11.jpg" className="img" />
                        <h1>Uniters</h1>
                        <div className="info-grupo">
                            <div className="tags">
                                <p>Música</p>
                                <p>Pop</p>
                                <p>Now United</p>
                            </div>
                            <div className="membros">
                                <img src="img/logo.png" />
                                <h3>23 membros</h3>
                            </div>
                            <a>Entrar</a>
                        </div>
                    </div>
                    <div className="card-grupo">
                        <img src="img/grupo-exemplo12.jpg" className="img" />
                        <h1>Marvel</h1>
                        <div className="info-grupo">
                            <div className="tags">
                                <p>HQ</p>
                                <p>Filmes</p>
                                <p>Marvel</p>
                            </div>
                            <div className="membros">
                                <img src="img/logo.png" />
                                <h3>11 membros</h3>
                            </div>
                            <a>Entrar</a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}