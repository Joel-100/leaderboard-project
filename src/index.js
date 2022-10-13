import {
  name, score, submit, refresh, list,
} from './modules/domElements.js';
import { createScore, gettingAllScores } from './modules/API.js';

// submitting deatils
submit.addEventListener('click', () => {
  const nameValue = name.value;
  const scoreValue = score.value;
  createScore(nameValue, scoreValue);
  name.value = '';
  score.value = '';
});

// getting all scores
const diplayScores = async () => {
  const scoresData = await gettingAllScores();
  const scores = scoresData.result;
  scores.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.user}: ${item.score}`;
    list.appendChild(li);
  });
};
diplayScores();

// add event listener to the resfresh button
refresh.addEventListener('click', () => {
  window.location.reload();
});
