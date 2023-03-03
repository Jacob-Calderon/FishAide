const request = require('request');
const cheerio = require('cheerio');

const url = 'https://tpwd.texas.gov/fishboat/fish/action/reptmap.php?EcoRegion=HC';

request(url, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    $('.result').each((i, el) => {
      const waterCondition = $(el).find('.waterCondition').text().trim();
      const fishCaught = $(el).find('.fishCaught').text().trim();
      const baitUsed = $(el).find('.baitUsed').text().trim();
      const location = $(el).find('.location').text().trim();
      const rating = $(el).find('.rating').text().trim();

      console.log({waterCondition, fishCaught, baitUsed, location, rating});
    });
  }
});
