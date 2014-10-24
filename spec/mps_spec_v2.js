/***** Javascript Tests for mps._append(). *****/
/***** Frameworks: MochaJS, PhantomJS and Xunit Reporting for Sonar Coverage *****/
/***** Date: 10/24/14  *****/

// Allow chai to run asynchronous Mocha tests
window.expect = chai.expect;
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
        done()    // success:
      } catch( e ) {
        done( e ) // failure:
      }
    }, 100 );


  });

});  // end describe
