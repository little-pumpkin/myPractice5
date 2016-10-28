angular.module('app', [])
	.controller('ctrl', function($scope) {

		$scope.todos = [{action: '练习js', complete: false},
										{action: '练习css', complete: true},
										{action: '练习html', complete: false}];

		$scope.btns = ['Table', 'List'];
		$scope.data = {};

		$scope.addNewTodo = function (newTodo) {
			$scope.todos.push({
				action: newTodo.action,
				complete: false
			});
		};

	});