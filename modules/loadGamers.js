const { renderGameLeader } = require('./renderGameLeaders');

const loadGamers = async (baseUrl, gameID) => {
  const endpoints = `${baseUrl}${gameID}/scores/`;

  try {
    const response = await fetch(endpoints, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(
        `Request failed with status: ${response.status} - ${response.statusText}`,
      );
    }

    const result = await response.json();
    console.log(result);
    renderGameLeader(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { loadGamers };
