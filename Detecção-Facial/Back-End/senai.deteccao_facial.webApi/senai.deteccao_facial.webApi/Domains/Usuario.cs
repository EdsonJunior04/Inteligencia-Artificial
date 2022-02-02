using System;
using System.Collections.Generic;

#nullable disable

namespace senai.deteccao_facial.webApi.Domains
{
    public partial class Usuario
    {
        public int IdUsuario { get; set; }
        public byte? IdTipoUsuario { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }

        public virtual Tipousuario IdTipoUsuarioNavigation { get; set; }
        public virtual Imagemusuario Imagemusuario { get; set; }
    }
}
