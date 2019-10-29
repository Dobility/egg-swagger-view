'use strict'

const fs = require('fs')
const path = require('path')

module.exports = (options, app) => {
  const { swaggerPath = '/docs/swagger.json' } = options
  const swaggerFile = path.join(app.config.baseDir, swaggerPath)
  const swaggerDir = path.dirname(swaggerFile)
  !fs.existsSync(swaggerDir) && fs.mkdirSync(swaggerDir)
  !fs.existsSync(swaggerFile) && fs.writeFileSync(swaggerFile, '')
  fs.writeFileSync(
    path.join(__dirname, '../../view/swagger-path.js'),
    `window.swaggerPath = '${swaggerPath}'`
  )
  return async (ctx, next) => {
    await next()
  }
}
