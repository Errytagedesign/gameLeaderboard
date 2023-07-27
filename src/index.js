import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { addScores } from '../modules/addScore';
import { createGame } from '../modules/createGame';
import { loadGamers } from '../modules/loadGamers';

const addScoreDetails = document.querySelector('#addScores');
const reloadScores = document.querySelector('#loadGamer');

// eslint-disable-line operator-linebreak
const baseUrl =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const gameName = { name: 'Codeeq Game' };

createGame(baseUrl, gameName);

// ID gotten from the API create game response
const gameID = '8oRf5ZDpwdociFHveP7t';

addScoreDetails.addEventListener('click', (e) => {
  e.preventDefault();
  addScores(baseUrl, gameID);
});

reloadScores.addEventListener('click', () => {
  loadGamers(baseUrl, gameID);
});
