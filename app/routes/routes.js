var network = require('./network');
var hosts = require('./hosts');

module.exports = function(app) {
	network(app);
	hosts(app);
}
