const puppeteer = require("puppeteer");

const Config = async (url) => {
  return await puppeteer
    .launch()
    .then((browser) => browser.newPage())
    .then((page) => {
      return page.goto(url).then(function () {
        return page.content();
      });
    });
};

module.exports = { Config };
