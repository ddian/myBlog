'use strict';
var app = angular.module('myApp',['ui.router', 'lr.upload']);

app.controller('indexCtrl',function($scope){
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

});
app.controller('profileCtrl',function($scope){
	$scope.message = 'this is profile';
});
app.controller('linkCtrl',function($scope){
	$scope.message = '';
});
app.controller('readmoreCtrl',function($scope){
	$scope.message = '';
});
app.config([
	'$stateProvider',
	'$locationProvider',
	'$urlRouterProvider',
	function($stateProvider,$locationProvider,$urlRouterProvider){
		console.log('ready to config router',$stateProvider.state);
		$locationProvider.html5Mode(true);
		// $urlRouterProvider.otherwise('/index');
		$stateProvider.state('index',{
			url:'/',
			templateUrl:'/views/index/index.html',
			controller:'indexCtrl'
		}).state('profile',{
			url:'/index/profile',
			templateUrl:'/views/index/profile.html',
			controller:'profileCtrl'
		}).state('link',{
			url:'/index/link',
			templateUrl:'/views/index/link.html',
			controller:'linkCtrl'
		}).state('readmore',{
			url:'/index/readmore',
			templateUrl:'/views/index/readmore.html',
			controller:'readmoreCtrl'
		})
	}
]);
