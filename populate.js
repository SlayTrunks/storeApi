require('dotenv').config()

const connectDB = require('./db/connect')
const product = require('./models/product')

const Product = require('./models/product')

const jsonProducts = require('./products.json')

const start = async () =>{
    try {
        connectDB(process.env.MONGO_URI)
        // console.log('connected to db')
        await Product.deleteMany()
        await product.create(jsonProducts)
        console.log('we are done')
        process.exit(0)
    } catch (error) {
        console.log(error);
    }
}

start()