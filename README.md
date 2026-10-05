# Munich Green Space Explorer

An interactive Web GIS application for exploring parks and gardens across Munich.

The application combines **Leaflet, JavaScript, GeoJSON, and OpenStreetMap data** to provide an interactive view of urban green spaces, including filtering, feature information, and dynamic statistics.

## Live Demo

The application is deployed with GitHub Pages.

[Open Munich Green Space Explorer](YOUR-GITHUB-PAGES-URL)

## Project Overview

Munich Green Space Explorer was developed as a lightweight Web GIS application for visualizing and exploring urban green-space data directly in the browser.

Parks and gardens are represented as interactive geographic features. Users can explore individual locations, filter green spaces by type, and view statistics that update dynamically based on the selected category.

The project demonstrates how geospatial data can be transformed into an interactive web application without relying on a full GIS desktop environment.

## Features

- Interactive Leaflet map centered on Munich
- Visualization of parks and gardens
- Clickable green-space polygons with feature information
- Filtering by green-space type
- Dynamic park and garden statistics
- Active filter highlighting
- Responsive web-map interface

## Web GIS Workflow

### 1. Data Acquisition

Green-space data was obtained from OpenStreetMap using the Overpass API.

The dataset contains geographic features representing parks and gardens within the Munich area.

### 2. GeoJSON Processing

The geographic features are stored in GeoJSON format, allowing the spatial data and associated attributes to be loaded directly in the browser.

### 3. Interactive Mapping

Leaflet is used to render the GeoJSON features on an interactive OpenStreetMap basemap.

Feature properties are used to generate contextual information for individual green spaces.

### 4. Dynamic Filtering

JavaScript filtering allows users to switch between:

- All green spaces
- Parks
- Gardens

The displayed map features and statistics are updated dynamically according to the selected filter.

## Technologies

- JavaScript
- HTML5
- CSS3
- Leaflet
- GeoJSON
- OpenStreetMap
- Overpass API
- GitHub Pages

## Technical Implementation

The application uses client-side JavaScript to load, process, and visualize geographic data.

Key concepts demonstrated include:

- Fetch API and asynchronous data loading
- GeoJSON parsing and visualization
- DOM manipulation
- Event handling
- Array filtering and iteration
- Dynamic UI updates
- Template literals
- Error handling
- Leaflet layers and popups

## Data

Green-space data was obtained from **OpenStreetMap** using the **Overpass API**.

Map tiles and geographic data © OpenStreetMap contributors.

## Repository Structure

```text
munich-green-space-explorer/
├── css/
│   └── style.css
├── data/
│   └── green-spaces.geojson
├── js/
│   └── app.js
├── index.html
├── LICENSE
└── README.md

```

## Author

**Maedeh Jebelli**  
Geomatics Engineering · GIS · Geospatial Data Analysis
