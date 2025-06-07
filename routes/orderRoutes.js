const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');


/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Order]
 *     responses:
 *       200:
 *         description: A list of orders
 */
router.get('/', orderController.getAllOrder);


/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user_id
 *               - crypto_id
 *               - fiat_id
 *               - order_type
 *               - amount_crypto
 *               - price_per_unit
 *             properties:
 *               user_id:
 *                 type: string
 *                 example: "00000000-0000-0000-0000-000000000001"
 *                 description: UUID ของผู้ใช้ (user_id ที่มีอยู่ใน DB)
 *               crypto_id:
 *                 type: string
 *                 example: "cccccc01-cc01-cc01-cc01-cccccccccc01"
 *                 description: UUID ของเหรียญ BTC
 *               fiat_id:
 *                 type: string
 *                 example: "ffffff01-ff01-ff01-ff01-ffffffffff01"
 *                 description: UUID ของสกุลเงิน THB
 *               order_type:
 *                 type: string
 *                 example: "BUY"
 *                 description: ประเภทคำสั่ง BUY หรือ SELL
 *               amount_crypto:
 *                 type: number
 *                 example: 0.0025
 *               price_per_unit:
 *                 type: number
 *                 example: 1200000
 *     responses:
 *       201:
 *         description: Order created successfully
 */
router.post('/', orderController.createOrder);


module.exports = router;