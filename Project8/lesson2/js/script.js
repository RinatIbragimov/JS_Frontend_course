window.addEventListener('DOMContentLoaded', function () {

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if ( tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function (event) {
		let target = event.target;
		if (target.className == "info-header-tab") {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	})

// Таймер
		let deadline = "2018-10-24";
		function getTimeRemaining(endtime) {
			let t = Date.parse(endtime) - Date.parse(new Date()),
					seconds = Math.floor( (t / 1000) % 60 ),
					minutes = Math.floor( (t/1000/60) % 60 ),
					hours = Math.floor ( (t/(1000*60*60)) );
		return {
			"total": t,
			"hours": hours,
			"minutes": minutes,
			"seconds": seconds,
		};
	};

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');

				function updateClock () {
					let t = getTimeRemaining(endtime);
					hours.innerHTML = t.hours;
					minutes.innerHTML = t.minutes;
					seconds.innerHTML = t.seconds;

					if (t.total <= 0) {
						clearInterval(timeIntereval)
					}
				};

				updateClock ();
				let timeIntereval = setInterval (updateClock, 1000);
	
	};
	setClock("timer", deadline);
});
