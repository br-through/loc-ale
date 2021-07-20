var randomIndex = Math.floor((Math.random() * 40) + 1);

$.ajax({
  url: "https://api.openbrewerydb.org/breweries?by_city=chicago&per_page=50",
  method: "GET"
}).then(function (data) {
  console.log(data);
  console.log(randomIndex);

  for (let i = 0; i < 10; i++){
    $(`#breweryName${[i]}`).text(data[i+randomIndex].name);
    
    if (data[i+randomIndex].website_url === null){
      $(`#breweryButton${[i]}`).addClass("disabled")
    } 
    else {
    $(`#breweryButton${[i]}`).attr("href", `${data[i+randomIndex].website_url}`);
    }


    if (data[i+randomIndex].brewery_type === "micro"){
      $(`#breweryImg${[i]}`).attr("src", "../assets/images/OfficalLocaleLogo.png")
      $(`#breweryP${[i]}`).text(`${data[i+randomIndex].name} is located in ${data[i+randomIndex].city}, ${data[i+randomIndex].state} and is a micro brewery. Micro breweries tend to be larger in scale, but smaller than large breweries like AB InBev. In order to be considered a micro brewery a brewery must produce 15,000 barrels of beer or less per year. Many micro breweries brew their beer to craft brewing standards but can't call it craft beer because of the low volume produced.`)
    } 
    else if (data[i+randomIndex].brewery_type === "nano"){
      $(`#breweryImg${[i]}`).attr("src", "../assets/images/OfficalLocaleLogo.png")
      $(`#breweryP${[i]}`).text(`${data[i+randomIndex].name} is located in ${data[i+randomIndex].city}, ${data[i+randomIndex].state}. Nano breweries are small time operations that often produce 3 or less barrels of beer per batch. Often times these brews are one time productions that have to be purchased at the time of bottling/canning from the brewery itself. Nano breweries are commonly run by individual brewers.`)
    }
    else if (data[i+randomIndex].brewery_type === "regional"){
      $(`#breweryImg${[i]}`).attr("src", "../assets/images/OfficalLocaleLogo.png")
      $(`#breweryP${[i]}`).text(`${data[i+randomIndex].name} is located in ${data[i+randomIndex].city}, ${data[i+randomIndex].state}. Regional breweries are my dad.`)
    }
    else if (data[i+randomIndex].brewery_type === "large"){
      $(`#breweryImg${[i]}`).attr("src", "../assets/images/OfficalLocaleLogo.png")
      $(`#breweryP${[i]}`).text(`${data[i+randomIndex].name} is located in ${data[i+randomIndex].city}, ${data[i+randomIndex].state}. I slap my forehead at large breweries.`)
    }
    else if (data[i+randomIndex].brewery_type === "brewpub"){
      $(`#breweryImg${[i]}`).attr("src", "../assets/images/OfficalLocaleLogo.png")
      $(`#breweryP${[i]}`).text(`${data[i+randomIndex].name} is located in ${data[i+randomIndex].city}, ${data[i+randomIndex].state}. Last week I ate at a brewpub. It was great.`)
    }
    else if (data[i+randomIndex].brewery_type === "planning"){
      $(`#breweryImg${[i]}`).attr("src", "../assets/images/OfficalLocaleLogo.png")
      $(`#breweryP${[i]}`).text(`${data[i+randomIndex].name} is located in ${data[i+randomIndex].city}, ${data[i+randomIndex].state}. I plan to finish this textcontent, at somepoint.`)
    }
    else if (data[i+randomIndex].brewery_type === "contract"){
      $(`#breweryImg${[i]}`).attr("src", "../assets/images/OfficalLocaleLogo.png")
      $(`#breweryP${[i]}`).text(`${data[i+randomIndex].name} is located in ${data[i+randomIndex].city}, ${data[i+randomIndex].state}. Can i contract someone out to finish this project for me?`)
    }
    else if (data[i+randomIndex].brewery_type === "proprietor"){
      $(`#breweryImg${[i]}`).attr("src", "../assets/images/OfficalLocaleLogo.png")
      $(`#breweryP${[i]}`).text(`${data[i+randomIndex].name} is located in ${data[i+randomIndex].city}, ${data[i+randomIndex].state}. Proprietor`)
    }
    else if (data[i+randomIndex].brewery_type === "closed"){
      $(`#breweryImg${[i]}`).attr("src", "../assets/images/OfficalLocaleLogo.png")
      $(`#breweryP${[i]}`).text(`${data[i+randomIndex].name} was formerly located in ${data[i+randomIndex].city}, ${data[i+randomIndex].state}. Unfortunately ${data[i+randomIndex].name} closed it's doors and is no longer in operation.`)
      $(`#breweryButton${[i]}`).addClass("disabled")
    }
  }
});

// $.ajax({
//   "Access-Control-Allow-Origin": "https://serpapi.com/search.json?q=Apple&tbm=isch&ijn=0&api_key=955cb11439b5c86c1de91572de2db839ba42448d85d7f0d979f0fd5c8287b39a",
//   // "Access-Control-Request-Method": "GET",
// }).then(function(response){
//   console.log(response)
// })


  $(document).ready(function () {
    $('.parallax').parallax();
    $('.sidenav').sidenav();
  });


 
