module.exports.getMarkers = (tweetsGeoInfo) => {
  if (!tweetsGeoInfo || !Array.isArray(tweetsGeoInfo)) return [];

  const markers = [];

  for (let i = 0; i < tweetsGeoInfo.length; i++) {
    const info = tweetsGeoInfo[i];
    const { text, coordinates } = info;

    if (coordinates) {
      markers.push({
        text,
        coordinates,
      });
    }
  }

  return markers;
};
