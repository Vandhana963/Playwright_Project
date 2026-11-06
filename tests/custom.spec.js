import {test, expect} from '../fixtures/logindemo.js'

test('login', async({loginlinkfix})=>{

console.log('test')

await expect(loginlinkfix.home.titleimg).toBeVisible()




})