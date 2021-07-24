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
      $(`#breweryP${[i]}`).text(`${data[i+randomIndex].name} is located in ${data[i+randomIndex].city}, ${data[i+randomIndex].state}. Regional breweries large scale breweries that produce anywhere from 15,000 to 6,000,000 barrels anually. For comparison, two popular regional brewers are New Belgium Brewing Company and Sierra Nevada Brewing Company, though both of these are on the larger end of the regional brewery spectrum.`)
    }
    else if (data[i+randomIndex].brewery_type === "large"){
      $(`#breweryImg${[i]}`).attr("src", "../assets/images/OfficalLocaleLogo.png")
      $(`#breweryP${[i]}`).text(`${data[i+randomIndex].name} is located in ${data[i+randomIndex].city}, ${data[i+randomIndex].state}. Large breweries are the biggest of all. Producing more than 6,000,000 barrels of beer a year, these breweries house some of the most well known brands across the country. From AB InBev to Molson Coors, these manufacturers and their various lines can be found in just about any local grocer or liquor vendor. Most bars and venues will also have their beers on tap.`)
    }
    else if (data[i+randomIndex].brewery_type === "brewpub"){
      $(`#breweryImg${[i]}`).attr("src", "../assets/images/OfficalLocaleLogo.png")
      $(`#breweryP${[i]}`).text(`${data[i+randomIndex].name} is located in ${data[i+randomIndex].city}, ${data[i+randomIndex].state}. Unlike the various brewery sizes, brewpubs aren't bound by liquor production volume. To be considered a brewpub, a brewery must sell at least 25% of their beer on site as well as a variety of food items. Some larger breweries like Goose Island will have 1 off brewery locations designed specifically to be brewpubs, while their main lines are brewed at closed off locations.`)
    }
    else if (data[i+randomIndex].brewery_type === "planning"){
      $(`#breweryImg${[i]}`).attr("src", "../assets/images/OfficalLocaleLogo.png")
      $(`#breweryP${[i]}`).text(`${data[i+randomIndex].name} is located in ${data[i+randomIndex].city}, ${data[i+randomIndex].state}. This brewery is in it's planning stage and is not yet open.`)
    }
    else if (data[i+randomIndex].brewery_type === "contract"){
      $(`#breweryImg${[i]}`).attr("src", "../assets/images/OfficalLocaleLogo.png")
      $(`#breweryP${[i]}`).text(`${data[i+randomIndex].name} is located in ${data[i+randomIndex].city}, ${data[i+randomIndex].state}. Contract breweries are breweries that brew and package beer for other people/businesses. In some cases these breweries will also rent out their equipment for other brewers to use. This allows small time single batch brewers to produce beer without worrying about the hassle of owning and operating their own brewery. Many well known beers such as Sam Adams got their start through contract brewing. When contract brewing, the brewer must operate as if the facility was their own - maintaining all records and business practices.`)
    }
    else if (data[i+randomIndex].brewery_type === "proprietor"){
      $(`#breweryImg${[i]}`).attr("src", "../assets/images/OfficalLocaleLogo.png")
      $(`#breweryP${[i]}`).text(`${data[i+randomIndex].name} is located in ${data[i+randomIndex].city}, ${data[i+randomIndex].state}. Similarly to Contract Breweries, brewers that operate under a proprietorship are producing beer using someone elses equipment. The difference here is that in a proprietorship the owner of the equipment/brewery is responsible for maintaining the records of ALL beer produced within their facility. Generally 2-3 brewers will enter a proprietorship together under a parent label.  `)
    }
    else if (data[i+randomIndex].brewery_type === "closed"){
      $(`#breweryImg${[i]}`).attr("src", "../assets/images/OfficalLocaleLogo.png")
      $(`#breweryP${[i]}`).text(`${data[i+randomIndex].name} was formerly located in ${data[i+randomIndex].city}, ${data[i+randomIndex].state}. Unfortunately ${data[i+randomIndex].name} closed it's doors and is no longer in operation.`)
      $(`#breweryButton${[i]}`).addClass("disabled")
    }
  }
});


  $(document).ready(function () {
    $('.parallax').parallax();
    $('.sidenav').sidenav();
  });


 
