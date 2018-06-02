import { Meteor } from 'meteor/meteor'

export default function getUserPosition (context) {
  /*
    Several methods to get the user's location
  */

  // Get from a different component that has redirected to the map
  if (window.__savedUserLocation) {
    updateState(context, window.__savedUserLocation)
    window.__savedUserLocation = undefined
  }

  // Get from cache
  const savedLocation = sessionStorage.getItem('userLocation')
  if (savedLocation) {
    updateState(context, JSON.parse(savedLocation, (k, v) => {
      return typeof v === 'number' ? parseFloat(v) : v // ensure values are float numbers
    }))
  }

  // Get location from geolcation api
  if (!context.state.userLocation && !savedLocation && !window.__savedUserLocation) {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const latLng = {
        lat: coords.latitude,
        lng: coords.longitude
      }

      if (context._isMounted) { // set/remove on componentDidMount/componentWillUnmount
        updateState(context, latLng)
      }

      storeUserLocation(latLng)
    }, err => {
      /*
        code 1 - user clicked on "Block".
        code 2 - a problem with the geolocation service
        code 3 - timeout
      */

      if (err.code === 2) { // run only if there's a problem with the browser's ability to get location
        Meteor.call('General.getUserLocation', (err, res) => {
          if (!err) {
            storeUserLocation(res)
            updateState(context, res)
          } else {
            context.setState({ userLocationError: true })
          }
        })
      }
    }, { timeout: 7000 }) // if user didn't click "allow" after 7 seconds - timeout
  }
}

const updateState = (context, latLng) => context.setState({
  center: latLng,
  userLocation: latLng,
  zoom: 12
})

export function storeUserLocation (location) {
  sessionStorage.setItem('userLocation', JSON.stringify(location))
  window.__savedUserLocation = location
}
