import { test, expect } from '@playwright/test';

test.beforeEach(async({page}) =>{               //executes before each test is done 
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('filling after using locators', async({page}) => {          
    await page.locator('nb-card').filter({hasText: "Basic form"}).getByRole('textbox', {name: "Email"}).fill("test@test.com")
    await page.locator('nb-card').filter({hasText: "Basic form"}).getByRole('textbox', {name: "Password"}).fill("test@test.com")
   


})

test('filling after using locators 2', async({page}) => {                               // this is that excact same test as the original, just using a constant to shorten it
    const basicForm = page.locator('nb-card').filter({hasText: "Basic form"})
    
    await basicForm.getByRole('textbox', {name: "Email"}).fill("test@test.com")
    await basicForm.getByRole('textbox', {name: "Password"}).fill("test@test.com")
   


})