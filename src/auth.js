const Auth = process.env.TOKEN || '123'

const HEADER_KEY = 'x-access-token'

const authMiddleware = (req, res, next) => {
  const { [HEADER_KEY]: reqToken } = req.headers
  if (reqToken === Auth)
    return next()
  else
    return res.status(403).send('Forbidden')
}

export default authMiddleware
