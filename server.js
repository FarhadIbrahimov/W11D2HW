const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(
    "<h1>99 Bottles of beer on the wall</h1> <a href=/98>Take one down, pass it around</a>"
  );
});

app.get("/:number", (req, res) => {
  const currentNum = Number(req.params.number);
  if (req.params.number > 0) {
    const nextNum = currentNum - 1;

    res.send(`<h1>${currentNum} Bottles of beer on the wall</h1> 
        <a href=/${nextNum}>Take one down, pass it around</a>`);
  } else {
    res.send(`<h1>No more bottles of beer on the wall</h1> 
    <a href=/99>Start over</a>`);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
