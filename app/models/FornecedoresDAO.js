function FornecedoresDAO(connection) {
    this._connection = connection();
}
FornecedoresDAO.prototype.create = function (produto, req, res) {


    console.log();

    console.log('-----------\nchegou na autenticação Produtos.create \n' + 'Sua sessão está marcada como' + req.session.autorizado + '\n--------');

    var query = `INSERT INTO bdguinsneri.Produtos VALUES(0,'${produto.nome}','${produto.categoria}','${produto.preco_compra}','${produto.preco_venda}','${produto.unidade_produto}' );`

    console.log(query);
    this._connection.query(query, function (error, result) {
        console.log('resultado: \n' + result);
        
        // if(req.session.autorizado = true)
        // {
            
        // }
        if (error) {
            console.error('Mensagem de erro: ' +error.stack);
            res.status(501).send('A Categoria ja existe no sistema');
            
        }else{
            res.send(result);
        }
    });
    this._connection.end(function (err) {
        console.log('A conexão com o banco de dados produto.create foi encerrada');
    });
}
FornecedoresDAO.prototype.show = function (req, res) {
    console.log('chegou na autenticação Produtos.show');
    var query = `select * from bdguinsneri.Produtos`;
    this._connection.query(query, function (error, result) {
        console.log('erro: \n' + error);


        if (error) {

            res.send('Deu ruin, olha só: ' + error);
        } else {
            res.render('produtos', {
                produtos: result
            });
        }
    });
    this._connection.end(function (err) {
        console.log('A conexão com o banco de dados produtos.show foi encerrada');
    });
}
FornecedoresDAO.prototype.delete = function(req, res, id)
{
    var query = `DELETE FROM bdguinsneri.Produtos WHERE id_produto = ${id}`;
    this._connection.query(query, function (error, result) {
        console.log('resultado: \n' + result);
        
        // if(req.session.autorizado = true)
        // {
            
        // }
        if (error) {
            console.error('Mensagem de erro: ' +error.stack);
            res.status(501).send('Ocorreu um erro.');
            
        }else{
            res.send(result);
            console.log(result.protocol41);
        }
    });
    this._connection.end(function (err) {
        console.log('A conexão com o banco de dados produto.delete foi encerrada');
    });

} 
FornecedoresDAO.prototype.delete = function(req, res, id)
{
    var query = `DELETE FROM bdguinsneri.Produtos WHERE id_produto = ${id}`;
    this._connection.query(query, function (error, result) {
        console.log('resultado: \n' + result);
        
        // if(req.session.autorizado = true)
        // {
            
        // }
        if (error) {
            console.error('Mensagem de erro: ' +error.stack);
            res.status(501).send('Ocorreu um erro.');
            
        }else{
            res.send(result);
            console.log(result.protocol41);
        }
    });
    this._connection.end(function (err) {
        console.log('A conexão com o banco de dados produto.delete foi encerrada');
    });

} 



module.exports = function () {
    return ProdutosDAO;
}