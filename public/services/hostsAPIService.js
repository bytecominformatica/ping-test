angular.module("pingTestApp")
	.factory("hostsAPI", hostAPI);

function hostAPI ($http) {
	var _getHosts = function () {
		return $http.get("/hosts");
	};
	
	var _isOnline = function (host) {
		return $http.get("/ping/" + host.ip);
	};
	
	return {
		getHosts: _getHosts,
		isOnline: _isOnline
	};
}
