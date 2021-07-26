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
    var center = { center: { lat: lat, lng: lng }, zoom: 12 }

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
//user searches their city, maps moves to location using geolocation API
function geocodeLocation(geocoder, resultsMap) {
  geocoder.geocode({ address: $("#citySearched").val() })
    .then(({ results }) => {
      resultsMap.setCenter(results[0].geometry.location);
    });
  breweryAPI();
  $("#citySearched").val('');
};

function breweryAPI() {
  var citySearched = $("#citySearched").val();
  //changed amt of data coming back due to incomplete information returning
  // fetch("https://api.openbrewerydb.org/breweries?per_page=30&by_city=" + citySearched)
  //   .then(function (response) {
  //     return response.json();
  //   })
  $.ajax({
    url: "https://api.openbrewerydb.org/breweries?per_page=30&by_city=" + citySearched,
    method: "GET"
  })
    .then(function (data) {
      console.log(data)
      for (i = 0; i < data.length; i++) {
        var namesOfBrewery = data[i].name;
        var addressOfBrewery = data[i].street;
        var webURL= data[i].website_url;
        var city= data[i].city;
        var state=data[i].state;
        var postalCode=data[i].postal_code;
        var longitude = JSON.parse(data[i].longitude); 
        var latitude = JSON.parse(data[i].latitude);
        //some breweries in the data base have null values for addresses/longitude/latitude
        if (longitude !== null && latitude !== null && addressOfBrewery !== null) {
          const addBeerMarker = new google.maps.Marker({
            position: {
              lat: latitude,
              lng: longitude
            },
            map: map,
            icon: "../assets/images/favicon-32x32.png"
          })
          //this isnt working, w our w out the city searched parameter in the if statement.
        //  if(data[i].lenth = 0 ){
        //   alert("No Breweries found in this city, search another city.")
        // }
          //adding url as a hyperlink if the brewery has a website url in the breweryAPI
            if(webURL !== null){ 
            var contentElements =
              '<a href="'+ webURL+ '" target=_blank id="breweryName">' + namesOfBrewery + '</a>' + '<h6 id="address">' + addressOfBrewery + '</h6>' + '<h6>' + city+', '+ state+" "+ postalCode+'</h6>';
            } if (webURL == null){
              var contentElements=
              '<h6 id="breweryName">' + namesOfBrewery + '</h6>' + '<h6 id="address">' + addressOfBrewery + '</h6>' +'<h6>' + city+', '+ state+" "+ postalCode+'</h6>';
            }
          const infowindow = new google.maps.InfoWindow({
            content: contentElements
          });

          addBeerMarker.addListener("click", function () {
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
//notes
//CHANGE DIMENSIONS OF MAP SO ITS EASIER TO VIEW/ I.E NO SCROLLING?
// AND DONT ALLOW CHANGE VH??
//br-through.github.io/*
