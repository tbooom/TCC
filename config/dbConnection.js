var mysql = require('mysql');


var connMysql = function(){
	console.log('Entrou na função de conexão');
    var db = mysql.createConnection({
        host: 'mysql556.umbler.com',
        port: 41890,
        user: 'guinsneri',
        password: 'teste12345',
        database: 'bdguinsneri'
    });

	return db;
}
module.exports = function(){
	return connMysql;
}