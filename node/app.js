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
/*连接数据库*/
var mysql = require('mysql');
var conn = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'admin',
	database:'blog',
	port:3306
});
conn.connect();

var insertSql = 'insert into blogList (id,title,dateTime,author,heading,subHeading,content,summary) values (2,"title02","2014-07-25 10:09:12","author02","heading02","subHeading02","content02","summary02")';
var selectSql = 'select * from blogList where id = 2';
var deleteSql = 'delete from blogList where id=2';
var updateSql = 'update `blogList` set summary = "summary new" where id = 2';

// delete
conn.query(deleteSql,function(err0,res0){
	if(err0)console.log(err0);
	// console.log('delete return ==>');
	// console.log(res0);
});
// insert
conn.query(insertSql,function(err1,res1){
	if(err1)console.log(err1);
	// console.log('INSERT Return ==> ');
 //    console.log(res1);
});
//update
conn.query(updateSql, function (err3, res3) {
    if (err3) console.log(err3);
    // console.log("UPDATE Return ==> ");
    // console.log(res3);
});



/*
获取某一篇博客
 */
app.get('/site/get-blog',function(req,res){
	conn.query('select * from blogList', function(err, results) {
		var resultData={};
    	if (err){
    		resultData.code=-1;
    		resultData.message='获取当前博客数据失败';
    	}else{
    		resultData.code=0;
    		resultData.message='';
    		resultData.data=results;    		
    	}
    	queryOneBlog(resultData);
    	// console.log(resultData);
    	
	});
	conn.end();
	var selectedID = 1;
	function queryOneBlog(obj){
		var arr = obj.data;
		arr.forEach(function(value,key){
			console.log(value);
			if(value.id===selectedID){
				obj.data=value;
				console.log(obj);
				res.send(obj);
				res.end();
			}
		});
	}
	
});
/*获取所有博客列表*/
app.get('/site/get-blog-list',function(req,res){
	conn.query('select * from blogList', function(err, results) {
		// console.log(results);
		var resultData={};
    	if (err){
    		resultData.code=-1;
    		resultData.message='获取博客数据失败';
    	}else{
    		resultData.code=0;
    		resultData.message='';
    		resultData.data=results;
    	}
    	console.log(resultData);
    	queryAllBlog(resultData);
    	
    	
	});
	conn.end();
	function queryAllBlog(obj){
		res.send(obj);
		res.end();
	}
});
/**/
app.listen(9002,function(req,res){
	console.log('app is running at prt 9002');
});

