const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const server = express();
server.use(cors()); 
server.use(bodyParser.json());

// Connection to DataBase:
var con = mysql.createConnection({
    host: "b6zmmqzk2wyno33tcdm7-mysql.services.clever-cloud.com",
    user: "uuiknr0rseslmmck",
    password: "6UeQOCbbVSHgbeEZTGCr",
    database: "b6zmmqzk2wyno33tcdm7",
  });

con.connect(err => {
    if (err) throw err;
});

// Demo mini-database (hard-coded, for a model and testing purposes):
const clients = [
    {
        id: 0,
        first_name: 'Alex',
        last_name: 'Pascadi',
        email: 'alexpascadi@ucla.edu', 
        password: 'password',
    },
]
const therapists = [
    {
        id: 0,
        first_name: 'John',
        last_name: 'Smith',
        email: 'johnsmith@gmail.com',
        address: '520 Portola Plaza, Los Angeles, CA 90095, United States',
        specialities: 'Psychoanalysis',
        experience: 'Experience',
        board_certification: 'Certification',
        description: 'Description',
        image_location: 'photo',
    },
]
const reviews = [
    {
        id: 0,
        client: 0, // id of client
        therapist: 0, // id of therapist
        anonymous: false,
        date_posted: '01/20/2021',
        comment: 'meh',
        rating: 3, // 1, 2, 3, 4 or 5
    }
]
const favorites = [
    {
        id: 0,
        client: 'alexpascadi@ucla.edu',
        therapist: 'johnsmith@gmail.com',
    }
]

// API calls
server.get('/', (req, res) => {
    res.send('Hello, world!')
});

// GET requests:
// - Retrieve a therapist's info given id:
//      GET /therapists/<therapist id>
// - Retrieve a client's info given id:
//      GET /clients/<client id>
// - Retrieve a client's info given email:
//      GET /clients/email/<client email>
// - Retrieve all the favorites of a client (list of therapists!)
//      GET /favorites/client/<client id>
// - Retrieve all reviews written about a therapist
//   (sorted by date):
//      GET /reviews/therapist/<therapist id>
// - Retrieve the average rating of a therapist:
//      GET /average_rating/therapist/<therapist id>
// - Search for therapist by info, retrieve list of matches
//   (sorted by average ratings):
//      GET /therapists/<names>/<address>/<specialities>

//Alex
server.get('/therapists/:therapist_id', (req, res) => {
    const id = parseInt(req.params.therapist_id);
    var sql = "SELECT * FROM therapists WHERE id = ?";
    con.query(sql, [id], function (err, result) {
        if (err) throw err;
        if (result.length != 1)
            res.send(null);
        else
            res.send(result[0]); // Return unique result rather than a list
    });
});

//Alex
server.get('/clients/:client_id', (req, res) => {
    const id = parseInt(req.params.client_id);
    var sql = "SELECT * FROM clients WHERE id = ?";
    con.query(sql, [id], function (err, result) {
        if (err) throw err;
        if (result.length != 1)
            res.send(null);
        else
            res.send(result[0]); // Return unique result rather than a list
    });
});

//Laurence
server.get('/clients/email/:client_email', (req, res) => {
    const email = req.params.client_email;
    var sql = "SELECT * FROM clients WHERE email = ?";
    con.query(sql, [email], function (err, result) {
        if (err) throw err;
        if (result.length != 1)
            res.send(null);
        else
            res.send(result[0]);
    });
});

