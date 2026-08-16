// 2. 
const numbers = [1,2,3,4,5,6,7,8,9,10] ;
const filteredNumbers = numbers.filter(num => num >= 5);
console.log(filteredNumbers); 

//3.
const kitchenAppliances = ['тостер', 'чайник', 'микроволновка', 'блендер'];
const searchItem = 'чайник';
const hasItem = kitchenAppliances.includes(searchItem);
    if (hasItem) {
  console.log(`Да, сущность "${searchItem}" есть в массиве.`);
    } else {
  console.log(`Нет, сущности "${searchItem}" в массиве не обнаружено.`);
}

//4
function reverseArray(arr) {
    arr.reverse(); 
    return arr;
}
const furniture = ["Стол", "Стул", "Диван", "Шкаф"];
    console.log("Было (приборы):", [...kitchenAppliances]);
reverseArray(kitchenAppliances);
    console.log("Стало (приборы):", kitchenAppliances);
    console.log("Было (мебель):", [...furniture]);
reverseArray(furniture);
    console.log("Стало (мебель):", furniture);

