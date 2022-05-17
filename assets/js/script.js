//const axios = require('axios').default;

let options = {
    headers: {
      'User-Agent': 'catgirlsaresexy.org random image fetcher',
      'Access-Control-Allow-Origin': 'nekos.moe',
      'Content-Type': 'application/json',
      "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
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
