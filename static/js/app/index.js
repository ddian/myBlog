'use strict';
/*引入模块*/
var app = angular.module('myApp',['ui.router', 'lr.upload']);

/*设置路由*/
app.config([
	'$stateProvider',
	'$locationProvider',
	'$urlRouterProvider',
	function($stateProvider,$locationProvider,$urlRouterProvider){
		console.log('ready to config router',$stateProvider.state);
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/');
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
			url:'/index/readmore?id',
			templateUrl:'/views/index/readmore.html',
			controller:'readmoreCtrl'
		})
	}
]);

app.factory('MyError',require('./service/MyError'));
app.factory('MyHttp',require('./service/MyHttp'));
app.factory('blog',require('./service/blog'));


/*angular输出html代码*/
app.filter('to_trusted',['$sce',function($sce){
	return function(text){
		return $sce.trustAsHtml(text);
	};
}]);
