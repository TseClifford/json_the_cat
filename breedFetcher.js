const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      return console.log(`Failed to request: ${error}`);
    }

    const data = JSON.parse(body)[0];
    if (data) {
      callback(null, data.description);
    } else {
      callback(`The requested breed is not found.`, null);
    }
  });
};

module.exports = { fetchBreedDescription };