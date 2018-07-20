import logger from '@lerna-pro/logger'
import config from '@lerna-pro/config'

const createApp = require('./app').createApp
const routes = require('./routes').default

const app = createApp(routes, true)
app.listen(config.api.port, function() {
  logger.info(`Api is listening on port ${config.api.port}`)
})
