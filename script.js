const translations = {
  en: {
    appTitle: "Weather App",
    enterCity: "Enter city",
    getWeather: "Get Weather",
    temperature: "Temperature",
    humidity: "Humidity",
    wind: "Wind Speed",
    description: "Weather Description"
  },
  hi: {
    appTitle: "मौसम ऐप",
    enterCity: "शहर दर्ज करें",
    getWeather: "मौसम प्राप्त करें",
    temperature: "तापमान",
    humidity: "नमी",
    wind: "हवा की गति",
    description: "मौसम विवरण"
  },
  kn: {
    appTitle: "ಹವಾಮಾನ ಅಪ್ಲಿಕೇಶನ್",
    enterCity: "ನಗರ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
    getWeather: "ಹವಾಮಾನ ಪಡೆದುಕೊಳ್ಳಿ",
    temperature: "ತಾಪಮಾನ",
    humidity: "ಆದ್ರತೆ",
    wind: "ಗಾಳಿ ವೇಗ",
    description: "ಹವಾಮಾನ ವಿವರಣೆ"
  }
};

const updateLanguage = (lang) => {
  document.getElementById("appTitle").textContent = translations[lang].appTitle;
  document.getElementById("enterCityLabel").textContent = translations[lang].enterCity;
  document.getElementById("getWeatherBtn").textContent = translations[lang].getWeather;
  document.getElementById("temperatureLabel").textContent = translations[lang].temperature + ":";
  document.getElementById("humidityLabel").textContent = translations[lang].humidity + ":";
  document.getElementById("windLabel").textContent = translations[lang].wind + ":";
  document.getElementById("descriptionLabel").textContent = translations[lang].description + ":";
};

document.getElementById("languageSelector").addEventListener("change", (e) => {
  updateLanguage(e.target.value);
});

document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  const lang = document.getElementById("languageSelector").value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=${lang}&appid=1f4b734807df08dea218ee736459f024`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("tempVal").textContent = `${data.main.temp} °C`;
      document.getElementById("humidityVal").textContent = `${data.main.humidity} %`;
      document.getElementById("windVal").textContent = `${data.wind.speed} m/s`;
      document.getElementById("descVal").textContent = data.weather[0].description;
    })
    .catch(err => {
      alert("Oops! City not found.");
      console.error(err);
    });
});

// Set default language
updateLanguage("en");