/**
 * @returns {HTMLDivElement}
 * @param selector {string}
 */
const $ = (selector) => document.querySelector(selector);

/**
 * @returns {HTMLDivElement[]}
 * @param selector {string}
 */
const $$ = (selector) => document.querySelectorAll(selector);

const baseConfig = {
  slidesPerView: 'auto',
	speed: 2500,
	loop: true,
  spaceBetween: 3,
	autoplay: {
		delay: 0,
		stopOnLastSlide: false,
		disableOnInteraction: true,
	},

};

const b1 = new Swiper('.vt1', {
  slidesPerView: 'auto',
	speed: 2500,
	loop: true,
  spaceBetween: 3,
	autoplay: {
		delay: 10,
		stopOnLastSlide: false,
		disableOnInteraction: true,
	},
});
const b2 = new Swiper('.vt2', baseConfig);
const b3 = new Swiper('.vt3', baseConfig);
const b4 = new Swiper('.vt4', baseConfig);
const b5 = new Swiper('.vt5', baseConfig);





const dkSlider = new Swiper(".dsList", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".dsList-pagination",
    clickable: true,
  },
});

const dkSlider1 = new Swiper(".dsList1", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000,
  },

});


const adsSlider = new Swiper('.adsSlider', {
	slidesPerView: 1,
	speed: 1,
	loop: true,
	spaceBetween: 0,
  direction: "vertical",
	autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/* $('.slide-container').style.height = innerHeight - 182 - 50 + 'px';


function togglePage() {
  $('.other-page').classList.toggle('show')
} */

function toggleBottomSheet() {
  $('.bottom-sheet').classList.toggle('show');
  $('body').classList.toggle('ovh');
}

const dk = [
  'https://www.7k3bet.com',
  'https://www.8k3bet.com',
  'https://www.9k3bet.com',
]

const g = Math.floor(Math.random() * 3);

$('#dkdl').href = dk[g]

const g1 = Math.floor(Math.random() * 14);
const g2 = Math.floor(Math.random() * 14);
const g3 = Math.floor(Math.random() * 14);

$('#bt1').innerHTML = g1 + 1 + 'ms'
$('#bt2').innerHTML = g2 + 1 + 'ms'
$('#bt3').innerHTML = g3 + 1 + 'ms'