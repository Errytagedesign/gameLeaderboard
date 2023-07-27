const scoreBoard = document.querySelector('.leaderBoard');

const renderGameLeader = async (leaders) => {
  const gamers = leaders.result.map(
    ({ user, score }) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      `<li class="d-flex flex-row justify-content-between mb-4 px-2 border-bottom"> <h3 class="col-6"> ${user}:  </h3> <h3 class="bg-primary text-white col-5 text-end pe-3"> ${score} </h3> </li>`,
  );

  scoreBoard.innerHTML = gamers.join('');
};

module.exports = { renderGameLeader };
