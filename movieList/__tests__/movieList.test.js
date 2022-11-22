const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {addMovie, deleteMovie, crossMovie, notifyShown} = require('../functions/movieList.js')


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

describe('This should test ALL functions on the page', () => {

    test('Adds a Movie', async () => {
        await addMovie(driver)

        await driver.sleep(2000)
    })

    test('Checks  to see if a notification exists, should return true', async () => {
        await notifyShown(driver)
        
        await driver.sleep(2000)
    })

    test('Clicks the movie title twice', async () => {
        await crossMovie(driver)

        await driver.sleep(2000)
    })

    test('Deletes the movie', async () => {
        await deleteMovie(driver)

        await driver.sleep(2000)
    })

})
