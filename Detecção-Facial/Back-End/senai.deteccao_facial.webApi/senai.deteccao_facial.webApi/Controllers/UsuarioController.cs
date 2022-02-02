using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using senai.deteccao_facial.webApi.Domains;
using senai.deteccao_facial.webApi.Interfaces;
using senai.deteccao_facial.webApi.Repositories;
using System;

namespace senai.deteccao_facial.webApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private IUsuarioRepository _usuarioRepository { get; set; }
        public UsuarioController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        /// <summary>
        /// Lista todos os usuários
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Listar()
        {
            if (_usuarioRepository.ListarUsuarios() == null)
            {
                return NotFound(new
                {
                    Mensagem = "Não existe algum usuario cadastrado"
                });
            }

            return Ok(_usuarioRepository.ListarUsuarios());
        }

        /// <summary>
        /// Cadastra um novo usuário
        /// </summary>
        /// <param name="novoUsuario"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Cadastrar(Usuario novoUsuario)
        {
            try
            {
                if (novoUsuario == null)
                {
                    return BadRequest(new
                    {
                        Mensagem = "Todos dados são obrigatórios"
                    });
                }
                _usuarioRepository.Cadastrar(novoUsuario);
                return StatusCode(201, new
                {
                    Mensagem = "Usuario cadastrado",
                    novoUsuario
                });
            }
            catch (Exception error)
            {

                return BadRequest(error);
            }

        }

        /// <summary>
        /// Edita um usuário
        /// </summary>
        /// <param name="id"></param>
        /// <param name="usuarioAtualizado"></param>
        /// <returns></returns>
        [HttpPut("att/{id}")]
        public IActionResult Atualizar(int id, Usuario usuarioAtualizado)
        {
            try
            {
                if (id <= 0)
                {
                    return BadRequest(new
                    {
                        Mensagem = "ID inválido"
                    });
                }

                if (_usuarioRepository.BuscarPorId(id) == null)
                {
                    return BadRequest(new
                    {
                        Mensagem = "Não existe usuário com esse ID"
                    });
                }
                if (usuarioAtualizado == null)
                {
                    return BadRequest(new
                    {
                        Mensagem = "Todos dados são obrigatórios"
                    });
                }
                _usuarioRepository.Atualizar(id, usuarioAtualizado);
                return StatusCode(200, new
                {
                    Mensagem = "Usuario atualizado",
                    usuarioAtualizado
                });
            }
            catch (Exception error)
            {

                return BadRequest(error.Message);
            }

        }

        /// <summary>
        /// Deleta um usuário
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("Delete/{id}")]
        public IActionResult Deletar(int id)
        {
            try
            {
                if (id <= 0)
                {
                    return BadRequest(new
                    {
                        Mensagem = "ID inválido"
                    });
                }

                if (_usuarioRepository.BuscarPorId(id) == null)
                {
                    return BadRequest(new
                    {
                        Mensagem = "Não existe usuário com esse ID"
                    });
                }

                _usuarioRepository.Deletar(id);

                return StatusCode(200, new
                {
                    Mensagem = "Usuario deletado"
                });
            }
            catch (Exception error)
            {

                return BadRequest(error.Message);
            }

        }


    }
}