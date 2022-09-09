const assert = require('assert');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');

describe('Header Test Suite', () => {
  it('It should redirect to new site', async () => {
    await browser.url('');
    await LoginPage.login('1@2.com', 'password');

    await HeaderPage.linkLink.click();
    assert.equal(await browser.getUrl(), 'https://glitchitsystem.com/');
  });

  it('It should open wolverine option modal', async () => {
    await browser.url('');
    await LoginPage.login('1@2.com', 'password');

    await HeaderPage.heroFactLinkWolverine();
    await browser.pause(1000);
    assert.equal(await HeaderPage.wolverineModalWindow.isDisplayed(), true, 'Modal window is not displayed');
    assert.equal(await HeaderPage.wolverineModalTitleText.getText(), 'Wolverine Fact', 'Text is not correct');
    assert.equal(
      await HeaderPage.wolverineModalContentText.getText(),
      'Wolverine made his first comic book appearance in 1974.',
      'Text is not the same'
    );
  });

  it('Should close wolverine modal', async () => {
    await browser.url('');
    await LoginPage.login('1@2.com', 'password');

    await HeaderPage.heroFactLinkWolverine();
    await browser.pause(1000);
    assert.equal(await HeaderPage.wolverineModalWindow.isDisplayed(), true, 'Modal window is not displayed');

    await HeaderPage.wolverineModalCloseButton.click();
    await browser.pause(1000);
    assert.equal(await HeaderPage.wolverineModalWindow.isDisplayed(), false, 'Modal window is displayed');
  });

  it('It should open spiderman option modal', async () => {
    await browser.url('');
    await LoginPage.login('1@2.com', 'password');

    await HeaderPage.heroFactLinkSpiderman();
    await browser.pause(1000);
    assert.equal(await HeaderPage.spidermanModalWindow.isDisplayed(), true, 'Modal window is not displayed');
    assert.equal(await HeaderPage.spidermanModalTitleText.getText(), 'Spider-Man Fact', 'Title is not correct');
    assert.equal(
      await HeaderPage.spidermanModalContentText.getText(),
      'Spider-man was created by Stan Lee and Steve Ditko and first appeared in 1962.',
      'Spiderman text is not correct'
    );
    await HeaderPage.spidermanModalCloseButton.click();
  });

  it('should close spiderman modal', async () => {
    await browser.url('');
    await LoginPage.login('1@2.com', 'password');

    await HeaderPage.heroFactLinkSpiderman();
    await browser.pause(1000);
    assert.equal(await HeaderPage.spidermanModalWindow.isDisplayed(), true, 'Modal window is not displayed');

    await HeaderPage.spidermanModalCloseButton.click();
    await browser.pause(1000);
    assert.equal(await HeaderPage.spidermanModalWindow.isDisplayed(), false, 'Modal windor is still displayed');
  });

  it('Should search for wolverine', async () => {
    await browser.url('');
    await LoginPage.login('1@2.com', 'password');

    await HeaderPage.searchThings('wolverine');

    assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(await browser.getAlertText(), 'Wolverine is awesome!', 'Text is not the same');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'Alert is still open');
  });

  it('should give error from wrong search', async () => {
    await browser.url('');
    await LoginPage.login('1@2.com', 'password');

    await HeaderPage.searchThings("something");

    assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(
      await browser.getAlertText(),
      'Your search for something returned 0 reults. Try something else.',
      'Text is not the same'
    );
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'Alert is still open');
  });

  it('Should search for spiderman', async () => {
    await browser.url('');
    await LoginPage.login('1@2.com', 'password');

    await HeaderPage.searchThings('spiderman');

    assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(
      await browser.getAlertText(),
      'Your search for spiderman returned 0 reults. Try something else.',
      'Text is not the same'
    );
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'Alert is still open');
  });

  it('Should logout return to base site', async () => {
    await browser.url('');
    await LoginPage.login('1@2.com', 'password');
    await HeaderPage.logoutLink.click();
    assert.equal(await browser.getUrl(), 'http://localhost:8080/index.html#', 'Site is not change to base');
  });
});
