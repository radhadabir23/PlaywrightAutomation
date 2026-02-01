import { test , expect} from '@playwright/test';
import { promises } from 'dns';

test('Browser context playwright test',async({browser})=>
{
//chrome -plugins/cookies
    const context= await browser.newContext();
    const page =await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // console.log(await page.title());
    // await expect(page).toHaveTitle("Google");
    await page.locator('#username').fill("rahulshetty");
    await page.locator("[type='password']").fill("learning");
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(await page.locator("[style*='block']")).toContainText('Incorrect');

});

test('First playwright test',async({browser,page})=>
{
//chrome -plugins/cookies
   await page.goto("https://gmail.com");
   console.log(await page.title());
   await expect(page).toHaveTitle("Gmail");
});


test('drop down',async({browser})=>
{
//chrome -plugins/cookies
    const context= await browser.newContext();
    const page =await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // console.log(await page.title());
    // await expect(page).toHaveTitle("Google");
    await page.locator('#username').fill("rahulshetty");
    await page.locator("[type='password']").fill("learning");
    const dropdown=await page.locator("//select[@class='form-control']");
    await dropdown.selectOption("consult");
    // await page.locator('#signInBtn').click();
    
    //Radio button
    await page.locator("//input[@value='user']").click();
    await page.locator("//button[@id='okayBtn']").click()

    console.log(await page.locator("//input[@value='user']").last().isChecked());
    await expect(page.locator("//input[@value='user']").last()).toBeChecked();

    //Checkbox
    const checkbox= await page.locator("#terms");
    await checkbox.click();
    await expect(checkbox).toBeChecked();
    await checkbox.uncheck();
    expect (await checkbox.isChecked()).toBeFalsy();

    //Blinking text on page 
    const blinkText=page.locator("//a[@class='blinkingText']");
    await expect(blinkText).toHaveAttribute("class","blinkingText");


    // await page.locator("//button[@id='okayBtn']").click();

    // await page.pause();
    // console.log(await page.locator("[style*='block']").textContent());
    // await expect(await page.locator("[style*='block']")).toContainText('Incorrect');

});


test.only('Child window test case ',async({browser})=>
{
//chrome -plugins/cookies
    const context= await browser.newContext();
    const page =await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    //Blinking text on page 
    const blinkText=page.locator("//a[@class='blinkingText']");
    await expect(blinkText).toHaveAttribute("class","blinkingText");

    const [newPage]=await Promise.all(
        [context.waitForEvent('page'),
            blinkText.click(),
        ])

         const redText = await newPage.locator(".red").textContent();
        //  console.log(redText);
         
         const arrayText=redText.split("@");
         const domain = arrayText[1].split(" ")[0];
         console.log(domain);

        await page.locator("//input[@id='username']").fill(domain);
        await page.pause();
        console.log(await page.locator("//input[@id='username']").textContent());
        


});