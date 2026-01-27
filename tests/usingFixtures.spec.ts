import { expect } from '@playwright/test'
import { test } from '../test-options'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker'

test('fixture example', async ({page, formLayoutsPage}) => {
    const pm = new PageManager(page)

    const userEmail = faker.internet.email()
    const password = faker.internet.password()
    
    await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption(userEmail, password, 'Option 1')
    expect(formLayoutsPage).toEqual('this is a fixture')
})

test('fixtures page manager and formLayoutsPage', async ({formLayoutsPage, pageManager}) => {
    const userEmail = faker.internet.email()
    const password = faker.internet.password()
    
    await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption(userEmail, password, 'Option 1')
    expect(formLayoutsPage).toEqual('this is a fixture')
})