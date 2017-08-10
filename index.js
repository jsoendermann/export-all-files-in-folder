const fs = require('fs')
const path = require('path')

module.exports = dirname => {
  const result = {}

  fs
    .readdirSync(dirname, { encoding: 'utf8' })
    .filter(f => f !== 'index.js')
    .map(f => require(path.join(dirname, f)))
    .forEach(m => {
      Object.keys(m).forEach(key => {
        if (result.hasOwnProperty(key)) {
          throw new Error(`"${key}" gets exported more than once in ${dirname}`)
        }
        result[key] = m[key]
      })
    })

  return result
}
