class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.sound = 'Miau au cyp';
    }

    voice() {
        console.log(`${this.name}: ${this.sound}`);
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I have ${this.color} color. Also, I say: ${this.sound}!`);
    }
}

export { Pet }
