/*阅读详情控制器*/
app.controller('readmoreCtrl',['$scope','blog','$stateParams',function($scope,blog,$stateParams){
	'use strict';
	$scope.id = $stateParams.id || '1';
	console.log($scope.id);
	$scope.readmore = function(id){
		blog.getBlog(id).then(function(data){
			$scope.blog={};
			console.log(data);
			$scope.blog.id = data.id;
			$scope.blog.title= data.title;
			$scope.blog.dateTime = data.dateTime;
			$scope.blog.author = data.author;
			$scope.blog.heading = data.heading;
			$scope.blog.subHeading = data.subHeading;
			$scope.blog.summary = data.summary;
			$scope.blog.content = data.content;
		});
	};	
}]);
