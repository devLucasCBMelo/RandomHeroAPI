import './style.css';

const API_SUPERHEROES = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';

const button = document.getElementById('btnSorter');
const title = document.getElementById('heroName');
const heroImg = document.getElementById('heroImg');

const getRandomNumber = () => Math.round(Math.random()* 563);

const fetchRandomHeroNameAndImage = () => {
  fetch(API_SUPERHEROES)
  .then((response) => response.json())
  .then((data) => {
    const randomNumber = getRandomNumber();
    const randomHero = data[randomNumber];
    const randomHeroName = randomHero.name;
    title.innerHTML = randomHeroName;

    const randoHeroImg = randomHero.images.lg;
    heroImg.src = randoHeroImg;

  })
  .catch((error) => console.log(error.message));
};

button.addEventListener('click', fetchRandomHeroNameAndImage);