  /**
   * Use class Syntax to Define a Constructor Function. ES6 provides a new syntax to help create objects, using the keyword class.
   */

   /*From */
   var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
  var zeus = new SpaceShuttle('Jupiter');
  /*To */
  class SpaceShuttle {
    constructor(targetPlanet){
      this.targetPlanet = targetPlanet;
    }
  }
  const zeus = new SpaceShuttle('Jupiter');


  
  /*Challenge: Use class keyword and write a proper constructor to create the Vegetable class.*/
  function makeClass() {
    "use strict";
    /* Alter code below this line */
     class Vegetable {
       constructor(Vegetable){
         this.name = Vegetable;
    
       }
     }
    /* Alter code above this line */
    return Vegetable;
  }
  const Vegetable = makeClass();
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // => should be 'carrot'



/**
 * Use getters and setters to Control Access to an Object.
 * Challenge: Use class keyword to create a Thermostat class. The constructor accepts Fahrenheit temperature. 
 * Now create getter and setter in the class, to obtain the temperature in Celsius scale.
Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit scale, and C is the value of the same temperature in Celsius scale
 */
function makeClass() {
  "use strict";
  /* Alter code below this line */
    class Thermostat {
      constructor(fTemp) {
        this.fahTemp = fTemp;
        this.cTemp = 0;
      }

      set celcius(ft) {
        c = 5/9 * (fahTemp - 32);
        this.cTemp = c;
      }

      get celcius() {
        return this.cTemp;
      }

    }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C