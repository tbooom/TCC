//var dbConnection = require('../../config/dbConnection');
module.exports.lobby = function (application, req, res) {
    // var connection = dbConnection();
    // connection.query('select * from Usuario', function (err, result) {
    //   console.log(result);
    //  });
    res.render('lobby');
}

