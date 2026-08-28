import { products } from './products.js';
function createProductCardTemplate(product) {
  const compositionItems = product.composition
    .map(item => `<li>${item}</li>`)
    .join('');
 return `
    <li class="product-card">
      <img src="${product.img}" alt="${product.alt}" width="250" />
      <span>${product.category}</span>
      <h2>${product.title}</h2>
      <p class="main-text description">${product.description}</p>
      <span class="main-text compound">Состав:</span>
      <ul class="composition-list">
        ${compositionItems}
      </ul>
      <div class="product-price-block">
        <b class="main-text price">Цена:</b>
        <span>${product.price} руб/за шт</span>
      </div>
    </li>
 ` ;
}

const productsListHtml = products.map(product => createProductCardTemplate(product)).join('');
console.log("HTML-код всех карточек по шаблону:", productsListHtml);

const productDescriptionsMap = products.reduce((accumulator, currentProduct) => {
  accumulator[currentProduct.title] = currentProduct.description;
  return accumulator;
}, {});

console.log("Результат работы .reduce():", productDescriptionsMap);

// Функция 1: Запрашивает количество карточек и проверяет ввод 
function getProductsCount() {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = parseInt(userInput, 10);
  
  if (isNaN(count) || count < 1 || count > 5) {
    alert("Ошибка ввода! Пожалуйста, введите число от 1 до 5. Покажем все 5 карточек.");
    return 5; 
  }
  
  return count; 
}

function renderProducts(productsArray) {
  const productsContainer = document.querySelector('.products-list');
  
  if (!productsContainer) {
    console.error("Элемент .products-list не найден в HTML!");
    return;
  }
  
  const htmlContent = productsArray.map(product => createProductCardTemplate(product)).join('');
  
  productsContainer.innerHTML = htmlContent;
}

const countToDisplay = getProductsCount(); // 1. Получаем число
const filteredProducts = products.slice(0, countToDisplay); // 2. Отрезаем нужное количество
renderProducts(filteredProducts); 