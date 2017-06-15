import { CodePostPage } from './app.po';

describe('code-post App', () => {
  let page: CodePostPage;

  beforeEach(() => {
    page = new CodePostPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
