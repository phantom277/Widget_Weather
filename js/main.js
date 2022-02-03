window.addEventListener('load', async () => {
  const city = '710735';
  const API_KEY = 'd73d2e83494348c96b6d5be916099316';

	function setCloudy(cloudyPercent, elements) {
		switch (cloudyPercent) {
			case cloudyPercent >= 80:
				return elements[0].classList.add("active");
			case cloudyPercent >= 60:
				return elements[1].classList.add("active");
			case cloudyPercent >= 40:
				return elements[2].classList.add("active");
			case cloudyPercent >= 20:
				return elements[3].classList.add("active");
			default:
				return elements[4].classList.add("active")
		}
	}

  fetch(`http://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${API_KEY}&units=metric`)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
			const temp = document.querySelector('.title-contant__temp');
			const pressure = document.querySelector('.title-contant__description-pressure');
			const precip = document.querySelector('.title-contant__description-precip');
			const wind = document.querySelector('.title-contant__description-wind');
			const clouds = document.querySelector('.title-contant__image');

			const tempBack = Math.round(data.main.temp);
			const pressureBack = data.main.pressure;
			const precipBack = data.main.humidity;
			const windBack = Math.round(data.wind.speed);
			const cloudsSite = data.clouds.all;

			temp.innerHTML = tempBack + ' ' + '<sup>o</sup> <span>C</span>';
		  pressure.innerHTML = `Pressure: ${pressureBack} mb`;
			precip.innerHTML = `Precip: ${precipBack} mm`;
			wind.innerHTML = `Wind: ${windBack} kmph`;

			let cloudsActive = clouds.children;
			setCloudy(cloudsSite, cloudsActive);
    })
});



// const menuBurger = document.querySelector('.menu__burger');
// const menuBody = document.querySelector('.menu__body');
// const back = document.querySelector('body');
// const menuList = document.querySelector('.menu__list');

// menuBurger.onclick = function () {
// 	menuBurger.classList.toggle('active');
// 	menuBody.classList.toggle('active');
// 	back.classList.toggle('lock');
// }
// menuBody.onclick = function () {
// 	menuBody.classList.remove('active');
// 	back.classList.toggle('lock')
// }

