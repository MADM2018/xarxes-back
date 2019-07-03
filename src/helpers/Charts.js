module.exports.parseBarChartData = (tweetsByMonth) => {
  if (!tweetsByMonth) return [];

  const data = makeMockData();

  data.series = [...tweetsByMonth];

  return data;
};

function makeMockData() {
  return {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    series: [],
  };
}
