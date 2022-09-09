class RosterPage {
  get instructionText() {
    return $('body > div.container-fluid > div:nth-child(3) > div > p');
  }
  get titleRoster() {
    return $('body > div.container-fluid > div:nth-child(4) > h3');
  }

  get listElements() {
    return $('#hero-list');
  }
  get wolverinePos() {
    return $('#hero-list > li:nth-child(1)');
  }

  get ironmanPos() {
    return $('#hero-list > li:nth-child(2)');
  }

  get deadpoolPos() {
    return $('#hero-list > li:nth-child(3)');
  }

  get thoorPos() {
    return $('#hero-list > li:nth-child(4)');
  }

  get spidermanPos() {
    return $('#hero-list > li:nth-child(5)');
  }

  get newItem() {
    return $('#hero-list > li:nth-child(6)');
  }
  get rosterItems() {
    return $$('#hero-list > li');
  }

  get labelHeader() {
    return $('#addHero-form > div > label');
  }

  get searchFieldRoster() {
    return $('#heroInput');
  }
  get submitButtonRoster() {
    return $('#addHero-form > button');
  }

  async addHeroRoster(someHero) {
    await this.searchFieldRoster.setValue(someHero);
    await this.submitButtonRoster.click();
  }
}

module.exports = new RosterPage();
