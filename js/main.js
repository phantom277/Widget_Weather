window.addEventListener('load', async () => {
  const city = '710735';
  const API_KEY = 'd73d2e83494348c96b6d5be916099316';

  fetch(`http://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${API_KEY}&units=metric`)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
		const temp = document.querySelector('.title-contant__temp');
		const tempBack = Math.round(data.main.temp);
		 temp.innerHTML = tempBack + ' ' + '<sup>o</sup> <span>C</span>';
		 const pressure = document.querySelector('.title-contant__description-pressure');
		 const pressureBack = data.main.pressure;
		 pressure.innerHTML = `Pressure: ${pressureBack} mb`;
		const precip = document.querySelector('.title-contant__description-precip');
		const precipBack = data.main.humidity;
		precip.innerHTML = `Precip: ${precipBack} mm`;
		 const wind = document.querySelector('.title-contant__description-wind');
		 const windBack = Math.round(data.wind.speed);
		 wind.innerHTML = `Wind: ${windBack} kmph`;
		 const cloudsSite = data.clouds.all;
const clouds = document.querySelector('.title-contant__image');
		 console.log(clouds);
		 let cloudsActive = clouds.children;;
		 if (cloudsSite >= 80) {
			 cloudsActive[0].classList.add("active")
		 } else if (80 > cloudsSite >= 60) {
			cloudsActive[1].classList.add("active")
		 } else if (60 > cloudsSite >= 40) {
			cloudsActive[2].classList.add("active")
		 } else if (40 > cloudsSite >= 20) {
			cloudsActive[3].classList.add("active")
		 } else if (20 > cloudsSite >= 0) {
			cloudsActive[4].classList.add("active")
		 }
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

