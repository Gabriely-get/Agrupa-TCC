import React from 'react';
import './grupo-info.css';
import './header.css';
import { Link } from 'react-router-dom';

export default class GrupoInfo extends React.Component {
    render() {
        return (
            <div>
                <header className="menu-web">
                    <ul>
                        <Link to="/grupos"><li><img src="img/logo.png" /></li></Link>
                        <Link to="/grupos"><li>Início</li></Link>
                        <Link className="pagina_atual"><li><div className="i-grupos">Grupos<ul className="dropdown">
                            <Link to="/grupo" ><li><img src="img/grupo-exemplo1.jpg" />Superonze</li></Link>
                            <Link to="/grupo" ><li><img src="img/grupo-exemplo2.jpg" />Basqueteiros</li></Link>
                            <Link to="/grupo" ><li><img src="img/grupo-exemplo3.jpg" />Fut Americano</li></Link>
                            <Link to="/grupo" ><li><img src="img/grupo-exemplo4.jpg" />Overwatch</li></Link>
                            <Link to="/grupo" ><li><img src="img/grupo-exemplo5.jpg" />Star Wars</li></Link>
                        </ul><i class="fas fa-caret-down"></i></div></li></Link>
                        <Link to="/eventos" ><li>Eventos</li></Link>
                        <Link to="/sugestoes" ><li>Sugestões</li></Link>
                    </ul>
                    <ul>
                        <Link to="/perfil" ><li><img src="img/icon-user.png" /></li></Link>
                        <Link to="/" ><li><i class="fas fa-sign-out-alt"></i></li></Link>
                    </ul>
                </header>
                <header className="menu-mobile">
                    <input type="checkbox" className="checkbox-menu" />
                    <img src="img/menu-mobile.png" class="menu-hamburguer" />
                    <Link to="/grupos"><li><img src="img/logo-h-p.png" /></li></Link>
                    <ul className="menu-lateral">
                        <Link to="/grupos"><li><img src="img/logo-h-p.png" /></li></Link>
                        <Link to="/grupos"><li>Início</li></Link>
                        <Link className="pagina_atual"><li><div className="i-grupos">Grupos<ul className="dropdown">
                            <Link to="/grupo" ><li><img src="img/grupo-exemplo1.jpg" />Superonze</li></Link>
                            <Link to="/grupo" ><li><img src="img/grupo-exemplo2.jpg" />Basqueteiros</li></Link>
                            <Link to="/grupo" ><li><img src="img/grupo-exemplo3.jpg" />Fut Americano</li></Link>
                            <Link to="/grupo" ><li><img src="img/grupo-exemplo4.jpg" />Overwatch</li></Link>
                            <Link to="/grupo" ><li><img src="img/grupo-exemplo5.jpg" />Star Wars</li></Link>
                        </ul><i class="fas fa-caret-down"></i></div></li></Link>
                        <Link to="/eventos" ><li>Eventos</li></Link>
                        <Link to="/sugestoes" ><li>Sugestões</li></Link>
                    </ul>
                </header>
                <section className="sub-header">
                    <ul>
                        <Link to="/grupo-info" className="pagina_atual" ><li>Superonze</li></Link>
                        <Link to="/grupo"><li>Chat</li></Link>
                        <Link to="/grupo-eventos"><li>Eventos</li></Link>
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
                <section className="section-perfil grupo-info-fundo">
                    <img src="img/capa-exemplo2.jpg" className="capa" />
                    <img src="img/grupo-exemplo1.jpg" className="perfil" />
                    <h1>Superonze</h1>
                    <div className="tags">
                        <p>Anime</p>
                        <p>Mangá</p>
                        <p>Superonze</p>
                    </div>
                    <div className="membros">
                        <h1>Membros</h1>
                        <div className="membro">
                            <img src="img/icon-user.png" />
                            <h2>Laura Figueiredo</h2>
                            <h3>ADM</h3>
                            <i class="fas fa-ellipsis-h"></i>
                            <input type="checkbox" className="checkbox-user" />
                            <ul className="funcoes">
                                <li>Denunciar<i class="fas fa-exclamation"></i>
                                    <input type="checkbox" className="checkbox-denuncia" />
                                    <div className="modal-denuncia">
                                        <h1>Motivo da denúncia</h1>
                                        <form className="form-denuncia">
                                            <div>
                                                <textarea type="text" name="denuncia" placeholder="Motivo da denúncia..." />
                                                <label for="print"><i class="far fa-image"></i>Anexar Print</label>
                                                <input type="file" id="print" />
                                            </div>
                                            <input type="submit" value="Denunciar" />
                                        </form>
                                    </div>
                                </li>
                                <li>Expulsar<i class="fas fa-times"></i>
                                    <input type="checkbox" className="checkbox-expulsao" />

                                    <div className="modal-expulsao">
                                        <h1>Motivo da expulsão</h1>
                                        <form className="form-expulsao">
                                            <div>
                                                <textarea type="text" name="expulsao" placeholder="Motivo da expulsão..." />
                                                <label for="print"><i class="far fa-image"></i>Anexar Print</label>
                                                <input type="file" id="print" />
                                            </div>
                                            <input type="submit" value="Expulsar" />
                                        </form>
                                    </div>
                                </li>
                                <li>Tornar Adm<i class="fas fa-user-cog"></i></li>
                            </ul>
                        </div>
                        <div className="membro">
                            <img src="img/icon-user.png" />
                            <h2>Roberto Almeida</h2>
                            <h3>ADM</h3>
                            <i class="fas fa-ellipsis-h"></i>
                            <input type="checkbox" className="checkbox-user" />
                            <ul className="funcoes">
                                <li>Denunciar<i class="fas fa-exclamation"></i>
                                    <input type="checkbox" className="checkbox-denuncia" />
                                    <div className="modal-denuncia">
                                        <h1>Motivo da denúncia</h1>
                                        <form className="form-denuncia">
                                            <div>
                                                <textarea type="text" name="denuncia" placeholder="Motivo da denúncia..." />
                                                <label for="print"><i class="far fa-image"></i>Anexar Print</label>
                                                <input type="file" id="print" />
                                            </div>
                                            <input type="submit" value="Denunciar" />
                                        </form>
                                    </div>
                                </li>
                                <li>Expulsar<i class="fas fa-times"></i>
                                    <input type="checkbox" className="checkbox-expulsao" />

                                    <div className="modal-expulsao">
                                        <h1>Motivo da expulsão</h1>
                                        <form className="form-expulsao">
                                            <div>
                                                <textarea type="text" name="expulsao" placeholder="Motivo da expulsão..." />
                                                <label for="print"><i class="far fa-image"></i>Anexar Print</label>
                                                <input type="file" id="print" />
                                            </div>
                                            <input type="submit" value="Expulsar" />
                                        </form>
                                    </div>
                                </li>
                                <li>Tornar Administrador<i class="fas fa-user-cog"></i></li>
                            </ul>
                        </div>
                        <div className="membro">
                            <img src="img/icon-user.png" />
                            <h2>Enzo Soares</h2>
                            <h3>ADM</h3>
                            <i class="fas fa-ellipsis-h"></i>
                            <input type="checkbox" className="checkbox-user" />
                            <ul className="funcoes">
                                <li>Denunciar<i class="fas fa-exclamation"></i>
                                    <input type="checkbox" className="checkbox-denuncia" />
                                    <div className="modal-denuncia">
                                        <h1>Motivo da denúncia</h1>
                                        <form className="form-denuncia">
                                            <div>
                                                <textarea type="text" name="denuncia" placeholder="Motivo da denúncia..." />
                                                <label for="print"><i class="far fa-image"></i>Anexar Print</label>
                                                <input type="file" id="print" />
                                            </div>
                                            <input type="submit" value="Denunciar" />
                                        </form>
                                    </div>
                                </li>
                                <li>Expulsar<i class="fas fa-times"></i>
                                    <input type="checkbox" className="checkbox-expulsao" />

                                    <div className="modal-expulsao">
                                        <h1>Motivo da expulsão</h1>
                                        <form className="form-expulsao">
                                            <div>
                                                <textarea type="text" name="expulsao" placeholder="Motivo da expulsão..." />
                                                <label for="print"><i class="far fa-image"></i>Anexar Print</label>
                                                <input type="file" id="print" />
                                            </div>
                                            <input type="submit" value="Expulsar" />
                                        </form>
                                    </div>
                                </li>
                                <li>Tornar Adm<i class="fas fa-user-cog"></i></li>
                            </ul>
                        </div>
                        <div className="membro">
                            <img src="img/icon-user.png" />
                            <h2>Mariana Peixoto</h2>
                            <h3>ADM</h3>
                            <i class="fas fa-ellipsis-h"></i>
                            <input type="checkbox" className="checkbox-user" />
                            <ul className="funcoes">
                                <li>Denunciar<i class="fas fa-exclamation"></i>
                                    <input type="checkbox" className="checkbox-denuncia" />
                                    <div className="modal-denuncia">
                                        <h1>Motivo da denúncia</h1>
                                        <form className="form-denuncia">
                                            <div>
                                                <textarea type="text" name="denuncia" placeholder="Motivo da denúncia..." />
                                                <label for="print"><i class="far fa-image"></i>Anexar Print</label>
                                                <input type="file" id="print" />
                                            </div>
                                            <input type="submit" value="Denunciar" />
                                        </form>
                                    </div>
                                </li>
                                <li>Expulsar<i class="fas fa-times"></i>
                                    <input type="checkbox" className="checkbox-expulsao" />

                                    <div className="modal-expulsao">
                                        <h1>Motivo da expulsão</h1>
                                        <form className="form-expulsao">
                                            <div>
                                                <textarea type="text" name="expulsao" placeholder="Motivo da expulsão..." />
                                                <label for="print"><i class="far fa-image"></i>Anexar Print</label>
                                                <input type="file" id="print" />
                                            </div>
                                            <input type="submit" value="Expulsar" />
                                        </form>
                                    </div>
                                </li>
                                <li>Tornar Adm<i class="fas fa-user-cog"></i></li>
                            </ul>
                        </div>
                        <div className="membro">
                            <img src="img/icon-user.png" />
                            <h2>Julia Azevedo</h2>
                            <i class="fas fa-ellipsis-h"></i>
                            <input type="checkbox" className="checkbox-user" />
                            <ul className="funcoes">
                                <li>Denunciar<i class="fas fa-exclamation"></i>
                                    <input type="checkbox" className="checkbox-denuncia" />
                                    <div className="modal-denuncia">
                                        <h1>Motivo da denúncia</h1>
                                        <form className="form-denuncia">
                                            <div>
                                                <textarea type="text" name="denuncia" placeholder="Motivo da denúncia..." />
                                                <label for="print"><i class="far fa-image"></i>Anexar Print</label>
                                                <input type="file" id="print" />
                                            </div>
                                            <input type="submit" value="Denunciar" />
                                        </form>
                                    </div>
                                </li>
                                <li>Expulsar<i class="fas fa-times"></i>
                                    <input type="checkbox" className="checkbox-expulsao" />

                                    <div className="modal-expulsao">
                                        <h1>Motivo da expulsão</h1>
                                        <form className="form-expulsao">
                                            <div>
                                                <textarea type="text" name="expulsao" placeholder="Motivo da expulsão..." />
                                                <label for="print"><i class="far fa-image"></i>Anexar Print</label>
                                                <input type="file" id="print" />
                                            </div>
                                            <input type="submit" value="Expulsar" />
                                        </form>
                                    </div>
                                </li>
                                <li>Tornar Adm<i class="fas fa-user-cog"></i></li>
                            </ul>
                        </div>
                        <div className="membro">
                            <img src="img/icon-user.png" />
                            <h2>Marcos Pereira</h2>
                            <i class="fas fa-ellipsis-h"></i>
                            <input type="checkbox" className="checkbox-user" />
                            <ul className="funcoes">
                                <li>Denunciar<i class="fas fa-exclamation"></i>
                                    <input type="checkbox" className="checkbox-denuncia" />
                                    <div className="modal-denuncia">
                                        <h1>Motivo da denúncia</h1>
                                        <form className="form-denuncia">
                                            <div>
                                                <textarea type="text" name="denuncia" placeholder="Motivo da denúncia..." />
                                                <label for="print"><i class="far fa-image"></i>Anexar Print</label>
                                                <input type="file" id="print" />
                                            </div>
                                            <input type="submit" value="Denunciar" />
                                        </form>
                                    </div>
                                </li>
                                <li>Expulsar<i class="fas fa-times"></i>
                                    <input type="checkbox" className="checkbox-expulsao" />

                                    <div className="modal-expulsao">
                                        <h1>Motivo da expulsão</h1>
                                        <form className="form-expulsao">
                                            <div>
                                                <textarea type="text" name="expulsao" placeholder="Motivo da expulsão..." />
                                                <label for="print"><i class="far fa-image"></i>Anexar Print</label>
                                                <input type="file" id="print" />
                                            </div>
                                            <input type="submit" value="Expulsar" />
                                        </form>
                                    </div>
                                </li>
                                <li>Tornar Adm<i class="fas fa-user-cog"></i></li>
                            </ul>
                        </div>
                        <div className="membro">
                            <img src="img/icon-user.png" />
                            <h2>Victor Vieira</h2>
                            <i class="fas fa-ellipsis-h"></i>
                            <input type="checkbox" className="checkbox-user" />
                            <ul className="funcoes">
                                <li>Denunciar<i class="fas fa-exclamation"></i>
                                    <input type="checkbox" className="checkbox-denuncia" />
                                    <div className="modal-denuncia">
                                        <h1>Motivo da denúncia</h1>
                                        <form className="form-denuncia">
                                            <div>
                                                <textarea type="text" name="denuncia" placeholder="Motivo da denúncia..." />
                                                <label for="print"><i class="far fa-image"></i>Anexar Print</label>
                                                <input type="file" id="print" />
                                            </div>
                                            <input type="submit" value="Denunciar" />
                                        </form>
                                    </div>
                                </li>
                                <li>Expulsar<i class="fas fa-times"></i>
                                    <input type="checkbox" className="checkbox-expulsao" />

                                    <div className="modal-expulsao">
                                        <h1>Motivo da expulsão</h1>
                                        <form className="form-expulsao">
                                            <div>
                                                <textarea type="text" name="expulsao" placeholder="Motivo da expulsão..." />
                                                <label for="print"><i class="far fa-image"></i>Anexar Print</label>
                                                <input type="file" id="print" />
                                            </div>
                                            <input type="submit" value="Expulsar" />
                                        </form>
                                    </div>
                                </li>
                                <li>Tornar Adm<i class="fas fa-user-cog"></i></li>
                            </ul>
                        </div>
                        <div className="membro">
                            <img src="img/icon-user.png" />
                            <h2>Leonardo Garcia</h2>
                            <i class="fas fa-ellipsis-h"></i>
                            <input type="checkbox" className="checkbox-user" />
                            <ul className="funcoes">
                                <li>Denunciar<i class="fas fa-exclamation"></i>
                                    <input type="checkbox" className="checkbox-denuncia" />
                                    <div className="modal-denuncia">
                                        <h1>Motivo da denúncia</h1>
                                        <form className="form-denuncia">
                                            <div>
                                                <textarea type="text" name="denuncia" placeholder="Motivo da denúncia..." />
                                                <label for="print"><i class="far fa-image"></i>Anexar Print</label>
                                                <input type="file" id="print" />
                                            </div>
                                            <input type="submit" value="Denunciar" />
                                        </form>
                                    </div>
                                </li>
                                <li>Expulsar<i class="fas fa-times"></i>
                                    <input type="checkbox" className="checkbox-expulsao" />

                                    <div className="modal-expulsao">
                                        <h1>Motivo da expulsão</h1>
                                        <form className="form-expulsao">
                                            <div>
                                                <textarea type="text" name="expulsao" placeholder="Motivo da expulsão..." />
                                                <label for="print"><i class="far fa-image"></i>Anexar Print</label>
                                                <input type="file" id="print" />
                                            </div>
                                            <input type="submit" value="Expulsar" />
                                        </form>
                                    </div>
                                </li>
                                <li>Tornar Adm<i class="fas fa-user-cog"></i></li>
                            </ul>
                        </div>
                    </div>
                    <Link to="/grupos">Sair do grupo<i class="fas fa-sign-out-alt"></i></Link>
                </section>
            </div>
        );
    }
}