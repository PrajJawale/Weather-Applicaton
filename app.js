const apikey ="b79e8f13624713ade9478449435003b7"
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weatherIcon = document.querySelector(".weather-icon")

async function checkWheather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    if(data.name == null){
        document.querySelector(".city").innerHTML = "Enter Valid City "
    }

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }
    if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png"
    }
    
    console.log(data)
    document.querySelector(".city").innerHTML = data.name 
    document.querySelector(".temp").innerHTML = data.main.temp + " °C"
    document.querySelector(".humidity").innerHTML = data.main.humidity +" %"
    document.querySelector(".wind").innerHTML = data.wind.speed +" Km/Hr"

   
    document.querySelector(".weather").style.display = "block";
   
    
}

const cityName = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

searchBtn.addEventListener("click",()=>{
    checkWheather(cityName.value)
})