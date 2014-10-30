/***** Javascript Unit Tests for mps._append(). *****/
/***** Frameworks: MochaJS, PhantomJS and Xunit Reports for SonarQube Coverage *****/
/***** Date: 10/24/14  *****/




// Allow asynchronous Mocha tests using beforeEach(function(done)
// Global vars.
window.expect = chai.expect;
var a = b = c = false;

describe("MPS core _append tests", function() {

  it('Append a script that updates var a', function(){
    var script = '<script>a = true;</script>';
    mps._append(mps._select('head'), script);
    expect(a).to.be.true;
  });

  // Create & append a simple script.
  it("Create and append html string", function() {
    var str = '<h1>test</h1>';
    mps._append(mps._select('#append-html'),str);
    var check = document.getElementById('append-html').innerHTML;
    expect(check).to.equal('<h1>test</h1>');

  });

  // Create & append a multiline script.
  it("Create and append a multiline string", function(){
    var str = '<div>\r\nsome text\n<p>some p</p>\nmore text\r\n</div>';
    mps._append(mps._select('#append-html-multi'),str);
    var elem = document.getElementById('append-html-multi');
    expect(elem.nodeName.toUpperCase()).to.equal('DIV');
    expect(elem.firstChild.childNodes[0].nodeType).to.equal(3);
    expect(elem.firstChild.childNodes[1].nodeType).to.equal(1);
    expect(elem.firstChild.lastChild.nodeType).to.equal(3);
  });

  it("Execute appended script plus html", function() {
    var str = '<h1>Test 2</h1><script>b = true</script>';
    mps._append(mps._select('#append-html-js'),str);
    var check = document.getElementById('append-html-js').innerHTML;
    expect(check).to.equal(str);
    expect(b).to.be.true;
  });

  it("Create and append a table tag", function() {
    var str = '<table></table>';
    mps._append(mps._select('#append-html-table'),str);
    var check = document.getElementById('append-html-table');
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

});
// NEED TO apply wrapmap logix then test this
/*describe("Call _append an external script to head", function () {
  var script = '<script type="text/javascript" src="js/test.js" id="external-script"></script>';
  beforeEach(function(done){
      mps._append(mps._select('head'), script);
      done(); // complete the async beforeEach
  });
  it("Create and append an external script to head", function() {
    console.log(c);
    //expect(document.getElementById('external-script')).not.to.be.null;
    expect(c).to.be.true;
  });
});*/

//CSS Test 1: internal stylesheet
describe("Call _append to insert internal stylesheet", function () {
  var style, bgColor = '';
  style = '<style type="text/css">#style-test { background-color:#f0f0f0; }</style>';
  mps._append(mps._select('head'), style);
  beforeEach(function(done){
    bgColor = window.getComputedStyle( document.getElementById('style-test'),null).getPropertyValue('background-color');
    done();
  });
  // Create and append an inline stylesheet
  it("Update background-color with inline style #grey", function() {
    expect(bgColor).to.equal('rgb(240, 240, 240)');
  });

});

// CSS Test 2: external stylesheet
// NEED TO apply wrapmap logix then test this
describe("Create and append an external stylesheet", function () {
  var style2, bgColor2 = '';
  style2 = '<link rel="stylesheet" href="css/styles.css" id="external-stylesheet" />';
  mps._append(mps._select('head'), style2);
  beforeEach(function(done){
    setTimeout(function(){
      bgColor2 = window.getComputedStyle(document.getElementById('external-style-test') ,null).getPropertyValue('background-color');
      done(); // complete the async beforeEach
    }, 50);
  });
  // Create and append an external stylesheet
  it("Update background-color with external css #blue", function() {
    expect(bgColor2).to.equal('rgb(204, 255, 255)');
  });
});


describe("Call _append to insert 2 types of ads", function () {

  var elem1, elem2 = {};
  beforeEach(function(done){
    mps.makeRequest();
    mps.gptloadCallback = {};
    mps.gptloadCallback = function() {
      mps._append(mps._select('#append-ad'), mps.getAd('boxad'));
      mps.insertAd(mps._select('#insert-ad'),'topbanner');
    };
    // expected results
    elem1 = document.getElementById('append-ad').innerHTML;
    elem2 = document.getElementById('insert-ad').innerHTML;
    done(); //  async beforeEach
  });

  it("Append two ads with getAd() and insertAd()", function(){
    expect(elem1).to.have.length.above(0);
    expect(elem2).to.have.length.above(0);

  });
});  // end describe


describe("MPS core _remove tests", function (done) {

  // Remove elem by id.
  it("Remove elements by id", function() {
    mps._remove('#removeId');
    var check = document.querySelectorAll('#removeId'), i;
    expect(check.length).to.equal(0);
  });

  // Remove elem by class.
  it("Remove elements by className", function() {
    mps._remove('.removeClass');
    var check = document.querySelectorAll('.removeClass'), i;
    expect(check.length).to.equal(0);
  });

  // Remove elem by class.
  it("Remove elements by tag name", function() {
    mps._remove('span');
    var check = document.querySelectorAll('span'), i;
    expect(check.length).to.equal(0);
  });

});
