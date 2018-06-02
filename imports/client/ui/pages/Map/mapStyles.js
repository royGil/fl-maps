const mapStyles = [
  {
    'featureType': 'all',
    'elementType': 'all',
    'stylers': [
      {
        'saturation': '100'
      },
      {
        'gamma': '0.50'
      },
      {
        'weight': '1.00'
      }
    ]
  },
  {
    'featureType': 'all',
    'elementType': 'labels.icon',
    'stylers': [
      {
        'weight': '4.00'
      }
    ]
  },
  {
    featureType: 'poi',
    stylers: [
      { visibility: 'off' }
    ]
  },
  {
    'featureType': 'administrative.country',
    'elementType': 'all',
    'stylers': [
      {
        'weight': '0.4'
      },
      {
        'hue': '#b9ff00'
      }
    ]
  },
  {
    'featureType': 'administrative.country',
    'elementType': 'labels',
    'stylers': [
      {
        'weight': '4.00'
      }
    ]
  },
  {
    'featureType': 'administrative.province',
    'elementType': 'all',
    'stylers': [
      {
        'hue': '#b9ff00'
      },
      {
        'lightness': '0'
      }
    ]
  },
  {
    'featureType': 'administrative.locality',
    'elementType': 'all',
    'stylers': [
      {
        'weight': '3'
      },
      {
        'lightness': '0'
      }
    ]
  },
  {
    'featureType': 'administrative.locality',
    'elementType': 'labels.text',
    'stylers': [
      {
        'weight': '1.00'
      }
    ]
  },
  {
    'featureType': 'administrative.neighborhood',
    'elementType': 'all',
    'stylers': [
      {
        'gamma': '1.97'
      },
      {
        'lightness': '0'
      },
      {
        'weight': '6.26'
      }
    ]
  },
  {
    'featureType': 'landscape.man_made',
    'elementType': 'geometry',
    'stylers': [
      {
        'lightness': '67'
      },
      {
        'gamma': '1.00'
      },
      {
        'saturation': '100'
      },
      {
        'weight': '2.17'
      },
      {
        'hue': '#0053ff'
      }
    ]
  },
  {
    'featureType': 'landscape.natural',
    'elementType': 'geometry',
    'stylers': [
      {
        'lightness': '0'
      }
    ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'all',
    'stylers': [
      {
        'weight': '1.00'
      },
      {
        'lightness': '-5'
      },
      {
        'hue': '#8bff00'
      },
      {
        'gamma': '1.20'
      },
      {
        'saturation': '12'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry',
    'stylers': [
      {
        'weight': '0.50'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'labels',
    'stylers': [
      {
        'saturation': '33'
      },
      {
        'lightness': '35'
      },
      {
        'weight': '1.00'
      },
      {
        'gamma': '1'
      },
      {
        'visibility': 'off'
      },
      {
        'hue': '#fffa00'
      }
    ]
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'labels.text',
    'stylers': [
      {
        'saturation': '-91'
      },
      {
        'lightness': '0'
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'all',
    'stylers': [
      {
        'visibility': 'simplified'
      },
      {
        'hue': '#ff0000'
      },
      {
        'gamma': '7.50'
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'labels.text',
    'stylers': [
      {
        'hue': '#ff0000'
      },
      {
        'saturation': '0'
      },
      {
        'lightness': '0'
      }
    ]
  },
  {
    'featureType': 'transit',
    'elementType': 'all',
    'stylers': [
      {
        'weight': '0.30'
      },
      {
        'lightness': '0'
      }
    ]
  }
]

export default mapStyles
