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
  var sql = "INSERT INTO reviews (Message, User, Therapist) VALUES ?";
  var values = [
    ['Amazing Therapist!', 1, 2],
    ['One word: Fantastic!', 3, 1],
    ['Very Bad!', 2, 1],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});