const Router = require('express').Router();
const userControllers = require('../controllers/userControllers')
const drinkControllers = require('../controllers/drinkControllers')
const cocktailControllers = require('../controllers/cocktailControllers');
const { addUser, getUsers, getUser, logIn, authUser, deleteUser, updateUser } = userControllers
const { addDrink, getDrinks, getDrink, updateDrink, deleteDrink, getCocktailDrink } = drinkControllers
const { addCocktail, getCocktails, getCocktail, updateCocktail, deleteCocktail } = cocktailControllers
const passport = require('../config/passport');


// USERS

Router.route('/user/signup')
    .post(addUser)

Router.route('/user/login')
    .post(logIn)

Router.route('/user/auth')
    .get(passport.authenticate('jwt', { session: false }), authUser)

Router.route('/admin/users')
    .get(passport.authenticate('jwt', { session: false }), getUsers)

Router.route('/admin/user/:id')
    .get(passport.authenticate('jwt', { session: false }), getUser)
    .put(passport.authenticate('jwt', { session: false }), updateUser)
    .delete(passport.authenticate('jwt', { session: false }), deleteUser)

// DRINKS

Router.route('/admin/drinks')
    .get(passport.authenticate('jwt', { session: false }), getDrinks)

Router.route('/admin/adddrink')
    .post(passport.authenticate('jwt', { session: false }), addDrink)

Router.route('/admin/drink/:id')
    // .get(passport.authenticate('jwt', { session: false }), getDrink)
    .get(passport.authenticate('jwt', { session: false }), getCocktailDrink)
    .put(passport.authenticate('jwt', { session: false }), updateDrink)
    .delete(passport.authenticate('jwt', { session: false }), deleteDrink)

// COCKTAILS

Router.route('/admin/cocktails')
    .get(passport.authenticate('jwt', { session: false }), getCocktails)

Router.route('/admin/addcocktail')
    .post(passport.authenticate('jwt', { session: false }), addCocktail)

Router.route('/admin/cocktail/:id')
    .get(passport.authenticate('jwt', { session: false }), getCocktail)
    .put(passport.authenticate('jwt', { session: false }), updateCocktail)
    .delete(passport.authenticate('jwt', { session: false }), deleteCocktail)


module.exports = Router;
