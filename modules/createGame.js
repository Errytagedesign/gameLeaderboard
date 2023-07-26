const createGame = async (baseUrl, gameName) => {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gameName),
    });

    // Check if the response has a successful status code (e.g., 2xx)
    if (!response.ok) {
      // If the response is not successful, throw an error with the status text
      throw new Error(
        `Request failed with status: ${response.status} - ${response.statusText}`,
      );
    }
    const gameID = await response.json();
    console.log(gameID);
  } catch (er) {
    console.log(er);
  }
};

module.exports = { createGame };
