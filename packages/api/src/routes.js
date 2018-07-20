import { Router } from 'express'

import CounterRouter from './routers/counterRouter'

const routes = Router()

routes.get('', (req, res, next) => {
  res.send({ status: 'ok' })
})
routes.use('/v0/counter', CounterRouter)
export default routes
