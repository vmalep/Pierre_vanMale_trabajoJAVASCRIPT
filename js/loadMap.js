// Note: there is a still a problem of refresh. Leaflet stops loading the tiles until the window is moved.
// I have tried various suggestions to no avail. See also:
// https://stackoverflow.com/questions/43065090/leaflet-map-does-not-centre-correct
// https://stackoverflow.com/questions/36246815/data-toggle-tab-does-not-download-leaflet-map

var map = L.map('map').setView([41.3877, 2.1878], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Only visible if the itinerary marker has been moved...
var markerWME = L.marker([41.3891, 2.1607],
    {
        title: "WebMadeEasy",
        riseOnHover: true
    }
).addTo(map);

// Only visible if the itinerary marker has been moved...
var markerClient = L.marker([41.3915, 2.1845],
    {
        title: "Client",
        riseOnHover: true
    }
).addTo(map);

L.Routing.control({
    waypoints: [
        L.latLng(41.3915, 2.1845),
        L.latLng(41.3891, 2.1607)
    ],
    fitSelectedRoutes: false,
    routeWhileDragging: true
}).addTo(map);