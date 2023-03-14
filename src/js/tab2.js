// create a marker at the Golden Gate Park coordinates
var marker = new mapboxgl.Marker()
    .setLngLat([-122.4795, 37.7705])
    .addTo(map);

// make an API call to fish-species to get information about local fish species
const apiUrl = 'https://fish-species.p.rapidapi.com/species?latitude=37.7705&longitude=-122.4795';

fetch(apiUrl, {
    headers: {
        'X-RapidAPI-Key': 'cf3e6637a8msh49b20dff1bcef1bp12f797jsn986bc2e098ed'
    }
})
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const species = data[0].species_name;
        const description = data[0].description;
        marker.setPopup(new mapboxgl.Popup({ offset: 25 })
            .setHTML('<h3>Golden Gate Park</h3><p>Local fish species: ' + species + '</p><p>Description: ' + description + '</p>'))
            .togglePopup();
    });
