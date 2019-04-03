/**
 * Challenge: The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.
 */
function Cat(name) {
    this.name = name; 
  }
  
  Cat.prototype = {
    constructor: Cat, 
  };
  
  function Bear(name) {
    this.name = name; 
  }
  
  Bear.prototype = {
    constructor: Bear, 
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };



  /**
   * Inherit Behaviors from a Supertype.
   * https://devdocs.io/javascript/global_objects/object/create
   ** let instance = Object.create(ObjectName.prototype).
   * Challenge: Use Object.create to make two instances of Animal named duck and beagle.
   */
  function Animal() { }
        Animal.prototype = {
        constructor: Animal, 
        eat: function() {
            console.log("nom nom nom");
        }
};

// Add your code below this line

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom" 



/**
 * Set the Child's Prototype to an Instance of the Parent.
 ** ChildObject = Object.create(ClassParentName);
 * or
 ** ChildObject.prototype = Object.create(ParentObject.prototype);
  * Challenge: Modify the code so that instances of Dog inherit from Animal.
 */
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"



/**
 *  Reset an Inherited Constructor Property.
 ** ChildObject.prototype.constructor = OtherObject.
 * Challenge: Fix the code so duck.constructor and beagle.constructor return their respective constructors.
 */
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();



/**
 * Add Methods After Inheritance.
 ** ChildObject.constructor.methodName = function() {}.
 * Challenge: Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print "Woof!" to the console.
 */
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log("Woof woof!");
}
// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"


/**
 * Override Inherited Methods.
 ** ChildObject.prototype.methodName = function() {...};
 Challenge: Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird." 
 */
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line
Penguin.prototype.fly = function() {
    return "Alas, this is a flightless bird.";
}


// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());