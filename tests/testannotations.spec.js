import {test} from "@playwright/test"
//only...it will make only this one test gets executed
// test.only("test annotations",async({page})=>{

//     console.log("test 1");
// })
//skip..it will skip the test
// test.skip("test 2",async({browserName})=>{
//     //test.skip(browserName==="firefox")
//     console.log("test 2");
    
    
// })

// //fail..if we give wrong url and use fail, it will pass the test and 
// // if u give crrct url and use fail then it will fail the test
test("test 3",async({page})=>{

   await page.goto("savfdngfh")
    
    console.log("test 3");
    
})

// //fixme
// test.fixme("test 4",async({page})=>{

//    await page.goto("savfdngfh")
    
//     //console.log("test 4");
    
// })

//slow()...it will give the thrice of the time which already been set in configuration file 
// test("test 5",async({page})=>{

//    test.slow()
    
//     console.log("test 4");
    
// })

//describe...used to group the tests
// test.describe("login",async()=>{

//     test("valid credentials",async({browserName})=>{

//     console.log("test 2");
//     console.log(browserName);
    
// })

// test("test for invalid credentials",async()=>{
//     console.log("test 3");
// })
// })

//setTimeout..to set the particular time for the test execution
test.describe("login",async()=>{

    test("valid credentials",async({browserName})=>{

   test.setTimeout(3000)
    
})

test("test for invalid credentials",async()=>{
    console.log("test 3");
})
})