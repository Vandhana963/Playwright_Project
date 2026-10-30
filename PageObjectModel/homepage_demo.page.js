class homepage_demo
{
constructor(page)
{
    this.registerlink=page.locator("//a[text()='Register']")
    this.loginlink=page.locator("//a[text()='Log in']")
    this.shoppingcartlink=page.locator("//span[text()='Shopping cart']")
    this.wishlistlink=page.locator("//span[text()='Wishlist']")
    this.searchtxtfld=page.locator("//input[@id='small-searchterms']")
    this.searchbtn=page.locator("//input[@type='submit']")
    this.booklink=page.locator("//ul[@class='top-menu']//li//a[contains(text(),'Books')]")
    this.titleimg=page.locator("//img[@alt='Tricentis Demo Web Shop']")
    this.digidownlink=page.locator("(//a[contains(text(),'Digital downloads')])[1]")
    this.logoutlink=page.locator("//a[text()='Log out']")

}

}
export default homepage_demo