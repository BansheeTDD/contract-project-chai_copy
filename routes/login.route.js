const express = require('express')
const loginRouter = express.Router()
const bcrypt = require('bcrypt')
const { User } = require('../db/models')



loginRouter.post('/', async(req, res) => {
    
    try {
        const { email, password } = req.body;
        const user = JSON.parse(JSON.stringify(await User.findOne({ where: { email } })));
        const checkPassword = await bcrypt.compare(password, user.password);
        
        if (user && checkPassword) {
            req.session.user_sid = user.id;
// console.log({checkPassword: req.session});
            
            res.status(200).json({id: user.id, name: user.name, email: user.email});
        } else {
            res.status(403).json({ message: 'Проверьте правильность ввода логина или пароля'})
        }
        
    } catch (error) {
        console.log('ERR_IN_REG_LOGIN_POST');
    }
})





module.exports = loginRouter