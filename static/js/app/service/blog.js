'use strict';
module.exports = ['myHttp',function(myHttp){	
	var blog = {};
	/*获取blog
	*return {Object}
	 */
	blog.getBlog = function(id){
		return myHttp.get('/site/get-blog',{params:{id:id}});
	};
	blog.getBlogList = function(){
		return myHttp.get('/site/get-blog-list');
	};
	return blog;
}];