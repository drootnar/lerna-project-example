import bodyParser from 'body-parser'

export function applyMiddlewares(app) {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
}

export function applyErrorMiddlewares(app) {}
