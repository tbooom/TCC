function ProdutosDAO(connection) {
    this._connection = connection();
}
ProdutosDAO.prototype.create = function (produto, req, res) {


    console.log();

    console.log('-----------\nchegou na autenticação Produtos.create \n' +'Sua sessão está marcada como' + req.session.autorizado+'\n--------');

    var query = `INSERT INTO bdguinsneri.Produtos VALUES(0,'${produto.nome}','${produto.categoria}','${produto.preco_compra}','${produto.preco_venda}','${produto.unidade_produto}' );`

    console.log(query);
    this._connection.query(query, function (error, result) {
        console.log('resultado: \n' + result);
        console.log('erro: \n' + error);
        // if(req.session.autorizado = true)
        // {

        // }
        if (error) {
            res.send('Deu ruin, olha só: ' + error);
        }

    });
    this._connection.end(function (err) {
        console.log('A conexão com o banco de dados foi encerrada');
    });
}
ProdutosDAO.prototype.show = function (req, res) {
    console.log('chegou na autenticação Produtos.show');
    var query = `select * from bdguinsneri.Produtos`;
    this._connection.query(query, function (error, result) {
        console.log('erro: \n' + error);
        
        
        if (error)
        {
            res.send('Deu ruin, olha só: ' + error);
        }
        else{
            res.render('produtos', {produtos:result})
        }
    });
}




module.exports = function () {
    return ProdutosDAO;
}