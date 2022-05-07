mapboxgl.accessToken =
  'pk.eyJ1IjoiYnRyYXZlcnN5IiwiYSI6ImNqenY5MThjMDBqZ3YzY3A0N3ppZTA5Y2QifQ.LrFjedgw1wG34TkWCpNtFg';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 9,
  center: [-71.157895, 42.707741]
});

// Fetch stores from API
async function getAnimal() {
  const res = await fetch('/api/v1/animal');
  const data = await res.json();

  const animal = data.data.map(animal => {
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          animal.location.coordinates[0],
          animal.location.coordinates[1]
        ]
      },
      properties: {
        animalId: animal.animalId,
        icon: 'shop'
      }
    };
  });

  loadMap(animal);
}

// Load map with stores
function loadMap(animal) {
  map.on('load', function() {
    map.addLayer({
      id: 'points',
      type: 'symbol',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: stores
        }
      },
      layout: {
        'icon-image': '{icon}-15',
        'icon-size': 1.5,
        'text-field': '{storeId}',
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, 0.9],
        'text-anchor': 'top'
      }
    });
  });
}

getAnimal();