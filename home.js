// const apiKey = "3945d5ffeed3814f174dc627b1d3bdcc";
// // const apiKey = "edcccd400d30778e5ad6e9b4aee8f925";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=3945d5ffeed3814f174dc627b1d3bdcc&q=";
// const weatherIcon = document.querySelector(".weather-icon");


// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");


// async function checkWeather(city){


//     const response = await fetch(apiUrl + city + "&units=metric");

//     if(response.status == 404){
//         document.querySelector(".error").style.display = "block";
//         document.querySelector(".weather").style.display = "none";
//     }
//     else{
//         var data = await response.json();

//         document.querySelector(".city").innerHTML = data.name;
//         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c" ; 
//         document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
//         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        
//         if(data.weather[0].main == "Clouds"){
//             weatherIcon.src = "weather-app-img/images/clouds.png"
//         }
//         else if(data.weather[0].main == "Clear"){
//             weatherIcon.src = "weather-app-img/images/clear.png"
//         } 
//         else if(data.weather[0].main == "Rain"){
//             weatherIcon.src = "weather-app-img/images/rain.png"
//         } 
//         else if(data.weather[0].main == "Drizzle"){
//             weatherIcon.src = "weather-app-img/images/drizzle.png"
//         } 
//         else if(data.weather[0].main == "Mist"){
//             weatherIcon.src = "weather-app-img/images/mist.png"
//         } 

//         document.querySelector(".weather").style.display = "block";
//         document.querySelector(".error").style.display = "none";
//     }
// }
// searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
// })