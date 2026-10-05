console.log("Munich Green Space Explorer loaded successfully!");

const map = L.map("map").setView([48.1374, 11.5755], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);
