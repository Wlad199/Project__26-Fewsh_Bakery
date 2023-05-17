// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Функционал слайдера-слик (MW 3.2)
$(document).ready(function () {
	$('.slider-vertical').slick({
		vertical: true,
		verticalSwiping: true,
		slidesToShow: 1,
	});
})

$(document).ready(function () {
	$('.testimonials__slider').slick({
		slidesToShow: 3,
		dots: true,
		touchThreshold: 10,
		centerMode: true,
		autoplay: true,
		pauseOnDotsHover: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			}, {
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
				}
			},
		],
	});
})