//Alex
server.get('/favorites/client/:client_id', (req, res) => {
    const client_id = parseInt(req.params.client_id);
    // Return the list of therapists directly, rather than the list of favorites:
    var sql = "SELECT * FROM therapists WHERE id IN (SELECT therapist FROM favorites where client = ?)";
    con.query(sql, [client_id], function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

//Laurence
server.get('/reviews/therapist/:therapist_id', (req, res) => {
    // Return a list of FULL reviews (about a therapist) rather than a list of IDs!
    // You should also sort them by their date somehow (talk to Zeid about date format in DB)
    const therapist_id = parseInt(req.params.therapist_id);
    var sql = "SELECT * FROM reviews WHERE therapist = ? ORDER BY date_posted";
    con.query(sql, [therapist_id], function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

//Laurence (to do)
server.get('/average_rating/therapist/:therapist_id', (req, res) => {
    const therapist_id = parseInt(req.params.therapist_id);
    // Use the previous function and take an average over the reviews' ratings
    res.send('Computing the average rating...');
});

//Alex
server.get('/therapists/:names/:address/:specialities', (req, res) => {
    // Build name condition:
    var name_cond = "";
    if (req.params.names == "_")
        name_cond = "TRUE";
    else {
        var names = req.params.names.split("_");
        for (var i = 0; i < names.length; i++) {
            if (i > 0)
                name_cond += " AND ";
            name_cond += "(first_name LIKE '%" + names[i] + "%'";
            name_cond += " OR last_name LIKE '%" + names[i] + "%')";
        }
    }
    // Build address condition:
    var address_cond = "";
    if (req.params.address == "_")
        address_cond = "TRUE";
    else {
        var address = req.params.address.split("_");
        for (var i = 0; i < address.length; i++) {
            if (i > 0)
                address_cond += " AND ";
            address_cond += "address LIKE '%" + address[i] + "%'";
        }
    }
    // Build specialities condition:
    var specialities_cond = "";
    if (req.params.specialities == "_")
        specialities_cond = "TRUE";
    else {
        var spec = req.params.specialities.split("_");
        for (var i = 0; i < spec.length; i++) {
            if (i > 0)
                specialities_cond += " AND ";
            specialities_cond += "specialities LIKE '%" + spec[i] + "%'";
        }
    }
    // Query the DataBase:
    var sql = "SELECT * FROM therapists WHERE (" + name_cond + ")"
            + " AND (" + address_cond + ") AND (" + specialities_cond + ")";
    con.query(sql, [], function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

// POST requests:
// - create client (empty list of favorites!)
//     POST /clients
// - create review
//     POST /reviews
// - add to favorites
//     POST /favorites

//Alex
server.post('/clients', (req, res) => {
    var values = [[req.body.first_name, req.body.last_name, req.body.email, req.body.password]];
    var sql = "INSERT INTO clients (first_name, last_name, email, password) VALUES ?"
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of clients inserted: " + result.affectedRows);
        res.send({ success: true });
    });
});

server.post('/therapists', (req, res) => {
    var values = [[req.body.first_name, req.body.last_name, req.body.email, req.body.password, req.body.address, req.body.specialities, req.body.experience, req.body.board_certification, req.body.description]];
    var sql = "INSERT INTO therapists (first_name, last_name, email, password, address, specialities, experience, board_certification, description) VALUES ?"
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of therapists inserted: " + result.affectedRows);
        res.send({ success: true });
    });
});

//Alex
server.post('/reviews', (req, res) => {
    let date = new Date();  // Add a date upon creation too
    console.log(date);
    var values = [[req.body.client, req.body.therapist, req.body.anonymous,
                   date, req.body.comment, req.body.rating]];
    var sql = "INSERT INTO reviews (client, therapist, anonymous, date_posted, comment, rating) VALUES ?"
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of reviews inserted: " + result.affectedRows);
        res.send({ success: true });
    });
});

//Alex
server.post('/favorites', (req, res) => {
    var values = [[req.body.client, req.body.therapist]];
    var sql = "INSERT INTO favorites (client, therapist) VALUES ?"
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of favorites inserted: " + result.affectedRows);
        res.send({ success: true });
    });
});

// PATCH requests:
// - update a client's info (NOT including favorites)
//     PATCH /clients/<client id> 
// (could use PUT as well, look into differences)

/* server.patch('/clients/:client_id', (req, res) => {
    const client_id = parseInt(req.params.client_id);

    for (let i = 0; i < clients.length; i++) {
        if (clients[i].id === client_id) {
            Object.assign(clients[i], req.body);
            res.send({ success: true });
        }
    }
}); */

// DELETE requests:
// - delete a client's account (permanent)
//     DELETE /clients/<client id>
// - delete a review (permanent; only the client who wrote it can do it)
//     DELETE /reviews/<review id>
// - remove from favorites
//     DELETE /favorites/<favorite id>

//Laurence
server.delete('/clients/:client_id', (req, res) => {
    const client_id = parseInt(req.params.client_id);
    var sql = "DELETE FROM clients WHERE clients.id = ?";
    con.query(sql, [client_id], function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted from clients: " + result.affectedRows);
    });
});

//Laurence
server.delete('/reviews/:review_id', (req, res) => {
    // Ask Zeid how review IDs actually work in the DB
    const review_id = parseInt(req.params.review_id);
    var sql = "DELETE FROM reviews WHERE reviews.id = ?";
    con.query(sql, [review_id], function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted from reviews: " + result.affectedRows);
    });
});

//Laurence
server.delete('/favorites/:favorite_id', (req, res) => {
    const favorite_id = parseInt(req.params.favorite_id);
    var sql = "DELETE FROM favorites WHERE favorites.id = ?";
    con.query(sql, [favorite_id], function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted from reviews: " + result.affectedRows);
    });
});

// Starting up the server:
server.listen(3000, () => {
    console.log('Server has started');
});