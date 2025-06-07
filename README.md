# Crypto Exchange API
## 📦 Tech Stack
- **Backend:** Node.js + Express
- **ORM:** Sequelize (PostgreSQL)
- **Database:** Supabase (PostgreSQL)
- **Docs:** Swagger UI
- **Auth:** (ยังไม่ทำ 😅)

## ⚙️ Installation

### Project and Database Init
```bash
git clone https://github.com/Mongkol30/crypto-exchange.git
cd crypto-exchange
npm install
```
อย่าลืมสร้าง .env ด้วยนะ
```bash
example
DB_HOST=db.xxxxxxxxx.supabase.co
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=xxxxx
DB_NAME=crypto_exchange
```
### Migrate and Seed Data
```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### Start Project
```bash
node app.js
```
### Testing
Swagger: http://localhost:3000/api-docs
