var ping = require ("net-ping");
var session = ping.createSession();

module.exports = function(app) {
	app.get('/ping/:ip', function(req, res) {
		res.set('Content-Type', 'application/json');
		var _ip = req.params.ip.toString()
		var _result
		
		if(_ip) {
			session.pingHost (_ip, function (error, target) {
				if (error) {
					_result = { success : false, target : target, error : error }
					res.end(JSON.stringify(_result));
				} else {
					_result = { success : true, target : target }
					console.log(_result);
					res.end(JSON.stringify(_result));
				}
			});
		} else {
			_result = { success : false, target : target, error : 'ip not found' }
			res.end(JSON.stringify(_result));
		}
	});
}
