const express = require('express')
const teaCardRouter = express.Router()
const { Tea, Comment, User } = require('../db/models')

teaCardRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const teaFromDB = await Tea.findByPk(Number(id))
        if (teaFromDB) {
            const tea = teaFromDB.get()
            // console.log(tea);
            res.json(tea)
        } else {
            res.status(500).json({ message: 'err_finding_tea'})
        }
    } catch (error) {
        console.log('ERR_FINDING_TEA', error);
        res.status(500).json({ message: 'err_finding_tea'})
    }
})


teaCardRouter.get('/:id/comments', async (req, res) => {
    try {
        const { id } = req.params
        // console.log('мой консоль-лог: ', id);
        const teasFromDB = await Comment.findAll({ where: { tea_id: Number(id)}})
        const usersFromDB = await User.findAll({where:{id:
            teasFromDB.map((tea) => tea.user_id)}})
        if (teasFromDB) {
            const teas = JSON.parse(JSON.stringify(teasFromDB))
            const users = JSON.parse(JSON.stringify(usersFromDB))
            res.json({teas, users})
        } else {
            res.status(500).json({ message: 'no comments'})
        }
    } catch (error) {
        console.log('NO COMMENTS', error);
        res.status(500).json({ message: 'no comments'})
    }
})

teaCardRouter.post('/api/addcomment', async (req, res) => {
    const {content, tea_id, user_id} = req.body;
    // await Comment.create({content, tea_id, user_id});
    const createComment = await Comment.create({content, tea_id, user_id });
    const newComment = createComment.get();

console.log(newComment);

    res.status(200).json(newComment);
})


module.exports = teaCardRouter