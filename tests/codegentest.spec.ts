import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('ramapuramvandhana.248@gmail.com');
  await page.getByRole('textbox', { name: 'Email:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('Vandhu@369');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Books' }).first().click();
  await page.getByRole('link', { name: 'Fiction', exact: true }).click();
  await page.locator('#add-to-cart-button-45').click();
  await page.getByRole('link', { name: 'shopping cart', exact: true }).click();
  await page.locator('#termsofservice').check();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect(page.getByText('Your order has been')).toBeVisible();
  await expect(page.getByRole('strong')).toContainText('Your order has been successfully processed!');
  await expect(page.locator('body')).toMatchAriaSnapshot(`- listitem: "/Order number: \\\\d+/"`);
  await page.getByRole('button', { name: 'Continue' }).click();
});