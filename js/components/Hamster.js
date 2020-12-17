import { Pet } from './Pet.js';

class Hamster extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'cyp cyp';
        // cia su this.sound overridinama main class'e
    }

    introduce() {
        console.log(`'I am too busy to introduce myself!..', - says Hamster ${this.name}.`);
    }
}

export { Hamster }
