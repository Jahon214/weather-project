'use strick';

const apiKey = "5587a1affa88cc03e3711fbc2029ed79";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    const data = await response.json();

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        if (response.ok) {
            console.log(data);
    
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        } else {
            console.error("Error:", data.message);
            alert("City not found. Please try again.");
        }
    
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "img/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";

    }
    }


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
