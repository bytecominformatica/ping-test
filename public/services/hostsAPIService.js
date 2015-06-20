angular.module("pingTestApp").factory("hostsAPI", function ($http) {
	var _getHosts = function () {
		return $http.get("/hosts");
	};
	
	return {
		getHosts: _getHosts
	};
});
