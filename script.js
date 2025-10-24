

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId + 'Screen').classList.add('active');
}

document.getElementById('saveBtn').addEventListener('click', () => {
  alert('KSh 5 saved successfully!');
  document.getElementById('lastPayment').textContent = '28 Sep 2025';
  let current = parseInt(document.getElementById('totalSaved').textContent.replace('KSh ', ''));
  document.getElementById('totalSaved').textContent = 'KSh ' + (current + 5);
});
