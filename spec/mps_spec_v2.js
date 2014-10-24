/***** Javascript Tests for mps._append(). *****/
/***** Frameworks: MochaJS, PhantomJS and Xunit Reporting for Sonar Coverage *****/
/***** Date: 10/24/14  *****/

describe("MPS core _append tests", function () {
  // Global vars.
  var a = b = c = false;

 // Create & append a simple script.
  it("Create and append html string", function() {
    var str = '<h1>Test</h1>';
    mps._append(mps._select('#append-html'),str);
    var check = document.getElementById('append-html').innerHTML;
    expect(check).to.be(str);
  });



});
