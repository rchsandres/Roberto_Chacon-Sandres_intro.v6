//footer code
const body = document.getElementsByTagName("body")[0];
const footer = document.createElement("footer");

body.appendChild(footer);

const today = new Date();
let thisYear = today.getFullYear();

const copyright = document.createElement("p");

copyright.innerHTML = `&copy; Roberto Chacon-Sandres ${thisYear}`;

footer.appendChild(copyright);

//weather api code
const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=41.85&longitude=-87.65&current=temperature_2m,wind_speed_10m&hourly=temperature_2m";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const weatherSection = document.querySelector("#weather");
    const weatherList = weatherSection.querySelector("ul");

    const hourlyTemps = data.hourly.temperature_2m;

    if (hourlyTemps.length === 0) {
      const li = document.createElement("li");
      li.innerText = "No weather data found";
      weatherList.appendChild(li);
    } else {
      for (let i = 0; i < hourlyTemps.length; i++) {
        const li = document.createElement("li");
        li.innerText = `Hour ${i + 1}: ${hourlyTemps[i]}°C`;
        weatherList.appendChild(li);
      }
    }
  })
  .catch(error => {
    console.error("Error:", error);
    const weatherSection = document.querySelector("#weather");
    const weatherList = weatherSection.querySelector("ul");
    const errorMessage = document.createElement("li");
    errorMessage.innerText = "Error fetching weather: " + error.message;
    weatherList.appendChild(errorMessage);
  });

