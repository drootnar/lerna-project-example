import redis from 'redis'
import bluebird from 'bluebird'

import config from '@lerna-pro/config'
import logger from '@lerna-pro/logger'

let _redis

export function getRedisClient () {
  if (_redis === undefined) {
    logger.debug('create redis client')
    _redis = redis.createClient(config.redisUrl)
    bluebird.promisifyAll(redis.RedisClient.prototype)
    bluebird.promisifyAll(redis.Multi.prototype)
  }
  return _redis
}

export function destroyRedisClient () {
  logger.debug('destroying redis client')
  if (_redis !== undefined) {
    _redis.end(true)
  }
  _redis = undefined
}

export default getRedisClient
