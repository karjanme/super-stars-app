import {
  browser,
  logging
} from 'protractor';
import { AppPage } from './app.po';

describe('super-stars-app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display message', async () => {
    page.navigateTo();
    const cardText = await page.getCardTitle();
    expect(cardText).toEqual('Hello World!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
