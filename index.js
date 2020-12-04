require("dotenv").config();
// go to the giphy api and get some gifs using Axios
const axios = require("axios");

const GIPHY_API_KEY = process.env.GIPHY_API_KEY;
const GIPHY_BASE_URL = "https://api.giphy.com/v1/gifs/search?api_key=";
const SEARCH_KEYWORD = "kanye";

axios
  .get(`${GIPHY_BASE_URL}${GIPHY_API_KEY}&q=${SEARCH_KEYWORD}`)
  .then((res) => {
    const gifs = res.data.data;
    gifs.map((gif) => {
      console.log(gif.images.downsized.url);
    });
  });
