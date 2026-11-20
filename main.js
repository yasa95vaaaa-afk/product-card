//Покраска всех карточек

const productCards = document.querySelectorAll('.product-card');
const chengeColorAllCardButton = document.querySelector ('#change-color-all-card');
const greenColorHash ='#0afe3f';
const blueColorHash = '#f415c4';


chengeColorAllCardButton.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

//Покраска первой карточки
const firstProductCard = document.querySelector('.product-card');
const chengeColorFirstCardButton = document.querySelector('#change-color-first-card');


chengeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
   });

//Открыть страницу Google

const openGoogleButton = document.querySelector('#open-gogle');
openGoogleButton.addEventListener('click', openGoogle)


function openGoogle () {
    const answer = confirm ('Вы действительно хотите открыть Google');
   if (answer === true) {
   window.open('https://google.com')
   }
}

//Вывод консоль лог

const autputLogButton = document.querySelector('#autput-console-log');

autputLogButton.addEventListener('click', () => autputConsoleLog ('дз №4'))

function autputConsoleLog (message) {
    alert('10')
    console.log(message)
}

