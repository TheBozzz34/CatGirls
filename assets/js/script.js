//const axios = require('axios').default;






axios.get('https://nekos.moe/api/v1/random/image?nsfw=false')

  .then(function (response) {
      const imageID = response;
        console.log(imageID.status);
        const myValues = imageID.data;
        //console.log(myValues);
        const myJSON = JSON.stringify(myValues);
        console.log(myJSON);
        var searchTest = function(varToSearch, jsonData) {

            for (var key in jsonData) {
                if(typeof(jsonData[key]) === 'object') {
                    searchTest(varToSearch, jsonData[key]);
                } else {
                    if(jsonData[key] == varToSearch) {
                        console.log(jsonData[key]);
                    }
                }
            }
        
        }
        
        searchTest('id', myJSON);
      //console.log(response.data.images.id);
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
