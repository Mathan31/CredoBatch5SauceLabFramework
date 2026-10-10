import { Page,Locator } from "@playwright/test"
import { BasePage } from "../core/BasePage"
import { UIActions } from "../actions/uiActions"


export class InventoryPage extends BasePage {

    private menuButton: Locator;
    private logout: Locator;
    private inventoryTitle: Locator;
    private uiAction: UIActions;
    

    constructor(page: Page){
        super(page);
        this.menuButton = page.locator("#react-burger-menu-btn");
        this.logout = page.locator("//a[text()='Logout']");
        this.inventoryTitle = page.locator("//div[text()='Swag Labs']");
        this.uiAction = new UIActions(page);
        
    }

    async isUserIninventoryPage(){
        return await this.uiAction.isVisible(this.inventoryTitle);
    }

    async clickOnMenu(){
        await this.uiAction.click(this.menuButton);
    }

    async clickOnLogout(){
        await this.uiAction.click(this.logout);
    }

}