import { DogAppPage } from './app.po';

describe('dog-app App', () => {
  let page: DogAppPage;

  beforeEach(() => {
    page = new DogAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
