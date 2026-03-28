require("dotenv").config();
const express = require('express')
const cors = require('cors')
const path = require('path')
const connectDB = require('./config/db')

const authRoutes = require('./Routes/authRoutes')
const bookRoutes = require('./Routes/bookRoutes')
const aiRoutes = require('./Routes/aiRoutes')
const exportRoutes = require('./Routes/exportRoutes')

const app = express()

//Middleware to handle CORS
app.use(
    cors({
        origin: '*',
        methods: ['GET','POST','PUT','DELETE'],
        allowedHeaders: ['Content-Type','Authorization']
    })
)

//Connect Database
connectDB()

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Static folder for uploads
app.use('/backend/uploads', express.static(path.join(__dirname,'uploads')))

//Routes Here
app.use('/api/auth',authRoutes)
app.use('/api/books',bookRoutes)
app.use('/api/ai',aiRoutes)
app.use('/api/export',exportRoutes)

app.use((err, req, res, next) => {
    if (err?.type === 'entity.parse.failed') {
        console.warn(`Invalid JSON payload received for ${req.method} ${req.originalUrl}`)
        return res.status(400).json({ message: 'Invalid JSON payload' })
    }

    return next(err)
})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)})
