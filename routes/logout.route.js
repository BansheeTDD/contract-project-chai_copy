const express = require('express')
const logoutRouter = express.Router()

logoutRouter.get('/', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Server err'})
        }
        res.clearCookie('user_sid').redirect('/')
    })
})



module.exports = logoutRouter