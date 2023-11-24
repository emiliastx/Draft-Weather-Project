//search city and make the h1 text become said city//
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=d04b3afd6c530a652e2bf7f6eofatb73&units=metric`;
  axios.get(apiURL).then(displayCurrentWeather);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

//////

function formatDate(date) {
  return `${formattedDay}, ${hours}:${minutes}`;
}

let currentDate = document.querySelector("#current-date");
let currentTime = new Date();
let minutes = currentTime.getMinutes();
let hours = currentTime.getHours();
let days = currentTime.getDay();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let formattedDay = weekdays[days];

currentDate.innerHTML = `${formattedDay}, ${hours}:${minutes}`;
//////////////////
///////////////
function displayCurrentWeather(response) {
  let cityName = document.querySelector("#city-input");
  let weatherTemp = document.querySelector("#current-temperature");
  let temp = Math.round(response.data.temperature.current);
  cityName.innerHTML = `${response.data.city}, ${response.data.country}`;
  weatherTemp.innerHTML = `${temp}°C`;
}
