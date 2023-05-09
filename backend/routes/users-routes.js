const express = require('express');
const usersControllers = require('../controllers/users-controller');
const router = express.Router();
const { check } = require('express-validator');

router.get('/', usersControllers.getAllUsers);

router.post(
  '/signup',
  [
    check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 6 }),
  ],
  usersControllers.signup
);
router.post('/login', usersControllers.logInUser);

module.exports = router;
