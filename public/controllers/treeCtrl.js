angular.module("pingTestApp")
	.controller('treeCtrl', treeCtrl);
	
function treeCtrl($scope, hostsAPI) {

	$scope.remove = remove
	$scope.toggle = toggle
	$scope.moveLastToTheBegginig = moveLastToTheBegginig
	$scope.newSubItem = newSubItem
	var getRootNodesScope = getRootNodesScope
	$scope.collapseAll = collapseAll
	$scope.expandAll = expandAll
	var carregarHosts = carregarHosts
	var checkHostsOnline = checkHostsOnline
	
	carregarHosts();
	
	
	function remove(scope) {
	  scope.remove();
	};
	
	function toggle(scope) {
	  scope.toggle();
	};

	function moveLastToTheBegginig() {
	  var a = $scope.data.pop();
	  $scope.data.splice(0,0, a);
	};
	
	function newSubItem(scope) {
	  var nodeData = scope.$modelValue;
	  nodeData.nodes.push({
		id: nodeData.id * 10 + nodeData.nodes.length,
		title: nodeData.title + '.' + (nodeData.nodes.length + 1),
		nodes: []
	  });
	};
	function getRootNodesScope() {
	  return angular.element(document.getElementById("tree-root")).scope();
	};

	function collapseAll() {
	  var scope = getRootNodesScope();
	  scope.collapseAll();
	};

	function expandAll() {
	  var scope = getRootNodesScope();
	  scope.expandAll();
	};
	
	function carregarHosts() {
		hostsAPI.getHosts().success(function(data) {
			$scope.data = data;
			checkHostsOnline();
		});
	};
	
	function checkHostsOnline() {
		$scope.data.forEach(function(host) {
			hostsAPI.isOnline(host).success(function(data) {
				host.online = data.success;
			});
		});
	};
	
}

