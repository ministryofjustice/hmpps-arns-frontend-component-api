import { Router } from 'express'
import { activateMojNav } from '../utils/navHelper'
import rawNavSections from '../data/navData'

export default function componentPageRoutes(): Router {
  const router = Router()

  const riskScores = {
    current: {
      date: '23 Jul 2021 at 12:00:00',
      scores: {
        RSR: {
          level: 'HIGH',
          score: 11.34,
          type: 'RSR',
        },
        OSPDC: {
          level: 'MEDIUM',
          score: 8.76,
          type: 'OSP/DC',
        },
        OSPIIC: {
          level: 'LOW',
          score: 3.45,
          type: 'OSP/IIC',
        },
      },
    },
    historical: [
      {
        date: '14 May 2019 at 12:00:00',
        scores: {
          RSR: {
            level: 'HIGH',
            score: 10.3,
            type: 'RSR',
          },
          OSPDC: {
            level: 'MEDIUM',
            score: 7.76,
            type: 'OSP/DC',
          },
          OSPIIC: {
            level: 'LOW',
            score: 3.45,
            type: 'OSP/IIC',
          },
        },
      },
      {
        date: '12 September 2018 at 12:00:00',
        scores: {
          RSR: {
            level: 'MEDIUM',
            score: 5.34,
            type: 'RSR',
          },
          OSPC: {
            level: 'MEDIUM',
            score: 6.76,
            type: 'OSP/C',
          },
          OSPI: {
            level: 'LOW',
            score: 3.45,
            type: 'OSP/I',
          },
        },
      },
    ],
  }

  const widgetData = {
    roshRiskSummary: {
      hasBeenCompleted: true,
      overallRisk: 'VERY_HIGH',
      riskInCommunity: {
        Children: 'LOW',
        Public: 'VERY_HIGH',
        'Known Adult': 'MEDIUM',
        Staff: 'HIGH',
      },
      riskInCustody: {
        Children: 'LOW',
        Public: 'VERY_HIGH',
        'Known Adult': 'MEDIUM',
        Staff: 'HIGH',
        Prisoners: 'MEDIUM',
      },
      lastUpdated: '10th October 2021',
    },
    mappa: {
      level: 'CAT 2/LEVEL 1',
      isNominal: false,
      lastUpdated: '10th October 2021',
    },
    flags: [{ description: 'Hate Crime' }, { description: 'Assault' }],
  }

  const badgeRiskScores = {
    lowStaticRiskScore: {
      level: 'LOW',
      score: 0.12,
      type: 'All Reoffending Predictor',
      staticOrDynamic: 'STATIC',
      completedDate: '25 October 2025',
    },
    lowDynamicRiskScore: {
      level: 'LOW',
      score: 1.23,
      type: 'All Reoffending Predictor',
      staticOrDynamic: 'DYNAMIC',
      completedDate: '25 October 2025',
    },
    mediumStaticRiskScore: {
      level: 'MEDIUM',
      score: 23.45,
      type: 'Violent Reoffending Predictor',
      staticOrDynamic: 'STATIC',
      completedDate: '25 October 2025',
    },
    mediumDynamicRiskScore: {
      level: 'MEDIUM',
      score: 34.56,
      type: 'Violent Reoffending Predictor',
      staticOrDynamic: 'DYNAMIC',
      completedDate: '25 October 2025',
    },
    highStaticRiskScore: {
      level: 'HIGH',
      score: 45.67,
      type: 'Serious Violent Reoffending Predictor',
      staticOrDynamic: 'STATIC',
      completedDate: '25 October 2025',
    },
    highDynamicRiskScore: {
      level: 'HIGH',
      score: 56.67,
      type: 'Serious Violent Reoffending Predictor',
      staticOrDynamic: 'DYNAMIC',
      completedDate: '25 October 2025',
    },
    veryHighStaticRiskScore: {
      level: 'VERY_HIGH',
      score: 67.78,
      type: 'Combined Serious Reoffending Predictor',
      staticOrDynamic: 'STATIC',
      completedDate: '25 October 2025',
    },
    veryHighDynamicRiskScore: {
      level: 'VERY_HIGH',
      score: 78.89,
      type: 'Combined Serious Reoffending Predictor',
      staticOrDynamic: 'DYNAMIC',
      completedDate: '25 October 2025',
    },
  }

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
    res.render('pages/predictorScoresPage', { riskScores, navSections })
  })
  router.get('/predictor-scores-indicator', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/predictorScoresIndicatorPage', { riskScores, navSections })
  })
  router.get('/predictor-timeline', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/predictorTimelinePage', { riskScores, navSections })
  })
  router.get('/predictor-timeline-item', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/predictorTimelineItemPage', { riskScores, navSections })
  })
  router.get('/risk-flag-widget', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/riskFlagWidgetPage', { widgetData, navSections })
  })
  router.get('/rosh-widget', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/roshWidgetPage', { widgetData, navSections })
  })

  return router
}
