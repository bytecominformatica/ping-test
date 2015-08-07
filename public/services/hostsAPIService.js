angular.module("pingTestApp")
	.factory("hostsAPI", hostAPI);

function hostAPI ($http) {
	return {
		getHosts: _getHosts,
		remove: _remove,
		isOnline: _isOnline
	};

	function _getHosts() {
		return $http.get("/hosts");
	};

	function _remove(host, callback) {
		$http.delete("/hosts/" + host.id).success(function(data){
			callback(data);
		});
	};

	function _isOnline(host) {
		return $http.get("/ping/" + host.ip);
	};

}
