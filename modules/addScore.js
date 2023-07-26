const addScores = (gamer, score, scoreBoard) => {
  const gamerName = gamer.value;
  const gamerScore = score.value;
  if (gamerName !== '' && gamerScore !== '') {
    scoreBoard.innerHTML += `
    <li class="d-flex flex-row">
    <p>${gamerName}: ${gamerScore}</p>
    </li>
    `;
  }
};

module.exports = { addScores };
