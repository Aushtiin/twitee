const Helper = require('./auth');
const models = require('../database/models');
const ServerResponse = require('../modules/ServerResponse');
const { hashPassword, userData, createToken } = Helper
const { User } = models;
const { successResponse, errorResponse } = ServerResponse;

module.exports = class SignUserUp {
    static async signUp(req, res, name, email, password, confirmPassword) {
        const commonWordsArray = [name, email, 'abcdef', 'password', 'Password', 'qwerty', '12345', '11111'];
        const commonWord = commonWordsArray.find(word => password.includes(word));
        if (commonWord) return errorResponse(res, 400, { message: 'password too simple' });

        const foundUser = await User.findOne({ where: { email } });
        if (foundUser) return errorResponse(res, 400, { message: 'user already exists' });

        if (password !== confirmPassword) return errorResponse(res, 400, { message: 'Passwords do not match' });

        const hashedPassword = hashPassword(password);
        const verificationToken = userData(email);

        const user = {
            name,
            email,
            password: hashedPassword,
            verificationToken,
        };

        const registeredUser = await User.create(user);
        const {
            id,
            name: rname,
            email: remail,
        } = registeredUser;

        const Token = createToken({
            id,
            rname,
            remail,
        });

        return successResponse({
            res,
            status: 200,
            success: true,
            message: "Account created successfully",
            data: Token
        });
    }
}