const mongoose = require('mongoose')
const pass = 'mongodb+srv://neutronstarkd:FJmb4KtoqyCZKJTI@cluster.2me0a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster'

const connect = async () => {
  try {
    const conn_param = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    await mongoose.connect(pass, conn_param).then(console.log('connected to db'))
  } catch (error) {
    console.log('db conn error', error)
  }
}

module.exports = connect


