'use strict';
/*var app = angular.module('myApp',['ui.router', 'lr.upload']);

app.controller('indexCtrl',['$scope','blog','MyError','MyHttp',function($scope,blog,MyError,MyHttp){
	console.log('index controller');
	$scope.message = '';
	$scope.toTop = function(){
		
		$scope.scrollUpTimer = null;
		clearInterval($scope.scrollUpTimer);
		$scope.scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
		$scope.scrollUpTimer = setInterval(function(){
			$scope.curScrollTop = document.body.scrollTop||document.documentElement.scrollTop;
			
			if($scope.curScrollTop <= 0){
				clearInterval($scope.scrollUpTimer);
			}
			$scope.speed = Math.ceil($scope.curScrollTop/2);
			document.body.scrollTop = document.documentElement.scrollTop = $scope.curScrollTop - $scope.speed;
		},30);
	};
	$scope.changePages = function(){
		blog.getBlog().then(function(data){
			console.log(data);
		})
	}

}]);*/