import { NewsMashPage } from './app.po';

describe('news-mash App', () => {
  let page: NewsMashPage;

  beforeEach(() => {
    page = new NewsMashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
