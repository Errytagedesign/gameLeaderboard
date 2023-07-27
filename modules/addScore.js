const { clearInput } = require('./clearInput');

const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');
const message = document.querySelector('#message');

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

      // Clear input field
      clearInput(nameInput, scoreInput);

      // display success message
      message.innerHTML = `
      <div class="p-3 mb-2 bg-success text-white mt-5">
      <small > ${successMessage.result} </small>
      </div>
     `;

      // CLear the success message after 3 seconds
      setTimeout(() => {
        message.innerHTML = '';
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = { addScores };
