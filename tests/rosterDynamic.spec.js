const assert = require('assert');
const LoginPage = require('../pages/login.page');
const RosterPage = require('../pages/roster.page');

describe('Dynamic roster item suite', () => {
  it('Should cerate single element', async () => {
    await browser.url('');
    await LoginPage.login('1@2.com', 'password');
    
    await RosterPage.addHeroRoster('Sponge Bob');

    assert.equal(await RosterPage.rosterItems[5].getText(), 'Sponge Bob', 'Hero text is not the same');
  });

  it('Should have default list of heros', async () => {
    let heros = ['Wolverine', 'Iron Man', 'Deadpool', 'Thor', 'Spider-Man'];

    await browser.url('');
    await LoginPage.login('1@2.com', 'password');

    for (let i = 0; i < heros.length; i++) {
      assert.equal(await RosterPage.rosterItems[i].getText(), heros[i], 'Hero name is not the same');
    }
  });

  it('Should create multiple elements', async () => {
    let heros = ['Pony', 'SheHulk', 'Hulk', 'Groot', 'SnowQueen'];

    await browser.url('');
    await LoginPage.login('1@2.com', 'password');

    for (let i = 0; i < heros.length; i++) {
      // await RosterPage.searchFieldRoster.setValue(heros[i]);
      // await RosterPage.submitButtonRoster.click();
      await RosterPage.addHeroRoster(heros[i]);
    }

    for (let i = 5; i < 10; i++) {
      assert.equal(await RosterPage.rosterItems[i].getText(), heros[i - 5], 'The new names is not the same');
    }
  });
});
