import { NavSection } from '../utils/navHelper'

const rawNavSections: NavSection[] = [
  {
    heading: { text: 'Components' },
    items: [
      {
        text: 'Intro',
        href: '/',
      },
    ],
  },
  {
    heading: { text: 'Legacy components' },
    items: [
      {
        text: 'mappa-widget',
        href: '/mappa-widget',
      },
      {
        text: 'predictor-scores',
        href: '/predictor-scores',
      },
      {
        text: 'predictor-scores-indicator',
        href: '/predictor-scores-indicator',
      },
      {
        text: 'predictor-timeline',
        href: '/predictor-timeline',
      },
      {
        text: 'predictor-timeline-item',
        href: '/predictor-timeline-item',
      },
      {
        text: 'risk-flag-widget',
        href: '/risk-flag-widget',
      },
      {
        text: 'rosh-widget',
        href: '/rosh-widget',
      },
    ],
  },
]

export default rawNavSections
