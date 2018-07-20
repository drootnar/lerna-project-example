import redis, { getRedisClient, destroyRedisClient } from '../src'

describe('default export', () => {
  afterEach(async () => {
    destroyRedisClient()
  })
  it('returns initialized redis', async () => {
    expect(redis).toBeDefined()
    expect(await redis.setAsync('test', 'test')).toBe('OK')
  })
})

describe('getRedisClient', () => {
  afterEach(async () => {
    destroyRedisClient()
  })
  it('returns redis client', async () => {
    const redis = getRedisClient()
    expect(redis).toBeDefined()
  })
  it('returned client behaves like redis', async () => {
    const redis = getRedisClient()
    expect(await redis.setAsync('test', 'test')).toBe('OK')
  })
  it('prevents creating multiple redis client', async () => {
    const redis = getRedisClient()
    const secondRedis = getRedisClient()
    expect(secondRedis).toEqual(redis)
  })
})

describe('destroyRedisClient', () => {
  it('closes redis connection', async () => {
    const redis = getRedisClient()
    destroyRedisClient()
    try {
      await redis.setAsync('test', 'test')
    } catch (err) {
      expect(err.message).toBeDefined()
    }
  })
  it('second destroy does notging', async () => {
    const redis = getRedisClient()
    destroyRedisClient()
    destroyRedisClient()
    try {
      await redis.setAsync('test', 'test')
    } catch (err) {
      expect(err.message).toBeDefined()
    }
  })
})
