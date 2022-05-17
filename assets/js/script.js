//const axios = require('axios').default;

let options = {
    headers: {
      'User-Agent': 'catgirlsaresexy.org random image fetcher'
    }
  }

axios.get('https://nekos.moe/api/v1/random/image?nsfw=false', options)

  .then(function (response) {
    axios.get('https://nekos.moe/api/v1/image/' + response, options).then(console.log(response))
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    console.log('done');
  });

console.log("Hello World!");

document.body.style.backgroundColor = "#563d7c";
