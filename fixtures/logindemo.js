import{test as base, expect}from '@playwright/test'
import loginpage_demo from "../PageObjectModel/loginpage_demo.page";
import homepage_demo from "../PageObjectModel/homepage_demo.page";
import data from '../testdata/logindata_demo.json'

export const test = base.extend({


    loginlinkfix:async({page},use)=>{
        await page.goto(data.url)
        let home= new homepage_demo(page)
        await home.loginlink.click()

        console.log('loginlink clicked');
        
        let login= new loginpage_demo(page)
        await login.loginpage(data.email,data.password)
        console.log('logged in');
        
        await use({home, login})
       
    },

})

export{expect}