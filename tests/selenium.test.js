const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replaceAll(/ /g, '%20').replaceAll(/\\/g, '/') + '/../dist/index.html'
const defaultTimeout = 10000;
let driver;
jest.setTimeout(1000 * 60 * 5);

beforeAll(async () => {
    console.log(fileUnderTest);
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

afterAll(async () => {
    await driver.quit();
}, defaultTimeout);

test('Peek-knappen visar en alert med rätt element', async () => {
    // Pusha ett element
    let push = await driver.findElement(By.id('push'));
    await push.click();
    let alert = await driver.switchTo().alert();
    await alert.sendKeys("Test123");
    await alert.accept();

    // Klicka på pop
    let pop = await driver.findElement(By.id('pop'));
    await pop.click();

    // Kontrollera alrten 
    let popAlert = await driver.switchTo().alert();
    let alertText = await popAlert.getText();
    await popAlert.accept();

    expect(alertText).toContain("Test123");
});