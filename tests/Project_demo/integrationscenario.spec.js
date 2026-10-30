import {expect,test} from "@playwright/test"
import homepage_demo from "../../PageObjectModel/homepage_demo.page"
import loginpage_demo from "../../PageObjectModel/loginpage_demo.page"
import Registerpage_demo from "../../PageObjectModel/registerpage_demo.page"
import logindata_demo from "../../testdata/logindata_demo.json"
import registerdata_demo from "../../testdata/registerdata_demo.json"
import productspage_demo from "../../PageObjectModel/productspage_demo.page"
import cartpage_demo from "../../PageObjectModel/cartpage_demo.page"


test.describe("integration tests",()=>{

test.beforeEach("login",async({page})=>{
     let url=logindata_demo.url
     await page.goto(url)
      let un=logindata_demo.email
    let paswd=logindata_demo.password
      let login= new loginpage_demo(page)
      let home = new homepage_demo(page);
      await home.loginlink.click()
     await login.loginpage(un,paswd)
})


test("login to addtocart", async ({ page}) => {

    let home = new homepage_demo(page);
    let prodpage = new productspage_demo(page);
    await home.booklink.click({force:true});
    await prodpage.addToCart();
    await expect(prodpage.prodavail).toBeVisible();
  
     

});

test("login to wishlist",async({page})=>{
  let home=new homepage_demo(page)
   let prodpage= new productspage_demo(page)
   await home.digidownlink.click()
   await prodpage.addToWishlist()

})

})

