console.log("Hello from JavaScript");
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoicndldG1vcmUzIiwiYSI6ImNqZ280ZDg5YjBqdWkzM255ZWJkZHlxZzQifQ.raAaz7h24n9OYwqLUZYWhg';

function mapMarkMaker(coordinatesArr) {
    const domEl = document.createElement('div') 
    domEl.className ='marker';

    new mapboxgl.Marker(domEl).setLngLat(coordinatesArr).addTo(map)
}

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

mapMarkMaker([-87.641, 41.895])
console.log('Hello')