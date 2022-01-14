const Router = require('express').Router();
const userControllers = require('../controllers/userControllers')
const drinkControllers = require('../controllers/drinkControllers')
const cocktailControllers = require('../controllers/cocktailControllers');
const cartControllers = require('../controllers/cartControllers')
const orderControllers = require('../controllers/orderControllers')
const { addUser, getUsers, getUser, logIn, authUser, deleteUser, updateUser } = userControllers
const { addDrink, getDrinks, getDrink, updateDrink, deleteDrink, addUserFavorites } = drinkControllers
const { addCocktail, getCocktails, getCocktail, updateCocktail, deleteCocktail, getDrinkCocktail } = cocktailControllers
const { addCart, updateCart, deleteCart, getUserCart, getAllCarts } = cartControllers
const { addOrder, updateOrder, deleteOrder, getUserOrder, getAllOrders, getMonthlyIncomeOrders } = orderControllers
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

Router.route('/drink/:id')
    .get(getDrink)

Router.route('/admin/adddrink')
    .post(passport.authenticate('jwt', { session: false }), addDrink)


Router.route('/admin/drink/:id')
    .put(passport.authenticate('jwt', { session: false }), updateDrink)
    .delete(passport.authenticate('jwt', { session: false }), deleteDrink)
    
Router.route('/drinks/favorites/:id')
    .put(passport.authenticate('jwt', { session: false }), addUserFavorites)

// COCKTAILS

Router.route('/cocktails')
    .get(getCocktails)

Router.route('/cocktails/:id')
    .get(getCocktail)

Router.route('/admin/addcocktail')
    .post(passport.authenticate('jwt', { session: false }), addCocktail)

Router.route('/admin/cocktail/:id')
    .put(passport.authenticate('jwt', { session: false }), updateCocktail)
    .delete(passport.authenticate('jwt', { session: false }), deleteCocktail)

Router.route('/drinkcocktails/:id')
    .get(getDrinkCocktail)

// CART

Router.route('/carts')
    .get(getAllCarts)

Router.route('/cart/:id')
    .get(passport.authenticate('jwt', { session: false }), getUserCart)

Router.route('/cart/addcart')
    .post(passport.authenticate('jwt', { session: false }), addCart)

Router.route('/cart/:id')
    .put(passport.authenticate('jwt', { session: false }), updateCart)
    .delete(passport.authenticate('jwt', { session: false }), deleteCart)

// ORDER 

Router.route('/admin/orders')
    .get(passport.authenticate('jwt', { session: false }), getAllOrders)

Router.route('/order/:id')
    .get(passport.authenticate('jwt', { session: false }), getUserOrder)

Router.route('/order/addcart')
    .post(passport.authenticate('jwt', { session: false }), addOrder)

Router.route('/admin/order/:id')
    .put(passport.authenticate('jwt', { session: false }), updateOrder)
    .delete(passport.authenticate('jwt', { session: false }), deleteOrder)
    
Router.route('/order/income')
    .get(passport.authenticate('jwt', { session: false }), getMonthlyIncomeOrders)


module.exports = Router;
