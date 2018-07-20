import express from 'express'

import redis from '@lerna-pro/database'

const router = express.Router()

router.get('/', async (req, res) => {
  const counter = await redis.getAsync('counter')
  res.status(200).send({ counter })
})

router.post('/', async (req, res) => {
  await redis.setAsync('counter', req.body.counter)
  const counter = await redis.getAsync('counter')
  res.status(200).send({ counter })
})

export default router
