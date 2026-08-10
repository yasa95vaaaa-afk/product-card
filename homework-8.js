//3
const personInfo = {
  firstName: "Аиша",
  lastName: "Ясаева",
  email: "yasa95vaaaa@gmail.com",
  company: "ТехноПром",
  position: "Фронтенд-разработчик",
  country: "Россия",
  city: "Грозный"
  };
//4
const carDetails = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "белый",
  transmission: "автомат"
};
carDetails.owner = personInfo;
console.log(carDetails);

//5
function checkMaxSpeed(carObject) {
  
  if (!("maxSpeed" in carObject)) {
  }
}
checkMaxSpeed(carDetails);
console.log("Задание 5 (после проверки скорости):", carDetails);



// Задание 6. Функция для вывода значения свойства
function showPropertyValue(obj, propertyName) {
 console.log(`Значение свойства "${propertyName}":`, obj[propertyName]);
}
showPropertyValue(carDetails, "color");



// Задание 7. Массив с названиями продуктов
const products = ["Молоко", "Хлеб", "Сыр", "Шоколад", "Яблоки"];
console.log(products);



// Задание 8. Массив объектов (Книги)
const booksList = [
  {
    title: "Гордость и предубеждение",
    author: "Джейн Остин",
    year: 1813,
    coverColor: "зеленый",
    genre: "роман"
  },
  {
    title: "Маленький принц",
    author: "Антуан де Сент-Экзюпери",
    year: 1943,
    coverColor: "синий",
    genre: "сказка"
  },
];
//9 Используем известный метод push для добавления книги в конец массива
booksList.push({
  title: "Гарри Поттер и философский камень",
  author: "Джоан Роулинг",
  year: 1997,
  coverColor: "красный",
  genre: "фэнтези"
});
console.log("Задание 8 (Массив книг с добавленной в конец):", booksList);


// Задание 10. Функция с использованием метода map
function markRareBooks(booksArray) {
    const updatedBooks = booksArray.map(function(book) {
        let isBookRare = book.year > 2000; 
        return {
            ...book,         
            isRare: isBookRare 
        };
    });
   return updatedBooks;
}
const rareBooksResult = markRareBooks(booksList);
console.log("Задание 10 (Массив с новым свойством isRare):", rareBooksResult);