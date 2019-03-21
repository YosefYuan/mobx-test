// // method 1
// function  Dog() {}
// function  Animal() {}
// Object.defineProperties(Animal.prototype, {
//   name: {
//     value(){
//       return 'Animal'
//     }
//   },
//   say: {
//     value(){
//       return `I'm ${this.name()}`
//     }
//   }
// })

// Dog.prototype = Object.create(Animal.prototype, {
//   constructor:{
//     value: Dog,
//     enumerable: false
//   },
//   name: {
//     value(){
//       return 'Dog'
//     }
//   }
// });

// document.write(Dog.prototype.constructor);

// ==========================
// method 2

class Animal{
  name(){
    return 'Animal'
  }
  say(){
    console.log(`I'm ${this.name()}`)
  }
};
class Dog extends Animal{
  food = 'Bone'
  name(){
    return 'Animal'
  }
}

console.log(new Dog() instanceof Animal);