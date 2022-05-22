const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://f1-news.p.rapidapi.com/news',
  headers: {
    'X-RapidAPI-Host': 'f1-news.p.rapidapi.com',
    'X-RapidAPI-Key': '19ad735bedmsh47cb51c08bf4899p1274d9jsn6b620247e6d3'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});