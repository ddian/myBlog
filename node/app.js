'use strict';
var express = require('express');
// var path = require('path');
var fs = require('fs');

var app = express();

// app.use(express.static(path.join(__dirname,'bootstrap')));

app.get('/',function(req,res){
	fs.readFile('../index.html','utf-8',function(err,data){
		if(err)throw err;
		console.log(data);
		res.setHeader('content-type','text/html;charset=utf-8');
		res.write(data);
		res.render();
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
});
app.listen(9001,function(req,res){
	console.log('app is running at prt 9001');
});