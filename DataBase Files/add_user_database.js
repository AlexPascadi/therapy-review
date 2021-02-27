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
  var sql = "INSERT INTO users (FirstName, LastName, Email, Password) VALUES ?";
  var values = [
    ['Zeid', 'Solh', 'zeidsolh1@gmail.com', 'dinosaur'],
    ['Max', 'Lisbon', 'maxlisbon@hotmail.com', 'butterfly'],
    ['Amy', 'Cook', 'cookamy@outlook.com', 'fireballs'],
    ['Hannah', 'Beckham', 'hannahbecky@gmail.com', 'princess123'],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});