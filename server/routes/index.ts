import { Router } from 'express'
import { activateMojNav } from '../utils/navHelper'
import rawNavSections from '../data/navData'

export default function routes(): Router {
  const router = Router()

  router.get('/', async (req, res, next) => {
    const navSections = activateMojNav(rawNavSections, '/')
    return res.render('pages/index', { navSections })
  })

  return router
}
