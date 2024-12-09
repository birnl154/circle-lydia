
alert("Please view this website on desktop for correct rendering :)");


const title = document.getElementById('title');

title.addEventListener('mouseover', () => {
    title.textContent = ' this website is a tour of all the films nominated for Best Picture Academy Award in the past ten years that did not win—aka, the Losers.';
    title.classList.remove('hover-title');
    title.classList.add('hover-paragraph');
});

title.addEventListener('mouseout', () => {
    title.textContent = 'Losers';
    title.classList.remove('hover-paragraph');
    title.classList.add('hover-title');
});