var mysql = require('mysql');

var con = mysql.createConnection({
  host: "b6zmmqzk2wyno33tcdm7-mysql.services.clever-cloud.com",
  user: "uuiknr0rseslmmck",
  password: "6UeQOCbbVSHgbeEZTGCr",
  database: "b6zmmqzk2wyno33tcdm7",
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT reviews.Message AS Review, users.Email AS User, therapists.Email AS Therapist FROM reviews JOIN users ON reviews.User = users.id JOIN therapists ON reviews.Therapist = therapists.id";
  //therapists.Email AS Therapist FROM reviews JOIN therapists ON reviews.Therapist = therapists.id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});