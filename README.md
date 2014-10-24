mps-unit-tests
==============

1. Install Node.js (binary) 
2. Install Phantom.js (binary) 
3. Run <b>npm install mocha-phantomjs --save-dev</b> github[https://www.npmjs.org/package/mocha-phantomjs]
4. Run <b>npm install mocha --save-dev</b> github[https://github.com/mochajs/mocha]
5. Install sonar reoprter: Run <b>npm install xunit-file --save-dev</b>  github [https://github.com/peerigon/xunit-file]
6. All JS tests are: /spec/*.js
7. All Sonar Coverage Xml reports are: /reports/*.xml
8. Run tests from cml: <code> mocha-phantomjs -R spec testRunner.html</code>
9. Export tests to reports folder: <code> mocha-phantomjs -R xunit testRunner.html > reports/mocha.xml</code>
