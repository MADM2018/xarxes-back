module.exports.parseBarChartData = (tweetsByMonth) => {
  if (!tweetsByMonth) return [];

  const data = makeMockData();
  const parsedData = removeMonths(tweetsByMonth);

  data.series = [...parsedData];

  return data;
};

function makeMockData() {
  return {
    labels: ['Feb', 'Mar', 'Abr', 'May', 'Jun'],
    series: [],
  };
}

function removeMonths(series) {
  if (series.length === 12 && typeof series[0] === 'number') {
    return series.slice(1, 6);
  }

  return series.map((serie) => {
    return serie.slice(1, 6);
  });
}
