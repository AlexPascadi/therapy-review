var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM therapists ORDER BY FirstName DESC", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});