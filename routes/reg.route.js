const express = require('express')
const regRouter = express.Router()
const bcrypt = require('bcrypt')
const { User } = require('../db/models')



regRouter.post('/', async(req, res) => {
    try {
        const { name, email, password } = req.body
        const hashPassword = await bcrypt.hash(password, 10)
        const user = await User.create({name, email, password: hashPassword })
        req.session.user_sid = user.id
        res.status(200).json({id: user.id, name: user.name, email: user.email});
    } catch (error) {
        console.log('ERR_REGISTRATING_USER', error)
        res.sendStatus(403)
    }
})





module.exports = regRouter