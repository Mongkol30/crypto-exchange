const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');

/**
 * @swagger
 * /wallets:
 *   get:
 *     summary: Get all wallets
 *     tags: [About user]
 *     responses:
 *       200:
 *         description: A list of wallets
 */
router.get('/', walletController.getAllWallets);

module.exports = router;
