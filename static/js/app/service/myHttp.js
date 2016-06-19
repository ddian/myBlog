'use strict';
module.exports = ['$http','$q','MyError',function($http,$q,MyError){
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
}];