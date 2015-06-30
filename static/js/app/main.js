'use strict';
/*引入模块*/
var app = angular.module('myApp',['ui.router', 'lr.upload']);

/*factory创建service*/
/*MyError*/
app.factory('MyError',function(){
	var MyError = function(message,code){
		this.message = message;
		this.code = code;
	};
	MyError.prototype = new Error();
	return MyError;
});
/*MyHttp*/
app.factory('myHttp',['$http','$q','MyError',function($http,$q,MyError){
	var myHttp = function(config){
		return $q(function(resolve,reject){
			$http(config).success(function(data){
				if(+data.code===0){
					resolve(data.data);
				}else{
					reject(new MyError(data.message,data.code));
				}
			}).error(function(data,status){
				reject(new MyError('http request error with status'+status.status));
			});
		});
	};
	var methodList = ['get','head','post','put','delete','jsonp','patch'];
	methodList.forEach(function(method){
		myHttp[method] = function(){
			var arg = arguments;
			return $q(function(resolve,reject){
				$http[method].apply($http,arg).success(function(data){
					if(+data.code===0){
						resolve(data.data);
					}else{
						reject(new MyError(data.message.data.code));					}
				}).error(function(data,status){
					console.log('myHttp error',reject);
					reject(new MyError('http request error width status'+status,status));
				});
			});
		};
	});
	return myHttp;
}]);
/*blog*/
app.factory('blog',['myHttp',function(myHttp){
	var blog = {};
	/*获取blog
	*return {Object}
	 */
	blog.getBlog = function(id){
		return myHttp.get('/site/get-blog',{params:{id:id}});
	};
	return blog;
}]);

/*首页controller */
app.controller('indexCtrl',['$scope','blog','MyError','myHttp',function($scope,blog,MyError,myHttp){
	console.log('index controller');
	$scope.message = '';
	/*回到顶部*/
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
	/*获取详情页数据*/
	$scope.changePages = function(id){
		// alert(id);
		blog.getBlog(id).then(function(data){
			console.log(data);
			alert(data);
		},function(err){
			console.log(err);
		});
	};
}]);

/*profile 控制器*/
app.controller('profileCtrl',function($scope){
	// $scope.message = 'this is profile';
});
/*Link控制器*/
app.controller('linkCtrl',function($scope){
	// $scope.message = '';
});
/*阅读详情控制器*/
app.controller('readmoreCtrl',['$scope','blog',function($scope,blog){
	// $scope.message = '';
	$scope.content={};
	$scope.readmore = function(id){
		blog.getBlog(id).then(function(data){
			console.log(data);
			$scope.content.title= data.title;
			$scope.content.month = data.month;
			$scope.content.day = data.day;
			$scope.content.year = data.year;
			$scope.content.author = data.author;
			$scope.content.firstParagraph = data.content[0].firstParagraph;
			$scope.content.secondParagraph = data.content[0].secondParagraph;
			$scope.content.introduction = data.content[0].introduction;
			$scope.content.heading = data.content[0].heading;
			$scope.content.headingContent = data.content[0].headingContent;
			$scope.content.subHeading = data.content[0].subHeading;
			$scope.content.subHeadingContent = data.content[0].subHeadingContent;
			$scope.content.summary= data.content[0].summary;
			$scope.content.quote = data.quote;
			$scope.content.strongWord = data.strongWord;
			$scope.content.code = data.content[0].code;
		});
	};
	
}]);

/*设置路由*/
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

/*app.factory('MyError',require('./service/MyError'));
app.factory('MyHttp',require('./service/MyHttp'));
app.factory('blog',require('./service/blog'));*/
