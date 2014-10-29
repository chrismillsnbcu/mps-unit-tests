/***** Javascript Unit Tests for mps._append(). *****/
/***** Frameworks: MochaJS, PhantomJS and Xunit Reports for SonarQube Coverage *****/
/***** Date: 10/24/14  *****/


window.expect = chai.expect;
// Allow chai to run asynchronous Mocha tests: see try-catch below

describe("MPS core _append tests", function (done) {
  // Global vars.
  var a = b = c = false;

  // Create & append a simple script.
  it("Create and append html string", function() {
    var str = '<h1>test</h1>';
    mps._append(mps._select('#append-html'),str);
    var check = document.getElementById('append-html').innerHTML;
    setTimeout( function () {
      // Called from the event loop, not it()
      try {
        expect(check).to.be.a(str);
        done();    // success:
      } catch(e) {
        console.log('Running anyncronous test...'); //failure
      }
    }, 100 );
  });

  it("Create and append a script", function() {
    // Create script, check for immediate execution.
    var script = '<script>a = true;</script>';
    expect(a).to.be.false;
    // Append script and check it is executed.
    mps._append(mps._select('head'), script);
    setTimeout( function () {
      // Called from the event loop, not it()
      try {
        expect(a).to.be.true;
        done();    // success:
      } catch(e) {
        console.log('Running anyncronous test...'); //failure
      }
    }, 100 );
  });

  it("Create and append a multiline string", function() {
    var str = '<div>\r\nsome text\n<p>some p</p>\nmore text\r\n</div>';
    mps._append(mps._select('#append-html-multi'),str);
    var elem = document.getElementById('append-html-multi');
    // Check html is appended correctly by verifying node name and child types.
    setTimeout( function () {
      try {
        expect(elem.nodeName.toUpperCase()).to.be('DIV');
        expect(elem.firstChild.childNodes[0].nodeType).to.be(3);
        expect(elem.firstChild.childNodes[1].nodeType).to.be(1);
        expect(elem.firstChild.lastChild.nodeType).to.be(3);
        done();    // success:
      } catch(e) {
        console.log('Running anyncronous test...'); //failure
      }
    }, 100 );
  });

  it("Create and append a html string with script and execute script", function() {
    var str = '<h1>Test 2</h1><script>b = true</script>';
    expect(b).to.be.false;
    mps._append(mps._select('#append-html-js'),str);
    var check = document.getElementById('append-html-js').innerHTML;
    setTimeout( function () {
      try {
        expect(check).to.be.a(str);
        expect(b).to.be.true;
        done();
      } catch(e) {
        console.log('Running anyncronous test...'); //failure
      }
    }, 100 );
  });

  it("Create and append a table tag", function() {
    var str = '<table></table>';
    mps._append(mps._select('#append-html-table'),str);
    var check = document.getElementById('append-html-table');
    // Check table is appended.
    expect(check.firstChild.nodeName.toUpperCase()).to.equal('TABLE');
  });

  it("Create and append a form", function() {
    var str = '<form><label for="input-test">Label: <input id="input-test" type="text" /></label></table>';
    mps._append(mps._select('#append-html-form'),str);
    var check = document.getElementById('input-test');
    // Check self closing input is appended correctly.
    expect(check.nodeName.toUpperCase()).to.equal('INPUT');
    expect(check.type.toUpperCase()).to.equal('TEXT');
  });

  it("Create and append an inline stylesheet", function() {
    // Create stylesheet.
    var style = '<style type="text/css">#style-test { background-color:#f0f0f0; }</style>';
    var bg = window.getComputedStyle( document.getElementById('style-test') ,null).getPropertyValue('background-color');
    setTimeout( function () {
      try {
        expect(bg).to.equal('rgb(255, 255, 255)');
        done();
      } catch(e) {
        console.log('Running anyncronous test...'); //failure
      }
    }, 100 );
    // Append stylesheet and check it is applied.
    mps._append(mps._select('head'), style);
    var bgChanged = window.getComputedStyle( document.getElementById('style-test') ,null).getPropertyValue('background-color');
    expect(bgChanged).to.equal('rgb(240, 240, 240)');
  });

  it("Create and append an external stylesheet to head", function() {
    // Create stylesheet.
    var style = '<link rel="stylesheet" href="css/styles.css" id="external-stylesheet" />';
    // Append stylesheet
    mps._append(mps._select('head'), style);
    setTimeout( function () {
      try {
      expect(document.getElementById('external-stylesheet')).not.to.be(null);
      done();
      } catch(e) {
        console.log('Running anyncronous test...'); //failure
      }
    }, 100 );
  });

  it("Create and append an external script to head", function() {
    // Create & Append stylesheet.
    var script = '<script type="text/javascript" src="js/test.js" id="external-script"></script>';
    mps._append(mps._select('head'), script);
    setTimeout( function () {
      try {
        expect(document.getElementById('external-script')).not.to.be(null);
        done();
      } catch(e) {
        console.log('Running anyncronous test...'); //failure
      }
    }, 100 );
  });

  it("Append two ad with getAd() and insertAd()", function(){
    // call _append inside gptloadCallback
    mps.makeRequest();
    mps.gptloadCallback = {};
    mps.gptloadCallback = function() {
      mps._append(mps._select('#append-ad'), mps.getAd('boxad'));
      mps.insertAd(mps._select('#insert-ad'),'topbanner');
    };
    // expected results
    var elem1 = document.getElementById('append-ad').innerHTML;
    var elem2 = document.getElementById('insert-ad').innerHTML;
    setTimeout( function () {
      try {
        expect(elem1).not.to.be(null);
        expect(elem2).not.to.be(null);
        done();
      } catch(e) {
        console.log('Running anyncronous test...'); //failure
      }
    }, 100 );
  });
});  // end describe
