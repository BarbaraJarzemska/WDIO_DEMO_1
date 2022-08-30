class IntroPage {
    get introHeader() {
        return $('body > div.container-fluid > div:nth-child(1) > h1');
    }

    get introImageText() {
        return $('body > div.container-fluid > div:nth-child(2) > img');
        
    }
}

module.exports = new IntroPage();