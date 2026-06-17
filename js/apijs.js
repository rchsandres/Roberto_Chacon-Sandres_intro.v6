const body = document.getElementsByTagName("body")[0];
const footer = document.createElement("footer");
body.appendChild(footer);

const today = new Date();
let thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerHTML = `&copy; Roberto Chacon-Sandres ${thisYear}`;
footer.appendChild(copyright);

const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=41.85&longitude=-87.65&hourly=temperature_2m,wind_speed_10m";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const hourlyTemps = data.hourly.temperature_2m;
    const hourlyWind = data.hourly.wind_speed_10m;

    // --- Endpoint 1: Temperature ---
    const weatherList = document.querySelector("#weather ul");

    if (hourlyTemps.length === 0) {
      const li = document.createElement("li");
      li.innerText = "No temperature data found";
      weatherList.appendChild(li);
    } else {
      for (let i = 0; i < hourlyTemps.length; i++) {
        const li = document.createElement("li");
        li.innerText = `Hour ${i + 1}: ${hourlyTemps[i]}°C`;
        weatherList.appendChild(li);
      }
    }

    // --- Endpoint 2: Wind Speed ---
    const windList = document.querySelector("#wind ul");

    if (hourlyWind.length === 0) {
      const li = document.createElement("li");
      li.innerText = "No wind data found";
      windList.appendChild(li);
    } else {
      for (let i = 0; i < hourlyWind.length; i++) {
        const li = document.createElement("li");
        li.innerText = `Hour ${i + 1}: ${hourlyWind[i]} km/h`;
        windList.appendChild(li);
      }
    }
  })
  .catch(error => {
    console.error("Error:", error);

    const sections = ["#weather ul", "#wind ul"];
    sections.forEach(selector => {
      const list = document.querySelector(selector);
      const li = document.createElement("li");
      li.innerText = "Error fetching data: " + error.message;
      list.appendChild(li);
    });
  });