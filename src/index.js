// ======================
//      VARIABLES
// ======================
// veggie = "carrot"
// veggie = "onion"

//
//
// =========================
//      DATA STRUCTURES
// =========================

// animals = ["tiger", "panda", "raccoon"]
// animals.append("opossum")
let animals = ['tiger', 'panda', 'raccoon'];
animals.push('opposum');
console.log(animals);

// dog = {"name": "Sprinkles", "age": 3}
// dog["is_friendly"] = True
let dog = {'name': 'Sprinkles', 'age': 3};
dog['is.friendly'] = true;
console.log(dog);

//
//
// =================
//       LOOPS
// =================

// num = 5
// for i in range(num):
//    print(i)
for (let i = 0; i < 5; i++) {
  console.log(i);
};


// for animal in animals:
//    print(animal)
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
};

for (const animal of animals) {
  console.log(animal);
}

animals.forEach(function(animal) {
  console.log(animal);
});

// for
console.log('Using for/in loop method');
for (const index in animals) {
  console.log(animals[index]);
}

// for k, v in dog.items():
//    print(f"{k}: {v}")
console.log('for Object entries');
for (const [key, value] of Object.entries(dog)) {
  console.log(`${key}: ${value}`);
}
console.log('Using Object.entries forEach method');
Object.entries(dog).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
//
//
// ===================================
//       FUNCTIONS / CONDITIONALS
// ===================================

// def fizzbuzz(num):
//    if num % 3 == 0 and num % 5 == 0:
//        return "fizzbuzz"
//    elif num % 3 == 0:
//        return "fizz"
//    elif num % 5 == 0:
//        return "buzz"
//    else:
//        return num

// Old way: Function Declaration
// function fizzbuzz(num) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     return 'fizzbuzz';
//   } else if (num % 3 === 0) {
//     return 'fizz';
//   } else if (num % 5 === 0) {
//     return 'buzz';
//   } else {
//     return num;
//   }
// };
// console.log(fizzbuzz(1));
// console.log(fizzbuzz(3));
// console.log(fizzbuzz(5));
// console.log(fizzbuzz(15));
//
// ES6 way: Function Expression
const fizzbuzz = function(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
};
console.log('using function expression')
console.log(fizzbuzz(1));
console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));
//
//
// ======================
//       CLASSES
// ======================

// class Animal:
//    def __init__(self,species,name):
//        self.species = species
//        self.name = name
//
//    def __str__(self):
//        return f"{self.name} is a {self.species}"

class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }

  toString() {
    return `${this.name} is a ${this.species}`;
  }
}
// const animal = new Animal('test', 'test-name');
// console.log(animal);
// class Dog(Animal):
//    def __init__(self, name, trick):
//        super().__init__(species="dog", name=name)
//        self.trick = trick
//
//    def __str__(self):
//        return f"{super().__str__()} that can {self.trick}"
class Dog extends Animal {
  constructor(name, trick) {
    super('Dog', name);
    this.trick = trick;
  }
  toString(){
    return `${super.toString()} that can ${this.trick}`;
  }
}

const myDog = new Dog('Max', 'roll-over');
console.log(myDog);
console.log(myDog.toString());

