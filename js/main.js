/*
objektas:
- parametru rinkinys
- savybiu (funkcionalumo)
 rinkinys
*/

/*
Animal.js (params: name, color, sound; method: voice()
    Pet.js (viska paveldi is Animal.js) -> (params: name, color, sound; methods: voice())
        Dog.js (viska paveldi is Pet)
        Cat.js (viska paveldi is Pet)
        Hamster.js (viska paveldi is Pet) + params: canEatTillDeath()

    Bird.js (viska paveldi is Animal.js) -> (params: name, color, sound, wingCount, canFly; methods: voice())   
        Chicken.js (viska paveldi is Bird.js)
        Parrot.js (viska paveldi is Bird.js)
        Eagle.js (viska paveldi is Bird.js)
        Dragonfly.js (viska paveldi is Bird.js) + params: imposter= true

    Fish.js (viska paveldi is Animal.js) -> (params: name, color, sound, canSwim; methods: voice(), swimAway())
        Goldfish.js viska paveldi is Fish.js + turi unikaliu dalyku(params: grantWishes; methods: makeWish())
        Nemo.js (viska paveldi is Fish.js)

taigi: Animal turi bendrus params ir methods, kuriuos perima jo vaikai, o tie vaikai ir anukai turi dar savo unikaliu params ir methods!
*/
