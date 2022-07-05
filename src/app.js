window.addEventListener('DOMContentLoaded', getAdvice);

document.querySelector('.advice__btn').addEventListener('click', getAdvice);

function toggleAdvice({ slip: { id, advice } }) {
	document.querySelector('.advice__id span').innerHTML = `${id}`;
	document.querySelector('.advice__text').innerHTML = `${advice}`;
};

async function getAdvice() {
	let res = await fetch('https://api.adviceslip.com/advice');
	let data = await res.json();

	toggleAdvice(data);
};