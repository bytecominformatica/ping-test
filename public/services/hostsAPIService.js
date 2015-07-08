angular.module("pingTestApp")
	.factory("hostsAPI", hostAPI);

function hostAPI ($http) {
	return {
		getHosts: _getHosts,
		isOnline: _isOnline
	};

	function _getHosts() {
		return $http.get("/hosts");
	};

	function _remove(host) {
		return $http.delete("/hosts/" + host.ip);
	};

	function _isOnline(host) {
		return $http.get("/ping/" + host.ip);
	};

}
