/***** Tests for mps._append(). *****/
// Global vars.
var a = 
b = 
c = false;

// Create & append a simple script.
describe("create and _append() simple script to head", function() {
  
  it("Create and append a script", function() {
    // Create script, check for immediate execution.
    var script = '<script>a = true;</script>';
    expect(a).toBe(false);
    // Append script and check it is executed.
    mps._append(mps._select('head'), script);
    expect(a).toBe(true);
  });

});

// Create & append a html string.
describe("create and _append() html string", function() {
  
  it("Create and append a html string", function() {
    var str = '<h1>Test</h1>';
    mps._append(mps._select('#append-html'),str);
    var check = document.getElementById('append-html').innerHTML;
    expect(check).toBe(str);
  });

});

// Create & append a multiline html string.
describe("Create & _append() a multiline html string", function() {
  
  it("Create and append a html string", function() {
    var str = '<div>\r\nsome text\n<p>some p</p>\nmore text\r\n</div>';
    mps._append(mps._select('#append-html-multi'),str);
    
    var elem = document.getElementById('append-html-multi');

    // Check html is appended correctly by verifying node name and child types.
    expect(elem.nodeName.toUpperCase()).toBe('DIV');
    expect(elem.firstChild.childNodes[0].nodeType).toBe(3);
    expect(elem.firstChild.childNodes[1].nodeType).toBe(1);
    expect(elem.firstChild.lastChild.nodeType).toBe(3);

  });
});

// Create & append a simple Script and html string.
describe("Create & _append() a simple Script and html string", function() {
  
  it("Create and append a html string with script and execute script", function() {
    var str = '<h1>Test 2</h1><script>b = true</script>';
    expect(b).toBe(false);
    mps._append(mps._select('#append-html-js'),str);
    var check = document.getElementById('append-html-js').innerHTML;
    // Check string.
    expect(check).toBe(str);
    // Check script execution.
    expect(b).toBe(true);
  });

});

// Create & append a table tag.
describe("Create & _append() a table tag", function() {
  
  it("Create and append a table tag", function() {
    var str = '<table></table>';
    mps._append(mps._select('#append-html-table'),str);

    var check = document.getElementById('append-html-table');

    // Check table is appended.
    expect(check.firstChild.nodeName.toUpperCase()).toBe('TABLE');
  });

});

// Create & append a form with self closing input tags.
describe("Create & _append() a form", function() {
  
  it("Create and append a form", function() {
    var str = '<form><label for="input-test">Label: <input id="input-test" type="text" /></label></table>';
    mps._append(mps._select('#append-html-form'),str);
    var check = document.getElementById('input-test');
    // Check self closing input is appended correctly.
    expect(check.nodeName.toUpperCase()).toBe('INPUT');
    expect(check.type.toUpperCase()).toBe('TEXT');
  });

});

// Create & append inline stylesheet.
describe("create and _append() inline stylesheet to head", function() {
  
  it("Create and append an inline stylesheet to head", function() {
    // Create stylesheet.
    var style = '<style type="text/css">#style-test { background-color:#f0f0f0; }</style>';
    var bg = window.getComputedStyle( document.getElementById('style-test') ,null).getPropertyValue('background-color'); 
    expect(bg).toBe('rgb(255, 255, 255)');
    // Append stylesheet and check it is applied.
    mps._append(mps._select('head'), style);
    var bgChanged = window.getComputedStyle( document.getElementById('style-test') ,null).getPropertyValue('background-color'); 
    expect(bgChanged).toBe('rgb(240, 240, 240)');
  });

});

// Create & append external stylesheet.
describe("create and _append() external stylesheet to head", function() {
  
  it("Create and append an external stylesheet to head", function() {
    // Create stylesheet.
    var style = '<link rel="stylesheet" href="css/styles.css" id="external-stylesheet" />';
    // Append stylesheet and check it is applied.
    mps._append(mps._select('head'), style);

    expect(document.getElementById('external-stylesheet')).not.toBe(null);
  });

});

// Create & append external script.
describe("create and _append() external script to head", function() {
  
  it("Create and append an external script to head", function() {
    // Create stylesheet.
    var script = '<script type="text/javascript" src="js/test.js" id="external-script"></script>';
    // Append stylesheet and check it is applied.
    mps._append(mps._select('head'), script);
    expect(document.getElementById('external-script')).not.toBe(null);
  });

});

// Test #10: _append skyscraperad ad with getAd
describe("10 _append skyscraperad ad with getAd", function() {
  mps.gptloadCallback = {};
  beforeEach(function() {
    mps.makeRequest();
  });
  it("_append skyscraperad ad with getAd()", function(){
    // call _append inside gptloadCallback
    mps.gptloadCallback = function() {
      mps._append(mps._select('#append-ad'), mps.getAd('skyscraperad'));
    };
    // expected results
    var elem = document.getElementById('append-ad').innerHTML;
    expect(elem).not.toBeNull();
  });
  afterEach(function() {
  });
});

// Test #11: _append topbanner using insertAd
describe("11 _append topbanner using insertAd", function() {
  beforeEach(function() {
    mps.makeRequest();
  });
  it("12 _append using insertAd", function(){
    // call _append
    mps.gptloadCallback = function() {
      mps.insertAd(mps._select('#append-topbanner-ad'),'topbanner')
    };
    // expected results
    var elem = document.getElementById('append-topbanner-ad').innerHTML;
    expect(elem).not.toBeNull();

  });
});