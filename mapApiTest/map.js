const output = document.getElementById("output");
const status = document.getElementById("status");
const hospitals = document.getElementById("hospitals");
const findHospitalsButton = document.getElementById("find-hospitals");
const routeInfo = document.getElementById("route-info");
const map = L.map("map").setView([20, 0], 2);
const hospitalMarkers = L.layerGroup().addTo(map);
const routeLayer = L.geoJSON(null, { style: { color: "#2563eb", weight: 5 } }).addTo(map);
let currentLocation;

L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
  maxZoom: 19,
  attribution: "Tiles &copy; Esri; hospital data &copy; OpenStreetMap contributors",
}).addTo(map);

// The map is in a CSS grid; calculate its final dimensions after the page is laid out.
requestAnimationFrame(() => map.invalidateSize());

async function loadHospitals(latitude, longitude) {
  // Search within 10 km of the current location.
  const query = `[out:json][timeout:30];
    (nwr[amenity=hospital](around:10000,${latitude},${longitude}););
    out center tags;`;

  try {
    status.textContent = "Searching for hospitals within 10 km…";
    output.textContent = "";
    output.classList.remove("error");
    hospitals.replaceChildren();
    hospitalMarkers.clearLayers();
    routeLayer.clearLayers();
    routeInfo.textContent = "";

    const response = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "data=" + encodeURIComponent(query),
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    const places = result.elements;
    status.textContent = `Found ${places.length} hospital${places.length === 1 ? "" : "s"} within 10 km.`;

    const markerLocations = [];
    if (places.length === 0) {
      hospitals.textContent = "No hospitals were found in this radius.";
    } else {
      places.forEach((place) => {
        const item = document.createElement("li");
        const name = place.tags?.name || "Unnamed hospital";
        const address = [place.tags?.["addr:housenumber"], place.tags?.["addr:street"], place.tags?.["addr:city"]]
          .filter(Boolean)
          .join(" ");
        item.textContent = address ? `${name} — ${address}` : name;
        hospitals.append(item);

        // Nodes use lat/lon; ways and relations use the center returned by Overpass.
        const latitude = place.lat ?? place.center?.lat;
        const longitude = place.lon ?? place.center?.lon;
        if (latitude !== undefined && longitude !== undefined) {
          const directDistance = calculateDistance(currentLocation.latitude, currentLocation.longitude, latitude, longitude);
          item.textContent = `${name} — ${formatDistance(directDistance)} away${address ? ` · ${address}` : ""}`;
          const marker = L.circleMarker([latitude, longitude], {
            radius: 9,
            color: "#ffffff",
            weight: 2,
            fillColor: "#e53935",
            fillOpacity: 1,
          })
            .addTo(hospitalMarkers)
            .bindPopup(`<strong>${escapeHtml(name)}</strong>${address ? `<br>${escapeHtml(address)}` : ""}`);
          const selectHospital = () => showRoute(latitude, longitude, name, marker);
          item.addEventListener("click", selectHospital);
          marker.on("click", selectHospital);
          markerLocations.push([latitude, longitude]);
        }
      });

      if (markerLocations.length > 0) {
        // Keep this compact overview wide enough to show every returned hospital together.
        map.fitBounds(markerLocations, { padding: [20, 20], maxZoom: 13 });
      }
    }

    output.textContent = JSON.stringify(result, null, 2);
    console.log(result);
  } catch (error) {
    status.textContent = "Unable to load map data.";
    output.textContent = error.message;
    output.classList.add("error");
    console.error(error);
  }
}

function escapeHtml(text) {
  const element = document.createElement("div");
  element.textContent = text;
  return element.innerHTML;
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const earthRadiusMetres = 6371000;
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const deltaLat = toRadians(lat2 - lat1);
  const deltaLon = toRadians(lon2 - lon1);
  const a = Math.sin(deltaLat / 2) ** 2
    + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(deltaLon / 2) ** 2;
  return earthRadiusMetres * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatDistance(metres) {
  return metres >= 1000 ? `${(metres / 1000).toFixed(1)} km` : `${Math.round(metres)} m`;
}

async function showRoute(latitude, longitude, hospitalName, marker) {
  if (!currentLocation) return;

  routeInfo.textContent = `Finding a driving route to ${hospitalName}...`;
  routeLayer.clearLayers();

  try {
    const start = `${currentLocation.longitude},${currentLocation.latitude}`;
    const destination = `${longitude},${latitude}`;
    const response = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${start};${destination}?overview=full&geometries=geojson`
    );
    if (!response.ok) throw new Error("The routing service is unavailable.");

    const data = await response.json();
    const route = data.routes?.[0];
    if (!route) throw new Error("No driving route was found.");

    routeLayer.addData({ type: "Feature", properties: {}, geometry: route.geometry });
    map.fitBounds(routeLayer.getBounds(), { padding: [30, 30] });
    marker.openPopup();
    routeInfo.textContent = `Route to ${hospitalName}: ${formatDistance(route.distance)} · about ${Math.ceil(route.duration / 60)} min by car.`;
  } catch (error) {
    routeInfo.textContent = `Could not load a driving route: ${error.message}`;
  }
}

function getCurrentLocation() {
  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by this browser.";
    return;
  }

  findHospitalsButton.disabled = true;
  status.textContent = "Requesting your location…";
  output.classList.remove("error");

  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      findHospitalsButton.disabled = false;
      currentLocation = { latitude: coords.latitude, longitude: coords.longitude };
      map.setView([coords.latitude, coords.longitude], 13);
      L.circleMarker([coords.latitude, coords.longitude], {
        radius: 8,
        color: "#2563eb",
        fillOpacity: 0.8,
      }).addTo(map).bindPopup("Your location");
      loadHospitals(coords.latitude, coords.longitude);
    },
    (error) => {
      findHospitalsButton.disabled = false;
      status.textContent = `Location unavailable: ${error.message}`;
      output.textContent = "Allow location access, then try again. Geolocation usually requires HTTPS or localhost.";
      output.classList.add("error");
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
  );
}

findHospitalsButton.addEventListener("click", getCurrentLocation);
