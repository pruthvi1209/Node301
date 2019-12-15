const mongoose = require('mongoose');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
const Restaturants = require("../app/models/restaurant.model");

// let Restaurant = mongoose.model("Restaurants");

let app = require('../app');
chai.use(chaiHttp);

//Clearing DB before each test.......

// describe('Restaturant', () => {
//     beforeEach((done) => {
//         Restaurant.remove({}, (err) => {
//             done();
//         });
//     });
// });

describe('/GET /api/restaurant', () => {
    it('It should get all the Restaurants', (done) => {
        chai.request(app)
        .get('/api/restaurant')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(0);
        })
    });
})