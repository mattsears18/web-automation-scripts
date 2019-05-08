const puppeteer = require('puppeteer');

async function getPic() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://passwords.google.com/?pli=1');
  await page.screenshot({path: 'google.png'});

  await browser.close();
}

getPic();
