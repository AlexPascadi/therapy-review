var mysql = require('mysql');

var con = mysql.createConnection({
  host: "b6zmmqzk2wyno33tcdm7-mysql.services.clever-cloud.com",
  user: "uuiknr0rseslmmck",
  password: "6UeQOCbbVSHgbeEZTGCr",
  database: "b6zmmqzk2wyno33tcdm7",
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM therapists ORDER BY first_name DESC", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});