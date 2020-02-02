const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('connect-flash')

class App {
  constructor () {
    this.server = express()

    this.middlewares()
    this.views()
    this.routes()
  }

  middlewares () {
    this.server.use(express.urlencoded({ extended: false }))
    this.server.use(session({
      name: 'root',
      secret: 'be9208c5246b06f118a1ced4ebf07972',
      store: new FileStore({
        path: path.resolve(__dirname, '..', 'tmp', 'sessions')
      }),
      resave: true,
      saveUninitialized: true
    }))
  }

  views () {
    this.server.use(flash())
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: true,
      express: this.server,
      autoescape: true
    })
    this.server.set('view engine', 'njk')

    this.server.use(express.static(path.resolve(__dirname, 'public')))
  }

  routes () {
    this.server.use(require('./routes'))
  }
}

module.exports = new App().server
