const models = require('../database/models');
const { User } = models
const SignUserUp = require('../helpers/signUp');
const { signUp } = SignUserUp;
const ServerResponse = require('../modules/ServerResponse');
const { errorResponse, successResponse } = ServerResponse;
const Helper = require('../helpers/auth')
require('dotenv').config()

const userSignUp = async (req, res, next) => {
    try {
        const { name, email, password, confirmPassword } = req.body;
        await signUp(req, res, name, email, password, confirmPassword);
    } catch (error) {
        return next(error);
    };
};

const userSignIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ where: { email } });
        if (!user) return errorResponse(res, 400, { message: 'User not found' });

        const{
            id,
            name,
            email: userEmail,
            password: userPassword
        } = user.dataValues;

        const token =Helper.createToken({
            id,
            name,
            userEmail
        })
        
        const comparePassword = Helper.verifyPassword(password, userPassword);
        if (!comparePassword) return errorResponse(res, 401, { message: 'Email or Password mismatch'})

        return successResponse({
            res,
            status: 200,
            success: true,
            message: "User logged in successfully",
            data: token
        })
    } catch (error) {
        return next(error);
    }
}

module.exports = { userSignUp, userSignIn };