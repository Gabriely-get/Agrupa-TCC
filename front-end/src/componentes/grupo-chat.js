<<<<<<< HEAD
import React from 'react';
import './grupo-chat.css';
import './header.css';
import { Link } from 'react-router-dom';

export default class GrupoChat extends React.Component {
    render() {
        return (
            <div className="grupo-chat">
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
                        <Link to="/grupo" className="pagina_atual" ><li>Chat</li></Link>
                        <Link to="/grupo-eventos"><li>Eventos</li></Link>
                    </ul>
                    <ul>
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
                <section className="chat">
                    <div className="mensagem">
                        <img src="img/icon-user.png" />
                        <div>
                            <h1>Laura Figueiredo</h1>
                            <p>Gente, vocês viram que vão lançar novos episódios de Super Onze na semana que vem? A gente podia fazer um evento para ver juntos, o que acham? Eu to super ansiosa!</p>
                        </div>
                    </div>
                    <div className="mensagem">
                        <img src="img/icon-user.png" />
                        <div>
                            <h1>Mairano Peixoto</h1>
                            <p>Pode ser!! Vou criar aqui, aliás vocês viram os cartazes que fizeram para o lançamento? Saca só!</p>
                        </div>
                    </div>
                    <div className="mensagem">
                        <img src="img/icon-user.png" />
                        <div>
                            <h1>Mariano Peixoto</h1>
                            <img src="img/grupo-exemplo1.jpg" />
                        </div>
                    </div>
                    <div className="mensagem">
                        <img src="img/icon-user.png" />
                        <div>
                            <h1>Roberto Almeida</h1>
                            <p>Nossa!! ficaram lindos!! Que dia fica bom para vocês verem o novo episódio? Vou fazer uma enquete para todos votarem e depois a gente vê a data então, beleza?</p>
                        </div>
                    </div>
                    <div className="mensagem">
                        <img src="img/icon-user.png" />
                        <div>
                            <h1>Roberto Almeida</h1>
                            <form>
                                <p>Que dia ver os novos episódios?</p>
                                <label for="opcao1">
                                    <input type="radio" name="enquete" value="opcao1" />Dia 15/10
                                </label>
                                <label for="opcao2">
                                    <input type="radio" name="enquete" value="opcao2" />Dia 16/10
                                </label>
                            </form>
                        </div>
                    </div>
                    <div className="mensagem">
                        <img src="img/icon-user.png" />
                        <div>
                            <h1>Laura Figueiredo</h1>
                            <p>Para mim fica bom no dia 15, dia 16 eu vou ter prova</p>
                        </div>
                    </div>
                </section>
                <section className="barra-digitar">
                    <form>
                        <label><i class="far fa-image"></i><i class="fas fa-poll"></i>
                            <input type="text" name="enviar-msg" placeholder="Digite uma mensagem..."></input>
                            <input type="submit" value="Enviar" name="btn-enviar-msg"></input>
                        </label>
                    </form>
                </section>
            </div>
        );
    }
=======
import React from 'react';
import './grupo-chat.css';
import './header.css';
import { Link } from 'react-router-dom';

export default class GrupoChat extends React.Component {
    render() {
        return (
            <div className="grupo-chat">
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
                        <Link to="/grupo" className="pagina_atual" ><li>Chat</li></Link>
                        <Link to="/grupo-eventos"><li>Eventos</li></Link>
                    </ul>
                    <ul>
                        <input type="checkbox" className="checkbox-notificacao" />
                        <Link><li><i class="far fa-bell i-notificacao"></i>
                            <ul className="notificacoes">
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
                <section className="chat">
                    <div className="mensagem">
                        <img src="img/icon-user.png" />
                        <div>
                            <h1>Laura Figueiredo</h1>
                            <p>Gente, vocês viram que vão lançar novos episódios de Super Onze na semana que vem? A gente podia fazer um evento para ver juntos, o que acham? Eu to super ansiosa!</p>
                        </div>
                    </div>
                    <div className="mensagem">
                        <img src="img/icon-user.png" />
                        <div>
                            <h1>Mairano Peixoto</h1>
                            <p>Pode ser!! Vou criar aqui, aliás vocês viram os cartazes que fizeram para o lançamento? Saca só!</p>
                        </div>
                    </div>
                    <div className="mensagem">
                        <img src="img/icon-user.png" />
                        <div>
                            <h1>Mariano Peixoto</h1>
                            <img src="img/grupo-exemplo1.jpg" />
                        </div>
                    </div>
                    <div className="mensagem">
                        <img src="img/icon-user.png" />
                        <div>
                            <h1>Roberto Almeida</h1>
                            <p>Nossa!! ficaram lindos!! Que dia fica bom para vocês verem o novo episódio? Vou fazer uma enquete para todos votarem e depois a gente vê a data então, beleza?</p>
                        </div>
                    </div>
                    <div className="mensagem">
                        <img src="img/icon-user.png" />
                        <div>
                            <h1>Roberto Almeida</h1>
                            <form>
                                <p>Que dia ver os novos episódios?</p>
                                <label for="opcao1">
                                    <input type="radio" name="enquete" value="opcao1" />Dia 15/10
                                </label>
                                <label for="opcao2">
                                    <input type="radio" name="enquete" value="opcao2" />Dia 16/10
                                </label>
                            </form>
                        </div>
                    </div>
                    <div className="mensagem">
                        <img src="img/icon-user.png" />
                        <div>
                            <h1>Laura Figueiredo</h1>
                            <p>Para mim fica bom no dia 15, dia 16 eu vou ter prova</p>
                        </div>
                    </div>
                </section>
                <section className="barra-digitar">
                    <input type="checkbox" className="checkbox-enquete" />
                    <div className="modal-criar-enquete">
                        <h1>Criar uma enquete</h1>
                        <form className="form-criar-enquete">
                            <div>
                                <label>Pergunta
                                    <input type="text" name="pergunta-enquete" placeholder="Ex.: Você recomendaria o Agrupa para seus amigos?"/>
                                </label>
                                <div>
                                    <label>Opções
                                        <input type="text" name="opcao-enquete" placeholder="Sim"/>
                                        <input type="text" name="opcao-enquete" placeholder="Não" />
                                    </label>
                                    <button>Adicionar Opção</button>
                                </div>
                            </div>
                            <input type="submit" value="Criar Enquete" />
                        </form>
                    </div>
                    <form className="barra-digitar">
                        <label><i class="far fa-image"></i><i class="fas fa-poll"></i>
                            <input type="text" name="enviar-msg" placeholder="Digite uma mensagem..."></input>
                            <input type="submit" value="Enviar" name="btn-enviar-msg"></input>
                        </label>
                    </form>
                </section>
            </div>
        );
    }
>>>>>>> 32ff6618120562340e42134b5f5e27e9f5ea9916
}