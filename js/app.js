console.log("Munich Green Space Explorer loaded successfully!");

const map = L.map("map").setView([48.1374, 11.5755], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

fetch("data/green-spaces.geojson")
    .then(response => response.json())
    .then(data => {
        console.log("GeoJSON loaded:", data);

        // Calculate statistics
        const totalGreenSpaces = data.features.length;

        const parks = data.features.filter(feature =>
            feature.properties.leisure === "park"
        );

        const gardens = data.features.filter(feature =>
            feature.properties.leisure === "garden"
        );

        // Display statistics
        document.getElementById("total-count").textContent = totalGreenSpaces;
        document.getElementById("park-count").textContent = parks.length;
        document.getElementById("garden-count").textContent = gardens.length;

        // Create GeoJSON layer
        const greenSpaceLayer = L.geoJSON(data, {
            style: {
                color: "#2e7d32",
                weight: 2,
                fillColor: "#66bb6a",
                fillOpacity: 0.5
            },

            onEachFeature: function (feature, layer) {
                const name =
                    feature.properties.name || "Unnamed green space";

                const type =
                    feature.properties.leisure || "Unknown";

                layer.bindPopup(`
                    <strong>${name}</strong><br>
                    Type: ${type}
                `);
            }
        }).addTo(map);

        // Filter function
        function filterGreenSpaces(type) {
            greenSpaceLayer.clearLayers();

            const filteredFeatures = data.features.filter(feature => {
                if (type === "all") {
                    return true;
                }

                return feature.properties.leisure === type;
            });

            greenSpaceLayer.addData({
                type: "FeatureCollection",
                features: filteredFeatures
            });
        }

        // Set active filter button
        function setActiveButton(activeButton) {
            const buttons = document.querySelectorAll("#filters button");

            buttons.forEach(button => {
                button.classList.remove("active");
            });

            activeButton.classList.add("active");
        }

        // Filter button events
        document.getElementById("show-all").addEventListener("click", event => {
            filterGreenSpaces("all");
            setActiveButton(event.target);
        });

        document.getElementById("show-parks").addEventListener("click", event => {
            filterGreenSpaces("park");
            setActiveButton(event.target);
        });

        document.getElementById("show-gardens").addEventListener("click", event => {
            filterGreenSpaces("garden");
            setActiveButton(event.target);
        });
    })
    .catch(error => {
        console.error("Error loading GeoJSON:", error);
    });
