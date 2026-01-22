import { test , expect} from '@playwright/test';

test('Browser context playwright test',async({browser})=>
{
//chrome -plugins/cookies
    const context= await browser.newContext();
    const page =await context.newPage();
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

});

test('First playwright test',async({browser,page})=>
{
//chrome -plugins/cookies
   await page.goto("https://gmail.com");
   console.log(await page.title());
   await expect(page).toHaveTitle("Gmail");
});
