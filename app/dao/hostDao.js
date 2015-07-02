var DB = require('../db/data-base');
var Host = DB.import('host');

module.exports = {
    save: save,
    findById: findById
}

function save(host, callback){
	Host.create(host).then(function(it){
	    callback(null, it.dataValues);
	}).catch(function(err){
	    callback(err);
	});
}

function findById(id, callback) {
	Host.findById(id).then(function(it) {
        getNodes(it, function(err, data){
            callback(err, data);
        });
    }).catch(function(err){
		callback(err);
	});
}

function getNodes(host, callback){
    host.getNodes().then(function(nodes) {
        var _host = host.dataValues;
        _host.nodes = [];

        nodes.forEach(function(node){
            _host.nodes.push(node.dataValues)
        });

	    callback(null, _host);
    });
}
