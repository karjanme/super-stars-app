import {
  browser,
  by,
  element
} from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getCardText(): Promise<string> {
    return element(by.css('app-root .mat-card')).getText() as Promise<string>;
  }
}
