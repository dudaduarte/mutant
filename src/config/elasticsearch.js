const { Client } = require('elasticsearch')

module.exports = new Client({
  hosts: [ 'http://elasticsearch:9200']
})
