const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
server.use(cors()); 
server.use(bodyParser.json());

// Actual DB should contain clients, therapists, reviews
// Demo mini-database (hard-coded, for testing purposes):
const clients = [
    {
        id: 'AlexPascadi',  //username = unique identifier
        password: 'password',
        firstName: 'Alexandru',
        lastName: 'Pascadi',
        nickName: 'Alex',
        photo: 'photo',
        description: 'Hi, I\'m Alex.',
        favorites: ['JohnTherapist'],   //therapist identifiers
    },
]
const therapists = [
    {
        id: 'JohnTherapist',
        firstName: 'John',
        lastName: 'Therapist',
        photo: 'photo',
        description: 'This is John.',
        address: 'address',
        qualifications: 'PhD at Harvard, etc.',
        specializations: 'Psychoanalysis',
        experience: 'I\'ve been doing this for 10 years',
    },
]
const reviews = [
    {
        id: 0,
        rating: 5,    //1, 2, 3, 4 or 5
        timeSpent: '2 months',
        comment: 'John is wonderful',
        anonymous: true,
        clientId: 'AlexPascadi',
        therapistId: 'JohnTherapist',
        //Add a date upon creation? (Use it to sort reviews)
    }
]
let currentReviewId = 1;

// API calls
// (For now, the implementations assume the hard-coded
// Database above; will need changes after connecting
// to an actual DB)

server.get('/', (req, res) => {
    res.send('Hello, world!')
});

// GET requests:
// - Retrieve a therapist's info given ID:
//      GET /therapists/<therapist id>
// - Retrieve a client's info given ID:
//      GET /clients/<client id>
// - Retrieve a review's info given ID:
//      GET /reviews/<review id>
// - Retrieve all (IDs of) reviews written by a client 
//   (sorted by date?)
//      GET /reviews/client/<client id>
// - Retrieve all (IDs of) reviews written about a therapist 
//   (sorted by date?)
//      GET /reviews/therapist/<therapist id>
// - Search for therapist by name, retrieve ordered list
//   of first few best matches (each is a therapist id):
//      GET /therapists/<string to match> 
//      (to be done, need DB for this) 

server.get('/therapists/:therapistId', (req, res) => {
    const therapistId = req.params.therapistId;
    found = false;
    for (let i = 0; i < therapists.length; i++) {
        if (therapists[i].id === therapistId) {
            res.send(therapists[i]);
            found = true;
        }
    }
    if (!found) {
        res.send({ success: false });
    }
});

server.get('/clients/:clientId', (req, res) => {
    const clientId = req.params.clientId;
    found = false;
    for (let i = 0; i < clients.length; i++) {
        if (clients[i].id === clientId) {
            res.send(clients[i]);
            found = true;
        }
    }
    if (!found) {
        res.send({ success: false });
    }
});

server.get('/reviews/:reviewId', (req, res) => {
    const reviewId = parseInt(req.params.reviewId);
    found = false;
    for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].id === reviewId) {
            res.send(reviews[i]);
            found = true;
        }
    }
    if (!found) {
        res.send({ success: false });
    }
});

server.get('/reviews/client/:clientId', (req, res) => {
    const clientId = req.params.clientId;
    revs = [];
    for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].clientId === clientId) {
            revs.push(reviews[i].id);
            found = true;
        }
    }
    res.send(revs);
});

server.get('/reviews/therapist/:therapistId', (req, res) => {
    const therapistId = req.params.therapistId;
    revs = [];
    for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].therapistId === therapistId) {
            revs.push(reviews[i].id);
            found = true;
        }
    }
    res.send(revs);
});

server.get('/therapists/:name', (req, res) => {
    //To be done
    //If no matches, return empty list
    res.send('Searching for matching therapists...');
});

// POST requests:
// - create client (empty list of favorites!)
//     POST /clients
// - create review
//     POST /reviews

server.post('/clients', (req, res) => {
    const client = req.body;
    client.favorites = [];
    clients.push(client);
    res.send({ success: true });
});

server.post('/reviews', (req, res) => {
    const review = req.body;
    review.id = currentReviewId;
    currentReviewId++;
    reviews.push(review);
    res.send({ success: true });
});

// PATCH requests:
// - update a client's info (including favorites)
//     PATCH /clients/<client id> 
// (could use PUT as well, look into differences)

server.patch('/clients/:clientId', (req, res) => {
    const clientId = req.params.clientId;

    for (let i = 0; i < clients.length; i++) {
        if (clients[i].id === clientId) {
            Object.assign(clients[i], req.body);
            res.send({ success: true });
        }
    }
});

// DELETE requests:
// - delete a client's account (permanent)
//     DELETE /clients/<client id>
// - delete a review (permanent)
//     DELETE /reviews/<review id>

server.delete('/clients/:clientId', (req, res) => {
    const clientId = req.params.clientId;

    for (let i = 0; i < clients.length; i++) {
        if (clients[i].id === clientId) {
            clients.splice(i, 1);
            res.send({ success: true });
        }
    }
});

server.delete('/reviews/:reviewId', (req, res) => {
    const reviewId = parseInt(req.params.reviewId);

    for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].id === reviewId) {
            reviews.splice(i, 1);
            res.send({ success: true });
        }
    }
});

// Starting up the server:
server.listen(3000, () => {
    console.log('Server has started');
});

