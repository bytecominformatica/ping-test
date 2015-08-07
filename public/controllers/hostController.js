angular.module("pingTestApp")
	.controller('hostController', hostController);
	
function hostController($scope, hostsAPI) {

	this.remove = remove
	this.toggle = toggle
	this.moveLastToTheBegginig = moveLastToTheBegginig
	this.newSubItem = newSubItem
	this.collapseAll = collapseAll
	this.expandAll = expandAll

	carregarHosts();
	
	function remove(scope, node) {
	    var x = hostsAPI.remove(node, function(data) {
	        if(data.result) {
		        scope.$parentNodesScope.removeNode(scope);
	        }
	    });
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
	  if(!nodeData.nodes) {
	    nodeData.nodes = []
	  }
	  console.log(nodeData.name)
	  nodeData.nodes.push({
		id: nodeData.id * 10 + nodeData.nodes.length,
		name: nodeData.name + '.' + (nodeData.nodes.length + 1),
		ip: nodeData.ip,
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

