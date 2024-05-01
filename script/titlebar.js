document.getElementById('min-btn').addEventListener('click', function() {
  window.electron.minimize();
});

document.getElementById('max-btn').addEventListener('click', function() {
  window.electron.maximize();
});

document.getElementById('close-btn').addEventListener('click', function() {
  window.electron.close();
});