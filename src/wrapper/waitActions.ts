import { Locator, Page } from '@playwright/test';

export class WaitActions {
  constructor(private page: Page) {}

  static async waitForSelector(locator: Locator, options?: { state?: 'visible' | 'hidden' | 'attached' | 'detached' }): Promise<void> {
    await locator.waitFor(options);
  }


  static async waitForVisibility(locator: Locator, options?: { state?: 'visible' | 'hidden' | 'attached' | 'detached' }): Promise<void> {
    await locator.waitFor({state: 'visible'});
  }

   static async waitForHidden(locator: Locator, options?: { state?: 'visible' | 'hidden' | 'attached' | 'detached' }): Promise<void> {
    await locator.waitFor({state: 'hidden'});
  }

  static async waitForAttached(locator: Locator, options?: { state?: 'visible' | 'hidden' | 'attached' | 'detached' }): Promise<void> {
    await locator.waitFor({state: 'attached'});
  }

  static async waitForDetached(locator: Locator, options?: { state?: 'visible' | 'hidden' | 'attached' | 'detached' }): Promise<void> {
    await locator.waitFor({state: 'detached'});
  }

  static async waitForTimeout(page: Page,timeout: number): Promise<void> {
    await page.waitForTimeout(timeout);
  }
}