var DB = require('../db/data-base');
var Host = DB.import('host');
var httpUtil = require('../util/http-util');

module.exports = function(app) {
	app.get('/hosts', findAll);
	app.get('/hosts/:id', findById);
	app.post('/hosts', save)
}

function save(req, res){
	Host.create(req.body).then(function(host){
		httpUtil.sucess(res, host.dataValues);
	}).catch(function(err){
		httpUtil.error(res, err);
	});
}


function findById(req, res) {
	Host.findById(req.params.id).then(function(host) {
		host.getNodes().then(function(nodes) {
			getNodes(host, nodes, res);
		});
    }).catch(function(err){
		httpUtil.error(res, err);
	});
}

function getNodes(host, nodes, res){
	var _host = host.dataValues;
	_host.nodes = [];
	nodes.forEach(function(node){
		_host.nodes.push(node.dataValues)
	});
	console.log(_host);
	httpUtil.sucess(res, _host);
}

function findAll(req, res) {
	Host.findAll().then(function(hosts){
		var _hosts = []

		hosts.forEach(function(it){
			var _host = it.dataValues;
			it.getNodes().then
		})

		console.log(hosts);
	});
  var _hosts = [{
	 title: "bytecom-mk-patricia-gomes",
	 ip: "10.77.100.1",
	 nodes: [
			{
			  title: "bytecom-patricia-gomes-rep1",
			  ip: "10.77.100.101",
			  nodes: []
			}, {
			  title: "bytecom-patricia-gomes-rep2",
			  ip: "10.77.100.102",
			  nodes: []
			}, {
			  title: "bytecom-patricia-gomes-rep3",
			  ip: "10.77.100.103",
			  nodes: []
			}, {
			  title: "bytecom-patricia-gomes-rep4",
			  ip: "10.77.100.104",
			  nodes: []
			}, {
			  title: "bytecom-patricia-gomes-omni",
			  ip: "10.77.100.105",
			  nodes: []
			}]
	 }];

	var _json = JSON.stringify(_hosts);

	res.set('Content-Type', 'application/json');
	res.end(_json);
}


//
//var h1 = {
//        name: "bytecom-mk-patricia-gomes",
//        ip: "10.77.100.1"
//    }
//var h2 = {
//        name: "bytecom-patricia-gomes-rep1",
//        ip: "10.77.100.101"
//    }

//Host.create(h1).then(function(host){
//    Host.create(h2).then(function(host2){
//        host.setNodes([host2])
//    });
//});