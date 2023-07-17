let automationActive = false;
let speedRange = document.getElementById('speedRange');
let timeRange = document.getElementById('timeRange');

function startAutomation() {
  automationActive = true;
}

function stopAutomation() {
  automationActive = false;
}

document.getElementById('startButton').addEventListener('click', startAutomation);
document.getElementById('stopButton').addEventListener('click', stopAutomation);

chrome.action.onClicked.addListener(function () {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['contentScript.js']
  });
});

chrome.storage.local.set({ speed: speedRange.value, timeAdjustment: timeRange.value });

speedRange.addEventListener('input', function () {
  chrome.storage.local.set({ speed: speedRange.value });
});

timeRange.addEventListener('input', function () {
  chrome.storage.local.set({ timeAdjustment: timeRange.value });
});
