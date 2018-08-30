module.exports = function(application){
	application.get('/dashboard', function(req, res){
		application.app.controllers.dashboard.dashboard(application, req, res);
	});




}