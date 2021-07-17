//Article variables
var art1 = document.getElementById("art1");
var art2 = document.getElementById("art2");
var art3 = document.getElementById("art3");
var art4 = document.getElementById("art4");
var art5 = document.getElementById("art5");

//Button Variables
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");


fetch("https://newsapi.org/v2/everything?qInTitle=brewery&apiKey=72c018b38a3d452c8e0043c5c14772ee")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        art1.innerHTML=`<span class="deep-orange-text">${data.articles[0].title}</span>`;
        art1.nextElementSibling.textContent=data.articles[0].description;
        btn1.setAttribute("href", data.articles[0].url);
        art2.innerHTML=`<span class="deep-orange-text">${data.articles[1].title}</span>`;
        art2.nextElementSibling.textContent=data.articles[1].description;
        btn2.setAttribute("href", data.articles[1].url);
        art3.innerHTML=`<span class="deep-orange-text">${data.articles[2].title}</span>`;
        art3.nextElementSibling.textContent=data.articles[2].description;
        btn3.setAttribute("href", data.articles[2].url);
        art4.innerHTML=`<span class="deep-orange-text">${data.articles[3].title}</span>`;
        art4.nextElementSibling.textContent=data.articles[3].description;
        btn4.setAttribute("href", data.articles[3].url);
        art5.innerHTML=`<span class="deep-orange-text">${data.articles[4].title}</span>`;
        art5.nextElementSibling.textContent=data.articles[4].description;
        btn5.setAttribute("href", data.articles[4].url);
    });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });