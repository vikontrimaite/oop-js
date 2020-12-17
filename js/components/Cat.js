import { Pet } from './Pet.js';

class Cat extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Miau miau!';
    }
}

export { Cat }
