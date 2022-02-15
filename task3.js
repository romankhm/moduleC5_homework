btn.addEventListener('click', () => {
	let value = document.querySelector('input').value;
	if (value > 10){
		console.log('Число вне диапазона от 1 до 10');
	}
	else if (1 < value < 10){
		let fullUrl = reqUrl + value;
		useRequest(fullUrl, displayResult);
	};
});

btn.addEventListener('click', (event) => {
event.preventDefault()