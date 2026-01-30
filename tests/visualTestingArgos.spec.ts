import {test} from '@playwright/test'
import { argosScreenshot } from '@argos-ci/playwright'

test('visual testing with argos', async({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    
    await page.getByText('Form Layout').click()
    await argosScreenshot(page, 'this is form layouts page')
 
    await page.getByText('Forms').click()
    await page.getByText('Datepicker').click()
    await argosScreenshot(page, 'this is date picker page')
})