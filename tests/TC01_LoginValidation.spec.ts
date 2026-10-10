import { test} from "@playwright/test"
import { LoginPage } from "../src/pages/loginPage"
import { InventoryPage } from "../src/pages/inventoryPage"
import { Constants } from "../src/utils/constants"
import { ExpectUtil } from "../src/utils/expectUtil"
import { StringConstants } from "../src/utils/stringConstance"

test.describe("Login Validation test scenarios", () => {
    test("Login with valid credential and validate the user landing page", async({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage(Constants.BASE_URL);
        await loginPage.performLogin(Constants.USERNAME,Constants.PASSWORD);
        const inventoryPage = new InventoryPage(page);
        const result = await inventoryPage.isUserIninventoryPage();
        await ExpectUtil.expectToBeTrue(result);
        await inventoryPage.clickOnMenu();
        await inventoryPage.clickOnLogout();
    })

    test("Login with valid username and invalid password credential and validate the user getting the error msg", async({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage(Constants.BASE_URL);
        await loginPage.performLogin(Constants.USERNAME,"Test");
        await page.waitForTimeout(2000);
        const erroMsg = await loginPage.getErrorMessage();
        await ExpectUtil.assertStringContains(erroMsg,StringConstants.LOGIN_ERROR);
    })
})

