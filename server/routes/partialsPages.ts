import { Router } from 'express'
import { activateMojNav } from '../utils/navHelper'
import rawNavSections from '../data/navData'
import predictorScaleScores from '../data/predictorScaleScores'
import widgetData from '../data/widgetData'
import legacyComponentRiskScores from '../data/legacyComponentRiskScores'
import badgeRiskScores from '../data/badgeRiskScores'
import predictorScaleNotApplicableScores from '../data/predictorScaleNotApplicableScores'

export default function componentPageRoutes(): Router {
  const router = Router()

  router.get('/predictor-badge', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/predictorBadgePage', { badgeRiskScores, navSections })
  })
  router.get('/expanded-predictor-badge', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/expandedPredictorBadgePage', { badgeRiskScores, navSections })
  })
  router.get('/mappa-widget', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/mappaWidgetPage', { widgetData, navSections })
  })
  router.get('/predictor-scores', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/predictorScoresPage', { legacyComponentRiskScores, navSections })
  })
  router.get('/predictor-scores-indicator', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/predictorScoresIndicatorPage', { legacyComponentRiskScores, navSections })
  })
  router.get('/predictor-timeline', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/predictorTimelinePage', { legacyComponentRiskScores, navSections })
  })
  router.get('/predictor-timeline-item', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/predictorTimelineItemPage', { legacyComponentRiskScores, navSections })
  })
  router.get('/risk-flag-widget', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/riskFlagWidgetPage', { widgetData, navSections })
  })
  router.get('/rosh-widget', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/roshWidgetPage', { widgetData, navSections })
  })
  router.get('/predictor-scale', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/predictorScalePage', { predictorScaleScores, predictorScaleNotApplicableScores, navSections })
  })

  return router
}
