document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.querySelector("espe-search-input").inputValue;
  getWeather(city)
});

async function getWeather(city) {
  const apiKey = "122e281411467917852cca1a88bc5b49"; // OpenWeather u otro
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

  const res = await fetch(url);
  console.log(res)
  const data = await res.json();

  renderWeather(data);
}

function renderWeather(data) {
  const result = document.getElementById("weatherResult");
  result.innerHTML = ""; // Limpiar resultados anteriores

  const card = document.createElement("sl-card");

  // Contenido de la tarjeta
  card.innerHTML = `
    <h2>${data.name}</h2>
    <img class="weather-icon" 
         src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" 
         alt="Icono clima">
    <p class="temp">${data.main.temp}°C</p>
    <p class="condition">${data.weather[0].description}</p>
  `;

  // Aplicar estilo dinámico según temperatura
  if (data.main.temp >= 25) {
    card.classList.add("hot");
  } else if (data.main.temp <= 15) {
    card.classList.add("cold");
  }

  result.appendChild(card);
}

window.addEventListener("load", async () => {
  // Registrar SW
  if (navigator.serviceWorker) {
    try {
      const res = await navigator.serviceWorker.register("./service-worker.js");
      console.log("Service Worker registrado correctamente", res);
    } catch (err) {
      console.error("Ocurrió un error en el registro del service worker", err);
    }
  }

});

// Botón para instalar app
window.addEventListener('load', async () => {
  const bannerInstall = document.querySelector("#banner-install");
  bannerInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const res = await deferredPrompt.userChoice;
      if (res.outcome == 'accepted') {
        console.log("Usuario aceptó la instalación del prompt");
      } else {
        console.log('Rechazó la instalación');
      }
    }
  });
});
