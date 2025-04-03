import { test as base } from '@playwright/test';

import { HomePage } from './Home.page';
import { SignInPage } from './SignIn.page';
import { SignUpPage } from './SignUp.page';
import { CustomerAccountPage } from './CustomerAccount.page';

export type Pages = {
    homePage: HomePage
    signInPage: SignInPage
    signUpPage: SignUpPage
    customerAccountPage: CustomerAccountPage

};

export const test = base.extend<Pages>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

    signInPage: async ({ page, context }, use) => {
        const signInPage = new SignInPage(page);
        await use(signInPage);
    },

    signUpPage: async ({ page }, use) => {
        const signUpPage = new SignUpPage(page);
        await use(signUpPage);
    },

    customerAccountPage: async ({ page }, use) => {
        const customerAccountPage = new CustomerAccountPage(page);
        await use(customerAccountPage);
    },

});

export {
    expect,
} from '@playwright/test';

