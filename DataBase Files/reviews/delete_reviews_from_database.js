var mysql = require('mysql');

var con = mysql.createConnection({
  host: "b6zmmqzk2wyno33tcdm7-mysql.services.clever-cloud.com",
  user: "uuiknr0rseslmmck",
  password: "6UeQOCbbVSHgbeEZTGCr",
  database: "b6zmmqzk2wyno33tcdm7",
});

con.connect(function(err) {
  if (err) throw err;
  var id = 5;
  var sql = "DELETE FROM reviews WHERE id = ?";
  con.query(sql, [id], function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});