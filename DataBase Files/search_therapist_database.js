var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var Email = 'brownjay@hotmail.com';
  var sql = "SELECT * FROM therapists WHERE FirstName LIKE 'R%' OR Email = ?";
  con.query(sql, [Email], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});