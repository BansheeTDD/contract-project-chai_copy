const express = require('express')
const addTeaRouter = express.Router()
const { Tea } = require('../db/models')


addTeaRouter.post('/', async(req, res) => {
    try {
        const { title, place_cultivation, description, image } = req.body
        const newTeaDB = await Tea.create({ title, place_cultivation, description, image })
        if(newTeaDB) {
            const newTea = newTeaDB.get()
            res.json(newTea)
        } else {
            res.status(500).json({ message: 'err_adding_tea'})
        }
    } catch (error) {
        console.log('ERR_ADDING_TEA', error);
        res.status(500).json({ message: 'err_adding_tea'})
    }
})



module.exports = addTeaRouter