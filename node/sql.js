/*var mysql = require('mysql');
// var app = express();



var db = mysql.createConnection({
	'host': 'localhost',
    'user': 'root',
    'password': 'admin',
    'database':'blog'
});
var res = db.query("select * from blogList");
console.log(res)
*/
'use strict';
var mysql = require('mysql');
var con = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'admin',
	database:'blog',
	port:9002
});
con.connect();
con.query('SELECT 1+1 As solution',function(err,rows,fields){
	if(err)throw err;
	console.log('the solution is:',row[0].solution);
});
con.end();