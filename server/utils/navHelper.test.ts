import { activateMojNav } from './navHelper'
import rawNavSections from '../data/navData'

describe('activateMojNav', () => {
  it('should set the "active: true" flag on the matching item for intro page', () => {
    const result = activateMojNav(rawNavSections, '/')

    // Check activated item
    expect(result[0].items[0].text).toBe('Intro')
    expect(result[0].items[0].href).toBe('/')
    expect(result[0].items[0].active).toBe(true)

    // Check other items not active
    result[0].items.filter(item => item.text !== 'Intro').forEach(item => expect(item.active).toBeUndefined())
    result[1].items.forEach(item => expect(item.active).toBeUndefined())
  })

  it('should set the "active: true" flag on the matching item for other page', () => {
    const result = activateMojNav(rawNavSections, '/mappa-widget')

    // Check activated item
    expect(result[1].items[0].text).toBe('mappa-widget')
    expect(result[1].items[0].href).toBe('/mappa-widget')
    expect(result[1].items[0].active).toBe(true)

    // Check other items not active
    result[0].items.forEach(item => expect(item.active).toBeUndefined())
    result[1].items.filter(item => item.text !== 'mappa-widget').forEach(item => expect(item.active).toBeUndefined())
  })

  it('should return the original array structure with no items active if path is not found', () => {
    const result = activateMojNav(rawNavSections, '/non-existent-page')

    expect(result.length).toBe(2)

    // Check items not active
    expect(result.some(section => section.items.some(item => item.active))).toBe(false)
  })
})
