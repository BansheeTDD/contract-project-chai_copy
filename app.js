const express = require('express')

const serverConfig = require('./config/server.config')
const mainRouter = require('./routes/main.route')
const regRouter = require('./routes/reg.route')
const logoutRouter = require('./routes/logout.route')
const loginRouter = require('./routes/login.route')
const addTeaRouter = require('./routes/add.tea.route')
const profileRouter = require('./routes/profile.route')
const teaCardRouter = require('./routes/tea.router')

const app = express()

const PORT = 3000


serverConfig(app)

app.use('/', mainRouter)
app.use('/reg', regRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)
app.use('/new-tea', addTeaRouter)
app.use('/profile', profileRouter)
app.use('/tea', teaCardRouter)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})

// React-router-dom