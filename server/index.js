require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const express = require('express')
const Alert = require('./models/Alert')
const User = require('./models/User')
const cors = require('cors')
const auth = require('./middlewares/auth')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(
  process.env.MONGODB_URI
)
  .then(() => {
    console.log('MONGODB CONNECTED')
  })
  .catch((error) => {
    console.log(error)
  })

app.use(cors())
app.use(express.json())

// GET ALERTS
app.get('/alerts', auth, async (req, res) => {

  const alerts = await Alert.find()

  res.json(alerts)

})

// CREATE ALERT
app.post('/alerts',auth, async (req, res) => {

  const newAlert = await Alert.create({

    ...req.body,

  createdBy: req.user.username



  })

  res.json(newAlert)
    
   
})

// DELETE ALERT
app.delete('/alerts/:id', async (req, res) => {

  const alertId = req.params.id

  await Alert.findByIdAndDelete(alertId)

  res.json({
    message: 'Alert deleted successfully'
  })

})

// UPDATE ALERT
app.put('/alerts/:id', async (req, res) => {

  const alertId = req.params.id

  const updatedAlert = await Alert.findByIdAndUpdate(
    alertId,
    req.body,
    { new: true }
  )

  res.json(updatedAlert)

})

// REGISTER USER
app.post('/register', async (req, res) => {

  const { username, email, password } = req.body

  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = await User.create({

    username,
    email,
    password: hashedPassword

  })

  res.json({
    message: 'User created successfully',
    user: newUser
  })

})

app.post('/login', async (req, res) => {

  const { username, password } = req.body

  const user = await User.findOne({ username })

  if (!user) {
    return res.status(404).json({
      message: 'User not found'
    })
  }

  const isPasswordValid = await bcrypt.compare(
    password,
    user.password
  )

  if (!isPasswordValid) {
    return res.status(401).json({
      message: 'Invalid password'
    })
  }

  const token = jwt.sign(
  {
    id: user._id,
    username: user.username
  },
  process.env.JWT_SECRET,
  {
    expiresIn: '7d'
  }
)

  res.json({
    message: 'Login successful',
    token
  })

})

// HOME
app.get('/', (req, res) => {
  res.send('REQUIEM SERVER ONLINE')
})

app.listen(3001, () => {
  console.log('SERVER RUNNING ON PORT 3001')
})

app.get('/me', auth, (req, res) => {

  res.json({
    user: req.user
  })

})