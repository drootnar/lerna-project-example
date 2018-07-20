import express from 'express'
import { applyMiddlewares, applyErrorMiddlewares } from './middlewares'

export function createApp(router) {
  const app = express()
  applyMiddlewares(app)
  app.use('/', router)
  applyErrorMiddlewares(app)
  return app
}
