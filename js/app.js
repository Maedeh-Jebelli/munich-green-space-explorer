console.log("Munich Green Space Explorer loaded successfully!");

const map = L.map("map").setView([48.1374, 11.5755], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

fetch("data/green-spaces.geojson")
    .then(response => response.json())
    .then(data => {
    console.log("GeoJSON loaded:", data);

    L.geoJSON(data, {
    style: {
        color: "#2e7d32",
        weight: 2,
        fillColor: "#66bb6a",
        fillOpacity: 0.5
    },

    onEachFeature: function (feature, layer) {
        const name = feature.properties.name || "Unnamed green space";
        const type = feature.properties.leisure || "Unknown";

        layer.bindPopup(`
            <strong>${name}</strong><br>
            Type: ${type}
        `);
    }
}).addTo(map);
    .catch(error => {
        console.error("Error loading GeoJSON:", error);
    });
