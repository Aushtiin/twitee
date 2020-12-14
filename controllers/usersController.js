const models = require('../database/models');
const { User } = models;
const ServerResponse = require('../modules/ServerResponse');
const {errorResponse, successResponse} = ServerResponse;

const getAllUsers = async (req, res) => {
    const users = await User.findAll({ });
    return successResponse({
        res,
        status: 200,
        success: true,
        data: users,
    });
}

const getUser = async (req, res) => {
    const { id } = req.params
    const user = await User.findOne({
        where: { id },
        include: [
            {
                model: models.Post,
                as: "posts"
            }
        ]
    });
    if (!user) return errorResponse(res, 404, {message: 'Not Found'});
    return successResponse({
        res,
        status: 200,
        success: true,
        data: user
    })
}

module.exports = {
    getAllUsers,
    getUser
}