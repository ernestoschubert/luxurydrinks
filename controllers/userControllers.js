const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Drink = require('../models/Drink')

const userControllers = {
    addUser: async (req, res) => {
        let { firstName, lastName, email, age, password,  userImg, role, favorite, buyed,  google } = req.body
        try {
            const userExists = await User.findOne({ email })
            if (userExists) {
                res.json({ success: false, error: "Email already in use", response: null })
            } else {
                const hashPass = bcryptjs.hashSync(password, 10)
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
                    google
                })
                await newUser.save()
                const token = jwt.sign({ ...newUser }, process.env.SECRETKEY)
                res.json({ success: true, response: { newUser, token }, error: null })
            }
        } catch (error) {
            console.log(error)
            res.json({ success: false, response: null, error: error })
        }
    },
    logIn: async (req, res) => {
        const { email, password, google } = req.body
        try {
            const user = await User.findOne({ email })
            if (!user) throw new Error("Email or password incorrect");
            if (user.googleAccount && !google) throw new Error("Invalid email");
            const isPassword = bcryptjs.compareSync(password, user.password);
            if (!isPassword) throw new Error("Email or password incorrect");
            const token = jwt.sign({ ...user }, process.env.SECRETKEY)
            res.json({ success: true, response: { 
                role: user.role, 
                firstName: user.firstName, 
                img: user.userImg, 
                lastName: user.lastName, 
                _id: user._id, 
                token 
            }})
        } catch (error) {
            res.json({ success: false, response: error.message })
        }
    },
    authUser: (req, res) => {
        try {
            res.json({ success: true, response: req.user, error: null })
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    getUsers: async (req, res) => {
        try {
            if (req.user.role === 'admin' || req.user.role === 'mod') {
                const users = await User.find()
                res.json({ success: true, users })
            } else {
                res.json({ success: false, error: 'Unauthorized User, you must be an admin or mod' })
            }
        } catch(error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    getUser: async (req, res) => {
        try {
            if (req.user.role === 'admin' || req.user.role === 'mod') {
                const user = await User.find({ _id: req.params.id })
                res.json({ success: true, user })
            } else {
                res.json({ success: false, error: 'Unauthorized User, you must be an admin or mod' })
            }
        } catch(error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    updateUser: async (req, res) => {
        try {
            if (req.user.role === 'admin') {
                const userUpdated = await User.findOneAndUpdate({_id: req.params.id}, {...req.body})
                res.json({ success: true, userUpdated, body: req.body })
            } else {
                res.json({ success: false, error: 'Unauthorized User, you must be an admin' })
            }
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    deleteUser: async (req, res) => {
        try {
            if (req.user.role === 'admin') {
                const id = req.params.id
                const userFinded = await User.findOne({ _id: id })
                if (userFinded.role !== 'admin') {
                    const deletedUser = await User.findOneAndDelete({ _id: id })
                    res.json({ success: true, msg: 'User was deleted successfully ', deletedId: deletedUser._id })
                } else {
                    res.json({ success: false })
                }
            } else {
                res.json({ success: false, error: 'Unauthorized User' })
            }
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    addCart: async (req, res) =>{
        try {
            const user = await User.findById(req.user.id)
            if(!user) return res.json({msg: "User does not exist."})

            await User.findOneAndUpdate({_id: req.user.id}, {
                cart: req.body.cart
            })

            return res.json({msg: "Added to cart"})
        } catch (err) {
            return res.json({msg: err.message})
        }
    }
}

module.exports = userControllers
