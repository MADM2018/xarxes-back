module.exports.getMarkers = (tweetsGeoInfo) => {
  if (!tweetsGeoInfo || !Array.isArray(tweetsGeoInfo)) return [];

  const markers = [];

  for (let i = 0; i < tweetsGeoInfo.length; i++) {
    const info = tweetsGeoInfo[i];
    const { text, place } = info;

    if (place) {
      try {
        markers.push({
          text,
          coordinates: place.bounding_box.coordinates[0][0],
        });
      } catch (Ex) {
        console.log(Ex);
      }
    }
  }

  return markers;
};
