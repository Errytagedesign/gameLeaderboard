const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');

const addScores = async (baseUrl, gameID) => {
  const gamers = {
    user: nameInput.value,
    score: scoreInput.value,
  };

  const endpoints = `${baseUrl}${gameID}/scores/`;

  if (gamers.user !== '' && gamers.score !== '') {
    try {
      const response = await fetch(endpoints, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gamers),
      });

      if (!response.ok) {
        throw new Error(
          `Request failed with status: ${response.status} - ${response.statusText}`,
        );
      }

      const successMessage = await response.json();

      console.log(successMessage);
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = { addScores };
