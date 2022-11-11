const WIDTH = 800;
const HEIGHT = 1377;

const SOUTH_WEST = [0, HEIGHT];
const NORTH_EAST = [WIDTH, 0];

const map = L.map('map', {
  crs: L.CRS.Simple,
}).setView([0, 0]);

const southWest = map.unproject(SOUTH_WEST);
const northEast = map.unproject(NORTH_EAST);
map.setMaxBounds(new L.LatLngBounds(southWest, northEast));

// Attempt at getting the bounds of the original map
const imageUrl = 'Saug-PhotoArchive.jpg';
// const ogMapNW = [42.661612, -86.208517];
// const ogMapSE = [42.652878, -86.201190];
const latLngBounds = L.latLngBounds([southWest, northEast]);

const imageOverlay = L.imageOverlay(imageUrl, latLngBounds).addTo(map);

// Test getting the center of the map using pixel coordinates
// const center = latLngBounds.getCenter();
// console.log(center); // => {lat: -688.5, lng: 400}
// Appears that y value is negative, to convert from image map x/y coords
// const imgMapCenter = L.point(WIDTH/2,HEIGHT/2);
// const transformation = L.transformation(1, 0, -1, 0);
// const transformed = transformation.transform(imgMapCenter);
// const testMarker = L.marker([transformed.y, transformed.x]).addTo(map);

const transformation = L.transformation(1, 0, -1, 0);

JSON.parse(layers).forEach((layer) => {
  const point = L.point(layer.coords);
  const transformed = transformation.transform(point);
  const marker = L.marker([transformed.y, transformed.x]).addTo(map);
  marker.on('click', () => {
    window.location.href = layer.href;
  })
})
