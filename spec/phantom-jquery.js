var page = require('webpage').create();
page.open('http://www.sample.com', function() {
  page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js", function() {
    page.evaluate(function() {
      $("button").on('click', function(){ console.log('Running Jquery 1.10.1');});
    });
    phantom.exit();
  });
});