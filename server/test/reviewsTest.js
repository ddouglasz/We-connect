// import chaiHttp from 'chai-http';
// import chai from 'chai';
// import app from '../../app';

// import { businessesDb } from '../seedData/business';
// import { reviewsDb } from '../seedData/review';
// import { usersDb } from '../seedData/user';


// const { expect, assert, should } = chai;
// let token;
// let businessId;
// let reviewId;
// should();

// chai.use(chaiHttp);


// describe('Review controller tests', () => {
//     before((done) => {
//       Review.sync({ force: true })
//         .then(() => done());
//     });

// describe('When user sends a POST request to /api/v1/businesses/:businessId/reviews', () => {
//     before((done) => {
//         chai.request(app)
//         .post('api/v1/auth/login')
//         .type('form')
//         .send({
//             email: usersDb[1].email,
//             password: usersDb[1].password
//         })
//         .end((err,res) => {
//             token = res.body.token;
//             done();
//         })
//     });

//     before((done) => {
//         chai.request(app)
//         .post('api/v1/auth/businesses')
//         .set('token', token)
//         .type('form')
//         .send(businessesDb[3].business)
//         .end((err,res) => {
//             businessId = res.body.business.id;
//             done();
//         });
//     });


