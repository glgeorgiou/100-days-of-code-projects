/**
 * https://devdocs.io/javascript/global_objects/object/prototype
 * https://devdocs.io/javascript/classes/constructor
 ** Class.prototype.property = ... .
 * Challenge: Add a numLegs property to the prototype of Dog
 */
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  // Add your code above this line
  let beagle = new Dog("Snoopy");



  /**
   * Iterate Over All Properties.
   * Chellenge: Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.
   */
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Add your code below this line 
  
  for (let property in beagle) {
    if(beagle.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }



/**
 ** instance.constructor = Class. Return true/false.
 * Challenge: Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.
 */
function Dog(name) {
    this.name = name;
  }
  
  // Add your code below this line
  function joinDogFraternity(candidate) {
    if (candidate.constructor==Dog) {
      return true;
    } else {
      return false;
    }
  }
  



  /**
   * Prototype properties in a new object.
   ** Class.prototype = {
   *    property: value,
   *    method: function() {}
   ** }
   * Challenge: Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.
   */
  function Dog(name) {
    this.name = name; 
  }
  
  Dog.prototype = {
    // Add your code below this line
    numLegs: 2,
    eat: function() {},
    describe: function() {}
  };

  //In such a case always define the constructor. That is constructor: ClassName.
  Dog.prototype = {
    constructor: Dog,
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom"); 
    }, 
    describe: function() {
      console.log("My name is " + this.name); 
    }
  };