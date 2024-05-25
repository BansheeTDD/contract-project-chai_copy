const express = require('express')
const mainRouter = express.Router()
const { Tea } = require('../db/models')

mainRouter.get('/', async (req, res) => {
    try {
        const teasFromDB = await Tea.findAll()
        if (teasFromDB) {
            const teas = JSON.parse(JSON.stringify(teasFromDB))
            res.json(teas)
        } else {
            res.status(500).json({ message: 'err_finding_teas'})
        }
    } catch (error) {
        console.log('ERR_FINDING_TEAS', error);
        res.status(500).json({ message: 'err_finding_teas'})
    }
})

mainRouter.get("/ifuser", (req, res) => {
    console.log('ifuser: ', req.session);
    res.status(200).json({user: res.locals.user});
});

module.exports = mainRouter