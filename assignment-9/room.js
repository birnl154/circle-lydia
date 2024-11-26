
const button = document.querySelector('button');
const nightDiv = document.getElementById('night');

button.addEventListener('click', function () {
 
  if (nightDiv.classList.contains('day')) {
    nightDiv.classList.remove('day');
    nightDiv.classList.add('night');
  } else {
    nightDiv.classList.remove('night');
    nightDiv.classList.add('day');
  }
});