mps-unit-tests
==============

1. Install Node.js (binary) [http://nodejs.org/]
2. Install Phantom.js (binary)  [http://phantomjs.org/]
3. Run <code>npm install mocha-phantomjs --save-dev</code> github[https://www.npmjs.org/package/mocha-phantomjs]
4. Run <code>npm install mocha --save-dev</code> github[https://github.com/mochajs/mocha]
5. Run <code>npm install chai <code>npm install xunit-file --save-dev</code>  github [https://github.com/peerigon/xunit-file]
7. All JS tests are: /spec/*.js
8. All Sonar Coverage Xml reports are: /reports/*.xml
9. Run tests from cml: <code> mocha-phantomjs -R spec testRunner.html</code>
10. Export tests to reports folder: <code> mocha-phantomjs -R xunit testRunner.html > reports/mocha.xml</code>
