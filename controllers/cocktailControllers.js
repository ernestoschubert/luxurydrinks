const Cocktail = require("../models/Cocktail");
const Drink = require("../models/Drink");

const cocktailControllers = {
  addCocktail: async (req, res) => {
    const { cocktailName } = req.body;
    try {
      if (req.user.role === "admin" || req.user.role === "mod") {
        const cocktailExists = await Cocktail.findOne({ cocktailName });
        if (cocktailExists) {
          res.json({
            success: false,
            error: "This cocktail is already in database",
            response: null,
          });
        } else {
          const newCocktail = new Cocktail(req.body);
          await newCocktail.save();
          res.json({ success: true, response: { newCocktail }, error: null });
        }
      } else {
        res.json({
          success: false,
          error: "Unauthorized User, you must be an admin or mod",
        });
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false, response: null, error: error });
    }
  },
  getCocktails: async (req, res) => {
    try {
      const cocktails = await Cocktail.find();
      res.json({ success: true, cocktails });
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
  getCocktail: async (req, res) => {
    try {
      const cocktail = await Cocktail.find({ drinkId: req.params.id }).populate(
        "drinkId"
      );
      res.json({ success: true, respuesta: cocktail });
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
  updateCocktail: async (req, res) => {
    try {
      if (req.user.role === "admin" || req.user.role === "mod") {
        const cocktail = await Cocktail.findOneAndUpdate(
          { _id: req.params.id },
          { ...req.body }
        );
        res.json({ success: true, cocktail, body: req.body });
      } else {
        res.json({
          success: false,
          response: null,
          error: "Unauthorized User, you must be an admin or mod",
        });
      }
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
  deleteCocktail: async (req, res) => {
    try {
      if (req.user.role === "admin" || req.user.role === "mod") {
        const id = req.params.id;
        const deletedCocktail = await Cocktail.findOneAndDelete({ _id: id });
        res.json({
          success: true,
          msg: "Cocktail was deleted successfully ",
          cocktailId: deletedCocktail._id,
        });
      } else {
        res.json({ success: false, error: "Unauthorized User" });
      }
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
  getDrinkCocktail: async (req, res) => {
    try {
      const drinkCocktails = await Cocktail.find({
        drinkId: req.params.id,
      }).populate("drinkId");
      res.json({ success: true, response: drinkCocktails });
    } catch (error) {
      console.log(error);
      res.json({ success: false, response: null, error: error });
    }
  },
};

module.exports = cocktailControllers;
