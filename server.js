const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './config/.env' });
require('./config/db');
const app = express();
const userRoutes = require('./routes/user.routes')
const productRoutes = require('./routes/product.routes')

app.use(express.json())
app.use(cors())
app.use('/user', userRoutes);
app.use('/product', productRoutes);


app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
})