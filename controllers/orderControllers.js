const Order = require("../models/Order");

const orderControllers = {
  addOrder: async (req, res) => {
    const newOrder = new Order(req.body);
    try {
      savedOrder = await newOrder.save();
      res.json({ success: true, newOrder });
    } catch (error) {
      res.json({ success: false, error: error });
    }
  },
  updateOrder: async (req, res) => {
    try {
      if (req.user.role === "admin") {
        const updateOrder = await Order.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.json({ success: true, updateOrder });
      } else {
        res.json({
          success: false,
          message: "Usuario no autorizado, debe ser administrador",
        });
      }
    } catch (error) {
      res.json({ success: false, error: error });
    }
  },
  deleteOrder: async (req, res) => {
    try {
      if (req.user.role === "admin") {
        await Order.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Order has been deleted." });
      } else {
        res.json({
          success: false,
          message: "Usuario no autorizado, debe ser administrador",
        });
      }
    } catch (error) {
      res.json({ success: false, error: error });
    }
  },
  getUserOrder: async (req, res) => {
    try {
      const order = await Order.findOne({ userId: req.body.userId });
      res.json({ success: true, order });
    } catch (error) {
      res.json({ success: false, error: error });
    }
  },
  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.find();
      res.json({ success: true, orders });
    } catch (error) {
      res.json({ success: false, error: error });
    }
  },
  getMonthlyIncomeOrders: async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(
      new Date().setMonth(lastMonth.getMonth() - 1)
    );
    try {
      if (req.user.role === "admin") {
        const income = await Order.aggregate([
          { $match: { createdAt: { $gte: previousMonth } } },
          {
            $project: {
              month: { $month: "$createdAt" },
              sales: "$amount",
            },
          },
          {
            $group: {
              _id: "$month",
              total: { $sum: "$sales" },
            },
          },
        ]);
        res.json({ success: true, income });
      }
    } catch (error) {
      res.json({ success: false, error: error });
    }
  },
};

module.exports = orderControllers;
