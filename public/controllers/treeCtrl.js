var app = angular.module("pingTestApp");

app.controller('treeCtrl', function($scope, hostsAPI) {

	$scope.remove = function(scope) {
	  scope.remove();
	};

	$scope.toggle = function(scope) {
	  scope.toggle();
	};

	$scope.moveLastToTheBegginig = function () {
	  var a = $scope.data.pop();
	  $scope.data.splice(0,0, a);
	};

	$scope.newSubItem = function(scope) {
	  var nodeData = scope.$modelValue;
	  nodeData.nodes.push({
		id: nodeData.id * 10 + nodeData.nodes.length,
		title: nodeData.title + '.' + (nodeData.nodes.length + 1),
		nodes: []
	  });
	};

	var getRootNodesScope = function() {
	  return angular.element(document.getElementById("tree-root")).scope();
	};

	$scope.collapseAll = function() {
	  var scope = getRootNodesScope();
	  scope.collapseAll();
	};

	$scope.expandAll = function() {
	  var scope = getRootNodesScope();
	  scope.expandAll();
	};

	var carregarHosts = function() {
		hostsAPI.getHosts().success(function(data) {
			$scope.data = data;
			checkHostsOnline();
		});
	};
	
	var checkHostsOnline = function() {
		$scope.data.forEach(function(host) {
			hostsAPI.isOnline(host).success(function(data) {
				host.online = data.success;
			});
		});
	};
	
	carregarHosts();
	
});
