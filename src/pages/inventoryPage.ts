import { Page,Locator } from "@playwright/test"
import { BasePage } from "../core/basePage.ts"
import { UIActions } from "../actions/uiActions"


export class InventoryPage extends BasePage {

     //private page: Page;
 private productItems: Locator;
 private cartIcon: Locator;
 private menuButton: Locator;
 private logoutLink: Locator;
 private firstProductName: Locator;
 private firstProductPrice: Locator;
 private firstProductButton: Locator;
 private uiActions: UIActions;


 constructor(page: Page) {
  super(page);
  this.page = page;
  this.productItems = page.locator(".inventory_item");
  this.cartIcon = page.locator(".shopping_cart_link");
  this.menuButton = page.locator("#react-burger-menu-btn");
  this.logoutLink = page.locator("#logout_sidebar_link");
  this.firstProductName = page.locator(".inventory_item_name");
  this.firstProductButton = page.locator("button");
  this.firstProductPrice = page.locator(".inventory_item_price");
  this.uiActions = new UIActions(page);
 }

    async clickOnMenu(){
        await this.uiActions.click(this.menuButton);
    }

    async clickOnLogout(){
        await this.clickOnMenu();
        await this.uiActions.click(this.logoutLink);
    }

    async isUserInInventoryPage(){
        return await this.uiActions.isVisible(this.menuButton);
    }

async selectFirstProduct() {
  await this.uiActions.click(this.productItems.first().locator(this.firstProductName));
 }

 async addFirstProductToCart() {
  await this.uiActions.click(this.productItems.first().locator(this.firstProductButton));
 }

 async getFirstProductName() {
  return await this.uiActions.getText(this.productItems.first().locator(this.firstProductName));
 }

 async getFirstProductPrice() {
  return await this.uiActions.getText(this.productItems.first().locator(this.firstProductPrice));
 }

 async goToCart() {
  await this.uiActions.click(this.cartIcon);
 }
}