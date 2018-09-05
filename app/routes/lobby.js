module.exports = function(application){
	application.get('/lobby', function(req, res){
		application.app.controllers.lobby.lobby(application, req, res);
	});




}