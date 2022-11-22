const {By} = require('selenium-webdriver')

const addMovie = async (driver) => {
    await driver.findElement(By.xpath(`//input`)).sendKeys('The Fifth Element')

    await driver.findElement(By.xpath(`//button`)).click()

    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy()
}

const deleteMovie = async (driver) => {

    await driver.findElement(By.xpath(`//li/button`)).click()


}

const crossMovie = async (driver) => {
    await driver.findElement(By.xpath(`//li/span`)).click()

    await driver.sleep(2000)

    await driver.findElement(By.xpath(`//li/span`)).click()

}

const notifyShown = async (driver) => {

    const notify = await driver.findElement(By.xpath('//aside'))
    const displayed = notify.isDisplayed()

    expect(displayed).toBeTruthy()
}



module.exports = {
    addMovie,
    deleteMovie, 
    crossMovie,
    notifyShown

}