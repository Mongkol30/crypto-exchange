const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

/**
 * @swagger
 * /transactions:
 *   get:
 *     summary: Get all transactions
 *     tags: [Transactions]
 *     responses:
 *       200:
 *         description: List of all transactions
 */
router.get('/', transactionController.getAllTransactions);


/**
 * @swagger
 * /transactions:
 *   post:
 *     summary: Create a new transaction
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - order_id
 *               - buyer_id
 *               - amount_crypto
 *             properties:
 *               order_id:
 *                 type: string
 *                 example: "aaaa0000-0000-0000-0000-000000000001"
 *                 description: UUID ของผู้ใช้ (order ที่มีอยู่ใน DB )
 *               buyer_id:
 *                 type: string
 *                 example: "00000000-0000-0000-0000-000000000002"
 *                 description: UUID ของผู้ใช้ (user_id ที่มีอยู่ใน DB)
 *               amount_crypto:
 *                 type: number
 *                 example: 0.25
 *     responses:
 *       201:
 *         description: Transaction created successfully
 */
router.post('/', transactionController.createTransaction);

module.exports = router;
