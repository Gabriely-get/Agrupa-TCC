import React from 'react';
import './grupo-eventos.css';
import './header.css';
import { Link } from 'react-router-dom';

export default class GrupoEventos extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <ul>
                        <Link to="/grupos" ><li><img src="img/logo.png" /></li></Link>
                        <Link to="/grupos"><li>Início</li></Link>
                        <Link className="pagina_atual" ><li><div className="i-grupos">Grupos<ul className="dropdown">
                            <Link to="/grupo" ><li><img src="img/grupo-exemplo1.jpg" />Superonze</li></Link>
                            <Link to="/grupo" ><li><img src="img/grupo-exemplo2.jpg" />Basqueteiros</li></Link>
                            <Link to="/grupo" ><li><img src="img/grupo-exemplo3.jpg" />Fut Americano</li></Link>
                            <Link to="/grupo" ><li><img src="img/grupo-exemplo4.jpg" />Overwatch</li></Link>
                            <Link to="/grupo" ><li><img src="img/grupo-exemplo5.jpg" />Star Wars</li></Link>
                        </ul><i class="fas fa-caret-down"></i></div></li></Link>
                        <Link to="/eventos"><li>Eventos</li></Link>
                        <Link to="/sugestoes"><li>Sugestões</li></Link>
                    </ul>
                    <ul>
                        <Link to="/perfil" ><li><img src="img/icon-user.png" /></li></Link>
                        <Link to="/" ><li><i class="fas fa-sign-out-alt"></i></li></Link>
                    </ul>
                </header>
                <section className="sub-header">
                    <ul>
                        <Link to="/grupo-info"><li>Superonze</li></Link>
                        <Link to="/grupo"><li>Chat</li></Link>
                        <Link to="/grupo-eventos" className="pagina_atual" ><li>Eventos</li></Link>
                    </ul>
                    <ul>
                        <input type="checkbox" className="checkbox-notificacao" />
                        <Link><li><i class="far fa-bell i-notificacao"></i><ul className="notificacoes">
                            <Link to="/grupo"><i class="fas fa-poll"></i><li>A enquete de Roberto Almeida foi encerrada</li></Link>
                            <Link to="/grupo-eventos"><i class="far fa-calendar-check"></i><li>O evento Gartic Especial irá iniciar</li></Link>
                            <Link to="/grupo"><i class="fas fa-poll"></i><li>Roberto Almeida criou uma enquete</li></Link>
                            <Link to="/grupo-info"><i class="fas fa-user-minus"></i><li>Laura Figueiredo expulsou Maria da Luz</li></Link>
                            <Link to="/grupo-info"><i class="fas fa-user-minus"></i><li>Enzo Soares expulsou Janaina Fonseca</li></Link>
                            <Link to="/grupo-info"><i class="fas fa-user-cog"></i><li>Enzo Soares agora é um administrador!</li></Link>
                            <Link to="/grupo-eventos"><i class="far fa-calendar-alt"></i><li>Mariano Peixoto criou o evento Assistir Super Onze</li></Link>
                        </ul></li></Link>
                    </ul>
                </section>
                <section className="grupo-eventos">
                    <div className="grupo-evento">
                        <img src="img/evento-exemplo4.jpg" />
                        <div>
                            <div>
                                <h1>Assistir Super Onze</h1>
                                <h1>15/10/2020</h1>
                            </div>
                            <div>
                                <p>Vamos nos reunir no discord para assistirmos juntos o novo episódio de Super Onze!</p>
                                <h1>18:00</h1>
                            </div>
                            <div>
                                <div className="tags">
                                    <p>Anime</p>
                                    <p>Superonze</p>
                                </div>
                                <p>https://discord.gg/e7uv3v</p>
                                <a>Participar</a>
                            </div>
                        </div>
                    </div>
                    <div className="grupo-evento">
                        <img src="img/evento-exemplo5.jpg" />
                        <div>
                            <div>
                                <h1>Encontrinho na BGS</h1>
                                <h1>08/10/2020</h1>
                            </div>
                            <div>
                                <p>Vamos nos encontrar na Brasil Game Show desse ano para acompanhar as novidades e ver toda a galera do grupo</p>
                                <h1>15:00</h1>
                            </div>
                            <div>
                                <div className="tags">
                                    <p>Evento</p>
                                    <p>BGS</p>
                                    <p>Superonze</p>
                                </div>
                                <p>Expo Center Norte, São Paulo</p>
                                <a>Participar</a>
                            </div>
                        </div>
                    </div>
                    <div className="grupo-evento">
                        <img src="img/evento-exemplo6.jpg" />
                        <div>
                            <div>
                                <h1>Assistir Super Onze</h1>
                                <h1>15/10/2020</h1>
                            </div>
                            <div>
                                <p>Vamos nos reunir no discord para assistirmos juntos o novo episódio de Super Onze!</p>
                                <h1>18:00</h1>
                            </div>
                            <div>
                                <div className="tags">
                                    <p>Anime</p>
                                    <p>Mangá</p>
                                    <p>Superonze</p>
                                </div>
                                <p>https://discord.gg/e7uv3v</p>
                                <a>Participar</a>
                            </div>
                        </div>
                    </div>
                </section>
                <input type="checkbox" className="checkbox-evento" />
                <div className="modal-criar-evento">
                    <form className="form-criar-evento">
                        <input type="file" name="imagem-grupo" />
                        <div className="margin-top">
                            <div className="inputs">
                                <label>
                                    Nome
                                <input type="text" name="nome" />
                                </label>
                                <label>
                                    Local
                                <input type="text" name="sobrenome" />
                                </label>
                            </div>
                            <div className="inputs">
                                <label>
                                    Data
                                <input type="date" name="nome" />
                                </label>
                                <label>
                                    Hora
                                <input type="time" name="sobrenome" />
                                </label>
                            </div>
                            <div className="inputs">
                                <label>
                                    Categoria
                                <input type="text" name="nome" />
                                </label>
                                <label>
                                    Subcategorias
                                <input type="text" name="sobrenome" />
                                </label>
                            </div>
                            <label>Descrição
                                <textarea type="text" name="sugestao" placeholder="Digite aqui sua sugestão..." />
                            </label>
                        </div>
                        <input type="submit" value="Criar evento" />
                    </form>
                </div>
            </div>
        );
    }
}