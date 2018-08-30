module.exports = function (application) {
    application.post('/produtos/create', function (req, res) {
        application.app.controllers.produtos.create(application, req, res);
    });

    application.get('/produtos', function (req, res) {
        application.app.controllers.produtos.produtos(application, req, res);
    });

}