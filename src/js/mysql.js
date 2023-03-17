// Connect to MySQL database
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'fishing_database'
});

connection.connect();

// Retrieve information about fishing trips and catch records
const sql = `SELECT fishing_trip.date, fishing_trip.location, catch.weight, catch.length, fish.species, bait.name
             FROM fishing_trip
                      INNER JOIN catch ON fishing_trip.id = catch.fishing_trip_id
                      INNER JOIN fish ON catch.fish_id = fish.id
                      INNER JOIN bait ON catch.bait_id = bait.id
             WHERE fishing_trip.saltwater = 1 AND bait.type = 'live'`;

connection.query(sql, function (error, results, fields) {
    if (error) {
        console.error(error);
        return;
    }

    if (results.length > 0) {
        // Display retrieved information
        console.log('Fishing trips in saltwater that used live bait:');
        results.forEach(result => {
            console.log(`Date: ${result.date}, Location: ${result.location}, Weight: ${result.weight}, Length: ${result.length}, Species: ${result.species}, Bait: ${result.name}`);
        });
    } else {
        console.log('No fishing trips in saltwater that used live bait found');
    }
});

// Close database connection
connection.end();
