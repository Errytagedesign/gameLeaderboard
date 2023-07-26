import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { addScores } from '../modules/addScore';

const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');
const scoreBoard = document.querySelector('.leaderBoard');
const addScoreDetails = document.querySelector('#addScores');

addScoreDetails.addEventListener('click', (e) => {
  e.preventDefault();
  addScores(nameInput, scoreInput, scoreBoard);
});
