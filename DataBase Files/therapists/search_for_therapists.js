var mysql = require('mysql');

var con = mysql.createConnection({
  host: "b6zmmqzk2wyno33tcdm7-mysql.services.clever-cloud.com",
  user: "uuiknr0rseslmmck",
  password: "6UeQOCbbVSHgbeEZTGCr",
  database: "b6zmmqzk2wyno33tcdm7",
});

con.connect(function(err) {
  if (err) throw err;
  var email = 'brownjay@hotmail.com';
  var sql = "SELECT * FROM therapists WHERE first_name LIKE 'R%' OR email = ?";
  con.query(sql, [email], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});