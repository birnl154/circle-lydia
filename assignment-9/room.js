// Select the button and the 'night' div
const button = document.querySelector('button');
const nightDiv = document.getElementById('night');

// Add an event listener to the button
button.addEventListener('click', function () {
  // Toggle the 'day' and 'night' classes
  if (nightDiv.classList.contains('day')) {
    nightDiv.classList.remove('day');
    nightDiv.classList.add('night');
  } else {
    nightDiv.classList.remove('night');
    nightDiv.classList.add('day');
  }
});