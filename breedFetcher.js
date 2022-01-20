const request = require('request');
const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    return console.log(`Failed to request: ${error}`);
  }

  const data = JSON.parse(body)[0];
  if (!data) {
    return console.log(`The requested breed is not found.`);
  }
  return console.log(data.description);
});