import { SlimfastPage } from './app.po';

describe('slimfast App', () => {
  let page: SlimfastPage;

  beforeEach(() => {
    page = new SlimfastPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to jsr!!');
  });
});
