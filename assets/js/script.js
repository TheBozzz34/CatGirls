//const axios = require('axios').default;





axios.get('https://nekos.life/api/neko').then(function(response) { console.log(response)}).catch(function(error) { console.log(error)});

/*
axios.get('https://nekos.moe/api/v1/random/image?nsfw=false')

  .then(function (response) {
      const imageID = response;
        console.log(imageID.status);
        const myValues = imageID.data;
        //console.log(myValues);
        const myJSON = JSON.stringify(myValues);
        console.log(myJSON);
        const valueREGEX = /[id:]/
      //console.log(response.data.images.id);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    console.log('done');
  });

  */


console.log("Hello World!");

document.body.style.backgroundColor = "#563d7c";
