const {Builder, By, Key, until} = require('selenium-webdriver');
(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  let wait = 700;
  try {
    await driver.get('https://samsung-player-fav.s3.amazonaws.com/ctvhub-tizen-prod+0.16.0(7.0.6)/index.html#/?_k=342fo8');
    await driver.sleep(wait);
    await driver.findElement(By.xpath("//div[@class='hero-carousel__item hero-carousel__item--active']//div[@class='hero-item__box']")).click();
    try {
      //await driver.findElement(By.xpath("//div[@class='dh1-hero__info']")).click().sendKeys(Key.ARROW_UP);
      await driver.sleep(wait);
      await driver.actions().sendKeys(Key.ARROW_UP).perform();
      await driver.sleep(wait);
      await driver.actions().sendKeys(Key.ARROW_UP).perform();
      await driver.sleep(wait);
      await driver.actions().sendKeys(Key.RIGHT).perform();
      await driver.sleep(wait);
      await driver.actions().sendKeys(Key.RIGHT).perform();
      await driver.sleep(wait);
      await driver.actions().sendKeys(Key.RIGHT).perform();
      await driver.sleep(wait);
      await driver.actions().sendKeys(Key.RIGHT).perform();
      await driver.sleep(wait);
      await driver.actions().sendKeys(Key.RIGHT).perform();
      await driver.sleep(1000);
      await driver.actions().sendKeys(Key.DOWN).perform();
      await driver.sleep(700);
      await (await driver.findElement(By.xpath("//div[@class='input-single-line__curValue']"))).click();
      await driver.actions().sendKeys("Lisa").perform();
      //div[@class='input-single-line__placeholder']
      //await driver.findElement(By.xpath("//i[@class='icon icon-search-icon']")).click();
      // await driver.actions().sendKeys(Key.RIGHT).perform();
      // await driver.sleep(wait);
      // await driver.actions().sendKeys(Key.RIGHT).perform();
      await driver.sleep(wait);
      await driver.actions().sendKeys(Key.DOWN).perform();
      await driver.sleep(wait);
      await driver.actions().sendKeys(Key.ENTER).perform();
      await driver.sleep(wait);
      await driver.actions().sendKeys(Key.DOWN).perform();
      await driver.sleep(wait);
      await driver.actions().sendKeys(Key.DOWN).perform();
      await driver.sleep(900);
      await driver.actions().sendKeys(Key.RIGHT).perform();
      await driver.sleep(wait);
      await driver.actions().sendKeys(Key.RIGHT).perform();
      await driver.sleep(1000);
      await driver.actions().sendKeys(Key.ENTER).perform();
      await driver.sleep(900);
      await driver.actions().sendKeys(Key.ENTER).perform();
      console.log("done");
      await driver.sleep(wait);
      //await driver.findElements(By.xpath("div[@class='d3__episodes']//div[@class='scrollable-list']")).click();
      //div[@class='d3__episodes']//div[@class='scrollable-list']
      //await driver.findElement(By.xpath("//div[@class='input-single-line__curValue']")).click();
    } catch (error) {
      console.log(error);
    }
    await driver.sleep(10000);
  } finally {
    await driver.quit();
  }
})();

// there is a comment
