const express = require('express');
const db = require('./models');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/', (req, res) => {
  res.send('Crypto Exchange Test');
});

(async () => {
  try {
    
    await db.sequelize.sync({ force: true });

    await require('./seeders/FiatCurrencySeeder')(db);
    await require('./seeders/CryptoCurrencySeeder')(db);
    await require('./seeders/UserSeeder')(db);
    await require('./seeders/WalletOfUsersSeeder')(db);
    await require('./seeders/FiatWalletsSeeder')(db);
    await require('./seeders/CryptoWalletsSeeder')(db);
    await require('./seeders/OrderSeeder')(db);
    await require('./seeders/TransactionSeeder')(db);
    await require('./seeders/TransferSeeder')(db);

    const userRoutes = require('./routes/userRoutes');
    app.use('/users', userRoutes);

    const walletRoutes = require('./routes/walletRoutes');
    app.use('/wallets', walletRoutes);

    const transactionRoutes = require('./routes/transactionRoutes');
    app.use('/transactions', transactionRoutes);

    const orderRoutes = require('./routes/orderRoutes');
    app.use('/orders', orderRoutes);

    const transferRoutes = require('./routes/transferRoutes');
    app.use('/transfers', transferRoutes);


    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error('Error while initializing DB:', err);
  }
})();
