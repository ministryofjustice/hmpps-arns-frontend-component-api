import { Router } from 'express'

export default function routes(): Router {
  const router = Router()

  router.get('/', async (req, res, next) => {
    return res.render('pages/index')
  })

  return router
}
