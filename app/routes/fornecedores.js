module.exports = function (application) {
    application.post('/fornecedores/create', function (req, res) {
        application.app.controllers.produtos.create(application, req, res);
    });

    application.get('/fornecedores', function (req, res) {
        application.app.controllers.produtos.produtos(application, req, res);
    });
    application.delete('/fornecedores', function (req, res) {
        id = req.body.id;
        application.app.controllers.produtos.delete(application, req, res,id);
    });
    application.put('/fornecedores', function (req, res) {
        id = req.body.id;
        application.app.controllers.produtos.update(application, req, res,id);
    });
}