USE deteccao
GO

--TIPO USUARIO
INSERT INTO TIPOUSUARIO(tipo)
VALUES ('Usuario'),('Administrador');
GO

--USUARIO
INSERT INTO USUARIO(idTipoUsuario,nome,email,senha)
VALUES ('2', 'Administrador', 'adm@adm.com', 'adm12345'),
	   ('1','Edson','edson@gmail.com','edson123')
GO

select * from USUARIO
go