import { Fitnesstracker1Page } from './app.po';

describe('fitnesstracker1 App', function() {
  let page: Fitnesstracker1Page;

  beforeEach(() => {
    page = new Fitnesstracker1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
