import { Page,Locator } from "@playwright/test"
import { BasePage } from "../core/basePage" 
import { UIActions } from "../actions/uiActions"


export class LoginPage extends BasePage {

    private userNameInput: Locator;
    private passwordInput: Locator;
    private loginBtn: Locator;
    private uiAction: UIActions;
    private errorMessage: Locator;

    constructor(page: Page){
        super(page);
        this.userNameInput = page.locator("#user-name");
        this.passwordInput = page.locator("#password");
        this.loginBtn = page.locator("#login-button");
        this.errorMessage = page.locator("h3[data-test='error']");
        this.uiAction = new UIActions(page);
    }

    async navigateToLoginPage(baseUrl: string){
        await this.uiAction.navigateTo(baseUrl);
    }

    async enterUserName(userName: string){
        await this.uiAction.fill(this.userNameInput,userName);
    }

    async enterPassword(password: string){
        await this.uiAction.fill(this.passwordInput,password);
    }

    async clickOnLogin(){
        await this.uiAction.click(this.loginBtn);
    }

    async performLogin(userName: string,password: string){
        await this.enterUserName(userName);
        await this.enterPassword(password);
        await this.clickOnLogin();
    }

    async getErrorMessage(){
       return await this.uiAction.getText(this.errorMessage);
    }
}