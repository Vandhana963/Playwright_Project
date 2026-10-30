import {expect, test} from "@playwright/test"


test("frames",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    //total frames
    let frames=await page.frames()
    console.log(frames.length);
    for(let frame of frames)
    {
        console.log(await frame.title());
        
    }
    console.log(await page.title());

    //1)====frame()===name,url
    // let frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1'})
    // await frame1.locator("//input[@name='mytext1']").fill("abc")
    // await expect(await frame1.locator("//input[@name='mytext1']").inputValue()).toContain("abc")

    //2)====framelocator====
    //  let frame2=await page.frameLocator("//frame[@src='frame_2.html']").locator("//input[@name='mytext2']")
    // await frame2.fill("abc")

    //3)==locator().contentframe()
    let frame3=await page.locator("//frame[@src='frame_2.html']").contentFrame()
    await frame3.locator("//input[@name='mytext2']").fill("abc")

    //4)=======handle iframe which is inside another frame===========

    let frame4=await page.locator("//frame[@src='frame_3.html']").contentFrame()
    let button=await frame4.frameLocator("//iframe[@src='https://docs.google.com/forms/d/e/1FAIpQLSf5WiH3jEQApYku0Rl_nreU6_YMuLKAH5ffHuASyykQSIBjmg/viewform?embedded=true']")
                     .locator('//div[@class="ulDsOb" and .="I am a human"]')
        await button.click()
        await page.waitForTimeout(2000)
    

})