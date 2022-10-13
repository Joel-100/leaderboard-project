/* eslint-disable no-return-await */

const gameId = 'MfajigELXfDTHFYxkrm1';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

const game = {
  name: 'scores',
};

// creating game
const createGame = async () => {
  const response = await fetch(`${baseUrl}/games/`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(game),
  });
  return await response.json();
};

createGame();

// create score - endpoint => /games/:id/scores/
const createScore = async (name, score) => {
  // creating score object
  const userScore = {
    user: name,
    score,
  };

  // fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ps3snRuZTZ5A3DYTBWNI/scores/')
  const response = await fetch(`${baseUrl}/games/${gameId}/scores/`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(userScore),
  });
  await response.json();
};

// get all scores
const gettingAllScores = async () => {
  const response = await fetch(`${baseUrl}/games/${gameId}/scores/`);
  return await response.json();
};

export { createScore, gettingAllScores };
