(function (phantom) {
  var page = require('webpage').create();

  

  

  

  page.onConsoleMessage = function () {
      console.log.apply(console, arguments)
  }

  
  page.open('http://localhost:9876/?id=68862376')
  
}(phantom))
