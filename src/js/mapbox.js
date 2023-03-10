
    let myMap = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiamFjb2JjYWxkZXJvbiIsImEiOiJjbGJjczRndnQwZzRhM3FueW1yYXlyZnI5In0.xrf8i3E4J2mPeYNSmK907A'
}).addTo(myMap);


const openWeatherApiKey = '762d4342cd94557823124548bf3668b7';
const fishSpeciesApiKey = 'cf3e6637a8msh49b20dff1bcef1bp12f797jsn986bc2e098ed';

// Function to get current weather for user's location
async function getCurrentWeather() {
    const location = await getLocation();
    const { latitude, longitude } = location.coords;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherApiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const weather = {
        description: data.weather[0].description,
        temperature: data.main.temp,
    };
    return weather;
}

// Function to get user's location
function getLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
            reject(new Error('Geolocation not supported'));
        }
    });
}

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cf3e6637a8msh49b20dff1bcef1bp12f797jsn986bc2e098ed',
            'X-RapidAPI-Host': 'fish-species.p.rapidapi.com'
        }
    };

    fetch('https://fish-species.p.rapidapi.com/fish_api/fishes', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
