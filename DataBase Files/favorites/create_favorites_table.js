var mysql = require('mysql');

var con = mysql.createConnection({
  host: "b6zmmqzk2wyno33tcdm7-mysql.services.clever-cloud.com",
  user: "uuiknr0rseslmmck",
  password: "6UeQOCbbVSHgbeEZTGCr",
  database: "b6zmmqzk2wyno33tcdm7",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE favorites (id INT AUTO_INCREMENT PRIMARY KEY, Client INT, Therapist INT)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });