const map = L.map('mapid').setView([-27.2165989, -49.6367517], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
  iconUrl: '../public/assets/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 200,
}).setContent(
  'Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/assets/images/arrow-white.svg"></a>'
);

L.marker([-27.2165989, -49.6367517], { icon }).addTo(map).bindPopup(popup);
