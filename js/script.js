/* query selectors */
const slideshow = document.querySelector('.slideshow');
const slideshowSlides = document.querySelectorAll('.slideshow__slide');
const buttonDots = document.querySelectorAll('.slideshow__button-dot');
const buttonPrevious = document.querySelector('.slideshow__button-previous');
const buttonNext = document.querySelector('.slideshow__button-next');


/* event listeners */
buttonPrevious.addEventListener('click', handleButtonPreviousClick);
buttonNext.addEventListener('click', handleButtonNextClick);
window.addEventListener('keyup', handleWindowKeyUp);

for (let index = 0; index < buttonDots.length; index += 1) {
	buttonDots[index].addEventListener('click', event => {
		handleButtonDotClick(event,index);
	});
}


/* event handlers */
function handleButtonPreviousClick(event) {
	decreaseCurrentSlideIndex();
	updateSlideshowHTML()
}

function handleButtonNextClick(event) {
	increaseCurrentSlideIndex();
	updateSlideshowHTML()
}

function handleWindowKeyUp(event) {
	if (event.key == 'ArrowRight') {
		increaseCurrentSlideIndex();
		updateSlideshowHTML()
	} else if (event.key === 'ArrowLeft') {
		decreaseCurrentSlideIndex();
		updateSlideshowHTML()
	}
}

function handleButtonDotClick(event, index) {
	changeCurrentSlideIndex(index);
	updateSlideshowHTML();
}

// Variables
let currentSlideIndex = 0;

/* methods */
function decreaseCurrentSlideIndex() {
	if(currentSlideIndex > 0) {
		currentSlideIndex -= 1;
	} else {
		currentSlideIndex = slideshowSlides.length -1;
	};

	console.log(`gå til forrige slide index: ${currentSlideIndex}`) 
}

function increaseCurrentSlideIndex() {
	if(currentSlideIndex < slideshowSlides.length -1) {
		currentSlideIndex += 1;
	} else {
		currentSlideIndex = 0;
	}

	console.log(`gå til neste slide index: ${currentSlideIndex}`)
}

function changeCurrentSlideIndex(index) {
	currentSlideIndex = index;
}

// Hvorfor sier vi slide av slideshowslides, er det en variabel? eller en vi finner på?
function updateSlideshowHTML() {
	for (const slide of slideshowSlides) {
		slide.classList.remove('slideshow__slide--active');
	}

	for (const dot of buttonDots) {
		dot.classList.remove('slideshow__button-dot--active');
	}

	slideshowSlides[currentSlideIndex].classList.add('slideshow__slide--active');
	buttonDots[currentSlideIndex].classList.add('slideshow__button-dot--active');
}

