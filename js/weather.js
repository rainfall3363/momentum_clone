const API_KEY = "2fbda5a95485133641106281909f31ec";

function onGeoSucc(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = data.weather[0].main;
            city.innerText = data.name;
        });
}
function onGeoErr() {
    alert("Can't find location. No weather can't be found.");
}

// navigator.geolocation.getCurrentPosition(onGeoSucc, onGeoErr);
