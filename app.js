const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.5579564, lng: -73.8703866},
    zoom: 11,
    styles: mapStyle, // https://mapstyle.withgoogle.com/
  });

  map.data.loadGeoJson('locations.json', {idPropertyName: 'locationid'}, (locations) => {
    let panel = document.createElement('div');
    // If the panel already exists, use it. Else, create it and add to the page.
    if (document.getElementById('panel')) {
      panel = document.getElementById('panel');
      // If panel is already open, close it
      if (panel.classList.contains('open')) {
        panel.classList.remove('open');
      }
    } else {
      panel.setAttribute('id', 'panel');
      const body = document.body;
      body.insertBefore(panel, body.childNodes[0]);
    }

    // Clear the previous details
    while (panel.lastChild) {
      panel.removeChild(panel.lastChild);
    }

    // Open the panel
    panel.classList.add('open');



    map.data.forEach(location => {
      console.log(location.j.name);
      const name = document.createElement('p');
      name.classList.add('place');
      name.textContent = location.j.name;
      panel.appendChild(name);
    });
  });

  // Define the custom marker icons, using the store's "category".
  // https://mapicons.mapsmarker.com/
  map.data.setStyle((feature) => {
    return {
      icon: {
        url: `img/icon_${feature.getProperty('category')}.png`,
        scaledSize: new google.maps.Size(32, 32),
      },
    };
  });

  const apiKey = 'AIzaSyDeg00ZjCNYbBK8Yj5Wk0Jlzdt9sA3OQR8';
  const infoWindow = new google.maps.InfoWindow();

  // Show the information for a store when its marker is clicked.
  map.data.addListener('click', (event) => {
    const name = event.feature.getProperty('name');
    const feature1 = event.feature.getProperty('feature1');
    const feature2 = event.feature.getProperty('feature2');
    const feature3 = event.feature.getProperty('feature3');
    const feature4 = event.feature.getProperty('feature4');
    const feature5 = event.feature.getProperty('feature5');
    const position = event.feature.getGeometry().get();
    // const content = `
    //   <img style="float:left; width:200px; margin-top:30px" src="img/logo_${category}.png">
    //   <div style="margin-left:220px; margin-bottom:20px;">
    //     <h2>${name}</h2><p>${description}</p>
    //     <p><b>Open:</b> ${hours}<br/><b>Phone:</b> ${phone}</p>
    //     <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
    //   </div>
    //   `;
    const content = `
      <h2>${name}</h2>
      <ul>
        <li>
          <h3>Feature1</h3>
          <p>${feature1}</p>
        </li>
        <li>
          <h3>Feature2</h3>
          <p>${feature2}</p>
        </li>
        <li>
          <h3>Feature3</h3>
          <p>${feature3}</p>
        </li>
        <li>
          <h3>Feature4</h3>
          <p>${feature4}</p>
        </li>
        <li>
          <h3>Feature5</h3>
          <p>${feature5}</p>
        </li>
      </ul>
    `;

    infoWindow.setContent(content);
    infoWindow.setPosition(position);
    infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
    infoWindow.open(map);
  });

  
}
