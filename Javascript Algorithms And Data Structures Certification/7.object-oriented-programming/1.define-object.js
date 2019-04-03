/**
 * Define an object with properties
 */
let dog = {
    name: "spok",
    numLegs: 4
  };


  /**
   * Print object's properties
   */
  let dog = {
    name: "Spot",
    numLegs: 4
  };
  // Add your code below this line
  
  console.log(dog.name, dog.numLegs);


  /**
   * Define object's method
   */
  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
      return  "This dog has "+dog.numLegs+" legs.";}
      /**
       * The us of this keyword.
       * sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
       */
  };
  
  dog.sayLegs();