// API Information

const API_KEY = "612c9c103f558f9848feb2430e910936";
let city = "New York";
let state = "NY";

let latitude = "40.730610";
let longitude = "-73.935242";

const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=5&appid=${API_KEY}`;
const fiveDayForecastUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

console.log(fiveDayForecastUrl);

// HTML Selectors

const searchButton = $("#search-button");
const input = $("#city-name");



input.on("change", function (e) {
    city = input.val().trim();
    console.log(city);
});

let history = JSON.parse(localStorage.getItem("searchHistory")) ? JSON.parse(localStorage.getItem("searchHistory")) : []

console.log(history)

searchButton.on("click", function (e) {
    // Append so the search history
    $("#search-history").append(` <button id="search-button" class="btn btn-lg btn-secondary bg-secondary fw-bold mb-3">
   ${city}
  </button>`);
    history.push(city)
    localStorage.setItem('searchHistory', JSON.stringify(history))

    // call API
});


$(document).ready(function () {
    history.map(searchTerm => {
        $("#search-history").append(`<button id="search-button" class="btn btn-lg btn-secondary bg-secondary fw-bold mb-3">
        ${searchTerm}
       </button>`);
    })
})