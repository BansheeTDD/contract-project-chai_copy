const { User } = require("../../db/models");

const getUser = async (req, res, next) => {
    try {
console.log({check: req.session})
// console.log({moilog: req.locals});
        if(req.session?.user_sid) {
            const user = await User.findByPk(req.session.user_sid);
            res.locals.user = user ? user.get() : null
        } else {
            res.locals.user = null;
        }
        next();
    } catch (error) {
        const message = "ERROR with middleware getUser path: src/middleware/get.user.js";
        console.log(message, error);
        next(error);
    }
}

module.exports = getUser;
