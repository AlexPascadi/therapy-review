var mysql = require('mysql');

var con = mysql.createConnection({
  host: "b6zmmqzk2wyno33tcdm7-mysql.services.clever-cloud.com",
  user: "uuiknr0rseslmmck",
  password: "6UeQOCbbVSHgbeEZTGCr",
  database: "b6zmmqzk2wyno33tcdm7",
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT reviews.Message AS Review, clients.Email AS Client, therapists.Email AS Therapist FROM reviews JOIN clients ON reviews.Client = clients.id JOIN therapists ON reviews.Therapist = therapists.id";
  //therapists.Email AS Therapist FROM reviews JOIN therapists ON reviews.Therapist = therapists.id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});