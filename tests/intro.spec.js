const assert = require('assert');
const LoginPage = require('../pages/login.page');
const IntroPage = require('../pages/intro.page');

describe('Intro Test Suite', () => {
  it('Should intro header text be correct', async () => {
    await browser.url('');
    await LoginPage.login('1@2.com', 'password');
    assert.equal(await IntroPage.introHeader.getText(), 'Superhero Roster', 'Text is not equal');
  });

  it('Should display correct image', async () => {
    await browser.url('');
    await LoginPage.login('1@2.com', 'password');
    assert.equal(await IntroPage.introImageText.getAttribute('alt'), 'Superhero Image', 'Tmage text is not the same');
    assert.equal(
      await IntroPage.introImageText.getAttribute('src'),
      './images/superhero.png',
      'Image sourse is not the same'
    );
  });
});
