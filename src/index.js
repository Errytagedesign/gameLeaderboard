import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { addScores } from '../modules/addScore';
import { createGame } from '../modules/createGame';

const scoreBoard = document.querySelector('.leaderBoard');
const addScoreDetails = document.querySelector('#addScores');

const baseUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/`;

// const gameName = { name: 'Codeeq Game' };

// createGame(baseUrl, gameName);

// ID gotten from the API create game response
const gameID = '8oRf5ZDpwdociFHveP7t';

addScoreDetails.addEventListener('click', (e) => {
  e.preventDefault();
  addScores(baseUrl, gameID);
});
