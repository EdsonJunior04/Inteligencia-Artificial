import { Component } from "react";
import api from "../../Services/api";
import { parseJwt } from "../../Services/auth";
import '../../Componentes/CSS/style.css'
import logo from '../../Componentes/Imgs/logo-RF.png'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      erroMensagem: '',
      isLoading: false,
    };
  }

  efetuarLogin = (evento) => {
    evento.preventDefault();
    this.setState({ erroMensagem: '', isLoading: true })
    api.post('/Login', {
      emailUsuario: this.state.email,
      senhaUsuario: this.state.senha,
    })
      .then((resposta) => {
        if (resposta.status === 200) {
          localStorage.setItem('usuario-login', resposta.data.token);
          this.setState({ isLoading: false });
          if (parseJwt().role === '1') {
            this.props.history.push('/cadastro')
          } else if (parseJwt().role === '2') {
            this.props.history.push('/cadastro')
          } else if (parseJwt().role === '3') {
            this.props.history.push('/tro')
          }
        }
      })
      .catch(() => {
        this.setState({
          erroMensagem: 'E-mail e/ou senha estão inválidos',
          isLoading: false,
        })
      })
  }

  atualizaStateCampo = (campo) => {
    this.setState({ [campo.target.name]: campo.target.value });
  }



  render() {
    return (
      <div>
        <div className="box_login">
          <h1>Login</h1>
          <form className="cadastro">
            <input
            placeholder="email..."
            type="email"
            name='email'
            value={this.state.email}
            onChange={this.atualizaStateCampo}
            />
            <input
            placeholder="senha..."
            type="password"
            name='senha'
            value={this.state.senhas}
            onChange={this.atualizaStateCampo}
            />
            {
              this.state.isLoading === true && (
                <button
                  type="submit"
                  disabled
                  className="btn_login"
                  id="btn_login"
                >
                  Loading...
                </button>
              )
            }
  
            {
  
              this.state.isLoading === false && (
                <button
                  className="btn_login btn"
                  id="btn_login"
                  type="submit"
                  disabled={
                    this.state.email === '' || this.state.senha === ''
                      ? 'none'
                      : ''
                  }
                >
                  Login
                </button>
              )
            }
          </form>
        </div>
        <div className="reconhecimento">
          <img
            src={logo}
            // className=""
            alt="logo"
          />
          {/* <video autoplay
            id='cam'
            width='530'
            height='370'
            muted
          >
          </video> */}
        </div>
      </div>
    )
  }
}