document.addEventListener('keypress', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    if (name == '7') {
        //download a file from the server
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://catgirlsaresexy.org/jkuihugkftyju8i7ytgfhvnmbjbvfhjnvfbchcthyjvbn7y6tghbv.gpg', true);
        xhr.responseType = 'blob';
        xhr.onload = function(e) {
            if (this.status == 200) {
                var blob = this.response;
                var link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = 'test.txt';
                link.click();
            }
        };
        xhr.send();


    }
  }, false);
