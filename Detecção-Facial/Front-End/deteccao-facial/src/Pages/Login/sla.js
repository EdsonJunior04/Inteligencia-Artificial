<div className="box_login">
          <main>
              <div>
                  <form onSubmit={this.efetuarLogin}>
                      <div>


                          <input
                              // className=""
                              type="text"
                              name="email"
                              value={this.state.email}
                              placeholder=" E-mail"
                              onChange={this.atualizaStateCampo}
                          />

                          <input
                              // className=""
                              type="password"
                              name="senha"
                              value={this.state.senhaUsuario}
                              placeholder=" senha"
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
                      </div>
                  </form>


              </div>
          </main>
      </div>