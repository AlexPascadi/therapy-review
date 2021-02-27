var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var Email = 'cookamy@outlook.com';
  var sql = "SELECT * FROM users WHERE FirstName LIKE 'Z%' OR Email = ?";
  con.query(sql, [Email], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});