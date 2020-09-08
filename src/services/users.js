const { curry } = require('ramda')
const userFields = [
  'id',
  'name',
  'username',
  'email',
  'phone',
  'website'
]

exports.filterUsers = curry((queries, users) => {
  const keys = Object.keys(queries)

  if (keys.length) {
    return users.filter(user =>
      keys.some(key => {
        const queryValue = String(queries[key]).toLowerCase()

        if (userFields.includes(key)) {
          const userValue = String(user[key]).toLowerCase()
          return (userValue).includes(queryValue)
        }

        if (key !== 'address' && key !== 'company') {
          return false
        }

        return Object.values(user[key]).some(element =>
          String(String(element).toLowerCase()).includes(queryValue))
      }))
  }

  return users
})

exports.selectFields = curry((fields, users) => {
  if (!users.length) return []

  if (fields) {
    const selectedFields = users.map(user => {
      let filtered = {}

      fields
        .map(field => field.trim())
        .forEach(field => {
          if (!user[field]) return

          return filtered[field] = user[field]
        })
  
      return filtered
    })

    return Object.keys(selectedFields[0]).length ? selectedFields : []
  }

  return users
})

exports.sortByField = curry((sortBy, users) => {
  if (!users.length) return []

  if (sortBy) {
    const fields = sortBy.split('.')
  
    return users.sort((a, b) => {
      if (fields.length === 2) {
        return a[fields[0]][fields[1]] > b[fields[0]][fields[1]]
          ? 1 : -1
      }
  
      return a[sortBy] > b[sortBy] ? 1 : -1
    })
  }

  return users
})

