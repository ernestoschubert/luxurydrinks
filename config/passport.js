const passport = require('passport');
const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/User')

const opts = {};
opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRETKEY;

module.exports = passport.use(
    new jwtStrategy(opts, (jwt_payload, done)=>{
    User.findOne({_id: jwt_payload._doc._id})
    .then(user => {
        if(user) {
            return done(null, user)
        } else {
            return done(null, false)
        }
    })
    .catch(err => done(err, false))
}))
