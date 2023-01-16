const swiperGalerry = new Swiper('.swiper-gallery', {
	// Default parameters
	slidesPerView: 1,
	spaceBetween: 30,
	direction: 'horizontal',
	loop: true,
	speed: 1000,
	// grabCursor: true,
	autoplay: {
		speed: 1200,
	},
})


const swiperCustomerReviews = new Swiper('.swiper-reviews', {
	// Default parameters
	slidesPerView: 1,
	spaceBetween: 100,
	direction: 'horizontal',
	loop: true,
	speed: 2000,
	grabCursor: true,
	autoplay: {
		speed: 1500,
	},
	pagination: {
		el: '.swiper-pagination',
	},
})