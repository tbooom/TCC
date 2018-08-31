function UsuariosDAO(connection) {
    this._connection = connection();
}
UsuariosDAO.prototype.autenticar = function (usuario, req, res) {
    console.log('chegou na autenticação');

    var query = `SELECT * FROM bdguinsneri.Usuario where login='${usuario.login}' and senha='${usuario.senha}'`

    console.log(query);
    this._connection.query(query, function (error, result) {
        console.log(result);
        console.log(error);
        req.session.autorizado = false;
        if (result[0] != undefined) {
            console.log(result);
            req.session.autorizado = true;

        }
        if (req.session.autorizado)
        {
            res.render('lobby');
        } else{
            res.send('usuário nao encontrado'); 
        }
        
    });
    this._connection.end(function(err)
{
    console.log('A conexão com o banco de dados foi encerrada');
});
}

module.exports = function () {
    return UsuariosDAO;
}