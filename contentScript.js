// contentScript.js

function automateGame(speed, timeAdjustment) {
  const gameContainer = document.querySelector('.game-container');

  setInterval(() => {
    if (GameManager.isGameTerminated()) {
      console.log('Game Over!');
      clearInterval(automationInterval);
    } else {
      gameContainer.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 38 })); // Arrow Up
      gameContainer.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 40 })); // Arrow Down
      gameContainer.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 37 })); // Arrow Left
      gameContainer.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 39 })); // Arrow Right
    }
  }, timeAdjustment / speed);
}

chrome.storage.local.get(['speed', 'timeAdjustment'], function (result) {
  const { speed, timeAdjustment } = result;
  const initialSpeed = parseFloat(speed) || 1.0;
  const initialTimeAdjustment = parseFloat(timeAdjustment) || 0.1;
  automateGame(initialSpeed, initialTimeAdjustment);
});
