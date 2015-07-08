angular.module("pingTestApp")
	.controller('treeCtrl', treeCtrl);
	
function treeCtrl($scope, hostsAPI) {

	$scope.remove = remove
	$scope.toggle = toggle
	$scope.moveLastToTheBegginig = moveLastToTheBegginig
	$scope.newSubItem = newSubItem
	$scope.collapseAll = collapseAll
	$scope.expandAll = expandAll

	carregarHosts();
	
	function remove(scope) {
		console.log('dsfadfd');
		console.log(scope);
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
			$scope.data.forEach(function(host) {
				checkHostOnline(host);
			});
		});
	};
	
	function checkHostOnline(host) {
		hostsAPI.isOnline(host).success(function(data) {
			host.online = data.success;
		});
		
		if (host.nodes) {
			host.nodes.forEach(function(host2) {
				checkHostOnline(host2);
			});
		};
	};
	
}

