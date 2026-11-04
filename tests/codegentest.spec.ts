import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('radio', { name: 'Female' }).check();
  await page.getByRole('textbox', { name: 'First name:' }).click();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('ramapuramvandhana.248@gmail.com');
  await page.getByRole('textbox', { name: 'Email:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password:' }).fill('Vandhu@369');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' })).toBeVisible();
  await page.getByRole('link', { name: 'Books' }).first().click();
  await page.getByRole('link', { name: 'Computing and Internet', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Computing and Internet' })).toBeVisible();
  await page.locator('#add-to-cart-button-13').click();
  await page.getByRole('link', { name: 'shopping cart', exact: true }).click();
  await expect(page.locator('input[name="itemquantity7205700"]')).toHaveValue('1');
  await page.locator('#termsofservice').check();
  await page.getByRole('button', { name: 'Checkout' }).click();
});