const Router = require('express').Router();
const userControllers = require('../controllers/userControllers')
const { addUser, getUsers, logIn, authUser, deleteUser, updateUser } = userControllers
const passport = require('../config/passport');


Router.route('/user/signup')
    .post(addUser)

module.exports = Router;

