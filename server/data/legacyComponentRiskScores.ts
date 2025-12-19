const legacyComponentRiskScores = {
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

export default legacyComponentRiskScores
