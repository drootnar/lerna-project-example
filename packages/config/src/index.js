export default {
  logLevel: process.env.LOG_LEVEL || 'NONE',
  redisUrl: process.env.REDIS_URL || 'redis://redis:6379',
  api: {
    port: 5500
  }
}
