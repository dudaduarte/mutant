const apm = require('elastic-apm-node').start({
  serviceName: process.env.ELASTIC_APM_SERVICE_NAME || 'desafio-mutant',
  serverUrl: process.env.ELASTIC_APM_SERVER_URL || 'http://apm-server:8200',
})
const express = require('express')
const client = require('./config/elasticsearch')
const usersController = require('./controllers/users')

const app = express()

app.use(express.json())

app.get('/users', usersController.index)

app.use('/', () => {
  throw new Error('Route not found.', 404)
})

app.use((error, req, res, next) => {
  return res.status(500).send({
    error: {
      message: 'There was an error'
    }
  })
})

app.listen(process.env.PORT)

client.ping({
  requestTimeout: 30000,
}, error => {
  if (error) {
    console.error('elasticsearch cluster is down!')
  } else {
    console.log('Everything ok')
  }
})
