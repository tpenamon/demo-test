import { test, expect, Page } from '@playwright/test';
import { NavigationPage } from '../page-objects/Navigation'

test.beforeEach(async({page}) =>{                                                      // Given I'm at the homepage
    await page.goto('https://testautomationpractice.blogspot.com/')
})

test('ClickHome', async({page}) => {                                                   // And I click the "Home" button in the navigation bar
    const navigateTo = new NavigationPage(page)
   
    await navigateTo.Home()         
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')              //  Then I will see the Homepage 
})

