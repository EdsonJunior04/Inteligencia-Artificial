import React from 'react';

import api from '../../Services/api';

export default class cadastro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idTipoUsuario: 0,
            nome: [],
            email: [],
            senha: []
        };
    };
    cadastrarConsulta = item => {
        try {
            this.setState({ isLoading: true });



            const resposta = api.post('/Usuario', {
                idTipoUsuario: this.state.idTipoUsuario,
                nome: this.state.Nome,
                email: this.state.Email,
                senha: this.state.Senha
            }, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('usuario-login'),
                },
            }

            );
            if (resposta.status === 201) {
                console.warn('Usuário cadastrado.');
            } else {
                console.warn('Falha ao Cadastrar o usuário.');
            }
        } catch (error) {
            console.warn(error);
        }

    }

    render() {
        return (
            <div>
                <div className="box_login">
                    <h1>Cadastro</h1>
                    <form className="cadastro">
                        <input
                            placeholder="Qual usuario?"
                            type="text"
                            name='text'
                            // value={this.state.email}
                            // onChange={this.atualizaStateCampo}
                        />
                        <input
                            placeholder="Nome"
                            type="text"
                            name='Nome'
                            // value={this.state.senhas}
                            // onChange={this.atualizaStateCampo}
                        />
                        <input
                            placeholder="Email..."
                            type="email"
                            name='email'
                            // value={this.state.email}
                            // onChange={this.atualizaStateCampo}
                        />
                        <input
                            placeholder="Senha..."
                            type="password"
                            name='senha'
                            // value={this.state.senha}
                            // onChange={this.atualizaStateCampo}
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
                                    Cadastrar
                                </button>
                            )
                        }
                    </form>
                    <div className="reconhecimento">
                        {/* <img
                            src={logo}
                            // className=""
                            alt="logo"
                        /> */}
                        {/* <video autoplay
            id='cam'
            width='530'
            height='370'
            muted
          >
          </video> */}
                    </div>
                </div>
            </div>
        )
    }
}