console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted!');
}

function luckyCat(evt) {
	evt.preventDefault();

	alert('Little tuxedo cat approves of your haircut and bestows upon you a blessing!')
}

let form = document.querySelector('form#contact');
const catPic = document.querySelector('img');

form.addEventListener('submit', handleSubmit);

catPic.addEventListener('mouseover', luckyCat);