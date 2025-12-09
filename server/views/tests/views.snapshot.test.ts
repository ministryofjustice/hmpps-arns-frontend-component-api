import type { Express } from 'express'
import request from 'supertest'
import { appWithAllRoutes, user } from '../../routes/testutils/appSetup'

let app: Express

beforeAll(() => {
  app = appWithAllRoutes({
    userSupplier: () => user,
  })
})

describe('View Snapshot Tests: All Pages', () => {
  it('should match snapshot for the Intro page (/)', async () => {
    const response = await request(app).get('/').expect(200)
    expect(response.text).toMatchSnapshot()
  })

  it('should match snapshot for the mappa widget page (/mappa-widget)', async () => {
    const response = await request(app).get('/mappa-widget').expect(200)
    expect(response.text).toMatchSnapshot()
  })

  it('should match snapshot for the predictor scores page (/predictor-scores)', async () => {
    const response = await request(app).get('/predictor-scores').expect(200)
    expect(response.text).toMatchSnapshot()
  })

  it('should match snapshot for the predictor scores indicator page (/predictor-scores-indicator)', async () => {
    const response = await request(app).get('/predictor-scores-indicator').expect(200)
    expect(response.text).toMatchSnapshot()
  })

  it('should match snapshot for the predictor timeline page (/predictor-timeline)', async () => {
    const response = await request(app).get('/predictor-timeline').expect(200)
    expect(response.text).toMatchSnapshot()
  })

  it('should match snapshot for the predictor timeline item page (/predictor-timeline-item)', async () => {
    const response = await request(app).get('/predictor-timeline-item').expect(200)
    expect(response.text).toMatchSnapshot()
  })

  it('should match snapshot for the risk flag widget page (/risk-flag-widget)', async () => {
    const response = await request(app).get('/risk-flag-widget').expect(200)
    expect(response.text).toMatchSnapshot()
  })

  it('should match snapshot for the rosh widget page (/rosh-widget)', async () => {
    const response = await request(app).get('/rosh-widget').expect(200)
    expect(response.text).toMatchSnapshot()
  })
})
