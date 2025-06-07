const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transferController');

/**
 * @swagger
 * /transfers:
 *   get:
 *     summary: Get all transfers
 *     tags: [Transfers ( After Transactions ) ]
 *     responses:
 *       200:
 *         description: List of all transfers
 */
router.get('/', transferController.getAllTransfers);

/**
 * @swagger
 * /transfers:
 *   post:
 *     summary: Create a new crypto transfer
 *     tags: [Transfers ( After Transactions ) ]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - from_user_id
 *               - crypto_id
 *               - amount_crypto
 *               - transfer_type
 *             properties:
 *               from_user_id:
 *                 type: string
 *                 example: "userA-id"
 *               to_user_id:
 *                 type: string
 *                 example: "userB-id"
 *               crypto_id:
 *                 type: string
 *                 example: "btc-uuid"
 *               amount_crypto:
 *                 type: number
 *                 example: 0.1
 *               transfer_type:
 *                 type: string
 *                 example: "EXTERNAL"
 *               destination_address:
 *                 type: string
 *                 example: "receiver-wallet-address-or-null"
 *     responses:
 *       201:
 *         description: Transfer created
 */
router.post('/', transferController.createTransfer);

module.exports = router;
