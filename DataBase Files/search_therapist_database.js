var mysql = require('mysql');

var con = mysql.createConnection({
  host: "b6zmmqzk2wyno33tcdm7-mysql.services.clever-cloud.com",
  user: "uuiknr0rseslmmck",
  password: "6UeQOCbbVSHgbeEZTGCr",
  database: "b6zmmqzk2wyno33tcdm7",
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