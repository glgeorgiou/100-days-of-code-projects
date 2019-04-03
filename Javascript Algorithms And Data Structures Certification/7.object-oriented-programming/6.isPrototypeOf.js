/**
 * https://devdocs.io/javascript/global_objects/object/isprototypeof
 * className.prototype.isPrototypeOf(instance).
 * Challenge: Use isPrototypeOf to check the prototype of beagle.
 */
function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // Add your code below this line
  
  Dog.prototype.isPrototypeOf(beagle);


  /**
   * Object
   *    className
   *        Instance
   * Challenge:Modify the code to show the correct prototype chain.
   */
  function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  // => true
  
  // Fix the code below so that it evaluates to true
  //???.isPrototypeOf(Dog);
  Object.prototype.isPrototypeOf(Dog);
  