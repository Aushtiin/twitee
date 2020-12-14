const express = require('express');
const router = express.Router();
const asyncHandler = require('../middleware/async')
const { userSignUp, userSignIn } = require('../controllers/authController');
const { getAllUsers, getUser } = require('../controllers/usersController');

router.post('/signup', asyncHandler(userSignUp));

router.post('/signin', asyncHandler(userSignIn));

router.get('/', asyncHandler(getAllUsers));

router.get('/:id', asyncHandler(getUser));

module.exports = router;