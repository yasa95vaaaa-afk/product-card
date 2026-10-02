const user1 = {
    name: 'Usuf',
    age: 18,
    city: 'Grozniy',
};

const product = {
    name: 'palpe',
    price:70,
    isAvailable: true
};

const user = {
    name:'Amina',
    age: 20,
    city: 'Astana',
    isStudent: true,
    coutry:'Kazahstan'
};
console.log(user.name, user.age,);
    user.age= 21,
console.log(user.age, user.isStudent, user.coutry);

//8
const produkt ={
    name:'Astana',
    price:30000,
    color:'black'
};

console.log(`Phone стоит ${produkt.price}`);
//9
 product.price = 250000;
 //10
 delete produkt.color;
 //11
 const stydent = {
    name:'Dane',
    score: 80,
 };
    if (stydent.score>=60) {
     console.log('зачет');
    } else {
    console.log('Не зачет');
    };
//12
const user2 ={
    name:'Aruzhan',
    age: 17,
}
if(user2.age<=18){
    console.log('Доступ разрешен')
} else{
    console.log('Доступ запрещен')
};
//13
const book ={
    title:'Слово живое и мертвое',
    author:'Nora Gal',
    pages:344,

}
console.log(book.title);
console.log(book.author);
console.log(book.pages);
//14
const car ={
    brand:'Toyota',
    year:2020,
    color:'white',
}
car.year = 2022;
console.log(car)
//3 МАССИВЫ
//15
const products = ['Шампунь','Мыло','Гель для душа'];
console.log(products);
//16
const numbers = [10, 20, 30, 40];
console.log(numbers[0]);
//17
const fruits = ['apple', 'banana','orange'];
console.log(fruits[0],fruits[1],fruits[2]);
//20
     //   green
//21
    //3
//22
const animals = ['cat','dog','rabbit'];
animals[1] = 'fox'
animals.push('horse');
animals.pop(),
animals.unshift('lion'),
animals.shift(),
console.log(animals);
//4 МАССИВ ОБЪЕКТОВ
//27
const users3 = [
    {
        name:'Хадижа',
        age: 21
    },
     {
        name:'Раяна',
        age: 39
    },
     {
        name:'Шаира',
        age: 25
    }
];
console.log(users3)
//28
const users4 = [
    {name: 'Amina', age:20 },
    {name: 'liana', age:21 }
];
console.log(users4[0].name);
console.log(users4[1].age);
//30
const products1 = [
    {name:'Phone', price:30000 },
    {name:'Phone', price:30000 },
    {name:'Phone', price:30000 },
];
console.log(products1[1].price);
products1[0].price = 250000
console.log(products1)
//Часть 5. forEach
//33
const fruts = ['apple','banana','orange']
fruts.forEach((frut) => {
    console.log(frut);
});
//34
const numbers3 = [1,2,3,4,5]
numbers3.forEach((menubar) => {
    console.log(menubar)
})
//35
const names = ['Amina','Dana','Aruzan'];
names.forEach((names) =>{
  console.log('Привет',names)
});
//36
const numbers5 = [2, 4, 6]
numbers5.forEach((number) =>{
    console.log(2*number)
  });
//37
const colors =['reed', 'green','blue']
colors.forEach((color, index) => {
    console.log(`${index} ${color}`)
});
//38
const numbers1 = [10,20,30,40];
numbers.forEach((number, index) => {
 if(index < 2){
    console.log(number)
 } 
});
const fruits1 = ['apple','banana','otrange','mango'];
fruits.forEach((frut, index) =>{
 if(index <= 2) {
    console.log(frut)
 }
});

const prices = [100,250,50,300,75,400]
prices.forEach((pric) =>{
 if(pric >= 100){
    console.log(pric)
 }
}) 
//39
const produkts = [
    {name: 'Phone', price: 300000},
    {name: 'Laptop', price: 500000},
    {name: 'Tablet', price: 200000}
];
produkts.forEach((produkt) => {
  console.log(produkt.name, produkt.price)
});
///6. ForEach + Условие
//41
const numbers4 = [1,5,10,15,20];
numbers4.forEach((number) => {
    if(number >10){
   console.log(number)
    }
});
//42
const ages = [15, 18, 20, 30, 16]
ages.forEach((age) => {
if(age >= 18){
    console.log('Совершеннолетний');
} else {
    console.log('Несовершеннолетний')
}
});
//43
const produkts2 = [
    {name: 'Phone', price: 300000},
    {name: 'Laptop', price: 500000},
    {name: 'Mause', price: 15000}
];
produkts2.forEach((produkt) => {
    if(produkt.price > 100000){
      console.log(produkt);
    }
});
//44
const cards = ['card1','card2','card3','card4']
cards.forEach((car, index) => {
    if(index===0 || index===1) {
       console.log('Первая группа')
    } else {
        console.log('Вторая группа');
    }
});
//Функции
//45
function sayHello (){
    console.log('Hello');
}
sayHello()
//46
function showName (name){
    console.log(name)
}
showName('Aisha')
//47
function sum (a,b){
    console.log(a+b)
}
sum(5, 5)
//48
function multiple (a, b){
    return a*b;
}
console.log (multiple(5, 5))
console.log (multiple(8, 6))
//49
function checkage (age){
    if (age >=21){
        console.log('Можно выйти')
    } else {
        console.log('нельзя')
    }
}
checkage(20)
checkage(50)
//49
function green(name){
    console.log(`Привет ${name}`)
}
green('Aisha')

