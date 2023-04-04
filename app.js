require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

app.use(express.json())
app.use('/api/v1/products' , productsRouter)
app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/v1/products">Products</a>')
})

app.use(notFound)
app.use(errorHandler)
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(3000, () => {
            console.log(`Server is running on port ${3000}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start()