const showNextScreen = () => {
	const dc = document,
				arrowBlack = dc.querySelector(".title__link"),
				buttonArrows = dc.querySelector(".button"),
				secondNavigateItem = dc.querySelector(".navigation__item-2"),
				firstWrapper = dc.querySelector(".wrapper"),
				secondWrapper = dc.querySelector(".wrapper__second"),
				navigateToSecond = dc.querySelector(".navigation__item-2");

	// Click event
	// On the second screen
	const goToSecondScreen = (e) => {
		e.preventDefault();
		
		$('.wrapper').hide("slide");
		$('.wrapper__second').show("slide");
	}

	arrowBlack.addEventListener('click', goToSecondScreen);
	buttonArrows.addEventListener('click', goToSecondScreen);
	navigateToSecond.addEventListener('click', goToSecondScreen);
// Key event
	$('.title__link').keypress( (e) => {
		e.preventDefault();

		if (e.which == 13) {
			$('.wrapper').hide("slide");
			$('.wrapper__second').show("slide");
		}
	});
// Return to the second screen
	$(this).keypress( (e) => {
		e.preventDefault();
		
		const inSecondWrap = $('wrapper__second').css('display', 'block');
		if (inSecondWrap) {
			$(this).keypress( (e) => {
				if (e.which == 13) {
					$('.wrapper__second').hide("slide");
					$('.wrapper').show("slide");
				}
			});
		}
	});

}

$(document).ready(() => {
	showNextScreen();
});
