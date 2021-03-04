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
        email: 'alexpascadi@ucla.edu', // unique identifier
        first_name: 'Alex',
        last_name: 'Pascadi',
        password: 'password',
    },
]
const therapists = [
    {
        id: 0,
        email: 'johnsmith@gmail.com', // unique identifier
        first_name: 'John',
        last_name: 'Smith',
        location: '520 Portola Plaza, Los Angeles, CA 90095, United States',
        specialities: 'Psychoanalysis',
        experience: 'Experience',
        board_certification: 'Certification',
        description: 'Description',
        photo: 'photo', // to do: insert .png here
    },
]
const reviews = [
    {
        id: 0,
        client_id: 'alexpascadi@ucla.edu',
        therapist_id: 'johnsmith@gmail.com',
        anonymous: false,
        date: '01/20/2021',
        rating: 3, // 1, 2, 3, 4 or 5
        comment: 'meh',
    }
]
const favorites = [
    {
        id: 0,
        client_id: 'alexpascadi@ucla.edu',
        therapist_id: 'johnsmith@gmail.com',
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
// - Retrieve all reviews written about a therapist
//   (sorted by date):
//      GET /reviews/therapist/<therapist id>
// - Retrieve the average rating of a therapist:
//      GET /average_rating/<therapist id>
// - Search for therapist by info, retrieve list of matches
//   (sorted by average ratings):
//      GET /therapists/<name>/<location>/<specialities>

//Alex
server.get('/therapists/:therapist_id', (req, res) => {
    const id = parseInt(req.params.therapist_id);
    var sql = "SELECT * FROM therapists WHERE id = ?";
    con.query(sql, [id], function (err, result) {
        if (err) throw err;
        res.send(result[0]); // Return unique result rather than a list
    });
});

//Alex
server.get('/clients/:client_id', (req, res) => {
    const id = parseInt(req.params.client_id);
    var sql = "SELECT * FROM clients WHERE id = ?";
    con.query(sql, [id], function (err, result) {
        if (err) throw err;
        res.send(result[0]); // Return unique result rather than a list
    });
});

//Laurence
server.get('/clients/email/:client_email', (req, res) => {
    const email = req.params.client_email;
    var sql = "SELECT * FROM clients WHERE Email = ?";
    con.query(sql, [email], function (err, result) {
        if (err) throw err;
        res.send(result[0]);
    });
});

//Laurence
server.get('/reviews/therapist/:therapist_id', (req, res) => {
    // Return a list of FULL reviews (about a therapist) rather than a list of IDs!
    // You should also sort them by their date somehow (talk to Zeid about date format in DB)
    const therapist_id = parseInt(req.params.therapist_id);
    revs = [];
    for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].therapist_id === therapist_id) {
            revs.push(reviews[i].id);
            found = true;
        }
    }
    res.send(revs);
});

// Optional: add an API to retrieve all reviews written by a given client

//Laurence
server.get('/average_rating/:therapist_id', (req, res) => {
    const therapist_id = parseInt(req.params.therapist_id);
    // Use the previous function and take an average over the reviews' ratings
    res.send('Computing the average rating...');
});

//Alex
server.get('/therapists/:name/:location/:specialities', (req, res) => {
    // Can do multiple DB searches in one call!
    // Sort the list by average ratings!
    res.send('Searching for matching therapists...');
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
    res.send({ success: true });
});

//Alex
server.post('/reviews', (req, res) => {
    // Also add a date upon creation!
    res.send({ success: true });
});

//Alex
server.post('/favorites', (req, res) => {
    res.send({ success: true });
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

    for (let i = 0; i < clients.length; i++) {
        if (clients[i].id === client_id) {
            clients.splice(i, 1);
            res.send({ success: true });
        }
    }
});

//Laurence
server.delete('/reviews/:review_id', (req, res) => {
    // Ask Zeid how review IDs actually work in the DB
    const review_id = parseInt(req.params.review_id);

    for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].id === review_id) {
            reviews.splice(i, 1);
            res.send({ success: true });
        }
    }
});

//Laurence
server.delete('/favorites/:favorite_id', (req, res) => {
    res.send('deleting from favorites...')
});

// Starting up the server:
server.listen(3000, () => {
    console.log('Server has started');
});

