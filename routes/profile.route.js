const express = require('express')
const profileRouter = express.Router()
const { User, Comment, Tea } = require('../db/models')

profileRouter.post('/', async (req, res) => {
    try {
        const { user_id } = req.body;
        // console.log(req.body, user_id);
        // const userId = res.locals?.user.id;
        const userId = (user_id);
        const userFromDB = await User.findByPk(Number(userId))
        if (userFromDB) {
            const commentsData = await Comment.findAll({where:{user_id:userFromDB.id}})
            const comments = JSON.parse(JSON.stringify(commentsData));
            const teasData = await Tea.findAll({where:{id:comments.map((comment) => comment.tea_id)}});
            const teas = JSON.parse(JSON.stringify(teasData));
            const user = userFromDB.get()
            //    console.log(comments);
            //    console.log(user);
            res.json({user, comments, teas})
        } else {
            res.status(500).json({ message: 'err_finding_user'})
        }
    } catch (error) {
        console.log('ERR_FINDING_USER', error);
        res.status(500).json({ message: 'err_finding_user'})
    }
})

module.exports = profileRouter