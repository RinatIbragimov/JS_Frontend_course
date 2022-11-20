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
		let deadline = "2018-12-30";
		function getTimeRemaining(endtime) {
				let t = Date.parse(endtime) - Date.parse(new Date()),
						seconds, 
						minutes, 
						hours;
				if (t > 0) {
						seconds = Math.floor( (t / 1000) % 60 ),
						minutes = Math.floor( (t/1000/60) % 60 ),
						hours = Math.floor ( (t/(1000*60*60)) );
				} else{
						seconds = 0; 
						minutes = 0; 
						hours = 0;
					}

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
						clearInterval(timeIntereval);
					}
				};

				updateClock ();
				let timeIntereval = setInterval (updateClock, 1000);
	
	};

	setClock("timer", deadline);

// Modal

let more = document.querySelector(".more"),
		overlay = document.querySelector(".overlay"),
		close = document.querySelector(".popup-close");

		more.addEventListener('click', function () {
		this.classList.add("more-splash");
		overlay.style.display = "block";
		document.body.style.overflow = "hidden";
});

close.addEventListener('click', function () {
	overlay.style.display = "none";
	more.classList.remove("more-splash");
	document.body.style.overflow = "";
});	

});	

// Плавная прокрутка
var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
		V = 0.2; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)

		for (var i = 0; i < linkNav.length; i++) {
			linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
				e.preventDefault(); //отменяем стандартное поведение

				var w = window.pageYOffset, // производим прокрутка прокрутка
						hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти

					t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
					start = null;
					requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
					function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash // URL с хэшем
						}
			}
		}, false);
	}