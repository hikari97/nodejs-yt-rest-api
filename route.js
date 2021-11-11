const express = require("express");
const app = express();
const port = 3040;
const { IndexYT } = require("./index-yt");

app.get("/", async (req, res) => {
  try {
    const result = await IndexYT();
    res.status(200).json(result);
  } catch (err) {
    res.json(err);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
