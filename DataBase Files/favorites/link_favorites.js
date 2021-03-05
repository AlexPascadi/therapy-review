var mysql = require('mysql');

var con = mysql.createConnection({
  host: "b6zmmqzk2wyno33tcdm7-mysql.services.clever-cloud.com",
  user: "uuiknr0rseslmmck",
  password: "6UeQOCbbVSHgbeEZTGCr",
  database: "b6zmmqzk2wyno33tcdm7",
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT clients.email AS client, therapists.email AS therapist FROM favorites JOIN clients ON favorites.client = clients.id JOIN therapists ON favorites.therapist = therapists.id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});