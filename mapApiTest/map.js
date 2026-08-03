const output = document.getElementById("output");
const status = document.getElementById("status");
const hospitals = document.getElementById("hospitals");
const findHospitalsButton = document.getElementById("find-hospitals");
const map = L.map("map").setView([20, 0], 2);
const hospitalMarkers = L.layerGroup().addTo(map);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
}).addTo(map);

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
          L.marker([latitude, longitude])
            .addTo(hospitalMarkers)
            .bindPopup(`<strong>${escapeHtml(name)}</strong>${address ? `<br>${escapeHtml(address)}` : ""}`);
          markerLocations.push([latitude, longitude]);
        }
      });

      if (markerLocations.length > 0) {
        map.fitBounds(markerLocations, { padding: [30, 30], maxZoom: 14 });
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
