import request from 'supertest'
import { createApp } from '../../src/app'
import CounterRouter from '../../src/routers/counterRouter'

describe('CounterRouter', () => {
  const app = createApp(CounterRouter)

  it('POST v0/counter - checks response structure', async function () {
    const res = await request(app).post('/').send({ counter: 1 }).expect(200)
    expect(res.body).toMatchSnapshot()
  })

  it('GET v0/counter - checks response structure', async function () {
    const res = await request(app).get('/').expect(200)
    expect(res.body).toMatchSnapshot()
  })
})
