const mapboxgl = require("mapbox-gl");
const mapMarkMaker = require("./marker.js")

mapboxgl.accessToken = 'pk.eyJ1IjoicndldG1vcmUzIiwiYSI6ImNqZ280ZDg5YjBqdWkzM255ZWJkZHlxZzQifQ.raAaz7h24n9OYwqLUZYWhg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

mapMarkMaker([40.721219, -73.988855])

// mapMarkMaker('restaurant', [40.721219, -73.988855])
// mapMarkMaker('hotel', [40.745768, -73.988274])

console.log('Hello')
