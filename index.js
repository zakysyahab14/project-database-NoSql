require("dotenv").config();

const express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const db = require('./src/config/database')

const PORT = process.env.PORT || 3000

const homeRouter = require("./src/routes/home")
const userRouter = require("./src/routes/user")
const orderRouter = require('./src/routes/order')
const productRouter = require('./src/routes/product')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.use('/', homeRouter);
app.use('/user', userRouter);
app.use('/order', orderRouter);
app.use('/product', productRouter);

app.listen(PORT, ()=> {
    console.log(`server running on PORT ${PORT}`)
});