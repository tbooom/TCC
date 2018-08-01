//var dbConnection = require('../../config/dbConnection');
module.exports.index = function (application, req, res) {
    // var connection = dbConnection();
    // connection.query('select * from Usuario', function (err, result) {
    //   console.log(result);
    //  });
    res.render('index', {
        validacao: {}
    });
}


module.exports.autenticar = function (application, req, res) {
    var dadosform = req.body;
    req.assert('login', 'O campo de usuário não pode ser vazio.').notEmpty();
    req.assert('senha', 'O campo de senha não pode ser vazio.').notEmpty();
    console.log(dadosform);
    var erros = req.validationErrors();
    if (erros) {
        res.render('index', {
            validacao: erros
        });
        return;
    }
    var connection = application.config.dbConnection;
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
    UsuariosDAO.autenticar(dadosform,req, res);
}