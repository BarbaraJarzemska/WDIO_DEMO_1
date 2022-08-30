const assert = require('assert');
const LoginPage = require('../pages/login.page');
const IntroPage = require('../pages/intro.page');
const HeaderPage = require('../pages/header.page');
const VotePage = require('../pages/vote.page');
const RosterPage = require('../pages/roster.page');

describe('Test Suite', () => {
  it('should verify static element', async () => {
    await browser.url('');
    //Login Page
    assert.equal(await LoginPage.headingText.isDisplayed(), true, 'LoginPage headingText');
    assert.equal(await LoginPage.emailLabel.isDisplayed(), true, 'LoginPage emailLabel');
    assert.equal(await LoginPage.emailField.isDisplayed(), true, 'LoginPage emailField');
    assert.equal(await LoginPage.passwordLabel.isDisplayed(), true, 'LoginPage passwordLabel');
    assert.equal(await LoginPage.passwordField.isDisplayed(), true, 'LoginPage passwordField');
    assert.equal(await LoginPage.rememberLoginCheckbox.isDisplayed(), true, 'LoginPage rememberLoginCheckbox');
    assert.equal(await LoginPage.rememberLoginLabel.isDisplayed(), true, 'LoginPage rememberLoginLabel');
    assert.equal(await LoginPage.submitButton.isDisplayed(), true, 'LoginPage submitbutton');

    // Log in to the page
    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.submitButton.click();

    //Header Page
    assert.equal(await HeaderPage.logoutLink.isDisplayed(), true, 'HeaderPage logoutLink');
    assert.equal(await HeaderPage.linkLink.isDisplayed(), true, 'HeaderPage linkLink');
    assert.equal(await HeaderPage.heroFactsLink.isDisplayed(), true, 'HeaderPage heroFactsLink');
    assert.equal(await HeaderPage.searchField.isDisplayed(), true, 'HeaderPage searchField');
    assert.equal(await HeaderPage.searchButton.isDisplayed(), true, 'HeaderPage searchButton');
    await HeaderPage.heroFactsLink.click();
    assert.equal(await HeaderPage.wolverineOption.isDisplayed(), true, 'HeaderPage wolverineOption');
    assert.equal(await HeaderPage.spidermanOption.isDisplayed(), true, 'HeaderPage spidermanOption');

    // IntroPage

    assert.equal(await IntroPage.introHeader.isDisplayed(), true, 'IntroPage introHeader');
    assert.equal(await IntroPage.introImageText.isDisplayed(), true, 'IntroPage introImageText');

    // RosterPage
    assert.equal(await RosterPage.instructionText.isDisplayed(), true, 'RosterPage instructionText');
    assert.equal(await RosterPage.titleRoster.isDisplayed(), true, 'RosterPage titleRoster');
    assert.equal(await RosterPage.listElements.isDisplayed(), true, 'RosterPage listElements');
    assert.equal(await RosterPage.wolverinePos.isDisplayed(), true, 'RosterPage wolverinePos');

    assert.equal(await RosterPage.ironmanPos.isDisplayed(), true, 'RosterPage ironmanPos');
    assert.equal(await RosterPage.deadpoolPos.isDisplayed(), true, 'RosterPage deadpoolPos');
    assert.equal(await RosterPage.thoorPos.isDisplayed(), true, 'RosterPage thoorPos');
    assert.equal(await RosterPage.spidermanPos.isDisplayed(), true, 'RosterPage spidermanPos');
    assert.equal(await RosterPage.searchFieldRoster.isDisplayed(), true, 'RosterPage searchFieldRoster');
    assert.equal(await RosterPage.submitButtonRoster.isDisplayed(), true, 'RosterPage submitButtonRoster');

    //VotePage
    assert.equal(await VotePage.headerVP.isDisplayed(), true, 'VotePage headerVP');
    assert.equal(await VotePage.xmenVote.isDisplayed(), true, 'VotePage xmenVote');
    assert.equal(await VotePage.avengersVote.isDisplayed(), true, 'VotePage avengersVote');
    assert.equal(await VotePage.deadpoolVote.isDisplayed(), true, 'VotePage deadpoolVote');
    assert.equal(await VotePage.spidermanVote.isDisplayed(), true, 'VotePage spidermanVote');
    assert.equal(await VotePage.ironmanVote.isDisplayed(), true, 'VotePage ironmanVote');
    assert.equal(await VotePage.submitButtonVote.isDisplayed(), true, 'VotePage submitButtonVote');
    assert.equal(await VotePage.xmenMovie.isDisplayed(), true, 'VotePage xmenMovie');
    assert.equal(await VotePage.avengersMovie.isDisplayed(), true, 'VotePage avengersMovie');
    assert.equal(await VotePage.avengersMovieNumb.isDisplayed(), true, 'VotePage avengersMovieNumb');
    assert.equal(await VotePage.deadpoolMovie.isDisplayed(), true, 'VotePage deadpoolMovie');
    assert.equal(await VotePage.deadpoolMovieNumb.isDisplayed(), true, 'VotePage deadpoolMovieNumb');
    assert.equal(await VotePage.spidermanMovie.isDisplayed(), true, 'VotePage spidermanMovie');
    assert.equal(await VotePage.spidermanMovieNumb.isDisplayed(), true, 'VotePage spidermanMovieNumb');
    assert.equal(await VotePage.ironmanMovie.isDisplayed(), true, 'VotePage ironmanMovie');
    assert.equal(await VotePage.ironmanMovieNumb.isDisplayed(), true, 'VotePage ironmanMovieNumb');

  });
});
