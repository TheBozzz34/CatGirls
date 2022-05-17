//const axios = require('axios').default;






axios.get('https://nekos.moe/api/v1/random/image?nsfw=false')

  .then(function (response) {
      console.log(response);
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
