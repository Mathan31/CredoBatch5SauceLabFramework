import { Page, Locator } from '@playwright/test';
import { ExceptionUtil } from '../utils/exceptionUtil'
import { WaitActions } from '../wrapper/waitActions';

export class UIActions { 

  constructor(private readonly page: Page) {}

  public async navigateTo(url: string): Promise<void> {
    try{
      await this.page.goto(url, { waitUntil: 'load' });
    }catch(error){
       await ExceptionUtil.handleException(error as Error, this.page);
    }
    
  }

  public getLocator(locator: Locator, description?: string): Locator {
    return locator;
  }

  public async click(locator: Locator): Promise<void> {
    try{
      await WaitActions.waitForAttached(locator);
      await this.getLocator(locator).click();
    }catch(error){
       await ExceptionUtil.handleException(error as Error, this.page);
    }
    
  }

  public async fill(locator: Locator, value: string): Promise<void> {
    try{
      await WaitActions.waitForAttached(locator);
      await this.getLocator(locator).fill(value);
    }catch(error){
       await ExceptionUtil.handleException(error as Error, this.page);
    }
    
  }

  public async getText(locator: Locator): Promise<string> {
     try{
      await WaitActions.waitForAttached(locator);
      return (await this.getLocator(locator).innerText()).trim();
    }catch(error){
       await ExceptionUtil.handleException(error as Error, this.page);
    }
   return "";
  }

  public async isVisible(locator: Locator): Promise<boolean> {
     try{
      await WaitActions.waitForAttached(locator);
      return (await this.getLocator(locator).isVisible());
    }catch(error){
       await ExceptionUtil.handleException(error as Error, this.page);
    }
   return false;
  }
}