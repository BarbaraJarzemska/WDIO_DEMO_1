const assert = require('assert');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');

describe('Login Test Suite', () => {
  //valid email : 1@2.com
  //valid password: password
  it('should display error when password is missing', async () => {
    await browser.url('');
    await LoginPage.emailField.setValue('test@test.com');
    await LoginPage.submitButton.click();
    assert.equal(await browser.isAlertOpen(), true, 'Allert is not open');
    assert.equal(await browser.getAlertText(), 'Please enter an email and password', 'Alert text is not equal');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'The allert is still open');
    // browser.pause(3000);
  });
  it('should display error when email is missing', async () => {
    await browser.url('');
    await LoginPage.passwordField.setValue('blabla');
    await LoginPage.submitButton.click();
    assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(await browser.getAlertText(), 'Please enter an email and password', 'Alert text is not equal');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'The allert is still open');
  });
  it('should display error when email and password is missing', async () => {
    await browser.url('');
    await LoginPage.submitButton.click();
    assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(await browser.getAlertText(), 'Please enter an email and password', 'Alert text is not equal');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'The alert is still open');
  });
  it('should dispaly error when email is incorrect', async () => {
    await browser.url('');
    await LoginPage.emailField.setValue('dupa@wp.pl');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();
    assert.equal(await browser.isAlertOpen(), true, 'The alert is open');
    assert.equal(await browser.getAlertText(), 'Invalid email and password', 'Alert text is not equal');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'The alert is still open');
  });
  it('should display error when password is incorrect', async () => {
    await browser.url('');
    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password2');
    await LoginPage.submitButton.click();
    assert.equal(await browser.isAlertOpen(), true, 'The alert is open');
    assert.equal(await browser.getAlertText(), 'Invalid email and password', 'Alert text is not equal');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'The alert is still open');
  });
  it('should display error when password case is incorrect', async () => {
    await browser.url('');
    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('PASSWORD');
    await LoginPage.submitButton.click();
    assert.equal(await browser.isAlertOpen(), true, 'The alert is open');
    assert.equal(await browser.getAlertText(), 'Invalid email and password', 'Alert text is not equal');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'The alert is still open');
  });

  it('should login with valid email and password', async () => {
    await browser.url('');
    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    assert.equal(await LoginPage.overlay.isDisplayed(), false, 'Overlay is still displayed');
  });

  it('Should remember login creds', async () => {
    await browser.url('');
    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.rememberLoginCheckbox.click();
    await LoginPage.submitButton.click();

    assert.equal(await LoginPage.overlay.isDisplayed(), false, 'Overlay is still displayed');
    await HeaderPage.logoutLink.click();
    assert.equal(await LoginPage.overlay.isDisplayed(), true, 'Overlay is not displayes');
    assert.equal(await LoginPage.emailField.getValue(), '1@2.com', 'The email is not correct');
    assert.equal(await LoginPage.passwordField.getValue(), 'password', 'Password is incorrect');
    assert.equal(await LoginPage.rememberLoginCheckbox.isSelected(), true, 'Checkbox is not check');
  });

  it('Should not remember login creeds', async () => {
    await browser.url('');
    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    assert.equal(await LoginPage.overlay.isDisplayed(), false, 'Overlay is still displayed');
    await HeaderPage.logoutLink.click();
    assert.equal(await LoginPage.overlay.isDisplayed(), true, 'Overlay is not displayes');
    assert.equal(await LoginPage.emailField.getValue(), '', 'The email is not correct');
    assert.equal(await LoginPage.passwordField.getValue(), '', 'Password is incorrect');
    assert.equal(await LoginPage.rememberLoginCheckbox.isSelected(), false, 'Checkbox is not check');
  });
});
