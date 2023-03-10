// const request = require('request');
// const cheerio = require('cheerio');
//
// const url = 'https://tpwd.texas.gov/fishboat/fish/action/reptmap.php?EcoRegion=HC';
//
// request(url, (error, response, html) => {
//   if (!error && response.statusCode === 200) {
//     const $ = cheerio.load(html);
//
//     $('.result').each((i, el) => {
//       const bass = $(el).find('.waterCondition').text().trim();
//       const  catfish= $(el).find('.fishCaught').text().trim();
//       const baitUsed = $(el).find('.baitUsed').text().trim();
//       const location = $(el).find('.location').text().trim();
//       const rating = $(el).find('.rating').text().trim();
//
//
//       console.log({bass, catfish, baitUsed, location, rating});
//     });
//   }
// });


const request = require('request');
const cheerio = require('cheerio');
const scraper = require('web-scraper');

request(url, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);


    scraper.scrape('https://tpwd.texas.gov/fishboat/fish/action/reptmap.php?EcoRegion=HC', (data) => {
      const waterCondition = $(el).find('.waterCondition').text().trim();
      const fishCaught = $(el).find('.fishCaught').text().trim();
      const baitUsed = $(el).find('.baitUsed').text().trim();
      const location = $(el).find('.location').text().trim();
      const rating = $(el).find('.rating').text().trim();

      console.log();
    });
  }
});




const axios = require('axios');
const cheerio = require('cheerio');

// Define the URL of the web page you want to scrape
const url = 'https://tpwd.texas.gov/fishboat/fish/action/reptmap.php?EcoRegion=HC';

// Send an HTTP GET request to the URL using Axios
axios.get(url)
    .then(response => {
      // Parse the HTML response using Cheerio
      const $ = cheerio.load(response.data);

      // Extract the data you want from the HTML using Cheerio selectors
      const pageTitle = $('title').text();
      const pageLinks = $('a').map((i, el) => $(el).attr('href')).get();

      // Do something with the extracted data
      console.log(`Page title: ${pageTitle}`);
      console.log(`Page links: ${pageLinks}`);
    })
    .catch(error => {
      // Handle any errors that might occur during the request or parsing process
      console.error(error);
    });
