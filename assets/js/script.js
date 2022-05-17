//const axios = require('axios').default;

axios.get('http://api.nekos.fun:8080/api/foxgirl')
  .then(function (response) {
    // handle success
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
