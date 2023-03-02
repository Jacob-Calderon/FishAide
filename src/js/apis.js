var apiURLs = [];

navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    apiURLs.push(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=762d4342cd94557823124548bf3668b7`);
    apiURLs.push(`https://www.fishwatch.gov/api/`);
});

