const puppeteer = require('puppeteer');

const searchGoogle = async (query) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.google.com/search?q=${query}`);

    const data = await page.evaluate(() => {
        const results = [];
        const links = document.querySelectorAll('.g .rc .r a');
        const titles = document.querySelectorAll('.g .rc .r a h3');

        for (let i = 0; i < links.length; i++) {
            results.push({
                title: titles[i].innerText,
                url: links[i].href
            });
        }

        return results;
    });

    console.log(data);

    await browser.close();
};

searchGoogle('JavaScript web scraper');
