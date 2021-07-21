let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("blogSlides");
  let dots = document.getElementsByClassName("blogSlider__dots--dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/* weather forecast */

const inputValue = document.querySelector(".inputValue");
const submitButton = document.querySelector(".submitButton");
const names = document.querySelector(".name");
const desc = document.querySelector(".desc");
const temp = document.querySelector(".temp");
const icon = document.querySelector('.icon');

window.addEventListener('load', () => {
    const getCitys = () => {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=ce27b58ce285f0299f0de1cb104d4c9c');
    }
    submitButton.addEventListener('click', async () => {
        const { data } = await getCitys();
        console.log(data);
        names.innerHTML = data.name;
        temp.innerHTML = Math.floor(`${data.main.temp}`- 273.15) +" " + "C";
        desc.innerHTML = data.weather[0].description;
        icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    });
});