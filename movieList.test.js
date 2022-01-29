const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('addMovie', async () => {

    let movieBar = await driver.findElement(By.css('[placeholder]'))
    
    await movieBar.sendKeys('nba\n')

    await driver.sleep(2000)

})


test('removeMovie', async () => {
    movieBar = await driver.findElement(By.css('button#nba')).click()

    await driver.sleep(2000) 
})

test('movieMessage', async () => {
    movieBar = await driver.findElement(By.css('aside#message.hide'))

    await driver.sleep(2000) 
})
