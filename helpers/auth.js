const jwt = require('jsonwebtoken');
const { hashSync, compareSync } = require('bcryptjs');
const { config } = require('dotenv');

config();

class Helper {
    static createToken(payload){
        return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '24d' });
    }

    static verifyToken(token){
        return jwt.verify(token, process.env.SECRET_KEY);
    }

    static hashPassword(password){
        return hashSync(password, 10);
    }

    static verifyPassword(password, hashPassword){
        return compareSync(password, hashPassword);
    }

    static userData(user){
        return hashSync(user, 10);
    }
}

module.exports = Helper;