// OpenStreetMap displayMap
var createMap = L.map('myMap').setView([45.764043, 4.835658999999964], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map : <a href="https://www.openstreetmap.org/">OpenStreetMap</a> - Imagerie : <a href="https://www.mapbox.com/">Mapbox</a> - Vélo\'V API : <a href="https://developer.jcdecaux.com/">JCDecaux</a> ',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYmVuZGV2Y2F0IiwiYSI6ImNqanQzcHhoOTJjaTkzbG9uZjk5MXk5bDQifQ.bW0dHTIRrrrzCwsXTIXZRg'
}).addTo(createMap);

// Différentes couleurs pour les markers
var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    }
});

var greenIcon = new LeafIcon({iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png'});
var redIcon = new LeafIcon({iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png'});
var orangeIcon = new LeafIcon({iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png'});






