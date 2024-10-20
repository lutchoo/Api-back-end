const express = require('express')
require('dotenv').config({ path:'./config/.env'})
require('./config/db')
const userRoutes = require('./routes/user.routes')

const app = express()
const port = process.env.PORT

//routes
app.use('/api/user', userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})