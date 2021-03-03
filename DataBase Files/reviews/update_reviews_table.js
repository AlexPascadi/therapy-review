var mysql = require('mysql');

var con = mysql.createConnection({
  host: "b6zmmqzk2wyno33tcdm7-mysql.services.clever-cloud.com",
  user: "uuiknr0rseslmmck",
  password: "6UeQOCbbVSHgbeEZTGCr",
  database: "b6zmmqzk2wyno33tcdm7",
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "ALTER TABLE reviews RENAME COLUMN User to Client";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});