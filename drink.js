class Drink {
    #temperature;

    constructor(name, size, price, temperature) {
        if (new.target === Drink) {
            throw new Error("Drink — абстрактный класс");
        }

        this.name = name;
        this.size = size;
        this.price = price;
        this.#temperature = temperature;
    }

    getInfo() {
        return` ${this.name}, ${this.size} мл, ${this.price} руб.`;
    }

    getTemperature() {
        return this.#temperature;
    }

    setTemperature(temperature) {
        this.#temperature = temperature;
    }

    #prepare() {
        throw new Error("Метод prepare() должен быть переопределён");
    }

    serve() {
        console.log(`напиток "${this.name}" подан `);

    }
}


class Lemonade extends Drink {
    constructor(name, size, price, temperature, flavor) {
        super(name, size, price, temperature);
        this.flavor = flavor;
    }

    prepare() {
       
 console.log(`Готовим лимонад: ${this.name}`);
        console.log(`Вкус: ${this.flavor}`);
        this.setTemperature(5);
    }

    getInfo() {
        return` ${super.getInfo()}, вкус: ${this.flavor}`;
    }
}


class Tea extends Drink {
    constructor(name, size, price, temperature, teaType) {
        super(name, size, price, temperature);
        this.teaType = teaType;
    }

    prepare() {
         console.log(`Завариваем чай: ${this.name}`);
        console.log(`Сорт чая: ${this.teaType}`);
        this.setTemperature(80);
    }

    getInfo() {
          return `${super.getInfo()}, вкус: ${this.teaType}`;
    }
}


class Coffee extends Drink {
    constructor(name, size, price, temperature, beansType, withMilk) {
        super(name, size, price, temperature);
        this.beansType = beansType;
        this.withMilk = withMilk;
    }

  prepare() {
        console.log(`Готовим кофе: ${this.name}`);
        console.log(`Зёрна: ${this.beansType}`);
        console.log(`Молоко: ${this.withMilk ? "да" : "нет"}`);
        this.setTemperature(70);
    }

    getInfo() {
        return `${super.getInfo()}, зёрна: ${this.beansType}, молоко: ${this.withMilk ? "да" : "нет"}`;
    }
}



class Cocoa extends Drink {
    constructor(name, size, price, temperature, cocoaType) {
        super(name, size, price, temperature);
        this.cocoaType = cocoaType;
    }

    prepare() {
          console.log(`Готовим какао: ${this.name}`);
        console.log(`Какао: ${this.cocoaType}`);
        this.setTemperature(65);
    }

    getInfo() {
         return `${super.getInfo()}, какао: ${this.cocoaType}`;
    }
}


class Cafe {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    getInfo() {
        return` Кафе "${this.name}", адрес: ${this.location}`;
    }

    orderDrink(drink) {
        console.log(`Заказ напитка: ${drink.name}`);

        drink.prepare();

         console.log(`Температура: ${drink.getTemperature()}°C`);

        drink.serve();

        console.log("Заказ выполнен");
    }
}


const lemonade = new Lemonade(
    "Лимонад",
    500,
    150,
    10,
    "Лимон"
);

const tea = new Tea(
    "Чёрный чай",
    300,
    120,
    20,
    "Ассам"
);

const coffee = new Coffee(
    "Капучино",
    300,
    200,
    20,
    "Арабика",
    true
);

const cocoa = new Cocoa(
    "Какао",
    350,
    180,
    20,
    "Натуральное"
);


const cafe = new Cafe(
    "Coffee House",
    "ул. Ленина, 10"
);


console.log(cafe.getInfo());

console.log(lemonade.getInfo());
console.log(tea.getInfo());
console.log(coffee.getInfo());
console.log(cocoa.getInfo());

cafe.orderDrink(coffee);
cafe.orderDrink(tea);
cafe.orderDrink(lemonade);
cafe.orderDrink(cocoa);
