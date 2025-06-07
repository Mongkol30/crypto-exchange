const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [About user]
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get('/', userController.getAllUsers);

module.exports = router;
