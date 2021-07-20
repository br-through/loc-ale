const googleMapsApi = "AIzaSyA8FUlg5PThX8oT4_Vyqb7kd-dN_nvCEeM";

//on click event for submit button
// $("#submitBtn").click(function (event) {
//   event.preventDefault();
//   console.log("clicked")
// })
//Google Maps JS API (do not change function name)
let map;
function initMap() {

  //possible ask user for their location for that to be the input here. 
  var center = {
    center: { lat: 41.881, lng: -87.623 },
    zoom: 11
  }
  map = new google.maps.Map(document.getElementById("map"), center);

  var geocoder = new google.maps.Geocoder();
  document.getElementById("submitBtn").addEventListener("click", function () {
    geocodeLocation(geocoder, map);
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
  fetch("https://api.openbrewerydb.org/breweries?per_page=30&by_city=" + citySearched)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      for (i = 0; i < data.length; i++) {
        var namesOfBrewery= data[i].name;
        var addressOfBrewery = data[i].street;
        console.log( addressOfBrewery)
        var longitude = JSON.parse(data[i].longitude);
        // console.log(typeof longitude)
        var latitude = JSON.parse(data[i].latitude);
        //go back and dbl check to see if any names of brewery are null. 
        if (longitude != null && latitude != null && addressOfBrewery!=null && namesOfBrewery) {
          const addBeerMarker = new google.maps.Marker({
            position: {
              lat: latitude,
              lng: longitude
            },
            map: map,
            icon: "/assets/images/favicon-32x32.png"
          })
          //possibly add website of brewery 
          //fix size of info window and only OPEN on click--rn it opens automatically. 
          var contentElements =
            '<h4 id="breweryName">' + namesOfBrewery + '</h4>' + '<h4 id="address">'+ addressOfBrewery + '</h4>';

          const infowindow = new google.maps.InfoWindow({
            content: contentElements
          });
          
          infowindow.open({
            anchor: addBeerMarker,
            map,
            shouldFocus: false,
          });
          addBeerMarker.addListener("click", infoWindowOnMarker)

          //this might be where i have to move the infowindow code so that the window opens on click
        }
      }

    })
};

// function infoWindowOnMarker() {
//   console.log("this")

// }
//CAN STILL USE THIS AS SOON AS GOOGLE MAP LAUNCHES 
// function getCurrentLocation(){
  //     if (navigator.geolocation) {
  //         navigator.geolocation.getCurrentPosition(showPosition);
  //       } else {
  //         alert("Geolocation is not supported by this browser.");
  //       }
  //     }
  //     function showPosition(position) {
  //       var lat = position.coords.latitude;
  //       // console.log("lat" +lat)
  //       var lng = position.coords.longitude;
  //       // console.log("long."+ lng)
  //       map.setCenter(new google.maps.LatLng(lat, lng));
  //     }
  // getCurrentLocation();