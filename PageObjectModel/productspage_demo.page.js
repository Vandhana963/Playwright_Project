import homepage_demo from "./homepage_demo.page"

class productspage_demo
{
    constructor(page)
    {
        this.fictionbukimg=page.locator("//a[text()='Fiction']")
        this.addtocrtbtn=page.locator("//input[@id='add-to-cart-button-45']")
        this.shoppingcartlnk=page.locator("//a[text()='shopping cart']")
        this.prodavail=page.locator("//table//tr[@class='cart-item-row']")
        this.prodtitle=page.locator("//h2[@class='product-title']")
        this.albumimg=page.locator("//img[@alt='Picture of 3rd Album']")
        this.addtowishbtn=page.locator("//input[@id='add-to-wishlist-button-53']")
        this.wishlistlink=page.locator("//a[text()='wishlist']")
        this.addtocartcb=page.locator("//input[@name='addtocart']")
        this.addtocrtbtn1=page.locator("//input[@name='addtocartbutton']")

        
    }

    async addToCart()
    {
        
        await this.fictionbukimg.click()
        await this.addtocrtbtn.click()
        await this.shoppingcartlnk.click()


    }
    async addToWishlist()
    {
       
        await this.albumimg.click()
        await this.addtowishbtn.click()
        await this.wishlistlink.click()
        await this.addtocartcb.click()
        await this.addtocrtbtn1.click()

    }
    
}
export default productspage_demo