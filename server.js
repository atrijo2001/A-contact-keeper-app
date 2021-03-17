const express = require('express');
const users = require('./routes/users')
const auth = require('./routes/auth')
const contacts = require('./routes/contacts')

const connectDB = require('./config/DB')

const app = express()

//Init middleware
app.use(express.json({extended: false}))

//Connect database and call connect db
connectDB()

app.get('/',(req, res) => {
    res.json({msg: "Welcome to the contacts keeper api"})
})


//Define routes
app.use('/api/users', users)
app.use('/api/contacts', contacts)
app.use('/api/auth', auth)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))