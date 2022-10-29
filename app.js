let general = document.getElementById("general");
let technology = document.getElementById("technology");
let business = document.getElementById("business");
let entertainment = document.getElementById("entertainment");
let sports = document.getElementById("sports");
let newsType = document.getElementById("newsType");
let newsdetails = document.getElementById("newsdetails");


var newsData = [];
//API
const apiKey = "cad09ec2291949229dbbacc6152ebe4a";
const allNews =  "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const generalNews = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const technologyNews = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=";
const businessNews = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const entertainmentNews = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const sportsNews = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";

window.onload=  function (){
    newsType.innerHTML = "<h2>HEADLINES</h2>"
    fetchHeadlines()
}

general.addEventListener("click",function(){
    newsType.innerHTML = "<h2>General News</h2>"
    fetchGeneralNews();
});

technology.addEventListener("click",function(){
    newsType.innerHTML = "<h2>Technology News</h2>"
    fetchTechnologyNews();
})

business.addEventListener("click" , ()=>{
    newsType.innerHTML = "<h2>Business News</h2>"
    fetchBusinessNews();
})

entertainment.addEventListener("click" , ()=>{
    newsType.innerHTML = "<h2>Entertainment News</h2>"
    fetchEntertainmentNews();
})

sports.addEventListener("click",()=>{
newsType.innerHTML = "<h2>Sports News</h2>"
fetchSportsNews();
})


const fetchHeadlines = async()=>{
    const response = await fetch(allNews + apiKey);
    newsData = [];
    if( response.status >= 200 && response.status<300){
        const myJson = await response.json()
        newsData = myJson.articles;
    }else{
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return; 
    }
    displayNews();
}
const fetchGeneralNews = async()=>{
    const response = await fetch(generalNews + apiKey);
    newsData = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json()
        newsData = myJson.articles;
    }else{
        console.log(response.status , response.statusText);
        newsdetails.innerHTML = "<h5>No data found</h5>"
        return;
    }
    displayNews()
}

const fetchTechnologyNews = async()=>{
    const response = await fetch(technologyNews + apiKey);
    newsData = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json()
        newsData = myJson.articles;
    }else{
        console.log(response.status , response.statusText);
        newsdetails.innerHTML = "<h5>No data found</h5>"
        return;
    }
    displayNews()
}

const fetchBusinessNews = async()=>{
    const response = await fetch(businessNews + apiKey);
    newsData = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json()
        newsData = myJson.articles;
    }else{
        console.log(response.status , response.statusText);
        newsdetails.innerHTML = "<h5>No data found</h5>"
        return;
    }
    displayNews()
}

const fetchEntertainmentNews = async()=>{
    const response = await fetch(entertainmentNews + apiKey);
    newsData = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json()
        newsData = myJson.articles;
    }else{
        console.log(response.status , response.statusText);
        newsdetails.innerHTML = "<h5>No data found</h5>"
        return;
    }
    displayNews()
}

const fetchSportsNews = async()=>{
    const response = await fetch(sportsNews + apiKey);
    newsData = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json()
        newsData = myJson.articles;
    }else{
        console.log(response.status , response.statusText);
        newsdetails.innerHTML = "<h5>No data found</h5>"
        return;
    }
    displayNews()
}

function displayNews() {

    newsdetails.innerHTML = "";


    newsData.forEach(news => {

        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });

}
