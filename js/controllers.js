var searchApp = angular.module('listApp', []);

searchApp.controller('SearchController', function SearchController($scope,$http) {
	$http.get('js/data.json').success(function(data){
		$scope.xmen = data;
	});
});