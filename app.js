const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models'); 
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Crypto Exchange Test')
});

// /**
//  * @swagger
//  * /users:
//  *   get:
//  *     summary: Get all users
//  *     responses:
//  *       200:
//  *         description: A list of users
//  */
// app.get('/users', async (req, res) => {
//   try {
//     const users = await db.User.findAll();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// /**
//  * @swagger
//  * /wallets:
//  *   get:
//  *     summary: Get all wallets
//  *     responses:
//  *       200:
//  *         description: A list of wallets
//  */
// app.get('/wallets', async (req, res) => {
//   try {
//     const wallets = await db.WalletOfUser.findAll({
//       include: [
//         {
//           model: db.FiatWallet,
//           attributes: ['wallet_id'], 
//           include: [
//             {
//               model: db.FiatCurrency,
//               attributes: ['symbol'], 
//             }
//           ],
//           attributes: ['balance'], 
//         },
//         {
//           model: db.CryptoWallet,
//           attributes: ['wallet_id'], 
//           include: [
//             {
//               model: db.CryptoCurrency,
//               attributes: ['symbol'], 
//             }
//           ],
//           attributes: ['balance'], 
//         }
//       ]
//     });
//     res.json(wallets);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// /**
//  * @swagger
//  * /orders:
//  *   get:
//  *     summary: Get all orders
//  *     responses:
//  *       200:
//  *         description: A list of orders
//  */
// app.get('/orders', async (req, res) => {
//   try {
//     const orders = await db.Order.findAll({
//        include: [
//         {
//           model: db.User,
//           attributes: ['user_name'], 
//         },
//         {
//           model: db.CryptoCurrency,
//           attributes: ['symbol'],
//         },
//         {
//           model: db.FiatCurrency,
//           attributes: ['symbol'],
//         },
//       ],
//     });
//     res.json(orders);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

const walletRoutes = require('./routes/walletRoutes');
app.use('/wallets', walletRoutes);

const transactionRoutes = require('./routes/transactionRoutes');
app.use('/transactions', transactionRoutes);

const orderRoutes = require('./routes/orderRoutes');
app.use('/orders', orderRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
