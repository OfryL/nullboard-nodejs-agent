import cors from 'cors'
import bodyParser from 'body-parser'
import express from 'express'
import api from "./api"
import authMiddleware from "./auth"

const port = parseInt(process.env.PORT || '10001', 10)

const logMw = (req, res, next) => {
  console.log(`[${req.method}] ${req.url}`)
  return next()
}

const server = express()

server.use(bodyParser.urlencoded())

server.use(cors())

server.use(logMw)

server.use(authMiddleware)

server.use(api)

server.on('error', (err) => {
  console.error(err)
})

server.listen(port, () => {
  console.log(`> Ready on http://localhost:${port}`)
})
