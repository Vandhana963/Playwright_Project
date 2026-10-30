class cartpage_demo
{
    constructor(page)
    {
        this.Countrydd=page.locator("//select[@id='CountryId']")
        this.productcb=page.locator("//input[@name='removefromcart']")
        this.checkbox=page.locator("//input[@id='termsofservice']")
        this.checkoutbtn=page.locator("//button[@id='checkout']")
        this.pricebox=page.locator("//span[@class='product-unit-price']")
    }

    async checkout()
    {
           await this.productcb.click()
           await this.Countrydd.selectOption("India")
           await this.checkbox.click()
          await this.checkoutbtn.click()
    }
    async checkout1()
    {
        await this.checkbox.click()
        await this.checkoutbtn.click()
    }
}
export default cartpage_demo