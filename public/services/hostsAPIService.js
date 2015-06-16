angular.module("pingTestApp").factory("hostsAPI", function ($http) {
	var _getHosts = function () {
		return $http.get("http://localhost:3000/hosts");
	};
	
	return {
		getHosts: _getHosts
	};
});
