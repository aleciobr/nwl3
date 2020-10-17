const options = {
  dragging: false,
  doubleClickZoom: false,
  touchZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

const map = L.map('mapid', options).setView([-27.2165989, -49.6367517], 16);

L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'sk.eyJ1IjoibG9wZXMtbGVhbmRybyIsImEiOiJja2dkN3BnZ2cwY3cwMnFxZjIwYjlkOGFoIn0.NfL0mYq3HUhFo_tZcDp2lQ',
  }
).addTo(map);

const icon = L.icon({
  iconUrl: '../public/assets/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

L.marker([-27.2165989, -49.6367517], { icon }).addTo(map);

function selectImage(event) {
  const button = event.currentTarget;

  const buttons = document.querySelectorAll('.images button');
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove('active');
  }

  const image = button.children[0];
  const imageContainer = document.querySelector('#orphanage-details > img');

  imageContainer.src = image.src;

  button.classList.add('active');
}
