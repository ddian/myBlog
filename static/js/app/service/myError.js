'use strict';
/*MyError*/
module.exports = [function(){
	var MyError = function(message,code){
		this.message = message;
		this.code = code;
	};
	MyError.prototype = new Error();
	return MyError;
}];