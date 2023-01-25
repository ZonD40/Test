const slider = tns({
	container: '.my-slider',
    items: 1,
    slideBy: 1,
    autoplay: false,
	controls: false,
	mouseDrag: true,
	navPosition: 'bottom',
	viewportMax: 400
});

const timerBlock = document.querySelector('.order__timer'),
	  oldPrice = document.querySelector('.order__price-old'),
	  newPrice = document.querySelector('.order__price-new');
let	  minute = 30,
	  second = 0;

const timer = setInterval(() => {
	if (second === 0){
		second = 59;
		minute--;	
	} 
	else second--;
	if (second === 0 && minute === 0) {
		clearInterval(timer);
		oldPrice.classList.add('order__price-old_disable');
		newPrice.classList.add('order__price-new_active');
	}
	if (second < 10) timerBlock.innerHTML = `${minute}:0${second}`;
	else timerBlock.innerHTML = `${minute}:${second}`;
}, 1000)


const telInput = document.querySelector('.order__form__tel');
const regex = /^(0|[1-9]\d*)$/
telInput.addEventListener('input', () => {
	if (!regex.test(telInput.value) || telInput.value.length > 11) {
		telInput.value = telInput.value.slice(0, telInput.value.length - 1);
	}
});

const formBtn = document.querySelector('.order__form__button'),
	  form = document.querySelector('.order__form');

formBtn.addEventListener('click', (e) => {
	if (telInput.value.length === 11) {
		e.preventDefault();
		telInput.classList.remove('order__form__tel_error');
		form.reset();
	} else {
		e.preventDefault();
		telInput.classList.add('order__form__tel_error');
	}
});

