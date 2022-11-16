const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const authRoutes = require('./routes/auth.routes')
const usersRoutes = require('./routes/users.routes')
const uploadRoutes = require('./routes/upload.routes')
const categoriesRoutes = require('./routes/categories.routes')


const app = express();

mongoose.connect('mongodb://localhost/onyx-site')
  .then(()=>console.log('MongoDB has started ...'))
  .catch(e=>console.log(e))


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/categories', categoriesRoutes )


module.exports = app
