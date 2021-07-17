var citySearched = $("#citySearched").val();
const googleMapsApi= "AIzaSyA8FUlg5PThX8oT4_Vyqb7kd-dN_nvCEeM";


function breweryAPI(){
$.ajax({
    url: `https://api.openbrewerydb.org/breweries?by_dist=38.8977,-77.0365`,
    method: "GET",
})
.then(function(data){
    console.log(data)
    for( i=0; i<data.length; i++){
    localStorage.setItem(data[i].name + " LAT", data[i].latitude)
    localStorage.setItem(data[i].name + " LON", data[i].longitude)
    
    }
   
})};
//on click event for submit button
$("#submitBtn").click(function(){
    console.log("clicked")
    breweryAPI();
})
//do I need to converty the city Searched value to long and lat?

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
};
//MAP defaults to your current location using HTML5 geolocation
function getCurrentLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }
    function showPosition(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      map.setCenter(new google.maps.LatLng(lat, lng));
    }
getCurrentLocation();



