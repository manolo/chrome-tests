const { chromium } = require('playwright');

let headless = false, host = 'localhost', port = '8080', hub = false;
process.argv.forEach(a => {
  if (/^--headless/.test(a)) {
    headless = true;
  }
});

(async () => {
  const browser = await chromium.launch({
    headless: headless
  });
  const context = await browser.newContext();

  const page = await context.newPage();
  await page.goto(`http://localhost:8080/`);
  await page.$$('input[type="Hi"]');
  await context.close();
  await browser.close();
})();