// Get DOM elements
const highscoresList = document.getElementById('highscores-list');
const clearButton = document.getElementById('clear');

// Get highscores from local storage or set to empty array if none exist
let highscores = JSON.parse(localStorage.getItem('highscores')) || [];

// Render highscores on page
renderHighscores();

// Add event listener to clear button
clearButton.addEventListener('click', clearHighscores);

// Function to render highscores on page
function renderHighscores() {
  // Clear current list
  highscoresList.innerHTML = '';

  // Create list items for each highscore and append to list
  for (let i = 0; i < highscores.length; i++) {
    const li = document.createElement('li');
    li.textContent = highscores[i].initials + ': ' + highscores[i].score;
    highscoresList.appendChild(li);
  }
}

// Function to clear highscores from local storage and page
function clearHighscores() {
  localStorage.removeItem('highscores');
  highscores = [];
  renderHighscores();
}

// Function to store highscore in local storage and add to list
function storeHighscore(initials, score) {
  const highscore = { initials, score };
  highscores.push(highscore);

  // Sort highscores in descending order based on score
  highscores.sort((a, b) => b.score - a.score);

  // Store highscores in local storage
  localStorage.setItem('highscores', JSON.stringify(highscores));

  // Render updated highscores on page
  renderHighscores();
}
