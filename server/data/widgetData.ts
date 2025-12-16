const widgetData = {
  roshRiskSummaryBoth: {
    hasBeenCompleted: true,
    overallRisk: 'VERY_HIGH',
    risks: [
      {
        riskTo: 'Children',
        community: 'LOW',
        custody: 'MEDIUM',
      },
      {
        riskTo: 'Public',
        community: 'VERY_HIGH',
        custody: 'HIGH',
      },
      {
        riskTo: 'Known Adult',
        community: 'MEDIUM',
        custody: 'MEDIUM',
      },
      {
        riskTo: 'Staff',
        community: 'HIGH',
        custody: 'VERY_HIGH',
      },
      {
        riskTo: 'Prisoners',
        community: 'N/A',
        custody: 'MEDIUM',
      },
    ],
    lastUpdated: '10 October 2021',
  },
  roshRiskSummaryCommunity: {
    hasBeenCompleted: true,
    overallRisk: 'MEDIUM',
    risks: [
      {
        riskTo: 'Children',
        community: 'LOW',
        custody: 'N/A',
      },
      {
        riskTo: 'Public',
        community: 'MEDIUM',
        custody: 'N/A',
      },
      {
        riskTo: 'Known Adult',
        community: 'LOW',
        custody: 'N/A',
      },
      {
        riskTo: 'Staff',
        community: 'HIGH',
        custody: 'N/A',
      },
      {
        riskTo: 'Prisoners',
        community: 'N/A',
        custody: 'N/A',
      },
    ],
    lastUpdated: '10 October 2021',
  },
  roshRiskSummaryCustody: {
    hasBeenCompleted: true,
    overallRisk: 'HIGH',
    risks: [
      {
        riskTo: 'Children',
        community: 'N/A',
        custody: 'MEDIUM',
      },
      {
        riskTo: 'Public',
        community: 'N/A',
        custody: 'HIGH',
      },
      {
        riskTo: 'Known Adult',
        community: 'N/A',
        custody: 'MEDIUM',
      },
      {
        riskTo: 'Staff',
        community: 'N/A',
        custody: 'VERY_HIGH',
      },
      {
        riskTo: 'Prisoners',
        community: 'N/A',
        custody: 'LOW',
      },
    ],
    lastUpdated: '10 October 2021',
  },
  mappa: {
    level: 'CAT 2/LEVEL 1',
    isNominal: false,
    lastUpdated: '10 October 2021',
  },
  flags: [{ description: 'Hate Crime' }, { description: 'Assault' }],
}

export default widgetData
