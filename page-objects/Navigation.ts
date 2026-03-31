import { test, expect, Page } from '@playwright/test';

export class NavigationPage {

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }


    async Home(){
        await this.page.getByText('Home').first().click()
    }
    async UndemyCourses(){
        await this.page.getByText('UndemyCourses').click()
    }
    async OnlineTraining(){
        await this.page.getByText('OnlineTraining').click()
    }
    async Blog(){
        await this.page.getByText('Blog').click()
    }
    async PlaywrightPractice(){
        await this.page.getByText('PlaywrightPractice').click()
    }
   
    
}