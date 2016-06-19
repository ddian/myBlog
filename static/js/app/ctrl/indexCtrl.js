'use strict';
var app = angular.module('myApp',['ui.router', 'lr.upload']);

app.controller('indexCtrl',['$scope','blog','MyError','MyHttp',function($scope,blog,MyError,MyHttp){
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
	/*$scope.changePages = function(id){
		// alert(id);
		blog.getBlog(id).then(function(data){
			console.log(data);
			alert(data);
		},function(err){
			console.log(err);
		});
	};*/
	$scope.renderList = function(){
		// alert(1);
		blog.getBlogList().then(function(data){

			$scope.blogList = data;
			console.log($scope.blogList);
			// $scope.pagination = data.pages;
			// console.log($scope.pagination);
			// $scope.pagination.isFirstPage = +$scope.pagination.page_number === 1;
			// $scope.pagination.isLastPage = +$scope.pagination.page_number === +$scope.pagination.page_count;
		},function(err){
			console.log(err);
		});
	};
	/*$scope.switchPage = function(page){
		console.log(page);
		if(page<1)page=1;
		if(page>$scope.pagination.page_count)page = $scope.pagination.page_count;
		
	};*/
}]);