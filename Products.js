
// 1. Создаем БАЗОВЫЙ (родительский) класс для всех машин
class Vehicle {
    constructor(brand, model, price) {
        this.brand = brand;   
        this.model = model;   
        this.price = price;   
    }

    // Метод, который красиво собирает информацию о машине
    getInfo() {
        return `${this.brand} ${this.model} стоит $${this.price}`;
    }
}
class ElectricCar extends Vehicle {
    constructor(brand, model, price, batteryCapacity) {
        super(brand, model, price); 
        this.batteryCapacity = batteryCapacity; 
    }
    getInfo() {
         return `[Электромобиль] ${super.getInfo()} (Батарея: ${this.batteryCapacity} кВтч)`;
    }
}
const tesla = new ElectricCar("Tesla", "Model Y", 45000, 75);
console.log(tesla.getInfo());
