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
