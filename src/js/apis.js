    //
    // let apiURLs = [];
    //
    // navigator.geolocation.getCurrentPosition(function (position) {
    //     let latitude = position.coords.latitude;
    //     let longitude = position.coords.longitude;
    //
    //     apiURLs.push(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=762d4342cd94557823124548bf3668b7`);
    //     apiURLs.push(`fish-species.p.rapidapi.com`);
    //     console.log(apiURLs)
    // });
    //

    const axios = require('axios');

    const apiUrls = [
        'https://api.example.com/endpoint1',
        'https://api.example.com/endpoint2',
        'https://api.example.com/endpoint3',
        'https://api.example.com/endpoint4',
        'https://api.example.com/endpoint5'
    ];

    const apiRequests = apiUrls.map(url => axios.get(url));

    Promise.all(apiRequests)
        .then(responses => {
            // handle responses here
        })
        .catch(error => {
            // handle errors here
        });