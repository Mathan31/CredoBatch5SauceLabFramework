import { test} from "../src/core/customFixtures"
import { Constants } from "../src/utils/constants"
import { ExpectUtil } from "../src/utils/expectUtil"
import { StringConstants } from "../src/utils/stringConstance"



test.describe("Login Validation test scenarios", () => {
    test("Login with valid credential and validate the user landing page", async({loginPage,inventoryPage})=>{

        await loginPage.navigateToLoginPage(Constants.BASE_URL);
        await loginPage.performLogin(Constants.USERNAME,Constants.PASSWORD);
        const result = await inventoryPage.isUserInInventoryPage();
        await ExpectUtil.expectToBeTrue(result);
        await inventoryPage.clickOnLogout();
    })

    test("Login with valid username and invalid password credential and validate the user getting the error msg", async({page,loginPage})=>{

        await loginPage.navigateToLoginPage(Constants.BASE_URL);
        await loginPage.performLogin(Constants.USERNAME,"Test");
        await page.waitForTimeout(2000);
        const erroMsg = await loginPage.getErrorMessage();
        await ExpectUtil.assertStringContains(erroMsg,StringConstants.LOGIN_ERROR);
    })
}) 

