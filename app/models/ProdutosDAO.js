function ProdutosDAO(connection) {
    this._connection = connection();
}
ProdutosDAO.prototype.create = function (produto, req, res) {
    console.log('chegou na autenticação');

    var query = `INSERT INTO bdguinsneri.Produtos VALUES(0,'${produto.nome}','${produto.categoria}','${produto.preco_compra}','${produto.preco_venda}','${produto.unidade_produto}' );`

    console.log(query);
    this._connection.query(query, function (error, result) {
        console.log('resultado: \n' +result);
        console.log('erro: \n' + error);
        // if(req.session.autorizado = true)
        // {

        // }
      if(error)
      {
        res.send('Deu ruin, olha só: ' + error);
      }
      else{
        res.send('tudo certo !');
      
      }
        
    });
    this._connection.end(function(err)
{
    console.log('A conexão com o banco de dados foi encerrada');
});
}

module.exports = function () {
    return ProdutosDAO;
}