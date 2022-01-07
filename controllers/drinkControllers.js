const Drink = require('../models/Drink')

const drinkControllers = {
    addDrink: async(req, res) =>{
        const { 
            drinkName, 
            type, 
            drinkImg, 
            abv, 
            price, 
            stock, 
            description 
        } = req.body
        try {
            if(req.user.role === 'admin' || req.user.role === 'mod'){
                const drinkExists = await Drink.findOne({ drinkName })
                if (drinkExists) {
                    res.json({ success: false, error: "This drink is already in database", response: null })
                } else {
                    const newDrink = new Drink({
                        drinkName, 
                        type, 
                        drinkImg, 
                        abv, 
                        price, 
                        stock, 
                        description 
                    })
                    await newDrink.save()
                    res.json({ success: true, response: { newDrink }, error: null })
                }
            } else{
                res.json({ success: false, error: 'Unauthorized User, you must be an admin or mod' })
            }
        } catch(error){
            console.log(error)
            res.json({ success: false, response: null, error: error })
        }

    },
    getDrinks: async(req, res) => {
        try {
                if(req.user.role === 'admin' || req.user.role === 'mod') {
                    const drinks = await Drink.find()
                    res.json({ success: true, drinks })
                } else {
                    res.json({ success: false, response: null, error: 'Unauthorized User, you must be an admin or mod' })
                }
            } catch(error) {
                res.json({ success: false, response: null, error: error })
            }
    },
    getDrink: async(req, res) => {
        try {
                if(req.user.role === 'admin' || req.user.role === 'mod') {
                    const drink = await Drink.find({_id: req.params.id})
                    res.json({ success: true, drink })
                } else {
                    res.json({ success: false, response: null, error: 'Unauthorized User, you must be an admin or mod' })
                }
            } catch(error) {
                res.json({ success: false, response: null, error: error })
            }
    },
    updateDrink: async(req, res) => {
        try {
            if(req.user.role === 'admin' || req.user.role === 'mod') {
                const drink = await Drink.findOneAndUpdate({_id: req.params.id}, {...req.body})
                res.json({ success: true, drink, body: req.body })
            } else {
                res.json({ success: false, response: null, error: 'Unauthorized User, you must be an admin or mod' })
            }
        } catch(error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    deleteDrink: async (req, res) => {
        try {
            if (req.user.role === 'admin' || req.user.role === 'mod') {
                const id = req.params.id
                const deletedDrink = await Drink.findOneAndDelete({ _id: id })
                res.json({ success: true, msg: 'User was deleted successfully ', drinkId: deletedDrink._id })
            } else {
                res.json({ success: false, error: 'Unauthorized User' })
            }
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    }
}


module.exports = drinkControllers 