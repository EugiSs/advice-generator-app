window.onload = getAdvice();

let adviceId = document.querySelector('.advice__id span');
let adviceText = document.querySelector('.advice__text');
let btn = document.querySelector('.advice__btn')

btn.addEventListener('click', getAdvice);

function getAdvice() {
	fetch('https://api.adviceslip.com/advice', {
		cache: "no-cache"
	})
	.then(res => { return res.json() })
	.then(data => {
		adviceId.textContent = data.slip.id;
		adviceText.textContent = data.slip.advice;
	})
};
