const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userControllers = {
    addUser: async (req, res) => {
        console.log(req.body)
        let { firstName, lastName, email, age, password,  userImg, role,  google } = req.body
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
                    userImg,
                    google
                })
                await newUser.save()
                const token = jwt.sign({ ...newUser }, process.env.SECRETKEY)
                const { _id } = newUser
                res.json({ success: true, response: { firstName, lastName, userImg, token, _id, role }, error: null })
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
                role: user.role, token, 
                firstName: user.firstName, 
                img: user.userImg, 
                lastName: user.lastName, 
                _id: user._id 
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
                res.json({ success: false, error: 'Unauthorized User, you must be an admin' })
            }
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    updateUser: async (req, res) => {
        const userBody = req.body
        let userUpdated
        try {
            if (req.user.role === 'admin') {
                const id = req.params.id
                userUpdated = await User.findOneAndUpdate({ _id: id }, userBody, { new: true })
                res.json({ success: true, userUpdated })
            } else if (req.user.role === 'visitor' || req.user.role === 'mod') {
                if (!userBody.role) {
                    userUpdated = await User.findOneAndUpdate({ _id: req.user._id }, userBody, { new: true })
                    res.json({ success: true, userUpdated })
                } else {
                    res.json({ success: false })
                }
            } else {
                res.json({ success: false, error: 'Unauthorized User, you must be an admin' })
            }
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    deleteUser: async (req, res) => {
        try {
            if (req.user.role === 'admin' || req.user.role === 'mod') {
                const id = req.params.id
                const user = await User.findOne({ _id: id })
                if (user.role !== 'admin') {
                    const deletedUser = await User.findOneAndDelete({ _id: id })
                    res.json({ success: true, msg: 'User was deleted successfully ', deletedId: deletedUser._id })
                } else {
                    res.json({ success: false })
                }
            } else if (req.user.role === 'visitor') {
                await User.findOneAndDelete({ _id: req.user._id })
                res.json({ success: true, msg: 'The account has been deleted successfully ' })
            } else {
                res.json({ success: false, error: 'Unauthorized User' })
            }
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
}
module.exports = userControllers
