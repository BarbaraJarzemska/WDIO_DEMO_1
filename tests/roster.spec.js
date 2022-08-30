const assert = require('assert');
const LoginPage = require('../pages/login.page');
const RosterPage = require('../pages/roster.page');

describe('Roster Test Suite', () => {
  it('should description and header be right', async () => {
    await browser.url('');
    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    assert.equal(
      await RosterPage.instructionText.getText(),
      'Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.',
      'Instruction text is not the same'
    );

    assert.equal(await RosterPage.titleRoster.getText(), 'Build Your Superhero Roster:', 'Header text is not correct');
    assert.equal(await RosterPage.labelHeader.getText(), 'ADD A SUPERHERO', 'Text from label is incorrect');
  });

  it('should test correct Text label of each character', async () => {
    await browser.url('');
    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    assert.equal(await RosterPage.wolverinePos.getText(), 'Wolverine', 'Text is the same');
    assert.equal(await RosterPage.ironmanPos.getText(), 'Iron Man', 'Text is the same');
    assert.equal(await RosterPage.deadpoolPos.getText(), 'Deadpool', 'Text is the same');
    assert.equal(await RosterPage.thoorPos.getText(), 'Thor', 'Text is the same');
    assert.equal(await RosterPage.spidermanPos.getText(), 'Spider-Man', 'Text is the same');
  });

  it('should check attribute', async () => {
    await browser.url('');
    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    assert.equal(
      await RosterPage.searchFieldRoster.getAttribute('placeholder'),
      'Enter Hero',
      'Text from attribute is not correct'
    );
  });

  it('should add correctly a new superhero', async () => {
    await browser.url('');
    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    var newItem = 'Bob';
    await RosterPage.searchFieldRoster.setValue(newItem);
    await RosterPage.submitButtonRoster.click();

    assert.equal(await RosterPage.newItem.getText(), newItem, 'New hero is not add');
  });
});
