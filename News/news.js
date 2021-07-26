
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });



fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=brewery&api-key=KGi87Mwa124dH5BN3pAh6YOYwEN1KG0f")
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        art1.innerHTML= data.response.docs[0].headline.main;
        art1.nextElementSibling.textContent=data.response.docs[0].abstract;
        btn1.setAttribute("href", data.response.docs[0].web_url);
        art2.innerHTML= data.response.docs[1].headline.main;
        art2.nextElementSibling.textContent=data.response.docs[1].abstract;
        btn2.setAttribute("href", data.response.docs[1].web_url);
        art3.innerHTML= data.response.docs[2].headline.main;
        art3.nextElementSibling.textContent=data.response.docs[2].abstract;
        btn3.setAttribute("href", data.response.docs[2].web_url);
        art4.innerHTML= data.response.docs[3].headline.main;
        art4.nextElementSibling.textContent=data.response.docs[3].abstract;
        btn4.setAttribute("href", data.response.docs[3].web_url);
        art5.innerHTML= data.response.docs[4].headline.main;
        art5.nextElementSibling.textContent=data.response.docs[4].abstract;
        btn5.setAttribute("href", data.response.docs[4].web_url);
        art6.innerHTML= data.response.docs[5].headline.main;
        art6.nextElementSibling.textContent=data.response.docs[5].abstract;
        btn6.setAttribute("href", data.response.docs[5].web_url);
        art7.innerHTML= data.response.docs[6].headline.main;
        art7.nextElementSibling.textContent=data.response.docs[6].abstract;
        btn7.setAttribute("href", data.response.docs[6].web_url);
        art8.innerHTML= data.response.docs[7].headline.main;
        art8.nextElementSibling.textContent=data.response.docs[7].abstract;
        btn8.setAttribute("href", data.response.docs[7].web_url);

    });




