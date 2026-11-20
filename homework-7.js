//3
function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}
showWeather("В Грозном", 25);

//4 
const speedOfLight = 299792458;
function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log("Сверхсветовая скорость");
  } else if (speed < speedOfLight) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}
checkSpeed(100);        
checkSpeed(300000000);  
checkSpeed(299792458);  

//5
const productName = "Телефон";
const productPrice = 500;

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    const missingMoney = productPrice - budget;
    console.log(`Вам не хватает ${missingMoney}$, пополните баланс`);
  }
}
buyProduct(600);
buyProduct(350); 

// 3 переменные 
const hobbyName = "Рисование";
const hoursPerWeek = 5;
const isFun = true;
//1 функция
function showMyHobby() {
  console.log(`Моё хобби — ${hobbyName}. Я трачу на него ${hoursPerWeek} часов в неделю. Это весело: ${isFun}`);
}
showMyHobby();
