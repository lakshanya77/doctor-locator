function locateDoctors() {
  const location = document.getElementById('locationInput').value;
  if (!location) {
    alert("Please enter a location");
    return;
  }
  const query = encodeURIComponent('doctors near ' + location);
  const mapFrame = document.getElementById('map');
  mapFrame.innerHTML = `<iframe width="100%" height="100%" style="border:0" loading="lazy" allowfullscreen
    src="https://www.google.com/maps/embed/v1/search?q=${query}&key=YOUR_API_KEY"></iframe>`;
}
