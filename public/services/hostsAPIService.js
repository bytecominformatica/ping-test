angular.module("pingTestApp").factory("hostsAPI", function ($http) {
	var _getHosts = function () {
		return [{
			 "title": "bytecom-mk-patricia-gomes",
			 "ip": "10.77.100.1",
			 "nodes": [
			   {
				 "title": "bytecom-patricia-gomes-rep1",
				 "ip": "10.77.100.101",
				 "nodes": []
			   },
			   {
				 "title": "bytecom-patricia-gomes-rep2",
				 "ip": "10.77.100.102",
				 "nodes": []
			   },
			   {
				 "title": "bytecom-patricia-gomes-rep3",
				 "ip": "10.77.100.103",
				 "nodes": []
			   },
			   {
				 "title": "bytecom-patricia-gomes-rep4",
				 "ip": "10.77.100.104",
				 "nodes": []
			   },
			   {
				 "title": "bytecom-patricia-gomes-omni",
				 "ip": "10.77.100.105",
				 "nodes": []
			   }
			 ]
		}];
	}
	
	return {
		getHosts: _getHosts
	}
});
