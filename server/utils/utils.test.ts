import { convertToTitleCase, initialiseName, govukDate } from './utils'

describe('convert to title case', () => {
  it.each([
    [null, null, ''],
    ['empty string', '', ''],
    ['Lower case', 'robert', 'Robert'],
    ['Upper case', 'ROBERT', 'Robert'],
    ['Mixed case', 'RoBErT', 'Robert'],
    ['Multiple words', 'RobeRT SMiTH', 'Robert Smith'],
    ['Leading spaces', '  RobeRT', '  Robert'],
    ['Trailing spaces', 'RobeRT  ', 'Robert  '],
    ['Hyphenated', 'Robert-John SmiTH-jONes-WILSON', 'Robert-John Smith-Jones-Wilson'],
  ])('%s convertToTitleCase(%s, %s)', (_: string, a: string, expected: string) => {
    expect(convertToTitleCase(a)).toEqual(expected)
  })
})

describe('initialise name', () => {
  it.each([
    [null, null, null],
    ['Empty string', '', null],
    ['One word', 'robert', 'r. robert'],
    ['Two words', 'Robert James', 'R. James'],
    ['Three words', 'Robert James Smith', 'R. Smith'],
    ['Double barrelled', 'Robert-John Smith-Jones-Wilson', 'R. Smith-Jones-Wilson'],
  ])('%s initialiseName(%s, %s)', (_: string, a: string, expected: string) => {
    expect(initialiseName(a)).toEqual(expected)
  })
})

describe('govukDate', () => {
  it('formats a valid ISO date string into GOV.UK style', () => {
    expect(govukDate('2025-12-16')).toBe('16 December 2025')
  })

  it('formats a JavaScript Date object', () => {
    const date = new Date(2025, 11, 16)
    expect(govukDate(date)).toBe('16 December 2025')
  })

  it('returns an empty string when date is null or undefined', () => {
    expect(govukDate(null as unknown as string)).toBe('')
    expect(govukDate(undefined as unknown as string)).toBe('')
  })

  it('returns an empty string when date is an invalid string', () => {
    expect(govukDate('not-a-date')).toBe('')
  })

  it('handles single digit days correctly', () => {
    expect(govukDate('2025-01-05')).toBe('5 January 2025')
  })
})
