const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Drink = require("../models/Drink");

const userControllers = {
  addUser: async (req, res) => {
    let {
      firstName,
      lastName,
      email,
      age,
      password,
      userImg,
      role,
      favorite,
      buyed,
      google,
    } = req.body;
    try {
      const userExists = await User.findOne({ email });
      if (userExists) {
        res.json({
          success: false,
          error: "Este mail ya esta en uso",
          response: null,
        });
      } else {
        const hashPass = bcryptjs.hashSync(password, 10);
        const newUser = new User({
          firstName,
          lastName,
          age,
          email,
          password: hashPass,
          role,
          favorite,
          buyed,
          userImg,
          google,
        });
        await newUser.save();
        const token = jwt.sign({ ...newUser }, process.env.SECRETKEY);
        res.json({ success: true, response: { newUser, token }, error: null });
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false, response: null, error: error });
    }
  },
  logIn: async (req, res) => {
    const { email, password, google } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) throw new Error("Mail o contraseña incorrectas!");
      if (user.googleAccount && !google) throw new Error("Mail invalido");
      const isPassword = bcryptjs.compareSync(password, user.password);
      if (!isPassword) throw new Error("Mail o contraseña incorrectas!");
      const token = jwt.sign({ ...user }, process.env.SECRETKEY, {
        expiresIn: "3d",
      });
      res.json({
        success: true,
        response: {
          role: user.role,
          firstName: user.firstName,
          img: user.userImg,
          lastName: user.lastName,
          _id: user._id,
          token,
        },
      });
    } catch (error) {
      res.json({ success: false, response: error.message });
    }
  },
  authUser: (req, res) => {
    try {
      res.json({ success: true, response: req.user, error: null });
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
  getUsers: async (req, res) => {
    try {
      if (req.user.role === "admin" || req.user.role === "mod") {
        const users = await User.find();
        res.json({ success: true, users });
      } else {
        res.json({
          success: false,
          error: "Usuario no autorizado, debe ser administrador",
        });
      }
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
  getUser: async (req, res) => {
    try {
      if (req.user.role === "admin" || req.user.role === "mod") {
        const user = await User.find({ _id: req.params.id });
        res.json({ success: true, user });
      } else {
        res.json({
          success: false,
          error: "Unauthorized User, you must be an admin or mod",
        });
      }
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
  updateUser: async (req, res) => {
    try {
      
        const userUpdated = await User.findOneAndUpdate(
          { _id: req.params.id },
          { ...req.body.newInfo }
        );
        res.json({ success: true, userUpdated, body: req.body.newInfo });
      }
    catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
  deleteUser: async (req, res) => {
    try {
      if (req.user.role === "admin") {
        const id = req.params.id;
        const userFinded = await User.findOne({ _id: id });
        if (userFinded.role !== "admin") {
          const deletedUser = await User.findOneAndDelete({ _id: id });
          res.json({
            success: true,
            msg: "User was deleted successfully ",
            deletedId: deletedUser._id,
          });
        } else {
          res.json({ success: false });
        }
      } else {
        res.json({ success: false, error: "Unauthorized User" });
      }
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
};

module.exports = userControllers;
