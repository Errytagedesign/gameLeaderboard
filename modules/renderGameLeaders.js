const scoreBoard = document.querySelector('.leaderBoard');

const renderGameLeader = async (leaders) => {
  const gamers = leaders.result.map(
    ({ user, score }) => `<li> ${user}: ${score} </li>`,
  );

  scoreBoard.innerHTML = gamers.join('');
};

module.exports = { renderGameLeader };
