module.exports = function (application) {
    application.post('/produtos/create', function (req, res) {
        var dadosform = req.body;

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
            res.send('cadastrado com sucesso'+'\n'+ dadosform.nome+ '\n' + dadosform.categoria+ '\n' + dadosform.preco_venda);
        }



    });

    application.get('/produtos', function (req, res) {
        res.send('você está indo bem');
    });

}