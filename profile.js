let favColor = 'pink'
let favPlace = 'Mexico'
let favRitual = 'getting a new book at the bookstore, then having coffee and a pastry while reading'

const revealColor = evt => {
    evt.preventDefault();
	
	alert(`The answer is ${favColor}!`);
}

const revealPlace = evt => {
    evt.preventDefault();
	
	alert(`The answer is ${favPlace}!`);
}

const revealRitual = evt => {
    evt.preventDefault();
	
	alert(`The answer is ${favRitual}!`);
}

let color = document.querySelector('button#color');
let place = document.querySelector('button#place');
let ritual = document.querySelector('button#ritual');

color.addEventListener('click', revealColor);
place.addEventListener('click', revealPlace);
ritual.addEventListener('click', revealRitual);