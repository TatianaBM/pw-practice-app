import { test as base } from '@playwright/test'
import { PageManager } from './page-objects/pageManager'


// Declare the types of my fixtures
export type TestOptions = {
    formLayoutsPage : string,
    pageManager: PageManager
}

// extend base test by providing formLayoutsPage
// we can {auto: true} To create an automatic fixture
// Automatic fixtures are set up for each test/worker, even when the test does not list them directly
export const test = base.extend<TestOptions>({
    formLayoutsPage: async({page}, use ) => {
        // Set up the fixture
        // add steps to navigate to forms layouts page
        await page.goto('/')
        await page.getByText('Forms').click()
        await page.getByText('Form Layout').click()
        // Use the fixture value in the test
        await use('this is a fixture')
        // everything we put after use block will be served as a teardown
    },
    
    pageManager: async({page}, use) => {
        const pm = new PageManager(page)
        await use(pm)
    }
})