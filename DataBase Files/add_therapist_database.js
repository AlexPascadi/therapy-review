var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO therapists (FirstName, LastName, Email, Password) VALUES ?";
  var values = [
    ['Rachel', 'Alvarez', 'rachelalvarez@gmail.com', 'sunset0'],
    ['Jay', 'Brown', 'brownjay@hotmail.com', 'snickers'],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});