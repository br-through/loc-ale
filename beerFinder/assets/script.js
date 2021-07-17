  var Chicago = [];
  var NewYorkCity = [];
  var LosAngeles = [];
  var Miami = [];
  var Austin = [];
  var SaintLouis = [];
  var Milwaukee = [];
  var apiClientSecret = "ebBv3wMQ8trka5gzeIW07QRDLbs24p9sjizxJ5XN"
  
  $.ajax({
      url: "https://api.openbrewerydb.org/breweries?by_city=san_diego",
      method: "GET"
  }).then(function (response) {
    console.log(response);
  });
  

  $(document).ready(function(){
    $('.parallax').parallax();
  });
  
  
  