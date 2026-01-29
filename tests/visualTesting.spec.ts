import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layout').click()
})

test('Radio Buttons', async ({page}) => {
    const usingTheGridForm  = page.locator('nb-card', {hasText: 'Using the Grid'})
    // check() wont work here cause our el has class 'visually-hidden'
    // to bypass we add force true
    await usingTheGridForm.getByLabel('Option 2').check({force: true}) 
    await usingTheGridForm.getByRole('radio', {name: 'Option 1'}).check({force: true})

    const radioStatus = await usingTheGridForm.getByRole('radio', {name: 'Option 2'}).isChecked()

    // create a snapshot of using the grid form. This snapshot will serve as a beseline
    // when we run following command for the first time an arror occurs and a folder with a snapshot is created 'writing actual snapshot'
    // when we run the test for the secondtime snapshots will be compared
    // in order to change baseline screenshots (in case of UI has changed) run in terminal npx playwright test --update-snapshots
    await expect(usingTheGridForm).toHaveScreenshot()
    
    // if we do not want to be super presice we add acceptable pix difference
    // useful when we are dealing with instable ui or animation
    // for this test will pass
    //await expect(usingTheGridForm).toHaveScreenshot({maxDiffPixels: 250})

    // // generic assertion
    // expect(radioStatus).toBeTruthy()
    // expect(await usingTheGridForm.getByRole('radio', {name: 'Option 1'}).isChecked()).toBeFalsy()
    // // locator assertion
    // await expect(usingTheGridForm.getByRole('radio', {name: 'Option 2'})).toBeChecked()
    // await expect(usingTheGridForm.getByRole('radio', {name: 'Option 1'})).not.toBeChecked()
})