class Drink {
    #temperature;

    constructor(name, size, price, temperature) {
        this.name = name;
        this.size = size;
        this.price = price;
        this.#temperature = temperature;
    }
    #prepare() {
        return `риготовление напитка ${this.name}...`;
    }

    serve() {
        const preparation = this.#prepare();
        return` ${preparation} Напиток ${this.name} успешно подан.`;
    }

    getInfo() {
        return` Название: ${this.name}, Размер: ${this.size}, Цена: ${this.price}`
    }
}

class Coffee extends Drink {
    
    constructor(name, size, price, temperature, beansType, milkType) {
        super(name, size, price, temperature);
        this.beansType = beansType;
        this.milkType = milkType;
    }

    getInfo() {
        return `super.getInfo()}, Сорт зёрен: ${this.beansType}, Молоко: ${this.milkType}`
    }
}

class Tea extends Drink {
    
    constructor(name, size, price, temperature, flavor) {
        super(name, size, price, temperature);
        this.flavor = flavor;
    }

    getInfo() {
        return `{super.getInfo()}, вкус: ${this.flavor}`
    }
}