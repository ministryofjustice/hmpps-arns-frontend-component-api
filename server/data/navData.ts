import { NavSection } from '../utils/navHelper'

const rawNavSections: NavSection[] = [
  {
    heading: { text: 'Overview' },
    items: [
      {
        text: 'Introduction',
        href: '/',
      },
    ],
  },
  {
    heading: { text: 'Components' },
    items: [
      {
        text: 'MAPPA widget',
        href: '/mappa-widget',
      },
      {
        text: 'Risk flag widget',
        href: '/risk-flag-widget',
      },
      {
        text: 'ROSH widget',
        href: '/rosh-widget',
      },
      {
        text: 'Predictor badge',
        href: '/predictor-badge',
      },
      {
        text: 'Expanded predictor badge',
        href: '/expanded-predictor-badge',
      },
      {
        text: 'Predictor scale',
        href: '/predictor-scale',
      },
    ],
  },
  {
    heading: { text: 'Legacy components' },
    items: [
      {
        text: 'Predictor scores',
        href: '/predictor-scores',
      },
      {
        text: 'Predictor scores indicator',
        href: '/predictor-scores-indicator',
      },
      {
        text: 'Predictor timeline',
        href: '/predictor-timeline',
      },
      {
        text: 'Predictor timeline item',
        href: '/predictor-timeline-item',
      },
    ],
  },
]

export default rawNavSections
