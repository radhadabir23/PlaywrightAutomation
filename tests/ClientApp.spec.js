import { test , expect} from '@playwright/test';

test('Client Application test',async({browser})=>
{
//chrome -plugins/cookies
    const context= await browser.newContext();
    const page =await context.newPage();

    const username =  page.locator("//input[@id='userEmail']");
    const password = page.locator("//input[@id='userPassword']");
    const btnSignIn =  page.locator("//input[@id='login']");

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    // console.log(await page.title());
    // await expect(page).toHaveTitle("Google");
    await username.fill("radha.dabir94@gmail.com");
    await password.fill("Radha@123");
    await btnSignIn.click();

    // console.log(await page.locator("//b[contains(text(),'ADIDAS ORIGINAL')]").textContent());
    // await expect(await page.locator("[style*='block']")).toContainText('Incorrect');
    await  page.locator("//h5").first().waitFor();
    await  page.waitForLoadState("networkidle");
    const alltitles=await page.locator("//h5").allTextContents();
    console.log(alltitles)


});