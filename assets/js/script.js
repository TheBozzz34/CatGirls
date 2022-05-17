//const axios = require('axios').default;






axios.get('https://nekos.moe/api/v1/random/image?nsfw=false')

  .then(function (response) {
    axios.get('https://nekos.moe/api/v1/image/' + response).then(console.log(response))
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    console.log('done');
  });


  axios.get("https://nekos.moe/api/v1/random/image?nsfw=false")
  .then(response => {
    // access parsed JSON response data using response.data field
    data = response.data
    var imgN = document.createElement("img");
    imgN.src = data.neko;
    console.log(imgN.src);
    //var div = document.getElementById("mainDiv");
    //imgN.setAttribute("style", "height: 400px;");
    //imgN.setAttribute("width", "height: 50px;");
    //imgN.setAttribute("border", "border: 5px solid #5539cc;");
    //div.appendChild(imgN);
    //block.setAttribute("style", "text-align:center");

    //div.appendChild(imgN);    
  })
  .catch(error => {
    if (error.response) {
      //get HTTP error code
      console.log(error.reponse.status)
    } else {
      console.log(error.message)
    }
  })

console.log("Hello World!");

document.body.style.backgroundColor = "#563d7c";
