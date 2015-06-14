(function() {
  'use strict';

  angular.module('pingTestApp', ['ui.tree'])
  .controller('treeCtrl', function($scope) {

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

//    $scope.data = [{
//          "title": "bytecom-mk-patricia-gomes",
//          "ip": "10.77.100.1",
//          "nodes": [
//            {
//              "title": "bytecom-patricia-gomes-rep1",
//              "ip": "10.77.100.101",
//              "nodes": []
//            },
//            {
//              "title": "bytecom-patricia-gomes-rep2",
//              "ip": "10.77.100.102",
//              "nodes": []
//            },
//            {
//              "title": "bytecom-patricia-gomes-rep3",
//              "ip": "10.77.100.103",
//              "nodes": []
//            },
//            {
//              "title": "bytecom-patricia-gomes-rep4",
//              "ip": "10.77.100.104",
//              "nodes": []
//            },
//            {
//              "title": "bytecom-patricia-gomes-omni",
//              "ip": "10.77.100.105",
//              "nodes": []
//            }
//          ]
//    }];

    $scope.data = [{
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

  });

})();