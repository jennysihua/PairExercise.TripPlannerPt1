const mapboxgl = require("mapbox-gl");

// function mapMarkMaker(activity, coordinatesArr) {
//   const domEl = document.createElement('div')
//   if (activity === 'hotel') {
//     domEl.className = 'hotelmarker'
//   } else if (activity === 'restaurant') {
//     domEl.className = 'restaurantmarker'
//   } else {
//     domEl.className = 'activitymarker'
//   }
//   new mapboxgl.Marker(domEl).setLngLat(coordinatesArr).addTo(map)
// }

function mapMarkMaker(coordinatesArr) {
  const domEl = document.createElement('li')
  domEl.className ='marker'
  return new mapboxgl.Marker(domEl).setLngLat(coordinatesArr).addTo(map)
}

module.exports = mapMarkMaker
