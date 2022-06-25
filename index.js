const app = require('express')();
const fetch = require("node-fetch-commonjs")
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World !')
});

app.get("/what", async (req, res) => {
  let result = await fetch(`https://api.ipify.org`);
  let data = await result.text();
  res.status(200).send(data);
  // console.log(result);
});

app.get('*', (req, res) => {
  res.status(404).send('404 | Not found : ' + req.url)
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});
