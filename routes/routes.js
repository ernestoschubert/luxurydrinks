const Router = require('express').Router();
const userControllers = require('../controllers/userControllers')
const drinkControllers = require('../controllers/drinkControllers')
const cocktailControllers = require('../controllers/cocktailControllers');
const { addUser, getUsers, getUser, logIn, authUser, deleteUser, updateUser, addCart } = userControllers
const { addDrink, getDrinks, getDrink, updateDrink, deleteDrink, addUserFavorites } = drinkControllers
const { addCocktail, getCocktails, getCocktail, updateCocktail, deleteCocktail, getDrinkCocktail } = cocktailControllers
const passport = require('../config/passport');
const validator = require('../controllers/validator');


// USERS

Router.route('/user/signup')
.post(validator, addUser)
Router.route('/user/login')
    .post(logIn)

Router.route('/user/cart')
    .get(passport.authenticate('jwt', { session: false }), addCart)

Router.route('/user/auth')
    .get(passport.authenticate('jwt', { session: false }), authUser)

Router.route('/admin/users')
    .get(passport.authenticate('jwt', { session: false }), getUsers)

Router.route('/admin/user/:id')
    .get(passport.authenticate('jwt', { session: false }), getUser)
    .put(passport.authenticate('jwt', { session: false }), updateUser)
    .delete(passport.authenticate('jwt', { session: false }), deleteUser)

// DRINKS

Router.route('/drinks')
    .get(getDrinks)

Router.route('/admin/adddrink')
    .post(passport.authenticate('jwt', { session: false }), addDrink)

Router.route('/admin/drink/:id')
    .get(passport.authenticate('jwt', { session: false }), getDrink)
    .put(passport.authenticate('jwt', { session: false }), updateDrink)
    .delete(passport.authenticate('jwt', { session: false }), deleteDrink)
    
Router.route('/drinks/favorites/:id')
    .put(passport.authenticate('jwt', { session: false }), addUserFavorites)

// COCKTAILS

Router.route('/cocktails')
    .get(getCocktails)

Router.route('/admin/addcocktail')
    .post(passport.authenticate('jwt', { session: false }), addCocktail)

Router.route('/admin/cocktail/:id')
    .get(passport.authenticate('jwt', { session: false }), getCocktail)
    .put(passport.authenticate('jwt', { session: false }), updateCocktail)
    .delete(passport.authenticate('jwt', { session: false }), deleteCocktail)

Router.route('/drinkcocktails/:id')
    .get(getDrinkCocktail)


module.exports = Router;
