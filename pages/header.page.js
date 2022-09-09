class HeaderPage {
  get logoutLink() {
    return $('#navbarSupportedContent > ul > li:nth-child(4) > a');
  }

  get linkLink() {
    return $('#navbarSupportedContent > ul > li:nth-child(2) > a');
  }

  get heroFactsLink() {
    return $('#navbarDropdown');
  }

  get wolverineOption() {
    return $('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(1)');
  }

  get spidermanOption() {
    return $('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(2)');
  }

  async heroFactLinkWolverine() {
    await this.heroFactsLink.click();
    await this.wolverineOption.click();
  }

  async heroFactLinkSpiderman() {
    await this.heroFactsLink.click();
    await this.spidermanOption.click();
  }

  get searchField() {
    return $('#search-box');
  }
  get searchButton() {
    return $('#search-form > button');
  }

  async searchThings(name) {
    await this.searchField.setValue(name);
    await this.searchButton.click();
  }

  get wolverineModalWindow() {
    return $('#wolverineModal > div > div');
  }

  get wolverineModalTitleText() {
    return $('#wolverineModalLabel');
  }

  get wolverineModalContentText() {
    return $('#wolverineModal > div > div > div.modal-body');
  }

  get wolverineModalCloseButton() {
    return $('#wolverineModal > div > div > div.modal-footer > button');
  }

  get spidermanModalWindow() {
    return $('#spidermanModal > div > div');
  }
  get spidermanModalTitleText() {
    return $('#spidermanModalLabel');
  }

  get spidermanModalContentText() {
    return $('#spidermanModal > div > div > div.modal-body');
  }

  get spidermanModalCloseButton() {
    return $('#spidermanModal > div > div > div.modal-footer > button');
  }
}

module.exports = new HeaderPage();
