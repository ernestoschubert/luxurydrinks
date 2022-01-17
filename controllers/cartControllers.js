const Cart = require("../models/Cart");

const cartControllers = {
  addCart: async (req, res) => {
    const newCart = new Cart(req.body);
    try {
      savedCart = await newCart.save();
      res.json({ success: true, newCart });
    } catch (error) {
      res.json({ success: false, error: error });
    }
  },
  updateCart: async (req, res) => {
    try {
      const updateCart = await Cart.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.json({ success: true, updateCart });
    } catch (error) {
      res.json({ success: false, error: error });
    }
  },
  deleteCart: async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.json({ success: true, message: "Cart has been deleted." });
    } catch (error) {
      res.json({ success: false, error: error });
    }
  },
  getUserCart: async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.body.userId });
      res.json({ success: true, cart });
    } catch (error) {
      res.json({ success: false, error: error });
    }
  },
  getAllCarts: async (req, res) => {
    try {
      const carts = await Cart.find();
      res.json({ success: true, carts });
    } catch (error) {
      res.json({ success: false, error: error });
    }
  },
};

module.exports = cartControllers;
