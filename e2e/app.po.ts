import {
  browser,
  by,
  element
} from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getCardTitle(): Promise<string> {
    return element(by.css('app-root .mat-card-title')).getText() as Promise<string>;
  }
}
