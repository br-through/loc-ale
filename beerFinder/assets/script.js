  var Chicago = [];
  var NewYorkCity = [];
  var LosAngeles = [];
  var Miami = [];
  var Austin = [];
  var SaintLouis = [];
  var Milwaukee = [];
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.kroger.com/v1/locations",
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Authorization": "Basic {loc-ale-80ea2dcd3ae9d85025ff2456d29800d95347972863607474486:ebBv3wMQ8trka5gzeIW07QRDLbs24p9sjizxJ5XN}"
    }
  }

  $(document).ready(function(){
    $('.parallax').parallax();
  });
  
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });
  
