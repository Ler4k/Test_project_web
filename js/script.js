$('.slider-single').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: false,
	adaptiveHeight: true,
	infinite: true,
   useTransform: true,
   appendArrows:('.prod.slider-single'),
	speed: 400,
	cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav')
	.on('init', function(event, slick) {
		$('.slider-nav .slick-slide.slick-current').addClass('is-active');
	})
	.slick({
		slidesToShow: 7,
		slidesToScroll: 7,
		dots: false,
		focusOnSelect: false,
		infinite: false,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 5,
			}
		}, {
			breakpoint: 640,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
		   }
		}, {
			breakpoint: 420,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
	   }
		}]
	});

$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
	$('.slider-nav').slick('slickGoTo', currentSlide);
	var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
	$('.slider-nav .slick-slide.is-active').removeClass('is-active');
	$(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function(event) {
	event.preventDefault();
	var goToSingleSlide = $(this).data('slick-index');

	$('.slider-single').slick('slickGoTo', goToSingleSlide);
});
$(document).ready(function(){
	$('.slider.f').slick({
		arrows:true,
		slidesToShow:5,
		speed:1000,
		autoplaySpeed:800,
		appendArrows:('.slid_but.f'),
		mobileFirst:true,
		responsive:[
			{
				breakpoint: 1024,
				settings: {
					slidesToShow:5
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 350,
				settings: {
					slidesToShow:2
				}
			}
		]
	});
});
$(document).ready(function(){
	$('.slider.s').slick({
		arrows:true,
		slidesToShow:5,
		speed:1000,
		autoplaySpeed:800,
		appendArrows:('.slid_but.s'),
		mobileFirst:true,
		responsive:[
			{
				breakpoint: 1024,
				settings: {
					slidesToShow:5
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 350,
				settings: {
					slidesToShow:2
				}
			}
		]
	});
});
$(document).ready(function(){
	$('.slider.thi').slick({
		arrows:true,
		slidesToShow:5,
		speed:1000,
		autoplaySpeed:800,
		appendArrows:('.slid_but.thi'),
		mobileFirst:true,
		responsive:[
			{
				breakpoint: 1024,
				settings: {
					slidesToShow:5
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 350,
				settings: {
					slidesToShow:2
				}
			}
		]
	});
});
const fav_buttons_cont = document.querySelectorAll('.fav_ico_c'); // Select all buttons
const cart_but_cont = document.querySelectorAll('.cart_ico_c');

cart_but_cont.forEach(button => {
	button.addEventListener('click',()=>{
		if(button.classList.contains('active')){
		
			button.classList.toggle('active');
		}
		else{
		
			button.classList.toggle('active');
		}
		
	})

});

fav_buttons_cont.forEach(button => {
	button.addEventListener('click',()=>{
		if(button.classList.contains('active')){
			button.style.backgroundImage = "url('/src/fav_ico.png')";
			button.classList.toggle('active');
		}
		else{
			button.style.backgroundImage = "url('/src/fav_ico_a.png')";
			button.classList.toggle('active');
		}
		
	})

});

