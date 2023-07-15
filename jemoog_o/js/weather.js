const API_KEY = "47e5b559fe0a2e2b0e51cfe5a5a864b9";


function onFeOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `data.weather[0].main / ${data.main.temp}`;
    });

}
function onFeGeoOk() {
    alert("Can't find you. No Weather fot you.");
}

navigator.geolocation.getCurrentPosition(onFeOk, onFeGeoOk);