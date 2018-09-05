module.exports.create = function(application, req, res)
{
    var dadosform = req.body;
    console.log('\nreq.body: '+dadosform.nome);

    req.assert('nome', 'O Campo de nome não pode ser vazio').notEmpty();
    req.assert('categoria','A Identificação do produto nao pode ser vazio').notEmpty();
    req.assert('preco_venda','O valor de venda não pode ser vazio').notEmpty()
    req.assert('preco_venda','O valor de venda deve ser um numero').isDecimal();
    req.assert('preco_venda','O valor deve ser menor que 12 digitos').isByteLength(1,11);
    
    var erros = req.validationErrors();
    console.log(erros);
    if(erros)
    {
        res.send(erros);
    }
    else{
        console.log('-------------\nProduto.create \n'+dadosform.nome +'\n' + dadosform.categoria +'\n'+ dadosform.preco_venda+'\n'+dadosform.unidade_produto+ '\n-------------');
        var connection = application.config.dbConnection;
        var ProdutosDAO = new application.app.models.ProdutosDAO(connection);
        ProdutosDAO.create(dadosform,req, res);
        application.app.controllers.produtos.produtos(application, req, res);

        //res.send('cadastrado com sucesso'+'\n'+ dadosform.nome+ '\n' + dadosform.categoria+ '\n' + dadosform.preco_venda);
    }
}
module.exports.produtos = function (application, req, res) {
    // var connection = dbConnection();
    // connection.query('select * from Usuario', function (err, result) {
    //   console.log(result);
    //  });
    console.log('-----------\nchegou na autenticação Produtos.show \n' +'Sua sessão está marcada como: ' + req.session.autorizado+'\n--------');
    var connection = application.config.dbConnection;
        var ProdutosDAO = new application.app.models.ProdutosDAO(connection);
        ProdutosDAO.show(req, res);
}