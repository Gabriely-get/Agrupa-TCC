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
            return this.props.history.push("/login");
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
                                Descrição
                                <input type="text" name="nickname"/>
                            </label>
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
                            <b>Ao criar sua conta você aceita os <a>termos de uso e políticas de privacidade</a></b>
                            <input type="checkbox" className="checkbox-termos" />
                            <div className="modal-criar-termos">
                                <h1>Termos de uso</h1>
                                <div className="termos-termos">
                                  <p>TERMOS DE USO DO AGRUPA</p>
                                  <p>Última Atualização: 09 de outubro de 2020</p>
                                  <p>Bem vindo(a)! Obrigado por utilizar o Agrupa!</p>
                                  <p>Esta aplicação e seu conteúdo ("Agrupa") são controlados e operados pelo próprio Agrupa. Todos os direitos reservados.</p>
                                  <p>Estes termos de uso têm por objeto definir as regras a serem seguidas para a utilização do Agrupa ("Termos de Uso"), sem prejuízo da aplicação da legislação vigente.</p>
                                  <p>AO UTILIZAR O AGRUPA, VOCÊ AUTOMATICAMENTE CONCORDA COM ESTES TERMOS DE USO, RESPONSABILIZANDO-SE INTEGRALMENTE POR TODOS E QUAISQUER ATOS PRATICADOS POR VOCÊ NO AGRUPA OU EM SERVIÇOS A ELE RELACIONADOS. CASO VOCÊ NÃO CONCORDE COM QUALQUER DOS TERMOS E CONDIÇÕES ABAIXO ESTABELECIDOS, VOCÊ NÃO DEVE UTILIZAR O AGRUPA. VOCÊ TAMBÉM CONCORDA COM OS TERMOS DESCRITOS EM NOSSA POLÍTICA DE PRIVACIDADE. PARA ACESSÁ-LA, CLIQUE AQUI ([inserir URL/link]).</p>
                                  <p>Caso queira nos dar algum feedback sobre o Agrupa, tenha dúvidas ou precise tratar de qualquer assunto relacionado a estes Termos de Uso, entre em contato conosco através do e-mail</p>
                                  <p>1. O QUE É O AGRUPA?</p>
                                  <p>1.1. Serviços. o Agrupa é uma plataforma que oferece os seguintes serviços: Interação entre usuários. Criação de grupos. Criação de Eventos. Postagem em grupos..</p>
                                  <p>1.2. Suspensão. Nós nos reservamos o direito de suspender ou cancelar, a qualquer momento, o seu acesso à aplicação em caso de suspeita de fraude, obtenção de benefício ou vantagem de forma ilícita, ou pelo não cumprimento de quaisquer condições previstas nestes Termos de Uso, na Politica de Privacidade ou na legislação aplicável. Nesses casos, não será devida qualquer indenização a você, e o Agrupa poderá promover a competente ação de regresso, se necessário, bem como tomar quaisquer outras medidas necessárias para perseguir e resguardar seus interesses.</p>
                                  <p>2.COMO ACESSO O AGRUPA?</p>
                                  <p>2.1. Acesso. Para acessar o Agrupa e utilizar suas funcionalidades é necessário efetuar um cadastro. Para cadastrar-se, você nos fornecerá informações pessoais, conforme descrito em nossa Política de Privacidade. Para saber mais sobre a privacidade de suas informações pessoais no Agrupa, acesse nossa Política de Privacidade.</p>
                                  <p>2.2. Idade de Utilização. Para utilizar o Agrupa, você deve ter pelo menos 18 (dezoito) anos. Caso você tenha idade inferior, você poderá utilizar o Agrupa desde que com a supervisão dos seus pais ou responsáveis legais e desde que eles tenham lido e concordado expressamente com estes Termos de Uso, através da seguinte solução técnica:</p>
                                  <p>2.3. Titularidade. A partir do cadastro, você será titular de uma conta que somente poderá ser acessada por você. Caso o Agrupa detecte alguma conta feita a partir de informações falsas, por usuários que, por exemplo, não possuem a idade mínima permitida, essa conta será automaticamente deletada.</p>
                                  <p>2.4. Atualização das Informações. Desde já, você se compromete a manter</p>
                                  <p>as suas informações pessoais atualizadas. Você também concorda que irá manter o seu login e senha seguros e fora do alcance de terceiros, e não permitirá que a sua conta no Agrupa seja usada por outras pessoas. Dessa forma, o usuário responsabiliza-se por todas as ações realizadas em sua conta.</p>
                                  <p>3. QUAIS SÃO OS DIREITOS DO AGRUPA SOBRE A APLICAÇÃO?</p>
                                  <p>3.1. Nossos Direitos. Todos os direitos relativos ao Agrupa e suas funcionalidades são de propriedade exclusiva do Agrupa, inclusive no que diz respeito aos seus textos, imagens, layouts, software, códigos, bases de dados, gráficos, artigos, fotografias e demais conteúdos produzidos direta ou indiretamente pelo Agrupa ("Conteúdo do Agrupa"). O Conteúdo do Agrupa é protegido pela lei de direitos autorais e de propriedade intelectual. É proibido usar, copiar, reproduzir, modificar, traduzir, publicar, transmitir, distribuir, executar, fazer o upload, exibir, licenciar, vender ou explorar e fazer engenharia reversa do Conteúdo do Agrupa, para qualquer finalidade, sem o consentimento prévio e expresso do Agrupa. Qualquer uso não autorizado do Conteúdo do Agrupa será considerado como violação dos direitos autorais e de propriedade intelectual do Agrupa.</p>
                                  <p>4. PROPRIEDADE INTELECTUAL SOBRE O SOFTWARE E OS MATERIAIS DISPONIBILIZADOS</p>
                                  <p>4.1. Propriedade Intelectual. Para nós do Agrupa, a qualidade dos materiais disponibilizados ao usuário é de suma importância. A criação deles é fruto de muito trabalho e dedicação de nossos desenvolvedores. Por isso, reafirmamos que o Agrupa garante que todos os direitos, título e interesse (incluindo, mas não apenas, os direitos autorais, marcários e outros de propriedade intelectual) sobre o serviço disponibilizado por nós permanecerão sob a titularidade do Agrupa.</p>
                                  <p>4.2. Não-aquisição de Direitos. O usuário não adquirirá nenhum direito de propriedade sobre os serviços e conteúdos do Agrupa, exceto quando haja outorga expressa neste Termos de Uso.</p>
                                  <p>Política de Privacidade</p>
                                  <p>O Agrupa respeita a sua privacidade e seus dados pessoais. Nunca divulgaremos, ou venderemos, suas informações pessoais. Porém, é capaz que essas informações sejam utilizadas internamente, para estatísticas, com intuito de melhor entender o perfil do usuário. Entretanto, essas informações podem ser agrupadas e utilizadas, internamente, como estatísticas genéricas, visando melhor entendimento do perfil do usuário. </p>
                                  <p>Toda informação que você nos confia é de propriedade do Agrupa.</p>
                                </div>
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