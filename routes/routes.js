const Router = require('express').Router();
const userControllers = require('../controllers/userControllers')
const { addUser, getUsers, logIn, authUser, deleteUser, updateUser } = userControllers
const passport = require('../config/passport');
const validator = require('../controllers/validator');


// USERS

Router.route('/user/signup')
.post(validator, addUser)
Router.route('/user/login')
.post(logIn)
Router.route('/user/auth')
.get(passport.authenticate('jwt', { session: false }), authUser)

Router.route('/admin/users')
    .get(passport.authenticate('jwt', { session: false }), getUsers)
Router.route('/admin/user/:id')
    .put(passport.authenticate('jwt', { session: false }), updateUser)
    .delete(passport.authenticate('jwt', { session: false }), deleteUser)

// DRINKS



module.exports = Router;
