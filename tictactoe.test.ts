import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

// afterAll(async () => {
//     await driver.quit()
// })

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
})

test ('Check that clicking the upper left square adds an X to the square', async () => {
    let cell0= await (await driver).findElement(By.id('cell-0'))
    await cell0.click()

    expect(await cell0.getText()).toEqual('X')
    await driver.sleep (2000)
})

test ('Check that clicking the upper right square adds an X to the square', async () => {
    let cell2 = await (await driver).findElement(By.id('cell-2'))
    await cell2.click()

    expect(await cell2.getText()).toEqual('X')
    await driver.sleep (2000)
})

test ('Check that clicking the lower right square adds an X to the square', async () => {

    driver.navigate().refresh()
    await driver.sleep(2000)

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();


    let cell8 = await (await driver).findElement(By.id('cell-8'))
    await cell8.click()

    expect(await cell8.getText()).toEqual('X')
    await driver.sleep (2000)
})

test ('Computer takes turna fter my first turn', async () => {
    const computerTurn = await driver.findElement(By.xpath('//td[text()="O"]'))
    let computerMoved = false
    console.log(computerTurn)
})