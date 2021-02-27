var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT reviews.Message AS Review, users.Email AS User FROM reviews JOIN users ON reviews.User = users.id, FROM reviews JOIN therapists ON reviews.Therapist = therapists.id";
  //therapists.Email AS Therapist FROM reviews JOIN therapists ON reviews.Therapist = therapists.id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});