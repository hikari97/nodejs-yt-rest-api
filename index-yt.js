const cheerio = require("cheerio");
const { Config } = require("./conf");

const url = "https://www.youtube.com";

const IndexYT = async () => {
  return await Config(url)
    .then((html) => {
      // console.log(html);
      const $ = cheerio.load(html);
      const IndexResult = [];
      $(`#video-title-link`).each(function () {
        const src = $(this).attr();
        IndexResult.push({
          title: src.title,
          url: `${url}${src.href}`,
          // atr: src,
        });
      });

      // console.log(IndexResult);
      return IndexResult;
    })
    .catch(console.error);
};

module.exports = { IndexYT };
