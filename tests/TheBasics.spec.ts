import { test, expect } from '@playwright/test';

test.beforeEach(async({page}) =>{               //executes before each test is done 
    await page.goto('https://testautomationpractice.blogspot.com/')
})

test('Locators for GUI Elements', async({page}) => {          
    page.locator('#form-control')              // by tag name...make sure to use # first (selector)

    page.locator('phone') // by Id (selector)

    page.locator('.form-check-inline')    // by partial Class vaule (make sure to use . in front) (selector)

    page.locator('input-full-width size-medium status-basic shape-rectangle nb-transition')    // by entire Class value (make sure to use . in front) (selector)
    
    page.locator('[placeholder="Enter EMail"]')    // by attribute (make sure to use [] between) (selector)

    page.locator('class="form-control"')        // by entire class value

    page.locator('#form-control[placeholder="Enter EMail"]')   //by combining multiple attributes selector                                             

    page.locator(':text("Gend")') // by partial text match

    page.locator(':text("Colors")') // by exact text   match

})

test('User Facing Locators for GUI Elements', async({page}) => {                               //  this is that excact same test as the original, just using a constant to shorten it
    
    await page.getByRole('textbox', {name: "Phone"}).fill("9999999999")
    await page.getByRole('textbox', {name: "Email"}).fill("test@test.com")
    await page.getByRole('textbox', {name: "Name"}).fill("Timothy")
    await page.getByText('Submit').first().click()
    await page.getByTitle('Automation Testing Practice')
   
})

test('Lets just fill out the form', async({page}) => {
    await page.getByRole('textbox', {name: "Phone"}).fill("9999999999")
    await page.getByRole('textbox', {name: "Email"}).fill("test@test.com")
    await page.getByRole('textbox', {name: "Name"}).fill("Timothy")
    await page.getByLabel('Address').fill('secrets')
    await page.getByLabel('Female').check()
    await page.getByRole('checkbox', {name: "Sunday"}).click()
    await page.getByRole('checkbox', {name: "Tuesday"}).click()
    await page.getByLabel('country').selectOption('france')
    await page.getByLabel('color').selectOption('green')
    await page.getByLabel('sorted list').selectOption('zebra')
    await page.getByText('Date Picker 1 (mm/dd/yyyy): ').click()
        await page.locator('[class="ui-datepicker-calendar"]').getByText('18').click()
    await page.getByText('Date Picker 2  (dd/mm/yyyy) : ').click()
       await page.locator('[class="ui-datepicker-calendar"]').getByText('18').click()
  



})