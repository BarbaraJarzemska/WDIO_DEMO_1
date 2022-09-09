const assert = require('assert');
const LoginPage = require('../pages/login.page');
const VotePage = require('../pages/vote.page');

describe('Test Suite', () => {
  beforeEach('should log in to the base page', async () => {
    await browser.url('');
    await LoginPage.login('1@2.com', 'password');
  });

  it('should check header', async () => {
    // await browser.url('');
    // await LoginPage.emailField.setValue('1@2.com');
    // await LoginPage.passwordField.setValue('password');
    // await LoginPage.submitButton.click();

    assert.equal(
      await VotePage.headerVP.getText(),
      'Vote for your favorite Superhero movie',
      'Header text is incorrect'
    );
  });

  it('should check right option', async () => {
    // await browser.url('');
    // await LoginPage.emailField.setValue('1@2.com');
    // await LoginPage.passwordField.setValue('password');
    // await LoginPage.submitButton.click();

    await VotePage.avengersVote.click();

    assert.equal(await VotePage.avengersVote.getText(), 'Avengers', 'Hero text is incorrect - avengers');
    await VotePage.deadpoolVote.click();

    assert.equal(await VotePage.deadpoolVote.getText(), 'Deadpool', 'Hero text is incorrect - deadpool');
  });

  it('should test add vote points for film', async () => {
    // await browser.url('');
    // await LoginPage.emailField.setValue('1@2.com');
    // await LoginPage.passwordField.setValue('password');
    // await LoginPage.submitButton.click();

    let originalValue = await VotePage.avengersMovieNumb.getText();
    let originalValueNumb = parseInt(originalValue);
    await VotePage.avengersVote.click();
    await VotePage.submitButtonVote.click();

    assert.equal(await VotePage.avengersMovieNumb.getText(), originalValueNumb + 1, 'Value is incorrect');

    assert.equal(await VotePage.thankxInfo.isDisplayed(), true, 'Alert is not displayed');
    assert.equal(await VotePage.thankxInfo.getText(), 'Thanks for voting!', 'Text allert is incorrect');
  });
});
