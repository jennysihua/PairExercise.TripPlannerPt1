const mapboxgl = require("mapbox-gl");

module.exports = function mapMarkMaker(activity, coordinatesArr) {
  const domEl = document.createElement('div')
  console.log('f')
  if (activity === 'hotel') {
    domEl.className = 'hotelmarker'
  } else if (activity === 'restaurant') {
    domEl.className = 'restaurantmarker'
  } else {
    domEl.className = 'activitymarker'
  }
  return new mapboxgl.Marker(domEl).setLngLat(coordinatesArr)
}

