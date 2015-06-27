module.exports = function(app) {
	app.get('/hosts', getHosts);	
}

function getHosts(req, res) {
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
