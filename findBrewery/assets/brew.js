const googleMapsApi = "AIzaSyA8FUlg5PThX8oT4_Vyqb7kd-dN_nvCEeM";

//Google Maps JS API (do not change function name)
let map;
function initMap() {
  // function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      M.toast({html: "Geolocation is not supported by this browser. Search a city to see the breweries populate on the map.", id:"toast-container"})
    }
  }

  function showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    // center is required for google maps to work, set the lat and lng to current users position
    var center = { center: { lat: lat, lng: lng }, zoom: 11 }

    map = new google.maps.Map(document.getElementById("map"), center);

  // }
  // getCurrentLocation();

  //possible ask user for their location for that to be the input here. 
  // var center = {
  //   center: { lat: 44.881, lng: -1.623 },
  //   zoom: 11
  // }

  // map = new google.maps.Map(document.getElementById("map"), center);

  var geocoder = new google.maps.Geocoder();
  $("#submitBtn").on("click", function () {
    if ($("#citySearched").val() === ""){
      M.toast({html: 'Enter a valid city', id:"toast-container"})
    } else{
      geocodeLocation(geocoder, map);
    }

  })
};

//user searches their city, maps moves to location
function geocodeLocation(geocoder, resultsMap) {
  geocoder.geocode({ address: $("#citySearched").val() })
    .then(({ results }) => {
      resultsMap.setCenter(results[0].geometry.location);
    });
  breweryAPI();
};

function breweryAPI() {
  var citySearched = $("#citySearched").val();
  //changed amt of data coming back due to incomplete information returning
  //do this w an ajax call to make this more consistent w jquery 
  fetch("https://api.openbrewerydb.org/breweries?per_page=30&by_city=" + citySearched)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      for (i = 0; i < data.length; i++) {
        var namesOfBrewery = data[i].name;
        var addressOfBrewery = data[i].street;
        var longitude = JSON.parse(data[i].longitude); 
        var latitude = JSON.parse(data[i].latitude);
        //some breweries in the data base have null values for addresses/longitude/latitude
        if (longitude != null && latitude != null && addressOfBrewery != null) {
          const addBeerMarker = new google.maps.Marker({
            position: {
              lat: latitude,
              lng: longitude
            },
            map: map,
            icon: "/assets/images/favicon-32x32.png"
          })
          //this isnt working, w our w out the city searched parameter in the if statement.
        //  if(data[i].length < 1 ){
        //   alert("No Breweries found in this city, search another city.")
        // }
          var contentElements =
            '<h6 id="breweryName">' + namesOfBrewery + '</p>' + '<h6 id="address">' + addressOfBrewery + '</p>';

          const infowindow = new google.maps.InfoWindow({
            content: contentElements
          });

          addBeerMarker.addListener("click", function () {
            console.log(this)
            infowindow.open({
              anchor: addBeerMarker,
              map,
              shouldFocus: false,
            });
          })
        }
      }

    })
};