function green1(name){
    console.log(`Привет ${name}`)
}
green1('Roza')

function green2(name){
    console.log(`Привет ${name}`)
}
green2('Selima')
// 8 Функция + Массив
//51
function showNumber(number) {
  console.log(number);
}
const numbers6 = [1, 2, 3];
numbers6.forEach(showNumber);
//53
function greet (name){
    console.log(`Привет ${name}`);
}
const names6 = ['Amina', 'Dana','Aruzan'] 
    names6.forEach(greet);
//55
const element = document.getElementById('title')
console.log(element)
//56
const btn = document.getElementById('button')
console.log(btn)
//57
const cardTitle = document.querySelector('.text')
console.log(cardTitle)
//58
const guest = document.querySelector('.card:nth-child(2)')
console.log(guest)
//59
const productCards = document.querySelectorAll('.card')
console.log(productCards);
//60
const featureNodes = document.getElementsByClassName('text')
console.log(featureNodes.length)
//61
const title = document.querySelector('#title')
console.log(title)
//62
const actionBtn = document.querySelector('#button')
console.log(actionBtn)
// 10 Сравнение способов поиска
//63
const titleByQuery = document.querySelector('#main-title')
console.log(titleByQuery);

const titleById = document.getElementById('main-title')
console.log(titleById);
//64 
//getElementById - ищет элемент только по Id
//querySelector- ищет все элементы
//65  вернет только первую карту
//66 qurySelectorAll
//67 qurySelectorAll -возврашает все,querySelector-только один указанный
//68 вернет все 3 элемента 
//11 DOM + forEach
//69
const cardElements = document.querySelectorAll('.card')
cardElements.forEach((card) => {
    console.log(card)
});
//70
const cardText = document.querySelectorAll('.card')
cardText.forEach((card) => {
    console.log(card.textContent)
});
//71
const cardList = document.querySelectorAll('.card')
cardList.forEach((card) => {
    card.classList.add('active')
});
//72
const cardItems = document.querySelectorAll('.card')
 cardItems.forEach((card, index) => {
    if(index === 0 || index ===1) {
        card.classList.add('first')
     }else {
        card.classList.add('second')
     }
     console.log(index, card.className)
 });
 //Код ревью
 //74  не хватает запятой
 //75 Лишний индекс.undefined
 const fruits2 = ['apple','banana','orang']
 console.log(fruits2[3]);
 //76 undefined
 //77
 const numberes = [1, 2, 3]
 numberes.forEach ((number) => {
    console.log(number) // не вывели текуший элемент
 });
 //78 const cardus = document.querySelector('.card')
      //cardus.forEach((card) => {
      // console.log(card)
      // });     У одногго метода нет forEach
//79 
const cardus = document.querySelectorAll('.card')
      cardus.forEach((card) => {
       console.log(card)
       });    
//80
const titles = document.getElementById('title')
console.log(title)   //Хэш тег был лишним в title
//81
 const card = document.querySelector('.card')
 console.log(card) // не хватало точки в переменной .card
 //82
 const cardos = document.querySelectorAll('.card')
 cardos.forEach((card, index) => {
    if (index <= 2) {
        card.classList.add('first')
     } else {
        card.classList.add('second')
    }
    console.log(card)
});
//Итоговое
//83
const productCardsy = document.querySelectorAll('.produkts')
productCardsy.forEach((product, index) =>{
    console.log(product.textContent)
    if(index <= 1){
    product.classList.add('product--first');
} else {
    product.classList.add('product--second')
}

});
//84
const productList = [  
    { name: 'Phone', price: 300000 },  
    { name: 'Laptop', price: 500000 },  
    { name: 'Mouse', price: 15000 }
];
productList.forEach((product) =>{
  console.log(product.name, product.price)
   if (product.price > 100000) {
    console.log('Дорого')
   } else {
    console.log('Бюджетный')
   }
});






