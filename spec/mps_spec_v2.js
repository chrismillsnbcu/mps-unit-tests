/***** Javascript Unit Tests for mps._append(). *****/
/***** Frameworks: MochaJS, PhantomJS and Xunit Reports for SonarQube Coverage *****/
/***** Date: 10/24/14  *****/

// Allow chai to run asynchronous Mocha tests: see try-catch below
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
        done()    // success:
      } catch( e ) {
        done( e ) // failure:
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
        done()    // success:
      } catch( e ) {
        done( e ) // failure:
      }
    }, 100 );

  });
});  // end describe
