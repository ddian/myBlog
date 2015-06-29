'use strict';
var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

app.use(express.static(path.join(__dirname,'../static')));
/* 
static是充当中间件(Middleware)的角色.
Express框架是依赖Connect创建的，use方法是Connect提供的，用来注册一个中间件到Connect中间件队列。
中间件：类似于一个过滤器的东西，在客户端和应用程序之间的一个处理请求和响应的方法。
Connect：nodejs一个模块，可以创建中间件的一个框架，自身已经包装了Node的HTTP模块的Server以及Server的req和res的对象，功能就是处理请求，响应客户端或是让下一个中间件继续处理。
path.join连接文件路径 path.join('a','b','c')->a/b/c
*/

app.get('/site/get-blog',function(req,res){
	console.log(req,res);
	if(req.query.id===1){
		res.send({
			code:0,
			id:1,
			message:'jiekoudage'
		});
	}	
});

/*app.get('/',function(req,res){
	fs.readFile('../index.html','utf-8',function(err,data){
		if(err)throw err;
		console.log(data);
		res.setHeader('content-type','text/html;charset=utf-8');
		res.write(data);
		res.end();
	});	
});
app.get('/bootstrap/css/bootstrap.min.css',function(req,res){
	fs.readFile('../bootstrap/css/bootstrap.min.css','utf-8',function(err,data){
		if(err)throw err;
		console.log(data);
		res.setHeader('content-type','text/css;charset=utf-8');
		res.write(data);
		res.end();
	});
});
app.get('/css/index.css',function(req,res){
	fs.readFile('../css/index.css','utf-8',function(err,data){
		if(err)throw err;
		console.log(data);
		res.setHeader('content-type','text/css;charset=utf-8');
		res.write(data);
		res.end();
	});
});
app.get('/js/lib/angular.js',function(req,res){
	fs.readFile('../js/lib/angular.js','utf-8',function(err,data){
		if(err)throw err;
		console.log(data);
		res.setHeader('content-type','text/javascript;charset=utf-8');
		res.write(data);
		res.end();
	});
});
app.get('/js/lib/angular-ui-router.js',function(req,res){
	fs.readFile('../js/lib/angular-ui-router.js','utf-8',function(err,data){
		if(err)throw err;
		console.log(data);
		res.setHeader('content-type','text/javascript;charset=utf-8');
		res.write(data);
		res.end();
	});
});
app.get('/js/lib/angular-upload.min.js',function(req,res){
	fs.readFile('../js/lib/angular-upload.min.js','utf-8',function(err,data){
		if(err)throw err;
		console.log(data);
		res.setHeader('content-type','text/javascript;charset=utf-8');
		res.write(data);
		res.end();
	});
});
app.get('/js/app/main.js',function(req,res){
	fs.readFile('../js/app/main.js','utf-8',function(err,data){
		if(err)throw err;
		console.log(data);
		res.setHeader('content-type','text/javascript;charset=utf-8');
		res.write(data);
		res.end();
	});
});
app.get('/views/include/nav.html',function(req,res){
	fs.readFile('../views/include/nav.html','utf-8',function(err,data){
		if(err)throw err;
		console.log(data);
		res.setHeader('content-type','text/html;charset=utf-8');
		res.write(data);
		res.end();
	});
});
app.get('/views/include/bg.html',function(req,res){
	fs.readFile('../views/include/bg.html','utf-8',function(err,data){
		if(err)throw err;
		console.log(data);
		res.setHeader('content-type','text/html;charset=utf-8');
		res.write(data);
		res.end();
	});
});
app.get('/views/include/footer.html',function(req,res){
	fs.readFile('../views/include/footer.html','utf-8',function(err,data){
		if(err)throw err;
		console.log(data);
		res.setHeader('content-type','text/html;charset=utf-8');
		res.write(data);
		res.end();
	});
});
app.get('/views/index/index.html',function(req,res){
	fs.readFile('../views/index/index.html','utf-8',function(err,data){
		if(err)throw err;
		console.log(data);
		res.setHeader('content-type','text/html;charset=utf-8');
		res.write(data);
		res.end();
	});
});
app.get('/views/index/link.html',function(req,res){
	fs.readFile('../views/index/link.html','utf-8',function(err,data){
		if(err)throw err;
		console.log(data);
		res.setHeader('content-type','text/html;charset=utf-8');
		res.write(data);
		res.end();
	});
});
app.get('/views/index/profile.html',function(req,res){
	fs.readFile('../views/index/profile.html','utf-8',function(err,data){
		if(err)throw err;
		console.log(data);
		res.setHeader('content-type','text/html;charset=utf-8');
		res.write(data);
		res.end();
	});
});
app.get('/views/index/readMore.html',function(req,res){
	fs.readFile('../views/index/readMore.html','utf-8',function(err,data){
		if(err)throw err;
		console.log(data);
		res.setHeader('content-type','text/html;charset=utf-8');
		res.write(data);
		res.end();
	});
});
app.get('/img/me.jpg',function(req,res){
	fs.readFile('../img/me.jpg',function(err,data){
		if(err)throw err;
		console.log(data);
		res.setHeader('content-type','image/jpeg');
		res.write(data);
		res.end();
	});
});
app.get('/img/bg.jpg',function(req,res){
	fs.readFile('../img/bg.jpg',function(err,data){
		if(err)throw err;
		console.log(data);
		res.setHeader('content-type','image/jpeg');
		res.write(data);
		res.end();
	});
});*/
app.listen(9002,function(req,res){
	console.log('app is running at prt 9002');
});