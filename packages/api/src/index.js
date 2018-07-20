import logger from '@lerna-pro/logger'

const createApp = require('./app').createApp
const routes = require('./routes').default

const app = createApp(routes, true)
app.listen(5500, function() {
  logger.info(`Api is listening on port 5500`)
})
