const { Builder, By } = require("selenium-webdriver");
const chromedriver = require('chromedriver');
var assert = require('assert');

const url = "file:///".concat(__dirname).concat("/../../dist/index.html");

describe('My Company', () => {

    var driver;

    const findElement = name => {
        return new Promise((resolve, reject) => {
            var selector = "[name='" + name + "']";
            var element = driver.findElement(By.css(selector));
            resolve(element);
        });
    };

    const checkTitle = titleExpected => {
        return new Promise((resolve, reject) => {
            driver.getTitle().then(title => {
                assert.equal(title, titleExpected);
                resolve(driver);
            });
        });
    };

    const checkText = (name, textExpected) => {
        return new Promise((resolve, reject) => {
            findElement(name).then((element) => {
                element.getText().then(text => {
                    assert.equal(text, textExpected);
                    resolve(driver);
                });
            })
        });
    };

    const clickElement = name => {
        return new Promise((resolve, reject) => {
            findElement(name).then(e => {
                e.click().then(() => {
                    resolve(driver);
                });
            });
        });
    };

    beforeEach(function(){
        driver = new Builder().withCapabilities({
            browserName: 'chrome',
            javascriptEnabled: true,
            acceptSslCerts: true,
            chromeOptions: {
                args: ['start-maximized']
            },
            path: chromedriver.path
        }).build();

        driver.manage().window().maximize();
    });

    it("Elements of the homepage", function(){
        driver.get(url)
            .then(() => checkTitle("app-client-side-simple"))
            .then(() => checkText("homepage", "My Company"))
            .then(() => checkText("department", "Department"))
            .then(() => checkText("employee", "Employee"))
            .then(() => clickElement("department"))
            .then(() => checkTitle("app-client-side-simple - department"))
            .then(() => clickElement("homepage"))
            .then(() => checkTitle("app-client-side-simple"))
            .then(() => clickElement("employee"))
            .then(() => checkTitle("app-client-side-simple - employee"))
            .then(() => clickElement("homepage"))
            .then(() => checkTitle("app-client-side-simple"))
            .then(() => driver.quit());
    });
});
