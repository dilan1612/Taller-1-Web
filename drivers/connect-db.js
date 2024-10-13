const mongoose = require('mongoose')

const URI = "mongodb+srv://dilanbohorquez:foFhfd4GBlkSopD6@cluster0.pip0r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.set('strictQuery', false)

mongoose.connect(URI)
  .then(()=>console.log('Connect DB Success'))
  .catch((err)=>console.log('Connect DB Fail ' + err))

module.exports = mongoose