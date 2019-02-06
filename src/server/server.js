import http from 'http'
import path from 'path'
import config from 'config'
import _debug from 'debug'
import app from './app.js'
import healthApiRoute from './app.js'
var debug = _debug('server')

let server = async () => {
  debug('Starting server...')
  let httpServer = http.Server(app)
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname, '/../../build', 'index.html'))
  })
  httpServer.listen(config.port, () => {
    debug(`Server running on ${config.port}. Try hitting ${healthApiRoute}...`)
  })
}
server()
