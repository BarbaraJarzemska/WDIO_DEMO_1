class VotePage {
  get headerVP() {
    return $('body > div.container-fluid > div:nth-child(6) > div > h4');
  }

  get xmenVote() {
    return $('#vote-form > div:nth-child(1) > label');
  }

  get avengersVote() {
    return $('#vote-form > div:nth-child(2) > label');
  }

  get deadpoolVote() {
    return $('#vote-form > div:nth-child(3) > label');
  }

  get spidermanVote() {
    return $('#vote-form > div:nth-child(4) > label');
  }

  get ironmanVote() {
    return $('#vote-form > div:nth-child(5) > label');
  }

  get submitButtonVote() {
    return $('#vote-form > button');
  }

  get xmenMovie() {
    return $('#movieName1');
  }

  get xmenMovieNumb() {
    return $('#movieVotes1');
  }

  get avengersMovie() {
    return $('#movieName2');
  }

  get avengersMovieNumb() {
    return $('#movieVotes2');
  }

  get deadpoolMovie() {
    return $('#movieName3');
  }

  get deadpoolMovieNumb() {
    return $('#movieVotes3');
  }

  get spidermanMovie() {
    return $('#movieName4');
  }

  get spidermanMovieNumb() {
    return $('#movieVotes4');
  }

  get ironmanMovie() {
    return $('#movieName5');
  }

  get ironmanMovieNumb() {
    return $('#movieVotes5');
  }
    
    get thankxInfo() {
        return $('#vote-alert');
    }
}

module.exports = new VotePage();
