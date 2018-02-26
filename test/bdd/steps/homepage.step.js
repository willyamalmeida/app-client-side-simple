const defineSupportCode = require('cucumber').defineSupportCode;

defineSupportCode(function({ Given, Then, When }) {
    Given("the homepage", function(callback) {
        callback(null, "pending");
    });

    Then("the title of homepage should to be {string}", function(string, callback) {
        callback(null, "pending");
    });
});
