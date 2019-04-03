/**
 * https://devdocs.io/javascript/classes/constructor
 * Constructors follow a few conventions:
-Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.

-Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.

-Constructors define properties and behaviors instead of returning a value as other functions might.

Challenge: Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.
 */
function Dog() {
    this.name = "Sky";
    this.color = "poua";
    this.numLegs = 4;
  }


  /**
   * Define an instance of the class.
   * Challenge: Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.
   */
  function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Add your code below this line
  let hound = new Dog();


  /**
   * Pass arguments into constructor.
   * Challenge: Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.
   */
  function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  
  let terrier = new Dog("wolf","white");