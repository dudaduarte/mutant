const axios = require('axios')
const { pipe } = require('ramda')
const apm = require('elastic-apm-node')
const usersService = require('../services/users')

exports.index = async (req, res, next) => {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const hash = (+new Date).toString(36)
  
  try {
    let { data } = await axios.get(url)
    const sortBy = req.query.sort
    const fields = req.query.fields ? req.query.fields.split(',') : undefined

    delete req.query.fields
    delete req.query.sort

    const handleUsersData = pipe(
      usersService.filterUsers(req.query),
      usersService.selectFields(fields),
      usersService.sortByField(sortBy)
    )(data)

    apm.setTransactionName(`GET ${req.originalUrl} - ${hash}`)
    apm.setCustomContext({
      responseBody: handleUsersData
    })

    return res.status(200).send(handleUsersData)
  }

  catch (error) {
    apm.setTransactionName(`ERROR: GET ${req.originalUrl} - ${hash}`)
    apm.setCustomContext({
      responseBody: error
    })

    return res.status(500).send(error)
  }
}
