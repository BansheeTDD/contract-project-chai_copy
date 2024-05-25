const { User } = require("../../db/models");

const getAdminUser = async (req, res, next) => {
    try {
        if(req.session?.user_sid) {
            const admin_user = await User.findByPk(1);
            res.locals.admin_user = admin_user ? admin_user.get() : null
        } else {
            res.locals.admin_user = null;
        }
        next();
    } catch (error) {
        const message = "ERROR with middleware getAdminUser path: src/middleware/get.admin_user.js";
        console.log(message, error);
        next(error);
    }
}

module.exports = getAdminUser;
