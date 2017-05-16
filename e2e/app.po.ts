import { browser, by, element } from 'protractor';

export class SlimfastPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('jsr-root h1')).getText();
  }
}
