import { Router } from 'express'

import type { Services } from '../services'
import { Page } from '../services/auditService'

export default function routes(): Router {
  const router = Router()

  router.get('/', async (req, res, next) => {
    return res.render('pages/index')
  })

  return router
}
