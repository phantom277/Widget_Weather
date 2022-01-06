window.addEventListener('load', async () => {
  const city = '703448';
  const API_KEY = '542361eec4c064b12e9a24ff61c21192';

  fetch(`http://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${API_KEY}&units=metric`)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      const temp = document.querySelector('.title-contant__temp');
      temp.innerHTML = data.main.temp + ' ' + '<sup>o</sup> <span>C</span>';
    })

});
