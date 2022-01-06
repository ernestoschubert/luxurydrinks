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
        } catch(error){
            console.log(error)
        }

    },
    getDrinks: async(req, res) => {
        try {
                const drinks = await Drink.find()
                res.json({ success: true, drinks })
            } catch(error) {
                res.json({ success: false, response: null, error: error })
            }
    }
}


module.exports = drinkControllers 